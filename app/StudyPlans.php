<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class StudyPlans extends Model
{
    //
    protected $fillable = ['id', 'nombre_plan', 'descripcion', 'universidad_id', 'created_at', 'updated_at', 'active'];
}
