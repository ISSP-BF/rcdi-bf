<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Parametres extends Model
{

    use HasFactory;

    protected $table = 'parametres';

    /**
     * Get the User that owns the Regions.
     */

    public function user()
    {
        return $this->belongsTo('App\Models\User', 'created_by')->withTrashed();
    }
    
    public function updated_by()
    {
        return $this->belongsTo('App\Models\User', 'updated_by')->withTrashed();
    }

}
