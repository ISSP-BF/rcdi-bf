<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\DashboardItem;

class DashboardItemsController extends Controller
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
        $dashboardItems = DashboardItem::all();
        return response()->json( $dashboardItems );
    }

    /**
     * Find by dashboard ID
     *
     * @return \Illuminate\Http\Response
     */
    public function findBy($dashboard_id)
    {
        $dashboardItems = DashboardItem::where("dashboard_id","=",$dashboard_id)->orderBy('i','DESC')->get();
        return response()->json( $dashboardItems );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        // return response()->json( $statuses );
    }

    /**
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'requete'             => 'required|min:10'
        ]);
        DashboardItem::create(MyFunction::audit($request->all()));
        return response()->json([
            'message' => 'Un nouveau dashboardItem a été ajouté',
            'status' => 200
        ], 200);
    }

    /**
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(DashboardItem $dashboardItem)
    {
        return $dashboardItem;
    } 

    
    /**
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(DashboardItem $dashboardItem)
    {
        return response()->json( $dashboardItem );
    }

    
    /**
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, DashboardItem $dashboardItem)
    {
        $validatedData = $request->validate([
            'requete'             => 'required|min:10',
        ]);

        $dashboardItem->update(MyFunction::audit($request->all()));
        
        return response()->json([
            'message' => 'La requête a été modifiée avec succès',
            'status' => 200
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(DashboardItem $dashboardItem)
    {
        $dashboardItem->delete();
        return response()->json([
            'message' => 'Le dashboardItem a été supprimé avec succès',
            'status' => 200
        ], 200);
    }
}
