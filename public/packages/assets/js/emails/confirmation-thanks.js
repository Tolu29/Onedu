$(function(){

  $("body").on('click', '.btnEnter', function(){
    $.ajax({
      url: "/emailEnter",
      type: "POST",
      headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      }
    })
    .done(function(data){
      window.location.href = '/student-careers';
    });

  });

});
