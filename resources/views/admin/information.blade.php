@extends('template.baseAdmin')

@section('css-plus')
<link rel="stylesheet" href="/packages/assets/css/admin/information.css">
<link rel="stylesheet" href="/packages/assets/css/admin/admin-preview.css">
@stop

@section('content-admin')

<div class="container">
  <div class="row">

    <div class="col-md-12">
      <div class="infoCareer z-depth-2">
        <div class="col-md-2">
          <div>
            <div class="card cardInfo" name="1">
              Clase Muestra
            </div>
          </div>
        </div>
        <div class="col-md-2">
          <div>
            <div class="card cardInfo" name="2">
              Acreditacion
            </div>
          </div>
        </div>
        <div class="col-md-2">
          <div>
            <div class="card cardInfo" name="3">
              Actividades Extra
            </div>
          </div>
        </div>
        <div class="col-md-2">
          <div>
            <div class="card cardInfo" name="4">
              Horarios
            </div>
          </div>
        </div>
        <div class="col-md-2">
          <div>
            <div class="card cardInfo" name="5">
              Becas
            </div>
          </div>
        </div>
        <div class="col-md-2">
          <div>
            <div class="card cardInfo" name="6">
              Admicion
            </div>
          </div>
        </div>
        <div class="col-md-2">
          <div>
            <div class="card cardInfo" name="7">
              Plan de Estudios
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-12" id="infoCont">


      <form id="videoForm">
        <div name="info1">

          <div class='titles md-form z-depth-2'>
            <label for='form1'>titulo</label>
            <input class='input-alternate' id="title" name="title" type='text'>

            <input class='input-alternate'  id='url' name="url"  type='text' placeholder="URL YouTube enbed">
          </div>

        </div>
      </form>



      <form id="form2">
        <div class='md-form text-center infoHide' name="info2">
          <textarea name="textInfo2" class='tinymce' id="info2" rows='8' cols='80' placeholder='Escribe aqui la descripcion....'></textarea>
        </div>
      </form>

      <div class='md-form text-center infoHide' name="info3">
        <textarea name="textInfo6" class='tinymce' id="info3" rows='8' cols='80' placeholder='Escribe aqui la descripcion....'></textarea>
      </div>

      <div class='md-form text-center infoHide' name="info4">
        <textarea name="textInfo6" class='tinymce' id="info4" rows='8' cols='80' placeholder='Escribe aqui la descripcion....'></textarea>
      </div>

      <div class='md-form text-center infoHide' name="info5">
        <textarea name="textInfo6" class='tinymce' id="info5" rows='8' cols='80' placeholder='Escribe aqui la descripcion....'></textarea>
      </div>

      <div class='md-form text-center infoHide' name="info6">
        <textarea name="textInfo6" class='tinymce' id="info6" rows='8' cols='80' placeholder='Escribe aqui la descripcion....'></textarea>
      </div>



      <div class="infoHide contPlans" name="info7">

        <div class="text-right addPlan planLvl1">
          <a class="btn-floating"><i class="fa fa-plus"></i></a>
        </div>

        <table class='table table-striped table-bordered planLvl1'>
          <thead>
            <tr>
              <th class='text-center'>Nombre Plan</th>
              <th class='text-center'>Acciones</th>
            </tr>
          </thead>
          <tbody id='tBodyCont'>

          </tbody>
        </table>

        <div class="infoHide planLvl2">

          <div class="text-left btnBack">
            <button type='button' class='btn z-depth-2 back'>Atras</button>
          </div>

          <div class='titlePlan titles md-form z-depth-2'>
            <label for='form1'>Tipo Plan</label>
            <input class='input-alternate'  id='PlanName'  type='text'>
          </div>

          <div class='md-form text-center' name="">
            <textarea name="textInfo6" class='tinymce' id="PlanDesc" rows='8' cols='80' placeholder='Escribe aqui la descripcion....'></textarea>
          </div>

        </div>

      </div>

      <div class="text-right btnCont">

      </div>

    </div>

  </div>

</div>

@stop

@section('js-plus')
<script type="text/javascript" src="/packages/libs/jquery-validate/jquery.validate.min.js"></script>
<script type="text/javascript" src="/packages/libs/tinymce/tinymce.min.js"></script>
<script type="text/javascript" src="/packages/assets/js/administer/information.js"></script>
@stop
