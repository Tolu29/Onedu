$(function(){
    var object = {
      messages: [],
      getMessages: function(){
        $.ajax({
          url: "/get-messages",
          type: "POST",
          headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
          }
        }).done(function(response){
          console.log(response);
          object.messages = response.data;
          faillContentWithMessages();
        }).fail(function(fail){
          console.log(fail);
        });
      },
      getMessagesInterval: function(){
        setInterval(getMessages,5000);
      },
      faillContentWithMessages:function(){
        var htmlMessages = "";
        $.each(object.messages,function(message){
          color = (messaage.rol == "student" ) ? "userMessages" : "universityMessages";
          htmlMessages +=
            '<div class="col-md-11 '+color+'">'+
              '<p>'+message.mensaje+'</p>'+
            '</div>';
        });
        $("#content-messages").html(htmlMessages);
      },
      sendMessage:function(mensaje){
        data = {mensaje:mensaje};
        $.ajax({
          url: "/get-messages",
          type: "POST",
          headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
          },
          data:data
        }).done(function(response){
          console.log(response);
        }).fail(function(fail){
          console.error(fail);
        });
      }
    }

    $("#btn-send").click(function(event){
      var message = $("#message").val();
      if(message!==""){
        object.sendMessage(message);
      }
    });
});
