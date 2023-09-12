<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'start_date', 'location', 'description', 'image', 'user_id'];

    public function scopeFilter($query, array $filters){
        if($filters['start_date'] ?? false){
            $query->where('start_date', 'like', '%'  . request('start_date') . '%');
            $query->where('location', 'like', '%'  . request('location') . '%');
            $query->where('title', 'like', '%'  . request('search') . '%')
            ->onWhere('description', 'like', '%'  . request('search') . '%');
    }
}

public function user(){
    return $this->belongsTo(User::class, 'user_id');
}
}