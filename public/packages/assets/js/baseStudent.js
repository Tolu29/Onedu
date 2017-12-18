$(function(){

  var width = $( window ).width();
  console.log("si entra");
  $.ajax({
    url: "/getIni",
    type: "POST",
    headers: {
    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
  })
  .done(function(data){
    let str = data.nombre_completo;
    let first = str.substr(0,1);
    let temp = str.substr(str.indexOf(' '),str.indexOf(' ')+1);
    let second = temp.substr(1,1);
    let initials = first+second;
    $("#userPhoto").text(initials);
    $("#userPhoto").css('color', 'rgb(57, 156, 95)');
  });

    if (width >= 1320) {
      $('#slide-out').css({"-webkit-transform":"translate(0px)"});
      $('.navbar').css('padding-left', '240px');
      $("#perro>.container").css('padding-left', '240px');
      $(".hideBurguer").hide();
    }

    $(window).on('resize', function(){
      var width = $( window ).width();      
      if (width >= 1320) {
        $('#slide-out').css({"-webkit-transform":"translate(0px)"});
        $('.navbar').css('padding-left', '240px');
        $("#perro>.container").css('padding-left', '240px');
        $(".hideBurguer").hide();
      }else if (width < 1320) {
        $("#perro>.container").css('padding-left', '0px');
        $('.navbar').css('padding-left', '0px');
        $(".hideBurguer").show();
      }

  });


});
