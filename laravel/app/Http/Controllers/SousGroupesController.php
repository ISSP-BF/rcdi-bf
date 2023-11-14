<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\SousGroupe;
use App\Models\Groupe;

class SousGroupesController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['findByGroupe']]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return SousGroupe::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $groupes = Groupe::select('libelle as label', 'id as value')->get();
        return response()->json(['groupes'=>$groupes]);
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
            'libelle'             => 'required|min:1|max:64'
        ]);
        SousGroupe::create(MyFunction::audit($request->all()));
        return response()->json([
            'message' => 'Un nouveau sous groupe a été ajouté',
            'status' => 200
        ], 200);
    }

    /**
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(SousGroupe $sous_groupe)
    {
        return $sous_groupe;
    } 

    /**
     *
     * @param  int  $groupe_id
     * @return \Illuminate\Http\Response
     */
    public function findByGroupe($id)
    {
        $sous_groupes = SousGroupe::select('*','libelle as label', 'id as value')->where('groupe_id',"=",$id)->get();
        return $sous_groupes;
    } 

    
    /**
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(SousGroupe $sous_groupe)
    {
        $groupes = Groupe::select('libelle as label', 'id as value')->get();
        return response()->json(['sous_groupe'=>$sous_groupe,'groupes'=>$groupes]);
    }

    
    /**
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, SousGroupe $sous_groupe)
    {
        $validatedData = $request->validate([
            'groupe_id'             => 'required',
            'libelle'             => 'required|min:1|max:64',
        ]);

        $sous_groupe->update(MyFunction::audit($request->all()));
        
        return response()->json([
            'message' => 'Le sous groupe a été modifié avec succès',
            'status' => 200
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(SousGroupe $sous_groupe)
    {
        $sous_groupe->delete();
        return response()->json([
            'message' => 'Le sous groupe a été supprimé avec succès',
            'status' => 200
        ], 200);
    }
}
