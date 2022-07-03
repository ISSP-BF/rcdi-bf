<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\VaccinationEnfants;

class VaccinationEnfantsController extends Controller
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
        $vaccinationEnfants = DB::table('vaccination_enfants')
        ->join('users', 'users.id', '=', 'vaccination_enfants.created_by')
        ->join('regions', 'regions.id', '=', 'vaccination_enfants.region_id')
        ->join('provinces', 'provinces.id', '=', 'vaccination_enfants.province_id')
        ->join('communes', 'communes.id', '=', 'vaccination_enfants.commune_id')
        ->join('districts', 'districts.id', '=', 'vaccination_enfants.district_id')
        ->join('formation_sanitaires', 'formation_sanitaires.id', '=', 'vaccination_enfants.formation_sanitaire_id')
        ->select('vaccination_enfants.*', 'users.name as author', 
        'districts.nom_district as district', 
        'regions.region as region', 
        'provinces.province as province',
        'communes.commune as commune',
        'formation_sanitaires.nom_structure as formation_sanitaire')
        ->get();
        return response()->json( $vaccinationEnfants );
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
        $vaccinationEnfants = new VaccinationEnfants();

        $vaccinationEnfants->region_id = $request->input('region_id');
        $vaccinationEnfants->province_id = $request->input('province_id');
        $vaccinationEnfants->commune_id = $request->input('commune_id');
        $vaccinationEnfants->district_id = $request->input('district_id');
        $vaccinationEnfants->formation_sanitaire_id = $request->input('formation_sanitaire_id');
        $vaccinationEnfants->annee = $request->input('annee');
        $vaccinationEnfants->mois = $request->input('mois');
        
        $vaccinationEnfants->NbBCG = $request->input('NbBCG');
        $vaccinationEnfants->NbDTCHepBHib1 = $request->input('NbDTCHepBHib1');
        $vaccinationEnfants->NbDTCHepBHib = $request->input('NbDTCHepBHib');
        $vaccinationEnfants->NbRR1 = $request->input('NbRR1');

        $vaccinationEnfants->created_by = $user->id;
        $vaccinationEnfants->save();
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
            $vaccinationEnfants = new VaccinationEnfants();
    
            $vaccinationEnfants->region_id = $item['region'];
            $vaccinationEnfants->province_id = $item['province'];
            $vaccinationEnfants->commune_id = $item['commune'];
            $vaccinationEnfants->district_id = $item['district'];
            $vaccinationEnfants->formation_sanitaire_id = $item['formation_sanitaire'];
            $vaccinationEnfants->annee = $item['annee'];
            $vaccinationEnfants->mois = $item['mois'];
            
            $vaccinationEnfants->NbBCG = $item['NbBCG'];
            $vaccinationEnfants->NbDTCHepBHib1 = $item['NbDTCHepBHib1'];
            $vaccinationEnfants->NbDTCHepBHib = $item['NbDTCHepBHib'];
            $vaccinationEnfants->NbRR1 = $item['NbRR1'];
    
            $vaccinationEnfants->created_by = $user->id;
            $vaccinationEnfants->save();
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
        $district = DB::table('vaccination_enfants')
        
        ->leftJoin('provinces', function($join){
            $join->on('vaccination_enfants.province_id', '=', 'provinces.id');
        })
        ->leftJoin('communes', function($join){
            $join->on('vaccination_enfants.commune_id', '=', 'communes.id');
        })
        ->leftJoin('regions', function($join){
            $join->on('vaccination_enfants.region_id', '=', 'regions.id');
        })
        ->leftJoin('users', function($join){
            $join->on('vaccination_enfants.created_by', '=', 'users.id');
        })
        ->leftJoin('users as users2', function($join){
            $join->on('vaccination_enfants.updated_by', '=', 'users2.id');
        })
        ->leftJoin('districts', function($join){
            $join->on('vaccination_enfants.district_id', '=', 'districts.id');
        })
        ->leftJoin('formation_sanitaires', function($join){
            $join->on('vaccination_enfants.formation_sanitaire_id', '=', 'formation_sanitaires.id');
        })
        ->select('vaccination_enfants.*', 'users.name as created_by','users2.name as updated_by', 'regions.region as region', 'districts.nom_district as district',
        'provinces.province as province','communes.commune as commune','formation_sanitaires.nom_structure as formationSanitaire')
        ->where('vaccination_enfants.id', '=', $id)
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
        $vaccinationEnfant = DB::table('vaccination_enfants')->where('id', '=', $id)->first();
        $regions = DB::table('regions')->select('regions.region as label', 'regions.id as value')->get();
        $provinces = DB::table('provinces')->select('provinces.province as label', 'provinces.id as value')->get();
        $communes = DB::table('communes')->select('communes.commune as label', 'communes.id as value')->get();
        $districts = DB::table('districts')->select('districts.nom_district as label', 'districts.id as value')->get();
        $formationSanitaires = DB::table('formation_sanitaires')->select('formation_sanitaires.nom_structure as label', 'formation_sanitaires.id as value')->get();

        return response()->json( [ 'provinces' => $provinces, 'regions' => $regions, 'districts' => $districts, 'communes' => $communes,'vaccinationEnfant'=>$vaccinationEnfant,'formationSanitaires'=>$formationSanitaires ] );
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
        $vaccinationEnfants = VaccinationEnfants::find($id);

        $vaccinationEnfants->region_id = $request->input('region_id');
        $vaccinationEnfants->province_id = $request->input('province_id');
        $vaccinationEnfants->commune_id = $request->input('commune_id');
        $vaccinationEnfants->district_id = $request->input('district_id');
        $vaccinationEnfants->formation_sanitaire_id = $request->input('formation_sanitaire_id');
        $vaccinationEnfants->annee = $request->input('annee');
        $vaccinationEnfants->mois = $request->input('mois');
        
        $vaccinationEnfants->NbBCG = $request->input('NbBCG');
        $vaccinationEnfants->NbDTCHepBHib1 = $request->input('NbDTCHepBHib1');
        $vaccinationEnfants->NbDTCHepBHib = $request->input('NbDTCHepBHib');
        $vaccinationEnfants->NbRR1 = $request->input('NbRR1');
        
        $vaccinationEnfants->updated = 1;
        $vaccinationEnfants->updated_by = $user->id;
        $vaccinationEnfants->save();
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
        $vaccinationEnfants = VaccinationEnfants::find($id);
        if($vaccinationEnfants){
            $vaccinationEnfants->delete();
        }
        return response()->json( ['status' => 'success'] );
    }
}
