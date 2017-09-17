<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Career extends Model
{
    //
    protected $fillable = ['id', 'nombre', 'active', 'created_at', 'updated_at', 'nivel_educativo'];
}
