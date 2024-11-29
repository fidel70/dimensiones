'use client'

import { useState, useEffect } from 'react'
import { supabase } from '/src/lib/supabase'
import type { Pensamiento } from '@/types'

interface Props {
  pacienteId?: number
  onSelect: (pensamiento: Pensamiento) => void
}

export default function PensamientosList({ pacienteId, onSelect }: Props) {
  const [pensamientos, setPensamientos] = useState<Pensamiento[]>([])

  useEffect(() => {
    if (pacienteId) {
      loadPensamientos()
    }
  }, [pacienteId])

  async function loadPensamientos() {
    const { data } = await supabase
      .from('pensamientos')
      .select('*')
      .eq('paciente_id', pacienteId)
      .order('codigo')
    
    if (data) setPensamientos(data)
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left p-2">Código</th>
            <th className="text-left p-2">Pensamiento</th>
          </tr>
        </thead>
        <tbody>
          {pensamientos.map(p => (
            <tr 
              key={p.id}
              onClick={() => onSelect(p)}
              className="hover:bg-gray-100 cursor-pointer"
            >
              <td className="p-2">{p.codigo}</td>
              <td className="p-2">{p.pensamiento}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}