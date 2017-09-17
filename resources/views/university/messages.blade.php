@extends('template.baseUniversity')

@section('css-plus')
<link rel="stylesheet" href="/packages/assets/css/university/messages.css">
@stop

@section('content-student')
<div class="container">
  <div class="chat">
    <div class="row z-depth-2">
      <div class="col-md-9 chat-box">
        <p class="userMessage">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p class="uniMessage">dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div class="messageInputCont">
          <input type="" name="" value="Escribe tu mensaje..." class="messageInput">
          <button type="button" class="btn btnSend z-depth-2">Enviar</button>
        </div>
      </div>
      <div class="col-md-3 user-box">
        <div class="userCont activeUser">
          <img class="float-right imgUser" src="/packages/assets/img/students/studentPrueba.jpg" alt="">
          <p class="chatUserName">Hernesto abdul rodriguez zamora</p>
        </div>
        <div class="userCont">
          <img class="float-right imgUser" src="/packages/assets/img/students/studentPrueba.jpg" alt="">
          <p class="chatUserName">Hernesto abdul rodriguez zamora</p>
        </div>
        <div class="userCont">
          <img class="float-right imgUser" src="/packages/assets/img/students/studentPrueba.jpg" alt="">
          <p class="chatUserName">Hernesto abdul rodriguez zamora</p>
        </div>
        <div class="userCont">
          <img class="float-right imgUser" src="/packages/assets/img/students/studentPrueba.jpg" alt="">
          <p class="chatUserName">Hernesto abdul rodriguez zamora</p>
        </div>
        <div class="userCont">
          <img class="float-right imgUser" src="/packages/assets/img/students/studentPrueba.jpg" alt="">
          <p class="chatUserName">Hernesto abdul rodriguez zamora</p>
        </div>
        <div class="userCont">
          <img class="float-right imgUser" src="/packages/assets/img/students/studentPrueba.jpg" alt="">
          <p class="chatUserName">Hernesto abdul rodriguez zamora</p>
        </div>
        <div class="userCont">
          <img class="float-right imgUser" src="/packages/assets/img/students/studentPrueba.jpg" alt="">
          <p class="chatUserName">Hernesto abdul rodriguez zamora</p>
        </div>
      </div>

    </div>
  </div>

</div>
@stop
