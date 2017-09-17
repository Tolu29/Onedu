<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Informations extends Model
{
    //
    protected $fillable = ['id', 'titulo', 'descripcion', 'universidad_id', 'carrera_id', 'created_at', 'updated_at'];
}
