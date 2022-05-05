<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\FormationSanitaires;

class FormationSanitairesController extends Controller
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
        $formation_sanitaires = DB::table('formation_sanitaires')
        ->join('users', 'users.id', '=', 'formation_sanitaires.created_by')
        ->join('regions', 'regions.id', '=', 'formation_sanitaires.region_id')
        ->join('provinces', 'provinces.id', '=', 'formation_sanitaires.province_id')
        ->join('districts', 'districts.id', '=', 'formation_sanitaires.district_id')
        ->select('formation_sanitaires.*', 'users.name as author', 'districts.nom_district as district', 'regions.region as region', 'provinces.province as province')
        ->get();
        return response()->json( $formation_sanitaires );
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
        $districts = DB::table('districts')->select('districts.nom_district as label', 'districts.id as value')->get();
        return response()->json( ['regions'=>$regions,'provinces'=>$provinces,'districts'=>$districts] );
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
            'code'             => 'required|min:1|max:64',
            'nom_structure'     => 'required|min:1|max:64',
            'province_id'         => 'required',
            'district_id'         => 'required',
            'region_id'         => 'required'
        ]);
        $user = auth()->userOrFail();
        $formationSanitaires = new FormationSanitaires();
        $formationSanitaires->code     = $request->input('code');
        $formationSanitaires->province_id = $request->input('province_id');
        $formationSanitaires->region_id = $request->input('region_id');
        $formationSanitaires->district_id = $request->input('district_id');
        $formationSanitaires->nom_structure   = $request->input('nom_structure');
        $formationSanitaires->lon = $request->input('lon');
        $formationSanitaires->lat = $request->input('lat');
        $formationSanitaires->type = $request->input('type');
        $formationSanitaires->adresse = $request->input('adresse');
        $formationSanitaires->adresse_postale = $request->input('adresse_postale');
        $formationSanitaires->tel = $request->input('tel');
        $formationSanitaires->fax = $request->input('fax');
        $formationSanitaires->email = $request->input('email');
        $formationSanitaires->titre = $request->input('titre');
        $formationSanitaires->proprietaire = $request->input('proprietaire');
        $formationSanitaires->qualificat = $request->input('qualificat');
        $formationSanitaires->n_decision = $request->input('n_decision');
        $formationSanitaires->date_autorisation = $request->input('date_autorisation');
        $formationSanitaires->observations_qualification = $request->input('observations_qualification');
        $formationSanitaires->observations_structure = $request->input('observations_structure');
        $formationSanitaires->autre_observations = $request->input('autre_observations');
        $formationSanitaires->date_fermeture = $request->input('date_fermeture');
        $formationSanitaires->created_by = $user->id;
        $formationSanitaires->save();
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
        $district = DB::table('formation_sanitaires')
        ->join('users', 'users.id', '=', 'formation_sanitaires.created_by')
        ->join('regions', 'regions.id', '=', 'formation_sanitaires.region_id')
        ->join('provinces', 'provinces.id', '=', 'formation_sanitaires.province_id')
        ->join('districts', 'districts.id', '=', 'formation_sanitaires.district_id')
        ->select('formation_sanitaires.*', 'users.name as author', 'regions.region as region', 'districts.nom_district as district', 'provinces.province as province')
        ->where('formation_sanitaires.id', '=', $id)
        ->first();
        return response()->json( $district );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $formationSanitaire = DB::table('formation_sanitaires')->where('id', '=', $id)->first();
        $regions = DB::table('regions')->select('regions.region as label', 'regions.id as value')->get();
        $provinces = DB::table('provinces')->select('provinces.province as label', 'provinces.id as value')->get();
        $districts = DB::table('districts')->select('districts.nom_district as label', 'districts.id as value')->get();
        $communes = DB::table('communes')->select('communes.nom_district as label', 'communes.id as value')->get();
        return response()->json( [ 'provinces' => $provinces, 'regions' => $regions, 'districts' => $districts, 'communes' => $communes,'formationSanitaire'=>$formationSanitaire ] );
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
            'code'             => 'required|min:1|max:64',
            'nom_structure'     => 'required|min:1|max:64',
            'province_id'         => 'required',
            'district_id'         => 'required',
            'region_id'         => 'required'
        ]);
        $user = auth()->userOrFail();
        $formationSanitaires = FormationSanitaires::find($id);
        $formationSanitaires->code     = $request->input('code');
        $formationSanitaires->province_id = $request->input('province_id');
        $formationSanitaires->region_id = $request->input('region_id');
        $formationSanitaires->district_id = $request->input('district_id');
        $formationSanitaires->nom_structure   = $request->input('nom_structure');
        $formationSanitaires->lon = $request->input('lon');
        $formationSanitaires->lat = $request->input('lat');
        $formationSanitaires->type = $request->input('type');
        $formationSanitaires->adresse = $request->input('adresse');
        $formationSanitaires->adresse_postale = $request->input('adresse_postale');
        $formationSanitaires->tel = $request->input('tel');
        $formationSanitaires->fax = $request->input('fax');
        $formationSanitaires->email = $request->input('email');
        $formationSanitaires->titre = $request->input('titre');
        $formationSanitaires->proprietaire = $request->input('proprietaire');
        $formationSanitaires->qualificat = $request->input('qualificat');
        $formationSanitaires->n_decision = $request->input('n_decision');
        $formationSanitaires->date_autorisation = $request->input('date_autorisation');
        $formationSanitaires->observations_qualification = $request->input('observations_qualification');
        $formationSanitaires->observations_structure = $request->input('observations_structure');
        $formationSanitaires->autre_observations = $request->input('autre_observations');
        $formationSanitaires->date_fermeture = $request->input('date_fermeture');
        $formationSanitaires->updated_by = $user->id;
        $formationSanitaires->save();
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
        $formation_sanitaires = FormationSanitaires::find($id);
        if($formation_sanitaires){
            $formation_sanitaires->delete();
        }
        return response()->json( ['status' => 'success'] );
    }
}
