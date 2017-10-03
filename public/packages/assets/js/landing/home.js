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

  $("body").on('change', '#citiesSelect', function(){
    $id = $(this).find(':selected').data('id');
    let schools = atrib(high_Schools,"ciudad_id",$id);
    $("#formRegist").append(
      "<div class='regInputCont'>" +
        "<div class='landRegFa'><i class='fa fa-university adjustFa text-white' aria-hidden='true'></i></div>" +
        "<select class='browser-default LandRegInp' id='schoolsSelect'>" +
        "<option value='' disabled selected>Escoge una preparatoria</option>" +
        "</select>" +
      "</div>"
    );
    $.each(schools, function(i){
      $("#schoolsSelect").append("<option value=''>" + schools[i].nombre + "</option>")
    });

  });


  wow.init();
  new WOW().init();

  $("body").on('click', '.btnReg', function(){

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
        regPassDup: {required: "Confirma tu  contraseña por favor", equalTo: "Ingresa el mismo valor por favor"}
      }
    });
    if ($("#formRegist").valid()){

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
      let BreakException = {};
      $.each($("[id*=-error]"),function(i){
        if ($($("[id*=-error]")[i]) && $($("[id*=-error]")[i]).text() != "") {
          toastr.error($($("[id*=-error]")[i]).text());
          throw BreakException;
        }
      });
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


  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 3000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
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
