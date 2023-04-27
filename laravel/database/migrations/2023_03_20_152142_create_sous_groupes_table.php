<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSousGroupesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sous_groupes', function (Blueprint $table) {
            $table->id();
            $table->string('libelle',255)->nullable();
            $table->text('description')->nullable();
            $table->integer('groupe_id')->nullable();
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
        Schema::dropIfExists('sous_groupes');
    }
}
