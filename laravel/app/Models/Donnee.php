<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Donnee extends Model
{

    use HasFactory;

    protected $fillable = [
        'indicateur_id',
        'sous_indicateur_id',
        'localisation_id',
        'valeur',
        'periode',
        'periode_value',
        'annee',
        'source',
        'updated_by',
        'created_by',
        'updated_at',
        'created_at',
      ];
    
      public function getIndicateurAttribute()
      {
          $indicateur =  Indicateur::find($this->indicateur_id);
          return $indicateur;
      }
    
      public function getSousIndicateurAttribute()
      {
          $sousIndicateur =  SousIndicateur::find($this->sous_indicateur_id);
          return $sousIndicateur!=null?$sousIndicateur->libelle:$this->sous_indicateur_id;
      }

      public function getLocalisationAttribute()
      {
        $indicateur =  Indicateur::find($this->indicateur_id); 
        if($indicateur->groupeok->localisation=="ecoles"){
            return Ecole::find($this->localisation_id);
        }
        if($indicateur->groupeok->localisation=="formation_sanitaires"){
            return FormationSanitaire::find($this->localisation_id);
        }
         
          return $this->localisation_id;
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

    protected $appends = ['updated_user','created_user','indicateur','sous_indicateur','localisation'];
    
}
