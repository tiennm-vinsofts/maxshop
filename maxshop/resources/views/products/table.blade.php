<table class="table table-responsive" id="products-table">
    <thead>
        <tr>
            <th>Category Id</th>
            <th>Name</th>
        <th>Priceold</th>
        <th>Pricenew</th>
        <th>Ranks</th>
        <th>Status</th>
        <th>Img</th>
        <th>Des</th>
            <th>Des2</th>
            <th>Sales</th>
            <th>Time Sales</th>
            <th>Time Out Sales</th>
            <th colspan="3">Action</th>
        </tr>
    </thead>
    <tbody>
    @foreach($products as $products)
        <tr>
            <td>{!! $products->category_id !!}</td>
            <td>{!! $products->name !!}</td>
            <td>{!! $products->priceold !!}</td>
            <td>{!! $products->pricenew !!}</td>
            <td>{!! $products->ranks !!}</td>
            <td>{!! $products->status !!}</td>
            <td>{!! $products->img !!}</td>
            <td>{!! $products->des !!}</td>
            <td>{!! $products->des2 !!}</td>
            <td>{!! $products->sales !!}</td>
            <td>{!! $products->time_sales !!}</td>
            <td>{!! $products->time_out_sales !!}</td>
            <td>
                {!! Form::open(['route' => ['products.destroy', $products->id], 'method' => 'delete']) !!}
                <div class='btn-group'>
                    <a href="{!! route('products.show', [$products->id]) !!}" class='btn btn-default btn-xs'><i
                                class="glyphicon glyphicon-eye-open"></i></a>
                    <a href="{!! route('products.edit', [$products->id]) !!}" class='btn btn-default btn-xs'><i
                                class="glyphicon glyphicon-edit"></i></a>
                    {!! Form::button('<i class="glyphicon glyphicon-trash"></i>', ['type' => 'submit', 'class' => 'btn btn-danger btn-xs', 'onclick' => "return confirm('Are you sure?')"]) !!}
                </div>
                {!! Form::close() !!}
            </td>
        </tr>
    @endforeach
    </tbody>
</table>