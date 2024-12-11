// hooks/useEventos.ts
import { useState, useCallback } from 'react'
import { supabase } from '@/lib/supabase'
import type { Evento, Patient } from '@/types'

export const useEventos = (selectedPatient: Patient | null) => {
  const [eventos, setEventos] = useState<Evento[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const loadEventos = useCallback(async (date: string) => {
    if (!selectedPatient) return
    
    setIsLoading(true)
    try {
      const startDate = new Date(new Date(date).getTime() + (5 * 60 * 60 * 1000)).toISOString()
      const endDate = new Date(new Date(date).getTime() + (29 * 60 * 60 * 1000)).toISOString()
      
      const { data } = await supabase
        .from('eventos')
        .select(`
          *,
          eventos_pensamientos_emociones (
            *,
            pensamientos (codigo, pensamiento),
            emociones_tipo (codigo, nombre)
          )
        `)
        .eq('paciente_id', selectedPatient.id)
        .gte('fecha_hora', startDate)
        .lte('fecha_hora', endDate)
        .order('fecha_hora', { ascending: false })
      
      if (data) setEventos(data)
    } catch (error) {
      console.error('Error cargando eventos:', error)
    } finally {
      setIsLoading(false)
    }
  }, [selectedPatient])

  return { eventos, isLoading, loadEventos }
}
