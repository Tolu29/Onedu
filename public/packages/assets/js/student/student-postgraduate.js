$(function(){

  $(".hideRelated").hide();
  $(".hideRelated").removeClass('hideRelated');

  var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var colors = ["#399c5f","#f4c945","#5172a1"];
  var universities = [], infoCareer = [], infosDesc = [];

  addCareers(alphabet,colors);


  $("body").on('click', '.backCont', function(){
    switch (backLevel) {
      case 2:
        $(".secondLevel").fadeOut('slow', function(){
          $(".fisrtLevel").fadeIn('slow', function(){
            backLevel = 1;
          });
        });
        break;
      case 3:
        $(".thirdLevel").fadeOut('slow', function(){
          $(".secondLevel").fadeIn('slow', function(){
            backLevel = 2;
          });
        });
        break;
      case 4:
        $(".fourthLevel").fadeOut('slow', function(){
          $(".thirdLevel").fadeIn('slow', function(){
            backLevel = 3;
          });
        });
        break;
    }
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
      $("#currentCarrer").text("Posgrado actual: "+data.career.nombre)
      infoCareer = data.career;
      related = data.related;
      universities = data.universities;
      $(".optDescription").trigger('click');
    });
  });


  $("body").on('click','.infoCareer',function(){
    backLevel = 2;
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
      $("#currentCarrer").text("Posgrado Actual: "+data.career.nombre);
      infoCareer = data.career;
      related = data.related;
      universities = data.universities;
      $(".optDescription").trigger('click');
    });

  });


  $("body").on('click', '.contDesc', function(){
    $option = $(this).data('opt');
    $(".contDesc").css('background-color', '#eaeaea');
    $(".contDesc").css('color', '#292b2c');
    $(this).css("background-color", "#399c5f");
    $(this).css("color", "#ffffff");
    $(".explanationCont").empty();
    $(".relatedCont").empty();
    switch ($option) {
      case "optUniversities":
        $.each(universities, function(i){
          $(".explanationCont").append(
            "<div class='z-depth-2'>" +
              "<img data-id='" + universities[i].id + "' src='/packages/assets/img/universities/logos/" + universities[i].logo + "'  alt=''>" +
            "</div>"
          );
        });
        break;
      case "optDescription":
        $(".explanationCont").append(infoCareer.descripcion);
        break;
      case "optProfile":
        $(".explanationCont").append(infoCareer.perfil);
        break;
      case "optRelated":
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
        break;
      case "optCapm":
        $(".explanationCont").empty();
        $(".relatedCont").empty();
        $(".explanationCont").append(infoCareer.campo_trabajo);
        break;
    }
  });


  $("body").on('click', '.explanationCont>div>img' ,function(){
    $id = $(this).data('id');
    backLevel = 3;
    let single = atrib(universities, "id", $id);
    uniActive = atrib(universities, "id", $id);
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
      $(".schoolOptions>div").empty();
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
            addinfo("Admisión", data.info[i].id);
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
      $(".planInfo").trigger('click');
    });
    $(".secondLevel").fadeOut('slow', function(){
      $(".thirdLevel").fadeIn('slow');
    });
    $(".logoUni").attr('src', '/packages/assets/img/universities/logos/'+ single[0].logo);
    $(".universityName").text(single[0].nombre);
    $(".universityStreet").text('Calle: '+ single[0].calle);
    $(".universityCol").text('Col. '+ single[0].colonia);
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



// jquery
});
// jquery



// functions
function addCareers(alpha,color){

  $.ajax({
    url: "/getPostCareers",
    type: "POST",
    headers: {
    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
  })
  .done(function(data){

    // esta variable cuenta de 0 a 3 para variar los colores de las carreras(abcedario)
    var cc = 0;
    $.each(alpha,function(index,letter){
      $(".careers_related").append(
        "<div class='careerNameCont " + alpha[index] + "'>" +
          "<h2 class='colorLetter" + cc + "'>" + alpha[index] + "</h2>" +
        "</div>"
      )

      $.each(data.careers, function(i){
        if (data.careers[i].nombre.substr(0, 1) == alpha[index]) {
          let temp = {id: data.careers[i].id, group: data.careers[i].grupo};
          let optionVal = JSON.stringify(temp);
          $(".browser-default").append("<option class='relatedCareer' value='" + optionVal + "'>" + data.careers[i].nombre + "</option>");
          $("." + alpha[index]).append("<p class='infoCareer' data-group='" + data.careers[i].grupo + "' data-id='" + data.careers[i].id + "'>" + data.careers[i].nombre + "</p>");
        }
      });

      let sinLetter = $("."+alpha[index]);

      if (sinLetter.children().length == 1) {
        sinLetter.remove();
      }
      $(".colorLetter"+cc).css("color",color[cc]);
      cc += 1;
      if (cc == 3) {
        cc = 0;
      }

    });

  });

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
