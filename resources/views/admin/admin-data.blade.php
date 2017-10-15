@extends('template.baseAdmin')

@section('css-plus')
<link rel="stylesheet" href="/packages/libs/pikaday/css/pikaday.css">
<link rel="stylesheet" href="/packages/assets/css/admin/admin-data.css">
@stop

@section('content-admin')
<div class="container">
  <div class="row">
    <div class="col-md-12">
      <div class="cont-search">
        <div class="row">
          <div class="col-md-6">
            <select class="browser-default" id="city_select">
              <option value="" disabled selected>Selecciona una ciudad</option>
            </select>
          </div>
          <div class="col-md-6">
            <select class="browser-default" id="highSchool-select">
              <option value="" disabled selected>Selecciona una ciudad</option>
            </select>
          </div>
          <div class="col-md-6">
            <input type="text" class="input-alternate" id="inicialDate" placeholder="Fecha inicial de busqueda" name="" value="">
          </div>
          <div class="col-md-6">
            <input type="text" class="input-alternate" id="finalDate" name="" placeholder="Fecha final de busqueda" value="">
          </div>
        </div>
        <div class="text-right">
          <button type="button" class="btn download z-depth-2" name="button">Descargar</button>
        </div>
      </div>
    </div>
  </div>
</div>
@stop

@section('js-plus')
<script src="/packages/libs/pikaday/pikaday.js"></script>
<script type="text/javascript" src="/packages/assets/js/administer/admin-data.js"></script>
@stop
