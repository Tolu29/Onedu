$(function(){

  $("body").on('click', '.btnSend', function(e){
    e.preventDefault();
    $("#formforget").validate({
       rules : {
          inputSend : {required: true,email: true}
       },
       messages: {
        inputSend: {required: "Ingresa tu mail por favor", email: "Por favor ingresa un correo valido"},
      }
    });
    if ($("#formforget").valid()){

      let data = {mail: $("#inputMail").val()}

      $.ajax({
        url: "/findMail",
        type: "POST",
        data: data,
        headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
      })
      .done(function(data){
        if (data == 'el mail se ha enviado') {
          swal("Exelente!", "Te hemos enviado un correo, Sigue las instrucciones para cambiar tu contraseña!", "success")
        }else {
          swal("Hay un problema!", "Al parecer el correo que ingresaste no esta registrado!", "warning")
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
