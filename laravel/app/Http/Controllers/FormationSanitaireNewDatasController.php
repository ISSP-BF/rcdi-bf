<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreFormationSanitaireNewDatasRequest;
use App\Http\Requests\UpdateFormationSanitaireNewDatasRequest;
use App\Models\FormationSanitaireNewDatas;
use Illuminate\Http\Request;

class FormationSanitaireNewDatasController extends Controller
{
    public function refresh_request(Request $request) {
        dd($request->all());
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreFormationSanitaireNewDatasRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreFormationSanitaireNewDatasRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\FormationSanitaireNewDatas  $formationSanitaireNewDatas
     * @return \Illuminate\Http\Response
     */
    public function show(FormationSanitaireNewDatas $formationSanitaireNewDatas)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\FormationSanitaireNewDatas  $formationSanitaireNewDatas
     * @return \Illuminate\Http\Response
     */
    public function edit(FormationSanitaireNewDatas $formationSanitaireNewDatas)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateFormationSanitaireNewDatasRequest  $request
     * @param  \App\Models\FormationSanitaireNewDatas  $formationSanitaireNewDatas
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateFormationSanitaireNewDatasRequest $request, FormationSanitaireNewDatas $formationSanitaireNewDatas)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\FormationSanitaireNewDatas  $formationSanitaireNewDatas
     * @return \Illuminate\Http\Response
     */
    public function destroy(FormationSanitaireNewDatas $formationSanitaireNewDatas)
    {
        //
    }
}
