import {createClient} from '@supabase/supabase-js';

export const supabase_config = () => {
    const supabaseUrl = "https://fpzdptpuqviwtnhxzuor.supabase.co";
    const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZwemRwdHB1cXZpd3RuaHh6dW9yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ4MTQyMjgsImV4cCI6MjA1MDM5MDIyOH0.Z43V3ZdgYZ9D9W8Hvojn20GeGFSGp8Q9QR10YUBMcRc";
    const supabase = createClient(supabaseUrl, supabaseKey);
    return supabase;
}
