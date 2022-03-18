<?php

use App\Http\Controllers\AuthController;

Route::group([

    'middleware' => 'api',

], function ($router) {

    Route::post('login', 'App\Http\Controllers\AuthController@login');
    Route::post('signup', 'App\Http\Controllers\AuthController@signup');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');


    Route::group(['prefix' => 'student'], function () {
        Route::get('/', 'App\Http\Controllers\StudentController@getStudents');
        Route::get('/courses', 'App\Http\Controllers\StudentController@getCourses');
        Route::post('/insert', 'App\Http\Controllers\StudentController@addStudent');
        Route::delete('/delete/{id}', 'App\Http\Controllers\StudentController@deleteStudent');
        Route::get('/{id}', 'App\Http\Controllers\StudentController@getStudentById');
        Route::put('/update/{id}', 'App\Http\Controllers\StudentController@updateEmployee');
    });

});