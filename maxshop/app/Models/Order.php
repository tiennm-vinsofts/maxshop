<?php

namespace App\Models;

use Eloquent as Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class Order
 * @package App\Models
 * @version August 31, 2018, 2:52 am UTC
 *
 * @property integer user_id
 * @property integer status
 * @property integer countrie_id
 * @property string address
 * @property string first_name
 * @property string last_name
 * @property string office_home_others
 * @property string address1
 * @property string address2
 * @property string city
 * @property string email
 * @property string phone
 * @property string state
 * @property string zipcode
 * @property integer totalmoney
 */
class Order extends Model
{
    use SoftDeletes;

    public $table = 'orders';
    

    protected $dates = ['deleted_at'];


    public $fillable = [
        'user_id',
        'status',
        'countrie_id',
        'address',
        'first_name',
        'last_name',
        'office_home_others',
        'address1',
        'address2',
        'city',
        'email',
        'phone',
        'state',
        'zipcode',
        'totalmoney'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'user_id' => 'integer',
        'status' => 'integer',
        'countrie_id' => 'integer',
        'address' => 'string',
        'first_name' => 'string',
        'last_name' => 'string',
        'office_home_others' => 'string',
        'address1' => 'string',
        'address2' => 'string',
        'city' => 'string',
        'email' => 'string',
        'phone' => 'string',
        'state' => 'string',
        'zipcode' => 'string',
        'totalmoney' => 'integer'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        'email' => 'email',
        'totalmoney' => 'requird'
    ];

    
}
