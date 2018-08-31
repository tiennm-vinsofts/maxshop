<table class="table table-responsive" id="products-table">
    <thead>
        <tr>
            <th>Name</th>
        <th>Category Id</th>
        <th>Priceold</th>
        <th>Pricenew</th>
        <th>Ranks</th>
        <th>Status</th>
        <th>Img</th>
        <th>Des</th>
        <th>Des</th>
            <th colspan="3">Action</th>
        </tr>
    </thead>
    <tbody>
    @foreach($products as $product)
        <tr>
            <td>{!! $product->name !!}</td>
            <td>{!! $product->category_id !!}</td>
            <td>{!! $product->priceold !!}</td>
            <td>{!! $product->pricenew !!}</td>
            <td>{!! $product->ranks !!}</td>
            <td>{!! $product->status !!}</td>
            <td>{!! $product->img !!}</td>
            <td>{!! $product->des !!}</td>
            <td>{!! $product->des !!}</td>
            <td>
                {!! Form::open(['route' => ['products.destroy', $product->id], 'method' => 'delete']) !!}
                <div class='btn-group'>
                    <a href="{!! route('products.show', [$product->id]) !!}" class='btn btn-default btn-xs'><i class="glyphicon glyphicon-eye-open"></i></a>
                    <a href="{!! route('products.edit', [$product->id]) !!}" class='btn btn-default btn-xs'><i class="glyphicon glyphicon-edit"></i></a>
                    {!! Form::button('<i class="glyphicon glyphicon-trash"></i>', ['type' => 'submit', 'class' => 'btn btn-danger btn-xs', 'onclick' => "return confirm('Are you sure?')"]) !!}
                </div>
                {!! Form::close() !!}
            </td>
        </tr>
    @endforeach
    </tbody>
</table>