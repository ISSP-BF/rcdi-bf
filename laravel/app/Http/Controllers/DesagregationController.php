<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Desagregation;

class DesagregationController extends Controller
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
        return Desagregation::all();
    }

    /**
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
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
            'message' => 'Une nouvelle désagregation a été ajoutée',
            'status' => 200
        ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Desagregation $desagregation)
    {
        return $desagregation;
    } 

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Desagregation $desagregation)
    {
        return $desagregation;
    }

    /**
     * Update the specified resource in storage.
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
    }
}
