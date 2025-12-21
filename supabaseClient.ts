import { createClient } from '@supabase/supabase-js';

// Mengambil variabel dari lingkungan (Environment Variables)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase URL atau Anon Key belum disetting di .env!');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

