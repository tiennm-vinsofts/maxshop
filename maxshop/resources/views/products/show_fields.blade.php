<!-- Id Field -->
<div class="form-group">
    {!! Form::label('id', 'Id:') !!}
    <p>{!! $products->id !!}</p>
</div>

<!-- Created At Field -->
<div class="form-group">
    {!! Form::label('created_at', 'Created At:') !!}
    <p>{!! $products->created_at !!}</p>
</div>

<!-- Updated At Field -->
<div class="form-group">
    {!! Form::label('updated_at', 'Updated At:') !!}
    <p>{!! $products->updated_at !!}</p>
</div>

<!-- Category Id Field -->
<div class="form-group">
    {!! Form::label('category_id', 'Category Id:') !!}
    <p>{!! $products->category_id !!}</p>
</div>

<!-- Name Field -->
<div class="form-group">
    {!! Form::label('name', 'Name:') !!}
    <p>{!! $products->name !!}</p>
</div>

<!-- Priceold Field -->
<div class="form-group">
    {!! Form::label('priceold', 'Priceold:') !!}
    <p>{!! $products->priceold !!}</p>
</div>

<!-- Pricenew Field -->
<div class="form-group">
    {!! Form::label('pricenew', 'Pricenew:') !!}
    <p>{!! $products->pricenew !!}</p>
</div>

<!-- Ranks Field -->
<div class="form-group">
    {!! Form::label('ranks', 'Ranks:') !!}
    <p>{!! $products->ranks !!}</p>
</div>

<!-- Status Field -->
<div class="form-group">
    {!! Form::label('status', 'Status:') !!}
    <p>{!! $products->status !!}</p>
</div>

<!-- Img Field -->
<div class="form-group">
    {!! Form::label('img', 'Img:') !!}
    {{ Html::image($products->img,'anh',['class'=>'img-responsive']) }}
</div>

<!-- Des Field -->
<div class="form-group">
    {!! Form::label('des', 'Des:') !!}
    <p>{!! $products->des !!}</p>
</div>

<!-- Des2 Field -->
<div class="form-group">
    {!! Form::label('des2', 'Des2:') !!}
    <p>{!! $products->des2 !!}</p>
</div>

<!-- Sales Field -->
<div class="form-group">
    {!! Form::label('sales', 'Sales:') !!}
    <p>{!! $products->sales !!}</p>
</div>

<!-- Time Sales Field -->
<div class="form-group">
    {!! Form::label('time_sales', 'Time Sales:') !!}
    <p>{!! $products->time_sales !!}</p>
</div>

<!-- Time Out Sales Field -->
<div class="form-group">
    {!! Form::label('time_out_sales', 'Time Out Sales:') !!}
    <p>{!! $products->time_out_sales !!}</p>
</div>

