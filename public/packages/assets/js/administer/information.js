$(function(){

  // variables globales
  var plans_array = [], infoCounter = 0, syllabusCounter = 0, class_sampleCounter = 0 , plansArray = [], InformationsArray = [], class_sampleArray = [];

// funciones click botones info
  $("body").on('click', '.accreditation', function(){
    let data = {
      title: "Acreditacion"
    }
    infoCounter = 0
    ajaxInfo(data.title, data);
  });


  $("body").on('click', '.syllabus', function(){
    syllabusCounter = 0
    $.ajax({
      url: "/getPlans",
      type: "POST",
      headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      }
    })
    .done(function(data){

      if (data == null || data == undefined || data == "") {
        createPlans();
      }else {
        createPlans();
        plans_array = data;
        $.each(data, function(i){
          tableInfo(data[i].nombre_plan, data[i].id);
        });
      }

    });

  });


  $("body").on('click', '.class_sample', function(){
    class_sampleCounter = 0
    $.ajax({
      url: "/getVideo",
      type: "POST",
      headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      }
    })
    .done(function(data){
      if (data == "" || data == null || data == undefined) {
        createVideoCont("1", "", "");
      } else {
        createVideoCont("0", data.embed, data.nombre);
      }
    });

  });


  $("body").on('click', '.extra_activities', function(){
    let data = {
      title: "Actividades Extra"
    }
    infoCounter = 0
    ajaxInfo(data.title, data);
  });


  $("body").on('click', '.schedules', function(){
    let data = {
      title: "Horarios"
    }
    infoCounter = 0
    ajaxInfo(data.title, data);
  });


  $("body").on('click', '.scholarships', function(){
    let data = {
      title: "Becas"
    }
    infoCounter = 0
    ajaxInfo(data.title, data);
  });


  $("body").on('click', '.admission', function(){
    let data = {
      title: "Admicion"
    }
    infoCounter = 0
    ajaxInfo(data.title, data);
  });

  // funciones extras

  $("body").on('click', '.addPlan', function(){
    $("#titleSP").val("");
    $("#textSP").val("");
    $(".planLvl1").addClass('infoHide');
    $(".planLvl2").removeClass('infoHide');
    $(".btnSavePlan").attr("data-mix", "1");

  });

  // detalles planes
  $("body").on('click', '.btnDetails', function(){
    $(".btnSavePlan").attr("data-mix", "0");
    $(".btnSavePlan").attr("data-id", $(this).data('id'));
    let tempPlan = atrib(plans_array, "id", $(this).data('id'));
    for (var i = 0; i < tempPlan.length; i++) {
      if (tempPlan[i] != undefined || tempPlan[i] != null ) {
        selectPlan = tempPlan[i];
      }
    }
    $("#titleSP").val(selectPlan.nombre_plan);
    $("#textSP").val(selectPlan.descripcion);
    $(".planLvl1").addClass('infoHide');
    $(".planLvl2").removeClass('infoHide');
  });

  $("body").on('click', '.btnBack', function(){
    $(".planLvl1").removeClass('infoHide');
    $(".planLvl2").addClass('infoHide');
  });


    // funcion Cancelar
    $("body").on('click', '.btnCancel', function(){
      $(".syllabus").trigger('click');
    });


    // funcion borrar Plan

    $("body").on('click', '.btnDelete', function(){
      let data = {
        id: $(this).data('id')
      }
      $.ajax({
        url: "/deletePlan",
        type: "POST",
        data: data,
        headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
      })
      .done(function(data){
        if (data == "El plan se ha borrado con exito") {
          toastr.success('El plan se ha borrado con exito');
          $(".syllabus").trigger('click');
        }
      });
    });

  // funcion guardar informaciones

  $("body").on('click', '.btnSavePlan', function(){

    let data = {
      id: $(this).data('id'),
      name: $("#titleSP").val(),
      text: $("#textSP").val(),
      decision: $(this).data("mix")
    }
    if (syllabusCounter>0) {data.decision = 0}
    syllabusCounter += 1;
    $(this).attr('data-mix', '0');
    $.ajax({
      url: "/mixPlans",
      type: "POST",
      data: data,
      headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      }
    })
    .done(function(data){
      if (data == "El plan se ha actualizado correctamente") {
        toastr.success('El plan se ha actualizado correctamente');
        $(".syllabus").trigger('click');

      }else if (data == "El plan se ha guardado correctamente") {
        toastr.success('El plan se ha guardado correctamente');
        $(".syllabus").trigger('click');
      }else {
        toastr.error('Ingresa los datos correctamente');
      }
    });
  });


  $("body").on('click', '.btnSaveInfo', function(){

    var data = {
      title: $("#title").val(),
      text: $("#text").val(),
      decision: $(this).data('mix')
    }
    if (class_sampleCounter>0) {data.decision = 0}
    class_sampleCounter += 1;
    $('.btnSaveInfo').attr('data-mix', '0');
    $.ajax({
      url: "/saveInformation",
      type: "POST",
      data: data,
      headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      }
    })
    .done(function(data){
      if (data == "La informacion se ha guardado correctamente") {
        toastr.success('La informacion se ha guardado correctamente');

      }else if (data == "La informacion se ha actualizado correctamente") {
        toastr.success('La informacion se ha actualizado correctamente');

      }else {
        toastr.error('Ingresa los datos correctamente');
      }
    });
  });


  $("body").on('click', '.btnSaveVid', function(){

    let url = youtubeEmbed.makeCode($("#url").val());
    if (youtubeEmbed.validLink(url)) {
      let data = {
        embed: url,
        name: $("#video_name").val(),
        decision: $(this).data('vidmix')
      }
      if (syllabusCounter>0) {data.decision = 0}
      syllabusCounter += 1;
      $(this).attr('data-mix', '0');
      $.ajax({
        url: "/mixVideo",
        type: "POST",
        data: data,
        headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
      })
      .done(function(data){
        if (data == "El video se ha registrado con exito") {
          toastr.success('El video se ha registrado con exito');

        }else if (data == "Video se ha actualizado con exito") {
          toastr.success('Video se ha actualizado con exito');
        }else {
          toastr.error('Ingresa los datos correctamente');
        }
      });
    }else {
      toastr.error('Ingresa un url de YouTube');
    }

  });

  /*===========================================================================//
  //                                                                           //
  //                                                                           //
  //                                                                           //
  //                             Funciones para preview                        //
  //                                                                           //
  //                                                                           //
  *===========================================================================/*/


  // funciones click del btn preview

  $("body").on('click', '.btnclosePrev', function(){
    $(".preview").addClass('infoHide');
  });

  $("body").on('click', '.btnViewInfo', function(){
    $.ajax({
      url: "/getPreview",
      type: "POST",
      headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      }
    })
    .done(function(data){

      plansArray = data.plans;
      InformationsArray = data.information;
      class_sampleArray = data.class_sample;

      $(".preview").removeClass('infoHide');
      $(".ad-UniInfo>img").attr('src', '/packages/assets/img/universities/logos/' + data.university[0].logo);
      $(".ad-UniInfo>div>h2").text(data.university[0].nombre);
      $("#ad-uniStreet").text(data.university[0].calle);
      $("#ad-uniCol").text(data.university[0].colonia);
      // $("#").text();
      $(".ad-plans>div").empty();
      $(".ad-plans>div").append(
        "<div class='col-md-4'>" +
          "<p id='study_plans'>Plan de estudios</p>" +
        "</div>" +
        "<div class='col-md-4'>" +
          "<p id='sample'>Clase Muestra</p>" +
        "</div>"
      )

      $.each(data.informations, function(i){
        $(".ad-plans>div").append(
          "<div class='col-md-4'>" +
            "<p data-id='" + data.informations[i].id + "' class='infoClass'>" + data.informations[i].titulo + "</p>" +
          "</div>"
        )
      });

    });

  });

  $("body").on('click', '.infoClass', function(){
    $(".ad-block1").empty();
    $(".ad-active").removeClass('ad-active');
    $(this).addClass('ad-active');
    let data = {
      id: $(this).data('id')
    }
    $.ajax({
      url: "/getinfoSelected",
      type: "POST",
      data: data,
      headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      }
    })
    .done(function(data){
      $(".ad-opt-descrip").empty();
      $(".ad-opt-descrip").append("<textarea name='name' rows='8' cols='80' disabled></textarea>")
      $(".ad-opt-descrip>textarea").append(data.descripcion);
    });
  });



  $("body").on('click', '#sample', function(){
    $(".ad-active").removeClass('ad-active');
    $(this).addClass('ad-active');
    $(".ad-opt-descrip").empty();
    $(".ad-block1").empty();
    $(".ad-opt-descrip").append(
      "<div style='padding-left: 9rem;'>" +
        "<iframe width='560' height='315' src='" + class_sampleArray.embed + "' frameborder='0' allowfullscreen></iframe>" +
      "</div>"
    )
  });

  $("body").on('click', '#study_plans', function(){
    $(".ad-active").removeClass('ad-active');
    $(this).addClass('ad-active');
    $(".ad-block1").empty();
    $.each(plansArray, function(i){
      $(".ad-block1").append(
        "<div data-id='" + plansArray[i].id + "' class='planOption'>" +
          "<h4>" + plansArray[i].nombre_plan + "</h4>" +
        "</div>"
      )
    });

  });

  $("body").on('click', '.planOption',  function(){
    $(".ad-active").removeClass('ad-active');
    $(this).addClass('ad-active');
    let data = {
      id: $(this).data('id')
    }
    $.ajax({
      url: "/getPlanPrev",
      type: "POST",
      data: data,
      headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      }
    })
    .done(function(data){
      $(".ad-opt-descrip").empty();
      $(".ad-opt-descrip").append("<textarea name='name' rows='8' cols='80' disabled></textarea>")
      $(".ad-opt-descrip>textarea").append(data.descripcion);
    });
  });










// cierre jquery
});
// cierre jquery


function ajaxInfo($btnName, $jsonData){
  $.ajax({
    url: "/getInformation",
    type: "POST",
    data: $jsonData,
    headers: {
    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
  })
  .done(function(data){
    if (data == "" || data == null || data == undefined) {
      createInfoCont($btnName, "1");
      $("#text").val("descripcion....");
    }else {
      createInfoCont($btnName, "0");
      $("#text").val(data.descripcion);
    }

  });
}

function createInfoCont($title, $decision){

  if($("#infoCont").children().length > 0){
    $("#infoCont").empty();
  }

  $("#infoCont").append(
    "<div class='newInfo animated fadeIn'>" +
      "<div class='text-right'>" +
        "<button class='btn btnViewInfo' type='button'>Ver</button>" +
      "</div>" +
      "<div class='titles md-form z-depth-2'>" +
        "<label for='form1' class=''>titulo</label>" +
        "<input class='input-alternate'  id='title'  type='text' name='' value='" + $title + "' disabled>" +
      "</div>" +
      "<textarea class='z-depth-2' id='text' name='' rows='8' cols='80'></textarea>" +
      "<div class='text-right'>" +
        "<button class='btn btnSaveInfo' data-mix='" + $decision + "' type='button'>GUARDAR</button>" +
      "</div>" +
    "</div>"
  )
}

function createVideoCont($vidMix, $embed, $title){
  if($("#infoCont").children().length > 0){
    $("#infoCont").empty();
  }
  $("#infoCont").append(
    "<div class='titles md-form z-depth-2'>" +
      "<label for='form1' class=''>Nombre del video</label>" +
      "<input class='input-alternate' value='" + $title + "'  id='video_name' type='text'>" +
    "</div>" +

    "<div class='titles md-form z-depth-2'>" +
      "<label for='form1' class=''>Url del la Clase</label>" +
      "<input class='input-alternate' value='" + $embed + "'  id='url' type='text'>" +
    "</div>" +

    "<div class='text-right'>" +
      "<button class='btn btnSaveVid' data-vidmix='" + $vidMix + "' type='button'>GUARDAR</button>" +
    "</div>"
  )
}

function createPlans($mix){
  if ($("#infoCont").children().length > 0) {
    $("#infoCont").empty();
  }
  $("#infoCont").append(

    "<div class='contTable z-depth-2'>" +

      "<div class='text-right planLvl1'>" +
        "<a class='btn-floating peach-gradient addPlan'><i class='fa fa-plus'></i></a>" +
      "</div>" +
      "<table class='table table-striped table-bordered planLvl1'>" +
        "<thead>" +
          "<tr>" +
            "<th class='text-center'>Last Name</th>" +
            "<th class='text-center'>Username</th>" +
          "</tr>" +
        "</thead>" +
        "<tbody id='tBodyCont'>" +
        "</tbody>" +
      "</table>" +

      "<div class='text-left infoHide planLvl2'>" +
        "<button type='button' class='btn btn-sm btnBack'><i class='fa fa-angle-left' aria-hidden='true'></i> Atras</button>" +
      "</div>" +

      "<div class='titlePlan infoHide planLvl2'>" +
        "<label for='form1' class=''>titulo</label>" +
        "<input class='input-alternate'  id='titleSP'  type='text' name='' value=''>" +
      "</div>" +

      "<div class='textPlan infoHide planLvl2'>" +
        "<label for='form1' class=''>Descripcion</label>" +
        "<textarea name='name' id='textSP' rows='8' cols='80'></textarea>" +
      "</div>" +

      "<div class='text-right btnWrap infoHide planLvl2'>" +
        "<button type='button' data-mix='" + $mix + "' class='btn btn-sm btnSavePlan'>Guardar</button>" +
        "<button type='button' class='btn btn-sm btnCancel'>Cancelar</button>" +
      "</div>" +
    "</div>"
  )
}

function tableInfo($planName, $id){
  $("#tBodyCont").append(
    "<tr>" +
      "<td class='text-center'>" + $planName + "</td>" +
      "<td>" +
        "<div class='text-center'>" +
          "<button type='button' data-id='" + $id + "' class='btn btn-sm btnDetails'>Detalles</button>" +
          "<button type='button' data-id='" + $id + "' class='btn btn-sm btnDelete'>Eliminar</button>" +
        "</div>" +
      "</td>" +
    "</tr>"
  )
}

var youtubeEmbed = {
  makeCode : function(url){
    console.log(url);
     var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
     var match = url.match(regExp);
     if (match && match[2].length == 11) {
        return 'https://www.youtube.com/embed/' + match[2] + '?rel=0&amp;showinfo=0';
     }
     else {
        console.error("Error trying to make a codeEmbed");
        return null;
     }
  },
  validLink : function(codeEmbed){
    console.log(codeEmbed);
     if(/^https\:\/\/www\.youtube\.com\/embed\/\S*$/.test(codeEmbed)){
        return true;
     }
     else{
        return false;
     }
  }
}

function atrib(obj,attr,data){
  var response=[];
  $.each(obj,function(index,obj,i){
    if (obj[attr] == data) {
      response[index] = obj;
    }
  });
  return response;
}

wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animated', // default
    offset: 0, // default
    mobile: true, // default
    live: true // default
})
wow.init();
