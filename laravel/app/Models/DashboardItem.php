<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class DashboardItem extends Model
{

    use HasFactory;

    protected $fillable = [
        'dashboard_id',
        'libelle',
        'description',
        'requete',
        'graphique',
        'seuil_segment_list',
        
        'type_seuil',
        'seuil_valeur_reference',
        'seuil_periode',
        'seuil_periode_value',
        'seuil_annee',
        'seuil_couleur_superieur',
        'seuil_couleur_inferieur',
        
        'i',
        'x',
        'y',
        'w',
        'h',
        'static',
        'updated_by',
        'created_by',
        'updated_at',
        'created_at',
      ];
      protected $casts = ['static' => 'boolean','i'=>'string'];

    
    
      public function getDashboardAttribute()
      {
          return Dashboard::find($this->dashboard_id);
      }
    
    
      public function getCreatedUserAttribute()
      {
          return User::find($this->created_by);
      }
      
      public function getUpdatedUserAttribute()
      {
          return User::find($this->created_by);
      }
  
      protected $appends = ['updated_user','created_user','dashboard'];

}
