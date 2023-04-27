<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDashboardItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dashboard_items', function (Blueprint $table) {
            $table->id();
            $table->integer('dashboard_id')->nullable();
            $table->string('libelle',255)->nullable();
            $table->text('requete')->nullable();
            $table->string('graphique',255)->nullable();
            $table->text('description')->nullable();
            $table->integer('i')->default(0)->nullable();
            $table->integer('x')->default(0)->nullable();
            $table->integer('y')->default(0)->nullable();
            $table->integer('w')->default(0)->nullable();
            $table->integer('h')->default(0)->nullable();
            $table->boolean('static')->default(true)->nullable();
            $table->tinyInteger('updated')->nullable()->default(0);
            $table->integer('updated_by')->unsigned()->nullable();
            $table->integer('created_by')->unsigned()->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('dashboard_items');
    }
}
