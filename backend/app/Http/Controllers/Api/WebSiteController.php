<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\WebSite;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

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

        $website = WebSite::create($data);
        return response()->json([
            'resultat' =>  'success',
            'info' => $website
        ]);

    }

    public function updateInfo(Request $request) {
        //
        $data =  $request -> input();
        $website = WebSite::first();
        if ($request -> hasFile('logo')) {
            $filePath = public_path('uploads/logos/'.$website->logo);
            if (File::exists($filePath)) {
                File::delete($filePath);
            }

            $file = $request -> file('logo');
            $nameLogo = time().'_LOGOWEBSITE_'. $file->getClientOriginalName();
            $file -> move(public_path('uploads/logos'),$nameLogo);
            $data['logo'] = $nameLogo;
        }

        $data['logo'] = (empty($data['logo']) ? $website -> logo : $data['logo'] );

        $website->update($data);

        return response()->json($this->getInfo());

    }
}
