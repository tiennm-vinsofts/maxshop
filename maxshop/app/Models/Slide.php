<?php

namespace App\Models;

use Eloquent as Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class Slide
 * @package App\Models
 * @version September 4, 2018, 9:24 am UTC
 *
 * @property string img
 * @property longText des
 * @property string title
 * @property string title2
 * @property string linkto
 */
class Slide extends Model
{
    use SoftDeletes;

    public $table = 'slides';
    

    protected $dates = ['deleted_at'];


    public $fillable = [
        'img',
        'des',
        'title',
        'title2'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'img' => 'string',
        'title' => 'string',
        'title2' => 'string'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        
    ];

    
}
