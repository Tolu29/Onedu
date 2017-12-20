<?php

namespace App\Http\Controllers;

use Auth;
use App\User;
use App\Noticias;
use App\University;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class UniversityController extends Controller
{


  function getUniNews(){
    $user = Auth::user();

    $university = University::where('user_id', '=', $user->id)->first();
    $news = Noticias::where('active', '=', 1)
    ->where('universidad_id', '=', $university->id)->get();

    return response()->json([
      'news' => $news,
      'university' => $university
    ]);
  }


  function saveNews(Request $request){
    $data = $request->all();
    $user = Auth::user();

    $university = University::where('user_id', '=', $user->id)->first();

    $new = new Noticias($data);
    $new->titulo = $data['title'];
    $new->cuerpo = $data['body'];
    $new->avance = $data['preview'];
    $new->active = 1;
    $new->universidad_id = $university->id;
    $new->save();

    return 'La noticia se ha guardado con exito';
  }


  function sessionUni(Request $request){
    $data = $request->all();
    $request->session()->put('new_id', $data['id']);
  }


  function infoNew(Request $request){
    $data = $request->all();
    $new_id = $request->session()->get('new_id');
    $new = Noticias::where('id', '=', $new_id)->first();
    return $new;
  }


  function updateNew(Request $request){
    $data = $request->all();

    $new_id = $request->session()->get('new_id');
    $new = Noticias::where('id', '=', $new_id)->first();
    $new->titulo = $data['titulo'];
    $new->cuerpo = $data['cuerpo'];
    $new->avance = $data['preview'];
    $new->save();
  }

  function imgUni(Request $request){
    $user = Auth::user();

    $university = University::where('user_id', '=', $user->id)
    ->select('logo')->first();
    return $university;
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
  //
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


  function UniallMessages(Request $request){
    $data = $request->all();
    $chat_id = $request->session()->get('uniChat_id');
    $user_id = Auth::user()->id;

    $university = University::where('user_id', '=', $user_id)->first();
    $messages = DB::table('chat')
    ->where('chat.universidad_id', '=', $university->id)->get();
    // ->join('universities', 'universities.id', '=', 'chat.universidad_id')

    return response()->json([
      'mensajes' => $messages
    ]);
  }
  //
  //
  // function notification(Request $request){
  //   $data = $request->all();
  //   $chat_id = $request->session()->get('uniChat_id');
  //   $user_id = Auth::user()->id;
  //
  //   $messages = DB::table('universities')
  //   ->where('universities.active', '=', 1)
  //   ->join('chat', 'chat.universidad_id', '=', 'universities.id')
  //   ->where('chat.user_id', '=', $user_id)
  //   ->where('chat.estatus_user', '=', 0)
  //   ->select('chat.mensaje', 'universities.nombre', 'universities.id', 'chat.role', 'chat.id as chat_id')->get();
  //
  //   return $messages;
  //
  // }
  //
  // function readMessages(Request $request){
  //   $data = $request->all();
  //   $user = Auth::user();
  // }



}
