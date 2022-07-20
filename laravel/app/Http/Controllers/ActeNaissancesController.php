<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\ActeNaissances;

class ActeNaissancesController extends Controller
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
        $acte_naissances = DB::table('acte_naissances')
        ->leftJoin('provinces', function($join){
            $join->on('acte_naissances.province_id', '=', 'provinces.id');
        })
        ->leftJoin('communes', function($join){
            $join->on('acte_naissances.commune_id', '=', 'communes.id');
        })
        ->leftJoin('regions', function($join){
            $join->on('acte_naissances.region_id', '=', 'regions.id');
        })
        ->leftJoin('users', function($join){
            $join->on('acte_naissances.created_by', '=', 'users.id');
        })
        ->leftJoin('users as users2', function($join){
            $join->on('acte_naissances.updated_by', '=', 'users2.id');
        })
        ->leftJoin('formation_sanitaires', function($join){
            $join->on('acte_naissances.formation_sanitaire_id', '=', 'formation_sanitaires.id');
        })
        ->select('acte_naissances.*', 'users.name as author', 'regions.region as region', 'communes.commune as commune', 'provinces.province as province',
        'formation_sanitaires.nom_structure as formationSanitaire')->get();

        return response()->json( $acte_naissances );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $regions = DB::table('regions')->select('regions.region as label', 'regions.id as value')->get();
        $provinces = DB::table('provinces')->select('provinces.province as label', 'provinces.id as value')->get();
        $communes = DB::table('communes')->select('communes.commune as label', 'communes.id as value')->get();
        $formationSanitaires = DB::table('formation_sanitaires')->select('formation_sanitaires.nom_structure as label', 'formation_sanitaires.id as value')->get();
        return response()->json(['regions'=>$regions,'provinces'=>$provinces,'communes'=>$communes, 'formationSanitaires'=>$formationSanitaires] );
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
            'n_acte'             => 'required|min:1|max:64',
            'nom'     => 'required|min:1|max:64',
            'prenom'     => 'required|min:1|max:64',
            'sexe'         => 'required',
            'date_naissance'         => 'required',
            'lieu_naissance_commune'         => 'required'
        ]);
        $user = auth()->userOrFail();
        $acteNaissances = new ActeNaissances();
        $acteNaissances->n_acte     = $request->input('n_acte');
        $acteNaissances->province_id = $request->input('province_id');
        $acteNaissances->region_id = $request->input('region_id');
        $acteNaissances->commune_id = $request->input('commune_id');
        $acteNaissances->nom   = $request->input('nom');
        $acteNaissances->prenom = $request->input('prenom');
        $acteNaissances->date_declaration = $request->input('date_declaration');
        $acteNaissances->sexe = $request->input('sexe');
        $acteNaissances->date_naissance = $request->input('date_naissance');
        $acteNaissances->lieu_naissance_commune = $request->input('lieu_naissance_commune');
        $acteNaissances->centre_sante_naissance = $request->input('centre_sante_naissance');
        $acteNaissances->date_etablissement = $request->input('date_etablissement');        
        $acteNaissances->formation_sanitaire_id = $request->input('formation_sanitaire_id');        
        $acteNaissances->created_by = $user->id;
        $acteNaissances->save();
        return response()->json( ['status' => 'success'] );
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $acte_naissance = DB::table('acte_naissances')
        ->leftJoin('provinces', function($join){
            $join->on('acte_naissances.province_id', '=', 'provinces.id');
        })
        ->leftJoin('communes', function($join){
            $join->on('acte_naissances.commune_id', '=', 'communes.id');
        })
        ->leftJoin('regions', function($join){
            $join->on('acte_naissances.region_id', '=', 'regions.id');
        })
        ->leftJoin('users', function($join){
            $join->on('acte_naissances.created_by', '=', 'users.id');
        })
        ->leftJoin('users as users2', function($join){
            $join->on('acte_naissances.updated_by', '=', 'users2.id');
        })
        ->leftJoin('formation_sanitaires', function($join){
            $join->on('acte_naissances.formation_sanitaire_id', '=', 'formation_sanitaires.id');
        })
        ->select('acte_naissances.*', 'users.name as author', 'regions.region as region', 'communes.commune as commune', 'provinces.province as province',
        'formation_sanitaires.nom_structure as formationSanitaire')
        ->where('acte_naissances.id', '=', $id)
        ->first();
        return response()->json($acte_naissance);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $acteNaissance = DB::table('acte_naissances')->where('id', '=', $id)->first();
        $regions = DB::table('regions')->select('regions.region as label', 'regions.id as value')->get();
        $provinces = DB::table('provinces')->select('provinces.province as label', 'provinces.id as value')->get();
        $communes = DB::table('communes')->select('communes.commune as label', 'communes.id as value')->get();
        $formationSanitaires = DB::table('formation_sanitaires')->select('formation_sanitaires.nom_structure as label', 'formation_sanitaires.id as value')->get();
        return response()->json( [ 'provinces' => $provinces, 'regions' => $regions, 'communes' => $communes, 'acteNaissance'=>$acteNaissance, 'formationSanitaires'=>$formationSanitaires ] );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'n_acte'             => 'required|min:1|max:64',
            'nom'     => 'required|min:1|max:64',
            'sexe'         => 'required',
            'date_naissance'         => 'required',
            'centre_sante_naissance'         => 'required',
            'lieu_naissance_commune'         => 'required'
        ]);
        $user = auth()->userOrFail();
        $acteNaissances = ActeNaissances::find($id);
        $acteNaissances->n_acte     = $request->input('n_acte');
        $acteNaissances->province_id = $request->input('province_id');
        $acteNaissances->region_id = $request->input('region_id');
        $acteNaissances->commune_id = $request->input('commune_id');
        $acteNaissances->nom   = $request->input('nom');
        $acteNaissances->prenom = $request->input('prenom');
        $acteNaissances->date_declaration = $request->input('date_declaration');
        $acteNaissances->sexe = $request->input('sexe');
        $acteNaissances->date_naissance = $request->input('date_naissance');
        $acteNaissances->lieu_naissance_commune = $request->input('lieu_naissance_commune');
        $acteNaissances->centre_sante_naissance = $request->input('centre_sante_naissance');
        $acteNaissances->date_etablissement = $request->input('date_etablissement');
        $acteNaissances->formation_sanitaire_id = $request->input('formation_sanitaire_id'); 
        $acteNaissances->updated = 1;
        $acteNaissances->updated_by = $user->id;
        $acteNaissances->save();
        return response()->json( ['status' => 'success'] );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $acte_naissances = ActeNaissances::find($id);
        if($acte_naissances){
            $acte_naissances->delete();
        }
        return response()->json( ['status' => 'success'] );
    }
}
