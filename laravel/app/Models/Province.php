<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Province extends Model
{

    use HasFactory;
    
    protected $fillable = [
        'region_id',
        'province',
        'cheflieu',
        'lon',
        'lat',
        'defaut',
        'updated',
        'updated_by',
        'created_by',
        'updated_at',
        'created_at',
      ];
      
      public function getRegionAttribute()
      {
          return Region::find($this->region_id);
      }

      protected $appends = ['region'];
}
