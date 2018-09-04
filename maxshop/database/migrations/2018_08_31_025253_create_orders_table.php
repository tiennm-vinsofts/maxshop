<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateOrdersTable extends Migration
{

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id')->unsigned();
            $table->integer('status');
            $table->integer('countrie_id')->unsigned();
            $table->string('address');
            $table->string('first_name');
            $table->string('last_name');
            $table->string('office_home_others');
            $table->string('address1');
            $table->string('address2');
            $table->string('city');
            $table->string('email');
            $table->string('phone');
            $table->string('state');
            $table->string('zipcode');
            $table->integer('totalmoney')->unsigned();
            $table->timestamps();
            $table->softDeletes();
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('countrie_id')->references('id')->on('countries');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('orders');
    }
}
