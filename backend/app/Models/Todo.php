<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Todo extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'start',
        'end',
        'is_completed',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    // public function getStartAttribute($value){
    //     return date('d M, Y', strtotime($value));
    // }

    // public function getEndAttribute($value){
    //     return date('d M, Y', strtotime($value));
    // }
}
