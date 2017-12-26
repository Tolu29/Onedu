<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


/*
* COMIENZO rutasLogIn
*/

  // LANDING
  Route::get('/', 'LoginController@home');

  Route::get('/terms-and-conditions', function () {
      return view('landing.terms-and-conditions');
  });

  Route::get('/nueva-contrasena', function () {
      return view('emails.sendMail');
  });

  Route::get("/activar/{token}", 'LoginController@activateStudent');
  Route::get("/restart/{token}", 'LoginController@restarMail');

  Route::post('/signIn', 'LoginController@signIn');
  Route::post('/logIn', 'LoginController@logIn');
  Route::post('/logOut', 'LoginController@logOut');
  Route::post('/highSchools', 'LoginController@highSchools');
  Route::post('/emailEnter', 'LoginController@emailEnter');
  Route::post('/findMail', 'LoginController@findMail');
  Route::post('/restartPassword', 'LoginController@restartPassword');

/*
* FIN rutas rutasLogIn
*/


Route::group(['middleware' => ['auth']], function() {


  Route::group(['middleware' => ['role:student,view']], function () {
    //VISTAS ESTUDIANTE
    Route::get('/student-careers', function () {
        return view('student.student-careers');
    });

    Route::get('/student-guide', function () {
        return view('student.student-guide');
    });

    Route::get('/student-messages', function () {
        return view('student.student-messages');
    });

    Route::get('/student-news', function () {
        return view('student.student-news');
    });

    Route::get('/student-profile', function () {
        return view('student.student-profile');
    });

    Route::get('/student-related', function () {
        return view('student.student-related');
    });

    Route::get('/student-postgraduate', function () {
        return view('student.student-postgraduate');
    });


    /*
    * COMIENZO rutas StudentController
    */
      Route::post('/getCareers', 'StudentController@getCareers');
      Route::post('/getSelectCareer', 'StudentController@getSelectCareer');
      Route::post('/infoselected', 'StudentController@infoselected');
      Route::post('/likeUniversity', 'StudentController@likeUniversity');
      Route::post('/delLike', 'StudentController@delLike');
      Route::post('/updateProfile', 'StudentController@updateProfile');
      Route::post('/getInfoStudent', 'StudentController@infoStudent');
      Route::post('/getFavorites', 'StudentController@getFavorites');
      Route::post('/delFavoriteProf', 'StudentController@delFavoriteProf');
      Route::post('/likeNews', 'StudentController@likeNews');
      Route::post('/test', 'StudentController@test');
      Route::post('/getRelatedCareers', 'StudentController@getRelatedCareers');
      Route::post('/getIni', 'StudentController@getIni');
      Route::post('/getPostCareers', 'StudentController@getPostCareers');
      Route::post('/schoolInfo', 'StudentController@schoolInfo');
      Route::post('/messageSend', 'StudentController@messageSend');
      Route::post('/allMessages', 'StudentController@allMessages');
      Route::post('/notification', 'StudentController@notification');

    /*
    * FIN rutas StudentController
    */

  });



  Route::group(['middleware' => ['role:universidad,gestion noticias']], function () {
    //VISTAS DE UNIVERSIDADES
    Route::get('/publications', function () {
        return view('university.publications');
    });

    Route::get('/updNew', function () {
        return view('university.updNew');
    });

    Route::get('/messages', function () {
        return view('university.messages');
    });

    Route::get('/newPublications', function () {
        return view('university.newPublications');
    });

    /*
    * COMIENZO rutas UniversityController
    */

    // vista newPublications
    Route::post('/saveNews', 'UniversityController@saveNews');
    Route::post('/getUniNews', 'UniversityController@getUniNews');
    Route::post('/sessionUni', 'UniversityController@sessionUni');
    Route::post('/infoNew', 'UniversityController@infoNew');
    Route::post('/updateNew', 'UniversityController@updateNew');
    Route::post('/imgUni', 'UniversityController@imgUni');
    Route::post('/UniallMessages', 'UniversityController@UniallMessages');
    Route::post('/Uninotification', 'UniversityController@Uninotification');
    Route::post('/UnimessageSend', 'UniversityController@UnimessageSend');

    /*
    * FIN rutas UniversityController
    */
  });



  Route::group(['middleware' => ['role:admin,administrar']], function () {
    // VISTAS ADMIN
    Route::get('/schools', function () {
        return view('admin.schools');
    });

    Route::get('/admin-images', function () {
        return view('admin.admin-images');
    });

    // Route::get('/adminUsers', function () {
    //     return view('admin.adminUsers');
    // });

    Route::get('/careers', function () {
        return view('admin.careers');
    });

    Route::get('/information', function () {
        return view('admin.information');
    });

    Route::get('/admin-preview', function () {
        return view('admin.admin-preview');
    });

    Route::get('/admin-data', function () {
        return view('admin.admin-data');
    });

    Route::get('/admin-news', function () {
        return view('admin.admin-news');
    });


    /*
    * COMIENZO rutas administerController
    */
    //vista schools
    Route::post('/saveUni', 'AdministerController@save');
    Route::post('/allUniversities', 'AdministerController@allUniversities');
    Route::post('/deleteUniversity', 'AdministerController@deleteUniversity');
    Route::post('/universityInfo', 'AdministerController@universityInfo');
    Route::post('/updateUniversity', 'AdministerController@updateUniversity');
    Route::post('/availableCareers', 'AdministerController@availableCareers');
    Route::post('/saveAssignedCar', 'AdministerController@saveAssignedCar');
    Route::post('/delAssignedCar', 'AdministerController@delAssignedCar');
    Route::post('/newinfo', 'AdministerController@newinfo');
    Route::post('/location', 'AdministerController@location');
    // vista careers
    Route::post('/saveCareer', 'AdministerController@saveCareer');
    Route::post('/allCareers', 'AdministerController@allCareers');
    Route::post('/deleteCareer', 'AdministerController@deleteCareer');
    Route::post('/infoCareer', 'AdministerController@infoCareer');
    Route::post('/updateCareer', 'AdministerController@updateCareer');
    //vista informacion
    Route::post('/getAllInfo', 'AdministerController@getAllInfo');
    Route::post('/saveAll', 'AdministerController@saveAll');
    Route::post('/updateInfo', 'AdministerController@updateInfo');
    // vista admin-images
    Route::post('/saveImg', 'AdministerController@saveImg');
    Route::post('/getAllImg', 'AdministerController@getAllImg');
    Route::post('/getImgInfo', 'AdministerController@getImgInfo');
    Route::post('/updImg', 'AdministerController@updImg');
    Route::post('/deleteImg', 'AdministerController@deleteImg');
    //vista admin-data
    Route::post('/dataBaseInfo', 'AdministerController@dataBaseInfo');
    Route::post('/downloadExcel', 'AdministerController@downloadExcel');
    // vista noticias
    Route::post('/allAdminNews', 'AdministerController@allAdminNews');
    Route::post('/adminDelNews', 'AdministerController@adminDelNews');
    //vista mensajes
    /*
    * FIN rutas administerController
    */
  });


});
