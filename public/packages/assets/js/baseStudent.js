$(function(){
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
});
