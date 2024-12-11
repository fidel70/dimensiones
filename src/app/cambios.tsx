// Primero definimos todas las funciones con useCallback
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

// ... resto de las funciones ...

// Luego los useEffect
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