@extends('template.baseAdmin')

@section('css-plus')
<link rel="stylesheet" href="/packages/assets/css/admin/schools.css">
@stop

@section('content-admin')
<div class="container">

  <div class="row uniLvl1 wow">

    <div class="col-md-4 col-sm-4">
      <div class="padTopSchool">
        <button type="button" class="btn z-depth-2" data-toggle="modal" data-target="#modalContactForm">Registrar</button>
      </div>
    </div>

      <div class="col-md-4 offset-md-4 col-sm-4 offset-sm-4">
        <div class="filterSchoolCont padTopSchool">
          <input type="" name="" value="">
          <button class="btn z-depth-2"><i class="fa fa-search"></i></button>
        </div>
      </div>

  </div>


<div class="row uniLvl1 wow">
  <div class="col-md-12 col-sm-12">

    <div class="schoolTableCont">
      <table class="table table-striped table-bordered">
        <thead class="thead-inverse">
          <tr>
            <th>Nombre de la Escuela</th>
            <th>Direccion</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody id="universitiesTable">
        </tbody>
      </table>
    </div>

  </div>

</div>


<!-- lvl2  -->
  <div class="row schoolHide uniLvl2 wow">

    <div class="col-md-5 col-sm-5">
      <div class="padTopSchool">
        <h2>Informacion de la Escuela</h2>
      </div>
    </div>

    <div class="col-md-4 offset-md-3 col-sm-4 offset-sm-4">
      <div class="padTopSchool btnOPT">
        <button class="btn z-depth-2 btnEditInfo">Editar datos</button>
        <button class="btn z-depth-2 btnAddImgs">Agregar Imagenes</button>
      </div>
    </div>

  </div>

  <div class="row padRowInfo rowInfoUniversity schoolHide  uniLvl2 wow depth-2">
    <div class="col-md-5">
      <div class="card-header contInput" role="tab" id="universityTag">
        <a class="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#infoUniversity" aria-expanded="false" aria-controls="collapseTwo">
          <h5 class="mb-0">
            Editar Universidad
            <i class="fa fa-chevron-down prefix"></i>
          </h5>
        </a>
      </div>
      <form id="updForm">
        <div id="infoUniversity" class="collapse" role="tabpanel" aria-labelledby="universityTag">
            <div class="card-body">
              <div class="contInput">
                <label for="">Nombre de la Universidad</label>
                <input id="infoName" name="infoName" type="text" class="input-alternate infoInpDisabled" disabled>
              </div>
              <div class="contInput">
                <label for="">Campus</label>
                <input id="infoCampus" name="infoCampus" type="text" class="input-alternate infoInpDisabled" disabled>
              </div>
              <div class="contInput">
                <label for="">Color</label>
                <input id="infoColor" name="" type="text" class="input-alternate" disabled>
              </div>
            </div>
        </div>
        <div class="card-header contInput" role="tab" id="addressTag">
          <a class="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#addressInfo" aria-expanded="false" aria-controls="collapseTwo">
            <h5 class="mb-0">
              Editar Direccion
              <i class="fa fa-chevron-down prefix"></i>
            </h5>
          </a>
        </div>
        <!-- Card body -->
        <div id="addressInfo" class="collapse" role="tabpanel" aria-labelledby="addressTag">
            <div class="card-body">
              <div class="contInput">
                <label for="">Calle</label>
                <input id="infoCalle" name="infoCalle" type="text" class="input-alternate" disabled>
              </div>
              <div class="contInput">
                <label for="">Colonia</label>
                <input id="infoColonia" name="infoColonia" type="text" class="input-alternate" disabled>
              </div>
              <div class="contInput">
                <label for="">Numero ext</label>
                <input id="infoExt" name="infoExt" type="text" class="input-alternate" disabled>
              </div>
              <div class="contInput">
                <label for="">Numero int</label>
                <input id="infoInt" name="infoInt" type="text" class="input-alternate" disabled>
              </div>
            </div>
        </div>
        <div class="card-header contInput" role="tab" id="UserTag">
          <a class="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#userInfo" aria-expanded="false" aria-controls="collapseTwo">
            <h5 class="mb-0">
              Editar Usuario
              <i class="fa fa-chevron-down prefix"></i>
            </h5>

          </a>
        </div>
        <div id="userInfo" class="collapse" role="tabpanel" aria-labelledby="UserTag">
            <div class="card-body">
              <div class="contInput">
                <label for="">Username</label>
                <input id="infoUser" name="infoUser" type="text" class="input-alternate" disabled>
              </div>
              <div class="contInput">
                <label for="">password</label>
                <input id="infoPass" name="infoPass" type="text" class="input-alternate" disabled>
              </div>
            </div>
        </div>
      </form>
    </div>
    <!-- Accordion card -->

    <div class="offset-md-3">

    </div>

    <div class="col-md-4">

      <div class='card logoWrap'>
        <img id='infoImg'>
      </div>

      <div class='md-form'>
        <div class='file-field'>
          <div class='btn btn-primary fornBtnColor btnLogo' disabled>
            Escoge un Logo
            <form id="infoForm">
              <input type='file' id='infoInput' name='infoInput'>
            </form>
          </div>
          <div class='file-path-wrapper'>
          </div>
        </div>
      </div>

    </div>
  </div>


  <div class="row padRowInfo schoolHide  uniLvl2 wow">

    <div class="col-md-5 col-sm-5">
      <div class="padRowInfo">
        <h2>Carreras de la Escuela</h2>
      </div>
    </div>

    <div class="col-md-4 offset-md-3 col-sm-4 offset-sm-4">
      <div class="padRowInfo">
        <button class="btn z-depth-2 addCareer" data-toggle="modal" data-target="#modalSubscription">Agregar</button>
      </div>
    </div>

  </div>

  <div class="row schoolHide uniLvl2 wow">
    <div class="col-md-12 col-sm-12">

      <div class="schoolTableCont">
        <table class="table table-striped table-bordered">
          <thead class="thead-inverse">
            <tr>
              <th>Nombre de la Carrera</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody id="tableAssignedUni">
          </tbody>
        </table>
      </div>

    </div>
  </div>

</div>



  <!--Modal: form-->
<div class="modal fade" id="modalContactForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog cascading-modal" role="document">
        <!--Content-->
        <div class="modal-content">

            <!--Header-->
            <div class="modal-header head white-text">
                <h4 class="title"><i class="fa fa-pencil"></i> Registro de Universidad</h4>
                <button type="button" class="close waves-effect waves-light" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <!--Body-->
            <form id="formSchool">
              <div class="modal-body mb-0">
                <div class="row">
                  <div class="col-md-6">

                    <div class='card logoWrap'>
                      <img id='logoPrev' src='' alt=''>
                    </div>

                      <div class='md-form'>
                        <div class='file-field'>
                          <div class='btn btn-primary fornBtnColor btnLogo'>
                            <span>Escoge un Logo</span>
                            <!-- <form id="formLogo"> -->
                              <input type='file' id='uni-logo' name='formLogo'>
                            <!-- </form> -->
                          </div>
                          <div class='file-path-wrapper'>
                          </div>
                        </div>
                      </div><br>

                      <div class="md-form form-sm">
                       <br>
                      </div>

                      <div class="md-form form-sm">
                       <i class="fa fa-user prefix"></i>
                       <input type="text" id="newUniUser" name="newUniUser" class="form-control">
                       <label for="form21">Nombre de usuario</label>
                      </div>

                      <div class="md-form form-sm">
                       <i class="fa fa-user prefix"></i>
                       <input type="text" id="newUniPass" name="newUniPass" class="form-control">
                       <label for="form21">Contraseña</label>
                      </div>
                  </div>
                  <div class="col-md-6">

                    <div class="md-form form-sm">
                     <i class="fa fa-user prefix"></i>
                     <input type="text" id="newUniName" name="newUniName" class="form-control">
                     <label for="form21">Nombre de la Universidad</label>
                    </div>

                    <div class="md-form form-sm">
                     <i class="fa fa-pencil prefix"></i>
                     <input type="text" id="newUniColor" name="newUniColor" class="form-control jscolor">
                     <label for="form21">Color</label>
                    </div>

                    <div class="md-form form-sm">
                     <i class="fa fa-university prefix"></i>
                     <input type="text" id="newUniCampus" name="newUniCampus" class="form-control">
                     <label for="form21">Campus</label>
                    </div>

                    <div class="md-form form-sm">
                     <i class="fa fa-map-marker prefix"></i>
                     <input type="text" id="newUniStreet" name="newUniStreet" class="form-control">
                     <label for="form21">Calle</label>
                    </div>

                    <div class="md-form form-sm">
                     <i class="fa fa-hashtag prefix"></i>
                     <input type="text" id="newUniExt" name="newUniExt" class="form-control">
                     <label for="form21">Numero Exterior</label>
                    </div>

                    <div class="md-form form-sm">
                     <i class="fa fa-hashtag prefix"></i>
                     <input type="text" id="newUniInt" name="newUniInt" class="form-control">
                     <label for="form21">Numero Interior</label>
                    </div>

                    <div class="md-form form-sm">
                     <i class="fa fa-map-marker prefix"></i>
                     <input type="text" id="newUniCol" name="newUniCol" class="form-control">
                     <label for="form21">Colonia</label>
                    </div>

                    <div class="text-center mt-1-half">
                     <button type="button"class="btn mb-2 fornBtnColor btnSend">Registrar <i class="fa fa-send ml-1"></i></button>
                    </div>

                  </div>
                </div>
              </div>
            </form>

        </div>
        <!--/.Content-->
    </div>
</div>
<!--Modal: Contact form-->

<!--Modal: Subscription From-->
<div class="modal modal-fluid fade" id="modalSubscription" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog cascading-modal modal-fluid" role="document">
    <!--Content-->
    <div class="modal-content">

      <!--Header-->
      <div class="modal-header head white-text">
          <h4 class="title"><i class="fa fa-newspaper-o"></i> Carreras Disponibles</h4>
          <button type="button" class="close waves-effect waves-light" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
          </button>
      </div>
      <!--Body-->
      <div class="modal-body">

        <div class="row">
          <div class="col-md-4">
            <div class="aviableAssigned">
              Assignadas
            </div>
            <div class="aviassCont" id="asignadas">
            </div>
          </div>

          <div class="col-md-8">
            <div class="aviableAssigned">
              Disponibles
            </div>
            <div class="aviassCont" id="disponibles">
            </div>
          </div>
        </div>

        <div class="text-right mt-1-half">
         <button class="btn mb-2 fornBtnColor saveCareersUni">Guardar <i class="fa fa-send ml-1"></i></button>
        </div>
      </div>
    </div>
    <!--/.Content-->
  </div>
</div>
<!--Modal: Subscription From-->


@stop

@section('js-plus')
<script type="text/javascript" src="/packages/libs/jquery-validate/jquery.validate.min.js"></script>
<script type="text/javascript" src="/packages/libs/jscolor/jscolor.js"></script>
<script type="text/javascript" src="/packages/assets/js/administer/schools.js"></script>
@stop
