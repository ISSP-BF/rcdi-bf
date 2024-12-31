<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreFormationSanitaireNewDatasRequest;
use App\Http\Requests\UpdateFormationSanitaireNewDatasRequest;
use App\Imports\ImportFormationSanitaireNewDatas;
use App\Models\FormationSanitaire;
use App\Models\FormationSanitaireNewDatas;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Maatwebsite\Excel\Facades\Excel;

class FormationSanitaireNewDatasController extends Controller
{
    public function refresh_request(Request $request)
    {
        if (!Schema::hasTable('formation_sanitaire_new_datas')) {
            createFormationSanitaireNewDatasTable();
        }

        if ($request->commune == 3006) {
            config()->set('database.connections.mysql.database', 'rcdib2270922_2ncj5');
            DB::disconnect('mysql');
            DB::purge('mysql');
            DB::reconnect('mysql');
            if (app()->configurationIsCached()) {
                Artisan::call('config:clear');
            }
            $datas = FormationSanitaire::all();
        } elseif ($request->commune == 2208) {
            config()->set('database.connections.mysql.database', 'rcdib2270922_3s7qqy');
            DB::disconnect('mysql');
            DB::purge('mysql');
            DB::reconnect('mysql');
            if (app()->configurationIsCached()) {
                Artisan::call('config:clear');
            }
            $datas = FormationSanitaire::all();
        } else {
            $databases = ['rcdib2270922_2ncj5', 'rcdib2270922_3s7qqy'];
            $datas = collect();
            foreach ($databases as $db) {
                try {
                    config()->set('database.connections.mysql.database', $db);
                    DB::disconnect('mysql');
                    DB::purge('mysql');
                    DB::reconnect('mysql');
                    if (app()->configurationIsCached()) {
                        Artisan::call('config:clear');
                    }
                    $data = FormationSanitaire::all();
                    $datas = $datas->merge($data);
                } catch (\Exception $e) {
                    logger()->error("Erreur lors de l'accès à la base de données $db: " . $e->getMessage());
                }
            }
        }
        // dd($request->all());
        $commune = $request->commune;

        // Exemple de requête avec conditions dynamiques
        $results = $commune;
        // $datas = FormationSanitaire::all();

        return response()->json([
            'success' => true,
            'results' => $datas
        ]);
    }

    public function admin_dash()
    {
        return view('welcome');
    }

    public function uploade_file_store(Request $request)
    {

        // $datas = FormationSanitaire::all();
        // dd($datas);









        if (!Schema::hasTable('formation_sanitaire_new_datas')) {
            createFormationSanitaireNewDatasTable();
        }

        try {
            $request->validate([
                'file' => 'required|mimes:xlsx,xls,csv|max:5120',
            ]);
            Excel::import(new ImportFormationSanitaireNewDatas, $request->file('file'));
            return back()->with('success', 'Les données ont été importées avec succès!');
        } catch (\Maatwebsite\Excel\Validators\ValidationException $e) {
            $failures = $e->failures();
            return back()->with(['error' => $failures]);
        } catch (\Exception $e) {
            return back()->with(['error' => $e->getMessage()]);
        }

        // dd($request->all());
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreFormationSanitaireNewDatasRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreFormationSanitaireNewDatasRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\FormationSanitaireNewDatas  $formationSanitaireNewDatas
     * @return \Illuminate\Http\Response
     */
    public function show(FormationSanitaireNewDatas $formationSanitaireNewDatas)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\FormationSanitaireNewDatas  $formationSanitaireNewDatas
     * @return \Illuminate\Http\Response
     */
    public function edit(FormationSanitaireNewDatas $formationSanitaireNewDatas)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateFormationSanitaireNewDatasRequest  $request
     * @param  \App\Models\FormationSanitaireNewDatas  $formationSanitaireNewDatas
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateFormationSanitaireNewDatasRequest $request, FormationSanitaireNewDatas $formationSanitaireNewDatas)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\FormationSanitaireNewDatas  $formationSanitaireNewDatas
     * @return \Illuminate\Http\Response
     */
    public function destroy(FormationSanitaireNewDatas $formationSanitaireNewDatas)
    {
        //
    }
}
