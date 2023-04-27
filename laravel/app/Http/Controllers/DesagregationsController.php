<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Desagregation;

class DesagregationsController extends Controller
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
        $regions = Desagregation::all();
        return response()->json( $regions );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        // return response()->json( $statuses );
    }

    /**
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'libelle'             => 'required|min:1|max:64'
        ]);
        Desagregation::create(MyFunction::audit($request->all()));
        return response()->json([
            'message' => 'Une nouvelle desagregation a été ajouté',
            'status' => 200
        ], 200);
    }

    /**
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Desagregation $desagregation)
    {
        return $desagregation;
    } 

    
    /**
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Desagregation $desagregation)
    {
        return response()->json( $desagregation );
    }

    
    /**
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Desagregation $desagregation)
    {
        $validatedData = $request->validate([
            'libelle'             => 'required|min:1|max:64',
        ]);

        $desagregation->update(MyFunction::audit($request->all()));
        
        return response()->json([
            'message' => 'La desagregation a été modifiée avec succès',
            'status' => 200
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Desagregation $desagregation)
    {
        $desagregation->delete();
        return response()->json([
            'message' => 'La desagregation a été supprimée avec succès',
            'status' => 200
        ], 200);
    }
}
