@extends('template.baseStudent')

@section('css-plus')
<link rel="stylesheet" href="/packages/assets/css/student/student-related.css">
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyClSl5b-QZJAeAfIe-NueH2pQr7CZQ4_1c"></script>
@stop

@section('content-student')
<div class="container">

  <div class="row fisrtLevel">
    <div class="charCont">
      <button type="button" class="btn aptBtn" data-toggle="modal" data-target="#exampleModal">
        Aptitudes
      </button>
    </div>
    <div class="col-md-12">
      <div class="careers_related z-depth-2">

      </div>
    </div>
  </div>

  <!-- segundo nivel -->

  <div class="row wow hideRelated secondLevel">

    <div class="col-md-4 col-sm-4">
      <div class="backCont">
        <button type="button" class="btn back warning-color-dark z-depth-2 red">Regresar</button>
      </div>
    </div>

    <div class="col-md-12">

      <div class="related-description z-depth-2">
        <label>Carreras Disponibles</label>
          <select class="browser-default">
            <option value="" disabled selected>Escoge una carrera</option>
          </select>
          <label class="text-right" id="currentCarrer">Posgrado Actual: Mecatronica</label>
      </div>

    </div>

  </div>

  <div class="row wow hideRelated secondLevel">

    <div class="col-md-2 parentCol">
      <div class="jumbotron contDesc" data-opt="optUniversities">
        <p class="text-center">UNIVERSIDADES</p>
      </div>
    </div>

    <div class="col-md-2 parentCol">
      <div class="jumbotron contDesc optDescription" data-opt="optDescription">
        <p class="text-center">DESCRIPCION</p>
      </div>
    </div>

    <div class="col-md-3 parentCol">
      <div class="jumbotron contDesc" data-opt="optProfile">
        <p class="text-center">PERFIL DE EGRESO</p>
      </div>
    </div>

    <div class="col-md-2 parentCol">
      <div class="jumbotron contDesc" data-opt="optRelated">
        <p class="text-center">RELACIONADAS</p>
      </div>
    </div>

    <div class="col-md-3 parentCol">
      <div class="jumbotron contDesc" data-opt="optCapm">
        <p class="text-center">CAMPOS DE TRABAJO</p>
      </div>
    </div>

  </div>

  <div class="row wow hideRelated secondLevel">
    <div class="col-md-12 colExplanation">
      <div class="explanationCont z-depth-2 container">

      </div>
      <div class="relatedCont z-depth-2 container">

      </div>
    </div>
  </div>

  <!-- tercer nivel -->


  <div class="row wow hideRelated thirdLevel">

    <div class="col-md-4 col-sm-4">
      <div class="backCont">
        <button type="button" class="btn back warning-color-dark z-depth-2">Regresar</button>
      </div>
    </div>

    <div class="col-md-12">
      <div class="schoolInfo z-depth-2">
        <img alt="" class="logoUni">
        <div>
          <h2 class="universityName"></h2>
          <p class="universityStreet"></p>
          <p class="universityCol"></p>
          <!-- <p class="university">Torreon, COAH.</p> -->
          <a id="schoolMap">VER MAPA</a>
        </div>
        <div class="likeZone">
          <i class="fa fa-heart fa-2x likeUni" aria-hidden="true"></i>
        </div>
      </div>
    </div>

  </div>

  <div class="row wow hideRelated thirdLevel">

    <div class="col-md-12">
      <div class="schoolOptions z-depth-2">
        <div class="row">

        </div>
      </div>
    </div>

  </div>

  <div class="row wow hideRelated thirdLevel">

    <div class="col-md-12">
      <div class="UniOptDescription z-depth-2">
        <div class="row">
          <div class="col-md-4 hideCareers" id="contPlans">
            <div class="namePlans">

            </div>
          </div>
          <div class="col-md-4" id="contTitle">
            <div id="titles">

            </div>
          </div>
          <div class="col-md-7">
            <div class="contMat container">

            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

  <!-- cuarto nivel -->


  <div class="row wow hideRelated fourthLevel">

    <div class="col-md-4 col-sm-4">
      <div class="backCont">
        <button type="button" class="btn back warning-color-dark z-depth-2 red">Regresar</button>
      </div>
    </div>

    <div class="col-md-12">
      <div class="mapCont z-depth-2">
        <p>Ubicacion de la Institucion</p>
          <div id="map"></div>
      </div>
    </div>

  </div>

  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">

                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body text-center">
              <div id="chartContainer" style="height: 400px; width: 100% !important;"></div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
            </div>
        </div>
    </div>
</div>

</div>
@stop

@section('js-plus')
<script type="text/javascript" src="/packages/libs/chart/canvasjs.min.js"></script>
<script type="text/javascript" src="/packages/assets/js/student/related-map.js"></script>
<script type="text/javascript" src="/packages/assets/js/student/student-related.js"></script>
@stop
