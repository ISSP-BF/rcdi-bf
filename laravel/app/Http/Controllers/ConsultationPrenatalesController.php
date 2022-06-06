<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\ConsultationPrenatales;

class ConsultationPrenatalesController extends Controller
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
        $consultation_prenatales = DB::table('consultation_prenatales')
        
        ->leftJoin('provinces', function($join){
            $join->on('consultation_prenatales.province_id', '=', 'provinces.id');
        })
        ->leftJoin('communes', function($join){
            $join->on('consultation_prenatales.commune_id', '=', 'communes.id');
        })
        ->leftJoin('regions', function($join){
            $join->on('consultation_prenatales.region_id', '=', 'regions.id');
        })
        ->leftJoin('users', function($join){
            $join->on('consultation_prenatales.created_by', '=', 'users.id');
        })
        ->leftJoin('districts', function($join){
            $join->on('consultation_prenatales.district_id', '=', 'districts.id');
        })
        ->leftJoin('formation_sanitaires', function($join){
            $join->on('consultation_prenatales.formation_sanitaire_id', '=', 'formation_sanitaires.id');
        })
        ->select('consultation_prenatales.*', 'users.name as author', 
        'districts.nom_district as district', 
        'regions.region as region', 
        'provinces.province as province',
        'communes.commune as commune',
        'formation_sanitaires.nom_structure as formation_sanitaire')
        ->get();
        return response()->json( $consultation_prenatales );
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
        $consultationPrenatales = new ConsultationPrenatales();

        $consultationPrenatales->region_id = $request->input('region_id');
        $consultationPrenatales->province_id = $request->input('province_id');
        $consultationPrenatales->commune_id = $request->input('commune_id');
        $consultationPrenatales->district_id = $request->input('district_id');
        $consultationPrenatales->formation_sanitaire_id = $request->input('formation_sanitaire_id');
        $consultationPrenatales->annee = $request->input('annee');
        $consultationPrenatales->mois = $request->input('mois');

        $consultationPrenatales->NbFemmeVueCPN = $request->input('NbFemmeVueCPN');
        $consultationPrenatales->NbFemmeInscriteCPN1 = $request->input('NbFemmeInscriteCPN1');
        $consultationPrenatales->NbFemmeInscriteCPN1_Trim1 = $request->input('NbFemmeInscriteCPN1_Trim1');
        $consultationPrenatales->NbFemmeVueCPN4 = $request->input('NbFemmeVueCPN4');
        $consultationPrenatales->NbFemmeInscriteVueCPN_2Td = $request->input('NbFemmeInscriteVueCPN_2Td');
        $consultationPrenatales->NbFemmeFer_Acide_Folique = $request->input('NbFemmeFer_Acide_Folique');
        $consultationPrenatales->NbFemmeFer_Acide_Folique_CPN3 = $request->input('NbFemmeFer_Acide_Folique_CPN3');
        $consultationPrenatales->NbGrossesse_Refere = $request->input('NbGrossesse_Refere');
        $consultationPrenatales->NbFemmeVueCPN_TPI3 = $request->input('NbFemmeVueCPN_TPI3');
        $consultationPrenatales->NbFemmeVueCPN_TPI3_MILDA = $request->input('NbFemmeVueCPN_TPI3_MILDA');

        $consultationPrenatales->created_by = $user->id;
        $consultationPrenatales->save();
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
            $consultationPrenatales = new ConsultationPrenatales();
            $consultationPrenatales->region_id = $item['region'];
            $consultationPrenatales->province_id = $item['province'];
            $consultationPrenatales->commune_id = $item['commune'];
            $consultationPrenatales->district_id = $item['district'];
            $consultationPrenatales->formation_sanitaire_id = $item['formation_sanitaire'];
            $consultationPrenatales->annee = $item['annee'];
            $consultationPrenatales->mois = $item['mois'];
            $consultationPrenatales->NbFemmeVueCPN = $item['NbFemmeVueCPN'];
            $consultationPrenatales->NbFemmeInscriteCPN1 = $item['NbFemmeInscriteCPN1'];
            $consultationPrenatales->NbFemmeInscriteCPN1_Trim1 = $item['NbFemmeInscriteCPN1_Trim1'];
            $consultationPrenatales->NbFemmeVueCPN4 = $item['NbFemmeVueCPN4'];
            $consultationPrenatales->NbFemmeInscriteVueCPN_2Td = $item['NbFemmeInscriteVueCPN_2Td'];
            $consultationPrenatales->NbFemmeFer_Acide_Folique = $item['NbFemmeFer_Acide_Folique'];
            $consultationPrenatales->NbFemmeFer_Acide_Folique_CPN3 = $item['NbFemmeFer_Acide_Folique_CPN3'];
            $consultationPrenatales->NbGrossesse_Refere = $item['NbGrossesse_Refere'];
            $consultationPrenatales->NbFemmeVueCPN_TPI3 = $item['NbFemmeVueCPN_TPI3'];
            $consultationPrenatales->NbFemmeVueCPN_TPI3_MILDA = $item['NbFemmeVueCPN_TPI3_MILDA'];
            $consultationPrenatales->created_by = $user->id;
            $consultationPrenatales->save();
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
        $district = DB::table('consultation_prenatales')
        ->leftJoin('provinces', function($join){
            $join->on('consultation_prenatales.province_id', '=', 'provinces.id');
        })
        ->leftJoin('communes', function($join){
            $join->on('consultation_prenatales.commune_id', '=', 'communes.id');
        })
        ->leftJoin('regions', function($join){
            $join->on('consultation_prenatales.region_id', '=', 'regions.id');
        })
        ->leftJoin('users', function($join){
            $join->on('consultation_prenatales.created_by', '=', 'users.id');
        })
        ->leftJoin('users as users2', function($join){
            $join->on('consultation_prenatales.updated_by', '=', 'users2.id');
        })
        ->leftJoin('districts', function($join){
            $join->on('consultation_prenatales.district_id', '=', 'districts.id');
        })
        ->leftJoin('formation_sanitaires', function($join){
            $join->on('consultation_prenatales.formation_sanitaire_id', '=', 'formation_sanitaires.id');
        })
        ->select('consultation_prenatales.*', 'users.name as created_by','users2.name as updated_by', 'regions.region as region', 'districts.nom_district as district',
        'provinces.province as province','communes.commune as commune','formation_sanitaires.nom_structure as formationSanitaire')
        ->where('consultation_prenatales.id', '=', $id)
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
        $consultationPrenatale = DB::table('consultation_prenatales')->where('id', '=', $id)->first();
        $regions = DB::table('regions')->select('regions.region as label', 'regions.id as value')->get();
        $provinces = DB::table('provinces')->select('provinces.province as label', 'provinces.id as value')->get();
        $communes = DB::table('communes')->select('communes.commune as label', 'communes.id as value')->get();
        $districts = DB::table('districts')->select('districts.nom_district as label', 'districts.id as value')->get();
        $formationSanitaires = DB::table('formation_sanitaires')->select('formation_sanitaires.nom_structure as label', 'formation_sanitaires.id as value')->get();

        return response()->json( [ 'provinces' => $provinces, 'regions' => $regions, 'districts' => $districts, 'communes' => $communes,'consultationPrenatale'=>$consultationPrenatale,'formationSanitaires'=>$formationSanitaires ] );
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
        $consultationPrenatales = ConsultationPrenatales::find($id);

        $consultationPrenatales->region_id = $request->input('region_id');
        $consultationPrenatales->province_id = $request->input('province_id');
        $consultationPrenatales->commune_id = $request->input('commune_id');
        $consultationPrenatales->district_id = $request->input('district_id');
        $consultationPrenatales->formation_sanitaire_id = $request->input('formation_sanitaire_id');
        $consultationPrenatales->annee = $request->input('annee');
        $consultationPrenatales->mois = $request->input('mois');

        $consultationPrenatales->NbFemmeVueCPN = $request->input('NbFemmeVueCPN');
        $consultationPrenatales->NbFemmeInscriteCPN1 = $request->input('NbFemmeInscriteCPN1');
        $consultationPrenatales->NbFemmeInscriteCPN1_Trim1 = $request->input('NbFemmeInscriteCPN1_Trim1');
        $consultationPrenatales->NbFemmeVueCPN4 = $request->input('NbFemmeVueCPN4');
        $consultationPrenatales->NbFemmeInscriteVueCPN_2Td = $request->input('NbFemmeInscriteVueCPN_2Td');
        $consultationPrenatales->NbFemmeFer_Acide_Folique = $request->input('NbFemmeFer_Acide_Folique');
        $consultationPrenatales->NbFemmeFer_Acide_Folique_CPN3 = $request->input('NbFemmeFer_Acide_Folique_CPN3');
        $consultationPrenatales->NbGrossesse_Refere = $request->input('NbGrossesse_Refere');
        $consultationPrenatales->NbFemmeVueCPN_TPI3 = $request->input('NbFemmeVueCPN_TPI3');
        $consultationPrenatales->NbFemmeVueCPN_TPI3_MILDA = $request->input('NbFemmeVueCPN_TPI3_MILDA');
        $consultationPrenatales->updated_by = $user->id;
        $consultationPrenatales->save();
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
        $consultationPrenatales = ConsultationPrenatales::find($id);
        if($consultationPrenatales){
            $consultationPrenatales->delete();
        }
        return response()->json( ['status' => 'success'] );
    }
}
