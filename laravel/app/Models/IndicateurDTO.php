<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class IndicateurDTO extends Model
{

    use HasFactory;
    protected $table = 'indicateurs';

    protected $fillable = [
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
     
      public function getSousGroupeokAttribute()
      {
          $sous_groupe =  SousGroupe::find($this->sous_groupe_id);
          return $sous_groupe;
      } 
    protected $appends = ['sous_groupeok'];
    
}
