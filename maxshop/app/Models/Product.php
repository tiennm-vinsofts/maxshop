<?php

namespace App\Models;

use Eloquent as Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class Product
 * @package App\Models
 * @version August 31, 2018, 2:01 am UTC
 *
 * @property string name
 * @property integer category_id
 * @property float priceold
 * @property float pricenew
 * @property integer ranks
 * @property integer status
 * @property string img
 * @property string des
 * @property string des2
 */
class Product extends Model
{
    use SoftDeletes;

    public $table = 'products';


    protected $dates = ['deleted_at'];


    public $fillable = [
        'name',
        'category_id',
        'priceold',
        'pricenew',
        'ranks',
        'status',
        'img',
        'des',
        'des2'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'name' => 'string',
        'category_id' => 'integer',
        'priceold' => 'float',
        'pricenew' => 'float',
        'ranks' => 'integer',
        'status' => 'integer',
        'img' => 'string',
        'des' => 'string',
        'des2' => 'string'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        'name' => 'required'
    ];

    public function categorie()
    {

        return $this->belongsTo(Category::class, 'category_id');
    }

}
