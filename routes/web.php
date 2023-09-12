<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Show All Events
Route::get('/', [\App\Http\Controllers\EventController::class, 'index']);
// Create New Event
Route::post('/events', [\App\Http\Controllers\EventController::class, 'store'])->middleware('auth');;
// Update Event
Route::put('/events/{event}', [\App\Http\Controllers\EventController::class, 'update'])->middleware('auth');
// Delete Event
Route::delete('/events/{event}', [\App\Http\Controllers\EventController::class, 'destroy'])->middleware('auth');
// Show Single Event
Route::get('/events/{event}', [\App\Http\Controllers\EventController::class, 'show']);
// Login and Register
Route::get('/register', [\App\Http\Controllers\UserController::class, 'create'])->middleware('guest');
Route::post('/users', [\App\Http\Controllers\UserController::class, 'store']);

Route::get('/login', [\App\Http\Controllers\UserController::class, 'login'])->name('login')->middleware('guest');
Route::post('/login/authenticate', [\App\Http\Controllers\UserController::class, 'authenticate']);

// Log User Out
Route::post('/logout', [\App\Http\Controllers\UserController::class, 'logout'])->middleware('auth');