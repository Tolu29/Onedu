@extends('template.baseAdmin')

@section('css-plus')
<link rel="stylesheet" href="/packages/assets/css/admin/careers.css">
@stop

@section('content-admin')
<div class="container">

  <div class="row">

    <div class="col-md-4">
      <div class="schoolsbtnAdd careerLvl1">
          <button type="button" class="btn z-depth-2 btnmodalReg">Registrar</button>
      </div>
    </div>

      <div class="col-md-4 offset-md-4">
        <div class="filterSchoolCont ">
          <input type="" name="" value="" class="careerLvl1">
          <button class="btn z-depth-2 careerLvl1"><i class="fa fa-search"></i></button>
        </div>
      </div>

  </div>


  <div class="row">
    <div class="col-md-12 col-sm-12 careerLvl1">

      <div class="schoolTableCont">
        <table class="table table-striped table-bordered">
          <thead class="thead-inverse">
            <tr>
              <th>Nombre</th>
              <th>Nivel Educativo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody id="tableCareers">

          </tbody>
        </table>
      </div>

    </div>

    <div class="col-md-12 careerLvl2 careerHide">
      <div class="infoCareer z-depth-2">
        <div class="">
          <div class="card name cardColor" name="1">
            Nombre
          </div>
        </div>
        <div class="col-md-2">
          <div class="">
            <div class="card level cardColor" name="2">
              Nivel
            </div>
          </div>
        </div>
        <div class="col-md-2">
          <div class="">
            <div class="card description cardColor" name="3">
              Descripcion
            </div>
          </div>
        </div>
        <div class="col-md-2">
          <div class="">
            <div class="card profile cardColor" name="4">
              Perfil de Egreso
            </div>
          </div>
        </div>
        <div class="col-md-2">
          <div class="">
            <div class="card profile cardColor" name="5">
              Grupo
            </div>
          </div>
        </div>
        <div class="col-md-2">
          <div class="">
            <div class="card profile cardColor" name="6">
              Campo Laboral
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-12 careerLvl2 careerHide">
      <div class="infoCareerCont z-depth-2">

        <div class='md-form text-center nameCareer' name="contInfo1">
          <input class="input-alternate" name="textInfo1" type="text">
          <label for="form1" class="">Nombre de la Carrera</label>
        </div>

        <div class='md-form text-center nameCareer careerHide' name="contInfo2">
          <input class="input-alternate" name="textInfo2" type="text">
          <label for="form1" class="">Nivel</label>
        </div>

        <div class='md-form text-center careerHide' name="contInfo3">
          <textarea name='textInfo3' class='tinymce' id="textInfo3" rows='8' cols='80' placeholder='Escribe aqui la descripcion....'></textarea>
        </div>

        <div class='md-form text-center careerHide' name="contInfo4">
          <textarea name="textInfo4" class='tinymce' id="textInfo4" rows='8' cols='80' placeholder='Escribe aqui la descripcion....'></textarea>
        </div>

        <div class='md-form text-center nameCareer careerHide' name="contInfo5">
          <input class="input-alternate" name="textInfo5" type="text">
          <label for="form1" class="">Grupo</label>
        </div>

        <div class='md-form text-center careerHide' name="contInfo6">
          <textarea name="textInfo6" class='tinymce' id="textInfo6" rows='8' cols='80' placeholder='Escribe aqui la descripcion....'></textarea>
        </div>

      </div>
      <div class="text-right btnSave">

      </div>
    </div>

  </div>


</div>
@stop

@section('js-plus')
<script type="text/javascript" src="/packages/libs/tinymce/tinymce.min.js"></script>
<script type="text/javascript" src="/packages/libs/jquery-validate/jquery.validate.min.js"></script>
<script type="text/javascript" src="/packages/assets/js/administer/careers.js"></script>
@stop
