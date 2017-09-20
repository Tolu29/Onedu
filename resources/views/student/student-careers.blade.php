@extends('template.baseStudent')

@section('css-plus')
<link rel="stylesheet" href="/packages/assets/css/student/student-careers.css">
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
  <div class="row wow hideCareers secondLevel">

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
  <div class="row wow hideCareers" id="thirdLevel1">

    <div class="col-md-12">
      <div class="schoolInfo z-depth-2">
        <img src="/packages/assets/img/students/studentPrueba.jpg" alt="">
        <div>
          <h2>Tecnologico de Monterrey</h2>
          <p>Av. Universidad</p>
          <p>Col. EL tajito C.P 27000</p>
          <p>Torreon, COAH.</p>
          <a id="schoolMap">VER MAPA</a>
        </div>
        <div class="likeZone">
          <i class="fa fa-heart fa-2x" aria-hidden="true"></i>
        </div>
      </div>
    </div>

  </div>

  <div class="row wow hideCareers" id="thirdLevel2">

    <div class="col-md-12">
      <div class="schoolOptions z-depth-2">
        <div class="row">

          <div class="col-md-4">
            <div class="">
              <a>Becas</a>
            </div>
          </div>
          <div class="col-md-4">
            <div class="">
              <a>Clase Muestra</a>
            </div>
          </div>
          <div class="col-md-4">
            <div class="">
              <a>Actividades Extracurriculares</a>
            </div>
          </div>
          <div class="col-md-4">
            <div class="">
              <a>Horarios</a>
            </div>
          </div>
          <div class="col-md-4">
            <div class="">
              <a>Instalaciones</a>
            </div>
          </div>
          <div class="col-md-4">
            <div class="">
              <a>Admicion</a>
            </div>
          </div>
          <div class="col-md-4">
            <div class="">
              <a>Plan de Estudios</a>
            </div>
          </div>
          <div class="col-md-4">
            <div class="">
              <a>Personal Docente</a>
            </div>
          </div>
          <div class="col-md-4">
            <div class="">
              <a>Acreditacion</a>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>

  <div class="row wow hideCareers" id="thirdLevel3">

    <div class="col-md-12">
      <div class="UniOptDescription z-depth-2">
        <div class="row">
          <div class="col-md-4">
            <a> Semestre 1</a>
            <a> Semestre 2</a>
            <a> Semestre 3</a>
            <a> Semestre 4</a>
            <a> Semestre 5</a>
            <a> Semestre 6</a>
            <a> Semestre 7</a>
            <a> Semestre 8</a>
          </div>
          <div class="col-md-8">
            <div class="contMat">
              <h2>Semestre 2</h2>
              <p>* Materia de universidad</p>
              <p>* Materia de universidad</p>
              <p>* Materia de universidad</p>
              <p>* Materia de universidad</p>
              <p>* Materia de universidad</p>
              <p>* Materia de universidad</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

  <!-- cuarto nivel -->

  <div class="row wow hideCareers" id="fourthLevel">

    <div class="col-md-12">
      <div class="mapCont z-depth-2">
        <p>Tecnologico de Monterrey</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1799.5270774127844!2d-103.42500572815652!3d25.569864997122835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x868fda48e979fe79%3A0x13df29a349a8750a!2sSan+Isidro!5e0!3m2!1sen!2smx!4v1501528870982" width="95%" height="80%" frameborder="0" style="border:0" allowfullscreen></iframe>
      </div>
    </div>

  </div>

</div>
@stop

@section('js-plus')
<script type="text/javascript" src="/packages/assets/js/student/student-careers.js"></script>
@stop
