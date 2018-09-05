<?php
/**
 * Created by PhpStorm.
 * User: tung
 * Date: 04/09/2018
 * Time: 11:38
 */

namespace App\Helpers;


use Auth;

class Helper
{
    public function uploadImage($name)
    {
        error_log($name);
        if (request()->hasFile($name)) {
            $file = request()->file($name);
            $timestamp = time();
            $target = rand(0,9999)."_{$timestamp}.{$file->guessClientExtension()}";
            $user_id = Auth::user()->getAuthIdentifier();
            $file->move(public_path("uploads/{$user_id}/"), $target);
            error_log(url("uploads/{$user_id}/{$target}"));
            return "uploads/{$user_id}/{$target}";
        }
    }
    public function uploadApiImage($name)
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