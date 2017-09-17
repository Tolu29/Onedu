$(function(){

    wow.init();

  $("body").on('click','.newComplete',function(){
    $("#fisrtLevelNews").addClass('fadeOutUp');
    $('#fisrtLevelNews').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $("#fisrtLevelNews").hide();
      $("#secondLevelNews").removeClass('newsHide');
      $("#secondLevelNews").addClass('fadeInUp');
    });
  });

});

// funciones

wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animated', // default
    offset: 0, // default
    mobile: true, // default
    live: true // default
});
