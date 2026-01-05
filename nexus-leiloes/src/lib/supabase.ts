import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Lead = {
  id?: string
  name: string
  email: string
  phone: string
  profile: 'investidor_pf' | 'assessor' | 'moradia'
  essential_tool?: string
  missing_tool?: string
  created_at?: string
}
