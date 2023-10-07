<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Ville;
use Illuminate\Http\Request;

class VilleController extends Controller
{
    
    public function index() {
        $villes = Ville::with('region')->get();
        return response()->json($villes);
    }

    public function store(Request $request) {
        $data = $request -> validate([
            'name'=>['required','string','min:3'],
            'idRegion' => ['required','numeric','exists:regions,id']
        ]);
        Ville::create($data);
        return response()->json('success');
    }

    public function update(Request $request,int $id) {
        $data = $request->input();
        $ville = Ville::find($id);
        if (!$ville) {
            return response()->json(['error'=>'ville not found'],404);
        }
        $ville -> update($data);
        return response()->json('success');
    }

    public function destroy(int $id) {
        $ville = Ville::find($id);
        if (!$ville) {
            return response()->json(['error'=>'ville not found']);
        }
        $ville -> delete();
        return response()->json('success');
    }
}
