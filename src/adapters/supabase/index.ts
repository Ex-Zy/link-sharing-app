import { createSupabaseClient } from './supabaseClient.ts'

// Todo: add types for supabase variables
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY as string

export const supabase = createSupabaseClient(SUPABASE_URL, SUPABASE_KEY)
