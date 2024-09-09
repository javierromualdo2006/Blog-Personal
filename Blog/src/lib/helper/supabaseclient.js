import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
const supabase = createClient(
    'https://fmsshlxwofqwadnapqyw.supabase.co', 
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtc3NobHh3b2Zxd2FkbmFwcXl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5MDQ2OTIsImV4cCI6MjA0MTQ4MDY5Mn0.jvCvVjm2fFngSrwK3NbH9HECejid2PxtnjapksSZDSI'
    );

export default supabase;