<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Ville extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'idRegion'
    ];

    public function region(){
        return $this->BelongsTo(Region::class,'idRegion','id');
    }
}
