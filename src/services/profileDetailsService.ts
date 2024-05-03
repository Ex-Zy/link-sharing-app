import { api } from '../adapters/api.ts'
import { generateProfileApiParams } from '../utils/generateProfileApiParams.ts'

export const profileDetailsService = {
  async getProfile(id: string) {
    const params = generateProfileApiParams(id)
    const profile = await api.get(...params)

    return profile
  }
}
