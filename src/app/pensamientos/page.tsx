'use client'
import React, { useState, useEffect, useCallback } from 'react'
import { Trash2, Edit2, Plus, Search } from 'lucide-react'
import { 
  Card, 
  CardBody, 
  Button, 
  Input, 
  Select, 
  SelectItem,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Textarea
} from "@nextui-org/react"
import { supabase } from '@/lib/supabase'

interface Patient {
  id: number
  codigo: string
  nombre: string
}

interface Thought {
  id?: number
  codigo: string
  pensamiento: string
  paciente_id: number
}

export default function RegistroPensamientos() {
  const [patients, setPatients] = useState<Patient[]>([])
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null)
  const [thoughts, setThoughts] = useState<Thought[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [modalOpen, setModalOpen] = useState(false)
  const [currentThought, setCurrentThought] = useState<Thought | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  const loadPatients = useCallback(async () => {
    const { data } = await supabase
      .from('pacientes')
      .select('*')
      .order('codigo')
    if (data) setPatients(data)
  }, [])

  const loadThoughts = useCallback(async () => {
    if (!selectedPatient) return
    const { data } = await supabase
      .from('pensamientos')
      .select('*')
      .eq('paciente_id', selectedPatient.id)
      .order('codigo')
    if (data) setThoughts(data)
  }, [selectedPatient])

  const handleOpenNewModal = () => {
    if (!selectedPatient) return
    setIsEditing(false)
    setCurrentThought({
      codigo: '',
      pensamiento: '',
      paciente_id: selectedPatient.id
    })
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
    setTimeout(() => {
      setCurrentThought(null)
    }, 200)
  }

  const showSuccess = () => {
    setShowSuccessMessage(true)
    setTimeout(() => setShowSuccessMessage(false), 3000)
  }

  const handleSave = async () => {
    if (!selectedPatient || !currentThought?.codigo || !currentThought?.pensamiento) return

    try {
      if (isEditing && currentThought.id) {
        await supabase
          .from('pensamientos')
          .update({
            codigo: currentThought.codigo,
            pensamiento: currentThought.pensamiento
          })
          .eq('id', currentThought.id)
      } else {
        await supabase
          .from('pensamientos')
          .insert({
            codigo: currentThought.codigo,
            pensamiento: currentThought.pensamiento,
            paciente_id: selectedPatient.id
          })
      }

      handleCloseModal()
      await loadThoughts()
      showSuccess()
    } catch (error) {
      console.error('Error al guardar:', error)
    }
  }

  const handleDelete = async () => {
    if (!currentThought?.id) return
    
    try {
      await supabase
        .from('pensamientos')
        .delete()
        .eq('id', currentThought.id)
      
      setDeleteConfirmOpen(false)
      setCurrentThought(null)
      await loadThoughts()
      showSuccess()
    } catch (error) {
      console.error('Error al eliminar:', error)
    }
  }

  useEffect(() => {
    loadPatients()
  }, [loadPatients])

  useEffect(() => {
    if (selectedPatient) loadThoughts()
  }, [selectedPatient, loadThoughts])

  const filteredThoughts = thoughts.filter(t => 
    t.codigo.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.pensamiento.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <div className="max-w-7xl mx-auto space-y-4">
        {/* Header con controles */}
        <Card className="mb-4">
          <CardBody>
            <div className="flex flex-col gap-4">
              <Select
                label="Seleccionar Paciente"
                placeholder="Seleccione un paciente"
                className="w-full"
                selectedKeys={selectedPatient ? [selectedPatient.id.toString()] : []}
                onChange={(e) => {
                  const patient = patients.find(p => p.id.toString() === e.target.value)
                  setSelectedPatient(patient || null)
                }}
              >
                {patients.map((patient) => (
                  <SelectItem key={patient.id.toString()} value={patient.id.toString()}>
                    {patient.codigo} - {patient.nombre}
                  </SelectItem>
                ))}
              </Select>
              <div className="flex flex-col sm:flex-row gap-2">
                <Input
                  placeholder="Buscar pensamientos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  startContent={<Search className="w-4 h-4" />}
                  className="w-full"
                />
                <Button
                  color="primary"
                  onPress={handleOpenNewModal}
                  isDisabled={!selectedPatient}
                  startContent={<Plus />}
                  className="w-full sm:w-auto"
                >
                  Nuevo
                </Button>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Lista de pensamientos */}
        <div className="grid grid-cols-1 gap-4">
          {filteredThoughts.map((thought) => (
            <Card key={thought.id} className="hover:shadow-lg transition-shadow">
              <CardBody>
                <div className="flex flex-col sm:flex-row justify-between gap-4">
                  <div className="flex-grow">
                    <div className="font-medium text-primary">{thought.codigo}</div>
                    <div className="mt-2 text-default-600">{thought.pensamiento}</div>
                  </div>
                  <div className="flex gap-2 justify-end">
                    <Button
                      isIconOnly
                      variant="light"
                      onPress={() => {
                        setIsEditing(true)
                        setCurrentThought(thought)
                        setModalOpen(true)
                      }}
                    >
                      <Edit2 className="w-4 h-4" />
                    </Button>
                    <Button
                      isIconOnly
                      variant="light"
                      color="danger"
                      onPress={() => {
                        setCurrentThought(thought)
                        setDeleteConfirmOpen(true)
                      }}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        <Modal
          isOpen={modalOpen}
          onOpenChange={(open) => {
            setModalOpen(open);
            if (!open) setCurrentThought(null);
          }}
          placement="center"
          backdrop="opaque"
          scrollBehavior="inside"
          classNames={{
            backdrop: "bg-black/50",
            wrapper: "z-[9999999]",
            base: "border-none w-[95vw] sm:w-[500px] md:w-[600px] lg:w-[700px] xl:w-[800px] max-h-[90vh]",
            body: "p-6 min-h-[300px]",
            header: "border-b-[1px] border-gray-200",
            footer: "border-t-[1px] border-gray-200"
          }}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader>
                  {isEditing ? 'Editar Pensamiento' : 'Nuevo Pensamiento'}
                </ModalHeader>
                <ModalBody>
                  <Input
                    label="Código"
                    placeholder="Ingrese el código"
                    value={currentThought?.codigo || ''}
                    onChange={(e) => setCurrentThought(prev => 
                      prev ? {...prev, codigo: e.target.value} : null
                    )}
                    className="w-full"
                  />
                  <Textarea
                    label="Pensamiento"
                    placeholder="Ingrese el pensamiento"
                    value={currentThought?.pensamiento || ''}
                    onChange={(e) => setCurrentThought(prev => 
                      prev ? {...prev, pensamiento: e.target.value} : null
                    )}
                    minRows={8}
                    maxRows={12}
                    className="w-full"
                  />
                </ModalBody>
                <ModalFooter>
                  <Button 
                    color="primary"
                    onPress={handleSave}
                    isDisabled={!currentThought?.codigo || !currentThought?.pensamiento}
                  >
                    Guardar
                  </Button>
                  <Button 
                    variant="light"
                    onPress={onClose}
                  >
                    Cancelar
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>

        {/* Modal de confirmación de eliminación */}
        <Modal 
          isOpen={deleteConfirmOpen} 
          onOpenChange={setDeleteConfirmOpen}
          placement="center"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader>Confirmar Eliminación</ModalHeader>
                <ModalBody>
                  ¿Está seguro que desea eliminar este pensamiento?
                </ModalBody>
                <ModalFooter>
                  <Button 
                    color="danger"
                    onPress={handleDelete}
                  >
                    Eliminar
                  </Button>
                  <Button 
                    variant="light"
                    onPress={onClose}
                  >
                    Cancelar
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>

        {/* Mensaje de éxito */}
        {showSuccessMessage && (
          <div className="fixed bottom-4 right-4 left-4 md:left-auto bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded shadow-lg">
            Operación realizada con éxito
          </div>
        )}
      </div>
    </div>
  )
}