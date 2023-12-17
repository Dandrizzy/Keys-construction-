import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://gabmadhxuvquqwlobhdu.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdhYm1hZGh4dXZxdXF3bG9iaGR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk2NTY2OTksImV4cCI6MjAxNTIzMjY5OX0.L6MBRqOu1tkEv0OnAetBkk_uSJkj4DZnb-e9PlLrxPQ';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
