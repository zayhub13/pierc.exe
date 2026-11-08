<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::table('inquiries', function (Blueprint $t) {
            $t->unsignedTinyInteger('age')->nullable();
            $t->string('service_type')->nullable();
            $t->string('location')->nullable();
            $t->string('guardian_name')->nullable();
            $t->string('guardian_phone')->nullable();
            $t->string('consent_letter_path')->nullable();
        });
    }

    public function down(): void
    {
        Schema::table('inquiries', function (Blueprint $t) {
            $t->dropColumn(['age', 'service_type', 'location', 'guardian_name', 'guardian_phone', 'consent_letter_path']);
        });
    }
};
