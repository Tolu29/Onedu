@extends('template.master')

@section('css')
<link rel="stylesheet" href="/packages/assets/css/landing/home.css">
@stop

@section('content')

<header>
  <nav class="navbar fixed-top navbar-toggleable-md navbar-dark scrolling-navbar z-depth-0">
       <div class="container">
           <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
           </button>
           <a class="navbar-brand" href="#">
               <img src="/packages/assets/img/miscellaneous/logo.png" class="d-inline-block align-top" alt="Onedu" id="landLogo">
           </a>
           <div class="collapse navbar-collapse" id="navbarNav">
               <ul class="navbar-nav mr-auto">
                   <li class="nav-item active">
                       <a class="nav-link">Home <span class="sr-only">(current)</span></a>
                   </li>
                   <li class="nav-item">
                       <a class="nav-link">Features</a>
                   </li>
                   <li class="nav-item">
                       <a class="nav-link">Pricing</a>
                   </li>
                   <li class="nav-item btn-group">
                       <a class="nav-link dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                       <div class="dropdown-menu" aria-labelledby="dropdownMenu1">
                           <a class="dropdown-item">Action</a>
                           <a class="dropdown-item">Another action</a>
                           <a class="dropdown-item">Something else here</a>
                       </div>
                   </li>
               </ul>
               <ul class="navbar-nav nav-flex-icons">
                   <li class="nav-item">
                       <a class="nav-link"><i class="fa fa-facebook"></i></a>
                   </li>
                   <li class="nav-item">
                       <a class="nav-link"><i class="fa fa-twitter"></i></a>
                   </li>
                   <li class="nav-item">
                       <a class="nav-link"><i class="fa fa-instagram"></i></a>
                   </li>
               </ul>
           </div>
       </div>
   </nav>
</header>

<!--Main parallax wrapper-->
<div class="parallax">

    <!--First section-->
    <div id="section-1" class="parallax-section">

        <!--Parallax content-->
        <div class="parallax-layer parallax-layer-base">

            <!--Container to center the content-->
            <div class="full-bg-img flex-center">
                <!-- <div class="row"> -->
                  <div class="col-md-4">
                    <div class="landingLog">
                      <div class="inputCont">
                        <p class="logLabel">correo Electronico</p>
                        <input class="logInput">
                        <p class="logLabel">Contrasena</p>
                        <input class="logInput">
                      </div>
                      <div class="text-right">
                        <button type="button" class="btn btn-primary">Entrar</button>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 offset-md-1">
                    <h1 class="display-2">Observa todas las posibilidades</h1>
                    <p>Con Onedu Elije la mejor opcion</p>
                  </div>
                <!-- </div> -->
            </div>
            <!--/Container to center the content-->

        </div>
        <!--/Parallax content-->

        <!--Parallax background-->
        <div class="parallax-layer parallax-layer-back">
        </div>
        <!--/Parallax background-->

    </div>
    <!--/First section-->


    <div id="section-2">
        <div class="container">

            <div class="row">
                <div class="col-md-6">

                  <div id="mdb-lightbox-ui"></div>

                    <div class="mdb-lightbox">


                        <figure class="col-md-4">
                            <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(114).jpg" data-size="1600x1067">
                                <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(114).jpg" class="img-fluid">
                            </a>
                        </figure>

                        <figure class="col-md-4">
                            <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(42).jpg" data-size="1600x1067">
                                <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(42).jpg" class="img-fluid" />
                            </a>
                        </figure>

                        <figure class="col-md-4">
                            <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(43).jpg" data-size="1600x1067">
                                <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(43).jpg" class="img-fluid" />
                            </a>
                        </figure>

                        <figure class="col-md-4">
                            <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(45).jpg" data-size="1600x1067">
                                <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(45).jpg" class="img-fluid" />
                            </a>
                        </figure>

                        <figure class="col-md-4">
                            <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(46).jpg" data-size="1600x1067">
                                <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(46).jpg" class="img-fluid" />
                            </a>
                        </figure>

                        <figure class="col-md-4">
                            <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(47).jpg" data-size="1600x1067">
                                <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(47).jpg" class="img-fluid" />
                            </a>
                        </figure>

                    </div>


                </div>

                <div class="col-md-6">
                  <h2>Aqui esta lo que buscas</h2>
                  <p>Informacion de las carreras</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  <button type="button" class="btn btn-primary">Primary</button>
                </div>
            </div>

        </div>
    </div>
    <!--Dummy Content-->

    <div id="section-3">

      <div class="container">
        <div class="row">
          <div class="col-md-2">
            <img src="/packages/assets/img/students/studentPrueba.jpg" alt="" class="imgAdvance">
          </div>
          <div class="col-md-2">
            <img src="/packages/assets/img/students/studentPrueba.jpg" alt="" class="imgAdvance">
          </div>
          <div class="col-md-2">
            <img src="/packages/assets/img/students/studentPrueba.jpg" alt="" class="imgAdvance">
          </div>
        </div>
      </div>

    </div>

</div>
<!--/Main parallax wrapper-->
@stop

@section('js')
<script type="text/javascript" src="/packages/assets/js/landing/home.js"></script>
@stop
