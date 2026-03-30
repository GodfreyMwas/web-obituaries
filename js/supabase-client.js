// js/supabase-client.js
// Real Supabase connection for your web-obituaries platform
const supabaseUrl = 'https://dynplmitzoxnxusmivno.supabase.co';
const supabaseAnonKey = 'sb_publishable_WyJIHw24t8zpcuiMsIta0A_5o45oDFM';

// Initialize Supabase client (vanilla JS + CDN compatible)
const { createClient } = supabase;   // supabase is the global from CDN
window.supabaseClient = createClient(supabaseUrl, supabaseAnonKey);

console.log('✅ Supabase client connected successfully for web-obituaries');
