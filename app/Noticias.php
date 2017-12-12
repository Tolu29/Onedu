<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Noticias extends Model
{
    //
    protected $fillable = ['id', 'titulo', 'cuerpo', 'active', 'universidad_id', 'created_at', 'updated_at'];
}
