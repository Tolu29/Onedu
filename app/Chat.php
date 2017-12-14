<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Chat extends Model
{
      protected $table = 'chat';
      protected $fillable = ['id', 'estatus', 'user_id', 'destinatario_id', 'role', 'mensaje', 'created_at', 'updated_at'];
}
