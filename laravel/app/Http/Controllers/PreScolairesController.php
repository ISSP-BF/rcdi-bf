<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\PreScolaires;

class PreScolairesController extends Controller
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
        $preScolaires = DB::table('pre_scolaires')
        
        ->leftJoin('provinces', function($join){
            $join->on('pre_scolaires.province_id', '=', 'provinces.id');
        })
        ->leftJoin('communes', function($join){
            $join->on('pre_scolaires.commune_id', '=', 'communes.id');
        })
        ->leftJoin('regions', function($join){
            $join->on('pre_scolaires.region_id', '=', 'regions.id');
        })
        ->leftJoin('users', function($join){
            $join->on('pre_scolaires.created_by', '=', 'users.id');
        })
        ->leftJoin('users as users2', function($join){
            $join->on('pre_scolaires.updated_by', '=', 'users2.id');
        })
        ->select('pre_scolaires.*', 'users.name as created_by','users2.name as updated_by', 'regions.region as region',
        'provinces.province as province','communes.commune as commune')
        ->get();
        return response()->json( $preScolaires );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $regions = DB::table('regions')->select('regions.region as label', 'regions.id as value')->get();
        $provinces = DB::table('provinces')->select('provinces.province as label', 'provinces.id as value','provinces.region_id as region_id')->get();
        $communes = DB::table('communes')->select('communes.commune as label', 'communes.id as value','communes.province_id as province_id')->get();
        return response()->json( ['communes'=>$communes,'regions'=>$regions,'provinces'=>$provinces] );
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
            'annee' => 'required',
            'trimestre' => 'required'
        ]);
        $user = auth()->userOrFail();
        $preScolaire = new PreScolaires();

        $preScolaire->region_id = $request->input('region_id');
        $preScolaire->province_id = $request->input('province_id');
        $preScolaire->commune_id = $request->input('commune_id');
        $preScolaire->annee = $request->input('annee');
        $preScolaire->trimestre = $request->input('trimestre');
        
        
        $preScolaire->ceb = $request->input('ceb');
        $preScolaire->nom_structure = $request->input('nom_structure');
        $preScolaire->statut = $request->input('statut');
        $preScolaire->systeme = $request->input('systeme');
        $preScolaire->n_ordre = $request->input('n_ordre');
        $preScolaire->NbTotalSalleActivite = $request->input('NbTotalSalleActivite');
        
        $preScolaire->NbGarcon_PS = $request->input('NbGarcon_PS');
        $preScolaire->NbGarconAbandon_PS = $request->input('NbGarconAbandon_PS');
        $preScolaire->NbGarcon_MS = $request->input('NbGarcon_MS');
        $preScolaire->NbGarconAbandon_MS = $request->input('NbGarconAbandon_MS');
        $preScolaire->NbGarcon_GS = $request->input('NbGarcon_GS');
        $preScolaire->NbGarconAbandon_GS = $request->input('NbGarconAbandon_GS');
        $preScolaire->NbTotalGarcon = $request->input('NbTotalGarcon');
        $preScolaire->NbTotalGarconAbandon = $request->input('NbTotalGarconAbandon');
        $preScolaire->NbGarcon_PDI = $request->input('NbGarcon_PDI');
        $preScolaire->NbGarconAbandon_PDI = $request->input('NbGarconAbandon_PDI');
        
        $preScolaire->NbFille_PS = $request->input('NbFille_PS');
        $preScolaire->NbFilleAbandon_PS = $request->input('NbFilleAbandon_PS');
        $preScolaire->NbFille_MS = $request->input('NbFille_MS');
        $preScolaire->NbFilleAbandon_MS = $request->input('NbFilleAbandon_MS');
        $preScolaire->NbFille_GS = $request->input('NbFille_GS');
        $preScolaire->NbFilleAbandon_GS = $request->input('NbFilleAbandon_GS');
        $preScolaire->NbTotalFille = $request->input('NbTotalFille');
        $preScolaire->NbTotalFilleAbandon = $request->input('NbTotalFilleAbandon');
        $preScolaire->NbFille_PDI = $request->input('NbFille_PDI');
        $preScolaire->NbFilleAbandon_PDI = $request->input('NbFilleAbandon_PDI');

        $preScolaire->NbTotalEnseignantHomme = $request->input('NbTotalEnseignantHomme');
        $preScolaire->NbTotalEnseignantFemme = $request->input('NbTotalEnseignantFemme');
        $preScolaire->NbEnseignantHommeRedeployes = $request->input('NbEnseignantHommeRedeployes');
        $preScolaire->NbEnseignantFemmeRedeployes = $request->input('NbEnseignantFemmeRedeployes');
        $preScolaire->NbEnseignantHommeVolontaire = $request->input('NbEnseignantHommeVolontaire');
        $preScolaire->NbEnseignantFemmeVolontaire = $request->input('NbEnseignantFemmeVolontaire');
        $preScolaire->ExistenceEspacesRecreatif = $request->input('ExistenceEspacesRecreatif');
        $preScolaire->ExistenceDispositifHygiene = $request->input('ExistenceDispositifHygiene');
        $preScolaire->ExistenceCantine = $request->input('ExistenceCantine');
        $preScolaire->SourceDotationEtat = $request->input('SourceDotationEtat');
        $preScolaire->SourceDotationPartenaire = $request->input('SourceDotationPartenaire');
        $preScolaire->SourceDotationEndogene = $request->input('SourceDotationEndogene');
        
        $preScolaire->created_by = $user->id;
        $preScolaire->save();
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
        $district = DB::table('pre_scolaires')
        
        ->leftJoin('provinces', function($join){
            $join->on('pre_scolaires.province_id', '=', 'provinces.id');
        })
        ->leftJoin('communes', function($join){
            $join->on('pre_scolaires.commune_id', '=', 'communes.id');
        })
        ->leftJoin('regions', function($join){
            $join->on('pre_scolaires.region_id', '=', 'regions.id');
        })
        ->leftJoin('users', function($join){
            $join->on('pre_scolaires.created_by', '=', 'users.id');
        })
        ->leftJoin('users as users2', function($join){
            $join->on('pre_scolaires.updated_by', '=', 'users2.id');
        })
        ->select('pre_scolaires.*', 'users.name as created_by','users2.name as updated_by', 'regions.region as region',
        'provinces.province as province','communes.commune as commune')
        ->where('pre_scolaires.id', '=', $id)
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
        $preScolaire = DB::table('pre_scolaires')->where('id', '=', $id)->first();
        $regions = DB::table('regions')->select('regions.region as label', 'regions.id as value')->get();
        $provinces = DB::table('provinces')->select('provinces.province as label', 'provinces.id as value','provinces.region_id as region_id')->get();
        $communes = DB::table('communes')->select('communes.commune as label', 'communes.id as value','communes.province_id as province_id')->get();

        return response()->json( [ 'provinces' => $provinces, 'regions' => $regions, 'communes' => $communes,'preScolaire'=>$preScolaire ] );
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
        ]);

        $user = auth()->userOrFail();
        $preScolaire = PreScolaires::find($id);

        $preScolaire->region_id = $request->input('region_id');
        $preScolaire->province_id = $request->input('province_id');
        $preScolaire->commune_id = $request->input('commune_id');
        $preScolaire->annee = $request->input('annee');
        $preScolaire->trimestre = $request->input('trimestre');
        
        $preScolaire->ceb = $request->input('ceb');
        $preScolaire->nom_structure = $request->input('nom_structure');
        $preScolaire->statut = $request->input('statut');
        $preScolaire->systeme = $request->input('systeme');
        $preScolaire->n_ordre = $request->input('n_ordre');

        $preScolaire->NbTotalSalleActivite = $request->input('NbTotalSalleActivite');
        $preScolaire->NbGarcon_PS = $request->input('NbGarcon_PS');
        $preScolaire->NbGarconAbandon_PS = $request->input('NbGarconAbandon_PS');
        $preScolaire->NbGarcon_MS = $request->input('NbGarcon_MS');
        $preScolaire->NbGarconAbandon_MS = $request->input('NbGarconAbandon_MS');
        $preScolaire->NbGarcon_GS = $request->input('NbGarcon_GS');
        $preScolaire->NbGarconAbandon_GS = $request->input('NbGarconAbandon_GS');
        $preScolaire->NbTotalGarcon = $request->input('NbTotalGarcon');
        $preScolaire->NbTotalGarconAbandon = $request->input('NbTotalGarconAbandon');
        $preScolaire->NbGarcon_PDI = $request->input('NbGarcon_PDI');
        $preScolaire->NbGarconAbandon_PDI = $request->input('NbGarconAbandon_PDI');
        
        
        $preScolaire->NbFille_PS = $request->input('NbFille_PS');
        $preScolaire->NbFilleAbandon_PS = $request->input('NbFilleAbandon_PS');
        $preScolaire->NbFille_MS = $request->input('NbFille_MS');
        $preScolaire->NbFilleAbandon_MS = $request->input('NbFilleAbandon_MS');
        $preScolaire->NbFille_GS = $request->input('NbFille_GS');
        $preScolaire->NbFilleAbandon_GS = $request->input('NbFilleAbandon_GS');
        $preScolaire->NbTotalFille = $request->input('NbTotalFille');
        $preScolaire->NbTotalFilleAbandon = $request->input('NbTotalFilleAbandon');
        $preScolaire->NbFille_PDI = $request->input('NbFille_PDI');
        $preScolaire->NbFilleAbandon_PDI = $request->input('NbFilleAbandon_PDI');

        $preScolaire->NbTotalEnseignantHomme = $request->input('NbTotalEnseignantHomme');
        $preScolaire->NbTotalEnseignantFemme = $request->input('NbTotalEnseignantFemme');
        $preScolaire->NbEnseignantHommeRedeployes = $request->input('NbEnseignantHommeRedeployes');
        $preScolaire->NbEnseignantFemmeRedeployes = $request->input('NbEnseignantFemmeRedeployes');
        $preScolaire->NbEnseignantHommeVolontaire = $request->input('NbEnseignantHommeVolontaire');
        $preScolaire->NbEnseignantFemmeVolontaire = $request->input('NbEnseignantFemmeVolontaire');
        $preScolaire->ExistenceEspacesRecreatif = $request->input('ExistenceEspacesRecreatif');
        $preScolaire->ExistenceDispositifHygiene = $request->input('ExistenceDispositifHygiene');
        $preScolaire->ExistenceCantine = $request->input('ExistenceCantine');
        $preScolaire->SourceDotationEtat = $request->input('SourceDotationEtat');
        $preScolaire->SourceDotationPartenaire = $request->input('SourceDotationPartenaire');
        $preScolaire->SourceDotationEndogene = $request->input('SourceDotationEndogene');
        
        $preScolaire->updated_by = $user->id;
        $preScolaire->save();
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
        $preScolaire = PreScolaire::find($id);
        if($preScolaire){
            $preScolaire->delete();
        }
        return response()->json( ['status' => 'success'] );
    }
}
