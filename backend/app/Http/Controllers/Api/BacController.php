<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Bac;
use Illuminate\Http\Request;

class BacController extends Controller
{
    public function index() {
        return response()->json(Bac::all());
    }

    public function store(Request $request) {
        $data = $request-> input();
        Bac::create($data);
        return response()->json('success');
    }

    public function update(Request $request, int $id) {
        $data = $request->input();
        $bac = Bac::where('idBac',$id);
        if (!$bac) {
            return response()->json(['error'=>'bac not found'],404);
        }
        $bac -> update($data);
        return response()->json('success');
    }

    public function destroy(int $id) {
        $bac = Bac::where('idBac',$id);
        if (!$bac) {
            return response()->json(['error'=>'ville not found'],404);
        }
        $bac -> delete();
        return response()->json('success');
    }
}
