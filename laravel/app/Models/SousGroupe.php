<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class SousGroupe extends Model
{

    use HasFactory;

    protected $fillable = [
        'groupe_id',
        'libelle',
        'description',
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
    
      public function getCreatedUserAttribute()
      {
          return User::find($this->created_by);
      }
      
      public function getUpdatedUserAttribute()
      {
          return User::find($this->created_by);
      }
  
      protected $appends = ['updated_user','created_user','groupe'];

}
