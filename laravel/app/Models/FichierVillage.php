<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class FichierVillage extends Model
{
    use HasFactory;
    protected $fillable = ['CODE_REGION',
   'REGION',
   'CODE_PROVINCE',
   'PROVINCE',
   'CODE_COMMUNE',
   'COMMUNE',
   'MILIEU_RESIDENCE',
   'codeAppel',
   'Village_Secteur',
   'm5_new',
   'Indicateur',
   'Valeur'];
    public $timestamps = true; 
}
