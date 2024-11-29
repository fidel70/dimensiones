'use client'

import { useState, useEffect } from 'react'
import { supabase } from '/src/lib/supabase'
import type { Pensamiento, Dimension } from '@/types'
import { Button } from '/src/components/ui/button'
import { Input } from '/src/components/ui/input'
import { Slider } from '/src/components/ui/slider'

interface Props {
  pensamiento: Pensamiento
}

export default function DimensionesForm({ pensamiento }: Props) {
  const [cantidad, setCantidad] = useState(0)
  const [duracion, setDuracion] = useState('')
  const [intensidad, setIntensidad] = useState(0)
  const [dimensiones, setDimensiones] = useState<Dimension[]>([])

  useEffect(() => {
    loadDimensiones()
  }, [pensamiento])

  async function loadDimensiones() {
    const today = new Date().toISOString().split('T')[0]
    const { data } = await supabase
      .from('dimensiones')
      .select('*')
      .eq('pensamiento_id', pensamiento.id)
      .eq('fecha', today)
      .order('created_at', { ascending: false })
    
    if (data) setDimensiones(data)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const today = new Date().toISOString().split('T')[0]
    
    await supabase
      .from('dimensiones')
      .insert({
        pensamiento_id: pensamiento.id,
        fecha: today,
        cantidad,
        duracion: duracion ? parseInt(duracion) : null,
        intensidad
      })

    setCantidad(0)
    setDuracion('')
    setIntensidad(0)
    loadDimensiones()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block mb-2">Cantidad de veces:</label>
        <div className="flex items-center space-x-2">
          <Button 
            type="button"
            onClick={() => cantidad > 0 && setCantidad(c => c - 1)}
          >
            -
          </Button>
          <span className="w-10 text-center">{cantidad}</span>
          <Button
            type="button"
            onClick={() => setCantidad(c => c + 1)}
          >
            +
          </Button>
        </div>
      </div>

      <div>
        <label className="block mb-2">Duración (0-60 min):</label>
        <Input
          type="number"
          min="0"
          max="60"
          value={duracion}
          onChange={e => setDuracion(e.target.value)}
        />
      </div>

      <div>
        <label className="block mb-2">Intensidad (0-10):</label>
        <Slider
          value={[intensidad]}
          max={10}
          step={1}
          onValueChange={([value]) => setIntensidad(value)}
        />
      </div>

      <Button type="submit">Guardar Dimensión</Button>

      <div className="mt-6">
        <h3 className="font-semibold mb-2">Dimensiones registradas hoy:</h3>
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Cantidad</th>
              <th className="text-left">Duración</th>
              <th className="text-left">Intensidad</th>
            </tr>
          </thead>
          <tbody>
            {dimensiones.map(d => (
              <tr key={d.id}>
                <td>{d.cantidad}</td>
                <td>{d.duracion || '-'}</td>
                <td>{d.intensidad}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </form>
  )
}