<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use App\Models\SousDonnee;
use App\Models\Donnee;
use App\Models\Groupe;
use App\Models\Commune;
use App\Models\SousGroupe;
use App\Models\Indicateur;
use App\Models\SousIndicateur;
use App\Models\Desagregation;


class DonneesController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['index', 'paginate', 'paginate', 'show', 'show', 'show',
        'update', 'destroy', 'findBy', 'findCarteDataBy', 'elementSearch']]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Donnee::all();
    }

    
    
    public function paginate(Request $request,$pageSize,$pageIndex,$column,$asc)
    {
        switch ($column) {
            case 'indicateur':
                $column = "indicateurs.libelle";
                // $column = "null";
                break;
            
            default:
                # code...
                break;
        }
        $donnees =  Donnee::
        leftJoin('indicateurs', function($join){
            $join->on('donnees.indicateur_id', '=', 'indicateurs.id');
        })->leftJoin('groupes', function($join){
            $join->on('indicateurs.groupe_id', '=', 'groupes.id');
        })->leftJoin('sous_indicateurs', function($join){
            $join->on('donnees.sous_indicateur_id', '=', 'sous_indicateurs.id');
        })->leftJoin('sous_groupes', function($join){
            $join->on('indicateurs.sous_groupe_id', '=', 'sous_groupes.id');
        })->select("donnees.*","groupes.libelle as groupe","sous_groupes.libelle as sous_groupe","indicateurs.libelle as indicateur");
        
        if(isset($request->tableFilterValue)){
            $donnees->where('groupes.libelle','like','%'.$request->tableFilterValue.'%');
            $donnees->orWhere('indicateurs.libelle','like','%'.$request->tableFilterValue.'%');
            $donnees->orWhere('sous_groupes.libelle','like','%'.$request->tableFilterValue.'%');
            $donnees->orWhere('donnees.valeur','like','%'.$request->tableFilterValue.'%');
            $donnees->orWhere('donnees.periode','like','%'.$request->tableFilterValue.'%');
            $donnees->orWhere('donnees.periode_value','like','%'.$request->tableFilterValue.'%');
        }
        return $donnees->orderBy($column!=null&&$column!='null'?$column:'id', $asc=="true"?'asc':'desc')
            ->paginate($pageSize,"*",null,$pageIndex);        
    }



    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $indicateurs = Indicateur::select('*','libelle as label', 'id as value')->get();
        $groupes = Groupe::select('libelle as label', 'id as value')->get();
        return response()->json(['indicateurs'=>$indicateurs,'groupes'=>$groupes]);
    }

    /**
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'indicateur_id'     => 'required',
            'valeur'            => 'required',
            'periode_value'     => 'required',
            'periode'           => 'required',
            'annee'             => 'required'
        ]);
        Donnee::create(MyFunction::audit($request->all()));
        return response()->json([
            'message' => 'Une nouvelle donnee a été ajoutée',
            'status' => 200
        ], 200);
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

        $items = [];
        foreach($request->input('items')  as $item ){
            // Donnee::create(MyFunction::audit($item));
            $items[] = MyFunction::audit($item);
        }
        Donnee::insert($items);
        // return $items;
        return response()->json( ['status' => 'success'] );
    }

    /**
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Donnee $donnee)
    {
        return $donnee;
    } 

    
    /**
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Donnee $donnee)
    {
        $indicateurs = Indicateur::select('*','libelle as label', 'id as value')->get();
        $sousIndicateurs = SousIndicateur::select('*','libelle as label', 'id as value')->get();
        $groupes = Groupe::select('libelle as label', 'id as value')->get();
        return response()->json(['donnee'=>$donnee,'indicateurs'=>$indicateurs,'sousIndicateurs'=>$sousIndicateurs,'groupes'=>$groupes]);
    }

    
    /**
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Donnee $donnee)
    {
        $validatedData = $request->validate([
            'indicateur_id'     => 'required',
            'valeur'            => 'required',
            'periode_value'     => 'required',
            'periode'           => 'required',
            'annee'             => 'required'
        ]);

        $donnee->update(MyFunction::audit($request->all()));
        
        return response()->json([
            'message' => 'La donnee a été modifiée avec succès',
            'status' => 200
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Donnee $donnee)
    {
        $donnee->delete();
        return response()->json([
            'message' => 'La donnee a été supprimée avec succès',
            'status' => 200
        ], 200);
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
            // 'indicateur' => 'required',
            // 'groupe' => 'required',
            'periode' => 'required',
            'indicateur_id'     => 'required',
            'annee' => 'required',
        ]);
        $donnees = DB::table('donnees')->
        leftJoin('indicateurs', function($join){
            $join->on('donnees.indicateur_id', '=', 'indicateurs.id');
        })->leftJoin('groupes', function($join){
            $join->on('indicateurs.groupe_id', '=', 'groupes.id');
        })->leftJoin('sous_indicateurs', function($join){
            $join->on('donnees.sous_indicateur_id', '=', 'sous_indicateurs.id');
        })->leftJoin('sous_groupes', function($join){
            $join->on('indicateurs.sous_groupe_id', '=', 'sous_groupes.id');
        })->select("donnees.*","groupes.libelle as groupe","sous_groupes.libelle as sous_groupe","indicateurs.libelle as indicateur");

         
        if(isset($request->indicateur_id)&&$request->indicateur_id!=null&&$request->indicateur_id!=0){
            $donnees->where('donnees.indicateur_id', '=', $request['indicateur_id']);
        }
        $donnees->where('donnees.localisation_id','=',$request['localisation_id']);
        if(isset($request->periode_value)&&$request->periode_value!=null&&$request->periode_value!=0){
                $donnees->whereIn('donnees.periode_value', $request['periode_value']);
        }
        if(isset($request->periode)&&$request->periode!=null){
            $donnees->where('donnees.periode', 'like', $request['periode']);
        }
        
        if(isset($request->groupe_id)){
            $donnees->where('groupes.id', '=', $request->groupe_id);
        }
        if(isset($request->id)&&$request->id!=null&&$request->id!=0){
            $donnees->where('donnees.id', '=', $request['id']);
        }
        if(isset($request->annee)&&$request->annee!=null&&$request->annee!=0){
                $donnees->whereIn('donnees.annee', $request['annee'])->orderBy("annee","ASC");
        }
        $donnees = $donnees->orderBy("annee","ASC")->get();
        return response()->json( $donnees);
    }
    
    
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function findCarteDataBy(Request $request)
    {
        
        $validatedData = $request->validate([
            'indicateur_id' => 'required',
            'periode' => 'required',
            // 'periode_value' => 'required',
            'annee' => 'required',
        ]);
        $donnees = Donnee::
        leftJoin('indicateurs', function($join){
            $join->on('donnees.indicateur_id', '=', 'indicateurs.id');
        })->leftJoin('groupes', function($join){
            $join->on('indicateurs.groupe_id', '=', 'groupes.id');
        })->leftJoin('sous_indicateurs', function($join){
            $join->on('donnees.sous_indicateur_id', '=', 'sous_indicateurs.id');
        })->leftJoin('sous_groupes', function($join){
            $join->on('indicateurs.sous_groupe_id', '=', 'sous_groupes.id');
        })->select("donnees.*","groupes.libelle as groupe","sous_groupes.libelle as sous_groupe","indicateurs.libelle as indicateur");

         
        if(isset($request->indicateur_id)&&$request->indicateur_id!=null&&$request->indicateur_id!=0){
            $donnees->where('donnees.indicateur_id', '=', $request['indicateur_id']);
        }

        if(isset($request->localisation_id)&&$request->localisation_id!=null&&$request->localisation_id!=0){
            $donnees->where('donnees.localisation_id','=',$request['localisation_id']);
        }
        else {
            $donnees->where('donnees.localisation_id','<>',null);
        }
        
        if(isset($request->periode_value)&&$request->periode_value!=null&&$request->periode_value!=0){
                $donnees->where('donnees.periode_value','=', $request['periode_value']);
        }
        if(isset($request->periode)&&$request->periode!=null){
            $donnees->where('donnees.periode', 'like', $request['periode']);
        }
        
        if(isset($request->groupe_id)){
            $donnees->where('groupes.id', '=', $request->groupe_id);
        }
        if(isset($request->id)&&$request->id!=null&&$request->id!=0){
            $donnees->where('donnees.id', '=', $request['id']);
        }
        if(isset($request->annee)&&$request->annee!=null&&$request->annee!=0){
                $donnees->where('donnees.annee','=', $request['annee'])->orderBy("annee","ASC");
        }
        return $donnees = $donnees->orderBy("annee","ASC")->get();
    }
    

    

    
    
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function findByGetSql(Request $request)
    {
        $validatedData = $request->validate([
            // 'indicateur' => 'required',
            // 'groupe' => 'required',
            'annee' => 'required',
        ]);
        $donnees = DB::table('donnees')->
        leftJoin('indicateurs', function($join){
            $join->on('donnees.indicateur_id', '=', 'indicateurs.id');
        })->leftJoin('groupes', function($join){
            $join->on('indicateurs.groupe_id', '=', 'groupes.id');
        })->leftJoin('sous_indicateurs', function($join){
            $join->on('donnees.sous_indicateur_id', '=', 'sous_indicateurs.id');
        })->leftJoin('sous_groupes', function($join){
            $join->on('indicateurs.sous_groupe_id', '=', 'sous_groupes.id');
        })->select("donnees.*","groupes.libelle as groupe","sous_groupes.libelle as sous_groupe","indicateurs.libelle as indicateur");

         
        if(isset($request->indicateur_id)&&$request->indicateur_id!=null&&$request->indicateur_id!=0){
            $donnees->where('donnees.indicateur_id', '=', $request['indicateur_id']);
        }
        if(isset($request->periode_value)&&$request->periode_value!=null&&$request->periode_value!=0){
                $donnees->whereIn('donnees.periode_value', $request['periode_value']);
        }
        if(isset($request->periode)&&$request->periode!=null){
            $donnees->where('donnees.periode', 'like', $request['periode']);
        }
        
        if(isset($request->groupe_id)){
            $donnees->where('groupes.id', '=', $request->groupe_id);
        }
        if(isset($request->id)&&$request->id!=null&&$request->id!=0){
            $donnees->where('donnees.id', '=', $request['id']);
        }
        if(isset($request->annee)&&$request->annee!=null&&$request->annee!=0){
                $donnees->whereIn('donnees.annee', $request['annee'])->orderBy("annee","ASC");
        }
        $donnees = $donnees->orderBy("annee","ASC");
        
        $sql =  Str::replaceArray('?', $donnees->getBindings(), $donnees->toSql());

        return response()->json( $donnees->getBindings());
    }
    

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function elementSearch()
    {
        
        $groupes = Groupe::select('libelle as label', 'id as value')->get();
        $commune = Commune::where("defaut",true)->firstOrFail();
        $sous_groupes = SousGroupe::select('libelle as label', 'id as value')->get();
        $indicateurs = Indicateur::select('*','libelle as label', 'id as value')->get();
        $sousIndicateurs = SousIndicateur::select('*','libelle as label', 'id as value')->get();
        $annees = DB::table('donnees')->select('annee as label','annee as value')->distinct()->orderBy('annee')->get();
        $annees2 = DB::table('donnees')->select('annee as value','annee as text')->distinct()->orderBy('annee')->get();
        return response()->json(['indicateurs'=>$indicateurs,'sousIndicateurs'=>$sousIndicateurs,'groupes'=>$groupes,'sous_groupes'=>$sous_groupes,'annees'=>$annees,'annees2'=>$annees2,'commune'=>$commune]);        
    }

}
