<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Accouchements;

class UpdateBDController extends Controller
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
        /**
         * Requête des mises à jour
         * 51.178.18.128:8000
         */
        $urlApiBk = "51.178.18.128:8000";
        /**
         * Table Accouchement
         */
        $tables = ['accouchements','acte_deces','acte_mariages','acte_naissances','communes','consultation_postnatales','consultation_prenatales','districts','formation_sanitaires','indicateur_carte_sanitaires','morbilite_paludismes','planification_familiales','post_primaires','pre_scolaires','primaires','professions','provinces','ptmes','regions','service_curatifs','systeme_information_sanitaires','vaccination_enfants'];
        // $data = $this->updateItemsOnTable('accouchements');
        foreach($tables  as $nom_table ){
            $data = $this->addItemsOnTable($nom_table);
        }
        foreach($tables  as $nom_table ){
            $data = $this->updateItemsOnTable($nom_table);
        }

        return response()->json( $data );
    }


    public function updateItemsOnTable($nom_table){

        $table_data = DB::table($nom_table)->where($nom_table.'.updated', '=', 1)->get();

        $data = array('nom_table' => $nom_table, 'items' => json_encode($table_data));
        // return $data;
        if($this->post($data)!==FALSE){
            DB::table($nom_table)->where('updated', '=', 1)->update(array('updated' => 0));
        }
    }

    public function addItemsOnTable($nom_table){
        $table_data = DB::table($nom_table)->where($nom_table.'.updated', '=', null)->get();
        $data = array('nom_table' => $nom_table, 'items' => json_encode($table_data));
        // return $data;
        if($this->post($data)!==FALSE){
            DB::table($nom_table)->where('updated', '=', null)->update(array('updated' => 0));
        }

    }

    public function deleteItemsOnTable(){}

    public function post($data){
        $url = 'http://51.178.18.128:8000/api/BkDataUpdated';

        // use key 'http' even if you send the request to https://...
        $options = array(
            'http' => array(
                'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
                'method'  => 'POST',
                'content' => http_build_query($data)
            )
        );
        $context  = stream_context_create($options);
        $result = file_get_contents($url, false, $context);
        if ($result === FALSE) { /* Handle error */ }
        return $result;
    }

    public function numberOfUpdated(){
        $tables = ['accouchements','acte_deces','acte_mariages','acte_naissances','communes','consultation_postnatales','consultation_prenatales','districts','formation_sanitaires','indicateur_carte_sanitaires','morbilite_paludismes','planification_familiales','post_primaires','pre_scolaires','primaires','professions','provinces','ptmes','regions','service_curatifs','systeme_information_sanitaires','vaccination_enfants'];
        $compteur = 0;
        foreach($tables  as $nom_table ){
            $compteur = $compteur + DB::table($nom_table)->where($nom_table.'.updated', '=', 1)->orWhere($nom_table.'.updated', '=', null)->get()->count();
        }
        return response()->json($compteur);
    }
}
