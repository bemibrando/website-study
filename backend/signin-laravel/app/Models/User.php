<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;

class User extends Model
{
    use HasFactory;

    protected $connection = 'sqlite';
    protected $table = 'user';

    public static function list(int $limit){
        $sql = self::select([
            "id",
            "name",
            "email",
            "password",
            "date_register"
        ])
        ->limit($limit);

        return $sql->get();
    }

    public static function register(Request $request){
        return self::insert([
            "name" => $request->input('name'),
            "email" => $request->input('email'),
            "password" => Hash::make($request->input('password')),
            "date_register" => new Carbon()
        ]);
    }
}