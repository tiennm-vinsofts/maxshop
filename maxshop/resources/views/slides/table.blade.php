<table class="table table-responsive" id="slides-table">
    <thead>
        <tr>
            <th>Img</th>
        <th>Des</th>
        <th>Title</th>
        <th>Title2</th>
            <th colspan="3">Action</th>
        </tr>
    </thead>
    <tbody>
    @foreach($slides as $slide)
        <tr>
            <td>{!! $slide->img !!}</td>
            <td>{!! $slide->des !!}</td>
            <td>{!! $slide->title !!}</td>
            <td>{!! $slide->title2 !!}</td>
            <td>
                {!! Form::open(['route' => ['slides.destroy', $slide->id], 'method' => 'delete']) !!}
                <div class='btn-group'>
                    <a href="{!! route('slides.show', [$slide->id]) !!}" class='btn btn-default btn-xs'><i class="glyphicon glyphicon-eye-open"></i></a>
                    <a href="{!! route('slides.edit', [$slide->id]) !!}" class='btn btn-default btn-xs'><i class="glyphicon glyphicon-edit"></i></a>
                    {!! Form::button('<i class="glyphicon glyphicon-trash"></i>', ['type' => 'submit', 'class' => 'btn btn-danger btn-xs', 'onclick' => "return confirm('Are you sure?')"]) !!}
                </div>
                {!! Form::close() !!}
            </td>
        </tr>
    @endforeach
    </tbody>
</table>