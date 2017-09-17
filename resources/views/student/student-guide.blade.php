@extends('template.baseStudent')

@section('css-plus')
<link rel="stylesheet" href="/packages/assets/css/student/student-guide.css">
@stop

@section('content-student')
<div class="container">

  <div class="row">
    <div class="col-md-12">

      <div class="explanationCont z-depth-2">

        <h1>Examen Vocacional</h1>
        <div class="quiz-container">
          <div id="quiz"></div>
        </div>
        <button id="previous">Pregunta Anterior</button>
        <button id="next">Siguiente</button>
        <button id="submit">Enviar Examen</button>
        <div id="results"></div>

      </div>

    </div>
  </div>

</div>
@stop

@section('js-plus')
<script type="text/javascript" src="/packages/assets/js/student/student-guide.js"></script>
@stop
