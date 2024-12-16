'use client'
import React, { useState, useEffect, useCallback } from 'react'
import { format } from 'date-fns'
import { 
  Calendar, 
  Users, 
  Brain, 
  Heart, 
  MapPin, 
  Plus,
  Save,
  Search,
  Trash2,
  Loader2
} from 'lucide-react'
import {
  Card,
  CardBody,
  Select,
  SelectItem,
  Button,
  Input,
  Textarea,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Slider,
  Divider,
  Chip
} from "@nextui-org/react"
import { supabase } from '@/lib/supabase'

// Interfaces
interface Patient {
  id: string
  codigo: string
  nombre: string
}

interface Pensamiento {
  id: string
  codigo: string
  pensamiento: string
}

interface Emotion {
  id: string
  codigo: string
  nombre: string
  descripcion: string
}

interface EventoPensamientoEmocion {
  id: string;
  evento_id: string;
  pensamiento_id: string;
  emocion_id: string;
  intensidad_emocion: number;
  observaciones?: string;
  pensamientos?: {
    codigo: string;
    pensamiento: string;
  };
  emociones_tipo?: {
    codigo: string;
    nombre: string;
  };
}

interface Evento {
  id?: string;
  paciente_id: string;
  descripcion: string;
  lugar?: string;
  contexto?: string;
  fecha_hora: string;
  eventos_pensamientos_emociones: EventoPensamientoEmocion[];
}

const RegistroEventos = () => {
  // Estados
  const [patients, setPatients] = useState<Patient[]>([])
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null)
  const [selectedDate, setSelectedDate] = useState(() => {
    // Obtener la fecha actual en UTC
    const now = new Date()
    
    // Obtener el offset de Perú (UTC-5) en minutos
    const peruOffset = -5 * 60
    
    // Obtener el offset local del navegador en minutos
    const localOffset = now.getTimezoneOffset()
    
    // Calcular la diferencia total en milisegundos
    const offsetDiff = (localOffset + peruOffset) * 60 * 1000
    
    // Ajustar la fecha a hora peruana
    const peruDate = new Date(now.getTime() + offsetDiff)
    
    // Formatear la fecha en formato yyyy-MM-dd
    return format(peruDate, 'yyyy-MM-dd')
  })
  const [eventos, setEventos] = useState<Evento[]>([])
  const [currentEvento, setCurrentEvento] = useState<Evento | null>(null)
  const [pensamientos, setPensamientos] = useState<Pensamiento[]>([])
  const [emociones, setEmociones] = useState<Emotion[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showMessage, setShowMessage] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  // Funciones de carga
  const loadPatients = useCallback(async () => {
    try {
      setIsLoading(true)
      const { data, error } = await supabase
        .from('pacientes')
        .select('*')
        .order('codigo')
      if (error) throw error
      if (data) setPatients(data)
    } catch (error) {
      console.error('Error cargando pacientes:', error)
      alert('Error al cargar la lista de pacientes')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const loadEmociones = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from('emociones_tipo')
        .select('*')
        .order('codigo')
      if (error) throw error
      if (data) setEmociones(data)
    } catch (error) {
      console.error('Error cargando emociones:', error)
    }
  }, [])

  const loadPensamientos = useCallback(async () => {
    if (!selectedPatient) return
    try {
      const { data, error } = await supabase
        .from('pensamientos')
        .select('*')
        .eq('paciente_id', selectedPatient.id)
        .order('codigo')
      if (error) throw error
      if (data) setPensamientos(data)
    } catch (error) {
      console.error('Error cargando pensamientos:', error)
    }
  }, [selectedPatient])

const loadEventos = useCallback(async () => {
  if (!selectedPatient || !selectedDate) return
  setIsLoading(true)
  try {
    // Convertir la fecha seleccionada a objeto Date en UTC
    const [year, month, day] = selectedDate.split('-').map(Number);
    
    // Inicio del día (00:00 hora Perú = 05:00 UTC)
    const startDate = new Date(Date.UTC(year, month - 1, day, 5, 0, 0));

    // Fin del día (23:59 hora Perú = 04:59:59 UTC del día siguiente)
    const endDate = new Date(Date.UTC(year, month - 1, day + 1, 4, 59, 59));

    const { data, error } = await supabase
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
      .gte('fecha_hora', startDate.toISOString())
      .lte('fecha_hora', endDate.toISOString())
      .order('fecha_hora', { ascending: false })

    if (error) throw error
    if (data) setEventos(data)
  } catch (error) {
    console.error('Error cargando eventos:', error)
    alert('Error al cargar eventos')
  } finally {
    setIsLoading(false)
  }
}, [selectedPatient, selectedDate])


  const handleOpenModal = async () => {
    try {
      await loadEmociones()
      
      // Obtener la fecha y hora actual en UTC
      const now = new Date()
      
      // Obtener el offset de Perú (UTC-5) en minutos
      const peruOffset = -5 * 60
      
      // Obtener el offset local del navegador en minutos
      const localOffset = now.getTimezoneOffset()
      
      // Calcular la diferencia total en milisegundos
      const offsetDiff = (localOffset + peruOffset) * 60 * 1000
      
      // Crear la fecha ajustada a hora peruana
      const peruDateTime = new Date(now.getTime() + offsetDiff)
      
      // Si hay una fecha seleccionada en el calendario, usar esa fecha pero con la hora actual
      if (selectedDate) {
        const [year, month, day] = selectedDate.split('-').map(Number)
        peruDateTime.setUTCFullYear(year)
        peruDateTime.setUTCMonth(month - 1) // Los meses en JavaScript son 0-based
        peruDateTime.setUTCDate(day)
      }
      
      setCurrentEvento({
        paciente_id: selectedPatient?.id || '',
        descripcion: '',
        fecha_hora: peruDateTime.toISOString(),
        eventos_pensamientos_emociones: [],
        lugar: '',
        contexto: ''
      })
      
      setIsModalOpen(true)
    } catch (error) {
      console.error('Error al abrir modal:', error)
      alert('Error al preparar el formulario')
    }
  }
  const handleSave = async () => {
    if (!currentEvento || !selectedPatient) return
    setIsSaving(true)
    try {
      // Validaciones
      if (!currentEvento.descripcion.trim()) {
        throw new Error('La descripción es requerida')
      }
      if (currentEvento.eventos_pensamientos_emociones.length === 0) {
        throw new Error('Debe agregar al menos un pensamiento y emoción')
      }

      // Ajustar la fecha sumando 5 horas antes de guardar
      const adjustedDateTime = new Date(currentEvento.fecha_hora);
      adjustedDateTime.setHours(adjustedDateTime.getHours() + 5);

      // Guardar evento
      const eventoResult = await supabase
        .from('eventos')
        .insert({
          paciente_id: selectedPatient.id,
          descripcion: currentEvento.descripcion.trim(),
          lugar: currentEvento.lugar?.trim() || '',
          contexto: currentEvento.contexto?.trim() || '',
          fecha_hora: adjustedDateTime.toISOString()  // Usamos la fecha ajustada
        })
        .select()
        .single()

      if (eventoResult.error) throw eventoResult.error

      // Resto del código...

      // Guardar relaciones y obtener sus datos
      const pePromises = currentEvento.eventos_pensamientos_emociones.map(pe => 
        supabase
          .from('eventos_pensamientos_emociones')
          .insert({
            evento_id: eventoResult.data.id,
            pensamiento_id: pe.pensamiento_id,
            emocion_id: pe.emocion_id,
            intensidad_emocion: pe.intensidad_emocion,
            observaciones: pe.observaciones?.trim() || ''
          })
          .select(`
            *,
            pensamientos (codigo, pensamiento),
            emociones_tipo (codigo, nombre)
          `)
          .single()
      )

      const peResults = await Promise.all(pePromises)
      
      // Verificar errores en las relaciones
      peResults.forEach(result => {
        if (result.error) throw result.error
      })

      // Construir el nuevo evento completo
      const nuevoEvento = {
        ...eventoResult.data,
        eventos_pensamientos_emociones: peResults.map(r => r.data)
      }

      // Actualizar el estado local de eventos
      setEventos(prev => [nuevoEvento, ...prev])

      setIsModalOpen(false)
      setCurrentEvento(null)
      setShowMessage(true)
      setTimeout(() => setShowMessage(false), 3000)

    } catch (error: any) {
      console.error('Error al guardar:', error)
      alert('Error al guardar el evento: ' + (error.message || 'Error desconocido'))
    } finally {
      setIsSaving(false)
    }
  }
  // Agregar esta función al inicio del componente
  const formatPeruDateTime = (dateString: string) => {
    const date = new Date(dateString)
    // Ajustar a hora peruana (UTC-5)
    const peruDate = new Date(date.getTime() + (-5 * 60 * 60 * 1000))
    return format(peruDate, 'dd/MM/yyyy HH:mm')
  }

  // Efectos
  useEffect(() => {
    loadPatients()
    loadEmociones()
  }, [loadPatients, loadEmociones])

  useEffect(() => {
    if (selectedPatient) {
      loadPensamientos()
      loadEventos()
    }
  }, [selectedPatient, selectedDate, loadPensamientos, loadEventos])

  // Validación del formulario
  const isFormValid = currentEvento && 
    currentEvento.descripcion.trim() && 
    currentEvento.eventos_pensamientos_emociones.length > 0 &&
    currentEvento.eventos_pensamientos_emociones.every(pe => 
      pe.pensamiento_id && 
      pe.emocion_id && 
      pe.intensidad_emocion >= 0 && 
      pe.intensidad_emocion <= 10
    )

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <div className="max-w-7xl mx-auto space-y-4">
        {/* Header Card */}
        <Card>
          <CardBody>
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
              <div className="flex flex-col md:flex-row items-center gap-3 w-full md:w-auto">
                <div className="flex items-center gap-3 w-full md:w-auto">
                  <Users className="w-6 h-6 text-primary" />
                  <Select
                    label="Seleccionar Paciente"
                    placeholder="Seleccione un paciente"
                    className="w-full md:w-80"
                    selectedKeys={selectedPatient ? [selectedPatient.id] : []}
                    onChange={(e) => {
                      const patient = patients.find(p => p.id === e.target.value)
                      setSelectedPatient(patient || null)
                    }}
                  >
                    {patients.map((patient) => (
                      <SelectItem key={patient.id} value={patient.id}>
                        {patient.codigo} - {patient.nombre}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
                <div className="flex items-center gap-3 w-full md:w-auto">
                  <Calendar className="w-6 h-6 text-primary" />
                  <Input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full md:w-48"
                  />
                </div>
              </div>
              <div className="flex gap-2 w-full md:w-auto">
                <Input
                  placeholder="Buscar eventos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  startContent={<Search className="w-4 h-4" />}
                  className="w-full md:w-60"
                />
                <Button
                  color="primary"
                  onClick={handleOpenModal}
                  isDisabled={!selectedPatient}
                  startContent={<Plus />}
                >
                  Nuevo
                </Button>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Lista de eventos */}
        <div className="grid gap-4">
          {isLoading ? (
            <Card>
              <CardBody>
                <div className="flex justify-center items-center h-24">
                  <Loader2 className="w-6 h-6 animate-spin text-primary" />
                </div>
              </CardBody>
            </Card>
          ) : eventos.length === 0 ? (
            <Card>
              <CardBody>
                <div className="flex justify-center items-center h-24">
                  <div className="text-gray-500">No hay eventos registrados para esta fecha</div>
                </div>
              </CardBody>
            </Card>
          ) : (
            eventos
              .filter(e => 
                e.descripcion.toLowerCase().includes(searchQuery.toLowerCase()) ||
                e.lugar?.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((evento) => (
                <Card key={evento.id} className="hover:shadow-lg transition-shadow">
                  <CardBody>
                    <div className="space-y-3">
                      <div className="flex justify-between items-start">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-primary" />
                            <span className="font-medium">
                              {format(
                                new Date(new Date(evento.fecha_hora).getTime() - (5 * 60 * 60 * 1000)), 
                                'dd/MM/yyyy HH:mm'
                              )}
                            </span>
                          </div>
                          {evento.lugar && (
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4 text-gray-500" />
                              <span>{evento.lugar}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="text-lg">{evento.descripcion}</div>
                      
                      {evento.contexto && (
                        <div className="text-gray-600 text-sm">{evento.contexto}</div>
                      )}
                      
                      <Divider />
                      
                      <div className="space-y-2">
                        {evento.eventos_pensamientos_emociones?.map((pe, index) => (
                          <div key={index} className="flex flex-col gap-2 p-2 bg-default-50 rounded-lg">
                            <div className="flex items-center gap-2">
                              <Brain className="w-4 h-4 text-primary" />
                              <span>{pe.pensamientos?.pensamiento}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Heart className="w-4 h-4 text-pink-500" />
                              <span>{pe.emociones_tipo?.nombre}</span>
                              <Chip size="sm" color="primary">
                                Intensidad: {pe.intensidad_emocion}/10
                              </Chip>
                            </div>
                            {pe.observaciones && (
                              <div className="text-sm text-gray-600 mt-1">
                                {pe.observaciones}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardBody>
                </Card>
              ))
          )}
        </div>
      </div>

      {/* Modal de Nuevo Evento */}
    <Modal 
      isOpen={isModalOpen} 
      onOpenChange={(open) => {
        setIsModalOpen(open);
        if (!open) setCurrentEvento(null);
      }}
      size={{
        sm: "full", // En móviles ocupará toda la pantalla
        md: "3xl"   // En tablets y desktop será más grande
      }}
      placement="center"
      scrollBehavior="inside"
      className="sm:mx-4 mx-2" // Agregar margen en móviles
      classNames={{
        base: "max-h-[95vh] sm:max-h-[90vh]", // Altura máxima responsiva
        wrapper: "sm:p-4 p-0",                 // Padding responsivo
        body: "p-3 sm:p-6 overflow-y-auto",    // Padding y scroll responsivo
        backdrop: "bg-black/50",
      }}
    >


 <ModalContent>
  {(onClose) => (
    <>
      <ModalHeader className="border-b px-6 py-4">
        <h3 className="text-lg font-semibold">Nuevo Evento</h3>
      </ModalHeader>  
  
  <ModalBody className="overflow-y-auto px-6 py-4 space-y-6">
    {/* Fecha y Hora */}
    <div className="space-y-2">
      <Input
        type="datetime-local"
        label="Fecha y Hora"
        value={currentEvento?.fecha_hora ? 
          format(new Date(currentEvento.fecha_hora), "yyyy-MM-dd'T'HH:mm")
          : ''
        }
        onChange={(e) => {
          if (!e.target.value) return;
          
          // Simplemente usar la fecha tal como viene del input
          const localDate = new Date(e.target.value)
          
          setCurrentEvento(prev => 
            prev ? {...prev, fecha_hora: localDate.toISOString()} : null
          )
        }}
        className="w-full"
      />
    </div>

    {/* Descripción */}
    <div className="space-y-2">
      <Textarea
        label="Descripción del Evento"
        placeholder="Describe lo que sucedió..."
        value={currentEvento?.descripcion || ''}
        onChange={(e) => setCurrentEvento(prev => 
          prev ? {...prev, descripcion: e.target.value} : null
        )}
        className="w-full min-h-[100px]"
      />
    </div>

    {/* Lugar */}
    <div className="space-y-2">
      <Input
        label="Lugar"
        placeholder="¿Dónde ocurrió?"
        value={currentEvento?.lugar || ''}
        onChange={(e) => setCurrentEvento(prev => 
          prev ? {...prev, lugar: e.target.value} : null
        )}
      />
    </div>

    {/* Contexto */}
    <div className="space-y-2">
      <Textarea
        label="Contexto"
        placeholder="Proporciona más detalles..."
        value={currentEvento?.contexto || ''}
        onChange={(e) => setCurrentEvento(prev => 
          prev ? {...prev, contexto: e.target.value} : null
        )}
        className="w-full min-h-[80px]"
      />
    </div>

    <Divider />

    {/* Sección de Pensamientos y Emociones */}
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h4 className="text-lg font-medium">Pensamientos y Emociones</h4>
        <Button
          size="sm"
          color="primary"
          startContent={<Plus className="w-4 h-4" />}
          onClick={() => setCurrentEvento(prev => {
            if (!prev) return null;
            return {
              ...prev,
              eventos_pensamientos_emociones: [
                ...prev.eventos_pensamientos_emociones,
                {
                  id: '',
                  evento_id: '',
                  pensamiento_id: '',
                  emocion_id: '',
                  intensidad_emocion: 5,
                  observaciones: ''
                }
              ]
            };
          })}
        >
          Agregar
        </Button>
      </div>

      {/* Lista de Pensamientos y Emociones */}
      <div className="space-y-4">
        {currentEvento?.eventos_pensamientos_emociones.map((pe, index) => (
          <Card key={index} className="w-full">
            <CardBody className="gap-4 p-4">
              <div className="flex justify-between items-center">
                <h5 className="font-medium">Registro {index + 1}</h5>
                <Button
                  isIconOnly
                  size="sm"
                  color="danger"
                  variant="light"
                  onClick={() => {
                    const newPE = [...currentEvento.eventos_pensamientos_emociones];
                    newPE.splice(index, 1);
                    setCurrentEvento(prev => 
                      prev ? {...prev, eventos_pensamientos_emociones: newPE} : null
                    );
                  }}
                >
                  <Trash2 size={18} />
                </Button>
              </div>

              <Select
                label="Pensamiento"
                selectedKeys={pe.pensamiento_id ? [pe.pensamiento_id] : []}
                onChange={(e) => {
                  const newPE = [...currentEvento.eventos_pensamientos_emociones];
                  newPE[index] = {...pe, pensamiento_id: e.target.value};
                  setCurrentEvento(prev => 
                    prev ? {...prev, eventos_pensamientos_emociones: newPE} : null
                  );
                }}
              >
                {pensamientos.map((p) => (
                  <SelectItem key={p.id} value={p.id}>
                    {p.codigo} - {p.pensamiento}
                  </SelectItem>
                ))}
              </Select>

              <Select
                label="Emoción"
                selectedKeys={pe.emocion_id ? [pe.emocion_id] : []}
                onChange={(e) => {
                  const newPE = [...currentEvento.eventos_pensamientos_emociones];
                  newPE[index] = {...pe, emocion_id: e.target.value};
                  setCurrentEvento(prev => 
                    prev ? {...prev, eventos_pensamientos_emociones: newPE} : null
                  );
                }}
              >
                {emociones.map((e) => (
                  <SelectItem key={e.id} value={e.id}>
                    {e.codigo} - {e.nombre}
                  </SelectItem>
                ))}
              </Select>

              <div className="space-y-2">
                <label className="block text-sm font-medium">
                  Intensidad ({pe.intensidad_emocion}/10)
                </label>
                <Slider
                  step={1}
                  maxValue={10}
                  minValue={0}
                  value={pe.intensidad_emocion}
                  onChange={(value) => {
                    const newPE = [...currentEvento.eventos_pensamientos_emociones];
                    newPE[index] = {...pe, intensidad_emocion: Number(value)};
                    setCurrentEvento(prev => 
                      prev ? {...prev, eventos_pensamientos_emociones: newPE} : null
                    );
                  }}
                  className="max-w-md"
                />
              </div>

              <Textarea
                label="Observaciones"
                placeholder="Notas adicionales..."
                value={pe.observaciones || ''}
                onChange={(e) => {
                  const newPE = [...currentEvento.eventos_pensamientos_emociones];
                  newPE[index] = {...pe, observaciones: e.target.value};
                  setCurrentEvento(prev => 
                    prev ? {...prev, eventos_pensamientos_emociones: newPE} : null
                  );
                }}
              />
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  </ModalBody>

    <ModalFooter className="border-t px-6 py-4">
        <Button 
          color="danger" 
          variant="light" 
          onPress={() => {
            onClose(); // Ahora usamos onClose desde el callback
            setIsModalOpen(false);
          }}
          className="mr-2"
        >
          Cancelar
        </Button>
        <Button 
          color="primary" 
          onPress={handleSave}
          isDisabled={!isFormValid || isSaving}
          isLoading={isSaving}
        >
          {isSaving ? 'Guardando...' : 'Guardar'}
        </Button>
      </ModalFooter>
    </>
  )}
</ModalContent>
</Modal>

      {/* Mensaje de éxito */}
      {showMessage && (
        <div className="fixed bottom-4 right-4 z-50 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded shadow-lg">
          Evento registrado correctamente
        </div>
      )}
    </div>
  );
};

export default RegistroEventos;