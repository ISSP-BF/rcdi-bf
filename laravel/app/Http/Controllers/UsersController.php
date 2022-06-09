<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Models\User;

class UsersController extends Controller
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
        $you = auth()->user()->id;
        $users = DB::table('users')
        ->select('users.id', 'users.name', 'users.email','users.fonction','users.created_at','users.firstname','users.lieu','users.tel', 'users.menuroles as roles', 'users.status', 'users.email_verified_at as registered')
        ->whereNull('deleted_at')
        ->get();
        return response()->json( compact('users', 'you') );
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = DB::table('users')
        ->select('users.id', 'users.name', 'users.email','users.fonction','users.firstname','users.lieu','users.tel', 'users.menuroles as roles', 'users.status', 'users.email_verified_at as registered','users.created_at')
        ->where('users.id', '=', $id)
        ->first();
        return response()->json( $user );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $user = DB::table('users')
        ->select('users.id', 'users.name', 'users.email','users.fonction','users.firstname','users.lieu','users.tel', 'users.menuroles as roles', 'users.status')
        ->where('users.id', '=', $id)
        ->first();
        return response()->json( $user );
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
            'name'       => 'required|min:1|max:256',
            'email'      => 'required|email|max:256'
        ]);
        $user = User::find($id);
        $user->name = $request->name;
        $user->firstname = $request->firstname;
        $user->fonction = $request->fonction;
        $user->tel = $request->tel;
        $user->menuroles = $request->roles;
        $user->email = $request->email;
        $user->status = $request->status;
        // ,'users.fonction','users.firstname','users.lieu','users.tel'
        $user->save();
        auth()->logout();
        //$request->session()->flash('message', 'Successfully updated user');
        return response()->json( ['status' => 'success'] );
    }
    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function store(Request $request)
    {
        // $request->validate([
        //     'name' => 'required|string|max:255',
        //     'email' => 'required|string|email|max:255|unique:users',
        //     'password' => 'required|min:8|confirmed',
        // ]);
        
        $validate = Validator::make($request->all(), [
        'name' => ['required', 'string', 'max:255'],
        'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
        'password' => ['required', 'string', 'min:4', 'confirmed'],
        ]);
              
        if ($validate->fails()){
            return response()->json([
                'status' => 'error',
                'errors' => $validate->errors()
            ], 422);
        }
        $user = new User;
        $user->name = $request->name;
        $user->firstname = $request->firstname;
        $user->fonction = $request->fonction;
        $user->tel = $request->tel;
        $user->menuroles = $request->menuroles;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->status = 'Active';
        $user->save();       
        return response()->json(['status' => 'success'], 200);
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::find($id);
        if($user){
            $user->delete();
        }
        return response()->json( ['status' => 'success'] );
    }

    

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function profil()
    {
        $user = auth()->user();
        return response()->json($user);
        // echo "DAP";
    }

    
    protected function updateProfil(Request $request)
    {
        
        $validate = Validator::make($request->all(), [
        'name' => ['required', 'string', 'max:255'],
        'password' => ['required', 'string', 'min:4', 'confirmed'],
        'oldpassword' => ['required', 'string', 'min:4'],
        ]);
              
        if ($validate->fails()){
            return response()->json([
                'status' => 'error',
                'errors' => $validate->errors()
            ], 422);
        }
        $user = auth()->user();
        
        if($request->changermotpasse)
        {
            $user->password = bcrypt($request->password);
        }
        
        $user->name = $request->name;
        $user->firstname = $request->firstname;
        $user->fonction = $request->fonction;
        $user->tel = $request->tel;
        
        $user->save();       
        return response()->json(['status' => 'success'], 200);
    }

}
