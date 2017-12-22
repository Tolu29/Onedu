$(function () {

  var high_Schools, cities;

  $.ajax({
    url: "/highSchools",
    type: "POST",
    headers: {
    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
  })
  .done(function(data){
    high_Schools = data.high_Schools;
    $.each(data.cities, function(i){
      $("#citiesSelect").append(
        "<option data-id='" + data.cities[i].id + "' value='1'>" + data.cities[i].nombre + "</option>"
      );
    });

  });

  $("body").on('click', '#ONEDU', function(){
    window.location.href = '/'
  });

  $("body").on('change', '#citiesSelect', function(){
    $id = $(this).find(':selected').data('id');
    let schools = atrib(high_Schools,"ciudad_id",$id);
    $("#contCities").append(
      "<div class='landRegFa' style='text-align: center; box-sizing: border-box;padding-top: .6rem;'><i class='fa fa-university adjustFa text-white' aria-hidden='true'></i></div>" +
        "<select class='browser-default LandRegInp form-control' id='schoolsSelect' style='background-color: #ffffff;'>" +
        "<option value='' disabled selected>Escoge una preparatoria</option>" +
      "</select>"
    );
    $.each(schools, function(i){
      $("#schoolsSelect").append("<option value='" + schools[i].nombre + "'>" + schools[i].nombre + "</option>")
    });

  });


  wow.init();
  new WOW().init();

  $("body").on('click', '.btnReg', function(e){

    $("#formRegist").validate({
       rules : {
          nameReg : {required: true},
          mailReg : {required: true,email: true},
          regPass : {required: true},
          regPassDup : {equalTo: "#regPass",required: true},
          regSchool : {required: true}
       },
       messages: {
        nameReg: {required: "Ingresa tu nombre por favor"},
        mailReg: {required: "Ingresa tu mail por favor", email: "Por favor ingresa un correo valido"},
        regPass: {required: "Ingresa tu contraseña por favor"},
        regPassDup: {required: "Confirma tu  contraseña por favor", equalTo: "Al parecer no son los mismos caracteres"}
      }
    });
    if ($("#formRegist").valid()){
        if (!$('#checkbox110').is(":checked")) {
          toastr.error("Acepta TERMINOS Y CONDICIONES para continuar");
          return ;
        }
        let school = $("#schoolsSelect").val();
        if (school == null || school == undefined || school == "") {
          school = "Sin establecer";
        }
        let data = {
          name: $("#nameReg").val(),
          pass: $("#regPass").val(),
          mail: $("#mailReg").val(),
          school: school
        }

        $.ajax({
          url: "/signIn",
          type: "POST",
          data: data,
          headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
          }
        })
        .done(function(data){
          switch (data) {
            case "Ingresa los datos Correctamente":
              toastr.error("Ingresa los datos Correctamente");
              e.preventDefault();
              break;
            case "Se ha registrado con exito":
              swal({
                title: "Te haz registrado con exito!",
                text: "!",
                icon: "success",
                button: "Aceptar!",
              })
              .then((value) => {
                window.location.href = '/student-news'
              });
              e.preventDefault();
              break;
            case "El mail ya existe":
              toastr.warning("El mail ya existe");
              e.preventDefault();
              break;
            default:
              toastr.info("No sabemos que ha pasado recarga la pagina porfavor");
          }
        });

    }else {
      let BreakException = {};
      $.each($("[id*=-error]"),function(i){
        if ($($("[id*=-error]")[i]) && $($("[id*=-error]")[i]).text() != "") {
          toastr.error($($("[id*=-error]")[i]).text());
          throw BreakException;
        }
      });
    }

  });


  $("body").on('click', '.btnEnter', function(e){

    $("#formEnter").validate({
       rules : {
          logMail : {required: true},
          logPass : {required: true}
       },
       messages: {
        logMail: {required: "Ingresa tu mail para continuar"},
        logPass: {required: "Ingresa tu contraseña para continuar"}
      }
    });

    if ($("#formEnter").valid()){
      let data = {
        mail: $("#logMail").val(),
        pass: $("#logPass").val()
      }

      $.ajax({
        url: "/logIn",
        type: "POST",
        data: data,
        headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
      })
      .done(function(data){
        switch (data) {
          case "admin":
            toastr.success("¡Éxito!, bienvenido");
            window.location.href  = "/schools";
            break;
          case "student":
            toastr.success("¡Éxito!, bienvenido");
            window.location.href  = "/student-news";
            break;
          case "universidad":
            toastr.success("¡Éxito!, bienvenido");
            window.location.href  = "/publications";
            break;
          case "Correo sin Confirmacion":
            toastr.warning("Porfavor confirma tu correo para poder acceder");
            break;
          default:
            e.preventDefault();
            toastr.error("Parece que ha habido un error con tu mail o contraseña");
        }
        if (data == "el usuario inicio sesion correctamente") {
          toastr.success("¡Éxito!, bienvenido");

        }
      });
    }else {
      let BreakException = {};
      $.each($("[id*=-error]"),function(i){
        if ($($("[id*=-error]")[i]) && $($("[id*=-error]")[i]).text() != "") {
          toastr.error($($("[id*=-error]")[i]).text());
          throw BreakException;
        }
      });
    }


  });


  $(document).keypress(function(e) {
    if(e.which == 13) {
      if ($("#logPass").is(":focus")) {
        $("#formEnter").validate({
           rules : {
              logMail : {required: true},
              logPass : {required: true}
           },
           messages: {
            logMail: {required: "Ingresa tu mail para continuar"},
            logPass: {required: "Ingresa tu contraseña para continuar"}
          }
        });

        if ($("#formEnter").valid()){
          let data = {
            mail: $("#logMail").val(),
            pass: $("#logPass").val()
          }

          $.ajax({
            url: "/logIn",
            type: "POST",
            data: data,
            headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
          })
          .done(function(data){

            switch (data) {
              case "admin":
                toastr.success("¡Éxito!, bienvenido");
                window.location.href  = "/schools";
                break;
              case "student":
                toastr.success("¡Éxito!, bienvenido");
                window.location.href  = "/student-news";
                break;
              case "universidad":
                toastr.success("¡Éxito!, bienvenido");
                window.location.href  = "/publications";
                break;
              case "Correo sin Confirmacion":
                toastr.warning("Porfavor confirma tu correo para poder acceder");
                break;
              default:
                e.preventDefault();
                toastr.error("Parece que ha habido un error con tu mail o contraseña");
            }
            if (data == "el usuario inicio sesion correctamente") {
              toastr.success("¡Éxito!, bienvenido");

            }
          });
        }else {
          let BreakException = {};
          $.each($("[id*=-error]"),function(i){
            if ($($("[id*=-error]")[i]) && $($("[id*=-error]")[i]).text() != "") {
              toastr.error($($("[id*=-error]")[i]).text());
              throw BreakException;
            }
          });
        }
      }
    }
});


  $("body").on('click', '.btnModEnter', function(){

    $("#formModalEnter").validate({
       rules : {
          modMail : {required: true},
          modPass : {required: true}
       },
       messages: {
        modMail: {required: "Ingresa tu mail para continuar"},
        modPass: {required: "Ingresa tu contraseña para continuar"}
      }
    });

    if ($("#formModalEnter").valid()){
      let data = {
        mail: $("#modMail").val(),
        pass: $("#modPass").val()
      }

      $.ajax({
        url: "/logIn",
        type: "POST",
        data: data,
        headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
      })
      .done(function(data){

        switch (data) {
          case "admin":
            toastr.success("¡Éxito!, bienvenido");
            window.location.href  = "/schools";
            break;
          case "student":
            toastr.success("¡Éxito!, bienvenido");
            window.location.href  = "/student-news";
            break;
          case "universidad":
            toastr.success("¡Éxito!, bienvenido");
            window.location.href  = "/publications";
            break;
          case "Correo sin Confirmacion":
            toastr.warning("Porfavor confirma tu correo para poder acceder");
            break;
          default:
            // e.preventDefault();
            toastr.error("Parece que ha habido un error con tu mail o contraseña");
        }
        if (data == "el usuario inicio sesion correctamente") {
          toastr.success("¡Éxito!, bienvenido");

        }
      });
    }else {
      let BreakException = {};
      $.each($("[id*=-error]"),function(i){
        if ($($("[id*=-error]")[i]) && $($("[id*=-error]")[i]).text() != "") {
          toastr.error($($("[id*=-error]")[i]).text());
          throw BreakException;
        }
      });
    }

  });



  $("body").on('click', '#modalRegister', function(){
    $("#closeModal").trigger('click');
    setTimeout(function(){ window.location.href = '#section-5'; }, 500);
  });





});


function atrib(obj,attr,data){
  var response=[];
  $.each(obj,function(index,obj,i){
    if (obj[attr] == data) {
      response.push(obj);
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
