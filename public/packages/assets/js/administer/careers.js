$(function(){
  var infoArray = [], nameCard = 1 , updInfo = [], newInfo = [];

  $.ajax({
    url: "/allCareers",
    type: "POST",
    headers: {
    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
  })
  .done(function(data){
    $.each(data,function(i){
      $("#tableCareers").append(
        "<tr class='colorRow1'>" +
          "<td>" + data[i].nombre + "</td>" +
          "<td>" + data[i].nivel_educativo + "</td>" +
          "<td>" +
            "<button type='button' data-id='" + data[i].id + "' class='btn adminDelBtn btnDelCareer btn-sm z-depth-2'>Eliminar</button>" +
            "<button type='button' data-id='" + data[i].id + "' class='btn btnUpd adminUpdBtn btn-sm z-depth-2' data-toggle='modal' data-target='#modalUpd'>Editar</button>" +
          "</td>" +
        "</tr>"
      )

    });

  });


  $("body").on('click', '.btnmodalReg', function(){
    $(".careerLvl2").removeClass('careerHide');
    $(".careerLvl1").addClass('careerHide');
    createInfo();
    $("[name='1']").css("background-color", "#5172a1");
  });

  $("body").on('click', '.next', function(){
    if (nameCard >= 5) {
      infoArray.push($("#textInfo").val());
      $(".next").remove();
      $(".btnSave").append("<button type='button' class='btn z-depth-2 btnRegCareer'>Guardar</button>");
    }else {
      infoArray.push($("#textInfo").val());
      createInfo();
      nameCard += 1;
      $(".cardColor").css("background-color", "#d5d2d2")
      $("[name=" + nameCard + "]").css("background-color", "#5172a1");
    }
  });



  $("body").on('click', '.btnRegCareer', function(){

    let data = {
      career: infoArray[0],
      level: infoArray[1],
      description: infoArray[2],
      profile: infoArray[3],
      group: infoArray[4]
    }

    $.ajax({
      url: "/saveCareer",
      type: "POST",
      data: data,
      headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      }
    })
    .done(function(data){
      if (data == "La carrera se ha registrado con exito") {
        toastr.success('La carrera se ha borrado con exito');
        window.location.reload();
      }else {
        toastr.error('Ingresa los datos correctamente');
      }
    });

  });

  $("body").on('click', '.btnUpd', function(){
    $(".careerLvl2").removeClass('careerHide');
    $(".careerLvl1").addClass('careerHide');
    let id = $(this).data('id')
    let data = {
      id: id
    }
    $.ajax({
      url: "/infoCareer",
      type: "POST",
      data: data,
      headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      }
    })
    .done(function(data){
      newInfo = [id];
      $i = 1
      $.each(data, function(i){
        updInfo[$i] = data[i];
        $i += 1;
      });
      $("[name='1']").css("background-color", "#5172a1");
      nameCard = 1;
      createInfoUpd();
      $("#textInfoUpd").text(updInfo[1]);
    });
  });


  $("body").on('click', '.nextUpd', function(){
    if (nameCard >= 5) {
      newInfo.push($("#textInfoUpd").val());
      $(".nextUpd").remove();
      $(".btnSave").append("<button type='button' class='btn z-depth-2 btnUpdCareer'>Guardar</button>");
    }else {
      newInfo.push($("#textInfoUpd").val());
      nameCard += 1;
      createInfoUpd();
      $("#textInfoUpd").text(updInfo[nameCard]);
      $(".cardColor").css("background-color", "#d5d2d2")
      $("[name=" + nameCard + "]").css("background-color", "#5172a1");
    }
  });


  $("body").on('click', '.btnUpdCareer', function(){

    let data = {
      career: newInfo[1],
      level: newInfo[2],
      description: newInfo[3],
      profile: newInfo[4],
      group: newInfo[5],
      id: newInfo[0]
    }

    $.ajax({
      url: "/updateCareer",
      type: "POST",
      data: data,
      headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      }
    })
    .done(function(data){
      if(data == "La carrera se actualizo correctamente"){
        toastr.success('La carrera se actualizo correctamente');
        window.location.reload();
      }else {
        toastr.error('Ingresa los datos correctamente');
      }
    });
  });


  $("body").on('click', '.btnDelCareer', function(){
    let trParent = $(this).parent().parent();
    let data = {
      id: $(this).data('id')
    }
    $.ajax({
      url: "/deleteCareer",
      type: "POST",
      data: data,
      headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      }
    })
    .done(function(data){
      if (data == "La carrera se ha borrado con exito") {
        toastr.success('La carrera se ha borrado con exito');
        trParent.remove();
      }else {
        toastr.error('No se puede borrar intentalo mas tarde');
      }
    });
  });



});

function createInfo(){
  $(".infoCareerCont").empty();
  $(".btnSave").empty();
  $(".infoCareerCont").append(
    "<div class='md-form text-center'>" +
      "<textarea id='textInfo' rows='8' cols='80' placeholder='Escribe aqui la descripcion....'></textarea>" +
    "</div>"
  )
  $(".btnSave").append("<button type='button' class='btn z-depth-2 next'>Siguiente</button>");
}

function createInfoUpd(){
  $(".infoCareerCont").empty();
  $(".btnSave").empty();
  $(".infoCareerCont").append(
    "<div class='md-form text-center'>" +
      "<textarea id='textInfoUpd' rows='8' cols='80' placeholder='Escribe aqui la descripcion....'></textarea>" +
    "</div>"
  )
  $(".btnSave").append("<button type='button' class='btn z-depth-2 nextUpd'>Siguiente</button>");
}
