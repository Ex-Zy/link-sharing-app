import { supabase } from './supabase'
import { buildQuery } from '../utils/buildQuery.ts'

export const api = {
  async get(table: string, params = {}) {
    try {
      const query = buildQuery(supabase.from(table), params)

      const { data, error } = await query

      if (error) {
        throw error
      }

      return data
    } catch (err) {
      console.error(`Error fetching ${table}:`, err)
    }
  }
}
