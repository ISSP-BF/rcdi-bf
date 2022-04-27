<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Communes extends Model
{

    use HasFactory;

    protected $table = 'communes';

    /**
     * Get the User that owns the Communes.
     */
    public function user()
    {
        return $this->belongsTo('App\Models\User', 'users_id')->withTrashed();
    }

    /**
     * Get the Status that owns the Communes.
     */
    public function province()
    {
        return $this->belongsTo('App\Models\Provinces', 'province_id');
    }
}
