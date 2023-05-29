<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('indicateurs-old/findBy', 'IndicateursOldController@findBy');
Route::get('indicateurs-old/search', 'IndicateursOldController@search');
Route::post('indicateurs-old/search/groupe', 'IndicateursOldController@searchGroupe');
Route::get('indicateurs-old/getcommunesliste', 'IndicateursOldController@getcommunesliste');
Route::get('indicateurs-old/getDefaultCommune', 'IndicateursOldController@getDefaultCommune');
Route::get('indicateurs-old/getDefaultAll', 'IndicateursOldController@getDefaultAll');

// Route::get('/BkDataUpdated', function () {
//     return "MyData";
//  });
//  Route::post('/BkDataUpdated', function () {
//      return "MyData";
//   });
Route::post('/BkDataUpdated', 'ZReceiveBKController@storeMany');

Route::group(['middleware' => 'api'], function ($router) {
    Route::get('menu', 'MenuController@index');

    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('register', 'AuthController@register'); 
    Route::get('userProfile', 'AuthController@userProfile'); 

    Route::resource('notes', 'NotesController');
    Route::resource('regions', 'RegionsController');
    Route::resource('provinces', 'ProvincesController');
    Route::resource('communes', 'CommunesController');
    Route::get('communes_list/', 'CommunesController@list');

    Route::resource('professions', 'ProfessionsController');
    Route::resource('districts', 'DistrictsController');
    Route::resource('formation_sanitaires', 'FormationSanitairesController');
    Route::get('acte_naissanceslimiter', 'ActeNaissancesController@limiter');
    
    Route::get('acte_naissancespaginate/{pageSize}/{pageIndex}/{column}/{asc}', 'ActeNaissancesController@paginate');

    Route::resource('acte_naissances', 'ActeNaissancesController');
    Route::resource('acte_deces', 'ActeDecesController');
    Route::resource('acte_mariages', 'ActeMariagesController');
    Route::resource('consultation_prenatales', 'ConsultationPrenatalesController');
    Route::post('consultation_prenatales/storeMany', 'ConsultationPrenatalesController@storeMany');
    Route::resource('ptmes', 'PtmesController');
    Route::post('ptmes/storeMany', 'PtmesController@storeMany');
    Route::resource('accouchements', 'AccouchementsController');
    Route::post('accouchements/storeMany', 'AccouchementsController@storeMany');
    Route::resource('consultation_postnatales', 'ConsultationPostnatalesController');
    Route::post('consultation_postnatales/storeMany', 'ConsultationPostnatalesController@storeMany');
    Route::resource('vaccination_enfants', 'VaccinationEnfantsController');
    Route::post('vaccination_enfants/storeMany', 'VaccinationEnfantsController@storeMany');
    Route::resource('planification_familiales', 'PlanificationFamilialesController');
    Route::post('planification_familiales/storeMany', 'PlanificationFamilialesController@storeMany');
    Route::resource('morbilite_paludismes', 'MorbilitePaludismesController');
    Route::post('morbilite_paludismes/storeMany', 'MorbilitePaludismesController@storeMany');
    Route::resource('service_curatifs', 'ServiceCuratifsController');
    Route::post('service_curatifs/storeMany', 'ServiceCuratifsController@storeMany');
    Route::resource('systeme_information_sanitaires', 'SystemeInformationSanitairesController');
    Route::post('systeme_information_sanitaires/storeMany', 'SystemeInformationSanitairesController@storeMany');
    Route::resource('indicateur_carte_sanitaires', 'IndicateurCarteSanitairesController');
    Route::post('indicateur_carte_sanitaires/storeMany', 'IndicateurCarteSanitairesController@storeMany');
    Route::resource('pre_scolaires', 'PreScolairesController');
    Route::resource('primaires', 'PrimairesController');
    Route::resource('post_primaires', 'PostPrimairesController');
    Route::resource('indicateurs-old', 'IndicateursOldController');
    
    Route::resource('fichier-villages', 'FichierVillagesController');
    Route::resource('groupes', 'GroupesController');
    Route::resource('sous_groupes', 'SousGroupesController');
    Route::get('sous_groupes/findByGroupe/{id}', 'SousGroupesController@findByGroupe');
    Route::resource('desagregations', 'DesagregationsController');
    Route::resource('sous_indicateurs', 'SousIndicateursController');
    Route::get('sous_indicateurs/findByDesagregation/{id}', 'SousIndicateursController@findByDesagregation');
    Route::resource('indicateurs', 'IndicateursController');
    Route::get('indicateurs/findByGroupe/{id}', 'IndicateursController@findByGroupe');
    Route::get('indicateurs/findBySousGroupe/{id}', 'IndicateursController@findBySousGroupe');
    Route::get('indicateurs/findLocalisationByGroupe/{id}', 'IndicateursController@findLocalisationByGroupe');

    Route::get('donnees/elementSearch', 'DonneesController@elementSearch');
    Route::resource('donnees', 'DonneesController');
    // Route::post('donnees/storeMany', 'DonneesController@storeMany');
    Route::post('donnees/storeMany', 'DonneesController@storeManyWithVerification');
    Route::post('donnees/findBy', 'DonneesController@findBy');
    Route::post('donnees/findCarteDataBy', 'DonneesController@findCarteDataBy');
    Route::post('donnees/findByGetSql', 'DonneesController@findByGetSql');
    Route::get('donnees/findSousGroupeByLocalisation/{localisation_id}/{groupe_id}', 'DonneesController@findSousGroupeByLocalisation');
    Route::get('donnees/findAnneeByIndicateur/{indicateur_id}', 'DonneesController@findAnneeByIndicateur');
    Route::get('donnees/findIndicateurByGroupe/{groupe_id}', 'DonneesController@findIndicateurByGroupe');
    Route::post('donneespaginate/{pageSize}/{pageIndex}/{column}/{asc}', 'DonneesController@paginate');
    Route::resource('dashboards', 'DashboardsController');
    Route::get('dashboard-items/findBy/{dashboard_id}', 'DashboardItemsController@findBy');
    Route::resource('dashboard-items', 'DashboardItemsController');
    Route::resource('ecoles', 'EcolesController');
    Route::resource('resource/{table}/resource', 'ResourceController');
    
    Route::get('users/profil', 'UsersController@profil');
    
    Route::put('users/updateProfil', 'UsersController@updateProfil');
    
    Route::get('/BkDataUpdated', 'UpdateBDController@index');
    Route::get('/BkDataUpdatedNumber', 'UpdateBDController@numberOfUpdated');
    Route::group(['middleware' => 'admin'], function ($router) {

        Route::resource('mail',        'MailController');
        Route::get('prepareSend/{id}', 'MailController@prepareSend')->name('prepareSend');
        Route::post('mailSend/{id}',   'MailController@send')->name('mailSend');

        Route::resource('bread',  'BreadController');   //create BREAD (resource)

        // Route::resource('users', 'UsersController')->except( ['create', 'store'] );
        Route::resource('users', 'UsersController');

        Route::prefix('menu/menu')->group(function () { 
            Route::get('/',         'MenuEditController@index')->name('menu.menu.index');
            Route::get('/create',   'MenuEditController@create')->name('menu.menu.create');
            Route::post('/store',   'MenuEditController@store')->name('menu.menu.store');
            Route::get('/edit',     'MenuEditController@edit')->name('menu.menu.edit');
            Route::post('/update',  'MenuEditController@update')->name('menu.menu.update');
            Route::get('/delete',   'MenuEditController@delete')->name('menu.menu.delete');
        });
        Route::prefix('menu/element')->group(function () { 
            Route::get('/',             'MenuElementController@index')->name('menu.index');
            Route::get('/move-up',      'MenuElementController@moveUp')->name('menu.up');
            Route::get('/move-down',    'MenuElementController@moveDown')->name('menu.down');
            Route::get('/create',       'MenuElementController@create')->name('menu.create');
            Route::post('/store',       'MenuElementController@store')->name('menu.store');
            Route::get('/get-parents',  'MenuElementController@getParents');
            Route::get('/edit',         'MenuElementController@edit')->name('menu.edit');
            Route::post('/update',      'MenuElementController@update')->name('menu.update');
            Route::get('/show',         'MenuElementController@show')->name('menu.show');
            Route::get('/delete',       'MenuElementController@delete')->name('menu.delete');
        });
        Route::prefix('media')->group(function ($router) {
            Route::get('/',                 'MediaController@index')->name('media.folder.index');
            Route::get('/folder/store',     'MediaController@folderAdd')->name('media.folder.add');
            Route::post('/folder/update',   'MediaController@folderUpdate')->name('media.folder.update');
            Route::get('/folder',           'MediaController@folder')->name('media.folder');
            Route::post('/folder/move',     'MediaController@folderMove')->name('media.folder.move');
            Route::post('/folder/delete',   'MediaController@folderDelete')->name('media.folder.delete');;

            Route::post('/file/store',      'MediaController@fileAdd')->name('media.file.add');
            Route::get('/file',             'MediaController@file');
            Route::post('/file/delete',     'MediaController@fileDelete')->name('media.file.delete');
            Route::post('/file/update',     'MediaController@fileUpdate')->name('media.file.update');
            Route::post('/file/move',       'MediaController@fileMove')->name('media.file.move');
            Route::post('/file/cropp',      'MediaController@cropp');
            Route::get('/file/copy',        'MediaController@fileCopy')->name('media.file.copy');

            Route::get('/file/download',    'MediaController@fileDownload');
        });

        Route::resource('roles',        'RolesController');
        Route::get('/roles/move/move-up',      'RolesController@moveUp')->name('roles.up');
        Route::get('/roles/move/move-down',    'RolesController@moveDown')->name('roles.down');
    });
});

