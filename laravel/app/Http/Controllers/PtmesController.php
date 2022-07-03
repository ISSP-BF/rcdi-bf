<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Ptmes;

class PtmesController extends Controller
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
        $ptmes = DB::table('ptmes')
        ->join('users', 'users.id', '=', 'ptmes.created_by')
        ->join('regions', 'regions.id', '=', 'ptmes.region_id')
        ->join('provinces', 'provinces.id', '=', 'ptmes.province_id')
        ->join('communes', 'communes.id', '=', 'ptmes.commune_id')
        ->join('districts', 'districts.id', '=', 'ptmes.district_id')
        ->join('formation_sanitaires', 'formation_sanitaires.id', '=', 'ptmes.formation_sanitaire_id')
        ->select('ptmes.*', 'users.name as author', 
        'districts.nom_district as district', 
        'regions.region as region', 
        'provinces.province as province',
        'communes.commune as commune',
        'formation_sanitaires.nom_structure as formation_sanitaire')
        ->get();
        return response()->json( $ptmes );
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
            'formation_sanitaire_id' => 'required'
        ]);
        $user = auth()->userOrFail();
        $ptmes = new Ptmes();

        $ptmes->region_id = $request->input('region_id');
        $ptmes->province_id = $request->input('province_id');
        $ptmes->commune_id = $request->input('commune_id');
        $ptmes->district_id = $request->input('district_id');
        $ptmes->formation_sanitaire_id = $request->input('formation_sanitaire_id');
        $ptmes->annee = $request->input('annee');
        $ptmes->mois = $request->input('mois');

        $ptmes->NbFemmeEnceinte_VIHPositif_CPN1 = $request->input('NbFemmeEnceinte_VIHPositif_CPN1');
        $ptmes->NbFemmeVueCPN_TestVIH = $request->input('NbFemmeVueCPN_TestVIH');
        $ptmes->NbFemmeVueCPN_TestVIH_Positif = $request->input('NbFemmeVueCPN_TestVIH_Positif');

        $ptmes->created_by = $user->id;
        $ptmes->save();
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
            $ptmes = new Ptmes();

            $ptmes->region_id = $item['region'];
            $ptmes->province_id = $item['province'];
            $ptmes->commune_id = $item['commune'];
            $ptmes->district_id = $item['district'];
            $ptmes->formation_sanitaire_id = $item['formation_sanitaire'];
            $ptmes->annee = $item['annee'];
            $ptmes->mois = $item['mois'];
    
            $ptmes->NbFemmeEnceinte_VIHPositif_CPN1 = $item['NbFemmeEnceinte_VIHPositif_CPN1'];
            $ptmes->NbFemmeVueCPN_TestVIH = $item['NbFemmeVueCPN_TestVIH'];
            $ptmes->NbFemmeVueCPN_TestVIH_Positif = $item['NbFemmeVueCPN_TestVIH_Positif'];
    
            $ptmes->created_by = $user->id;
            $ptmes->save();
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
        $district = DB::table('ptmes')
        
        ->leftJoin('provinces', function($join){
            $join->on('ptmes.province_id', '=', 'provinces.id');
        })
        ->leftJoin('communes', function($join){
            $join->on('ptmes.commune_id', '=', 'communes.id');
        })
        ->leftJoin('regions', function($join){
            $join->on('ptmes.region_id', '=', 'regions.id');
        })
        ->leftJoin('users', function($join){
            $join->on('ptmes.created_by', '=', 'users.id');
        })
        ->leftJoin('users as users2', function($join){
            $join->on('ptmes.updated_by', '=', 'users2.id');
        })
        ->leftJoin('districts', function($join){
            $join->on('ptmes.district_id', '=', 'districts.id');
        })
        ->leftJoin('formation_sanitaires', function($join){
            $join->on('ptmes.formation_sanitaire_id', '=', 'formation_sanitaires.id');
        })
        ->select('ptmes.*', 'users.name as created_by','users2.name as updated_by', 'regions.region as region', 'districts.nom_district as district',
        'provinces.province as province','communes.commune as commune','formation_sanitaires.nom_structure as formationSanitaire')
        ->where('ptmes.id', '=', $id)
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
        $ptme = DB::table('ptmes')->where('id', '=', $id)->first();
        $regions = DB::table('regions')->select('regions.region as label', 'regions.id as value')->get();
        $provinces = DB::table('provinces')->select('provinces.province as label', 'provinces.id as value')->get();
        $communes = DB::table('communes')->select('communes.commune as label', 'communes.id as value')->get();
        $districts = DB::table('districts')->select('districts.nom_district as label', 'districts.id as value')->get();
        $formationSanitaires = DB::table('formation_sanitaires')->select('formation_sanitaires.nom_structure as label', 'formation_sanitaires.id as value')->get();

        return response()->json( [ 'provinces' => $provinces, 'regions' => $regions, 'districts' => $districts, 'communes' => $communes,'ptme'=>$ptme,'formationSanitaires'=>$formationSanitaires ] );
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
        $ptmes = Ptmes::find($id);

        $ptmes->region_id = $request->input('region_id');
        $ptmes->province_id = $request->input('province_id');
        $ptmes->commune_id = $request->input('commune_id');
        $ptmes->district_id = $request->input('district_id');
        $ptmes->formation_sanitaire_id = $request->input('formation_sanitaire_id');
        $ptmes->annee = $request->input('annee');
        $ptmes->mois = $request->input('mois');
        
        $ptmes->NbFemmeEnceinte_VIHPositif_CPN1 = $request->input('NbFemmeEnceinte_VIHPositif_CPN1');
        $ptmes->NbFemmeVueCPN_TestVIH = $request->input('NbFemmeVueCPN_TestVIH');
        $ptmes->NbFemmeVueCPN_TestVIH_Positif = $request->input('NbFemmeVueCPN_TestVIH_Positif');
        
        $ptmes->updated = 1;
        $ptmes->updated_by = $user->id;
        $ptmes->save();
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
        $ptmes = Ptmes::find($id);
        if($ptmes){
            $ptmes->delete();
        }
        return response()->json( ['status' => 'success'] );
    }
}
