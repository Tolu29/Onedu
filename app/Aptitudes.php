<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Aptitudes extends Model
{
    //
    protected $fillable = ['id', 'científicos', 'administrativo', 'aire_libre', 'mecanicos', 'artisticos', 'relacionales', 'sociales'];
}
