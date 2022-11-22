<?php

use App\Http\Controllers\TodoController;
use Illuminate\Support\Facades\Route;

Route::prefix('todos')
->name('todos.')
->group(function(){
    Route::get('/all', [TodoController::class, 'index'])->name('all');
    Route::get('/{id}', [TodoController::class, 'show'])->name('single');
    Route::post('/create', [TodoController::class, 'store'])->name('create');
    Route::put('/update', [TodoController::class, 'update'])->name('update');
    Route::delete('/delete/{id}', [TodoController::class, 'destroy'])->name('delete');
});