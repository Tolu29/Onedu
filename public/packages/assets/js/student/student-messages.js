$(function(){
   function getMensajes(){
     object.messages.push({mensaje: "prueba",rol:"stuedent"});
     pushMoreMessages();
   }

   function pushMoreMessages(){
     setInterval(function(){
       var  number = Math.floor(Math.random() * (2 - 0)) + 1;
       rol = (number == 1)?  "student" : "admin";
       object.messages.push({mensaje: "Loe et dolore magno laboriolor in reprehenderit in volunulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"+number, rol:rol});
       object.faillContentWithMessages();
     },5000);
   }

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
        $.each(object.messages,function(index,message){
          color = (message.rol == "student" ) ? "userMessages" : "universityMessages";
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
    getMensajes();
});
