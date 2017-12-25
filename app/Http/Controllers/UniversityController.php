<?php

namespace App\Http\Controllers;

use Auth;
use App\User;
use App\Noticias;
use App\University;
use App\Chat;
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

    return "el mensaje se ha guardado correctamente";
  }


  function UniallMessages(Request $request){
    $data = $request->all();
    $user_id = Auth::user()->id;

    $university = University::where('user_id', '=', $user_id)->first();
    $request->session()->put('chat_universidad_id', $university->id);
    $messages = DB::table('chat')
    ->where('chat.universidad_id', '=', $university->id)
    ->join('students', 'students.user_id', '=', 'chat.user_id')
    ->select('chat.id', 'chat.mensaje', 'chat.user_id', 'chat.role', 'students.nombre_completo')->get();

    return response()->json([
      'mensajes' => $messages
    ]);
  }


  function Uninotification(Request $request){
    $data = $request->all();
    $user_id = Auth::user()->id;
    $chat_id = $request->session()->get('uniChat_id');
    $university = University::where('user_id', '=', $user_id)->first();

    $messages = DB::table('chat')
    ->where('chat.universidad_id', '=', $university->id)
    ->where('chat.estatus_universidad', '=', 0)
    ->join('students', 'students.user_id', '=', 'chat.user_id')
    ->select('chat.id', 'chat.mensaje', 'chat.user_id', 'chat.role', 'students.nombre_completo')->get();

    return $messages;
  }

  // function readMessages(Request $request){
  //   $data = $request->all();
  //   $user = Auth::user();
  // }



}
