@extends('template.baseUniversity')

@section('css-plus')
<link rel="stylesheet" href="/packages/assets/css/university/updNew.css">
@stop

@section('content-university')
<div class="container">
  <div class="row">

    <div class="col-md-12">

      <div class="col-md-12 contUpdEditor">
        <textarea class="tinymce" id="UpdEditor" name="name" rows="8" cols="80"></textarea>
      </div>
      <div class="text-right">
        <button type="button" class="btn UpdbtnSend z-depth-2" id="" name="button">Guardar</button>
      </div>

    </div>

  </div>
</div>
@stop

@section('js-plus')
<script type="text/javascript" src="/packages/libs/tinymce/tinymce.min.js"></script>
<script type="text/javascript" src="/packages/assets/js/university/updNew.js"></script>
@stop
