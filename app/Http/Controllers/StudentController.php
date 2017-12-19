<?php

namespace App\Http\Controllers;

use Auth;
use Redirect;
use App\User;
use App\Career;
use App\Student;
use App\ClasesMuestra;
use App\StudyPlans;
use App\Prospectos;
use App\Noticias;
use App\Aptitudes;
use App\University;
use App\Chat;
use Illuminate\Support\Facades\DB;
use App\Informations;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Validator;

class StudentController extends Controller
{

  //===========================//
    #funciones para Carreras
  //==========================/

  function getCareers(Request $request){

    $user = Auth::user();

    $careers = Career::where('active', '=', 1)
    ->where('tipo', '=', 'Licenciatura')->get();

    if ($user->active == 0) {

      if ($request->session()->get('student_active') == '' || $request->session()->get('student_active') == null) {
        $request->session()->put('student_active', 2);
      }elseif ($request->session()->get('student_active') == 2) {
        $request->session()->put('student_active', 3);
      }

    }else {
      $request->session()->put('student_active', 1);
    }

    return response()->json([
      'careers' => $careers,
      'active' => $request->session()->get('student_active')
    ]);
  }



  function getSelectCareer(Request $request){
    $data  = $request->all();

    $request->session()->put('Student_career_id', $data['id']);

    $career = DB::table('careers')
    ->where('careers.id', '=', $data['id'])->first();

    $related = Career::where('grupo', '=', $data['group'])
    ->where('active', '=', 1)->orderBy('nombre', 'desc')->get();

    $universities = DB::table('careers_universities')
    ->where('careers_universities.carrera_id', '=', $data['id'])
    ->join('universities', 'universities.id', '=', 'careers_universities.universidad_id')
    ->where('universities.active', '=', 1)
    ->join('addresses', 'addresses.id', '=', 'universities.direccion_id')->get();

    return response()->json([
      'career' => $career,
      'related' => $related,
      'universities' => $universities
    ]);
  }

  function infoselected(Request $request){

    $data = $request->all();
    $request->session()->put('Student_university_id', $data['id']);
    $Student_career_id = $request->session()->get('Student_career_id');
    $user = Auth::user();

    $student = Student::where('user_id', '=', $user->id)->first();

    $info = Informations::where('carrera_id', '=', $Student_career_id)
    ->where('universidad_id', '=', $data['id'])->get();

    $class_sample = ClasesMuestra::where('carrera_id', '=', $Student_career_id)
    ->where('universidad_id', '=', $data['id'])->first();

    $plans = StudyPlans::where('carrera_id', '=', $Student_career_id)
    ->where('universidad_id', '=', $data['id'])->get();

    $like = Prospectos::where('carrera_id', '=', $Student_career_id)
    ->where('universidad_id', '=', $data['id'])
    ->where('student_id', '=', $student->id)
    ->select('active')->first();

    return response()->json([
      'plans' => $plans,
      'class_sample' =>$class_sample,
      'info' => $info,
      'like' => $like
    ]);
  }

  function likeUniversity(Request $request){

    $data = $request->all();
    $user = Auth::user();
    $student_university_id = $request->session()->get('Student_university_id');
    $Student_career_id = $request->session()->get('Student_career_id');

    $student = Student::where('user_id', '=', $user->id)->first();

    $prospects = new Prospectos($data);
    $prospects->universidad_id = $student_university_id;
    $prospects->carrera_id = $Student_career_id;
    $prospects->student_id = $student->id;
    $prospects->save();

    return 'listo';
  }

  function delLike(Request $request){

    $data = $request->all();
    $user = Auth::user();
    $student_university_id = $request->session()->get('Student_university_id');
    $Student_career_id = $request->session()->get('Student_career_id');

    $student = Student::where('user_id', '=', $user->id)->first();

    $prospects = Prospectos::where('carrera_id', '=', $Student_career_id)
    ->where('universidad_id', '=', $student_university_id)
    ->where('student_id', '=', $student->id)->delete();

    return 'listo';

  }

  //===========================//
    #funciones para profile
  //==========================//


  function infoStudent(){
    $user =  User::join('students', 'students.user_id', '=', 'users.id')->where('users.id', '=', Auth::user()->id)->first();
    return $user;
  }

  function updateProfile(Request $req){
    $data = $req->all();
    $user_id = Auth::user()->id;

    $student = Student::where('user_id', '=', $user_id)->first();
    $user = User::where('id', '=', $user_id)->first();

    $userMail = User::where('username', '=', $data['email'])->get();
    $studentMail = Student::where('mail', '=', $data['email'])->get();

    if (count($userMail) > 0 || count($studentMail) > 0){
      if ($student->mail != $data['email'] || $user->username != $data['email']){
        return "El Correo electrónico ya se encuentra en uso";
      }
    }

    $student->nombre_completo = $data['nombre'];
    $student->mail = $data['email'];
    $user->username = $data['email'];
    if ($data['password'] != ""){
      $user->password = Hash::make($data['password']);
    }

    $user->save();
    $student->save();

    return 'success';
  }

  function getFavorites(){
    return Prospectos::join('students', 'students.id', '=', 'prospectos.student_id')
    ->join('universities', 'universities.id', '=', 'prospectos.universidad_id')
    ->join('careers', 'careers.id', '=', 'prospectos.carrera_id')
    ->where('students.user_id', '=', Auth::user()->id)
    ->select('universities.logo', 'prospectos.id')
    ->get();
  }

  function delFavoriteProf(Request $request){

    $data = $request->all();
    $prospects = Prospectos::where('id', '=', $data['id'])->delete();
    return 'success';

  }


  //===========================//
    #funciones para news
  //==========================//

  function likeNews(Request $request){
    $user = Auth::user();
    $news = [];
    $student = Student::where('user_id', '=', $user->id)->first();
    $likes = Prospectos::where('student_id', '=', $student->id)->get();
    $universities = count($likes);

    for ($i=0; $i < $universities; $i++) {
      $news[$i] = DB::table('noticias')
      ->where('noticias.universidad_id', '=', $likes[$i]->universidad_id)
      ->join('universities', 'universities.id', '=', 'noticias.universidad_id')
      ->select('avance', 'noticias.id', 'cuerpo', 'logo', 'color')->get();
    }

    $onedu = University::where('nombre', '=', 'ONEDU')->first();
    $onedu_news = DB::table('noticias')
    ->where('noticias.universidad_id', '=', $onedu->id)
    ->join('universities', 'universities.id', '=', 'noticias.universidad_id')
    ->select('avance', 'noticias.id', 'cuerpo', 'logo', 'color')->get();
    // return $onedu_news;

    return response()->json([
      'news' => $news,
      'onedu_news' => $onedu_news
    ]);

  }

  //===========================//
    #funciones para guide
  //==========================//


  function test(Request $request){
    $data = $request->all();
    $user = Auth::user();

    $aptitud = new Aptitudes($data);
    $aptitud->científicos = $data['científicos'];
    $aptitud->administrativo = $data['administrativo'];
    $aptitud->aire_libre = $data['aire_libre'];
    $aptitud->mecanicos = $data['mecanicos'];
    $aptitud->artisticos = $data['artisticos'];
    $aptitud->relacionales = $data['relacionales'];
    $aptitud->sociales = $data['sociales'];
    $aptitud->save();

    $student = Student::where('user_id', '=', $user->id)->first();
    $student->grupo = $data['single'];
    $student->aptitudes_id = $aptitud->id;
    $student->save();

    return $student;
  }

  function getRelatedCareers(Request $request){
    $data = $request->all();
    $user = Auth::user();
    $student = Student::where('user_id', '=', $user->id)->first();
    $careers = Career::where('grupo', '=', $student->grupo)->get();
    $aptitudes = Aptitudes::where('id', '=', $student->aptitudes_id)->first();

    return response()->json([
      'careers' => $careers,
      'student' => $student,
      'aptitudes' => $aptitudes
    ]);
  }

  //===========================//
    #funciones para postgrados
  //==========================//

  function getPostCareers(Request $request){

    $careers = Career::where('active', '=', 1)
    ->where('tipo', '=', 'Posgrado')->get();
    return response()->json([
      'careers' => $careers
    ]);
  }

  //===========================//
    #funciones para baseStudent
  //==========================//

  function getIni(Request $request){
    $data = $request->all();
    $user = Auth::user();
    $student = Student::where('user_id', '=', $user->id)
    ->select('nombre_completo')->first();
    return $student;
  }

  //=====================//
    #funciones para CHAT
  //=====================//

  function schoolInfo(Request $request){
    $data = $request->all();
    $university = University::where('id', '=', $data['id'])->first();
    $request->session()->put('uniChat_id', $university->user_id);
    return 'La sesion se ha guardado correctamente';
  }

  function messageSend(Request $request){

    $data = $request->all();
    $user = Auth::user();
    $chat_id = $request->session()->get('uniChat_id');

    $roles = DB::table('user_has_roles')
    ->where('user_id', '=', $user->id)->first();
    if ($roles->role_id == 3) {
      $rol = 'estudiante';
    }elseif ($roles->role_id == 1) {
      $rol == 'universidad';
    }

    $message = new Chat($data);
    $message->estatus_user = 0;
    $message->estatus_universidad = 0;
    $message->user_id = $user->id;
    $message->universidad_id = $chat_id;
    $message->role = $rol;
    $message->mensaje = $data['mensaje'];
    $message->save();

    return "el mensaje se ha guardado correctamente";
  }


  function allMessages(Request $request){
    $data = $request->all();
    $chat_id = $request->session()->get('uniChat_id');
    $user_id = Auth::user()->id;

    $universities = University::where('active', '=', 1)->get();
    $messages = DB::table('universities')
    ->where('universities.active', '=', 1)
    ->join('chat', 'chat.universidad_id', '=', 'universities.id')
    ->where('chat.user_id', '=', $user_id)
    ->select('mensaje', 'universities.nombre', 'universities.id', 'chat.role', 'chat.id as chat_id')->get();

    // $messages = null;

    return response()->json([
      'universidades' => $universities,
      'mensajes' => $messages,
      'chat_id' => $chat_id
    ]);
  }


  function notification(Request $request){
    $data = $request->all();
    $chat_id = $request->session()->get('uniChat_id');
    $user_id = Auth::user()->id;

    $messages = DB::table('universities')
    ->where('universities.active', '=', 1)
    ->join('chat', 'chat.universidad_id', '=', 'universities.id')
    ->where('chat.user_id', '=', $user_id)
    ->where('chat.estatus_user', '=', 0)
    ->select('mensaje', 'universities.nombre', 'universities.id', 'chat.role', 'chat.id as chat_id')->get();

    return $messages;

  }

  function readMessages(Request $request){
    $data = $request->all();
    $user = Auth::user();
  }

}
// $user = Auth::user();
// $role = Role::create(['name' => 'student']);
// $permission = Permission::create(['name' => 'view']);
// $role->givePermissionTo('view');


// $messages = DB::select("select * from chat where user_id = $user_id and destinatario_id = $chat_id or user_id = $chat_id and destinatario_id = $user_id");
