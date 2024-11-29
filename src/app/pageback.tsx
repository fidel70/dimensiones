'use client'
import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import { ChevronUp, ChevronDown } from 'lucide-react'
import { supabase } from '@/lib/supabase'





  // Estados y lógica existente...


  interface Patient {
  id: string
  codigo: string
  nombre: string
}

interface Pensamiento {
  id: number
  codigo: string
  pensamiento: string
  paciente_id: number
}

interface Dimension {
  id?: number
  pensamiento_id: number
  fecha: string
  cantidad: number
  duracion: number | null
  intensidad: number
}

const ModernTracker = () => {


  const [patients, setPatients] = useState<Patient[]>([])
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null)
  const [pensamientos, setPensamientos] = useState<Pensamiento[]>([])
  const [selectedPensamiento, setSelectedPensamiento] = useState<Pensamiento | null>(null)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [cantidad, setCantidad] = useState(0)
  const [duracion, setDuracion] = useState('')
  const [intensidad, setIntensidad] = useState(0)
  const [dimensions, setDimensions] = useState<Dimension[]>([])

  useEffect(() => {
    loadPatients()
  }, [])

  useEffect(() => {
    if (selectedPatient) loadPensamientos()
  }, [selectedPatient])

  useEffect(() => {
    if (selectedPensamiento) loadDimensions()
  }, [selectedPensamiento])

  const loadPatients = async () => {
    const { data } = await supabase.from('pacientes').select('*').order('codigo')
    if (data) setPatients(data)
  }

  const loadPensamientos = async () => {
    if (!selectedPatient) return
    const { data } = await supabase
      .from('pensamientos')
      .select('*')
      .eq('paciente_id', selectedPatient.id)
      .order('codigo')
    if (data) {
      setPensamientos(data)
      setSelectedIndex(0)
      setSelectedPensamiento(data[0] || null)
    }
  }

  const loadDimensions = async () => {
    if (!selectedPensamiento) return
    const today = new Date().toISOString().split('T')[0]
    const { data } = await supabase
      .from('dimensiones')
      .select('*')
      .eq('pensamiento_id', selectedPensamiento.id)
      .eq('fecha', today)
      .order('created_at', { ascending: false })
    if (data) setDimensions(data)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedPensamiento) return
    
    const today = new Date().toISOString().split('T')[0]
    await supabase.from('dimensiones').insert({
      pensamiento_id: selectedPensamiento.id,
      fecha: today,
      cantidad,
      duracion: duracion ? parseInt(duracion) : null,
      intensidad
    })

    setCantidad(0)
    setDuracion('')
    setIntensidad(0)
    loadDimensions()
  }

  const navigatePensamiento = (direction: 'up' | 'down') => {
    const newIndex = direction === 'up' 
      ? Math.max(0, selectedIndex - 1)
      : Math.min(pensamientos.length - 1, selectedIndex + 1)
    
    setSelectedIndex(newIndex)
    setSelectedPensamiento(pensamientos[newIndex])
  }


  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <select 
              className="min-w-[200px] p-2 border rounded-lg"
              onChange={(e) => {
                const patient = patients.find(p => p.id.toString() === e.target.value)
                setSelectedPatient(patient || null)
              }}
            >
              <option value="">Seleccionar Paciente</option>
              {patients.map(p => (
                <option key={p.id} value={p.id}>
                  {p.codigo} - {p.nombre}
                </option>
              ))}
            </select>
            <span className="text-lg font-medium text-gray-600">
              {format(new Date(), 'dd/MM/yyyy')}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="border-r border-gray-200">
            <div className="p-4 flex justify-between items-center border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800">Pensamientos</h2>
              <div className="flex gap-2">
                <button 
                  className="p-1 hover:bg-gray-100 rounded-lg disabled:opacity-50"
                  onClick={() => navigatePensamiento('up')}
                  disabled={selectedIndex === 0}
                >
                  <ChevronUp className="w-5 h-5" />
                </button>
                <button
                  className="p-1 hover:bg-gray-100 rounded-lg disabled:opacity-50"
                  onClick={() => navigatePensamiento('down')}
                  disabled={selectedIndex === pensamientos.length - 1}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="h-[calc(100vh-250px)] overflow-y-auto">
              {pensamientos.map((pensamiento, idx) => (
                <div
                  key={pensamiento.id}
                  onClick={() => {
                    setSelectedIndex(idx)
                    setSelectedPensamiento(pensamiento)
                  }}
                  className={`p-4 cursor-pointer border-b border-gray-100 hover:bg-blue-50 transition-colors
                    ${idx === selectedIndex ? 'bg-blue-100' : ''}
                  `}
                >
                  <div className="font-medium text-gray-900">{pensamiento.codigo}</div>
                  <div className="text-gray-600 mt-1">{pensamiento.pensamiento}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Dimensiones</h2>
            {selectedPensamiento ? (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="font-medium text-gray-900">{selectedPensamiento.codigo}</div>
                  <div className="text-gray-600 mt-1">{selectedPensamiento.pensamiento}</div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Cantidad de veces
                    </label>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200"
                        onClick={() => cantidad > 0 && setCantidad(c => c - 1)}
                      >
                        -
                      </button>
                      <span className="text-lg font-medium w-12 text-center">
                        {cantidad}
                      </span>
                      <button
                        type="button"
                        className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200"
                        onClick={() => setCantidad(c => c + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Duración (minutos)
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={duracion}
                      onChange={e => setDuracion(e.target.value)}
                      className="w-full max-w-[200px] rounded-lg border-gray-300 shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Intensidad ({intensidad}/10)
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="10"
                      value={intensidad}
                      onChange={e => setIntensidad(Number(e.target.value))}
                      className="w-full max-w-[200px]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white rounded-lg py-2 px-4 hover:bg-blue-700 
                    transition-colors font-medium"
                >
                  Guardar Dimensión
                </button>

                {dimensions.length > 0 && (
                  <div className="mt-8">
                    <h3 className="font-medium text-gray-900 mb-4">
                      Dimensiones registradas hoy
                    </h3>
                    <div className="bg-gray-50 rounded-lg overflow-hidden">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                              Cantidad
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                              Duración
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                              Intensidad
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {dimensions.map(d => (
                            <tr key={d.id}>
                              <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                                {d.cantidad}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                                {d.duracion || '-'}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                                {d.intensidad}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </form>
            ) : (
              <div className="text-gray-500 text-center py-12">
                Selecciona un pensamiento para registrar dimensiones
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    
  )

}

export default ModernTracker