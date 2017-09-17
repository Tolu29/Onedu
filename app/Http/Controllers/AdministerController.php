<?php
namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Validator;
use App\Address;
use App\StudyPlans;
use App\User;
use App\University;
use App\Installation;
use App\ClasesMuestra;
use App\Informations;
use App\CareersUniversities;
use App\Career;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Support\Facades\Hash;

class AdministerController extends Controller
{

  //===========================//
    #funciones para Carreras
  //==========================//

  function allCareers(){
    $careers = Career::where('active', '=', 1)->get();
    return $careers;
  }


  function saveCareer(Request $request){

    $data = $request->all();

    $validation = Validator::make($data,[
      'career' => 'required',
      'level' => 'required',
      'group' => 'required',
      'profile' => 'required',
      'description' => 'required',
    ]);
    if( $validation->fails()){
      return 'Ingresa los datos correctamente';
    }else {

      $career = new Career($data);
      $career->nivel_educativo = $data['level'];
      $career->active = 1;
      $career->nombre = $data['career'];
      $career->grupo = $data['group'];
      $career->perfil = $data['profile'];
      $career->descripcion = $data['description'];
      $career->save();
      return 'La carrera se ha registrado con exito';

    }
  }

  function deleteCareer(Request $request){
    $data = $request->all();
    $career = Career::where('id', '=', $data['id'])->first();
    $career->active = 0;
    $career->save();
    return "La carrera se ha borrado con exito";
  }

  function infoCareer(Request $request){
    $data = $request->all();
    $career = Career::where('id', '=', $data['id'])
    ->select('nombre', 'nivel_educativo', 'descripcion', 'perfil', 'grupo')->first();
    return $career;
  }


  function updateCareer(Request $request){
    $data = $request->all();

    $validation = Validator::make($data,[
      'career' => 'required',
      'level' => 'required',
      'group' => 'required',
      'profile' => 'required',
      'description' => 'required',
    ]);
    if( $validation->fails()){
      return 'Ingresa los datos correctamente';
    }else {

      $career = Career::where('id', '=', $data['id'])->first();
      $career->nombre = $data['career'];
      $career->nivel_educativo = $data['level'];
      $career->grupo = $data['group'];
      $career->perfil = $data['profile'];
      $career->descripcion = $data['description'];
      $career->save();

      return 'La carrera se actualizo correctamente';
    }
  }

    //===========================//
      #funciones para universidades
    //==========================//

function allUniversities(){
  $universities = DB::table('universities')->where('active', '=', '1')
  ->join('addresses', 'addresses.id', '=', 'universities.direccion_id')
  ->select('universities.id', 'universities.nombre', 'addresses.calle', 'addresses.num_ext')->get();
  return $universities;
}

  function save(Request $request){

    $data = $request->all();
    $validation = Validator::make($data,[
      'name' => 'required',
      'color' => 'required',
      'formLogo' => 'required',
      'street' => 'required',
      'numExt' => 'required',
      'col' => 'required',
      'username' => 'required',
      'password' => 'required',
    ]);
    if( $validation->fails()){

      return 'Tenemos un Error';
    }else {

      $secret = Hash::make($data['password']);
      $user = new User($data);
      $user->username = $data['username'];
      $user->password = $secret;
      $user->active = 1;
      $user->token = sha1($user->username);
      $user->save();
      $user->assignRole('universidad');

      $address = new Address($data);
      $address->calle = $data['street'];
      $address->num_int = $data['numInt'];
      $address->num_ext = $data['numExt'];
      $address->colonia = $data['col'];
      $address->save();

      $file = $data['formLogo'];
      $NewNameLogo = makeRandomName() . "." . $file->getClientOriginalExtension();
      $destinationPath = public_path()."/packages/assets/img/universities/logos/";
      $university = new University($data);
      $university->nombre = $data['name'];
      $university->active = 1;
      $university->user_id = $user->id;
      $university->direccion_id = $address->id;
      $university->campus = $data['campus'];
      $university->color = $data['color'];
      $university->logo = $NewNameLogo;
      $university->save();
      $file->move($destinationPath, $NewNameLogo);

      return 'La Universidad se registro con exito';

    }
  }

  function universityInfo(Request $request){
    $data = $request->all();

    $request->session()->put('university_id', $data['university_id']);
    $university = DB::table('universities')
    ->where('universities.id', '=', $data['university_id'])
    ->join('addresses', 'addresses.id', '=', 'universities.direccion_id')
    ->join('users', 'users.id', '=', 'universities.user_id')->get();

    $careersUniversity = DB::table('careers_universities')
    ->where('careers_universities.active', '=', 1)
    ->where('careers_universities.universidad_id', '=', $data['university_id'])
    ->join('careers', 'careers.id' , '=', 'careers_universities.carrera_id')
    ->where('careers.active', '=', 1)
    ->select('careers.nombre', 'careers_universities.id', 'careers.id as careerId')->get();
    return response()->json([
      'university' => $university,
      'careersUniversity' => $careersUniversity
    ]);
  }

  function updateUniversity(Request $request){
    $data = $request->all();
    $validation = Validator::make($data,[
      'id' => 'required',
      'name' => 'required',
      'campus' => 'required',
      'color' => 'required',
      'street' => 'required',
      'numInt' => 'required',
      'numExt' => 'required',
      'col' => 'required',
      'username' => 'required',
      'infoInput' => 'required',
    ]);
    if( $validation->fails()){
      return 'Tenemos un Error';
    }else {

      $university = University::where('id', '=', $data['id'])->first();
      $university->nombre = $data['name'];
      $university->campus = $data['campus'];
      $university->color = $data['color'];
      if ($data['infoInput'] != 'no_val108') {
        $file = $data['infoInput'];
        $NewNameLogo = makeRandomName() . "." . $file->getClientOriginalExtension();
        $destinationPath = public_path()."/packages/assets/img/universities/logos/";
        $university->logo = $NewNameLogo;
        $file->move($destinationPath, $NewNameLogo);
      }
      $university->save();

      $address = Address::where('id', '=', $university->direccion_id)->first();
      $address->calle = $data['street'];
      $address->num_int = $data['numInt'];
      $address->num_ext = $data['numExt'];
      $address->colonia = $data['col'];
      $address->save();

      $user = User::where('id', '=', $university->user_id)->first();
      $user->username = $data['username'];
      if ($data['password'] != null || $data['password'] != "") {
        $secret = Hash::make($data['password']);
        $user->password = $secret;
      }
      $user->token = sha1($user->username);
      $user->save();

      return 'La Universidad se ha actualizado correctamente';

    }
  }

  function deleteUniversity(Request $request){
    $data = $request->all();
    $university = University::where('id', '=', $data['id'])->first();
    $university->active = 0;
    $university->save();
    return 'La universidad se ha borrado con exito';
  }


  function availableCareers(Request $request){
    $data = $request->all();
    $careers = Career::where('active', '=', 1)->get();
    $careersAssigned = CareersUniversities::where('universidad_id', '=', $data['id'])
    ->where('active', '=', 1)->get();
    return response()->json([
      'careers' => $careers,
      'careersAssigned' => $careersAssigned
    ]);
  }

  function saveAssignedCar(Request $request){
    $data = $request->all();

    $id = array();
    $id = $data['idCheks'];
    $elem = count($id);
    for ($i=1; $i < $elem; $i++) {
      $careersUniversity = new CareersUniversities();
      $careersUniversity->active = 1;
      $careersUniversity->carrera_id = $id[$i];
      $careersUniversity->universidad_id = $id['0'];
      $careersUniversity->save();
    }
    return  "Las Carreras se han registrado Correctamente";
  }

  function delAssignedCar(Request $request){
    $data = $request->all();

    $careersUniversity = CareersUniversities::where('id', '=', $data['id'])->first();
    $careersUniversity->active = 0;
    $careersUniversity->save();

    $universidad_id = $request->session()->get('university_id');
    $infos = DB::table('informations')
    ->where('informations.universidad_id', '=', $universidad_id)
    ->where('informations.carrera_id', '=', $data['career_id'])->delete();

    return 'La carrera se ha eliminado correctamente';
  }

  function newinfo(Request $request){
    $data = $request->all();
    $request->session()->put('career_id', $data['id']);
  }

  //===========================//
    #funciones para Informaciones
  //==========================//

  function getInformation(Request $request){
    $data = $request->all();

    $carrera_id = $request->session()->get('career_id');

    $universidad_id = $request->session()->get('university_id');
    $info = Informations::where('titulo', '=', $data['title'])
    ->where('carrera_id', '=', $carrera_id)
    ->where('universidad_id', '=', $universidad_id)->first();
    return $info;
  }

  function saveInformation(Request $request){

    $data = $request->all();

    $validation = Validator::make($data,[
      'title' => 'required',
      'text' => 'required',
    ]);
    if( $validation->fails()){
      return 'Tenemos un Error';
    }else {

      $carrera_id = $request->session()->get('career_id');
      $universidad_id = $request->session()->get('university_id');
      if ($data['decision'] === '1') {
        $information = new Informations($data);
        $information->titulo = $data['title'];
        $information->descripcion = $data['text'];
        $information->universidad_id = $universidad_id;
        $information->carrera_id = $carrera_id;
        $information->save();
        return 'La informacion se ha guardado correctamente';
      }else {
        $information = Informations::where('universidad_id', '=', $universidad_id)
        ->where('carrera_id', '=', $carrera_id)
        ->where('titulo', '=', $data['title'])->first();
        $information->titulo = $data['title'];
        $information->descripcion = $data['text'];
        $information->save();
        return 'La informacion se ha actualizado correctamente';
      }

    }
  }

  function getVideo(Request $request){
    $data = $request->all();

    $carrera_id = $request->session()->get('career_id');
    $universidad_id = $request->session()->get('university_id');
    $video = ClasesMuestra::where('carrera_id', '=', $carrera_id)
    ->where('universidad_id', '=', $universidad_id)->first();
    return $video;
  }

  function mixVideo(Request $request){
    $data = $request->all();

    $validation = Validator::make($data,[
      'name' => 'required',
      'embed' => 'required',
    ]);
    if( $validation->fails()){
      return 'Tenemos un Error';
    }else {

    $carrera_id = $request->session()->get('career_id');
    $universidad_id = $request->session()->get('university_id');
    if ($data['decision'] == '1') {
      $video = new ClasesMuestra($data);
      $video->nombre = $data['name'];
      $video->embed = $data['embed'];
      $video->carrera_id = $carrera_id;
      $video->universidad_id = $universidad_id;
      $video->save();
      return 'El video se ha registrado con exito';
    }else {
      $video = ClasesMuestra::where('universidad_id', '=', $universidad_id)
      ->where('carrera_id', '=', $carrera_id)->first();
      $video->nombre = $data['name'];
      $video->embed = $data['embed'];
      $video->save();
      return 'Video se ha actualizado con exito';

      }
    }
  }

  function getPlans(Request $request){

    $universidad_id = $request->session()->get('university_id');

    $plans = StudyPlans::where('universidad_id', '=', $universidad_id)
    ->where('active', '=', 1)->get();

    return $plans;
  }

  function mixPlans(Request $request){
    $data = $request->all();

    $validation = Validator::make($data,[
      'name' => 'required',
      'text' => 'required',
    ]);
    if( $validation->fails()){
      return 'Tenemos un Error';
    }else {

    if ($data['decision'] == '1') {

      $universidad_id = $request->session()->get('university_id');
      $plan = new StudyPlans($data);
      $plan->nombre_plan = $data['name'];
      $plan->descripcion = $data['text'];
      $plan->active = 1;
      $plan->universidad_id = $universidad_id;
      $plan->save();
      return 'El plan se ha guardado correctamente';
    }else {

      $plan = StudyPlans::where('id', '=', $data['id'])->first();
      $plan->nombre_plan = $data['name'];
      $plan->descripcion = $data['text'];
      $plan->save();
      return 'El plan se ha actualizado correctamente';
      }
    }
  }

  function deletePlan(Request $request){
    $data = $request->all();

    $plan = StudyPlans::where('id', '=', $data['id'])->first();
    $plan->active = 0;
    $plan->save();

    return 'El plan se ha borrado con exito';
  }


  //=============================//
    #funciones para Instalaciones
  //============================//

  function getAllImg(Request $request){
    $data = $request->all();

    $universidad_id = $request->session()->get('university_id');
    $imgs = Installation::where('universidad_id', '=', $universidad_id)
    ->where('active', '=', 1)->get();

    return $imgs;
  }

  function getImgInfo(Request $request){
    $data = $request->all();

    $img = Installation::where('id', '=', $data['id'])->first();

    return $img;
  }

  function saveImg(Request $request){
    $data = $request->all();

    $validation = Validator::make($data,[
      'name' => 'required',
      'formProperty' => 'required',
    ]);
    if( $validation->fails()){
      return 'Tenemos un Error';
    }else {
      $universidad_id = $request->session()->get('university_id');
      $file = $data['formProperty'];
      $NewNameImg = makeRandomName() . "." . $file->getClientOriginalExtension();
      $destinationPath = public_path()."/packages/assets/img/universities/installation/";
      $installation = new Installation($data);
      $installation->foto = $data['name'];
      $installation->inmueble = $NewNameImg;
      $installation->active = 1;
      $installation->universidad_id = $universidad_id;
      $installation->save();
      $file->move($destinationPath, $NewNameImg);

      return 'La imagen se ha guardado con exito';
    }
  }

  function updImg(Request $request){
    $data = $request->all();

    $validation = Validator::make($data,[
      'name' => 'required',
      'formProperty' => 'required',
    ]);
    if( $validation->fails()){
      return 'Tenemos un Error';
    }else {
      $img = Installation::where('id', '=', $data['id'])->first();
       $img->foto = $data['name'];
      if ($data['formUpd'] != 'notImg404') {
        $file = $data['formUpd'];
        $NewNameImg = makeRandomName() . "." . $file->getClientOriginalExtension();
        $destinationPath = public_path()."/packages/assets/img/universities/installation/";
        $img->inmueble = $NewNameImg;
        $file->move($destinationPath, $NewNameImg);
      }
      $img->save();

      return 'La imagen se ha actualizado con exito';
    }
  }





  //ONLY PREVIEW

  function getPreview(Request $request){

    $carrera_id = $request->session()->get('career_id');
    $universidad_id = $request->session()->get('university_id');

    $university = DB::table('universities')
    ->where('universities.id', '=', $universidad_id)
    ->join('addresses', 'addresses.id', '=', 'universities.direccion_id')->get();

    $informations = DB::table('informations')
    ->where('informations.carrera_id', '=', $carrera_id)
    ->where('informations.universidad_id', '=', $universidad_id)->get();

    $plans = StudyPlans::where('active', '=', 1)
    ->where('universidad_id', '=', $universidad_id)->get();

    $class_sample = ClasesMuestra::where('carrera_id', '=', $carrera_id)
    ->where('universidad_id', '=', $universidad_id)->first();

    return response()->json([
      'university' => $university,
      'informations' => $informations,
      'plans' => $plans,
      'class_sample' => $class_sample
    ]);
  }

  function getPlanPrev(Request $request){
    $data = $request->all();

    $plan = StudyPlans::where('id', '=', $data['id'])->first();

    return $plan;
  }

  function getinfoSelected(Request $request){
    $data = $request->all();

    $info = Informations::where('id', '=', $data['id'])->first();

    return $info;
  }

}

 function makeRandomName($rand = true, $date = true){
      $characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
      $limit = 5;
		$word = "";
		for($i=0; $i < $limit; $i++) { $word .= substr($characters, rand(0, strlen($characters)), 1); }
      if ($rand) { $word.=rand(); }
      if ($date) { $word.="_".date("d").date("m").date("y"); }
		return $word;
 }

// $role = Role::create(['name' => 'universidad']);
// $permission = Permission::create(['name' => 'gestion noticias']);
// $role->givePermissionTo('gestion noticias');
