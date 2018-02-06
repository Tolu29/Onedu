$(function(){

  $("body").on('click', '#btnSend', function(){
    $("#formRestart").validate({
       rules : {
          password1 : {required: true},
          password2 : {equalTo: "#password1",required: true}
       },
       messages: {
        password1: {required: "Ingresa una contraseña"},
        password2: {required: "Confirma tu  contraseña por favor", equalTo: "Al parecer no son los mismos caracteres"}
      }
    });
    if ($("#formRestart").valid()){
      let data = {token: $(this).data('token'), password: $("#password1").val()}
      $.ajax({
        url: "/restartPassword",
        type: "POST",
        data: data,
        headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
      })
      .done(function(data){
        if (data == "La contraseña se ha guardado con exito") {
          swal("Excelente!", "Tu contraseña se ha actualizad con exito!", "success");
          window.location.href = '/';
        }
      });
    }else {
      let BreakException = {};
      $.each($("[id*=-error]"),function(i){
        if ($($("[id*=-error]")[i]) && $($("[id*=-error]")[i]).text() != "") {
          toastr.error($($("[id*=-error]")[i]).text());
          throw BreakException;
        }
      });
    }
  });

});
