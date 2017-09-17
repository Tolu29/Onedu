$(function () {

  wow.init();
  new WOW().init();

  $("#regPass").focus(function(){
    $("#regPass").val("");
  });

  $("#regPassDup").focus(function(){
    $("#regPassDup").val("");
  });



  $("body").on('click', '.btnReg', function(){

    if ($("#regPass").val() == $("#regPassDup").val()) {

      let name = $("#nameReg").val().substr(0, $("#nameReg").val().indexOf(' '));
      let surname =  $("#nameReg").val().substr($("#nameReg").val().indexOf(' ')+1);

      let data = {
        name: name,
        surname: surname,
        pass: $("#regPass").val(),
        mail: $("#mailReg").val(),
        school: $("#regSchool").val()
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
            break;
          case "Se ha registrado con exito":
            toastr.success("Se ha registrado con exito");
            window.location.href = "/student-careers"
            break;
          case "El mail ya existe":
            toastr.warning("El mail ya existe");
            break;
          default:
            toastr.info("No sabemos que ha pasado recarga la pagina porfavor");
        }
      });
    }else {
      toastr.error("Las contraseñas no coinciden");
    }

  });


  $("body").on('click', '.btnEnter', function(){

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
          toastr.success("Yeah, Bienvenido");
          window.location.href  = "/schools";
          break;
        case "student":
          toastr.success("Yeah, Bienvenido");
          window.location.href  = "/student-careers";
          break;
        case "universidad":
          toastr.success("Yeah, Bienvenido");
          window.location.href  = "/publications";
          break;
        default:
          toastr.error("Parece que ha habido un error con tu mail o contraseña");
      }
      if (data == "el usuario inicio sesion correctamente") {
        toastr.success("Yeah, Bienvenido");

      } else {

      }
    });
  });


  $("body").on('click', '.btnModEnter', function(){
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
      window.location.href  = "/student-guide";
    });

  });




});


wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animated', // default
    offset: 0, // default
    mobile: true, // default
    live: true // default
})
