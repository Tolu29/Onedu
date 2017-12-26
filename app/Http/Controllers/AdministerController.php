<?php
namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Validator;
use App\Address;
use App\StudyPlans;
use App\User;
use App\Student;
use App\University;
use App\Installation;
use App\ClasesMuestra;
use App\Informations;
use App\CareersUniversities;
use App\Career;
use App\Noticias;
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
      'lab_camp' => 'required',
    ]);
    if( $validation->fails()){
      return 'Ingresa los datos correctamente';
    }else {

      $career = new Career($data);
      $career->nivel_educativo = $data['level'];
      $career->active = 1;
      $career->tipo = $data['type'];
      $career->nombre = $data['career'];
      $career->grupo = $data['group'];
      $career->perfil = $data['profile'];
      $career->descripcion = $data['description'];
      $career->campo_trabajo = $data['lab_camp'];
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
    ->select('nombre', 'nivel_educativo', 'descripcion', 'perfil', 'grupo', 'campo_trabajo', 'tipo')->first();
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
      'lab_camp' => 'required',
    ]);
    if( $validation->fails()){
      return 'Ingresa los datos correctamente';
    }else {

      $career = Career::where('id', '=', $data['id'])->first();
      $career->nombre = $data['career'];
      $career->nivel_educativo = $data['level'];
      $career->grupo = $data['group'];
      $career->tipo = $data['type'];
      $career->perfil = $data['profile'];
      $career->descripcion = $data['description'];
      $career->campo_trabajo = $data['lab_camp'];
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

  function location(Request $request){
    $data = $request->all();
    $universidad_id = $request->session()->get('university_id');

    $university = University::where('id', '=', $universidad_id)->first();
    $university->latitud = $data['lat'];
    $university->longitud = $data['long'];
    $university->save();

    return "listo";
  }

  //===========================//
    #funciones para Informaciones
  //==========================//


    function getAllInfo(Request $request){
      $data  = $request->all();

      $carrera_id = $request->session()->get('career_id');
      $universidad_id = $request->session()->get('university_id');

      $information = informations::where('universidad_id', '=', $universidad_id)
      ->where('carrera_id', '=', $carrera_id)->get();

      $video = ClasesMuestra::where('universidad_id', '=', $universidad_id)
      ->where('carrera_id', '=', $carrera_id)
      ->where('active', '=', 1)->first();

      $plans = StudyPlans::where('universidad_id', '=', $universidad_id)
      ->where('active', '=', 1)->get();

      $infoComp = $information;
      $comp = count($infoComp);

      if ($comp == 0) {
        return null;
      } else {
        return response()->json([
          'informations' => $information,
          'video' => $video,
          'study_plans' => $plans
        ]);
      }


    }


    function saveAll(Request $request){
      $data = $request->all();

      $validation = Validator::make($data,[
        'accreditation' => 'required',
        'admission' => 'required',
        'extra_activities' => 'required',
        'plans' => 'required',
        'schedules' => 'required',
        'scholarships' => 'required',
        ]);
      if($validation->fails()){
        return 'Tenemos un Error';
      }else {

        $carrera_id = $request->session()->get('career_id');
        $universidad_id = $request->session()->get('university_id');

        $informations = array(
          'accreditation' => $data['accreditation'],
          'admission' => $data['admission'],
          'extra_activities' => $data['extra_activities'],
          'schedules' => $data['schedules'],
          'scholarships' => $data['scholarships']
        );

        $plans = $data['plans'];

        foreach ($informations as $plan => $value) {
          $info = new Informations($data);
          $info->titulo = $plan;
          $info->descripcion = $value;
          $info->carrera_id = $carrera_id;
          $info->universidad_id = $universidad_id;
          $info->save();
        }

        if ($data['url'] != "vid_error404") {
          $video = new ClasesMuestra($data);
          $video->nombre = $data['title'];
          $video->embed = $data['url'];
          $video->carrera_id = $carrera_id;
          $video->universidad_id = $universidad_id;
          $video->save();
        }

        foreach ($plans as $plan => $value) {
          if ($value != null) {
            $study_plan = new StudyPlans($data);
            $study_plan->nombre_plan = $value['namePlan'];
            $study_plan->descripcion = $value['descriptionPlan'];
            $study_plan->universidad_id = $universidad_id;
            $study_plan->carrera_id = $carrera_id;
            $study_plan->active = 1;
            $study_plan->save();
          }
        }

        return 'La informacion se ha guardado con exito';

      }

    }


    function updateInfo(Request $request){
      $data = $request->all();

      $validation = Validator::make($data,[
        'accreditation' => 'required',
        'admission' => 'required',
        'extra_activities' => 'required',
        'plans' => 'required',
        'schedules' => 'required',
        'scholarships' => 'required',
        ]);
      if($validation->fails()){
        return 'Tenemos un Error';
      }else {

        $informations = array(
          'accreditation' => $data['accreditation'],
          'admission' => $data['admission'],
          'extra_activities' => $data['extra_activities'],
          'schedules' => $data['schedules'],
          'scholarships' => $data['scholarships']
        );

        $plans = $data['plans'];

        $carrera_id = $request->session()->get('career_id');
        $universidad_id = $request->session()->get('university_id');

        $video = ClasesMuestra::where('universidad_id', '=', $universidad_id)
        ->where('carrera_id', '=', $carrera_id)
        ->where('active', '=', 1)->first();

        switch ($video) {
          case true:
            if ($data['url'] == "vid_error404") {
              $video->active = 0;
              $video->save();
            }else {
              $video->nombre = $data['title'];
              $video->embed = $data['url'];
              $video->save();
            }
            break;
          case false:
            if ($data['url'] != "vid_error404") {
              $video = new ClasesMuestra($data);
              $video->nombre = $data['title'];
              $video->embed = $data['url'];
              $video->carrera_id = $carrera_id;
              $video->universidad_id = $universidad_id;
              $video->save();
            }
            break;
          default:

            break;
        }

        foreach ($informations as $information => $value) {
          $info = Informations::where('universidad_id', '=', $universidad_id)
          ->where('carrera_id', '=', $carrera_id)
          ->where('titulo', '=', $information)->first();
          $info->descripcion = $value;
          $info->save();
        }


        foreach ($plans as $plan => $value) {

          switch ($value) {
            case null:
            break;
            case array_key_exists('id', $value) && array_key_exists('descriptionPlan', $value):
              $plan = StudyPlans::where('id', '=', $value['id'])->first();
              $plan->nombre_plan = $value['namePlan'];
              $plan->descripcion = $value['descriptionPlan'];
              $plan->save();
              break;
            case count($value) == 1 && array_key_exists('id', $value):
              $plan = StudyPlans::where('id', '=', $value['id'])->first();
              $plan->active = 0;
              $plan->save();
              break;
            case count($value) == 2 && array_key_exists('descriptionPlan', $value):
              $study_plan = new StudyPlans($data);
              $study_plan->nombre_plan = $value['namePlan'];
              $study_plan->descripcion = $value['descriptionPlan'];
              $study_plan->universidad_id = $universidad_id;
              $study_plan->active = 1;
              $study_plan->save();
            break;
            default:
            break;
          }
        }

        return 'la informacion se ha guardado con exito';
      }

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

  function deleteImg(Request $request){
    $data = $request->all();

    $img = Installation::where('id', '=', $data['id'])->first();
    $img->active = 0;
    $img->save();

    return 'La imagen ha sido elminada con exito';

  }


  //=================================//
    #funciones para administacion DB
  //================================//

  function dataBaseInfo(){

    $cities = DB::table('ciudades')->get();
    $highSchools = DB::table('preparatorias')->get();

    return response()->json([
      'highSchools' => $highSchools,
      'cities' => $cities
    ]);

  }

  function downloadExcel(Request $request){
    $data = $request->all();

    $students = Student::where('id', '=', $data['school'])
    ->whereBetween('created_at', [$data['iniDate'],$data['finDate']])->get();
    return $students;
  }

  //=================================//
    #funciones para news
  //================================//


  function allAdminNews(){

    $news = DB::table('noticias')
    ->where('active', '=', 1)->get();

    return $news;
  }

  function adminDelNews(Request $request){
    $data = $request->all();

    $new = Noticias::where('id', '=', $data['id'])->first();
    $new->active  = 0;
    $new->save();

    return 'La noticia se elimino con exito';
  }


  //=====================//
    #funciones para CHAT
  //=====================//

  // function schoolInfo(Request $request){
  //   $data = $request->all();
  //   $university = University::where('id', '=', $data['id'])->first();
  //   $request->session()->put('uniChat_id', $university->user_id);
  //   return 'La sesion se ha guardado correctamente';
  // }

  function UnimessageSend(Request $request){
    $data = $request->all();
    $user = Auth::user();
    $university_id = $request->session()->get('chat_universidad_id');

    $message = new Chat($data);
    $message->estatus_user = 0;
    $message->estatus_universidad = 1;
    $message->user_id = $data['user_id'];
    $message->universidad_id = $university_id;
    $message->role = 'universidad';
    $message->mensaje = $data['mensaje'];
    $message->save();

    return response()->json([
      'message' => $message,
      "estatus" => "el mensaje se ha guardado correctamente"
    ]);
  }


  function adminAllMessages(Request $request){
    $data = $request->all();

    $messages = University::where('premium', '=', 'falso')
    ->join('chat', 'chat.universidad_id', '=', 'universities.id')
    ->join('users', 'users.id', '=', 'chat.user_id')
    ->join('students', 'students.user_id', '=', 'users.id')
    ->select('chat.id', 'chat.mensaje', 'chat.user_id', 'chat.universidad_id', 'chat.role', 'students.nombre_completo', 'universities.logo as logo')->get();

    return response()->json([
      'mensajes' => $messages
    ]);
  }


  function adminNotification(Request $request){
    $data = $request->all();

    $messages = University::where('premium', '=', 'falso')
    ->join('chat', 'chat.universidad_id', '=', 'universities.id')
    ->where('chat.estatus_universidad', '=', 1)
    ->join('users', 'users.id', '=', 'chat.user_id')
    ->join('students', 'students.user_id', '=', 'users.id')
    ->select('chat.id', 'chat.mensaje', 'chat.user_id', 'chat.universidad_id', 'chat.role', 'students.nombre_completo')->get();

    return $messages;
  }

  // function readMessages(Request $request){
  //   $data = $request->all();
  //   $user = Auth::user();
  // }

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
