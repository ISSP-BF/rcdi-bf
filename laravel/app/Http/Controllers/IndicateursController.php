<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\SousIndicateur;
use App\Models\Indicateur;
use App\Models\Groupe;
use App\Models\SousGroupe;
use App\Models\Desagregation;

class IndicateursController extends Controller
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
        return Indicateur::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $desagregations = Desagregation::select('libelle as label', 'id as value')->get();
        $groupes = Groupe::select('libelle as label', 'id as value')->get();
        $sous_groupes = SousGroupe::select('libelle as label', 'id as value')->get();
        return response()->json(['desagregations'=>$desagregations,'groupes'=>$groupes,'sous_groupes'=>$sous_groupes]);
    }

    /**
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'groupe_id'             => 'required',
            'periode'             => 'required',
            'libelle'             => 'required|min:1|max:64'
        ]);
        Indicateur::create(MyFunction::audit($request->all()));
        return response()->json([
            'message' => 'Un nouveau indicateur a été ajouté',
            'status' => 200
        ], 200);
    }

    /**
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Indicateur $indicateur)
    {
        return $indicateur;
    } 

    /**
     *
     * @param  int  $groupe_id
     * @return \Illuminate\Http\Response
     */
    public function findByGroupe($groupe_id)
    {
        $indicateurs = Indicateur::select('*','libelle as label', 'id as value')->where('groupe_id',"=",$groupe_id)->get();
        return $indicateurs;
    } 

    
    /**
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Indicateur $indicateur)
    {
        $desagregations = Desagregation::select('libelle as label', 'id as value')->get();
        $groupes = Groupe::select('libelle as label', 'id as value')->get();
        $sous_groupes = SousGroupe::select('libelle as label', 'id as value')->get();
        return response()->json(['indicateur'=>$indicateur,'desagregations'=>$desagregations,'groupes'=>$groupes,'sous_groupes'=>$sous_groupes]);
    }

    
    /**
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Indicateur $indicateur)
    {
        $validatedData = $request->validate([
            'groupe_id'             => 'required',
            'periode'             => 'required',
            'libelle'             => 'required|min:1|max:64',
        ]);

        $indicateur->update(MyFunction::audit($request->all()));
        
        return response()->json([
            'message' => 'L\'indicateur a été modifié avec succès',
            'status' => 200
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Indicateur $indicateur)
    {
        $indicateur->delete();
        return response()->json([
            'message' => 'L\'indicateur a été supprimé avec succès',
            'status' => 200
        ], 200);
    }
}
