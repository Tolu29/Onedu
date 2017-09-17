<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ClasesMuestra extends Model
{
    //
    protected $fillable = ['id', 'nombre', 'embed', 'carrera_id', 'universidad_id'];
}
