<!-- Img Field -->
<div class="form-group col-sm-6">
    {!! Form::label('img', 'Img:') !!}
    {!! Form::file('img') !!}
    {{--@if(isset( $product->img))--}}
        {{--{{ Html::image($product->img,'anh',['class'=>'img-responsive']) }}--}}
    {{--@endif--}}
</div>

<!-- Des Field -->
<div class="form-group col-sm-6">
    {!! Form::label('des', 'Des:') !!}
    {!! Form::text('des', null, ['class' => 'form-control']) !!}
</div>

<!-- Title Field -->
<div class="form-group col-sm-6">
    {!! Form::label('title', 'Title:') !!}
    {!! Form::text('title', null, ['class' => 'form-control']) !!}
</div>

<!-- Title2 Field -->
<div class="form-group col-sm-6">
    {!! Form::label('title2', 'Title2:') !!}
    {!! Form::text('title2', null, ['class' => 'form-control']) !!}
</div>

<!-- Submit Field -->
<div class="form-group col-sm-12">
    {!! Form::submit('Save', ['class' => 'btn btn-primary']) !!}
    <a href="{!! route('slides.index') !!}" class="btn btn-default">Cancel</a>
</div>
