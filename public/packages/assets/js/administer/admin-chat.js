var student_id;
$(function(){

  var $chat = $("#content-messages"), messages = [], students = [], id_chat, newMessages = [], idSchools = [];

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
      fillStudentCards(messages,students);
      $(".chatRoom:first-child").trigger('click');
      getMessagesInterval(messages, idSchools,student_id);
    }
  });

  $("body").on('click', '.chatRoom', function(){
    student_id = $(this).data('id');
    let single = $(this);
    $(".chatRoom").removeClass('activeCard');
    single.addClass('activeCard');
    single.children('div').removeClass('newMsg');
    $("#content-messages").empty();
    var studentMessages = atrib(messages, "user_id", student_id);
    // console.log(studentMessages);
    faillContentWithMessages(studentMessages);
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
      sendMessage(message,messages);
    }
  });

// cierre jquery
});

function notifications(messages, idSchools, universidad_id){
  $.ajax({
    url: "/Uninotification",
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
          idSchools.push(data[i].user_id);
          messages.push(data[i]);
          if (data[i].user_id == student_id) {
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
          if (idSchools[i] != student_id) {
            $('*[data-id="' + idSchools[i] + '"]>div').addClass('newMsg');
          }
        });
      }
    }
  });

}


function sendMessage(message,obj){
  data = {mensaje:message, user_id:student_id};
  $.ajax({
    url: "/UnimessageSend",
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

function fillStudentCards(messages,students){
  $.each(messages, function(i){
    var single = atrib(students, "user_id", messages[i].user_id);
    if (single == null) {
      students.push({user_id:messages[i].user_id})
      $(".universidadesCard").append(
        "<div class='chatRoom' data-id='" + messages[i].user_id + "'>" +
          "<img src='/packages/assets/img/miscellaneous/logo.png' class='float-right img-fluid' alt=''>" +
          "<p>" + messages[i].nombre_completo + "</p>" +
          '<div class="sp-alert"></div>' +
        "</div>"
      );
    }
  });
}

function newMessage(message){
  var htmlMessages = "";
  color = (message.role == "estudiante" ) ? "userMessages" : "universityMessages";
  htmlMessages +=
    '<div class="col-md-11 '+color+'">'+
      '<p>'+message.mensaje+'</p>'+
    '</div>';
  $("#content-messages").html(htmlMessages);
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
