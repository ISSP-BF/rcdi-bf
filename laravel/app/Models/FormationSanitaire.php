<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Facades\Date;

class FormationSanitaire extends Model
{

    use HasFactory;
    protected $fillable = [
        'region_id',
        'province_id',
        'commune_id',
        'code',
        'nom_structure',
        'lon',
        'lat',
        'updated_by',
        'created_by',
        'updated_at',
        'created_at',
    ];

    public function getRegionAttribute()
    {
        return Region::find($this->region_id);
    }

    public function getProvinceAttribute()
    {
        return Province::find($this->province_id);
    }

    public function getCommuneAttribute()
    {
        return Commune::find($this->commune_id);
    }

    public function getCreatedUserAttribute()
    {
        return User::find($this->created_by);
    }

    public function getUpdatedUserAttribute()
    {
        return User::find($this->created_by);
    }

    public function new_data($annee_id = null)
    {
        $query =  $this->hasMany(FormationSanitaireNewDatas::class, 'formation_sanitaires_id', 'id');
        if ($annee_id !== null) {
            $query->where('annee_id', $annee_id);
        }
        // else {
        //     $query->where('annee_id', Date('Y')-1);
        // }
        return $query;
    }

    protected $appends = ['updated_user', 'created_user', 'commune', 'province', 'region'];
}
