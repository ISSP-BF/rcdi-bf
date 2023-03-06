<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Professions;

class ProfessionsController extends Controller
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
        $profession = DB::table('professions')
        ->join('users', 'users.id', '=', 'professions.users_id')
        ->select('professions.*')
        ->get();
        return response()->json( $profession );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $statuses = DB::table('status')->select('status.name as label', 'status.id as value')->get();
        return response()->json( $statuses );
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
            'metier'             => 'required|min:1|max:191',
        ]);
        $user = auth()->userOrFail();
        $profession = new Professions();
        $profession->metier     = $request->input('metier');
        $profession->users_id = $user->id;
        $profession->save();
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
        $profession = DB::table('professions')
        ->join('users', 'users.id', '=', 'professions.users_id')
        ->select('professions.*')
        ->where('professions.id', '=', $id)
        ->first();
        return response()->json( $profession );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $profession = DB::table('professions')->where('id', '=', $id)->first();
        return response()->json( ['profession' => $profession ] );
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
        //var_dump('bazinga');
        //die();
        $validatedData = $request->validate([
            'metier'             => 'required|min:1|max:191',
        ]);
        $profession = Professions::find($id);
        $profession->metier     = $request->input('metier');
        
        $profession->updated = 1;
        $profession->save();
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
        $profession = Professions::find($id);
        if($profession){
            $profession->delete();
        }
        return response()->json( ['status' => 'success'] );
    }
}
