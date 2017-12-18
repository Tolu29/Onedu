$(function(){

  $("body").on('click', '.btnSend', function(){
    $("#formforget").validate({
       rules : {
          inputSend : {required: true,email: true}
       },
       messages: {
        inputSend: {required: "Ingresa tu mail por favor", email: "Por favor ingresa un correo valido"},
      }
    });
    if ($("#formforget").valid()){

      let data = {}

      $.ajax({
        url: "/",
        type: "POST",
        data: data,
        headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
      })
      .done(function(data){

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
