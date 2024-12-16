// Reemplaza solo la sección del Modal en tu componente con este código:

<Modal 
  isOpen={modalOpen} 
  onClose={handleCloseModal}
  placement="auto"
  classNames={{
    base: "max-h-screen",
    backdrop: "backdrop-blur-sm backdrop-opacity-50",
    wrapper: "items-center"
  }}
>
  <ModalContent>
    <ModalHeader className="flex flex-col gap-1">
      {isEditing ? 'Editar Pensamiento' : 'Nuevo Pensamiento'}
    </ModalHeader>
    <ModalBody>
      <div className="space-y-4">
        <Input
          label="Código"
          value={currentThought?.codigo || ''}
          onChange={(e) => setCurrentThought(prev => 
            prev ? {...prev, codigo: e.target.value} : null
          )}
        />
        <Input
          label="Pensamiento"
          value={currentThought?.pensamiento || ''}
          onChange={(e) => setCurrentThought(prev => 
            prev ? {...prev, pensamiento: e.target.value} : null
          )}
        />
      </div>
    </ModalBody>
    <ModalFooter>
      <Button color="danger" variant="light" onClick={handleCloseModal}>
        Cancelar
      </Button>
      <Button 
        color="primary" 
        onClick={handleSave}
        startContent={<Save />}
      >
        Guardar
      </Button>
    </ModalFooter>
  </ModalContent>
</Modal>
