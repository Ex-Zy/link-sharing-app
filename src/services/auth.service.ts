import { supabase } from '@/adapters/supabase'

export const AuthService = {
  async login(email: string, password: string) {
    return await supabase.auth.signInWithPassword({
      email,
      password
    })
  },

  async logout() {
    return await supabase.auth.signOut()
  },

  async signUp(email: string, password: string) {
    return await supabase.auth.signUp({
      email,
      password
    })
  }
}
