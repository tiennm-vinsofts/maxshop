<table class="table table-responsive" id="orders-table">
    <thead>
        <tr>
            <th>User Id</th>
        <th>Status</th>
        <th>Countrie Id</th>
        <th>Address</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Office Home Others</th>
        <th>Address1</th>
        <th>Address2</th>
        <th>City</th>
        <th>Email</th>
        <th>Phone</th>
        <th>State</th>
        <th>Zipcode</th>
        <th>Totalmoney</th>
            <th colspan="3">Action</th>
        </tr>
    </thead>
    <tbody>
    @foreach($orders as $order)
        <tr>
            <td>{!! $order->user_id !!}</td>
            <td>{!! $order->status !!}</td>
            <td>{!! $order->countrie_id !!}</td>
            <td>{!! $order->address !!}</td>
            <td>{!! $order->first_name !!}</td>
            <td>{!! $order->last_name !!}</td>
            <td>{!! $order->office_home_others !!}</td>
            <td>{!! $order->address1 !!}</td>
            <td>{!! $order->address2 !!}</td>
            <td>{!! $order->city !!}</td>
            <td>{!! $order->email !!}</td>
            <td>{!! $order->phone !!}</td>
            <td>{!! $order->state !!}</td>
            <td>{!! $order->zipcode !!}</td>
            <td>{!! $order->totalmoney !!}</td>
            <td>
                {!! Form::open(['route' => ['orders.destroy', $order->id], 'method' => 'delete']) !!}
                <div class='btn-group'>
                    <a href="{!! route('orders.show', [$order->id]) !!}" class='btn btn-default btn-xs'><i class="glyphicon glyphicon-eye-open"></i></a>
                    <a href="{!! route('orders.edit', [$order->id]) !!}" class='btn btn-default btn-xs'><i class="glyphicon glyphicon-edit"></i></a>
                    {!! Form::button('<i class="glyphicon glyphicon-trash"></i>', ['type' => 'submit', 'class' => 'btn btn-danger btn-xs', 'onclick' => "return confirm('Are you sure?')"]) !!}
                </div>
                {!! Form::close() !!}
            </td>
        </tr>
    @endforeach
    </tbody>
</table>