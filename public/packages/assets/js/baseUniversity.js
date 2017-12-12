$(function(){
  $.ajax({
    url: "/imgUni",
    type: "POST",
    headers: {
    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
  })
  .done(function(data){
    $("#userPhoto").attr('src', '/packages/assets/img/universities/logos/' + data.logo);
  });
});
