<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\SystemeInformationSanitaires;

class SystemeInformationSanitairesController extends Controller
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
        $systemeInformationSanitaire = DB::table('systeme_information_sanitaires')
        ->join('users', 'users.id', '=', 'systeme_information_sanitaires.created_by')
        ->join('regions', 'regions.id', '=', 'systeme_information_sanitaires.region_id')
        ->join('provinces', 'provinces.id', '=', 'systeme_information_sanitaires.province_id')
        ->join('communes', 'communes.id', '=', 'systeme_information_sanitaires.commune_id')
        ->join('districts', 'districts.id', '=', 'systeme_information_sanitaires.district_id')
        ->join('formation_sanitaires', 'formation_sanitaires.id', '=', 'systeme_information_sanitaires.formation_sanitaire_id')
        ->select('systeme_information_sanitaires.*', 'users.name as author', 
        'districts.nom_district as district', 
        'regions.region as region', 
        'provinces.province as province',
        'communes.commune as commune',
        'formation_sanitaires.nom_structure as formation_sanitaire')
        ->get();
        return response()->json( $systemeInformationSanitaire );
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
        $districts = DB::table('districts')->select('districts.nom_district as label', 'districts.id as value')->get();
        $formationSanitaires = DB::table('formation_sanitaires')->select('formation_sanitaires.nom_structure as label', 'formation_sanitaires.id as value')->get();
        return response()->json( ['communes'=>$communes,'regions'=>$regions,'provinces'=>$provinces,'districts'=>$districts,'formationSanitaires'=>$formationSanitaires] );
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
            'region_id' => 'required',
            'province_id' => 'required',
            'commune_id' => 'required',
            'district_id' => 'required',
            'formation_sanitaire_id' => 'required',
            'annee' => 'required',
            'mois' => 'required'
        ]);
        $user = auth()->userOrFail();
        $systemeInformationSanitaire = new SystemeInformationSanitaires();

        $systemeInformationSanitaire->region_id = $request->input('region_id');
        $systemeInformationSanitaire->province_id = $request->input('province_id');
        $systemeInformationSanitaire->commune_id = $request->input('commune_id');
        $systemeInformationSanitaire->district_id = $request->input('district_id');
        $systemeInformationSanitaire->formation_sanitaire_id = $request->input('formation_sanitaire_id');
        $systemeInformationSanitaire->annee = $request->input('annee');
        $systemeInformationSanitaire->mois = $request->input('mois');

        $systemeInformationSanitaire->type_rapport = $request->input('type_rapport');
        $systemeInformationSanitaire->rapport_attendu = $request->input('rapport_attendu');
        $systemeInformationSanitaire->rapport_recu = $request->input('rapport_recu');
        $systemeInformationSanitaire->rapport_recu_temps = $request->input('rapport_recu_temps');

        $systemeInformationSanitaire->created_by = $user->id;
        $systemeInformationSanitaire->save();
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
        $district = DB::table('systeme_information_sanitaires')
        
        ->leftJoin('provinces', function($join){
            $join->on('systeme_information_sanitaires.province_id', '=', 'provinces.id');
        })
        ->leftJoin('communes', function($join){
            $join->on('systeme_information_sanitaires.commune_id', '=', 'communes.id');
        })
        ->leftJoin('regions', function($join){
            $join->on('systeme_information_sanitaires.region_id', '=', 'regions.id');
        })
        ->leftJoin('users', function($join){
            $join->on('systeme_information_sanitaires.created_by', '=', 'users.id');
        })
        ->leftJoin('users as users2', function($join){
            $join->on('systeme_information_sanitaires.updated_by', '=', 'users2.id');
        })
        ->leftJoin('districts', function($join){
            $join->on('systeme_information_sanitaires.district_id', '=', 'districts.id');
        })
        ->leftJoin('formation_sanitaires', function($join){
            $join->on('systeme_information_sanitaires.formation_sanitaire_id', '=', 'formation_sanitaires.id');
        })
        ->select('systeme_information_sanitaires.*', 'users.name as created_by','users2.name as updated_by', 'regions.region as region', 'districts.nom_district as district',
        'provinces.province as province','communes.commune as commune','formation_sanitaires.nom_structure as formationSanitaire')
        ->where('systeme_information_sanitaires.id', '=', $id)
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
        $systemeInformationSanitaire = DB::table('systeme_information_sanitaires')->where('id', '=', $id)->first();
        $regions = DB::table('regions')->select('regions.region as label', 'regions.id as value')->get();
        $provinces = DB::table('provinces')->select('provinces.province as label', 'provinces.id as value')->get();
        $communes = DB::table('communes')->select('communes.commune as label', 'communes.id as value')->get();
        $districts = DB::table('districts')->select('districts.nom_district as label', 'districts.id as value')->get();
        $formationSanitaires = DB::table('formation_sanitaires')->select('formation_sanitaires.nom_structure as label', 'formation_sanitaires.id as value')->get();

        return response()->json( [ 'provinces' => $provinces, 'regions' => $regions, 'districts' => $districts, 'communes' => $communes,'systemeInformationSanitaire'=>$systemeInformationSanitaire,'formationSanitaires'=>$formationSanitaires ] );
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
            'region_id' => 'required',
            'province_id' => 'required',
            'commune_id' => 'required',
            'district_id' => 'required',
            'formation_sanitaire_id' => 'required'
        ]);

        $user = auth()->userOrFail();
        $systemeInformationSanitaire = SystemeInformationSanitaires::find($id);

        $systemeInformationSanitaire->region_id = $request->input('region_id');
        $systemeInformationSanitaire->province_id = $request->input('province_id');
        $systemeInformationSanitaire->commune_id = $request->input('commune_id');
        $systemeInformationSanitaire->district_id = $request->input('district_id');
        $systemeInformationSanitaire->formation_sanitaire_id = $request->input('formation_sanitaire_id');
        $systemeInformationSanitaire->annee = $request->input('annee');
        $systemeInformationSanitaire->mois = $request->input('mois');

        $systemeInformationSanitaire->type_rapport = $request->input('type_rapport');
        $systemeInformationSanitaire->rapport_attendu = $request->input('rapport_attendu');
        $systemeInformationSanitaire->rapport_recu = $request->input('rapport_recu');
        $systemeInformationSanitaire->rapport_recu_temps = $request->input('rapport_recu_temps');
        
        $systemeInformationSanitaire->updated_by = $user->id;
        $systemeInformationSanitaire->save();
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
        $systemeInformationSanitaire = SystemeInformationSanitaires::find($id);
        if($systemeInformationSanitaire){
            $systemeInformationSanitaire->delete();
        }
        return response()->json( ['status' => 'success'] );
    }
}
