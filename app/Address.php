<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
  protected $fillable = ['calle', 'num_int', 'num_ext', 'colonia', 'created_at', 'updated_at'];
}
