$(function(){

  $("body").on('click', '.BtnExit', function(){

    $.ajax({
      url:"/logOut",
      type: "POST",
      headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      }
    })
    .done(function(data){
      if (data == "Hasta pronto") {
        toastr.success("!No tardes en regresar :)!");
        window.location.href  = "/";
      }
    });

  });

  // SideNav init
  $(".button-collapse").sideNav();

  // Custom scrollbar init
  var el = document.querySelector('.custom-scrollbar');
  Ps.initialize(el);
});
