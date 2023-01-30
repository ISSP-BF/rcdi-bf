<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Indicateurs;
use App\Models\Communes;

class IndicateursController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->middleware('auth:api');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $indicateurs = DB::table('indicateurs')
        ->leftJoin('provinces', function($join){
            $join->on('indicateurs.province_id', '=', 'provinces.id');
        })
        ->leftJoin('communes', function($join){
            $join->on('indicateurs.commune_id', '=', 'communes.id');
        })
        ->leftJoin('regions', function($join){
            $join->on('indicateurs.region_id', '=', 'regions.id');
        })
        ->leftJoin('users', function($join){
            $join->on('indicateurs.created_by', '=', 'users.id');
        })
        ->select('indicateurs.*', 
        'users.name as author', 
        'regions.region as region', 
        'provinces.province as province',
        'communes.commune as commune')->orderBy('id', 'DESC')
        ->get();
        return response()->json( $indicateurs );
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
        $this->middleware('auth:api'); 
        $validatedData = $request->validate([
            'region_id' => 'required',
            'province_id' => 'required',
            'commune_id' => 'required',
            'indicateur' => 'required',
            'indice' => 'required',
            'source' => 'required',
            'annee' => 'required',
            'mois' => 'required'
        ]);
        $user = auth()->userOrFail();
        $indicateurs = new Indicateurs();
        $indicateurs->region_id = $request->input('region_id');
        $indicateurs->province_id = $request->input('province_id');
        $indicateurs->commune_id = $request->input('commune_id');
        $indicateurs->groupe = $request->input('groupe');
        $indicateurs->indicateur = $request->input('indicateur');
        $indicateurs->niveau1 = $request->input('niveau1');
        $indicateurs->niveau2 = $request->input('niveau2');
        $indicateurs->mois = $request->input('mois');
        $indicateurs->annee = $request->input('annee');
        $indicateurs->indice = $request->input('indice');
        $indicateurs->source = $request->input('source');
        $indicateurs->created_by = $user->id;
        $indicateurs->save();
        return response()->json( ['status' => 'success'] );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $indicateur = DB::table('indicateurs')->where('id', '=', $id)->first();
        $regions = DB::table('regions')->select('regions.region as label', 'regions.id as value')->get();
        $provinces = DB::table('provinces')->select('provinces.province as label', 'provinces.id as value')->get();
        $communes = DB::table('communes')->select('communes.commune as label', 'communes.id as value')->get();
 
        return response()->json( [ 'provinces' => $provinces, 'regions' => $regions,  'communes' => $communes,'indicateur'=>$indicateur] );
    }
    
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->middleware('auth:api'); 
        $validatedData = $request->validate([
            'region_id' => 'required',
            'province_id' => 'required',
            'commune_id' => 'required',
            'indicateur' => 'required',
            'indice' => 'required',
            'source' => 'required',
            'annee' => 'required',
            'mois' => 'required'
        ]);
        $user = auth()->userOrFail();
        $indicateurs = Indicateurs::find($id);
        $indicateurs->region_id = $request->input('region_id');
        $indicateurs->province_id = $request->input('province_id');
        $indicateurs->commune_id = $request->input('commune_id');
        $indicateurs->groupe = $request->input('groupe');
        $indicateurs->indicateur = $request->input('indicateur');
        $indicateurs->niveau1 = $request->input('niveau1');
        $indicateurs->niveau2 = $request->input('niveau2');
        $indicateurs->mois = $request->input('mois');
        $indicateurs->annee = $request->input('annee');
        $indicateurs->indice = $request->input('indice');
        $indicateurs->source = $request->input('source');
        $indicateurs->updated = 1;
        $indicateurs->updated_by = $user->id;
        $indicateurs->save();
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
        $indicateurs = Indicateurs::find($id);
        if($indicateurs){
            $indicateurs->delete();
        }
        return response()->json( ['status' => 'success'] );
    }

    /**
     * Recupérer la liste des communes
     */
    public function getcommunesliste()
    {
        $communes = DB::table('communes')->select('communes.commune as label', 'communes.id as value')->get();
        return response()->json( $communes );
    }
    public function getDefaultCommune(){
        return $commune = Communes::where("defaut",true)->firstOrFail();
    }
    
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function findBy(Request $request)
    {
        $validatedData = $request->validate([
            'commune_id' => 'required',
            // 'annee' => 'required',
        ]);
        $indicateurs = DB::table('indicateurs')
        ->leftJoin('provinces', function($join){
            $join->on('indicateurs.province_id', '=', 'provinces.id');
        })
        ->leftJoin('communes', function($join){
            $join->on('indicateurs.commune_id', '=', 'communes.id');
        })
        ->leftJoin('regions', function($join){
            $join->on('indicateurs.region_id', '=', 'regions.id');
        })
        ->select('indicateurs.*', 
        'regions.region as region', 
        'provinces.province as province',
        'communes.commune as commune');
        
        if(isset($request->commune_id)&&$request->commune_id!=null&&$request->commune_id!=0){
            $indicateurs->where('indicateurs.commune_id', '=', $request['commune_id']);
        }
        if(isset($request->province_id)&&$request->province_id!=null&&$request->province_id!=0){
            $indicateurs->where('indicateurs.province_id', '=', $request['province_id']);
        }
        if(isset($request->region_id)&&$request->region_id!=null&&$request->region_id!=0){
            $indicateurs->where('indicateurs.region_id', '=', $request['region_id']);
        }
        if(isset($request->annee)&&$request->annee!=null&&$request->annee!=0){
            $indicateurs->where('indicateurs.annee', '=', $request['annee']);
        }
        if(isset($request->indicateur)){
            $indicateurs->where('indicateurs.indicateur', 'like', '%' . $request['indicateur'] . '%');
        }
        if(isset($request->groupe)){
            $indicateurs->where('indicateurs.groupe', 'like', '%' . $request['groupe'] . '%');
        }
        if(isset($request->id)&&$request->id!=null&&$request->id!=0){
            $indicateurs->where('indicateurs.id', '=', $request['id']);
        }
        $indicateurs = $indicateurs->get();
        return response()->json( $indicateurs);
    }

    
    public function search()
    {
        $regions = DB::table('regions')->select('regions.region as label', 'regions.id as value')->get();
        $provinces = DB::table('provinces')->select('provinces.province as label', 'provinces.id as value')->get();
        $communes = DB::table('communes')->select('communes.commune as label', 'communes.id as value')->get();
        $districts = DB::table('districts')->select('districts.nom_district as label', 'districts.id as value')->get();
        $formationSanitaires = DB::table('formation_sanitaires')->select('formation_sanitaires.nom_structure as label', 'formation_sanitaires.id as value')->get();
        
        $groupes = DB::table('indicateurs')->select('groupe as label','groupe as value')->distinct()->get();
        $annees = DB::table('indicateurs')->select('annee as label','annee as value')->distinct()->get();
        $indicateurliste = DB::table('indicateurs')->select('indicateur as label','indicateur as value')->distinct()->get();

        return response()->json( ['communes'=>$communes,'regions'=>$regions,'provinces'=>$provinces,'districts'=>$districts,'formationSanitaires'=>$formationSanitaires
        ,'groupes'=>$groupes,'annees'=>$annees,'indicateurliste'=>$indicateurliste] );
    }
    public function searchGroupe(Request $request)
    {
       $indicateurliste = DB::table('indicateurs')->where('groupe',"like",$request->groupe)->select('indicateur as label','indicateur as value')->distinct()->get();

        return response()->json( ['indicateurliste'=>$indicateurliste] );
    }


}
