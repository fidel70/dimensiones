'use client'
import React, { useState, useEffect, useCallback } from 'react'
import { format, startOfDay, endOfDay } from 'date-fns'
import { 
  Calendar, 
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
  Select,
  SelectItem,
  Button,
  Input,
  Textarea,
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Slider,
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
  const [patients, setPatients] = useState<Patient[]>([])
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null)
  const [selectedDate, setSelectedDate] = useState(format(new Date(), 'yyyy-MM-dd'))
  const [eventos, setEventos] = useState<Evento[]>([])
  const [currentEvento, setCurrentEvento] = useState<Evento | null>(null)
  const [pensamientos, setPensamientos] = useState<Pensamiento[]>([])
  const [emociones, setEmociones] = useState<Emotion[]>([])
  const [modalOpen, setModalOpen] = useState(false)
  const [showMessage, setShowMessage] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

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
  if (!selectedPatient || !selectedDate) return
  
  const date = new Date(selectedDate)
  // Establecer hora a 00:00:00
  const startOfDayPeru = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0)
  // Establecer hora a 23:59:59
  const endOfDayPeru = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59)
  
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
    .gte('fecha_hora', startOfDayPeru.toISOString())
    .lte('fecha_hora', endOfDayPeru.toISOString())
    .order('fecha_hora', { ascending: false })
  
  if (data) setEventos(data)
}, [selectedPatient, selectedDate])

const handleOpenModal = async () => {
  await loadEmociones()
  
  const now = new Date()
  const peruTime = new Date(now.getTime() + (5 * 60 * 60 * 1000))
  
  setCurrentEvento({
    paciente_id: selectedPatient?.id || '',
    descripcion: '',
    fecha_hora: peruTime.toISOString(),
    eventos_pensamientos_emociones: []
  })
  setModalOpen(true)
}
  const handleSave = async () => {
  try {
    if (!currentEvento || !selectedPatient) {
      throw new Error('Faltan datos requeridos');
    }

    if (!currentEvento.descripcion.trim()) {
      throw new Error('La descripción es requerida');
    }

    if (currentEvento.eventos_pensamientos_emociones.length === 0) {
      throw new Error('Debe agregar al menos un pensamiento y emoción');
    }

    const eventoResult = await supabase
      .from('eventos')
      .insert({
        paciente_id: selectedPatient.id,
        descripcion: currentEvento.descripcion.trim(),
        lugar: currentEvento.lugar?.trim() || '',
        contexto: currentEvento.contexto?.trim() || '',
        fecha_hora: currentEvento.fecha_hora
      })
      .select()
      .single();

    if (eventoResult.error) {
      throw new Error(`Error al guardar el evento: ${eventoResult.error.message}`);
    }

    // Guardar las relaciones pensamiento-emoción
    for (const pe of currentEvento.eventos_pensamientos_emociones) {
      const relacionResult = await supabase
        .from('eventos_pensamientos_emociones')
        .insert({
          evento_id: eventoResult.data.id,
          pensamiento_id: pe.pensamiento_id,
          emocion_id: pe.emocion_id,
          intensidad_emocion: pe.intensidad_emocion,
          observaciones: pe.observaciones || ''
        });

      if (relacionResult.error) {
        throw new Error(`Error al guardar la relación: ${relacionResult.error.message}`);
      }
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
  }, [selectedPatient, selectedDate, loadPensamientos, loadEventos])


    const isFormValid = currentEvento && 
    currentEvento.descripcion.trim() && 
    currentEvento.eventos_pensamientos_emociones.length > 0 &&
    currentEvento.eventos_pensamientos_emociones.every(pe => 
      pe.pensamiento_id && 
      pe.emocion_id && 
      pe.intensidad_emocion >= 0 && 
      pe.intensidad_emocion <= 10
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <div className="max-w-7xl mx-auto space-y-4">
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

      <Modal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)}
        size="3xl"
        scrollBehavior="inside"
        backdrop="blur"
        placement="center"
      >
      <ModalContent className="mx-2 w-full max-w-[95vw] sm:max-w-3xl h-[90vh] sm:h-auto">
          <ModalBody className="overflow-y-auto">
            <div className="space-y-4">
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

                {currentEvento?.eventos_pensamientos_emociones.map((pe, index) => (
                  <Card key={index} className="w-full">
                    <CardBody className="space-y-4 p-3 sm:p-4">
                      <div className="flex justify-between">
                        <h4 className="font-medium">Registro {index + 1}</h4>
                        <Button
                          isIconOnly
                          size="sm"
                          color="danger"
                          variant="light"
                          onClick={() => setCurrentEvento(prev => {
                            if (!prev) return null;
                            const newPE = [...prev.eventos_pensamientos_emociones];
                            newPE.splice(index, 1);
                            return {...prev, eventos_pensamientos_emociones: newPE};
                          })}
                        >
                          <Trash2 className="w-4 h-4" />
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
                        placeholder="Seleccione una emoción"
                        selectedKeys={pe.emocion_id ? [pe.emocion_id] : []}
                        onChange={(e) => {
                          if (!currentEvento) return;
                          const newPE = [...currentEvento.eventos_pensamientos_emociones];
                          newPE[index] = {...pe, emocion_id: e.target.value};
                          setCurrentEvento({
                            ...currentEvento,
                            eventos_pensamientos_emociones: newPE
                          });
                        }}
                        isRequired
                      >
                        {emociones && emociones.length > 0 ? (
                          emociones.map((e) => (
                            <SelectItem key={e.id} value={e.id}>
                              {e.codigo} - {e.nombre}
                            </SelectItem>
                          ))
                        ) : (
                          <SelectItem key="no-emociones" value="">
                            No hay emociones disponibles
                          </SelectItem>
                        )}
                      </Select>

                      <div className="w-full max-w-full sm:max-w-md">
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
                            const newPE = [...currentEvento.eventos_pensamientos_emociones];
                            newPE[index] = {...pe, intensidad_emocion: Number(value)};
                            setCurrentEvento(prev => 
                              prev ? {...prev, eventos_pensamientos_emociones: newPE} : null
                            );
                          }}
                          className="max-w-full"
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
          <ModalFooter className="flex flex-col sm:flex-row gap-2">
            <Button 
              color="danger" 
              variant="light" 
              onClick={() => setModalOpen(false)}
              className="w-full sm:w-auto"
            >
              Cancelar
            </Button>
          <Button 
          color="primary" 
          onClick={handleSave}
          startContent={<Save />}
          className="w-full sm:w-auto"
          isDisabled={!isFormValid}  // <-- Aquí usas la nueva validación
          >
          Guardar
        </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {showMessage && (
        <div className="fixed bottom-4 right-4 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded shadow-lg">
          Evento registrado correctamente
        </div>
      )}
    </div>
  );
};

export default RegistroEventos;