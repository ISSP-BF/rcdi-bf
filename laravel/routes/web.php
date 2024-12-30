<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use App\Http\Controllers\FormationSanitaireNewDatasController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () { return view('welcome'); });

Route::get('/{any}', function () {
   return view('coreui.homepage');
})->where('any', '.*');

Route::get('indicateurs/getcommunesliste', 'IndicateursController@getcommunesliste');

Route::post('/import',[FormationSanitaireNewDatasController::class,'import'])->name('import');
Route::post('/refresh_request',[FormationSanitaireNewDatasController::class,'refresh_request'])->name('refresh_request');