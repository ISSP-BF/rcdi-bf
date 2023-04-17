<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Commune extends Model
{

    use HasFactory;
    
    protected $fillable = [
        'province_id',
        'commune',
        'code',
        'defaut',
        'updated',
        'updated_by',
        'created_by',
        'updated_at',
        'created_at',
      ];
}
