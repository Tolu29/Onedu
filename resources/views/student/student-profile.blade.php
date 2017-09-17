@extends('template.baseStudent')

@section('css-plus')
<link rel="stylesheet" href="/packages/assets/css/student/student-profile.css">
@stop

@section('content-student')
<div class="container">

  <div class="row" id="firstLevelSprofile1">

    <div class="col-md-2">
      <div class="jumbotron">
        <div class="info">
          <a>INFORMACION</a>
        </div>
      </div>
    </div>

    <div class="col-md-2">
      <div class="jumbotron">
        <div class="fav">
          <a>FAVORITOS</a>
        </div>
      </div>
    </div>

    <div class="col-md-3">
      <div class="jumbotron">
        <div class="historial">
          <a>HISTORIAL ACADEMICO</a>
        </div>
      </div>
    </div>

    <div class="col-md-5">
      <div class="jumbotron">
        <div class="">

        </div>
      </div>
    </div>

  </div>

  <div class="row" id="firstLevelSprofile2">
    <div class="col-md-12">
      <div class="contProfile z-depth-2">

      </div>

    </div>

  </div>

  <div class="row" id="secondLevelSprofile">
    <div class="col-md-12">

    </div>
  </div>

</div>
@stop

@section('js-plus')
<script type="text/javascript" src="/packages/assets/js/student/student-profile.js"></script>
@stop
