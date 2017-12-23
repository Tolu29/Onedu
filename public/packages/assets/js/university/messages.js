$(function(){

  var $chat = $("#content-messages"), messages = [], universidades = [], id_chat, newMessages = [], idSchools = [], universidad_id;

  $.ajax({
    url: "/UniallMessages",
    type: "POST",
    headers: {
    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
  }).done(function(response){
    messages = response.mensajes;
    if (messages == null || messages == "" || messages == undefined) {
      $("#content-messages").html(`<h1 class="waitingInfo">No hay chats abiertos</h1>`);
      $(".textInput").remove();
      $(".messagesCont").css('width', '97%');
    }else {
      fillUniCards(universidades, messages);
      $(".chatRoom:first-child").trigger('click');
      getMessagesInterval(messages, idSchools,universidad_id);
    }
  });

  $("body").on('click', '.chatRoom', function(){
    universidad_id = $(this).data('id');
    let single = $(this);
    $(".chatRoom").removeClass('activeCard');
    single.addClass('activeCard');
    single.children('span').removeClass('newMsg');
    $id = $(this).data('id');
    $("#content-messages").empty();
    var schoolMessages = atrib(messages, "universidad_id", $id);
    faillContentWithMessages(schoolMessages);
    $chat.scrollTop(($chat.height() + 2000));
  });


  $("body").on('click', '#btn-send', function(){

    if ($("#btn-send").hasClass('disabledBtn')) {
      return ;
    }

    var message = $("#message").val();
    if(message!==""){
      $("#btn-send").removeClass('activeBtn');
      $("#btn-send").addClass('disabledBtn');
      sendMessage(message,universidad_id,messages);
    }
  });

// cierre jquery
});

function notifications(messages, idSchools, universidad_id){
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
      $.each(data, function(i){
        var single = atrib(messages, 'id', data[i].id);
        if (single == null) {
          idSchools.push(data[i].id);
          messages.push(data[i]);
          if (data[i].universidad_id == universidad_id) {
            $('#content-messages').append(
              '<div class="col-md-11 universityMessages">'+
                '<p>'+data[i].mensaje+'</p>'+
              '</div>'
            );
          }
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


function sendMessage(message,uni_id,obj){
  data = {mensaje:message, universidad_id: uni_id};
  $.ajax({
    url: "/messageSend",
    type: "POST",
    data:data,
    headers: {
    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
  }).done(function(response){
    if (response.estatus == "el mensaje se ha guardado correctamente") {
      color = (response.message.role == "estudiante" ) ? "userMessages" : "universityMessages";
      $("#content-messages").append(
        '<div class="col-md-11 '+color+'">'+
          '<p>'+response.message.mensaje+'</p>'+
        '</div>'
      );
      let single = {
        id: response.message.id,
        mensaje: response.message.mensaje,
        role: response.message.role,
        universidad_id: response.message.universidad_id,
        user_id: response.message.user_id
      }
      obj.push(single)
      $("#message").val('');
      $("#btn-send").removeClass('disabledBtn');
      $("#btn-send").addClass('activeBtn');
    }
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

function getMessagesInterval(messages,idSchools,universidad_id){
  setInterval(function(){ notifications(messages, idSchools,universidad_id);}, 5000);
}

function atrib(obj,attr,data){
  var response=[];
  $.each(obj,function(index,obj,i){
    if (obj[attr] == data) {
      response.push(obj);
    }
  });
  if (response == "" || response == null || response == undefined) {
    return null
  }
  return response;
}

function fillUniCards(universidades, messages){
  $.each(universidades, function(i){
    var schoolMessages = atrib(messages, "universidad_id", universidades[i].id);
    if (schoolMessages != null) {
      $(".universidadesCard").append(
        "<div class='chatRoom' data-id='" + universidades[i].id + "'>" +
          "<img src='/packages/assets/img/universities/logos/" + universidades[i].logo + "' class='float-right img-fluid' alt=''>" +
          "<p>" + universidades[i].nombre + "</p>" +
          '<span class="sp-alert"></span>' +
        "</div>"
      );
    }
  });
}

function makeUniCard($id, $universidades){
    var school = atrib($universidades, "id", $id);
    $(".universidadesCard").append(
      "<div class='chatRoom' data-id='" + school[0].id + "'>" +
        "<img src='/packages/assets/img/universities/logos/" + school[0].logo + "' class='float-right img-fluid' alt=''>" +
        "<p>" + school[0].nombre + "</p>" +
        '<span class="sp-alert"></span>' +
      "</div>"
    );

}
