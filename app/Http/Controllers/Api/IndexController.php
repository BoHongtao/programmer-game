<?php
/**
 * Created by PhpStorm.
 * User: John
 * Date: 2020/1/3
 * Time: 16:46
 */
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

class IndexController extends Controller
{
    public function one()
    {
        $key = request()->post('key');
        $step = request()->post('step');
        switch ($step){
            case 1:
                if($key=='b4b147bc522828731f1a016bfa72c073')
                    return response()->json(['code' => 200]);
                return response()->json(['code' => 0]);
            case 2:
                if($key=='96a3be3cf272e017046d1b2674a52bd3')
                    return response()->json(['code' => 200]);
                return response()->json(['code' => 0]);
            case 3:
                if($key=='d3d9446802a44259755d38e6d163e820')
                    return response()->json(['code' => 200]);
                return response()->json(['code' => 0]);
            case 4:
                if($key=='6512bd43d9caa6e02c990b0a82652dca')
                    return response()->json(['code' => 200]);
                return response()->json(['code' => 0]);
            case 5:
                if($key=='ccc231b88f25cbff362eb367d8fecae')
                    return response()->json(['code' => 200]);
                return response()->json(['code' => 0]);
            default:
                return response()->json(['code' => 0]);
        }
    }
}
