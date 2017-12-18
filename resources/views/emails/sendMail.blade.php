@extends('template.master')

@section('css')
<link rel="stylesheet" href="/packages/assets/css/emails/sendMail.css">
@stop

@section('content')
<!--Main Navigation-->
<header>

<!-- Intro Section -->
  <div class="view hm-black-light jarallax" data-jarallax='{"speed": 0.2}'>
    <div class="full-bg-img">
        <div class="container flex-center">
            <div class="row pt-5 mt-3">
                <div class="col-md-12">
                    <div class="text-center">
                        <form id="formforget">
                          <input class="input-alternate inputSend" type="text" name="inputSend" value="" placeholder="Ingresa tu Correo">
                        </form>
                        <h1 class="h1-reponsive white-text font-up font-bold mb-3 wow fadeInDown" data-wow-delay="0.3s"><strong></strong></h1>
                        <!-- <hr class="hr-light mt-4 wow fadeInDown" data-wow-delay="0.4s"> -->
                        <h5 class="font-up mb-5 white-text wow fadeInDown" data-wow-delay="0.4s"><strong>Para poder cambiar tu contraseña introduce tu correo</strong></h5>
                        <a class="btn btn-outline-white wow fadeInDown btnSend" data-wow-delay="0.4s">Enviar</a>
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
<script type="text/javascript" src="/packages/assets/js/emails/sendMail.js"></script>
@stop
