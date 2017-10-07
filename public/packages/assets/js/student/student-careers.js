$(function(){

  var infoCareer = [], related = [], universities = [];

  wow.init();

  var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var colors = ["#399c5f","#f4c945","#5172a1"];



  addCareers(alphabet,colors);









  // EJECUCION CLICK

  // $("body").on('click','#schoolMap',function(){
  //   $("#thirdLevel1").addClass('fadeOutLeft');
  //   $("#thirdLevel2").addClass('fadeOutLeft');
  //   $("#thirdLevel3").addClass('fadeOutLeft');
  //   $('#thirdLevel1').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
  //     $("#thirdLevel1").hide();
  //     $("#thirdLevel2").hide();
  //     $("#thirdLevel3").hide();
  //     $("#fourthLevel").removeClass('hideCareers');
  //     $("#fourthLevel").addClass('fadeInRight');
  //   });
  // });

  $("body").on('click', '.explanationCont>div>img' ,function(){
    $id = $(this).data('id')
    let single = atrib(universities, "id", $id);
    $(".secondLevel").addClass('fadeOutLeft');
    $('.secondLevel').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(".secondLevel").hide();
      $(".thirdLevel").removeClass('hideCareers');
      $(".logoUni").attr('src', '/packages/assets/img/universities/logos/'+ single[0].logo);
      $(".universityName").text(single[0].nombre);
      $(".universityStreet").text('Calle: '+ single[0].calle);
      $(".universityCol").text('Col. '+ single[0].colonia);
      let data = {
        id: $id
      }
      $.ajax({
        url: "/infoselected",
        type: "POST",
        data: data,
        headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
      })
      .done(function(data){

      });
    });
  });







  // click en la carrera

  $("body").on('click','.infoCareer',function(){
    let data = {
      id: $(this).data('id'),
      group: $(this).data('group')
    }
    $(".fisrtLevel").addClass('fadeOutLeft');
    $('.fisrtLevel').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(".fisrtLevel").hide();
      $(".secondLevel").removeClass('hideCareers');
      $(".secondLevel").addClass('fadeInRight');
      $.ajax({
        url: "/getSelectCareer",
        type: "POST",
        data: data,
        headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
      })
      .done(function(data){
        infoCareer = data.career;
        related = data.related;
        universities = data.universities;
        $(".optDescription").trigger('click');
      });


    });
  });

  // universidades relacionadas
  $("body").on('click', '.optUniversities', function(){
    $(".explanationCont").empty();

    $.each(universities, function(i){
      $(".explanationCont").append(
        "<div class='z-depth-2'>" +
          "<img data-id='" + universities[i].id + "' src='/packages/assets/img/universities/logos/" + universities[i].logo + "'  alt=''>" +
        "</div>"
      );
    });
  });


  // click en descripcion
  $("body").on('click', '.optDescription', function(){
    $(".explanationCont").empty();
    $(".relatedCont").empty();
    $(".explanationCont").append(infoCareer.descripcion);

  });

  // click en prefil
  $("body").on('click', '.optProfile', function(){
    $(".explanationCont").empty();
    $(".relatedCont").empty();
    $(".explanationCont").append(infoCareer.perfil);
  });


  //  click en campo de trabajo
  $("body").on('click', '.optCapm', function(){
    $(".explanationCont").empty();
    $(".relatedCont").empty();
    $(".explanationCont").append(infoCareer.campo_trabajo);
  });


  $("body").on('click', '.optRelated', function(){
    $(".explanationCont").empty();
    $(".relatedCont").empty();
    // esta variable cuenta de 0 a 3 para variar los colores de las carreras(abcedario)
    var cc = 0;
    $.each(alphabet, function(i){

      $(".relatedCont").append(
        "<div class='careerNameRelated" + alphabet[i] + "'>" +
          "<h2 class='colorLetter" + cc + "'>" + alphabet[i] + "</h2>" +
        "</div>"
      )
      let tempParent =  $(".careerNameRelated" + alphabet[i]);
      $.each(related, function(k){
        if (related[k].nombre.substring(0, 1) == alphabet[i]) {
          $('.careerNameRelated'+ alphabet[i]).append("<p class='relatedCareer' data-id='" + related[k].id + "' data-group='" + related[k].grupo + "'>" + related[k].nombre + "</p>")
        }
      });

      if (tempParent.children().length == 1) {
        tempParent.remove();
      }

      $(".colorLetter"+cc).css("color",colors[cc]);
      cc += 1;
      if (cc == 3) {
        cc = 0;
      }

    });

  });


  $("body").on('click', '.relatedCareer', function(){
    let data = {
      id: $(this).data('id'),
      group: $(this).data('group')
    }
    $.ajax({
      url: "/getSelectCareer",
      type: "POST",
      data: data,
      headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      }
    })
    .done(function(data){
      infoCareer = data.career;
      related = data.related;
      $(".optDescription").trigger('click');
    });
  });



  $("body").on('change', '.browser-default', function(){
    let optionVal = JSON.parse($(this).val());
    let data = {
      id: optionVal.id,
      group: optionVal.group
    }

    $.ajax({
      url: "/getSelectCareer",
      type: "POST",
      data: data,
      headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      }
    })
    .done(function(data){
      infoCareer = data.career;
      related = data.related;
      $(".optDescription").trigger('click');
    });
  });


  // cambio de colores
  $("body").on('click','.parentCol>div',function(){
    $(".parentCol>div").css("background-color", "#eaeaea")
    $(".parentCol>div").css("color", "#292b2c")
    $(this).css("background-color", "#399c5f");
    $(this).css("color", "#ffffff");
  });

});


// functions

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
});

function addCareers(alpha,color){

  $.ajax({
    url: "/getCareers",
    type: "POST",
    headers: {
    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
  })
  .done(function(data){
    // esta variable cuenta de 0 a 3 para variar los colores de las carreras(abcedario)
    var cc = 0;
    $.each(alpha,function(index,letter){
      $(".careersCont").append(
        "<div class='careerNameCont " + alpha[index] + "'>" +
          "<h2 class='colorLetter" + cc + "'>" + alpha[index] + "</h2>" +
        "</div>"
      )
      $.each(data, function(i){

        if (data[i].nombre.substr(0, 1) == alpha[index]) {
          let temp = {id: data[i].id, group: data[i].grupo};
          let optionVal = JSON.stringify(temp);
          $(".browser-default").append("<option class='relatedCareer' value='" + optionVal + "'>" + data[i].nombre + "</option>");
          $("." + alpha[index]).append("<p class='infoCareer' data-group='" + data[i].grupo + "' data-id='" + data[i].id + "'>" + data[i].nombre + "</p>");
        }
      });

      $(".colorLetter"+cc).css("color",color[cc]);
      cc += 1;
      if (cc == 3) {
        cc = 0;
      }

    });

  });

}
