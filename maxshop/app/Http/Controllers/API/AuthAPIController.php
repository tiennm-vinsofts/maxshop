<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\AppBaseController;
use App\Repositories\AuthRepository;
use Illuminate\Http\Request;
use JWTAuth;
use JWTFactory;
use Response;

class AuthAPIController extends AppBaseController
{
    private $authRepository;

    public function __construct(AuthRepository $authRepo)
    {
        $this->authRepository = $authRepo;
    }

    public function getinfo()
    {
        return $this->authRepository->getinfo($this);
    }

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');
        $check = $this->authRepository->checklogin($credentials, $this);
        if (!empty($check['token'])) {
            return $this->sendResponse(['token' => $check['token']], 'Đăng nhập thành công');
        } else {
            return $this->sendError($check['msg'], $check['code']);
        }
    }

    public function register(Request $request)
    {
        $credentials = $request->only('email', 'password', 'name');
        try {
            $user = $this->authRepository->create([
                'name' => $request->name,
                'email' => $request->email,
                'level' => 1,
                'password' => bcrypt($request->password)
            ]);
            $check = $this->authRepository->checklogin($credentials, $this);
            if (!empty($check['token'])) {
                return $this->sendResponse(['user' => $user, 'token' => $check['token']], 'Đăng ký thành công');
            } else {
                return $this->sendError($check['msg'], $check['code']);
            }
        } catch (\Exception $e) {
            return $this->sendError($e->getMessage(), 500);
        }
    }
}
