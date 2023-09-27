<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\WebSite;
use Illuminate\Http\Request;

class WebSiteController extends Controller
{
    //

    public function getInfo() {
        $websiteInfo =  WebSite::first();
        return  response()->json($websiteInfo);

    }

    public function addInfo(Request $request) {

        $data =  $request -> input();
        if ($request -> hasFile('logo')) {
            $file = $request -> file('logo');
            $nameLogo = time().'_LOGOWEBSITE_'. $file->getClientOriginalName();
            $file -> move(public_path('uploads/logos'),$nameLogo);
            $data['logo'] = $nameLogo;
        }

        $data['logo'] = (empty($data['logo']) ? '' : $data['logo'] );

        WebSite::create($data);
        return response()->json([
            'resultat' =>  'success'
        ]);

    }

    public function updateInfo(Request $request) {
        //
        $data = $request->input();

        $website = WebSite::first();
        $data['logo'] = $request -> logo ;
        $website ->update($data);

        return response()->json([
            'resultat' => 'bien_update'
        ]);


    }
}
