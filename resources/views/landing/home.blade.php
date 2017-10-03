
@extends('template.master')

@section('css')
<link rel="stylesheet" href="/packages/assets/css/landing/home.css">
@stop

@section('content')

<header>
  <nav class="navbar lo fixed-top navbar-toggleable-md navbar-dark scrolling-navbar z-depth-1">
   <div class="container">
     <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
     </button>
     <a class="navbar-brand" href="#">
         <img src="/packages/assets/img/miscellaneous/whiteLogo.png" class="d-inline-block align-top" alt="Onedu" id="landLogo">
     </a>
     <div class="collapse navbar-collapse" id="navbarNav">

       <!-- SideNav slide-out button -->
       <div class="float-left landOnedu">
         <h2 class="LandtextOnedu hidden-md-down">ONEDU</h2>
         <p class="futureOne hidden-md-down">Elige tu futuro</p>
       </div>

       <ul class="nav navbar-nav nav-flex-icons ml-auto" style="padding-top: 1em;">
         <li class="nav-item">
           <a class="nav-link waves-effect waves-light landOpt" href="#section-1">Inicio</a>
         </li>
         <li class="nav-item">
           <a href="#section-3" class="nav-link waves-effect waves-light landOpt" id="ventajas">Ventajas</a>
         </li>
         <li class="nav-item">
           <a href="#section-4" class="nav-link waves-effect waves-light landOpt" id="oneduDo">¿Que hacemos?</a>
         </li>
         <li class="nav-item">
           <a class="nav-link waves-effect waves-light landOpt" href="#section-5">Registro</a>
         </li>
         <li class="nav-item">
           <a class="nav-link waves-effect waves-light landOpt" data-toggle="modal" data-target="#modalLogin">Entrar</a>
         </li>
       </ul>

     </div>
   </div>
   </nav>
</header>

<!--Modal: Login Form-->
<div class="modal fade" id="modalLogin" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog cascading-modal" role="document">
        <!--Content-->
        <div class="modal-content">

            <!--Header-->
            <div class="modal-header light-blue darken-3 white-text">
                <button type="button" class="close waves-effect waves-light" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <h4 class="title"><i class="fa fa-user"></i> Log in</h4>
            </div>
            <!--Body-->
            <div class="modal-body">
                <div class="md-form form-sm">
                    <i class="fa fa-envelope prefix"></i>
                    <input type="text" id="modMail" class="form-control">
                    <label for="form30">Your email</label>
                </div>

                <div class="md-form form-sm">
                    <i class="fa fa-lock prefix"></i>
                    <input type="password" id="modPass" class="form-control">
                    <label for="form31">Your password</label>
                </div>

                <div class="text-center mt-2">
                    <button class="btn btn-info btnModEnter">Entrar <i class="fa fa-sign-in ml-1"></i></button>
                </div>

            </div>
            <!--Footer-->
            <div class="modal-footer">
                <div class="options text-center text-md-right mt-1">
                    <p>No eres Miembro <a href="#">Registrate</a></p>
                    <p>Olvidaste tu <a href="#">Contraseña?</a></p>
                </div>
                <button type="button" class="btn btn-outline-info waves-effect ml-auto" data-dismiss="modal">Cerrar <i class="fa fa-times-circle ml-1"></i></button>
            </div>
        </div>
        <!--/.Content-->
    </div>
</div>
<!--Modal: Login Form-->

<!--Main parallax wrapper-->
<div class="parallax">

    <!--First section-->
    <div id="section-1" class="parallax-section hm-black-light">

      <!--Parallax content-->
      <div class="parallax-layer parallax-layer-base">

        <!--Container to center the content-->
        <div class="full-bg-img flex-center">
          <!-- <div class="row"> -->
            <div class="col-md-5 wow fadeInLeft" id="logOn">
              <div class="landingLog">
                <div class="inputCont">
                  <p class="logLabel">correo Electronico</p>
                  <input class="logInput" id="logMail">
                  <p class="logLabel">Contrasena</p>
                  <input class="logInput" id="logPass">
                </div>
                <div class="text-right">
                  <button type="button" class="btn btnEnter">Entrar</button>
                </div>
              </div>
            </div>
            <div class="col-md-6 wow fadeInRight">
              <h1 class="display-2 LandtextShad padH1">Observa todas las posibilidades</h1>
              <p class="futureOne LandtextShad">Con Onedu Elije la mejor opcion</p>
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
                  <a href="/packages/assets/img/landing/dawn-1840298_1920.jpg" data-size="1600x1067">
                    <img src="/packages/assets/img/landing/dawn-1840298_1920.jpg" class="img-fluid">
                  </a>
                </figure>

                <figure class="col-md-4">
                  <a href="/packages/assets/img/landing/friend-2727307_1920.jpg" data-size="1600x1067">
                    <img src="/packages/assets/img/landing/friend-2727307_1920.jpg" class="img-fluid" />
                  </a>
                </figure>

                <figure class="col-md-4">
                  <a href="/packages/assets/img/landing/graduation-879941_1920.jpg" data-size="1600x1067">
                    <img src="/packages/assets/img/landing/graduation-879941_1920.jpg" class="img-fluid" />
                  </a>
                </figure>

                <figure class="col-md-4">
                  <a href="/packages/assets/img/landing/graduation-2613173_1920.jpg" data-size="1600x1067">
                    <img src="/packages/assets/img/landing/graduation-2613173_1920.jpg" class="img-fluid" />
                  </a>
                </figure>

                <figure class="col-md-4">
                  <a href="/packages/assets/img/landing/graduation-2349741_1920.jpg" data-size="1600x1067">
                    <img src="/packages/assets/img/landing/graduation-2349741_1920.jpg" class="img-fluid" />
                  </a>
                </figure>

                <figure class="col-md-4">
                  <a href="/packages/assets/img/landing/graduation-2038865_1920.jpg" data-size="1600x1067">
                    <img src="/packages/assets/img/landing/graduation-2038865_1920.jpg" class="img-fluid" />
                  </a>
                </figure>

              </div>


          </div>

          <div class="col-md-6">
            <h2 class="headSec2">¿No sabes que estudiar? ¡Conoce todas tus posibilidades!</h2>
            <p class="descSec2">Onedu es la nueva forma de escoger tu profesión.</p>
            <p>Todos somos soñadores, pero no todos perseguimos nuestro sueño. En Onedu queremos ser el vínculo entre jóvenes que buscan el éxito a través de una carrera profesional y las universidades que las ofertan. Ven, encuentra tu pasión y alcanza tus sueños.</p>
            <button type="button" class="btn z-depth-2 btnSec2" data-toggle="modal" data-target="#modalLogin">Entrar</button>
          </div>
        </div>

      </div>
    </div>
    <!--Dummy Content-->

    <div id="section-3">

      <div class="">
        <div class="row">
          <div class="col-md-2 advanceColor">
            <i class="fa fa-comments-o imgAdvance" aria-hidden="true"></i>
            <h3 class="text-center advancePadd">Contacto:</h3>
            <p class="text-center"> ¿Inseguro? Manda un mensaje directo a tu universidad favorita y deja que aclaren cualquier duda.</p>
          </div>
          <div class="col-md-2 advanceColor">
            <i class="fa fa-map imgAdvance" aria-hidden="true"></i>
            <h3 class="text-center advancePadd">Información:</h3>
            <p class="text-center"> Nadie sabe lo que quiere hasta que lo tiene en frente. Conoce primero todos los detalles que te permitan encontrar tu pasión.</p>
          </div>
          <div class="col-md-2 advanceColor">
            <i class="fa fa-university imgAdvance" aria-hidden="true"></i>
            <h3 class="text-center advancePadd">Universidades:</h3>
            <p class="text-center"> Descubre la Institución educativa que se volverá el vehículo para alcanzar tus sueños.</p>
          </div>
          <div class="col-md-6 sec3Fimg">
            <img src="/packages/assets/img/miscellaneous/imgSection3.jpg" class="img-fluid advImg">
          </div>
        </div>
      </div>

    </div>

    <div class="sections" id="section-4">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h3 class="display-4 sec4Text">Conoce mas</h3>
          </div>
          <div class="offset-md-1"></div>
          <div class="col-md-7">
            <div class="embed-responsive embed-responsive-16by9">
              <iframe class="embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/IRGBU2r7O10" frameborder="0" allowfullscreen></iframe>
            </div>
          </div>
        </div>

      </div>

    </div>

    <div class="sections" id="section-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h1 class="sec5Info">No esperes mas</h1>
            <h2 class="display-2 sec5Reg">Registrate</h2>
            <div class="circleInfo circlegreen">
              <h3 class="circleText text-white">+ 30</h3>
              <p class="text-white circuleCom">ESCUELAS</p>
            </div>
            <div class="circleInfo advanceColor">
              <h3 class="circleText text-white">+ 190</h3>
              <p class="text-white circuleCom">CARRERAS</p>
            </div>
            <div class="circleInfo foo">
              <h3 class="circleText text-white">+ 800</h3>
              <p class="text-white circuleCom">USUARIOS</p>
            </div>
          </div>

          <div class="col-md-6">
            <form id="formRegist">

              <div class="regInputCont">
                <div class="landRegFa"><i class="fa fa-user adjustFa text-white" aria-hidden="true"></i></div>
                <input placeholder="Nombre Completo" class="LandRegInp" id="nameReg" name="nameReg">
              </div>

              <div class="regInputCont">
                <div class="landRegFa"><i class="fa fa-envelope adjustFa text-white" aria-hidden="true"></i></div>
                <input placeholder="Correo Electronico" class="LandRegInp" id="mailReg" name="mailReg">
              </div>

              <div class="regInputCont">
                <div class="landRegFa"><i class="fa fa-unlock-alt adjustFa text-white" aria-hidden="true"></i></div>
                <input placeholder="Contraseña"  class="LandRegInp" id="regPass" name="regPass">
              </div>

              <div class="regInputCont">
                <div class="landRegFa"><i class="fa fa-unlock-alt adjustFa text-white" aria-hidden="true"></i></div>
                <input placeholder="Confirmacion Contraseña" class="LandRegInp" id="regPassDup" name="regPassDup">
              </div>

              <div class="regInputCont">
                <div class="landRegFa"><i class="fa fa-university adjustFa text-white" aria-hidden="true"></i></div>
                <select class="browser-default LandRegInp" id="citiesSelect" style='background-color: #ffffff;'>
                  <option value="" disabled selected>Escoge una ciudad</option>
                </select>
              </div>

              <div class='regInputCont' id="contCities">
              </div>

              <div class="form-group checkbox-success-filled regInputCont">
                <input type="checkbox" id="checkbox110" class="filled-in" name="checkbox110">
                <label for="checkbox110">Aceptas <a href="#">terminos y Condiciones</a></label>
              </div>

              <div class="text-right">
                <button type="button" class="btn btnReg z-depth-2">Registrar</button>
              </div>
            </form>
          </div>

        </div>

      </div>

    </div>



<!--Footer-->
<footer class="page-footer center-on-small-only foo">

    <!--Footer Links-->
    <div class="container-fluid">
        <div class="row">

            <!--First column-->
            <div class="col-md-3 offset-md-1">
                <h5 class="title">Contacto directo</h5>
                <p>Numero Telefonico: (874)755-54-5</p>
                <p>Correo electronico: asdasda@asdas.com.mx</p>
            </div>
            <!--/.First column-->

            <hr class="hidden-md-up">

            <!--Second column-->
            <div class="col-md-3 offset-md-1">
                <h5 class="title">Quieres ser parte de nosotros?</h5>
                <ul>
                    <li><a href="#!">Calle sin nombre</a></li>
                    <li><a href="#!">No. 0000</a></li>
                    <li><a href="#!">Colonia sin Nombre</a></li>
                    <li><a href="#!">Torreon, Coah. Mex</a></li>
                </ul>
            </div>
            <!--/.Second column-->

            <hr class="hidden-md-up">

            <!--Third column-->
            <div class="col-md-4">

                <ul>
                    <li><button type="button" class="btn btn-lg fooBtn1">Danger</button></li>
                    <li><button type="button" class="btn waves-effect btn-lg fooBtn2">Danger</button></li>
                </ul>
            </div>
            <!--/.Third column-->

            <hr class="hidden-md-up">

        </div>
    </div>
    <!--/.Footer Links-->

    <br>

    <br>

    <!--Copyright-->
    <div class="footer-copyright">
        <div class="container-fluid">
            © 2015 Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>

        </div>
    </div>
    <!--/.Copyright-->

    <!--Social buttons-->
    <div class="social-section footer-copyright">
        <ul>
            <li><a class="btn-floating btn-small btn-fb"><i class="fa fa-facebook"> </i></a></li>
            <li><a class="btn-floating btn-small btn-tw"><i class="fa fa-twitter"> </i></a></li>
            <li><a class="btn-floating btn-small btn-gplus"><i class="fa fa-google-plus"> </i></a></li>
            <li><a class="btn-floating btn-small btn-li"><i class="fa fa-linkedin"> </i></a></li>
            <li><a class="btn-floating btn-small btn-git"><i class="fa fa-github"> </i></a></li>
            <li><a class="btn-floating btn-small btn-pin"><i class="fa fa-pinterest"> </i></a></li>
            <li><a class="btn-floating btn-small btn-ins"><i class="fa fa-instagram"> </i></a></li>
        </ul>
    </div>
    <!--/.Social buttons-->



</footer>
<!--/.Footer-->

</div>
<!--/Main parallax wrapper-->


@stop

@section('js')
<script type="text/javascript" src="/packages/libs/jquery-validate/jquery.validate.min.js"></script>
<script type="text/javascript" src="/packages/assets/js/landing/home.js"></script>
@stop
