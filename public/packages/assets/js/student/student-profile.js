$(function(){

  wow.init();



// botones ejeciciones

// click university img
$("body").on('click','.contUni',function(){
  $("#firstLevelSprofile2").addClass('fadeOutUp');
});

// click informacion Btn
  $("body").on('click','.info',function(){
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
  $(".contProfile").append(
    "<div class='row'>" +
      "<div class='col-md-8 offset-md-1'>" +
        "<div class='md-form'>" +
          "<input type='text' id='form1' class='form-control'>" +
          "<label for='form1' class=''>Nombre</label>" +
        "</div>" +
      "</div>" +
      "<div class='col-md-3'>" +
        "<button class='btn btnProf' type='button' name='button'>Editar</button>" +
      "</div>" +

      "<div class='col-md-8 offset-md-1'>" +
        "<div class='md-form'>" +
          "<input type='text' id='form1' class='form-control'>" +
          "<label for='form1' class=''>Correo Electronico</label>" +
        "</div>" +
      "</div>" +
      "<div class='col-md-3'>" +
        "<button class='btn btnProf' type='button' name='button'>Editar</button>" +
      "</div>" +

      "<div class='col-md-8 offset-md-1'>" +
        "<div class='md-form'>" +
          "<input type='text' id='form1' class='form-control'>" +
          "<label for='form1' class=''>Contrasena</label>" +
        "</div>" +
      "</div>" +
      "<div class='col-md-3'>" +
        "<button class='btn btnProf' type='button' name='button'>Editar</button>" +
      "</div>" +

    "</div>"
  );

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
})
