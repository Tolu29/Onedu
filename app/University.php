<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class University extends Model
{
    //
    protected $fillable = [
        'id', 'nombre', 'active', 'campus', 'color', 'logo', 'user_id', 'direccion_id'
    ];
}
