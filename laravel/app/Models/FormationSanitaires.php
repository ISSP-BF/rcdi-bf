<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class FormationSanitaires extends Model
{

    use HasFactory;

    protected $table = 'formation_sanitaires';

    /**
     * Get the User that owns the Districts.
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
    
    public function district()
    {
        return $this->belongsTo('App\Models\Districts', 'nom_district')->withTrashed();
    }
    
    public function formationSanitaire()
    {
        return $this->belongsTo('App\Models\FormationSanitaires', 'nom_structure')->withTrashed();
    }
}
