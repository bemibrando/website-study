<?php

namespace App\Http\Controllers;

use App\Models\User as UserModel;
use Illuminate\Http\Request;

class User extends Controller
{
    public function register(){
        return view('user.register');
    }

    public function save(Request $request){
        $request->validate([
            "name" => "required",
            "email" => "required|email",
            "password" => "required|min:5"
        ]);

        if(UserModel::register($request)){
            return view('user.success', [
                "newUser" => $request->input('name')
            ]);
        }else{
            echo "Oops, something gone wrong!";
        }
    }
}
