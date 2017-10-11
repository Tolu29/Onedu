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
  //==========================/


  function infoStudent(){
    $user = Auth::user();
  }

}
// $user = Auth::user();
// $role = Role::create(['name' => 'student']);
// $permission = Permission::create(['name' => 'view']);
// $role->givePermissionTo('view');
