<!-- Name Field -->
<div class="form-group col-sm-6">
    {!! Form::label('name', 'Name:') !!}
    {!! Form::text('name', null, ['class' => 'form-control']) !!}
</div>

<!-- Priceold Field -->
<div class="form-group col-sm-6">
    {!! Form::label('priceold', 'Priceold:') !!}
    {!! Form::number('priceold', null, ['class' => 'form-control']) !!}
</div>

<!-- Pricenew Field -->
<div class="form-group col-sm-6">
    {!! Form::label('pricenew', 'Pricenew:') !!}
    {!! Form::number('pricenew', null, ['class' => 'form-control']) !!}
</div>

<!-- Ranks Field -->
<div class="form-group col-sm-6">
    {!! Form::label('ranks', 'Ranks:') !!}
    {!! Form::number('ranks', null, ['class' => 'form-control']) !!}
</div>

<!-- Status Field -->
<div class="form-group col-sm-6">
    {!! Form::label('status', 'Status:') !!}
    {!! Form::number('status', null, ['class' => 'form-control']) !!}
</div>

<!-- Img Field -->
<div class="form-group col-sm-6">
    {!! Form::label('img', 'Img:') !!}
    {!! Form::file('img') !!}
    @if(isset( $product->img))
    {{ Html::image($product->img,'anh',['class'=>'img-responsive']) }}
        @endif
</div>
<div class="clearfix"></div>

<!-- Category_id Field -->
<div class="form-group col-sm-6">
    {!! Form::label('category_id', 'Category id:') !!}
    {!! Form::select('category_id', $category_list,null,['class' => 'form-control']) !!}
</div>
<div class="clearfix"></div>

<!-- Des Field -->
<div class="form-group col-sm-6">
    {!! Form::label('des', 'Des:') !!}
    {!! Form::text('des', null, ['class' => 'form-control']) !!}
</div>

<!-- Des2 Field -->
<div class="form-group col-sm-12 col-lg-12">
    {!! Form::label('des2', 'Des2:') !!}
    {!! Form::textarea('des2', null, ['class' => 'form-control']) !!}
</div>

<!-- Submit Field -->
<div class="form-group col-sm-12">
    {!! Form::submit('Save', ['class' => 'btn btn-primary']) !!}
    <a href="{!! route('products.index') !!}" class="btn btn-default">Cancel</a>
</div>
