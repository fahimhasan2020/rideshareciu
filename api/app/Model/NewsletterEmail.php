<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class NewsletterEmail extends Model
{
    protected $fillable = ['email'];
    protected $table = 'newsletter_emails';
}
