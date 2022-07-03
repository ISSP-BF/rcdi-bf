<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\IndicateurCarteSanitaires;

class IndicateurCarteSanitairesController extends Controller
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
        $indicateurCarteSanitaire = DB::table('indicateur_carte_sanitaires')
        ->join('users', 'users.id', '=', 'indicateur_carte_sanitaires.created_by')
        ->join('regions', 'regions.id', '=', 'indicateur_carte_sanitaires.region_id')
        ->join('provinces', 'provinces.id', '=', 'indicateur_carte_sanitaires.province_id')
        ->join('communes', 'communes.id', '=', 'indicateur_carte_sanitaires.commune_id')
        ->join('districts', 'districts.id', '=', 'indicateur_carte_sanitaires.district_id')
        ->join('formation_sanitaires', 'formation_sanitaires.id', '=', 'indicateur_carte_sanitaires.formation_sanitaire_id')
        ->select('indicateur_carte_sanitaires.*', 'users.name as author', 
        'districts.nom_district as district', 
        'regions.region as region', 
        'provinces.province as province',
        'communes.commune as commune',
        'formation_sanitaires.nom_structure as formation_sanitaire')
        ->get();
        return response()->json( $indicateurCarteSanitaire );
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
        $indicateurCarteSanitaire = new IndicateurCarteSanitaires();

        $indicateurCarteSanitaire->region_id = $request->input('region_id');
        $indicateurCarteSanitaire->province_id = $request->input('province_id');
        $indicateurCarteSanitaire->commune_id = $request->input('commune_id');
        $indicateurCarteSanitaire->district_id = $request->input('district_id');
        $indicateurCarteSanitaire->formation_sanitaire_id = $request->input('formation_sanitaire_id');
        $indicateurCarteSanitaire->annee = $request->input('annee');
        $indicateurCarteSanitaire->mois = $request->input('mois');

        $indicateurCarteSanitaire->NbLit_SuiteCouche = $request->input('NbLit_SuiteCouche');
        $indicateurCarteSanitaire->NbLit_HospiMaternite = $request->input('NbLit_HospiMaternite');
        $indicateurCarteSanitaire->NbLit_HospiAutreService = $request->input('NbLit_HospiAutreService');

        $indicateurCarteSanitaire->created_by = $user->id;
        $indicateurCarteSanitaire->save();
        return response()->json( ['status' => 'success'] );
    }


    /**
     * storeMany a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function storeMany(Request $request)
    {
        $validatedData = $request->validate([
            'items' => 'required',
        ]);
        $user = auth()->userOrFail();

        foreach($request->input('items')  as $item ){
            $indicateurCarteSanitaire = new IndicateurCarteSanitaires();

            $indicateurCarteSanitaire->region_id = $item['region'];
            $indicateurCarteSanitaire->province_id = $item['province'];
            $indicateurCarteSanitaire->commune_id = $item['commune'];
            $indicateurCarteSanitaire->district_id = $item['district'];
            $indicateurCarteSanitaire->formation_sanitaire_id = $item['formation_sanitaire'];
            $indicateurCarteSanitaire->annee = $item['annee'];
            $indicateurCarteSanitaire->mois = $item['mois'];
    
            $indicateurCarteSanitaire->NbLit_SuiteCouche = $item['NbLit_SuiteCouche'];
            $indicateurCarteSanitaire->NbLit_HospiMaternite = $item['NbLit_HospiMaternite'];
            $indicateurCarteSanitaire->NbLit_HospiAutreService = $item['NbLit_HospiAutreService'];
    
            $indicateurCarteSanitaire->created_by = $user->id;
            $indicateurCarteSanitaire->save();
        }
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
        $district = DB::table('indicateur_carte_sanitaires')
        
        ->leftJoin('provinces', function($join){
            $join->on('indicateur_carte_sanitaires.province_id', '=', 'provinces.id');
        })
        ->leftJoin('communes', function($join){
            $join->on('indicateur_carte_sanitaires.commune_id', '=', 'communes.id');
        })
        ->leftJoin('regions', function($join){
            $join->on('indicateur_carte_sanitaires.region_id', '=', 'regions.id');
        })
        ->leftJoin('users', function($join){
            $join->on('indicateur_carte_sanitaires.created_by', '=', 'users.id');
        })
        ->leftJoin('users as users2', function($join){
            $join->on('indicateur_carte_sanitaires.updated_by', '=', 'users2.id');
        })
        ->leftJoin('districts', function($join){
            $join->on('indicateur_carte_sanitaires.district_id', '=', 'districts.id');
        })
        ->leftJoin('formation_sanitaires', function($join){
            $join->on('indicateur_carte_sanitaires.formation_sanitaire_id', '=', 'formation_sanitaires.id');
        })
        ->select('indicateur_carte_sanitaires.*', 'users.name as created_by','users2.name as updated_by', 'regions.region as region', 'districts.nom_district as district',
        'provinces.province as province','communes.commune as commune','formation_sanitaires.nom_structure as formationSanitaire')
        ->where('indicateur_carte_sanitaires.id', '=', $id)
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
        $indicateurCarteSanitaire = DB::table('indicateur_carte_sanitaires')->where('id', '=', $id)->first();
        $regions = DB::table('regions')->select('regions.region as label', 'regions.id as value')->get();
        $provinces = DB::table('provinces')->select('provinces.province as label', 'provinces.id as value')->get();
        $communes = DB::table('communes')->select('communes.commune as label', 'communes.id as value')->get();
        $districts = DB::table('districts')->select('districts.nom_district as label', 'districts.id as value')->get();
        $formationSanitaires = DB::table('formation_sanitaires')->select('formation_sanitaires.nom_structure as label', 'formation_sanitaires.id as value')->get();

        return response()->json( [ 'provinces' => $provinces, 'regions' => $regions, 'districts' => $districts, 'communes' => $communes,'indicateurCarteSanitaire'=>$indicateurCarteSanitaire,'formationSanitaires'=>$formationSanitaires ] );
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
        $indicateurCarteSanitaire = IndicateurCarteSanitaires::find($id);

        $indicateurCarteSanitaire->region_id = $request->input('region_id');
        $indicateurCarteSanitaire->province_id = $request->input('province_id');
        $indicateurCarteSanitaire->commune_id = $request->input('commune_id');
        $indicateurCarteSanitaire->district_id = $request->input('district_id');
        $indicateurCarteSanitaire->formation_sanitaire_id = $request->input('formation_sanitaire_id');
        $indicateurCarteSanitaire->annee = $request->input('annee');
        $indicateurCarteSanitaire->mois = $request->input('mois');

        $indicateurCarteSanitaire->NbLit_SuiteCouche = $request->input('NbLit_SuiteCouche');
        $indicateurCarteSanitaire->NbLit_HospiMaternite = $request->input('NbLit_HospiMaternite');
        $indicateurCarteSanitaire->NbLit_HospiAutreService = $request->input('NbLit_HospiAutreService');
        $indicateurCarteSanitaire->updated = 1;
        $indicateurCarteSanitaire->updated_by = $user->id;
        $indicateurCarteSanitaire->save();
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
        $indicateurCarteSanitaire = IndicateurCarteSanitaires::find($id);
        if($indicateurCarteSanitaire){
            $indicateurCarteSanitaire->delete();
        }
        return response()->json( ['status' => 'success'] );
    }
}
