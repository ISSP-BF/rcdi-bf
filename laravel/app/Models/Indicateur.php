<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Indicateur extends Model
{

    use HasFactory;

    protected $fillable = [
        'code',
        'libelle',
        'description',
        'methode_calcule',
        'mode_de_calcule',
        'groupe_id',
        'sous_groupe_id',
        'desagregation_id',
        'periode',
        'updated_by',
        'created_by',
        'updated_at',
        'created_at',
      ];
    
      public function getGroupeAttribute()
      {
          $groupe =  Groupe::find($this->groupe_id);
          return $groupe!=null?$groupe->libelle:$this->groupe_id;
      }
    
      public function getGroupeokAttribute()
      {
          $groupe =  Groupe::find($this->groupe_id);
          return $groupe;
      }
    
      public function getSousGroupeAttribute()
      {
          $sous_groupe =  SousGroupe::find($this->sous_groupe_id);
          return $sous_groupe!=null?$sous_groupe->libelle:$this->sous_groupe_id;
      }
 
    
      public function getDesagregationAttribute()
      {
          $desagregation =  Desagregation::find($this->desagregation_id);
          return $desagregation!=null?$desagregation->libelle:$this->desagregation_id;
      }
    
    public function getSousIndicateursAttribute()
    {
        return SousIndicateur::where('desagregation_id','=',$this->desagregation_id);
    }
    
    public function getCreatedUserAttribute()
    {
        $user = User::find($this->created_by);
        if($user!=null){
            return $user->name." ".$user->firstname;
        }
    }
    
    public function getUpdatedUserAttribute()
    {
        $user = User::find($this->updated_by);
        if($user!=null){
            return $user->name." ".$user->firstname;
        }
    }

    protected $appends = ['updated_user','created_user','desagregation','groupe','groupeok','sous_indicateurs','sous_groupe'];
    
}
