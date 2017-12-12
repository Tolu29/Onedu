@extends('template.baseAdmin')

@section('css-plus')
<link rel="stylesheet" href="/packages/assets/css/admin/admin-images.css">
@stop

@section('content-admin')
<div class="container">
  <div class="row">

    <div class="col-md-12">
      <div class="tableCont">
        <div class="text-right">
          <button type="button" class="btn btnAddimg z-depth-2" data-toggle="modal" data-target="#modalContactForm">Agregar Imagen</button>
        </div>
        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody id="tableImgs">

          </tbody>
        </table>
      </div>
    </div>

    <!--Modal: Contact form-->
  <div class="modal fade" id="modalContactForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog cascading-modal" role="document">
      <!--Content-->
      <div class="modal-content">

        <!--Header-->
        <div class="modal-header saveHeader white-text">
            <h4 class="title"><i class="fa fa-file-image-o"></i> Imagen de Instalaciones</h4>
            <button type="button" class="close waves-effect waves-light" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <!--Body-->
        <div class="modal-body mb-0">

          <div class="col-md-12">

            <div class="md-form form-sm">
              <i class="fa fa-cubes prefix"></i>
              <input type="text" id="imgName" class="form-control">
              <label for="form19">Nombre de la Imagen</label>
            </div>

            <div class='md-form'>
              <div class='file-field'>
                <div class='btn imgBtn text-center'>
                  Escoge un Logo
                  <form id="formProperty">
                    <input type='file' id='property-img' name='formProperty'>
                  </form>
                </div>
                <div class='file-path-wrapper'>
                </div>
              </div>
            </div>

          </div>

          <div class="col-md-12">
            <img src="" alt="" id="previewInsta">
          </div>

          <div class="text-center mt-1-half">
            <button class="btn btnSave mb-2">Guardar <i class="fa fa-send ml-1"></i></button>
          </div>

        </div>
      </div>
      <!--/.Content-->
    </div>
  </div>
  <!--Modal: Contact form-->


  <!--Modal: Contact form-->
  <div class="modal fade" id="updModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog cascading-modal" role="document">
      <!--Content-->
      <div class="modal-content">

        <!--Header-->
        <div class="modal-header saveHeader white-text">
            <h4 class="title"><i class="fa fa-file-image-o"></i> Imagen de Instalaciones</h4>
            <button type="button" class="close waves-effect waves-light" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <!--Body-->
        <div class="modal-body mb-0">

          <div class="col-md-12">

            <div class="md-form form-sm">
              <i class="fa fa-cubes prefix active"></i>
              <input type="text" id="updName" class="form-control">
              <label for="form19" id="lab">Nombre de la Imagen</label>
            </div>

            <div class='md-form'>
              <div class='file-field'>
                <div class='btn imgBtn text-center'>
                  Escoge un Logo
                  <form id="formUpd">
                    <input type='file' id='property-imgUpd' name='formUpd'>
                  </form>
                </div>
                <div class='file-path-wrapper'>
                </div>
              </div>
            </div>

          </div>

          <div class="col-md-12">
            <img id="previewUpd">
          </div>

          <div class="text-center mt-1-half">
            <button class="btn btnUpd mb-2">Guardar <i class="fa fa-send ml-1"></i></button>
          </div>

        </div>
      </div>
      <!--/.Content-->
    </div>
  </div>
<!--Modal: Contact form-->


  </div>
</div>
@stop

@section('js-plus')
<script type="text/javascript" src="/packages/assets/js/administer/admin-images.js"></script>
@stop
