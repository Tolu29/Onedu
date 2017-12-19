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
                <img src="" class="img-fluid flex-center mx-auto" id="userPhoto">
            </div>
        </li>
        <!--/. Logo -->
        <br><br><br><br><br>
        <!-- Side navigation links -->
        <li>
            <ul class="collapsible collapsible-accordion sideNavStyle">
                <li>
                  <a class="collapsible-header waves-effect arrow-r white-text baseFont" href="/publications"> Publicaciones</a>
                </li>
                <!-- <li>
                  <a class="collapsible-header waves-effect arrow-r white-text baseFont">Mensajes</a>
                </li> -->
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
          <a href="#" data-activates="slide-out" class="button-collapse"><i class="fa fa-bars  burguerColor"></i></a>
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
  @yield('content-university')
@stop



@section('js')
<script type="text/javascript" src="/packages/assets/js/baseAll.js"></script>
<script type="text/javascript" src="/packages/assets/js/baseUniversity.js"></script>
@yield('js-plus')
@stop
