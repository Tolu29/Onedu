@extends('template.master')

@section('css')
<link rel="stylesheet" href="/packages/assets/css/templates/baseStudent.css">
@yield('css-plus')
@stop

@section('skin')
class="fixed-sn white-skin backColor"
@stop

@section('head')

<!--Double navigation-->
<header>
    <!-- Sidebar navigation -->
    <ul id="slide-out" class="side-nav fixed custom-scrollbar baseNav sideNavStyle">
        <!-- Logo -->
        <li>
            <div class="logo-wrapper">
              <p id="userPhoto"></p>
                <!-- <img src="/packages/assets/img/miscellaneous/user.png" class="img-fluid flex-center mx-auto" id="userPhoto"> -->
            </div>
        </li>
        <!--/. Logo -->
        <br><br><br><br><br>
        <!-- Side navigation links -->
        <li>
            <ul class="collapsible collapsible-accordion sideNavStyle">
                <li>
                  <a class="collapsible-header waves-effect arrow-r white-text baseFont" href="/student-news"> Noticias</a>
                </li>
                <li>
                  <a class="collapsible-header waves-effect arrow-r white-text baseFont" href="/student-careers">Carreras</a>
                </li>
                <li>
                  <a class="collapsible-header waves-effect arrow-r white-text baseFont" href="/student-postgraduate">Posgrados</a>
                </li>
                <li>
                  <a class="collapsible-header waves-effect arrow-r white-text baseFont" href="/student-related">Descubre</a>
                </li>
                <li>
                  <a class="collapsible-header waves-effect arrow-r white-text baseFont" href="/student-messages">Mensajes</a>
                </li>
                <li>
                  <a class="collapsible-header waves-effect arrow-r white-text baseFont" href="/student-profile">Perfil</a>
                </li>
                <li>
                  <br>
                </li>
                <li class="text-center socialNav">
                  <a href="https://www.facebook.com/OneduOficial/" target="_blank"><i class="fa fa-facebook linknet"></i></a>
                  <a href="https://www.youtube.com/channel/UCD9brIfPGQ3lyRHEKG2IZ8w/featured" target="_blank"><i class="fa fa-youtube linknet"></i></a>
                  <a href="https://www.instagram.com/onedu.oficial" target="_blank"><i class="fa fa-instagram linknet"></i></a>
                </li>
                <li>
                  <a href="/terms-and-conditions" target="_blank" class="terms">Terminos y condiciones</a>
                </li>
            </ul>
        </li>
        <!--/. Side navigation links -->
        <!-- <div class="sidenav-bg mask-strong"></div> -->
    </ul>
    <!--/. Sidebar navigation -->
    <!-- Navbar -->
    <nav class="navbar fixed-top navbar-toggleable-md navbar-dark scrolling-navbar double-nav z-depth-2">
      <!-- Breadcrumb-->
      <div class="breadcrumb-dn mr-auto burguer">
          <img src="/packages/assets/img/miscellaneous/logo.png" class="img-fluid flex-center" id="Baselogo">
      </div>
      <!-- SideNav slide-out button -->
      <div class="float-left landOnedu">
        <h2 class="textOnedu"><span style="color: #f4c945 ;">ON</span><span style="color: rgb(57, 156, 95);">E</span><span style="color: ;">D</span>U</h2>
        <a href="#" data-activates="slide-out" class="button-collapse hideBurguer"><i class="fa fa-bars  burguerColor"></i></a>
      </div>

      <ul class="nav navbar-nav nav-flex-icons ml-auto">
          <li class="nav-item">
            <button type="button" class="btn waves-effect BtnExit z-depth-2">Salir</button>
          </li>
      </ul>
    </nav>
    <!-- /.Navbar -->
</header>
<!--/.Double navigation-->

@stop

@section('content')
<span id="perro">
  @yield('content-student')
</span>
@stop



@section('js')
<script type="text/javascript" src="/packages/assets/js/baseAll.js"></script>
<script type="text/javascript" src="/packages/assets/js/baseStudent.js"></script>
<!-- <script type="text/javascript" src="/packages/assets/js/template/baseStudent.js"></script> -->
@yield('js-plus')
@stop
