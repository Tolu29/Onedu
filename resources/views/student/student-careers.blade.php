@extends('template.baseStudent')

@section('css-plus')
<link rel="stylesheet" href="/packages/assets/css/student/student-careers.css">
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyClSl5b-QZJAeAfIe-NueH2pQr7CZQ4_1c"></script>
@stop

@section('content-student')
<div class="container">


<!-- PRIMER NIVEL -->

  <div class="row wow fisrtLevel">
    <div class="col-md-12">
      <div class="careersCont z-depth-2">

      </div>

    </div>
  </div>


<!-- SEGUNDO NIVEL -->

  <!-- <div class="row secondLevel">

  </div> -->

  <div class="row wow hideCareers secondLevel">

    <div class="col-md-4 col-sm-4">
      <div class="backSecond">
        <button type="button" class="btn z-depth-2 red">Registrar</button>
      </div>
    </div>

    <div class="col-md-12">

      <div class="available-universities z-depth-2">
        <label>Carreras Disponibles</label>
          <select class="browser-default">
            <option value="" disabled selected>Escoge una carrera</option>
          </select>
      </div>


    </div>

  </div>

  <div class="row wow hideCareers secondLevel">

    <div class="col-md-2 parentCol">
      <div class="jumbotron contDesc optUniversities">
        <p class="text-center">UNIVERSIDADES</p>
      </div>
    </div>

    <div class="col-md-2 parentCol">
      <div class="jumbotron contDesc optDescription">
        <p class="text-center">DESCRIPCION</p>
      </div>
    </div>

    <div class="col-md-3 parentCol">
      <div class="jumbotron contDesc optProfile">
        <p class="text-center">PERFIL DE EGRESO</p>
      </div>
    </div>

    <div class="col-md-2 parentCol">
      <div class="jumbotron contDesc optRelated">
        <p class="text-center">RELACIONADAS</p>
      </div>
    </div>

    <div class="col-md-3 parentCol">
      <div class="jumbotron contDesc optCapm">
        <p class="text-center">CAMPOS DE TRABAJO</p>
      </div>
    </div>

  </div>

  <div class="row wow hideCareers secondLevel">
    <div class="col-md-12 colExplanation">
      <div class="explanationCont z-depth-2 container">

      </div>
      <div class="relatedCont z-depth-2 container">

      </div>
    </div>
  </div>



<!-- tercer nivel -->
  <div class="row wow hideCareers thirdLevel">

    <div class="col-md-12">
      <div class="schoolInfo z-depth-2">
        <img alt="" class="logoUni">
        <div>
          <h2 class="universityName">Tecnologico de Monterrey</h2>
          <p class="universityStreet">Av. Universidad</p>
          <p class="universityCol">Col. EL tajito C.P 27000</p>
          <!-- <p class="university">Torreon, COAH.</p> -->
          <a id="schoolMap">VER MAPA</a>
        </div>
        <div class="likeZone">
          <i class="fa fa-heart fa-2x likeUni" aria-hidden="true"></i>
        </div>
      </div>
    </div>

  </div>

  <div class="row wow hideCareers thirdLevel">

    <div class="col-md-12">
      <div class="schoolOptions z-depth-2">
        <div class="row">

        </div>
      </div>
    </div>

  </div>

  <div class="row wow hideCareers thirdLevel">

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

  <div class="row wow hideCareers fourthLevel">

    <div class="col-md-12">
      <div class="mapCont z-depth-2">
        <p>Tecnologico de Monterrey</p>
          <div id="map"></div>
      </div>
    </div>

  </div>

</div>
@stop

@section('js-plus')
<script type="text/javascript" src="/packages/assets/js/student/student-careers.js"></script>
<script type="text/javascript" src="/packages/assets/js/student/student-map.js"></script>
@stop
