<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Ecole;
use App\Models\Communes;
use App\Models\Provinces;
use App\Models\Districts;
use App\Models\Regions;

class EcolesController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Ecole::all(); 
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {  
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'code'             => 'required|min:1|max:64',
            'nom_structure'             => 'required|min:1|max:64'
        ]);
        $commune = Communes::where("defaut",true)->firstOrFail();
        $province = Provinces::where("defaut",true)->firstOrFail();
        $region = Regions::where("defaut",true)->firstOrFail();
        $request['commune_id'] = $commune->id;
        $request['province_id'] = $province->id;
        $request['region_id'] = $region->id;
        Ecole::create(MyFunction::audit($request->all()));
        return response()->json([
            'message' => 'Une nouvelle a été ajouté',
            'status' => 200
        ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $ecole
     * @return \Illuminate\Http\Response
     */
    public function show(Ecole $ecole)
    {
        return $ecole;
    } 

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Ecole $ecole)
    {
        return response()->json( $ecole );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Ecole $ecole)
    {
        $validatedData = $request->validate([
            'nom_structure'             => 'required|min:1|max:64',
            'code'             => 'required|min:1|max:64',
        ]);

        $ecole->update(MyFunction::audit($request->all()));
        
        return response()->json([
            'message' => 'l\'école a été modifiée avec succès',
            'status' => 200
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Ecole $ecole)
    {
        $ecole->delete();
        return response()->json([
            'message' => 'L\'école a été supprimée avec succès',
            'status' => 200
        ], 200);
    }
}
