$(function(){

  var $chat =  $(".messagesCont"), messages = [], universidades = [], id_chat, newMessages = [], idSchools = [];

  $.ajax({
    url: "/allMessages",
    type: "POST",
    headers: {
    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
  }).done(function(response){
    messages = response.mensajes;
    universidades = response.universidades;
    id_chat = response.chat_id;
    if (messages == null || messages == "" || messages == undefined) {
      $("#content-messages").html(`<h1 class="waitingInfo">No hay chats abiertos</h1>`);
      $(".messagesCont").css('width', '97%');
    }else {
      if (id_chat == null || id_chat == "" || id_chat == undefined) {
        fillUniCards(universidades, messages);
        $(".chatRoom:first-child").trigger('click');
      }
      getMessagesInterval(messages, idSchools);
    }
  });

  $("body").on('click', '.chatRoom', function(){
    $id = $(this).data('id');
    $("#content-messages").empty();
    var schoolMessages = atrib(messages, "id", $id);
    faillContentWithMessages(schoolMessages);
    $chat.scrollTop(($chat.height() + 2000));
  });


  $("body").on('click', '#btn-send', function(){
    var message = $("#message").val();
    if(message!==""){
      sendMessage(message);
    }
  });


});

function notifications(messages, idSchools){
  $.ajax({
    url: "/notification",
    type: "POST",
    headers: {
    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
  })
  .done(function(data){
    if (data == "" || data == null || data == undefined) {
      return ;
    }else {
      $.each(data, function(i,k){
        var bnd = false;
        var index = undefined;
        $.each(messages, function(j){
          if (messages[j].chat_id == data[i].chat_id) {
            bnd = true;
            index = k;
          }
        });
        if (bnd == true) {
          idSchools.push(index.id);
          messages.push(index);
        }
      });
      if (idSchools.length > 0) {
        $.each(idSchools, function(i){
          $('*[data-id="' + idSchools[i] + '"]>span').addClass('newMsg');
        });
      }
    }
  });

}


function sendMessage(mensaje){
  data = {mensaje:mensaje};
  $.ajax({
    url: "/messageSend",
    type: "POST",
    headers: {
    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    },
    data:data
  }).done(function(response){
    $("#message").val('');
  });
}

function faillContentWithMessages(messages){
  var htmlMessages = "";
  $.each(messages,function(indice,message){
    color = (message.role == "estudiante" ) ? "userMessages" : "universityMessages";
    htmlMessages +=
      '<div class="col-md-11 '+color+'">'+
        '<p>'+message.mensaje+'</p>'+
      '</div>';
  });
  $("#content-messages").html(htmlMessages);
}

function getMessagesInterval(messages,idSchools){
  setInterval(function(){ notifications(messages, idSchools);}, 5000);
}

function atrib(obj,attr,data){
  var response=[];
  $.each(obj,function(index,obj,i){
    if (obj[attr] == data) {
      response.push(obj);
    }
  });
  return response;
}

function fillUniCards(universidades, messages){
  $.each(universidades, function(i){
    var schoolMessages = atrib(messages, "id", universidades[i].id);
    if (schoolMessages.length > 0) {
      $(".universidadesCard").append(
        "<div class='chatRoom' data-id='" + universidades[i].id + "'>" +
          "<img src='/packages/assets/img/universities/logos/" + universidades[i].logo + "' class='float-right img-fluid' alt=''>" +
          "<p>" + universidades[i].nombre + "</p>" +
          '<span class="sp-alert"></span>' +
        "</div>"
      )
    }
  });
}
