@extends('template.baseStudent')

@section('css-plus')
<link rel="stylesheet" href="/packages/assets/css/student/student-messages.css">
@stop

@section('content-student')
<div class="container">

  <div class="row">

    <div class="col-md-9">
      <div class="messagesCont z-depth-2 scrollbar scrollbar-primary" style="max-height:40rem;overflow-y:auto;">
        <div class="row" id="content-messages">
          <!-- <div class="col-md-11 userMessages">
            <p>Loe et dolore magno laboriolor in reprehenderit in volunulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div class="col-md-11 universityMessages">
            <p>Lorem ipsum dolor sit amet, olore magna aliqua. Ut elit esse cillum dolore non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div> -->
        </div>
        <div class="textInput">
          <input type="" name="" value="" placeholder="Escribe tu mensaje..." id="message">
          <button type="button" class="btn z-depth-2" id="btn-send">Enviar</button>
        </div>
      </div>
    </div>

    <div class="col-md-3">
      <div class="universitysActive z-depth-2">
        <div class="row">
          <div class="col-md-11 universidadesCard">

          </div>
        </div>
      </div>
    </div>

  </div>

</div>
@stop

@section('js-plus')
<script src="/packages/assets/js/student/student-messages.js" charset="utf-8"></script>
@stop
