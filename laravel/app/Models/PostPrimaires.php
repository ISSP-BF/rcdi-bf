<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class PostPrimaires extends Model
{

    use HasFactory;

    protected $table = 'post_primaires';

    /**
     * Get the User that owns the Post Primaire
     */
    public function user()
    {
        return $this->belongsTo('App\Models\User', 'created_by')->withTrashed();
    }
    
    public function updated_by()
    {
        return $this->belongsTo('App\Models\User', 'updated_by')->withTrashed();
    }
    
    public function region()
    {
        return $this->belongsTo('App\Models\Regions', 'region')->withTrashed();
    }
    
    public function province()
    {
        return $this->belongsTo('App\Models\Provinces', 'province')->withTrashed();
    }
    
    public function commune()
    {
        return $this->belongsTo('App\Models\Communes', 'commune')->withTrashed();
    }
    
}
