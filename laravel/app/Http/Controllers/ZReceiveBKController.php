<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Accouchements;

class ZReceiveBKController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
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
            'nom_table' => 'required'
        ]);
        
        foreach($request->input('items')  as $item ){
            DB::table($request->input('nom_table'))->where('id','=',$item['id'])->update($item);
        }
        return response()->json( ['status' => 'success'] );
    }
}
