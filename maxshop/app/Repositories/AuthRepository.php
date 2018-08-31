<?php

namespace App\Repositories;

use App\User;
use InfyOm\Generator\Common\BaseRepository;
use JWTAuth;
use JWTFactory;
use Response;

/**
 * Class AuthRepository
 * @package App\Repositories
 * @version August 30, 2018, 4:42 am UTC
 *
 * @method User findWithoutFail($id, $columns = ['*'])
 * @method User find($id, $columns = ['*'])
 * @method User first($columns = ['*'])
 */
class AuthRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [

    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return User::class;
    }

    public function getinfo($thisapi)
    {
        $user = JWTAuth::toUser(JWTAuth::getToken());
        return $thisapi->sendResponse(['info' => $user], 'Lấy thông tin user thành công');
    }

    public function checklogin($credentials, $thisapi)
    {
        try {
            if (!$token = JWTAuth::attempt($credentials)) {
                return array('msg' => 'invalid_credentials', 'code' => 401);
            } else {
                $customClaims = array();
                JWTAuth::setToken($token);
                $user = JWTAuth::authenticate(JWTAuth::getToken());
                if (!empty($user)) {
                    foreach ($user->toArray() as $k => $v) {
                        $customClaims[$k] = $v;
                    }
                    $payload = JWTFactory::make($customClaims);
                    $token = JWTAuth::encode($payload)->get();
                    return array('token' => $token);
                } else {
                    return array('msg' => 'invalid_credentials', 'code' => 401);
                }
            }
        } catch (JWTException $e) {
            return array('msg' => 'could_not_create_token', 'code' => 500);
        }
    }

}
