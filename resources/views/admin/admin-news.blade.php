@extends('template.baseAdmin')

@section('css-plus')
<link rel="stylesheet" href="/packages/assets/css/admin/admin-news.css">
@stop

@section('content-admin')
<div class="container">


  <div class="row firstLevel">

    <div class="container-news paddingAdj">

      <div class="row" id="newsCont">


      </div>

    </div>


  </div>

  <div class="row wow newsHide" id="secondLevelNews">

    <div class="col-md-4 col-sm-4">
      <div class="backSecond">
        <button type="button" class="btn back warning-color-dark z-depth-2 red">Regresar</button>
        <button type="button" class="btn btnDelNew z-depth-2 red">Eliminar</button>
      </div>
    </div>

    <div class="col-md-12">
      <div class="newsContent z-depth-2">

      </div>
    </div>
  </div>

</div>
@stop

@section('js-plus')
<script type="text/javascript" src="/packages/assets/js/administer/admin-news.js"></script>
@stop
