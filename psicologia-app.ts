// src/lib/supabase/schema.sql
create table pacientes (
  id serial primary key,
  codigo varchar(10) unique not null,
  nombre varchar(100) not null
);

create table pensamientos (
  id serial primary key,
  codigo varchar(20) not null,
  pensamiento text not null,
  paciente_id integer references pacientes(id)
);

create table dimensiones (
  id serial primary key,
  pensamiento_id integer references pensamientos(id),
  fecha date not null,
  cantidad integer not null,
  duracion integer,
  intensidad integer not null,
  created_at timestamp with time zone default now()
);

// src/types/index.ts
export interface Paciente {
  id: number;
  codigo: string;
  nombre: string;
}

export interface Pensamiento {
  id: number;
  codigo: string;
  pensamiento: string;
  paciente_id: number;
}

export interface Dimension {
  id: number;
  pensamiento_id: number;
  fecha: string;
  cantidad: number;
  duracion: number | null;
  intensidad: number;
}

// src/app/pacientes/[codigo]/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import DimensionesForm from '@/components/DimensionesForm'
import PensamientosList from '@/components/PensamientosList'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export default function PacientePage() {
  const { codigo } = useParams()
  const [paciente, setPaciente] = useState<Paciente | null>(null)
  const [selectedPensamiento, setSelectedPensamiento] = useState<Pensamiento | null>(null)

  useEffect(() => {
    async function loadPaciente() {
      const { data } = await supabase
        .from('pacientes')
        .select('*')
        .eq('codigo', codigo)
        .single()
      setPaciente(data)
    }
    loadPaciente()
  }, [codigo])

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <Card>
          <CardHeader>
            <CardTitle>
              {paciente?.codigo} - {paciente?.nombre}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <PensamientosList
              pacienteId={paciente?.id}
              onSelect={setSelectedPensamiento}
            />
          </CardContent>
        </Card>
      </div>
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Dimensiones</CardTitle>
          </CardHeader>
          <CardContent>
            {selectedPensamiento ? (
              <DimensionesForm pensamiento={selectedPensamiento} />
            ) : (
              <p>Seleccione un pensamiento para registrar dimensiones</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

// src/components/PensamientosList.tsx
'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
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

// src/components/DimensionesForm.tsx
'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import type { Pensamiento, Dimension } from '@/types'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Slider } from '@/components/ui/slider'

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
