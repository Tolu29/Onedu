$(function(){

  var width = $( window ).width();
  if (width >= 1320) {
    $('#slide-out').css({"-webkit-transform":"translate(0px)"});
    $('.navbar').css('padding-left', '240px');
    $("#perro>.container").css('padding-left', '240px');
  }

  $(window).on('resize', function(){
    var width = $( window ).width();
    if (width >= 1320) {
      $('#slide-out').css({"-webkit-transform":"translate(0px)"});
      $('.navbar').css('padding-left', '240px');
      $("#perro>.container").css('padding-left', '240px');
    }else if (width < 1320) {
      $("#perro>.container").css('padding-left', '0px');
      $('.navbar').css('padding-left', '0px');
    }

  });

});
