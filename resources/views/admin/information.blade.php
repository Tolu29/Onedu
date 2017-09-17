@extends('template.baseAdmin')

@section('css-plus')
<link rel="stylesheet" href="/packages/assets/css/admin/information.css">
<link rel="stylesheet" href="/packages/assets/css/admin/admin-preview.css">
@stop

@section('content-admin')

<div class="preview container infoHide">
  <div class="row j">

    <div class="offset-md-1 col-md-10">
      <div class="ad-UniInfo z-depth-2">
        <img src="" alt="">
        <div class="">
          <h2>Nombre de la universidad</h2>
          <p id="ad-uniStreet">Av. Universidad</p>
          <p id="ad-uniCol">Col. El tajito, C.P. 27545</p>
          <p>Torreon, Coah</p>
          <a href="#">VER MAPA</a>
        </div>
        <div class="text-right">
          <button type="button" class="close btnclosePrev" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
    </div>

    <div class="offset-md-1 col-md-10">
      <div class="ad-plans z-depth-2">
        <div class="row">


        </div>
      </div>
    </div>

    <div class="offset-md-1 col-md-10">
      <div class="ad-optionSel z-depth-2">
        <div class="ad-block1">

        </div>
        <div class="ad-opt-descrip">
          
        </div>
      </div>
    </div>

  </div>
</div>

<div class="container">
  <div class="row">

    <div class="col-md-12">
      <div class="infoCareer z-depth-2">
        <div class="">
          <div class="card accreditation">
            Acreditacion
          </div>
        </div>
        <div class="col-md-2">
          <div class="">
            <div class="card syllabus">
              Plan de Estudios
            </div>
          </div>
        </div>
        <div class="col-md-2">
          <div class="">
            <div class="card class_sample">
              Clase Muestra
            </div>
          </div>
        </div>
        <div class="col-md-2">
          <div class="">
            <div class="card extra_activities">
              Actividades Extra
            </div>
          </div>
        </div>
        <div class="col-md-2">
          <div class="">
            <div class="card schedules">
              Horarios
            </div>
          </div>
        </div>
        <div class="col-md-2">
          <div class="">
            <div class="card scholarships">
              Becas
            </div>
          </div>
        </div>
        <div class="col-md-2">
          <div class="">
            <div class="card admission">
              Admicion
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-12" id="infoCont">

    </div>

  </div>

</div>

@stop

@section('js-plus')
<script type="text/javascript" src="/packages/assets/js/administer/information.js"></script>
@stop
