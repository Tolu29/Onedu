@extends('template.master')

@section('css')
<link rel="stylesheet" href="/packages/assets/css/emails/restart-mail.css">
@stop

@section('content')
<!--Main Navigation-->
<header>

<!-- Intro Section -->
  <div class="view hm-black-light jarallax" data-jarallax='{"speed": 0.2}'>
    <div class="full-bg-img">
        <div class="container flex-center">
            <div class="row mt-3">
                <div class="col-md-12">
                    <div class="text-center contenedor">
                        <h1 class="h1-reponsive white-text font-up font-bold wow fadeInDown" data-wow-delay="0.3s"><strong>Restablecer la contraseña</strong></h1>
                        <form id="formRestart">
                          <span><label for="">Ingresa tu contraseña</label></span>
                          <input class="input-alternate password" type="text" id="password1" name="password1" placeholder="Ingresa contraseña">
                          <span><label for="">Ingresa de nuevo</label></span>
                          <input class="input-alternate password form-control" id="password2" type="text" name="password2" placeholder="Ingresa tu nueva contraseña">
                        </form>
                        <div class="text-right">
                          <button class="btn" id="btnSend"  data-token="{{$token}}" type="button" name="button">Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</header>
<!--Main Navigation-->
@stop

@section('js')
<script type="text/javascript" src="/packages/libs/jquery-validate/jquery.validate.min.js"></script>
<script type="text/javascript" src="/packages/assets/js/emails/restart-mail.js"></script>
@stop
