<?php

namespace App\Http\Controllers;

use InfyOm\Generator\Utils\ResponseUtil;
use Response;

/**
 * @SWG\Swagger(
 *   basePath="/api/v1",
 *   @SWG\Info(
 *     title="Laravel Generator APIs",
 *     version="1.0.0",
 *   )
 * )
 * This class should be parent class for other API controllers
 * Class AppBaseController
 */
class AppBaseController extends Controller
{
    public function sendResponse($result, $message)
    {
        return Response::json(ResponseUtil::makeResponse($message, $result));
    }

    public function sendError($error, $code = 404)
    {
        return Response::json(ResponseUtil::makeError($error), $code);
    }
    public function uploadImage($name)
    {
        error_log($name);
        if (request()->hasFile($name)) {
            $file = request()->file($name);
            $timestamp = time();
            $target = rand(0,9999)."_{$timestamp}.{$file->guessClientExtension()}";
            $file->move(public_path('uploads'), $target);
            error_log(url("uploads/{$target}"));
            return url("uploads/{$target}");
        }
    }
}
