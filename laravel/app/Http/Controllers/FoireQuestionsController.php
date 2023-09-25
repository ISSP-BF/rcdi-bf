<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\FoireQuestion;

class FoireQuestionsController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['index', 'show']]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return FoireQuestion::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $statuses = DB::table('status')->select('status.name as label', 'status.id as value')->get();
        return response()->json( $statuses );
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
            'question'             => 'required|min:1|max:256',
            'reponse'             => 'required|min:1'
        ]);
        FoireQuestion::create(MyFunction::audit($request->all()));
        return response()->json([
            'message' => 'Une nouvelle donnee a été ajoutée',
            'status' => 200
        ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(FoireQuestion $foireQuestion)
    {
        return $foireQuestion;
    } 

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(FoireQuestion $foireQuestion)
    {
        return response()->json( ['foireQuestion' => $foireQuestion ] );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, FoireQuestion $foireQuestion)
    {
        $validatedData = $request->validate([
            'question'             => 'required|min:1|max:256',
            'reponse'             => 'required|min:1'
        ]);

        $foireQuestion->update(MyFunction::audit($request->all()));
        
        return response()->json([
            'message' => 'La foire Question a été modifiée avec succès',
            'status' => 200
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(FoireQuestion $foireQuestion)
    {
        $foireQuestion->delete();
        return response()->json([
            'message' => 'La foireQuestion a été supprimée avec succès',
            'status' => 200
        ], 200);
    }
}
