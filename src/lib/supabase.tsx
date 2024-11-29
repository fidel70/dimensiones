// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  throw new Error('Supabase environment variables are not defined');
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey)

// Tipos para TypeScript
export type User = {
  id: string
  email: string
  name: string | null
  created_at: string
}

export type PsychologicalTest = {
  id: string
  user_id: string
  test_date: string
  depression_score: number
  anxiety_score: number
  stress_score: number
  notes: string | null
}