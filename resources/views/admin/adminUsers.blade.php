@extends('template.baseAdmin')

@section('css-plus')
<link rel="stylesheet" href="/packages/assets/css/admin/adminUsers.css">
@stop

@section('content-student')
<div class="container">

  <div class="row">

    <div class="col-md-4">
      <div class="schoolsbtnAdd">
        <button type="button" class="btn z-depth-2">Registrar</button>
      </div>
    </div>

      <div class="col-md-4 offset-md-4">
        <div class="filterSchoolCont">
          <input type="" name="" value="">
          <button class="btn z-depth-2"><i class="fa fa-search"></i></button>
        </div>
      </div>

  </div>


  <div class="row">
    <div class="col-md-12 col-sm-12">

      <div class="schoolTableCont">
        <table class="table table-striped table-bordered">
          <thead class="thead-inverse">
            <tr>
              <th>Username</th>
              <th>Nombre</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr class="colorRow1">
              <td>Tecnologico de Monterrey</td>
              <td>Paseo del Tecnológico 751</td>
              <td>
                <button type="button" class="btn adminDelBtn btn-sm z-depth-2">Eliminar</button>
                <button type="button" class="btn adminUpdBtn btn-sm z-depth-2">Editar</button>
              </td>
            </tr>
            <tr class="colorRow2">
              <td>Tecnologico de Monterrey</td>
              <td>Paseo del Tecnológico 751</td>
              <td>
                <button type="button" class="btn adminDelBtn btn-sm z-depth-2">Eliminar</button>
                <button type="button" class="btn adminUpdBtn btn-sm z-depth-2">Editar</button>
              </td>
            </tr>
            <tr class="colorRow1">
              <td>Tecnologico de Monterrey</td>
              <td>Paseo del Tecnológico 751</td>
              <td>
                <button type="button" class="btn adminDelBtn btn-sm z-depth-2">Eliminar</button>
                <button type="button" class="btn adminUpdBtn btn-sm z-depth-2">Editar</button>
              </td>
            </tr>
            <tr class="colorRow2">
              <td>Tecnologico de Monterrey</td>
              <td>Paseo del Tecnológico 751</td>
              <td>
                <button type="button" class="btn adminDelBtn btn-sm z-depth-2">Eliminar</button>
                <button type="button" class="btn adminUpdBtn btn-sm z-depth-2">Editar</button>
              </td>
            </tr>
            <tr class="colorRow1">
              <td>Tecnologico de Monterrey</td>
              <td>Paseo del Tecnológico 751</td>
              <td>
                <button type="button" class="btn adminDelBtn btn-sm z-depth-2">Eliminar</button>
                <button type="button" class="btn adminUpdBtn btn-sm z-depth-2">Editar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>

  </div>


</div>
@stop
