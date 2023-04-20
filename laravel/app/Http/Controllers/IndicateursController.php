<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\SousIndicateur;
use App\Models\Indicateur;
use App\Models\Groupe;
use App\Models\SousGroupe;
use App\Models\Desagregation;
use App\Models\Ecole;
use App\Models\Communes;
use App\Models\FormationSanitaire;

class IndicateursController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->middleware('auth:api');
        return Indicateur::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $this->middleware('auth:api');
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
        $this->middleware('auth:api');
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
     * @param  int  $groupe_id
     * @return \Illuminate\Http\Response
     */
    public function findLocalisationByGroupe($groupe_id)
    {
        $groupe = Groupe::find($groupe_id);
        $commune = Communes::where("defaut",true)->firstOrFail();
        switch ($groupe->localisation) {
            case 'ecoles':
                return Ecole::select('nom_structure as label', 'id as value')->where("commune_id","=",$commune->id)->get();
                break;
            case 'formation_sanitaires':
                return FormationSanitaire::select('nom_structure as label', 'id as value')->where("commune_id","=",$commune->id)->get();
                break;
            
            default:
                return [];
                break;
        }
        return [];
    } 
    /**
     *
     * @param  int  $groupe_id
     * @return \Illuminate\Http\Response
     */
    public function findBySousGroupe($sous_groupe_id)
    {
        $indicateurs = Indicateur::select('*','libelle as label', 'id as value')->where('sous_groupe_id',"=",$sous_groupe_id)->get();
        return $indicateurs;
    } 

    
    /**
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Indicateur $indicateur)
    {
        $this->middleware('auth:api');
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
        $this->middleware('auth:api');
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
        $this->middleware('auth:api');
        $indicateur->delete();
        return response()->json([
            'message' => 'L\'indicateur a été supprimé avec succès',
            'status' => 200
        ], 200);
    }
}
