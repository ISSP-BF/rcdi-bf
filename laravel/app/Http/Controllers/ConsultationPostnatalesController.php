<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\ConsultationPostnatales;

class ConsultationPostnatalesController extends Controller
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
        $consultationPostnatales = DB::table('consultation_postnatales')
        
        ->leftJoin('provinces', function($join){
            $join->on('consultation_postnatales.province_id', '=', 'provinces.id');
        })
        ->leftJoin('communes', function($join){
            $join->on('consultation_postnatales.commune_id', '=', 'communes.id');
        })
        ->leftJoin('regions', function($join){
            $join->on('consultation_postnatales.region_id', '=', 'regions.id');
        })
        ->leftJoin('users', function($join){
            $join->on('consultation_postnatales.created_by', '=', 'users.id');
        })
        ->leftJoin('districts', function($join){
            $join->on('consultation_postnatales.district_id', '=', 'districts.id');
        })
        ->leftJoin('formation_sanitaires', function($join){
            $join->on('consultation_postnatales.formation_sanitaire_id', '=', 'formation_sanitaires.id');
        })
        ->select('consultation_postnatales.*', 'users.name as author', 
        'districts.nom_district as district', 
        'regions.region as region', 
        'provinces.province as province',
        'communes.commune as commune',
        'formation_sanitaires.nom_structure as formation_sanitaire')
        ->get();
        return response()->json( $consultationPostnatales );
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
        $consultationPostnatales = new ConsultationPostnatales();

        $consultationPostnatales->region_id = $request->input('region_id');
        $consultationPostnatales->province_id = $request->input('province_id');
        $consultationPostnatales->commune_id = $request->input('commune_id');
        $consultationPostnatales->district_id = $request->input('district_id');
        $consultationPostnatales->formation_sanitaire_id = $request->input('formation_sanitaire_id');
        $consultationPostnatales->annee = $request->input('annee');
        $consultationPostnatales->mois = $request->input('mois');
        
        $consultationPostnatales->NbFemmeVueConsultation_PostNatale  = $request->input('NbFemmeVueConsultation_PostNatale');
        $consultationPostnatales->NbFemmeVueConsultation_PostNatalePrecoce = $request->input('NbFemmeVueConsultation_PostNatalePrecoce');
        $consultationPostnatales->NbFemmeVueConsultation_PostNataleTardive = $request->input('NbFemmeVueConsultation_PostNataleTardive');
       
        $consultationPostnatales->created_by = $user->id;
        $consultationPostnatales->save();
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
        $district = DB::table('consultation_postnatales')
        
        ->leftJoin('provinces', function($join){
            $join->on('consultation_postnatales.province_id', '=', 'provinces.id');
        })
        ->leftJoin('communes', function($join){
            $join->on('consultation_postnatales.commune_id', '=', 'communes.id');
        })
        ->leftJoin('regions', function($join){
            $join->on('consultation_postnatales.region_id', '=', 'regions.id');
        })
        ->leftJoin('users', function($join){
            $join->on('consultation_postnatales.created_by', '=', 'users.id');
        })
        ->leftJoin('users as users2', function($join){
            $join->on('consultation_postnatales.updated_by', '=', 'users2.id');
        })
        ->leftJoin('districts', function($join){
            $join->on('consultation_postnatales.district_id', '=', 'districts.id');
        })
        ->leftJoin('formation_sanitaires', function($join){
            $join->on('consultation_postnatales.formation_sanitaire_id', '=', 'formation_sanitaires.id');
        })
        ->select('consultation_postnatales.*', 'users.name as created_by','users2.name as updated_by', 'regions.region as region', 'districts.nom_district as district',
        'provinces.province as province','communes.commune as commune','formation_sanitaires.nom_structure as formationSanitaire')
        ->where('consultation_postnatales.id', '=', $id)
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
        $consultationPostnatale = DB::table('consultation_postnatales')->where('id', '=', $id)->first();
        $regions = DB::table('regions')->select('regions.region as label', 'regions.id as value')->get();
        $provinces = DB::table('provinces')->select('provinces.province as label', 'provinces.id as value')->get();
        $communes = DB::table('communes')->select('communes.commune as label', 'communes.id as value')->get();
        $districts = DB::table('districts')->select('districts.nom_district as label', 'districts.id as value')->get();
        $formationSanitaires = DB::table('formation_sanitaires')->select('formation_sanitaires.nom_structure as label', 'formation_sanitaires.id as value')->get();

        return response()->json( [ 'provinces' => $provinces, 'regions' => $regions, 'districts' => $districts, 'communes' => $communes,'consultationPostnatale'=>$consultationPostnatale,'formationSanitaires'=>$formationSanitaires ] );
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
        $consultationPostnatales = ConsultationPostnatales::find($id);

        $consultationPostnatales->region_id = $request->input('region_id');
        $consultationPostnatales->province_id = $request->input('province_id');
        $consultationPostnatales->commune_id = $request->input('commune_id');
        $consultationPostnatales->district_id = $request->input('district_id');
        $consultationPostnatales->formation_sanitaire_id = $request->input('formation_sanitaire_id');
        $consultationPostnatales->annee = $request->input('annee');
        $consultationPostnatales->mois = $request->input('mois');
        
        $consultationPostnatales->NbFemmeVueConsultation_PostNatale  = $request->input('NbFemmeVueConsultation_PostNatale');
        $consultationPostnatales->NbFemmeVueConsultation_PostNatalePrecoce = $request->input('NbFemmeVueConsultation_PostNatalePrecoce');
        $consultationPostnatales->NbFemmeVueConsultation_PostNataleTardive = $request->input('NbFemmeVueConsultation_PostNataleTardive');
       
        $consultationPostnatales->updated_by = $user->id;
        $consultationPostnatales->save();
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
        $consultationPostnatales = ConsultationPostnatales::find($id);
        if($consultationPostnatales){
            $consultationPostnatales->delete();
        }
        return response()->json( ['status' => 'success'] );
    }
}
