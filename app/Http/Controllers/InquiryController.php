<?php

namespace App\Http\Controllers;

use App\Models\Inquiry;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class InquiryController extends Controller
{
    public function store(Request $request)
    {
        $minor = $request->filled('age') && (int) $request->input('age') < 18;

        $data = $request->validate([
            'name' => 'required|string|max:100',
            'email' => 'required|email|max:150',
            'phone' => 'nullable|string|max:30',
            'age' => 'required|integer|min:1|max:99',
            'piercing_type' => 'required|string|max:60',
            'placement' => 'nullable|string|max:120',
            'service_type' => 'required|in:Home service,Meetup',
            'location' => 'required|string|max:200',
            'preferred_date' => 'nullable|date|after_or_equal:today',
            'message' => 'nullable|string|max:1500',
            'guardian_name' => [Rule::requiredIf($minor), 'nullable', 'string', 'max:100'],
            'guardian_phone' => [Rule::requiredIf($minor), 'nullable', 'string', 'max:30'],
            'consent_letter' => [Rule::requiredIf($minor), 'nullable', 'file', 'mimes:pdf,jpg,jpeg,png', 'max:5120'],
        ]);

        if ($request->hasFile('consent_letter')) {
            $data['consent_letter_path'] = $request->file('consent_letter')->store('consent-letters');
        }
        unset($data['consent_letter']);

        Inquiry::create($data);

        return response()->json(['ok' => true], 201);
    }
}
