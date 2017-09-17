<?php

namespace App\Http\Controllers;

use Auth;
use Redirect;
use App\User;
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

  function signIn(Request $request){
    $data = $request->all();

    $validation = Validator::make($data,[
      'name' => 'required',
      'surname' => 'required',
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
        $user->active = 1;
        $user->token = sha1($user->username);
        $user->save();
        $user->assignRole('student');

        $student = new Student($data);
        $student->nombre = $data['name'];
        $student->apellidos = $data['surname'];
        $student->active = 1;
        $student->escuela_anterior = $data['school'];
        $student->user_id = $user->id;
        $student->mail = $data['mail'];
        $student->save();

        Auth::loginUsingId($user->id);

        return "Se ha registrado con exito";

      }else {
        return "El mail ya existe";
      }

    }

  }


  function logIn(Request $request){

    $data = $request->all();

    $userdata = array(
      'username' => $data['mail'],
      'password' => $data['pass']
    );

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



  function logOut(){
   Auth::logout();
   return "Hasta pronto";
  }


}
// $user = Auth::user();
// $role = Role::create(['name' => 'student']);
// $permission = Permission::create(['name' => 'view']);
// $role->givePermissionTo('view');
