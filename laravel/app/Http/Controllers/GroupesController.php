<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Groupe;

class GroupesController extends Controller
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
        $groupes = Groupe::all();
        return response()->json( $groupes );
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
        Groupe::create(MyFunction::audit($request->all()));
        return response()->json([
            'message' => 'Un nouveau groupe a été ajouté',
            'status' => 200
        ], 200);
    }

    /**
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Groupe $groupe)
    {
        return $groupe;
    } 

    
    /**
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Groupe $groupe)
    {
        return response()->json( $groupe );
    }

    
    /**
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Groupe $groupe)
    {
        $validatedData = $request->validate([
            'libelle'             => 'required|min:1|max:64',
        ]);

        $groupe->update(MyFunction::audit($request->all()));
        
        return response()->json([
            'message' => 'Le groupe a été modifié avec succès',
            'status' => 200
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Groupe $groupe)
    {
        $groupe->delete();
        return response()->json([
            'message' => 'Le groupe a été supprimé avec succès',
            'status' => 200
        ], 200);
    }
}
