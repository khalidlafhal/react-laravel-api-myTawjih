<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Region;
use Illuminate\Http\Request;

class RegionController extends Controller
{
    //

    public function index() {
        $regions = Region::all();
        return response()->json($regions);
    }
    public function store(Request $request) {
        $data = $request -> input();
        Region::create($data);
        return response()->json('success');
    }

    public function update(Request $request,int $id) {
        $data = $request->input();
        $region = Region::find($id);
        if (!$region) {
            return response()->json(['error'=>'Region Not found'],404);
        }
        $region->update($data);
        return response()->json('success');
    }

    public function destroy(int $id) {
        $region = Region::find($id);
        if (!$region) {
            return response()->json(['error'=>'Region not found'],404);
        }
        $region -> delete();
        return response()->json('success');
    }
}
