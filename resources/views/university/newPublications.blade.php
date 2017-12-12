@extends('template.baseUniversity')

@section('css-plus')
<link rel="stylesheet" href="/packages/assets/css/university/newPublications.css">
@stop

@section('content-university')
<div class="container">
  <div class="row">
    <div class="col-md-12 contTextEditor">
      <textarea class="tinymce" id="textEditor" name="name" rows="8" cols="80"></textarea>
    </div>
  </div>
  <div class="text-right">
    <button type="button" class="btn btnSend z-depth-2" name="button">Guardar</button>
  </div>

</div>
@stop

@section('js-plus')
<script type="text/javascript" src="/packages/libs/tinymce/tinymce.min.js"></script>
<script type="text/javascript" src="/packages/assets/js/university/newPublications.js"></script>
@stop
