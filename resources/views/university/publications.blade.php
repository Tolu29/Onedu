@extends('template.baseUniversity')

@section('css-plus')
<link rel="stylesheet" href="/packages/assets/css/university/publications.css">
@stop

@section('content-university')
<div class="container">

  <div class="row paddingAdj">
    <button type="button" class="btn btn-lg z-depth-2 addPub">Agregar Nueva</button>
  </div>

  <div class="row">

    <div class="container-news">

      <div class="row" id="newsCont">

      </div>

    </div>


  </div>
</div>
@stop

@section('js-plus')
<script type="text/javascript" src="/packages/assets/js/university/publications.js"></script>
@stop
