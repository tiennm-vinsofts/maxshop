<!-- Img Field -->
<div class="form-group col-sm-6">
    {!! Form::label('img', 'Img:') !!}
    {!! Form::file('img') !!}
</div>
<div class="clearfix"></div>

<!-- Des Field -->
<div class="form-group col-sm-12 col-lg-12">
    {!! Form::label('des', 'Des:') !!}
    {!! Form::textarea('des', null, ['class' => 'form-control']) !!}
</div>

<!-- Title Field -->
<div class="form-group col-sm-6">
    {!! Form::label('title', 'Title:') !!}
    {!! Form::text('title', null, ['class' => 'form-control']) !!}
</div>

<!-- Title2 Field -->
<div class="form-group col-sm-12 col-lg-12">
    {!! Form::label('title2', 'Title2:') !!}
    {!! Form::textarea('title2', null, ['class' => 'form-control']) !!}
</div>

<!-- Submit Field -->
<div class="form-group col-sm-12">
    {!! Form::submit('Save', ['class' => 'btn btn-primary']) !!}
    <a href="{!! route('slides.index') !!}" class="btn btn-default">Cancel</a>
</div>
