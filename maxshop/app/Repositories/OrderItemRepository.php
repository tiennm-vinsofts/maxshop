<?php

namespace App\Repositories;

use App\Models\OrderItem;
use InfyOm\Generator\Common\BaseRepository;

/**
 * Class OrderItemRepository
 * @package App\Repositories
 * @version August 31, 2018, 2:56 am UTC
 *
 * @method OrderItem findWithoutFail($id, $columns = ['*'])
 * @method OrderItem find($id, $columns = ['*'])
 * @method OrderItem first($columns = ['*'])
*/
class OrderItemRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'order_id',
        'product_id',
        'money',
        'quantity'
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return OrderItem::class;
    }
}
