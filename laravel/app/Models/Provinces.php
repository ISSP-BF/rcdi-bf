<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Provinces extends Model
{

    use HasFactory;

    protected $table = 'provinces';

    /**
     * Get the User that owns the Provinces.
     */
    public function user()
    {
        return $this->belongsTo('App\Models\User', 'users_id')->withTrashed();
    }

    /**
     * Get the Status that owns the Provinces.
     */
    public function region()
    {
        return $this->belongsTo('App\Models\Regions', 'region_id');
    }
}
