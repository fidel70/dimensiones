'use client'
<<<<<<< HEAD
import React, { useState, useEffect, useCallback } from 'react'
import { Trash2, Edit2, Plus, Save, Search } from 'lucide-react'
=======
import React, { useState, useEffect } from 'react'
import { Trash2, Edit2, Plus, Save, X, Search } from 'lucide-react'
>>>>>>> 4b58dbef3f4107952cf85d18eb66f380d8ae346c
import { Card, CardBody, Button, Input, Select, SelectItem, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react"
import { supabase } from '@/lib/supabase'

interface Patient {
  id: number  // Cambiado a solo number
  codigo: string
  nombre: string
}

interface Thought {
  id?: number
  codigo: string
  pensamiento: string
  paciente_id: number
}

const RegistroPensamientos = () => {
  const [patients, setPatients] = useState<Patient[]>([])
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null)
  const [thoughts, setThoughts] = useState<Thought[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [modalOpen, setModalOpen] = useState(false)
  const [currentThought, setCurrentThought] = useState<Thought | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)

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

  const handleSave = async () => {
    if (!selectedPatient || !currentThought?.codigo || !currentThought?.pensamiento) return

    if (isEditing && currentThought.id) {
      await supabase
        .from('pensamientos')
        .update({
          codigo: currentThought.codigo,
          pensamiento: currentThought.pensamiento
        })
        .eq('id', currentThought.id)
    } else {
      await supabase.from('pensamientos').insert({
        ...currentThought,
        paciente_id: selectedPatient.id
      })
    }

    setModalOpen(false)
    setCurrentThought(null)
    loadThoughts()
  }

  const handleDelete = async () => {
    if (!currentThought?.id) return
    
    await supabase
      .from('pensamientos')
      .delete()
      .eq('id', currentThought.id)
    
    setDeleteModal(false)
    setCurrentThought(null)
    loadThoughts()
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

  // El resto del código del return se mantiene igual...

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <div className="max-w-7xl mx-auto space-y-4">
        <Card className="mb-4">
          <CardBody>
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
              <Select
                label="Seleccionar Paciente"
                placeholder="Seleccione un paciente"
                className="w-full md:w-80"
                value={selectedPatient?.id?.toString()}
                onChange={(e) => {
                  const patient = patients.find(p => p.id?.toString() === e.target.value)
                  setSelectedPatient(patient || null)
                }}
              >
                {patients.map((patient) => (
                  <SelectItem key={patient.id} value={patient.id}>
                    {patient.codigo} - {patient.nombre}
                  </SelectItem>
                ))}
              </Select>
              <div className="flex gap-2 w-full md:w-auto">
                <Input
                  placeholder="Buscar pensamientos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  startContent={<Search className="w-4 h-4" />}
                  className="w-full md:w-60"
                />
                <Button
                  color="primary"
                  onClick={() => {
                    setIsEditing(false)
                    setCurrentThought({ codigo: '', pensamiento: '', paciente_id: selectedPatient?.id || 0 })
                    setModalOpen(true)
                  }}
                  isDisabled={!selectedPatient}
                  startContent={<Plus />}
                >
                  Nuevo
                </Button>
              </div>
            </div>
          </CardBody>
        </Card>

        <div className="grid grid-cols-1 gap-4">
          {filteredThoughts.map((thought) => (
            <Card key={thought.id} className="hover:shadow-lg transition-shadow">
              <CardBody>
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div className="flex-grow">
                    <div className="font-medium text-primary">{thought.codigo}</div>
                    <div className="mt-2 text-default-600">{thought.pensamiento}</div>
                  </div>
                  <div className="flex gap-2 items-start">
                    <Button
                      isIconOnly
                      variant="light"
                      onClick={() => {
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
                      onClick={() => {
                        setCurrentThought(thought)
                        setDeleteModal(true)
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
      </div>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <ModalContent>
          <ModalHeader>{isEditing ? 'Editar Pensamiento' : 'Nuevo Pensamiento'}</ModalHeader>
          <ModalBody>
            <div className="space-y-4">
              <Input
                label="Código"
                value={currentThought?.codigo || ''}
                onChange={(e) => setCurrentThought(prev => prev ? {...prev, codigo: e.target.value} : null)}
              />
              <Input
                label="Pensamiento"
                value={currentThought?.pensamiento || ''}
                onChange={(e) => setCurrentThought(prev => prev ? {...prev, pensamiento: e.target.value} : null)}
              />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onClick={() => setModalOpen(false)}>
              Cancelar
            </Button>
            <Button color="primary" onClick={handleSave} startContent={<Save />}>
              Guardar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal isOpen={deleteModal} onClose={() => setDeleteModal(false)}>
        <ModalContent>
          <ModalHeader>Confirmar Eliminación</ModalHeader>
          <ModalBody>
            ¿Está seguro que desea eliminar este pensamiento?
          </ModalBody>
          <ModalFooter>
            <Button color="default" variant="light" onClick={() => setDeleteModal(false)}>
              Cancelar
            </Button>
            <Button color="danger" onClick={handleDelete} startContent={<Trash2 />}>
              Eliminar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}


export default RegistroPensamientos
