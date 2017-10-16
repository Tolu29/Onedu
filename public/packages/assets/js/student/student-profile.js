$(function(){

  wow.init();



// botones ejeciciones

// click university img
$("body").on('click','.contUni',function(){
  $("#firstLevelSprofile2").addClass('fadeOutUp');
});

// click informacion Btn
  $("body").on('click','.info', function(){
    $(".jumbotron>div").css("background-color", "#eaeaea");
    $(".jumbotron>div").css("color", "#393939");

    $(this).css("background-color", "#399c5f");
    $(this).css("color", "#ffffff");

    $(".contProfile").empty();
    createForm();
  });
// click favoritos Btn
  $("body").on('click','.fav',function(){
    $(".jumbotron>div").css("background-color", "#eaeaea");
    $(".jumbotron>div").css("color", "#393939");

    $(this).css("background-color", "#399c5f");
    $(this).css("color", "#ffffff");
    $(".contProfile").empty();
    infoUni();
  });



});
 
function createForm(){
  $(".contProfile").html(`<h1 class="waitingInfo">Cargando Información...</h1>`);
  $.ajax({
    url: '/getInfoStudent',
    method: 'POST',
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
  })
  .done(function(res){
    $(".contProfile").html(
      "<div class='row'>" +
        "<div class='col-md-8 offset-md-1'><br><br>" +
          "<div class='md-form'>" +
            "<input type='text' id='pname' class='form-control pinput' name='pname'>" +
            "<label for='pname' class=''>(*) Nombre</label>" +
          "</div>" +
        "</div>" +
        "<div class='col-md-3'>" +
          "<button class='btn btnProf btnProf-edit' type='button' name='button' data-for='pname'>Editar</button>" +
        "</div>" +

        "<div class='col-md-8 offset-md-1'>" +
          "<div class='md-form'>" +
            "<input type='text' id='pemail' class='form-control pinput' name='pemail'>" +
            "<label for='pemail' class=''>(*) Correo Electrónico</label>" +
          "</div>" +
        "</div>" +
        "<div class='col-md-3'>" +
          "<button class='btn btnProf btnProf-edit' type='button' name='button' data-for='pemail'>Editar</button>" +
        "</div>" +

        "<div class='col-md-8 offset-md-1'>" +
          "<div class='md-form'>" +
            "<input type='password' id='ppass' class='form-control pinput' name='ppass'>" +
            "<label for='ppass' class=''>Cambiar Contraseña</label>" +
          "</div>" +
        "</div>" +
        "<div class='col-md-3'>" +
          "<button class='btn btnProf btnProf-edit' type='button' name='button' data-for='ppass'>Editar</button>" +
        "</div>" +
      "</div>"
    );
    $("body").find('#pname').val(res.nombre_completo);
    $("body").find('#pemail').val(res.mail);
    $("body").find('label').trigger('click');
    $("body").find('.form-control').prop('disabled', true);
  })
  .fail(function(err){
    alert('Ha ocurrido un error al obtener la información');
    console.log(err);
  });

}

function infoUni(){
  $(".contProfile").append(
    "<div class='row'>" +

      "<div class='col-md-12'>"  +
        "<div class='z-depth-2 contUni contUniFirst'>"  +
          "<img src='/packages/assets/img/students/studentPrueba.jpg' alt=''>"  +
        "</div>"  +

        "<div class='z-depth-2 contUni'>"  +
          "<img src='/packages/assets/img/students/studentPrueba.jpg' alt=''>"  +
        "</div>"  +

        "<div class='z-depth-2 contUni'>"  +
          "<img src='/packages/assets/img/students/studentPrueba.jpg' alt=''>" +
        "</div>" +

        "<div class='z-depth-2 contUni'>" +
          "<img src='/packages/assets/img/students/studentPrueba.jpg' alt=''>" +
        "</div>" +

        "<div class='z-depth-2 contUni'>" +
          "<img src='/packages/assets/img/students/studentPrueba.jpg' alt=''>" +
        "</div>" +

        "<div class='z-depth-2 contUni contUniFirst'>" +
          "<img src='/packages/assets/img/students/studentPrueba.jpg' alt=''>" +
        "</div>" +

        "<div class='z-depth-2 contUni'>" +
          "<img src='/packages/assets/img/students/studentPrueba.jpg' alt=''>" +
        "</div>" +
      "</div>" +

    "</div>"
  )
}

wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animated', // default
    offset: 0, // default
    mobile: true, // default
    live: true // default
});

$(function(){
  $("body").find('.info').trigger('click');

  $("body").on('click', '.btnProf-edit', function(){
    $this = $(this);
    $this.removeClass('btnProf-edit');
    $this.addClass('btnProf-edit-save');
    $this.text("Guardar");
    $("body").find(`#${$this.data('for')}`).prop('disabled', false);
    $('body').find(".btnProf-edit").prop('disabled', true).removeClass('btnProf-edit');
  });

  $("body").on('click', '.btnProf-edit-save', function(){
    $this = $(this);
    $this.prop('disabled', true);
    $this.text('...');
    var pname = $("body").find('#pname').val();
    var pemail = $("body").find('#pemail').val();
    var ppass = ($("body").find('#ppass').val().trim() == "") ? "" : $("body").find('#ppass').val();
    if (pname.trim() != "" && pemail.trim() != ""){
      $.ajax({
        url: '/updateProfile',
        method: 'POST',
        headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        data: {
          nombre    : pname,
          email     : pemail,
          password  : ppass
        }
      })
      .done(function(res){
        if (res != "success"){
          alert(res);
          $this.prop('disabled', false);
          $this.text('Guardar');
        }
        else{
          $this.removeClass('btnProf-edit-save');
          $this.text("Editar");
          $("body").find('.form-control').prop('disabled', true);
          $('body').find(".btnProf").prop('disabled', false).addClass('btnProf-edit');
          $("body").find('#ppass').val("");
        }
      })
      .fail(function(err){
        $this.prop('disabled', false);
        $this.text('Guardar');
      });
    }
    else {
      alert('No puedes dejar campos vacios con la marca (*)');
    }
  });

});
