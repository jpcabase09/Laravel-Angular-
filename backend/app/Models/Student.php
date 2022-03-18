<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id',
        'course_id',
        'year',
        'address',
        'age',
        'contact_number',
        'gender',
        'birthdate',
        'school',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    protected $table = 'student';

    public function user() {
        // return $this->belongsTo('App\Models\User');
        return $this->hasOne(User::class, 'id', 'user_id');
    }

    public function course() {
        return $this->hasOne(Course::class, 'id', 'course_id');
    }

}
