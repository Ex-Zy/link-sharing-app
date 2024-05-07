import { supabase } from '@/adapters/supabase'
import type { PlatformLink, Profile } from '@/types'

export const profileService = {
  async getProfile(id: string) {
    try {
      const { data, error } = await supabase.from('profiles').select('*').eq('id', id).single()

      if (error) {
        console.error('Error fetching profile:', error)
        return
      }

      return data
    } catch (err) {
      console.error('Unexpected error fetching profile:', err)
    }
  },

  async updateProfileLinks(id: string, profile: Profile, link: PlatformLink) {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .update({ links: [...profile.links, link] })
        .eq('id', id)
        .select()

      if (error) {
        console.error('Error updating profile links:', error)
        return
      }

      return data
    } catch (err) {
      console.error('Unexpected error updating profile links:', err)
    }
  }
}
