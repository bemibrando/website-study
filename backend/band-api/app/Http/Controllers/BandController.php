<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BandController extends Controller
{
    public function store (Request $request)
    {
        $validate = $request->validate([
            'name' => 'required|min:3',
            'genre' => 'required'
        ]);

        return response()->json($request->all());
    }

    public function getAll() 
    {
        $bands = $this->getBands();

        return response()->json($bands);
    }

    public function getById($id)
    {
        $band = null;

        foreach($this->getBands() as $_band)
        {
            if ($_band['id'] == $id)
                $band = $_band;
        }
        return $band ? response()->json($band) : abort(404);
    }

    public function getByGenre($genre)
    {
        $bands = [];

        foreach($this->getBands() as $_band)
        {
            if ($_band['genre'] == $genre)
                $bands[] = $_band;
        }

        return $bands ? response()->json($bands) : abort(404);
    }

    protected function getBands()
    {
        return [
            [
                'id' =>  1,
                'name' => "GoGo Penguin",
                'genre' => 'Jazz'
            ],
            [
                'id' => 2,
                'name' => 'Canned Heat',
                'genre' => 'blues'
            ],
            [
                'id' => 3,
                'name' => 'Os Cariocas',
                'genre' => 'Bossa Nova'
            ],
            [
                'id' => 4,
                'name' => 'The Corrs',
                'genre' => 'Celtic'
            ],
            [
                'id' => 5,
                'name' => 'Home Free',
                'genre' => 'Country'
            ],
            [
                'id' => 6,
                'name' => 'Lucid Druid',
                'genre' => 'Celtic'
            ],
        ];
    }
}
