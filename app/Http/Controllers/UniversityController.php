<?php

namespace App\Http\Controllers;

use Auth;
use App\User;
use App\Noticias;
use App\University;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

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


}
