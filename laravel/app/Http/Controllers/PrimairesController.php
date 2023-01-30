<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Primaires;

class PrimairesController extends Controller
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
        $primaires = DB::table('primaires')
        
        ->leftJoin('provinces', function($join){
            $join->on('primaires.province_id', '=', 'provinces.id');
        })
        ->leftJoin('communes', function($join){
            $join->on('primaires.commune_id', '=', 'communes.id');
        })
        ->leftJoin('regions', function($join){
            $join->on('primaires.region_id', '=', 'regions.id');
        })
        ->leftJoin('users', function($join){
            $join->on('primaires.created_by', '=', 'users.id');
        })
        ->leftJoin('users as users2', function($join){
            $join->on('primaires.updated_by', '=', 'users2.id');
        })
        ->select('primaires.*', 'users.name as created_by','users2.name as updated_by', 'regions.region as region',
        'provinces.province as province','communes.commune as commune',
        DB::raw('(CASE WHEN primaires.ExistenceEspacesRecreatif = 1 THEN "OUI" ELSE "NON" END) AS ExistenceEspacesRecreatif'),
        DB::raw('(CASE WHEN primaires.ExistenceDispositifHygiene = 1 THEN "OUI" ELSE "NON" END) AS ExistenceDispositifHygiene'),
        DB::raw('(CASE WHEN primaires.ExistenceCantine = 1 THEN "OUI" ELSE "NON" END) AS ExistenceCantine'),
        DB::raw('(CASE WHEN primaires.SourceDotationEtat = 1 THEN "OUI" ELSE "NON" END) AS SourceDotationEtat'),
        DB::raw('(CASE WHEN primaires.SourceDotationPartenaire = 1 THEN "OUI" ELSE "NON" END) AS SourceDotationPartenaire'),
        DB::raw('(CASE WHEN primaires.SourceDotationEndogene = 1 THEN "OUI" ELSE "NON" END) AS SourceDotationEndogene'),
        DB::raw('(CASE WHEN primaires.ExistanceBacOrdure = 1 THEN "OUI" ELSE "NON" END) AS ExistanceBacOrdure'),
        DB::raw('(CASE WHEN primaires.ExistanceSourceEauAmeliore = 1 THEN "OUI" ELSE "NON" END) AS ExistanceSourceEauAmeliore'))
        ->get();
        return response()->json( $primaires );
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
        $primaire = new Primaires();
        
        $primaire->region_id = $request->input('region_id');
        $primaire->province_id = $request->input('province_id');
        $primaire->commune_id = $request->input('commune_id');
        $primaire->annee = $request->input('annee');
        $primaire->trimestre = $request->input('trimestre');
        
        $primaire->ceb = $request->input('ceb');
        $primaire->nom_structure = $request->input('nom_structure');
        $primaire->statut = $request->input('statut');
        $primaire->type = $request->input('type');
        $primaire->n_ordre = $request->input('n_ordre');

        $primaire->NbTotalSalleActivite = $request->input('NbTotalSalleActivite');
        
        $primaire->NbPoubelle = $request->input('NbPoubelle');
        $primaire->NbLatrine = $request->input('NbLatrine');
        $primaire->ExistanceBacOrdure = $request->input('ExistanceBacOrdure');
        $primaire->ExistanceSourceEauAmeliore = $request->input('ExistanceSourceEauAmeliore');

        $primaire->NbGarcon_CP1 = $request->input('NbGarcon_CP1');
        $primaire->NbGarconMoyenne_CP1 = $request->input('NbGarconMoyenne_CP1');
        $primaire->NbGarconAbandon_CP1 = $request->input('NbGarconAbandon_CP1');
        $primaire->NbGarcon_CP2 = $request->input('NbGarcon_CP2');
        $primaire->NbGarconMoyenne_CP2 = $request->input('NbGarconMoyenne_CP2');
        $primaire->NbGarconAbandon_CP2 = $request->input('NbGarconAbandon_CP2');
        $primaire->NbGarcon_CE1 = $request->input('NbGarcon_CE1');
        $primaire->NbGarconMoyenne_CE1 = $request->input('NbGarconMoyenne_CE1');
        $primaire->NbGarconAbandon_CE1 = $request->input('NbGarconAbandon_CE1');
        $primaire->NbGarcon_CE2 = $request->input('NbGarcon_CE2');
        $primaire->NbGarconMoyenne_CE2 = $request->input('NbGarconMoyenne_CE2');
        $primaire->NbGarconAbandon_CE2 = $request->input('NbGarconAbandon_CE2');
        $primaire->NbGarcon_CM1 = $request->input('NbGarcon_CM1');
        $primaire->NbGarconMoyenne_CM1 = $request->input('NbGarconMoyenne_CM1');
        $primaire->NbGarconAbandon_CM1 = $request->input('NbGarconAbandon_CM1');
        $primaire->NbGarcon_CM2 = $request->input('NbGarcon_CM2');
        $primaire->NbGarconMoyenne_CM2 = $request->input('NbGarconMoyenne_CM2');
        $primaire->NbGarconAbandon_CM2 = $request->input('NbGarconAbandon_CM2');
        $primaire->NbTotalGarcon = $request->input('NbTotalGarcon');
        $primaire->NbTotalGarconMoyenne = $request->input('NbTotalGarconMoyenne');
        $primaire->NbTotalGarconAbandon = $request->input('NbTotalGarconAbandon');
        $primaire->NbGarcon_PDI = $request->input('NbGarcon_PDI');
        $primaire->NbGarconMoyenne_PDI = $request->input('NbGarconMoyenne_PDI');
        $primaire->NbGarconAbandon_PDI = $request->input('NbGarconAbandon_PDI');
        $primaire->NbFille_CP1 = $request->input('NbFille_CP1');
        $primaire->NbFilleMoyenne_CP1 = $request->input('NbFilleMoyenne_CP1');
        $primaire->NbFilleAbandon_CP1 = $request->input('NbFilleAbandon_CP1');
        $primaire->NbFille_CP2 = $request->input('NbFille_CP2');
        $primaire->NbFilleMoyenne_CP2 = $request->input('NbFilleMoyenne_CP2');
        $primaire->NbFilleAbandon_CP2 = $request->input('NbFilleAbandon_CP2');
        $primaire->NbFille_CE1 = $request->input('NbFille_CE1');
        $primaire->NbFilleMoyenne_CE1 = $request->input('NbFilleMoyenne_CE1');
        $primaire->NbFilleAbandon_CE1 = $request->input('NbFilleAbandon_CE1');
        $primaire->NbFille_CE2 = $request->input('NbFille_CE2');
        $primaire->NbFilleMoyenne_CE2 = $request->input('NbFilleMoyenne_CE2');
        $primaire->NbFilleAbandon_CE2 = $request->input('NbFilleAbandon_CE2');
        $primaire->NbFille_CM1 = $request->input('NbFille_CM1');
        $primaire->NbFilleMoyenne_CM1 = $request->input('NbFilleMoyenne_CM1');
        $primaire->NbFilleAbandon_CM1 = $request->input('NbFilleAbandon_CM1');
        $primaire->NbFille_CM2 = $request->input('NbFille_CM2');
        $primaire->NbFilleMoyenne_CM2 = $request->input('NbFilleMoyenne_CM2');
        $primaire->NbFilleAbandon_CM2 = $request->input('NbFilleAbandon_CM2');
        $primaire->NbTotalFille = $request->input('NbTotalFille');
        $primaire->NbTotalFilleMoyenne = $request->input('NbTotalFilleMoyenne');
        $primaire->NbTotalFilleAbandon = $request->input('NbTotalFilleAbandon');
        $primaire->NbFille_PDI = $request->input('NbFille_PDI');
        $primaire->NbFilleMoyenne_PDI = $request->input('NbFilleMoyenne_PDI');
        $primaire->NbFilleAbandon_PDI = $request->input('NbFilleAbandon_PDI');
        $primaire->NbTotalEnseignantHomme = $request->input('NbTotalEnseignantHomme');
        $primaire->NbTotalEnseignantFemme = $request->input('NbTotalEnseignantFemme');
        $primaire->NbEnseignantHommeRedeployes = $request->input('NbEnseignantHommeRedeployes');
        $primaire->NbEnseignantFemmeRedeployes = $request->input('NbEnseignantFemmeRedeployes');
        $primaire->NbEnseignantHommeVolontaire = $request->input('NbEnseignantHommeVolontaire');
        $primaire->NbEnseignantFemmeVolontaire = $request->input('NbEnseignantFemmeVolontaire');
        $primaire->ExistenceEspacesRecreatif = $request->input('ExistenceEspacesRecreatif');
        $primaire->ExistenceDispositifHygiene = $request->input('ExistenceDispositifHygiene');
        $primaire->ExistenceCantine = $request->input('ExistenceCantine');
        $primaire->SourceDotationEtat = $request->input('SourceDotationEtat');
        $primaire->SourceDotationPartenaire = $request->input('SourceDotationPartenaire');
        $primaire->SourceDotationEndogene = $request->input('SourceDotationEndogene');

        $primaire->created_by = $user->id;
        $primaire->save();
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
        $district = DB::table('primaires')
        
        ->leftJoin('provinces', function($join){
            $join->on('primaires.province_id', '=', 'provinces.id');
        })
        ->leftJoin('communes', function($join){
            $join->on('primaires.commune_id', '=', 'communes.id');
        })
        ->leftJoin('regions', function($join){
            $join->on('primaires.region_id', '=', 'regions.id');
        })
        ->leftJoin('users', function($join){
            $join->on('primaires.created_by', '=', 'users.id');
        })
        ->leftJoin('users as users2', function($join){
            $join->on('primaires.updated_by', '=', 'users2.id');
        })
        ->select('primaires.*', 'users.name as created_by','users2.name as updated_by', 'regions.region as region',
        'provinces.province as province','communes.commune as commune',
        DB::raw('(CASE WHEN primaires.ExistenceEspacesRecreatif = 1 THEN "OUI" ELSE "NON" END) AS ExistenceEspacesRecreatif'),
        DB::raw('(CASE WHEN primaires.ExistenceDispositifHygiene = 1 THEN "OUI" ELSE "NON" END) AS ExistenceDispositifHygiene'),
        DB::raw('(CASE WHEN primaires.ExistenceCantine = 1 THEN "OUI" ELSE "NON" END) AS ExistenceCantine'),
        DB::raw('(CASE WHEN primaires.SourceDotationEtat = 1 THEN "OUI" ELSE "NON" END) AS SourceDotationEtat'),
        DB::raw('(CASE WHEN primaires.SourceDotationPartenaire = 1 THEN "OUI" ELSE "NON" END) AS SourceDotationPartenaire'),
        DB::raw('(CASE WHEN primaires.SourceDotationEndogene = 1 THEN "OUI" ELSE "NON" END) AS SourceDotationEndogene'),
        DB::raw('(CASE WHEN primaires.ExistanceBacOrdure = 1 THEN "OUI" ELSE "NON" END) AS ExistanceBacOrdure'),
        DB::raw('(CASE WHEN primaires.ExistanceSourceEauAmeliore = 1 THEN "OUI" ELSE "NON" END) AS ExistanceSourceEauAmeliore'))
        ->where('primaires.id', '=', $id)
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
        $primaire = DB::table('primaires')->where('id', '=', $id)->first();
        $regions = DB::table('regions')->select('regions.region as label', 'regions.id as value')->get();
        $provinces = DB::table('provinces')->select('provinces.province as label', 'provinces.id as value','provinces.region_id as region_id')->get();
        $communes = DB::table('communes')->select('communes.commune as label', 'communes.id as value','communes.province_id as province_id')->get();

        return response()->json( [ 'provinces' => $provinces, 'regions' => $regions, 'communes' => $communes,'primaire'=>$primaire ] );
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
        $primaire = Primaires::find($id);

        $primaire->region_id = $request->input('region_id');
        $primaire->province_id = $request->input('province_id');
        $primaire->commune_id = $request->input('commune_id');
        $primaire->annee = $request->input('annee');
        $primaire->trimestre = $request->input('trimestre');
        
        $primaire->ceb = $request->input('ceb');
        $primaire->nom_structure = $request->input('nom_structure');
        $primaire->statut = $request->input('statut');
        $primaire->type = $request->input('type');
        $primaire->n_ordre = $request->input('n_ordre');
        
        $primaire->NbTotalSalleActivite = $request->input('NbTotalSalleActivite');
        
        $primaire->NbPoubelle = $request->input('NbPoubelle');
        $primaire->NbLatrine = $request->input('NbLatrine');
        $primaire->ExistanceBacOrdure = $request->input('ExistanceBacOrdure');
        $primaire->ExistanceSourceEauAmeliore = $request->input('ExistanceSourceEauAmeliore');

        $primaire->NbGarcon_CP1 = $request->input('NbGarcon_CP1');
        $primaire->NbGarconMoyenne_CP1 = $request->input('NbGarconMoyenne_CP1');
        $primaire->NbGarconAbandon_CP1 = $request->input('NbGarconAbandon_CP1');
        $primaire->NbGarcon_CP2 = $request->input('NbGarcon_CP2');
        $primaire->NbGarconMoyenne_CP2 = $request->input('NbGarconMoyenne_CP2');
        $primaire->NbGarconAbandon_CP2 = $request->input('NbGarconAbandon_CP2');
        $primaire->NbGarcon_CE1 = $request->input('NbGarcon_CE1');
        $primaire->NbGarconMoyenne_CE1 = $request->input('NbGarconMoyenne_CE1');
        $primaire->NbGarconAbandon_CE1 = $request->input('NbGarconAbandon_CE1');
        $primaire->NbGarcon_CE2 = $request->input('NbGarcon_CE2');
        $primaire->NbGarconMoyenne_CE2 = $request->input('NbGarconMoyenne_CE2');
        $primaire->NbGarconAbandon_CE2 = $request->input('NbGarconAbandon_CE2');
        $primaire->NbGarcon_CM1 = $request->input('NbGarcon_CM1');
        $primaire->NbGarconMoyenne_CM1 = $request->input('NbGarconMoyenne_CM1');
        $primaire->NbGarconAbandon_CM1 = $request->input('NbGarconAbandon_CM1');
        $primaire->NbGarcon_CM2 = $request->input('NbGarcon_CM2');
        $primaire->NbGarconMoyenne_CM2 = $request->input('NbGarconMoyenne_CM2');
        $primaire->NbGarconAbandon_CM2 = $request->input('NbGarconAbandon_CM2');
        $primaire->NbTotalGarcon = $request->input('NbTotalGarcon');
        $primaire->NbTotalGarconMoyenne = $request->input('NbTotalGarconMoyenne');
        $primaire->NbTotalGarconAbandon = $request->input('NbTotalGarconAbandon');
        $primaire->NbGarcon_PDI = $request->input('NbGarcon_PDI');
        $primaire->NbGarconMoyenne_PDI = $request->input('NbGarconMoyenne_PDI');
        $primaire->NbGarconAbandon_PDI = $request->input('NbGarconAbandon_PDI');
        $primaire->NbFille_CP1 = $request->input('NbFille_CP1');
        $primaire->NbFilleMoyenne_CP1 = $request->input('NbFilleMoyenne_CP1');
        $primaire->NbFilleAbandon_CP1 = $request->input('NbFilleAbandon_CP1');
        $primaire->NbFille_CP2 = $request->input('NbFille_CP2');
        $primaire->NbFilleMoyenne_CP2 = $request->input('NbFilleMoyenne_CP2');
        $primaire->NbFilleAbandon_CP2 = $request->input('NbFilleAbandon_CP2');
        $primaire->NbFille_CE1 = $request->input('NbFille_CE1');
        $primaire->NbFilleMoyenne_CE1 = $request->input('NbFilleMoyenne_CE1');
        $primaire->NbFilleAbandon_CE1 = $request->input('NbFilleAbandon_CE1');
        $primaire->NbFille_CE2 = $request->input('NbFille_CE2');
        $primaire->NbFilleMoyenne_CE2 = $request->input('NbFilleMoyenne_CE2');
        $primaire->NbFilleAbandon_CE2 = $request->input('NbFilleAbandon_CE2');
        $primaire->NbFille_CM1 = $request->input('NbFille_CM1');
        $primaire->NbFilleMoyenne_CM1 = $request->input('NbFilleMoyenne_CM1');
        $primaire->NbFilleAbandon_CM1 = $request->input('NbFilleAbandon_CM1');
        $primaire->NbFille_CM2 = $request->input('NbFille_CM2');
        $primaire->NbFilleMoyenne_CM2 = $request->input('NbFilleMoyenne_CM2');
        $primaire->NbFilleAbandon_CM2 = $request->input('NbFilleAbandon_CM2');
        $primaire->NbTotalFille = $request->input('NbTotalFille');
        $primaire->NbTotalFilleMoyenne = $request->input('NbTotalFilleMoyenne');
        $primaire->NbTotalFilleAbandon = $request->input('NbTotalFilleAbandon');
        $primaire->NbFille_PDI = $request->input('NbFille_PDI');
        $primaire->NbFilleMoyenne_PDI = $request->input('NbFilleMoyenne_PDI');
        $primaire->NbFilleAbandon_PDI = $request->input('NbFilleAbandon_PDI');
        $primaire->NbTotalEnseignantHomme = $request->input('NbTotalEnseignantHomme');
        $primaire->NbTotalEnseignantFemme = $request->input('NbTotalEnseignantFemme');
        $primaire->NbEnseignantHommeRedeployes = $request->input('NbEnseignantHommeRedeployes');
        $primaire->NbEnseignantFemmeRedeployes = $request->input('NbEnseignantFemmeRedeployes');
        $primaire->NbEnseignantHommeVolontaire = $request->input('NbEnseignantHommeVolontaire');
        $primaire->NbEnseignantFemmeVolontaire = $request->input('NbEnseignantFemmeVolontaire');
        $primaire->ExistenceEspacesRecreatif = $request->input('ExistenceEspacesRecreatif');
        $primaire->ExistenceDispositifHygiene = $request->input('ExistenceDispositifHygiene');
        $primaire->ExistenceCantine = $request->input('ExistenceCantine');
        $primaire->SourceDotationEtat = $request->input('SourceDotationEtat');
        $primaire->SourceDotationPartenaire = $request->input('SourceDotationPartenaire');
        $primaire->SourceDotationEndogene = $request->input('SourceDotationEndogene');
        
        $primaire->updated = 1;
        $primaire->updated_by = $user->id;
        $primaire->save();
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
        $primaire = Primaire::find($id);
        if($primaire){
            $primaire->delete();
        }
        return response()->json( ['status' => 'success'] );
    }
}
