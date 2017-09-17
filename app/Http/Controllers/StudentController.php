<?php

namespace App\Http\Controllers;

use Auth;
use Redirect;
use App\User;
use App\Career;
use App\Student;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Validator;

class StudentController extends Controller
{

  function getCareers(){
    $careers = Career::where('active', '=', 1)->get();
    return $careers;
  }

}
// $user = Auth::user();
// $role = Role::create(['name' => 'student']);
// $permission = Permission::create(['name' => 'view']);
// $role->givePermissionTo('view');
