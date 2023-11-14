<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\SousIndicateur;
use App\Models\Desagregation;

class SousIndicateursController extends Controller
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
        return SousIndicateur::all();
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
        return response()->json($desagregations);
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
            'desagregation_id'             => 'required',
            'libelle'             => 'required|min:1|max:64'
        ]);
        SousIndicateur::create(MyFunction::audit($request->all()));
        return response()->json([
            'message' => 'Un nouveau sous indicateur a été ajouté',
            'status' => 200
        ], 200);
    }

    /**
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(SousIndicateur $sousIndicateur)
    {
        $this->middleware('auth:api');
        return $sousIndicateur;
    } 

    /**
     *
     * @param  int  $groupe_id
     * @return \Illuminate\Http\Response
     */
    public function findByDesagregation($id)
    {
        $sousIndicateurs = SousIndicateur::select('*','libelle as label', 'id as value')->where('desagregation_id',"=",$id)->get();
        return $sousIndicateurs;
    } 

    
    /**
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(SousIndicateur $sousIndicateur)
    {
        $this->middleware('auth:api');
        $desagregations = Desagregation::select('libelle as label', 'id as value')->get();
        return response()->json( $sousIndicateur,$desagregations );
    }

    
    /**
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, SousIndicateur $sousIndicateur)
    {
        $this->middleware('auth:api');
        $validatedData = $request->validate([
            'desagregation_id'             => 'required',
            'libelle'             => 'required|min:1|max:64',
        ]);

        $sousIndicateur->update(MyFunction::audit($request->all()));
        
        return response()->json([
            'message' => 'Le sous indicateur a été modifié avec succès',
            'status' => 200
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(SousIndicateur $sousIndicateur)
    {
        $this->middleware('auth:api');
        $sousIndicateur->delete();
        return response()->json([
            'message' => 'Le sous indicateur a été supprimé avec succès',
            'status' => 200
        ], 200);
    }
}
