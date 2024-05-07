import { createSupabaseClient } from '@/adapters/supabase/supabaseClient.ts'

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY

export const supabase = createSupabaseClient(SUPABASE_URL, SUPABASE_KEY)
