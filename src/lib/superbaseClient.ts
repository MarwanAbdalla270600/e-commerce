import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabasePrivateKey = process.env.NEXT_PRIVATE_SUPERBASE_SERVICE_ROLE_KEY!

export const supabasePublic = createClient(supabaseUrl, supabaseAnonKey)
export const supabasePrivate = createClient(supabaseUrl, supabasePrivateKey)

