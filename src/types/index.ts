import { Tables } from '@/types/generated.ts'

export interface PlatformLink {
  id: string
  platformName: string
  platformUrl: string
}

export interface ProfileImg {
  url: string
}

export type DbProfile = Tables<'profiles'>

export type Profile = Omit<DbProfile, 'links' | 'profile_img'> & {
  links: PlatformLink[]
  profile_img: ProfileImg
}
