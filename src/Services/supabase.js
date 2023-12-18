import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://gabmadhxuvquqwlobhdu.supabase.co';

const supabase = createClient(
  supabaseUrl,
  `${import.meta.env.VITE_SUPABASE_ANON_KEY}`
);

export default supabase;
