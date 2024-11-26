// supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dszldxsmbcdntoxfemqt.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRzemxkeHNtYmNkbnRveGZlbXF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI2Mjc5MjUsImV4cCI6MjA0ODIwMzkyNX0.hyhet-K26S5SF12gptH7yeuOfYNnRux-CziIfwDeoDI'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Funciones de utilidad para interactuar con Supabase
export const supabaseUtils = {
  // Autenticación
  async signIn({ email, password }) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    return { data, error }
  },

  async signOut() {
    const { error } = await supabase.auth.signOut()
    return { error }
  },

  // Operaciones con pacientes
  async getPacientes() {
    const { data, error } = await supabase
      .from('pacientes')
      .select('*')
      .order('codigo')
    return { data, error }
  },

  // Operaciones con pensamientos
  async getPensamientosPorPaciente(codigoPaciente) {
    const { data, error } = await supabase
      .from('pensamientos')
      .select('*')
      .ilike('codigo', `${codigoPaciente}%`)
      .order('codigo')
    return { data, error }
  },

  // Operaciones con dimensiones
  async getDimensiones(pensamientoId, fecha) {
    const { data, error } = await supabase
      .rpc('get_dimensiones_por_fecha_y_pensamiento', {
        p_pensamiento_id: pensamientoId,
        p_fecha: fecha
      })
    return { data, error }
  },

  async insertDimension(dimension) {
    const { data, error } = await supabase
      .from('dimensiones')
      .insert([dimension])
      .select()
    return { data, error }
  }
}
