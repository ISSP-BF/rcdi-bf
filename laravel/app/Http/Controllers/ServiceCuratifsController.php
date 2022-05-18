<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\ServiceCuratifs;

class ServiceCuratifsController extends Controller
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
        $serviceCuratifs = DB::table('service_curatifs')
        ->join('users', 'users.id', '=', 'service_curatifs.created_by')
        ->join('regions', 'regions.id', '=', 'service_curatifs.region_id')
        ->join('provinces', 'provinces.id', '=', 'service_curatifs.province_id')
        ->join('communes', 'communes.id', '=', 'service_curatifs.commune_id')
        ->join('districts', 'districts.id', '=', 'service_curatifs.district_id')
        ->join('formation_sanitaires', 'formation_sanitaires.id', '=', 'service_curatifs.formation_sanitaire_id')
        ->select('service_curatifs.*', 'users.name as author', 
        'districts.nom_district as district', 
        'regions.region as region', 
        'provinces.province as province',
        'communes.commune as commune',
        'formation_sanitaires.nom_structure as formation_sanitaire')
        ->get();
        return response()->json( $serviceCuratifs );
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
        $serviceCuratifs = new ServiceCuratifs();

        $serviceCuratifs->region_id = $request->input('region_id');
        $serviceCuratifs->province_id = $request->input('province_id');
        $serviceCuratifs->commune_id = $request->input('commune_id');
        $serviceCuratifs->district_id = $request->input('district_id');
        $serviceCuratifs->formation_sanitaire_id = $request->input('formation_sanitaire_id');
        $serviceCuratifs->annee = $request->input('annee');
        $serviceCuratifs->mois = $request->input('mois');

        $serviceCuratifs->NbNouveaux_consultant = $request->input('NbNouveaux_consultant');
        $serviceCuratifs->NbEnft_PrisCharge_PCIME = $request->input('NbEnft_PrisCharge_PCIME');
        $serviceCuratifs->NbMaladie_MisObservation = $request->input('NbMaladie_MisObservation');

        $serviceCuratifs->created_by = $user->id;
        $serviceCuratifs->save();
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
        $district = DB::table('service_curatifs')
        
        ->leftJoin('provinces', function($join){
            $join->on('service_curatifs.province_id', '=', 'provinces.id');
        })
        ->leftJoin('communes', function($join){
            $join->on('service_curatifs.commune_id', '=', 'communes.id');
        })
        ->leftJoin('regions', function($join){
            $join->on('service_curatifs.region_id', '=', 'regions.id');
        })
        ->leftJoin('users', function($join){
            $join->on('service_curatifs.created_by', '=', 'users.id');
        })
        ->leftJoin('users as users2', function($join){
            $join->on('service_curatifs.updated_by', '=', 'users2.id');
        })
        ->leftJoin('districts', function($join){
            $join->on('service_curatifs.district_id', '=', 'districts.id');
        })
        ->leftJoin('formation_sanitaires', function($join){
            $join->on('service_curatifs.formation_sanitaire_id', '=', 'formation_sanitaires.id');
        })
        ->select('service_curatifs.*', 'users.name as created_by','users2.name as updated_by', 'regions.region as region', 'districts.nom_district as district',
        'provinces.province as province','communes.commune as commune','formation_sanitaires.nom_structure as formationSanitaire')
        ->where('service_curatifs.id', '=', $id)
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
        $serviceCuratif = DB::table('service_curatifs')->where('id', '=', $id)->first();
        $regions = DB::table('regions')->select('regions.region as label', 'regions.id as value')->get();
        $provinces = DB::table('provinces')->select('provinces.province as label', 'provinces.id as value')->get();
        $communes = DB::table('communes')->select('communes.commune as label', 'communes.id as value')->get();
        $districts = DB::table('districts')->select('districts.nom_district as label', 'districts.id as value')->get();
        $formationSanitaires = DB::table('formation_sanitaires')->select('formation_sanitaires.nom_structure as label', 'formation_sanitaires.id as value')->get();

        return response()->json( [ 'provinces' => $provinces, 'regions' => $regions, 'districts' => $districts, 'communes' => $communes,'serviceCuratif'=>$serviceCuratif,'formationSanitaires'=>$formationSanitaires ] );
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
        $serviceCuratifs = ServiceCuratifs::find($id);

        $serviceCuratifs->region_id = $request->input('region_id');
        $serviceCuratifs->province_id = $request->input('province_id');
        $serviceCuratifs->commune_id = $request->input('commune_id');
        $serviceCuratifs->district_id = $request->input('district_id');
        $serviceCuratifs->formation_sanitaire_id = $request->input('formation_sanitaire_id');
        $serviceCuratifs->annee = $request->input('annee');
        $serviceCuratifs->mois = $request->input('mois');

        $serviceCuratifs->NbNouveaux_consultant = $request->input('NbNouveaux_consultant');
        $serviceCuratifs->NbEnft_PrisCharge_PCIME = $request->input('NbEnft_PrisCharge_PCIME');
        $serviceCuratifs->NbMaladie_MisObservation = $request->input('NbMaladie_MisObservation');
        
        $serviceCuratifs->updated_by = $user->id;
        $serviceCuratifs->save();
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
        $serviceCuratifs = ServiceCuratifs::find($id);
        if($serviceCuratifs){
            $serviceCuratifs->delete();
        }
        return response()->json( ['status' => 'success'] );
    }
}
