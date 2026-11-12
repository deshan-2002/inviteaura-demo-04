import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

/**
 * True once NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY are set.
 * While false the admin UI shows a friendly "database not connected" state
 * instead of crashing or making failing network requests.
 */
export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseKey);

/**
 * Safe client export — pages must check `isSupabaseConfigured` before querying.
 * The placeholder values are never used for real requests when unconfigured.
 */
export const supabase: SupabaseClient = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseKey)
  : createClient("https://placeholder.supabase.co", "placeholder-anon-key", {
      auth: { persistSession: false, autoRefreshToken: false },
      global: {
        fetch: () =>
          Promise.reject(new Error("Supabase is not connected yet. Add your credentials to .env.local.")),
      },
    });
