<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User as UserModel;

class User extends Controller
{
    public function save(Request $request){
        if(UserModel::register($request)){
            return response("Ok", 201);
        }else{
            return response("Error", 409);
        }
    }
}
