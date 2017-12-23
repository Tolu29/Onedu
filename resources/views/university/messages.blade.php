@extends('template.baseUniversity')

@section('css-plus')
<link rel="stylesheet" href="/packages/assets/css/university/messages.css">
@stop

@section('content-university')
<div class="container">

  <div class="row" style="margin-top: 9rem;">

    <div class="col-xs-3 col-sm-9">
      <div class="msgcontainer-msgs scrollbar scrollbar-primary" id="content-messages" style="height: 55%;background: #ffffff;padding: 1rem;overflow-y:auto;">

      </div>
      <div class="msgcontainer-input" style="background: #ffffff;height: 15%;padding: 1rem;">
        <div class="input-group textInput">
          <input type="text" class="form-control" id="message" placeholder="Escribe tu mensaje" aria-label="Recipient's username" aria-describedby="basic-addon2">
          <span class="input-group-addon activeBtn" id="btn-send">Enviar</span>
        </div>
      </div>
    </div>
    <div class="col-xs-3 col-sm-3">
      <div class="msgcontainer-list universidadesCard" style="background: #f4c945;height: 70%">

      </div>
    </div>

  </div>

</div>
@stop

@section('js-plus')
<script type="text/javascript" src="/packages/assets/js/university/messages.js"></script>
@stop
