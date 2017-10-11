$(function(){
  $(".hideCareers").hide();
  $(".hideCareers").removeClass('hideCareers');

  var infoCareer = [], related = [], universities = [], infosDesc = [];

  wow.init();

  var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var colors = ["#399c5f","#f4c945","#5172a1"];



  addCareers(alphabet,colors);









  // EJECUCION CLICK

  $("body").on('click','#schoolMap',function(){
    $(".thirdLevel").addClass('fadeOutLeft');
    $('.thirdLevel').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(".thirdLevel").hide();
      $(".fourthLevel").removeClass('hideCareers');
      $(".fourthLevel").addClass('fadeInRight');
    });
  });


  // click en la carrera

  $("body").on('click','.infoCareer',function(){

    let data = {
      id: $(this).data('id'),
      group: $(this).data('group')
    }
    $(".fisrtLevel").fadeOut( "slow", function() {
      $(".secondLevel").fadeIn("slow");
    });
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



  $("body").on('click', '.backSecond', function(){
    $(".fisrtLevel").show();
    $(".secondLevel").hide();
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


  // click descripcion universidad

  $("body").on('click', '.explanationCont>div>img' ,function(){
    $id = $(this).data('id')
    let single = atrib(universities, "id", $id);
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
      infosDesc = data;
      addPlan();

      if (data.like != null) {
        $(".likeUni").css('color', '#b53625');
        $(".likeUni").attr('data-active', '1');
      }

      if (data.class_sample != null) {
        addSample();
      }

      $.each(data.info, function(i){
        switch (data.info[i].titulo) {
          case "accreditation":
            addinfo("Acreditación", data.info[i].id);
            break;
          case "admission":
            addinfo("Admición", data.info[i].id);
            break;
          case "extra_activities":
            addinfo("Actividades Extracurriculares", data.info[i].id);
            break;
          case "schedules":
            addinfo("Horarios", data.info[i].id);
            break;
          case "scholarships":
            addinfo("Becas", data.info[i].id);
            break;
        }
      });
      $(".infoSelect").trigger('click');
    });
    $(".secondLevel").fadeOut('slow', function(){
      $(".thirdLevel").fadeIn('slow');
    });
    $(".logoUni").attr('src', '/packages/assets/img/universities/logos/'+ single[0].logo);
    $(".universityName").text(single[0].nombre);
    $(".universityStreet").text('Calle: '+ single[0].calle);
    $(".universityCol").text('Col. '+ single[0].colonia);
  });


  $("body").on('click', '.infoSelect', function(){
    $("#titles").empty();
    $(".contMat").empty();
    $("#contTitle").show();
    $("#contPlans").hide();
    $id = $(this).data('id');
    $name = $(this).data('name');
    let single = atrib(infosDesc.info, "id", $id);
    $("#titles").append("<h2 class='alingH2'>" + $name + "</h2>");
    $(".contMat").append(single[0].descripcion);
  });

  $("body").on('click', '.planInfo', function(){
    $(".contMat").empty();
    $(".namePlans").empty();
    $("#contTitle").hide();
    $("#contPlans").show();
    $.each(infosDesc.plans, function(i){
      $(".namePlans").append("<div class='planselect' data-id='" + infosDesc.plans[i].id + "'>" + infosDesc.plans[i].nombre_plan + "<div>");
    });
  });


  $("body").on('click', '.planselect', function(){
    $(".contMat").empty();
    $id = $(this).data('id');
    let single = atrib(infosDesc.plans, "id", $id);
    $(".contMat").append("<h2 style='text-align:center;'>Materias</h2>");
    $(".contMat").append(single[0].descripcion);
  });



  $("body").on('click', '.schoolOptions>.row>.col-md-4>div', function(){
    $(".schoolOptions>.row>.col-md-4>div").css("background-color", "#7c7c7c")
    $(this).css("background-color", "#6f6f6f");
  });


  $("body").on('click', '.likeUni', function(){
    if ($(this).data('active') == 1) {
      $.ajax({
        url: "/delLike",
        type: "POST",
        headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
      })
      .done(function(){
        $(".likeUni").remove();
        $(".likeZone").append("<i class='fa fa-heart fa-2x likeUni' aria-hidden='true'></i>");
        $(".likeUni").css('color', '#7c7c7c');
      });
    }else {
      $.ajax({
        url: "/likeUniversity",
        type: "POST",
        headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
      })
      .done(function(data){
        $(".likeUni").css('color', '#b53625');
        $(".likeUni").attr('data-active', '1');
      });
    }
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

function addSample(){
  $(".schoolOptions>div").append(
    "<div class='col-md-4 col-sm-4'>" +
      "<div class='sample'>" +
        "<a>Clase Muestra</a>" +
      "</div>" +
    "</div>"
  );
}

function addPlan(){
  $(".schoolOptions>div").append(
    "<div class='col-md-4 col-sm-4'>" +
      "<div class='planInfo'>" +
        "<a>Plan de estudios</a>" +
      "</div>" +
    "</div>"
  );
}

function addinfo(name, id){
  $(".schoolOptions>div").append(
    "<div class='col-md-4 col-sm-4'>" +
      "<div data-name='" + name + "' class='infoSelect' data-id='" + id + "'>" +
        "<a>" + name + "</a>" +
      "</div>" +
    "</div>"
  );
}

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
