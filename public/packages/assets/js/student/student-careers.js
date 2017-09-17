$(function(){

  wow.init();

  var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var colors = ["#399c5f","#f4c945","#5172a1"];



  addCareers(alphabet,colors);









  // EJECUCION CLICK

  $("body").on('click','#schoolMap',function(){
    $("#thirdLevel1").addClass('fadeOutLeft');
    $("#thirdLevel2").addClass('fadeOutLeft');
    $("#thirdLevel3").addClass('fadeOutLeft');
    $('#thirdLevel1').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $("#thirdLevel1").hide();
      $("#thirdLevel2").hide();
      $("#thirdLevel3").hide();
      $("#fourthLevel").removeClass('hideCareers');
      $("#fourthLevel").addClass('fadeInRight');
    });
  });

  $("body").on('click','.explanationCont>div>img',function(){
    // $("#secondLevel1").removeClass('fadeInRight');
    // $("#secondLevel2").removeClass('fadeInRight');
    // $("#secondLevel3").removeClass('fadeInRight');
    // $("#secondLevel1").removeClass('animated');
    // $("#secondLevel2").removeClass('animated');
    // $("#secondLevel3").removeClass('animated');
    $("#secondLevel1").addClass('fadeOutLeft');
    $("#secondLevel2").addClass('fadeOutLeft');
    $("#secondLevel3").addClass('fadeOutLeft');
    $('#secondLevel1').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $("#secondLevel1").hide();
      $("#secondLevel2").hide();
      $("#secondLevel3").hide();
      $("#thirdLevel1").removeClass('hideCareers');
      $("#thirdLevel2").removeClass('hideCareers');
      $("#thirdLevel3").removeClass('hideCareers');
    });
  });

  $("body").on('click', '.optDescription', function(){
    $(".explanationCont").empty();
    $(".explanationCont").append(
      "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>" +
      "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"
    );
  });

  $("body").on('click', '.optUniversities', function(){
    $(".explanationCont").empty();
    for (var i = 0; i < 5; i++) {
      $(".explanationCont").append(
        "<div class='z-depth-2'>" +
          "<img src='/packages/assets/img/students/studentPrueba.jpg' alt=''>" +
        "</div>"
      );
    }
  });

  $("body").on('click','.perro',function(){
    $("#fisrtLevel").addClass('fadeOutLeft');
    $('#fisrtLevel').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $("#fisrtLevel").hide();
      $(".optDescription").trigger('click')
      $("#secondLevel1").removeClass('hideCareers');
      $("#secondLevel2").removeClass('hideCareers');
      $("#secondLevel3").removeClass('hideCareers');
      $("#secondLevel1").addClass('fadeInRight');
      $("#secondLevel2").addClass('fadeInRight');
      $("#secondLevel3").addClass('fadeInRight');
    });
  });

  $("body").on('click','.parentCol>div',function(){
    $(".parentCol>div").css("background-color", "#eaeaea")
    $(".parentCol>div").css("color", "#292b2c")
    $(this).css("background-color", "#399c5f");
    $(this).css("color", "#ffffff");
  });

});


// functions

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
    var cc = 0;
    $.each(alpha,function(index,letter){
      $(".careersCont").append(
        "<div class='careerNameCont'>" +
          "<h2 class='colorLetter" + cc + "'>" + alpha[index] + "</h2>" +
        "</div>"
      )
      $.each(data, function(i){
        $(".careerNameCont").append("<p class='perro'>" + data[i].nombre + "</p>")
      });

      $(".colorLetter"+cc).css("color",color[cc]);
      cc += 1;
      if (cc == 3) {
        cc = 0;
      }

    });
  });

}
