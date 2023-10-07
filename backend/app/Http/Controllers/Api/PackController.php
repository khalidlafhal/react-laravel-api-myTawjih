<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Bac;
use App\Models\Pack;
use Illuminate\Http\Request;

class PackController extends Controller
{
    //
   
    
    public function index() {
        return response()->json(Pack::all());
    }

    public function store(Request $request) {
        $data = $request->input();
        $bacsText = '';
        foreach($data['bacs'] as $bac) {
            $bacsText .= $bac.'.';
        }
        $data['bacs'] = rtrim($bacsText, '.');
        Pack::create($data);
        return response()->json('success');
    }

    public function update(Request $request ,int $id) {
        $data = $request->input();
        $pack = Pack::where('idPack',$id);
        if (!$pack) {
            return response()->json(['error'=>'pack  not found'],404);
        }
        $bacsText = '';
        foreach($data['bacs'] as $bac) {
            $bacsText .= $bac.'.';
        }
        $data['bacs'] = rtrim($bacsText, '.');
        $pack -> update($data);
        return response()->json('success');
    }

    public function destroy(int $id) {
        $pack = Pack::where('idPack',$id);
        if (!$pack) {
            return response()->json(['error'=>'pack not found'],404);
        }
        $pack -> delete();
        return response()->json('success');
    }

    public function getAllBacs() {
        $bacs = Bac::all() ;
        $output = '';
        if ($bacs->count() > 0) {
            foreach($bacs as $bac) {
                $output .= '
                        <div key="'.$bac->idBac.'" class="flex gap-2 items-center">
                            <input type="checkbox" id="checkbox_'.$bac->idBac.'" value="'.$bac->idBac.'" class="h-4 w-4"/>
                            <p class="text-[14px] text-meta-5 lg:text-[16px]">'.$bac->sector.'</p>
                        </div> 
                    ';
            }
        } else {
            $output .= '<p class="text-center py-3 text-meta-1">Il n\'y a pas de filières actuellement, veuillez ajouter du filières</p>';
        }
        return response()->json($output);
    }

    public function getcheckedBacs(int $idPack) {
        $pack = Pack::where('idPack',$idPack)->first();
        $bacsExplode = explode('.',$pack->bacs);
        $output = '';
        $bacs = Bac::all();
        foreach($bacs as $bac) {
            $isChecked = in_array($bac->idBac,$bacsExplode);
            $output .= '
                <div key="'.$bac->idBac.'" class="flex gap-2 items-center">
                    <input type="checkbox"  id="checkbox_'.$bac->idBac.'" value="'.$bac->idBac.'" '.($isChecked ? 'checked':'').' class="h-4 w-4"/>
                    <p class="text-[14px] text-meta-5 lg:text-[16px]">'.$bac->sector.'</p>
                </div> 
            ';
        }
        return response()->json(
            ['output'=>$output,'bacs'=>$bacsExplode]);
    }
}
