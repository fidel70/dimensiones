'use client'
import React, { useState, useEffect, useCallback } from 'react'
import { format } from 'date-fns'
import { 
  Calendar, 
  Clock, 
  Users, 
  Brain, 
  Heart, 
  MapPin, 
  Plus,
  Save,
  Search,
  Trash2
} from 'lucide-react'
import {
  Card,
  CardBody,
  CardHeader,
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
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Divider,
  Chip
} from "@nextui-org/react"
import { supabase } from '@/lib/supabase'

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
  id: string
  evento_id: string
  pensamiento_id: string
  emocion_id: string
  intensidad_emocion: number
  observaciones?: string
}

interface Evento {
  id?: string;
  paciente_id: string;
  descripcion: string;
  lugar?: string;
  contexto?: string;
  fecha_hora: string;
  eventos_pensamientos_emociones?: Array<{
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
  }>;
}

const RegistroEventos = () => {
  const [patients, setPatients] = useState<Patient[]>([])
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null)
  const [eventos, setEventos] = useState<Evento[]>([])
  const [currentEvento, setCurrentEvento] = useState<Evento | null>(null)
  const [pensamientos, setPensamientos] = useState<Pensamiento[]>([])
  const [emociones, setEmociones] = useState<Emotion[]>([])
  const [modalOpen, setModalOpen] = useState(false)
  const [showMessage, setShowMessage] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  // Cargar datos iniciales
  const loadPatients = useCallback(async () => {
    const { data } = await supabase
      .from('pacientes')
      .select('*')
      .order('codigo')
    if (data) setPatients(data)
  }, [])

  const loadEmociones = useCallback(async () => {
    const { data, error } = await supabase
      .from('emociones_tipo')
      .select('*')
      .order('codigo')
    
    if (error) {
      console.error('Error cargando emociones:', error)
      return
    }
    
    console.log('Emociones cargadas:', data) // Para debugging
    if (data) setEmociones(data)
  }, [])

  const loadPensamientos = useCallback(async () => {
    if (!selectedPatient) return
    const { data } = await supabase
      .from('pensamientos')
      .select('*')
      .eq('paciente_id', selectedPatient.id)
      .order('codigo')
    if (data) setPensamientos(data)
  }, [selectedPatient])

  const loadEventos = useCallback(async () => {
    if (!selectedPatient) return
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
      .order('fecha_hora', { ascending: false })
    if (data) setEventos(data)
  }, [selectedPatient])


const handleOpenModal = async () => {
  await loadEmociones();
  
  setCurrentEvento({
    paciente_id: selectedPatient?.id || '',
    descripcion: '',
    fecha_hora: new Date().toISOString(),
    eventos_pensamientos_emociones: [] // Cambiado aquí
  });
  setModalOpen(true);
}

  useEffect(() => {
    loadPatients()
    loadEmociones()
  }, [loadPatients, loadEmociones])

  useEffect(() => {
    if (selectedPatient) {
      loadPensamientos()
      loadEventos()
    }
  }, [selectedPatient, loadPensamientos, loadEventos])

  const handleSave = async () => {
  try {
    if (!currentEvento || !selectedPatient) return;

    const eventoResult = await supabase
      .from('eventos')
      .insert({
        paciente_id: selectedPatient.id,
        descripcion: currentEvento.descripcion,
        lugar: currentEvento.lugar || '',
        contexto: currentEvento.contexto || '',
        fecha_hora: currentEvento.fecha_hora
      })
      .select()
      .single();

    if (eventoResult.error) throw eventoResult.error;

    const nuevoEventoId = eventoResult.data.id;

    // Actualizado aquí
    for (const pe of currentEvento.eventos_pensamientos_emociones || []) {
      const relacionResult = await supabase
        .from('eventos_pensamientos_emociones')
        .insert({
          evento_id: nuevoEventoId,
          pensamiento_id: pe.pensamiento_id,
          emocion_id: pe.emocion_id,
          intensidad_emocion: pe.intensidad_emocion,
          observaciones: pe.observaciones || ''
        });

      if (relacionResult.error) throw relacionResult.error;
    }

    setModalOpen(false);
    setCurrentEvento(null);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
    await loadEventos();

  } catch (error: any) {
    console.error('Error detallado:', error);
    alert('Error al guardar el evento: ' + (error.message || 'Error desconocido'));
  }
};
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <div className="max-w-7xl mx-auto space-y-4">
        {/* Header con selección de paciente y búsqueda */}
        <Card>
          <CardBody>
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
              <div className="flex items-center gap-3">
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
              <div className="flex gap-2">
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
                  Nuevo Evento
                </Button>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Lista de eventos */}
        <div className="grid gap-4">
          {eventos
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
                            {format(new Date(evento.fecha_hora), 'dd/MM/yyyy HH:mm')}
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
                        </div>
                      ))}
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
        </div>
      </div>

      {/* Modal para nuevo evento */}
      <Modal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)}
        size="3xl"
      >
        <ModalContent>
          <ModalHeader>Nuevo Evento</ModalHeader>
          <ModalBody>
            <div className="space-y-4">
              <div className="flex gap-4">
                <Input
                  type="datetime-local"
                  label="Fecha y Hora"
                  value={currentEvento?.fecha_hora.slice(0, 16)}
                  onChange={(e) => setCurrentEvento(prev => 
                    prev ? {...prev, fecha_hora: e.target.value} : null
                  )}
                />
              </div>

              <Textarea
                label="Descripción del Evento"
                placeholder="Describe lo que sucedió..."
                value={currentEvento?.descripcion || ''}
                onChange={(e) => setCurrentEvento(prev => 
                  prev ? {...prev, descripcion: e.target.value} : null
                )}
              />

              <Input
                label="Lugar"
                placeholder="¿Dónde ocurrió?"
                value={currentEvento?.lugar || ''}
                onChange={(e) => setCurrentEvento(prev => 
                  prev ? {...prev, lugar: e.target.value} : null
                )}
              />

              <Textarea
                label="Contexto"
                placeholder="Proporciona más detalles sobre la situación..."
                value={currentEvento?.contexto || ''}
                onChange={(e) => setCurrentEvento(prev => 
                  prev ? {...prev, contexto: e.target.value} : null
                )}
              />

              <Divider />

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">Pensamientos y Emociones</h3>
                  <Button
                    size="sm"
                    color="primary"
                    startContent={<Plus />}
                    onClick={() => setCurrentEvento(prev => {
                      if (!prev) return null;
                      return {
                        ...prev,
                        eventos_pensamientos_emociones: [ // Cambiado aquí
                          ...prev.eventos_pensamientos_emociones, // Y aquí
                          {
                            id: '',
                            evento_id: '',
                            pensamiento_id: '',
                            emocion_id: '',
                            intensidad_emocion: 5
                          }
                        ]
                      }
                    })}
                  >
                    Agregar
                  </Button>
                </div>

                {currentEvento?.eventos_pensamientos_emociones.map((pe, index) => (
                  <Card key={index}>
                    <CardBody className="space-y-4">
                      <div className="flex justify-between">
                        <h4 className="font-medium">Registro {index + 1}</h4>
                        <Button
                          isIconOnly
                          size="sm"
                          color="danger"
                          variant="light"
                          onClick={() => setCurrentEvento(prev => {
                            if (!prev) return null
                            const newPE = [...prev.eventos_pensamientos_emociones]
                            newPE.splice(index, 1)
                            return {...prev, eventos_pensamientos_emociones: newPE}
                          })}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>

                      <Select
                        label="Pensamiento"
                        selectedKeys={pe.pensamiento_id ? [pe.pensamiento_id] : []}
                        onChange={(e) => {
                          const newPE = [...currentEvento.eventos_pensamientos_emociones]
                          newPE[index] = {...pe, pensamiento_id: e.target.value}
                          setCurrentEvento(prev => 
                            prev ? {...prev, eventos_pensamientos_emociones: newPE} : null
                          )
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
                          const newPE = [...currentEvento.eventos_pensamientos_emociones]
                          newPE[index] = {...pe, emocion_id: e.target.value}
                          setCurrentEvento(prev => 
                            prev ? {...prev, eventos_pensamientos_emociones: newPE} : null
                          )
                        }}
                      >
                        {console.log('Estado actual de emociones:', emociones)} {/* Para debugging */}
                        {emociones.map((e) => (
                          <SelectItem key={e.id} value={e.id}>
                            {e.codigo} - {e.nombre}
                          </SelectItem>
                        ))}
                      </Select>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Intensidad de la Emoción ({pe.intensidad_emocion}/10)
                        </label>
                        <Slider
                          size="sm"
                          step={1}
                          maxValue={10}
                          minValue={0}
                          value={pe.intensidad_emocion}
                          onChange={(value) => {
                            const newPE = [...currentEvento.eventos_pensamientos_emociones]
                            newPE[index] = {...pe, intensidad_emocion: Number(value)}
                            setCurrentEvento(prev => 
                              prev ? {...prev, eventos_pensamientos_emociones: newPE} : null
                            )
                          }}
                          className="max-w-md"
                        />
                      </div>

                      <Textarea
                        label="Observaciones"
                        placeholder="Notas adicionales..."
                        value={pe.observaciones || ''}
                        onChange={(e) => {
                          const newPE = [...currentEvento.eventos_pensamientos_emociones]
                          newPE[index] = {...pe, observaciones: e.target.value}
                          setCurrentEvento(prev => 
                            prev ? {...prev, eventos_pensamientos_emociones: newPE} : null
                          )
                        }}
                      />
                    </CardBody>
                  </Card>
                ))}
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onClick={() => setModalOpen(false)}>
              Cancelar
            </Button>
            <Button 
              color="primary" 
              onClick={handleSave}
              startContent={<Save />}
              isDisabled={
                !currentEvento?.descripcion ||
                !currentEvento?.fecha_hora ||
                currentEvento.eventos_pensamientos_emociones.length === 0 ||
                currentEvento.eventos_pensamientos_emociones.some(pe => 
                  !pe.pensamiento_id || !pe.emocion_id
                )
              }
            >
              Guardar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Mensaje de éxito */}
      {showMessage && (
        <div className="fixed bottom-4 right-4 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded shadow-lg">
          Evento registrado correctamente
        </div>
      )}
    </div>
  )
}

export default RegistroEventos

