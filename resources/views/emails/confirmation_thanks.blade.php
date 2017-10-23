@extends('template.master')

@section('css')
<link rel="stylesheet" href="/packages/assets/css/emails/confirmation_thanks.css">
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
                        <h1 class="h1-reponsive white-text font-up font-bold mb-3 wow fadeInDown" data-wow-delay="0.3s"><strong>Minimalist intro</strong></h1>
                        <hr class="hr-light mt-4 wow fadeInDown" data-wow-delay="0.4s">
                        <h5 class="font-up mb-5 white-text wow fadeInDown" data-wow-delay="0.4s"><strong>Photography & design</strong></h5>
                        <a class="btn btn-outline-white wow fadeInDown btnEnter" data-wow-delay="0.4s">Entrar</a>
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
<script type="text/javascript" src="/packages/assets/js/emails/confirmation-thanks.js"></script>
@stop

<!--
<!DOCTYPE html5>
<html lang="es">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title></title>
    <link rel="icon" href="/packages/assets/img/miscellaneous/favicon.ico">

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.0/css/font-awesome.min.css">

    <link href="/packages/libs/MDB/css/bootstrap.min.css" rel="stylesheet">

    <link href="/packages/libs/MDB/css/mdb.css" rel="stylesheet">

    <link href="/packages/libs/MDB/css/style.css" rel="stylesheet">

</head>

<body>



    <! SCRIPTS -->
    <!-- JQuery -->
    <!-- <script type="text/javascript" src="/packages/libs/MDB/js/jquery-3.1.1.min.js"></script> -->
    <!-- Bootstrap tooltips -->
    <!-- <script type="text/javascript" src="/packages/libs/MDB/js/tether.js"></script> -->
    <!-- Bootstrap core JavaScript -->
    <!-- <script type="text/javascript" src="/packages/libs/MDB/js/bootstrap.min.js"></script> -->
    <!-- MDB core JavaScript -->
    <!-- <script type="text/javascript" src="/packages/libs/MDB/js/mdb.min.js"></script> -->



<!-- </body> -->

<!-- </html> --> 
