<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Installation extends Model
{
    //
    protected $fillable = ['id', 'universidad_id', 'foto', 'inmueble', 'active', 'created_at', 'updated_at'];
}
