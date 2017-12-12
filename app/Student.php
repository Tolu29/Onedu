<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
  protected $fillable = ['id', 'user_id', 'active', 'avatar', 'nombre', 'apellidos', 'escuela_anterior', 'created_at', 'updated_at'];
}
