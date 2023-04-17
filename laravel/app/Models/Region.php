<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Region extends Model
{

    use HasFactory;

    protected $fillable = [
        'region',
        'code',
        'defaut',
        'updated',
        'updated_by',
        'created_by',
        'updated_at',
        'created_at',
      ];

}
