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
        $databases = [];
        $annee_id = date('Y');
        $datas = collect();
        if ($request->commune == 3006) {
            $databases = ['rcdib2270922_2ncj5'];
        } elseif ($request->commune == 2208) {
            $databases = ['rcdib2270922_3s7qqy'];
        } else {
            $databases = ['rcdib2270922_2ncj5', 'rcdib2270922_3s7qqy'];
        }
        foreach ($databases as $db) {
            try {
                config()->set('database.connections.mysql.database', $db);
                DB::disconnect('mysql');
                DB::purge('mysql');
                DB::reconnect('mysql');
                if (app()->configurationIsCached()) {
                    Artisan::call('config:clear');
                }
                if (isset($request->annee_id)) {
                    $annee_id = $request->annee_id;
                }
                $data = FormationSanitaire::whereHas('new_data', function ($query) use ($annee_id) {
                    $query->where('annee_id', $annee_id);
                })->with('new_data');
                if (isset($request->milieu)) {
                    $milieu = $request->milieu;
                    $data = $data->whereHas('new_data', function ($query) use ($milieu) {
                        $query->where('q117', $milieu);
                    });
                };
                if (isset($request->type)) {
                    $type = $request->type;
                    $data = $data->whereHas('new_data', function ($query) use ($type) {
                        $query->where('q113', $type);
                    });
                };

                if (isset($request->checkboxes)) {
                    foreach ($request->checkboxes as $item) {
                        $data = $data->whereHas('new_data', function ($query) use ($item) {
                            $query->where($item, 1);
                        });
                    };
                };
                $data = $data->get();
                $datas = $datas->merge($data);
            } catch (\Exception $e) {
                logger()->error("Erreur lors de l'accès à la base de données $db: " . $e->getMessage());
            }
        }

        return response()->json([
            'success' => true,
            'results' => $datas
        ]);
    }

    public function admin_dash()
    {
        $databases = ['rcdib2270922_2ncj5', 'rcdib2270922_3s7qqy'];
        $results = collect();
        $annee_id = date('Y');
        foreach ($databases as $db) {
            try {
                config()->set('database.connections.mysql.database', $db);
                DB::disconnect('mysql');
                DB::purge('mysql');
                DB::reconnect('mysql');
                if (app()->configurationIsCached()) {
                    Artisan::call('config:clear');
                }
                $data = FormationSanitaire::whereHas('new_data', function ($query) use ($annee_id) {
                    $query->where('annee_id', $annee_id);
                })->with('new_data')->get();
                $results = $results->merge($data);
            } catch (\Exception $e) {
                logger()->error("Erreur lors de l'accès à la base de données $db: " . $e->getMessage());
            }
        }
        return view('welcome', compact('results'));
    }

    public function uploade_file_store(Request $request)
    {

        // $datas = FormationSanitaire::with('new_data')->get();
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
