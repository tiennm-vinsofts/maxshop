<table class="table table-responsive" id="orders-table">
    <thead>
        <tr>
            <th>User Id</th>
            <th>Country Id</th>
            <th>Totalmoney</th>
        <th>Status</th>
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
            <th colspan="3">Action</th>
        </tr>
    </thead>
    <tbody>
    @foreach($orders as $orders)
        <tr>
            <td>{!! $orders->user_id !!}</td>
            <td>{!! $orders->country_id !!}</td>
            <td>{!! $orders->totalmoney !!}</td>
            <td>{!! $orders->status !!}</td>
            <td>{!! $orders->address !!}</td>
            <td>{!! $orders->first_name !!}</td>
            <td>{!! $orders->last_name !!}</td>
            <td>{!! $orders->office_home_others !!}</td>
            <td>{!! $orders->address1 !!}</td>
            <td>{!! $orders->address2 !!}</td>
            <td>{!! $orders->city !!}</td>
            <td>{!! $orders->email !!}</td>
            <td>{!! $orders->phone !!}</td>
            <td>{!! $orders->state !!}</td>
            <td>{!! $orders->zipcode !!}</td>
            <td>
                {!! Form::open(['route' => ['orders.destroy', $orders->id], 'method' => 'delete']) !!}
                <div class='btn-group'>
                    <a href="{!! route('orders.show', [$orders->id]) !!}" class='btn btn-default btn-xs'><i
                                class="glyphicon glyphicon-eye-open"></i></a>
                    <a href="{!! route('orders.edit', [$orders->id]) !!}" class='btn btn-default btn-xs'><i
                                class="glyphicon glyphicon-edit"></i></a>
                    {!! Form::button('<i class="glyphicon glyphicon-trash"></i>', ['type' => 'submit', 'class' => 'btn btn-danger btn-xs', 'onclick' => "return confirm('Are you sure?')"]) !!}
                </div>
                {!! Form::close() !!}
            </td>
        </tr>
    @endforeach
    </tbody>
</table>