<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\MorbilitePaludismes;

class MorbilitePaludismesController extends Controller
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
        $morbilitePaludismes = DB::table('morbilite_paludismes')
        ->join('users', 'users.id', '=', 'morbilite_paludismes.created_by')
        ->join('regions', 'regions.id', '=', 'morbilite_paludismes.region_id')
        ->join('provinces', 'provinces.id', '=', 'morbilite_paludismes.province_id')
        ->join('communes', 'communes.id', '=', 'morbilite_paludismes.commune_id')
        ->join('districts', 'districts.id', '=', 'morbilite_paludismes.district_id')
        ->join('formation_sanitaires', 'formation_sanitaires.id', '=', 'morbilite_paludismes.formation_sanitaire_id')
        ->select('morbilite_paludismes.*', 'users.name as author', 
        'districts.nom_district as district', 
        'regions.region as region', 
        'provinces.province as province',
        'communes.commune as commune',
        'formation_sanitaires.nom_structure as formation_sanitaire')
        ->get();
        return response()->json( $morbilitePaludismes );
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
        $morbilitePaludismes = new MorbilitePaludismes();

        $morbilitePaludismes->region_id = $request->input('region_id');
        $morbilitePaludismes->province_id = $request->input('province_id');
        $morbilitePaludismes->commune_id = $request->input('commune_id');
        $morbilitePaludismes->district_id = $request->input('district_id');
        $morbilitePaludismes->formation_sanitaire_id = $request->input('formation_sanitaire_id');
        $morbilitePaludismes->annee = $request->input('annee');
        $morbilitePaludismes->mois = $request->input('mois');

        $morbilitePaludismes->NbCas_Suspect_Palu = $request->input('NbCas_Suspect_Palu');
        $morbilitePaludismes->NbCas_PaluSimple_Confirme = $request->input('NbCas_PaluSimple_Confirme');
        $morbilitePaludismes->NbCas_PaluSimple_Presume = $request->input('NbCas_PaluSimple_Presume');
        $morbilitePaludismes->NbCas_PaluGrave_Confirme = $request->input('NbCas_PaluGrave_Confirme');
        $morbilitePaludismes->NbCas_PaluGrave_Presume = $request->input('NbCas_PaluGrave_Presume');
        $morbilitePaludismes->NbCas_Deces_PaluGrave = $request->input('NbCas_Deces_PaluGrave');

        $morbilitePaludismes->created_by = $user->id;
        $morbilitePaludismes->save();
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
            $morbilitePaludismes = new MorbilitePaludismes();
    
            $morbilitePaludismes->region_id = $item['region'];
            $morbilitePaludismes->province_id = $item['province'];
            $morbilitePaludismes->commune_id = $item['commune'];
            $morbilitePaludismes->district_id = $item['district'];
            $morbilitePaludismes->formation_sanitaire_id = $item['formation_sanitaire'];
            $morbilitePaludismes->annee = $item['annee'];
            $morbilitePaludismes->mois = $item['mois'];
    
            $morbilitePaludismes->NbCas_Suspect_Palu = $item['NbCas_Suspect_Palu'];
            $morbilitePaludismes->NbCas_PaluSimple_Confirme = $item['NbCas_PaluSimple_Confirme'];
            $morbilitePaludismes->NbCas_PaluSimple_Presume = $item['NbCas_PaluSimple_Presume'];
            $morbilitePaludismes->NbCas_PaluGrave_Confirme = $item['NbCas_PaluGrave_Confirme'];
            $morbilitePaludismes->NbCas_PaluGrave_Presume = $item['NbCas_PaluGrave_Presume'];
            $morbilitePaludismes->NbCas_Deces_PaluGrave = $item['NbCas_Deces_PaluGrave'];
    
            $morbilitePaludismes->created_by = $user->id;
            $morbilitePaludismes->save();
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
        $district = DB::table('morbilite_paludismes')
        
        ->leftJoin('provinces', function($join){
            $join->on('morbilite_paludismes.province_id', '=', 'provinces.id');
        })
        ->leftJoin('communes', function($join){
            $join->on('morbilite_paludismes.commune_id', '=', 'communes.id');
        })
        ->leftJoin('regions', function($join){
            $join->on('morbilite_paludismes.region_id', '=', 'regions.id');
        })
        ->leftJoin('users', function($join){
            $join->on('morbilite_paludismes.created_by', '=', 'users.id');
        })
        ->leftJoin('users as users2', function($join){
            $join->on('morbilite_paludismes.updated_by', '=', 'users2.id');
        })
        ->leftJoin('districts', function($join){
            $join->on('morbilite_paludismes.district_id', '=', 'districts.id');
        })
        ->leftJoin('formation_sanitaires', function($join){
            $join->on('morbilite_paludismes.formation_sanitaire_id', '=', 'formation_sanitaires.id');
        })
        ->select('morbilite_paludismes.*', 'users.name as created_by','users2.name as updated_by', 'regions.region as region', 'districts.nom_district as district',
        'provinces.province as province','communes.commune as commune','formation_sanitaires.nom_structure as formationSanitaire')
        ->where('morbilite_paludismes.id', '=', $id)
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
        $morbilitePaludisme = DB::table('morbilite_paludismes')->where('id', '=', $id)->first();
        $regions = DB::table('regions')->select('regions.region as label', 'regions.id as value')->get();
        $provinces = DB::table('provinces')->select('provinces.province as label', 'provinces.id as value')->get();
        $communes = DB::table('communes')->select('communes.commune as label', 'communes.id as value')->get();
        $districts = DB::table('districts')->select('districts.nom_district as label', 'districts.id as value')->get();
        $formationSanitaires = DB::table('formation_sanitaires')->select('formation_sanitaires.nom_structure as label', 'formation_sanitaires.id as value')->get();

        return response()->json( [ 'provinces' => $provinces, 'regions' => $regions, 'districts' => $districts, 'communes' => $communes,'morbilitePaludisme'=>$morbilitePaludisme,'formationSanitaires'=>$formationSanitaires ] );
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
        $morbilitePaludismes = MorbilitePaludismes::find($id);

        $morbilitePaludismes->region_id = $request->input('region_id');
        $morbilitePaludismes->province_id = $request->input('province_id');
        $morbilitePaludismes->commune_id = $request->input('commune_id');
        $morbilitePaludismes->district_id = $request->input('district_id');
        $morbilitePaludismes->formation_sanitaire_id = $request->input('formation_sanitaire_id');
        $morbilitePaludismes->annee = $request->input('annee');
        $morbilitePaludismes->mois = $request->input('mois');

        $morbilitePaludismes->NbCas_Suspect_Palu = $request->input('NbCas_Suspect_Palu');
        $morbilitePaludismes->NbCas_PaluSimple_Confirme = $request->input('NbCas_PaluSimple_Confirme');
        $morbilitePaludismes->NbCas_PaluSimple_Presume = $request->input('NbCas_PaluSimple_Presume');
        $morbilitePaludismes->NbCas_PaluGrave_Confirme = $request->input('NbCas_PaluGrave_Confirme');
        $morbilitePaludismes->NbCas_PaluGrave_Presume = $request->input('NbCas_PaluGrave_Presume');
        $morbilitePaludismes->NbCas_Deces_PaluGrave = $request->input('NbCas_Deces_PaluGrave');
        
        $morbilitePaludismes->updated_by = $user->id;
        $morbilitePaludismes->save();
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
        $morbilitePaludismes = MorbilitePaludismes::find($id);
        if($morbilitePaludismes){
            $morbilitePaludismes->delete();
        }
        return response()->json( ['status' => 'success'] );
    }
}
