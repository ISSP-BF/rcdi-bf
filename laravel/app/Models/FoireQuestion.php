<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class FoireQuestion extends Model
{

    use HasFactory;

    protected $fillable = [
        'question',
        'reponse',
        'updated_by',
        'created_by',
        'updated_at',
        'created_at',
      ];
  

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

    protected $appends = ['updated_user','created_user'];
}
