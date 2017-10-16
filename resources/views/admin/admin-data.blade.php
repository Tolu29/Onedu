@extends('template.baseAdmin')

@section('css-plus')
<link rel="stylesheet" href="/packages/libs/pikaday/css/pikaday.css">
<link rel="stylesheet" href="/packages/assets/css/admin/admin-data.css">
@stop

@section('content-admin')
<div class="container">
  <div class="row">
    <div class="col-md-12">
      <div class="cont-search z-depth-2">
        <form id="formExcel">
          <div class="row">
            <div class="col-md-6">
              <select class="browser-default selectStyle" name="city_select" id="city_select">
                <option value="" disabled selected>Selecciona una ciudad</option>
              </select>
            </div>
            <div class="col-md-6 schoolHide admD-hide">
              <select class="browser-default selectStyle" name="highSchool_select" id="highSchool_select">
              </select>
            </div>
          </div>
          <div class="row">
            <div class="col-md-5">
              <input type="text" class="input-alternate selectStyle" name="inicialDate" id="inicialDate" placeholder="Fecha inicial de busqueda">
            </div>
            <div class="col-md-1">

            </div>
            <div class="col-md-5">
              <input type="text" class="input-alternate selectStyle" id="finalDate" name="finalDate" placeholder="Fecha final de busqueda">
            </div>
          </div>
          <div class="text-right">
            <button type="button" class="btn download z-depth-2" name="button">Descargar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>


<div id="table_wrapper">
  <table class="table admD-hide">
    <thead>
        <tr>
        <th>Nombre Completo</th>
        <th>Correo</th>
        <th>Escuela Anterior/th>
        </tr>
      </thead>
      <tbody id="data_table">
    </tbody>
  </table>
</div>
@stop

@section('js-plus')
<script type="text/javascript" src="/packages/libs/jquery-validate/jquery.validate.min.js"></script>
<script src="/packages/libs/pikaday/pikaday.js"></script>
<script type="text/javascript" src="/packages/assets/js/administer/admin-data.js"></script>
@stop
