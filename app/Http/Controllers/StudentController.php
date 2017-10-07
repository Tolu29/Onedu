<?php

namespace App\Http\Controllers;

use Auth;
use Redirect;
use App\User;
use App\Career;
use App\Student;
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

  function getCareers(){
    $careers = Career::where('active', '=', 1)->get();
    return $careers;
  }

  function getSelectCareer(Request $request){
    $data  = $request->all();

    $request->session()->put('Student_career_id', $data['id']);

    $career = DB::table('careers')
    ->where('careers.id', '=', $data['id'])->first();

    $related = Career::where('grupo', '=', $data['group'])->orderBy('nombre', 'desc')->get();

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
    $Student_career_id = $request->session()->get('Student_career_id');
    $info = Informations::where('carrera_id', '=', $Student_career_id)
    ->where('universidad_id', '=', $data['id'])->get();
    return $info;
  }

  //===========================//
    #funciones para profile
  //==========================/


  function infoStudent(){
    $user = Auth::user();
  }

}
// $user = Auth::user();
// $role = Role::create(['name' => 'student']);
// $permission = Permission::create(['name' => 'view']);
// $role->givePermissionTo('view');
