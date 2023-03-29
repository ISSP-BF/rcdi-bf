<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\SousDonnee;
use App\Models\Donnee;
use App\Models\Groupe;
use App\Models\Indicateur;
use App\Models\Desagregation;

class DonneesController extends Controller
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
        return Donnee::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $indicateurs = Indicateur::select('*','libelle as label', 'id as value')->get();
        $groupes = Groupe::select('libelle as label', 'id as value')->get();
        return response()->json(['indicateurs'=>$indicateurs,'groupes'=>$groupes]);
    }

    /**
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'indicateur_id'     => 'required',
            'valeur'            => 'required',
            'periode_value'     => 'required',
            'periode'           => 'required',
            'annee'             => 'required'
        ]);
        Donnee::create(MyFunction::audit($request->all()));
        return response()->json([
            'message' => 'Une nouvelle donnee a été ajoutée',
            'status' => 200
        ], 200);
    }

    /**
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Donnee $donnee)
    {
        return $donnee;
    } 

    
    /**
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Donnee $donnee)
    {
        $indicateurs = Indicateur::select('*','libelle as label', 'id as value')->get();
        $sousIndicateurs = SousIndicateur::select('*','libelle as label', 'id as value')->get();
        $groupes = Groupe::select('libelle as label', 'id as value')->get();
        return response()->json(['donnee'=>$donnee,'indicateurs'=>$indicateurs,'sousIndicateurs'=>$sousIndicateurs,'groupes'=>$groupes]);
    }

    
    /**
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Donnee $donnee)
    {
        $validatedData = $request->validate([
            'indicateur_id'     => 'required',
            'valeur'            => 'required',
            'periode_value'     => 'required',
            'periode'           => 'required',
            'annee'             => 'required'
        ]);

        $donnee->update(MyFunction::audit($request->all()));
        
        return response()->json([
            'message' => 'La donnee a été modifiée avec succès',
            'status' => 200
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Donnee $donnee)
    {
        $donnee->delete();
        return response()->json([
            'message' => 'La donnee a été supprimée avec succès',
            'status' => 200
        ], 200);
    }
}
