<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Inquiry extends Model
{
    protected $fillable = [
        'name', 'email', 'phone', 'age', 'piercing_type', 'placement', 'service_type', 'location',
        'preferred_date', 'message', 'guardian_name', 'guardian_phone', 'consent_letter_path',
    ];
}
