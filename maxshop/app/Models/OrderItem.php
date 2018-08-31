<?php

namespace App\Models;

use Eloquent as Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class OrderItem
 * @package App\Models
 * @version August 31, 2018, 2:56 am UTC
 *
 * @property integer order_id
 * @property integer product_id
 * @property float money
 * @property integer quantity
 */
class OrderItem extends Model
{
    use SoftDeletes;

    public $table = 'order_items';
    

    protected $dates = ['deleted_at'];


    public $fillable = [
        'order_id',
        'product_id',
        'money',
        'quantity'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'order_id' => 'integer',
        'product_id' => 'integer',
        'money' => 'float',
        'quantity' => 'integer'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        'money' => 'required',
        'quantity' => 'required'
    ];

    
}
