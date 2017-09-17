$(function(){
// =====================//
  let names = [];
// =====================//

  $.ajax({
    url: "/allUniversities",
    type: "POST",
    headers: {
    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
  })
  .done(function(data){
    $.each(data,function(i){
      $("#universitiesTable").append(
        "<tr class='colorRow1'>" +
          "<td>" + data[i].nombre + "</td>" +
          "<td>" + data[i].calle + " " + data[i].num_ext + "</td>" +
          "<td>" +
            "<button type='button' data-id='" + data[i].id + "' class='btn adminDelBtn btn-sm z-depth-2'>Eliminar</button>" +
            "<button type='button' data-id='" + data[i].id + "' class='btn adminUpdBtn btn-sm z-depth-2'>Editar</button>" +
          "</td>" +
        "</tr>"
      );
    });
  });

  // si  el valor del input(tipo file) cambia autimatiamente le agrega el valor de este a la card que esta en la
  // parte superior del btn escoge un logo
  $("body").on('change', '#uni-logo', function(){
    selectFile($("#uni-logo"), $("#logoPrev"));
  });

  //click para ajax(envio de form registro de universidades)
  $("body").on('click', '.btnSend', function(){
      let formData = new FormData($("#formLogo")[0]);
      formData.append('name', $('#newUniName').val());
      formData.append('color', $('#newUniColor').val());
      formData.append('campus', $('#newUniCampus').val());
      formData.append('street', $('#newUniStreet').val());
      formData.append('numExt', $('#newUniExt').val());
      formData.append('numInt', $('#newUniInt').val());
      formData.append('col', $('#newUniCol').val());
      formData.append('username', $('#newUniUser').val());
      formData.append('password', $('#newUniPass').val());

      $.ajax({
        contentType: false,
        processData: false,
        url: "/saveUni",
        type: "POST",
        data: formData,
        headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
      })
      .done(function(data){
        if (data == "La Universidad se registro con exito") {
          toastr.success('La Universidad se ha actualizado correctamente');
          location.reload();
        }
      });

    });


    $("body").on('click', '.adminDelBtn', function(){
      let data = {
        id: $(this).data("id")
      }
      let trUniversity = $(this).parent().parent();
      $.ajax({
        url: "/deleteUniversity",
        type: "POST",
        data: data,
        headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
      })
      .done(function(data){
        if (data == "La universidad se ha borrado con exito") {
          toastr.success('La universidad se ha borrado con exito');
          trUniversity.remove();
        }
      });
    });



    // funcion click para traer la info de cada universidad(logo,carreras,info)
    $("body").on('click', '.adminUpdBtn', function(){
      $(".btnEditInfo").attr("data-id", $(this).data("id"));
      $(".addCareer").attr("data-id", $(this).data("id"));
      let data = {
        university_id: $(this).data("id")
      }
      $.ajax({
        url: "/universityInfo",
        type: "POST",
        data: data,
        headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
      })
      .done(function(data){
        $(".uniLvl1").addClass('animated fadeOut');
         $('.uniLvl1').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
           $(".uniLvl1").addClass('schoolHide');
           $(".uniLvl2").removeClass('schoolHide');
           $(".uniLvl2").addClass('animated fadeIn');
          //  appends a los div corresponsientes
          $("#infoName").val(data.university[0].nombre);
          $("#infoCampus").val(data.university[0].campus);
          $("#infoColor").val(data.university[0].color);
          $("#infoCalle").val(data.university[0].calle);
          $("#infoColonia").val(data.university[0].colonia);
          $("#infoExt").val(data.university[0].num_ext);
          $("#infoInt").val(data.university[0].num_int);
          $("#infoUser").val(data.university[0].username);
          $("#infoImg").attr('src', '/packages/assets/img/universities/logos/' + data.university[0].logo);
         });

         $.each(data.careersUniversity, function(i){
           $("#tableAssignedUni").append(
             "<tr class='colorRow1'>" +
               "<td>" +data.careersUniversity[i].nombre + "</td>" +
               "<td>" +
                 "<button type='button' data-id='" + data.careersUniversity[i].id + "' data-career='" + data.careersUniversity[i].careerId + "' class='btn btnDelCareer btn-sm z-depth-2'>Eliminar</button>" +
                 "<button type='button' data-id='" + data.careersUniversity[i].careerId + "' class='btn btnAddInfo btn-sm z-depth-2'>Editar</button>" +
               "</td>" +
             "</tr>"
           )
         });

      });

    });


    $("body").on('click', '.btnEditInfo', function(){
      $("#infoColor").addClass("jscolor");
      let disabledArray = ["#infoName", "#infoCampus", "#infoColor", "#infoCalle", "#infoColonia", "#infoExt", "#infoInt", "#infoUser", "#infoPass"]
      $.each(disabledArray, function(i){
        $(disabledArray[i]).removeAttr("disabled");
      });
      $(this).removeClass('btnEditInfo');
      $(this).addClass('btnUpdInfo');
      $(this).text("GUARDAR DATOS");
    });

    $("body").on('change', '#infoInput', function(){
      selectFile($("#infoInput"), $("#infoImg"));
    });


    $("body").on('click', '.btnUpdInfo', function(){
      formData = new FormData($("#infoForm")[0]);
      if ($("#infoInput").val() == null || $("#infoInput").val() == "") {
        formData.append('infoInput', 'no_val108');
      }
      formData.append('id', $(this).data('id'));
      formData.append('name', $("#infoName").val());
      formData.append('campus', $("#infoCampus").val());
      formData.append('color', $("#infoColor").val());
      formData.append('street', $("#infoCalle").val());
      formData.append('numInt', $("#infoInt").val());
      formData.append('numExt', $("#infoExt").val());
      formData.append('col', $("#infoColonia").val());
      formData.append('username', $("#infoUser").val());
      formData.append('password', $("#infoPass").val());

      $.ajax({
        contentType: false,
        processData: false,
        url: "/updateUniversity",
        type: "POST",
        data: formData,
        headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
      })
      .done(function(data){
        if (data == "La Universidad se ha actualizado correctamente") {
          let disabledArray = ["#infoName", "#infoCampus", "#infoColor", "#infoCalle", "#infoColonia", "#infoExt", "#infoInt", "#infoUser", "#infoPass"]
          $.each(disabledArray, function(i){
            $(disabledArray[i]).attr("disabled", true);
          });
          toastr.success('La Universidad se ha actualizado correctamente');
          $(".btnUpdInfo").text("EDITAR DATOS");
          $(".btnUpdInfo").addClass('btnEditInfo');
          $(".btnUpdInfo").removeClass('btnUpdInfo');
        }
      });
    });


    $("body").on('click', '.addCareer', function(){
      let data = {
        id: $(this).data("id")
      }
      $(".saveCareersUni").attr('data-id', $(this).data("id"));
      $.ajax({
        url: "/availableCareers",
        type: "POST",
        data: data,
        headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
      })
      .done(function(data){
        $("#disponibles").empty();
        $("#asignadas").empty();
        if (data.careersAssigned.length == 0) {
          $.each(data.careers, function(i){
            $("#disponibles").append(
                "<div class='form-group'>" +
                "<input type='checkbox' data-name='" + data.careers[i].nombre + "' value='" + data.careers[i].id + "' class='check' id='checkbox" + i + "'>" +
                "<label for='checkbox" + i + "'>" + data.careers[i].nombre + "</label>" +
                "</div>"
            )
          });
        }else {
          $.each(data.careers, function(i){
            let flag = false;
            $.each(data.careersAssigned, function(j){
              if (data.careers[i].id == data.careersAssigned[j].carrera_id) {
                flag = true;
              }
            });
            if (flag) {
              $("#asignadas").append(
                "<div class='assignedCareers'>" +
                  "<i class='fa fa-circle prefix'></i>" +
                    data.careers[i].nombre +
                "</div>"
              )
            }else {
              $("#disponibles").append(
                "<div class='form-group'>" +
                "<input type='checkbox' data-name='" + data.careers[i].nombre + "' value='" + data.careers[i].id + "'  class='check' id='checkbox" + i + "'>" +
                "<label for='checkbox" + i + "'>" + data.careers[i].nombre + "</label>" +
                "</div>"
              )
            }
        });
        }
    });
  });



  $("body").on('click', '.check', function(){
    if (!$(this).hasClass('activeCheck')) {
      $(this).addClass('activeCheck');
    }else {
      $(this).removeClass('activeCheck');
    }
  });


  $("body").on('click', '.saveCareersUni', function(){
    let idCheks = [$(this).data("id")];
    names = [];
    $(".activeCheck").each(function(){
      idCheks.push($(this).val());
      names.push({
        name: $(this).data("name"),
        id: $(this).val(),
        checkId: $(this).parent()
      })
    });

    $.ajax({
      url: "/saveAssignedCar",
      type: "POST",
      data: {idCheks: idCheks},
      headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      }
    })
    .done(function(data){
      if (data == "Las Carreras se han registrado Correctamente") {
        $.each(names, function(i){
          $id = names[i].checkId;
          $id.remove();
          $("#asignadas").append(
            "<div class='assignedCareers'>" +
              "<i class='fa fa-circle prefix'></i>" +
                names[i].name +
            "</div>"
          )

          $("#tableAssignedUni").append(
            "<tr class='colorRow1'>" +
              "<td>" + names[i].name + "</td>" +
              "<td>" +
                "<button type='button' data-id='" + names[i].id + "' class='btn btn-sm z-depth-2 btnDelCareer'>Eliminar</button>" +
                "<button type='button' data-id='" + names[i].id + "' class='btn  btn-sm z-depth-2 btnAddInfo'>Editar</button>" +
              "</td>" +
            "</tr>"
          )
        });
      }
    });
  });


  $("body").on('click', '.btnDelCareer', function(){
    let id = $(this).parent().parent();
    let data = {
      id: $(this).data("id"),
      career_id: $(this).data("career")
    }
    $.ajax({
      url: "/delAssignedCar",
      type: "POST",
      data: data,
      headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      }
    })
    .done(function(data){
      if (data == 'La carrera se ha eliminado correctamente') {
        toastr.success('La carrera se ha eliminado correctamente');
        id.remove();
      }
    });
  });

  $("body").on('click', '.btnAddImgs', function(){
    window.location.href = "/admin-images";
  });


  $("body").on('click', '.btnAddInfo', function(){

    let data = {
      id: $(this).data('id')
    }

    $.ajax({
      url: "/newinfo",
      type: "POST",
      data: data,
      headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      }
    })
    .done(function(data){
      window.location.href = "/information";
    });

  });


// cierre jquery
  });
// cierre jquery


// inicio funciones
function selectFile($input, $prev){
     var exts = new Array(".png", ".jpg", "jpeg", "JPEG", "JPG", "PNG");
     var $file = $input;
     var maxMegas = 2;
     if ($file.val() != ""){
        if(file.validExtension($file.val(), exts)){
           var files = file.validSize($file.attr("id"), maxMegas);
           if (files != null){
              var url = makeBlob($file.attr("id"));
              $($prev).attr("src", url);
           }
           else{
              this.resetImage();
              Curiosity.noty.warning("El archivo excede los "+maxMegas+" MB máximos permitidos", "Demasiado grande");
           }
        }
        else{
           $file.val("");
           Curiosity.noty.info("Selecciona un archivo de imagen valido", "Formato invalido");
        }
     }
  }

function makeBlob($idInput){
      try {
         var files = document.getElementById($idInput).files;
         var browser = window.URL || window.webkitURL;
         var url = browser.createObjectURL(files[0]);
         return url;
      } catch (e) {
         return null;
      }
}

 var file = {
   validExtension : function ($file, $types) {
      extension = ($file.substring($file.lastIndexOf("."))).toLowerCase();
      $available = false;
      for (var i = 0; i < $types.length; i++) {
         if ($types[i] == extension) {
            $available = true;
            break;
         }
      }
      if ($available) {
         return true;
      }else{
         return false;
      }
   },
   validSize : function($idInput, $mb){
      var files = document.getElementById($idInput).files;
      $max = (1024000 * $mb);
      if(files[0].size > $max){
         return null;
      }
      else{
         return files[0];
      }
   }
}


  wow = new WOW({
  boxClass: 'wow', // default
  animateClass: 'animated', // default
  offset: 0, // default
  mobile: true, // default
  live: true // default
  })
  wow.init();
