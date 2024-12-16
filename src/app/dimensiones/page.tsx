'use client'
import { supabase } from '@/lib/supabase'
import { useState, useEffect, useCallback } from 'react'
import { format } from 'date-fns'
import { ChevronUp, ChevronDown, Calendar, Activity, Brain, Users } from 'lucide-react'
import {
  Card,
  CardBody,
  CardHeader,
  Select,
  SelectItem,
  Button,
  Input,
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Divider,
  Slider
} from "@nextui-org/react"

interface Patient {
  id: number  // Cambiado a solo number
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

const RegistroDimensiones = () => {
  const [totalCantidad, setTotalCantidad] = useState(0);
  const [isLoading, setIsLoading] = useState(false)
  const [patients, setPatients] = useState<Patient[]>([])
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null)
  const [pensamientos, setPensamientos] = useState<Pensamiento[]>([])
  const [selectedPensamiento, setSelectedPensamiento] = useState<Pensamiento | null>(null)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [cantidad, setCantidad] = useState(0)
  const [duracion, setDuracion] = useState('')
  const [intensidad, setIntensidad] = useState(0)
  const [dimensiones, setDimensiones] = useState<Dimension[]>([])
  const [showMessage, setShowMessage] = useState(false);

   const loadPatients = useCallback(async () => {
    const { data } = await supabase
      .from('pacientes')
      .select('*')
      .order('codigo')
    if (data) setPatients(data)
  }, [])


  const loadPensamientos = useCallback(async () => {
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
}, [selectedPatient])

 const loadDimensiones = useCallback(async () => {
    if (!selectedPensamiento) return;
    const today = new Date().toISOString().split('T')[0];
    
    const [{ data: dimensiones }, { data: totalData }] = await Promise.all([
      supabase
        .from('dimensiones')
        .select('*')
        .eq('pensamiento_id', selectedPensamiento.id)
        .eq('fecha', today),
      supabase
        .rpc('sum_cantidad', { pensamiento_id: selectedPensamiento.id, fecha: today })
    ]);

    if (dimensiones) setDimensiones(dimensiones);
    if (totalData !== null) setTotalCantidad(totalData);
  }, [selectedPensamiento]);

useEffect(() => {
  loadPatients()
}, [loadPatients])

useEffect(() => {
  loadPensamientos();
}, [loadPensamientos, selectedPatient]);

useEffect(() => {
  loadDimensiones()
}, [selectedPensamiento, loadDimensiones])

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!selectedPensamiento) return;
  
  const today = new Date().toISOString().split('T')[0];
  const { data, error } = await supabase.from('dimensiones').insert({
    pensamiento_id: selectedPensamiento.id,
    fecha: today,
    cantidad,
    duracion: duracion ? parseInt(duracion) : null,
    intensidad
  });

  if (error) {
    console.error('Error al guardar:', error);
    return;
  }

  setCantidad(0);
  setDuracion('');
  setIntensidad(0);
  loadDimensiones();
  setShowMessage(true);
  setTimeout(() => setShowMessage(false), 3000);
  }

  const navigatePensamiento = (direction: 'up' | 'down') => {
    const newIndex = direction === 'up' 
      ? Math.max(0, selectedIndex - 1)
      : Math.min(pensamientos.length - 1, selectedIndex + 1)
    
    setSelectedIndex(newIndex)
    setSelectedPensamiento(pensamientos[newIndex])
  }

    return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <Card>
          <CardBody>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-primary" />
              <Select
                  label="Seleccionar Paciente"
                  placeholder="Seleccione un paciente"
                  className="w-full md:w-80"
                  selectedKeys={selectedPatient ? [selectedPatient.id.toString()] : []}
                  onChange={(e) => {
                    const selectedId = e.target.value;
                    const patient = patients.find(p => p.id.toString() === selectedId);
                    setSelectedPatient(patient || null);
                  }}
                >
                  {patients.map((patient) => (
                    <SelectItem key={patient.id} value={patient.id.toString()}>
                      {patient.codigo} - {patient.nombre}
                    </SelectItem>
                  ))}
                </Select>
              </div>
              <div className="flex items-center gap-2 bg-default-100 px-4 py-2 rounded-lg">
                <Calendar className="w-5 h-5 text-default-500" />
                <span className="font-medium">{format(new Date(), 'dd/MM/yyyy')}</span>
              </div>
            </div>
          </CardBody>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-semibold">Pensamientos</h2>
              </div>
              <div className="flex gap-1">
                <Button 
                  isIconOnly 
                  variant="light"
                  onClick={() => navigatePensamiento('up')}
                  isDisabled={selectedIndex === 0}
                >
                  <ChevronUp className="w-4 h-4" />
                </Button>
                <Button 
                  isIconOnly 
                  variant="light"
                  onClick={() => navigatePensamiento('down')}
                  isDisabled={selectedIndex === pensamientos.length - 1}
                >
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <Divider/>
            <CardBody className="h-[calc(100vh-400px)] overflow-y-auto p-0">
              {pensamientos.map((pensamiento, idx) => (
                <div
                  key={pensamiento.id}
                  onClick={() => {
                    setSelectedIndex(idx)
                    setSelectedPensamiento(pensamiento)
                  }}
                  className={`p-4 cursor-pointer border-b transition-colors
                    ${idx === selectedIndex ? 'bg-default-100' : 'hover:bg-default-50'}`}
                >
                  <div className="font-medium text-primary">{pensamiento.codigo}</div>
                  <div className="mt-1 text-default-600">{pensamiento.pensamiento}</div>
                </div>
              ))}
            </CardBody>
          </Card>

          <Card>
            <CardHeader className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold">Dimensiones</h2>
            </CardHeader>
            <Divider/>
            <CardBody>
              {selectedPensamiento ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {showMessage && (
                    <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4" role="alert">
                      <p>Dimension guardada correctamente</p>
                    </div>
                  )}
                  <Card>
                    <CardBody className="bg-default-50">
                      <div className="font-medium text-primary">{selectedPensamiento.codigo}</div>
                      <div className="mt-2 text-default-600">{selectedPensamiento.pensamiento}</div>
                    </CardBody>
                  </Card>

                  <div className="space-y-6">
                     <div className="bg-default-50 p-4 rounded-lg">
                      <label className="block text-sm font-medium mb-2">
                        Cantidad de veces
                      </label>
                      <div className="flex items-center gap-4">
                        <Button
                          isIconOnly
                          variant="bordered"
                          onClick={() => cantidad > 0 && setCantidad(c => c - 1)}
                        >
                          -
                        </Button>
                        <span className="text-xl font-medium w-12 text-center">
                          {cantidad}
                        </span>
                        <Button
                          isIconOnly
                          variant="bordered"
                          onClick={() => setCantidad(c => c + 1)}
                        >
                          +
                        </Button>
                      </div>
                    </div>

                    <div className="bg-default-50 p-4 rounded-lg">
                      <Input
                        type="number"
                        label="Duración (minutos)"
                        value={duracion}
                        onChange={(e) => setDuracion(e.target.value)}
                      />
                    </div>

                    <div className="bg-default-50 p-4 rounded-lg">
                      <label className="block text-sm font-medium mb-2">
                        Intensidad ({intensidad}/10)
                      </label>
                      <Slider
                        size="sm"
                        step={1}
                        maxValue={10}
                        minValue={0}
                        value={intensidad}
                        onChange={(value) => setIntensidad(Number(value))}
                        className="max-w-xs"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    color="primary"
                    className="w-full"
                    size="lg"
                  >
                    Guardar Dimensión
                  </Button>

                  {dimensiones.length > 0 && (
                    <div className="mt-8">
                      <h3 className="font-medium mb-4 flex items-center gap-2">
                        <Activity className="w-4 h-4" />
                        Dimensiones registradas hoy
                      </h3>
                      <Table aria-label="Dimensiones registradas">
                        <TableHeader>
                          <TableColumn>Cantidad</TableColumn>
                          <TableColumn>Duración</TableColumn>
                          <TableColumn>Intensidad</TableColumn>
                        </TableHeader>
                        <TableBody>
                          {dimensiones.map((dimension) => (
                            <TableRow key={dimension.id}>
                              <TableCell>{dimension.cantidad}</TableCell>
                              <TableCell>{dimension.duracion || '-'}</TableCell>
                              <TableCell>{dimension.intensidad}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                      
                    </div>
                  )}
                  <div className="mt-4 bg-default-100 p-4 rounded-lg">
                            <p className="font-medium">Total cantidad de veces: {totalCantidad}</p>
                      </div>
                </form>
              ) : (
                <div className="text-center py-12 text-default-500">
                  Selecciona un pensamiento para registrar dimensiones
                </div>
              )}
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default RegistroDimensiones
