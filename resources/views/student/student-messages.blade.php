@extends('template.baseStudent')

@section('css-plus')
<link rel="stylesheet" href="/packages/assets/css/student/student-messages.css">
@stop

@section('content-student')
<div class="container">

  <div class="row">

    <div class="col-md-9">
      <div class="messagesCont z-depth-2">
        <div class="row">
          <div class="col-md-11 userMessages">
            <p>Loe et dolore magno laboriolor in reprehenderit in volunulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div class="col-md-11 universityMessages">
            <p>Lorem ipsum dolor sit amet, olore magna aliqua. Ut elit esse cillum dolore non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
        <div class="textInput">
          <input type="" name="" value="Escribe tu mensaje...">
          <button type="button" class="btn z-depth-2">Enviar</button>
        </div>
      </div>
    </div>

    <div class="col-md-3">
      <div class="universitysActive z-depth-2">
        <div class="row">
          <div class="col-md-11">
            <div>
              <img src="/packages/assets/img/students/studentPrueba.jpg" class="float-right" alt="">
              <p>TECNOLOGICO DE MONTERREY</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

</div>
@stop

@section('js-plus')
@stop
