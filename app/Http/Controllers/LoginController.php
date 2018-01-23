<?php

namespace App\Http\Controllers;

use Auth;
use Redirect;
use App\User;
use App\Ciudad;
use Illuminate\Support\Facades\Mail;
use App\Mail\Welcome as WelcomeEmail;
use App\Mail\PassWord as ForgetMail;
use App\Student;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Validator;

class LoginController extends Controller
{

  function home(Request $request){
    if (Auth::user()) {
      $user = Auth::user();
      $role = DB::table('user_has_roles')
      ->where('user_id', '=', $user->id)->first();
      switch ($role->role_id) {
        case 1:
          return view('university.publications');
          break;
        case 3:
          return view('student.student-careers');
          break;
        case 4:
          return view('admin.careers');
          break;
      }
    }else {
      return view('landing.home');
    }
  }

  function signIn(Request $request){
    $data = $request->all();

    $validation = Validator::make($data,[
      'name' => 'required',
      'pass'  => 'required',
      'mail' => 'required',
      'school' => 'required',
    ]);
    if( $validation->fails()){
      return 'Ingresa los datos Correctamente';
    }else {

      $tempMail = Student::where('mail', '=', $data['mail'])->first();
      if ($tempMail == null || $tempMail->mail != $data['mail']) {

        $secret = Hash::make($data['pass']);
        $user = new User($data);
        $user->username = $data['mail'];
        $user->password = $secret;
        $user->active = 0;
        $user->token = sha1($user->username);
        $user->save();
        $user->assignRole('student');

        Mail::to($user->username, 'jonathan')
        ->send(new WelcomeEmail($student->nombre_completo,$user->token));
        
        $student = new Student($data);
        $student->nombre_completo = $data['name'];
        $student->active = 0;
        $student->escuela_anterior = $data['school'];
        $student->user_id = $user->id;
        $student->mail = $data['mail'];
        $mailUser = $student->nombre_completo;
        $student->save();


        Auth::loginUsingId($user->id);
        return 'Se ha registrado con exito';

      }else {
        return "El mail ya existe";
      }

    }

  }

  function activateStudent(Request $req,$token){
    $user = User::where("token","=", $token)->first();// buscamos a el usuario con este token|
    $req->session()->put('LogEmaiId', $user->id);
    $user->active = 1;// y lo activamos
    $user->save();
    $student = Student::where('user_id', '=', $user->id)->first();
    $student->active = 1;
    $student->save();
    return view('emails.confirmation_thanks');
  }


  function logIn(Request $request){

    $data = $request->all();

    $userdata = array(
      'username' => $data['mail'],
      'password' => $data['pass']
    );

    $user = DB::table('users')->where('username', '=', $data['mail'])->first();

    if (Auth::attempt($userdata)) {
      $user = DB::table('users')
      ->where('username', '=', $data['mail'])
      ->join('user_has_roles', 'user_has_roles.user_id', '=', 'users.id')
      ->join('roles', 'roles.id', '=', 'user_has_roles.role_id')->first();
      return $user->name;
    } else {
      return 'error al ingresar';
    }


  }



  function logOut(Request $request){
    $request->session()->flush();
    Auth::logout();
    return "Hasta pronto";
  }


  function highSchools(){
    $cities = DB::table('ciudades')->get();

    $high_Schools = DB::table('ciudades')
    ->join('preparatorias', 'preparatorias.ciudad_id', '=', 'ciudades.id')->get();

    return response()->json([
      'cities' => $cities,
      'high_Schools' => $high_Schools
    ]);
  }

  function emailEnter(Request $request){
    $id = $request->session()->get('LogEmaiId');
    Auth::loginUsingId($id);
  }


  function findMail(Request $request){
    $data = $request->all();

    $user = User::where('username', '=', $data['mail'])->first();

    if ($user) {
      $student = Student::where('user_id', '=', $user->id)->first();
      Mail::to($user->username, 'jonathan')
      ->send(new ForgetMail($student->nombre_completo,$user->token));
      return 'el mail se ha enviado';
    }else {
      return 'el mail no existe';
    }

  }

  function restarMail(Request $req,$token){
    return view('emails.restart-mail',['token'=>$token]);
  }

  function restartPassword(Request $request){
    $data = $request->all();

    $secret = Hash::make($data['password']);
    $user = User::where('token', '=', $data['token'])->first();
    $user->password = $secret;
    $user->save();

    return 'La contraseña se ha gurdado con exito';
  }


}
// $user = Auth::user();
// $role = Role::create(['name' => 'student']);
// $permission = Permission::create(['name' => 'view']);
// $role->givePermissionTo('view');
