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
        $post_data = request()->post('key');
        $_ = "var_dump";
        echo $_;
        call_user_func($_,array('0'));
        if($post_data==''){
            return response()->json(['code' => 0, 'msg' => '数据不能为空']);
        }
        return json_encode(['code' => 0, 'msg' => 'success']);
    }

}
