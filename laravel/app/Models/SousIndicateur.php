<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class SousIndicateur extends Model
{

    use HasFactory;

    protected $fillable = [
       'libelle',
       'desagregation_id',
       'updated_by',
       'created_by',
       'updated_at',
       'created_at',
     ];
    
     public function getDesagregationAttribute()
     {
         return Desagregation::find($this->desagregation_id);
     }

     public function getCreatedUserAttribute()
     {
         return User::find($this->created_by);
     }
     
     public function getUpdatedUserAttribute()
     {
         return User::find($this->created_by);
     }
 
     protected $appends = ['updated_user','created_user','desagregation'];

}
