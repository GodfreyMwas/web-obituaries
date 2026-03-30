// js/supabase-client.js
// Your real Supabase connection - DO NOT change these unless you create a new project
const supabaseUrl = 'https://dynplmitzoxnxusmivno.supabase.co';
const supabasePublishableKey = 'sb_publishable_WyJIHw24t8zpcuiMsIta0A_5o45oDFM';

// Initialize Supabase client for vanilla HTML/JS
const supabase = window.supabase.createClient(supabaseUrl, supabasePublishableKey);

console.log('Supabase client initialized for web-obituaries');
