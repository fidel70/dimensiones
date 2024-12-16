# Correcciones de Zona Horaria en Componente RegistroEventos

## Problema Identificado
El componente RegistroEventos presentaba inconsistencias en el manejo de fechas y horas debido a problemas con la zona horaria de Perú (UTC-5). Los eventos se mostraban en días incorrectos y las horas se registraban con un desfase de 5 horas.

## Correcciones Implementadas

### 1. Ajuste del Estado Inicial de Fecha
```typescript
const [selectedDate, setSelectedDate] = useState(() => {
  const now = new Date()
  const peruOffset = -5 * 60
  const localOffset = now.getTimezoneOffset()
  const offsetDiff = (localOffset + peruOffset) * 60 * 1000
  const peruDate = new Date(now.getTime() + offsetDiff)
  return format(peruDate, 'yyyy-MM-dd')
})
```

### 2. Modificación de la Función loadEventos
```typescript
const loadEventos = useCallback(async () => {
  if (!selectedPatient || !selectedDate) return
  setIsLoading(true)
  try {
    const selectedDateObj = new Date(selectedDate)
    
    // Inicio del día en Perú (05:00 UTC)
    const startDate = new Date(Date.UTC(
      selectedDateObj.getFullYear(),
      selectedDateObj.getMonth(),
      selectedDateObj.getDate(),
      5,
      0,
      0,
      0
    ))

    // Fin del día en Perú (04:59:59:999 UTC del día siguiente)
    const endDate = new Date(Date.UTC(
      selectedDateObj.getFullYear(),
      selectedDateObj.getMonth(),
      selectedDateObj.getDate() + 1,
      4,
      59,
      59,
      999
    ))

    // Consulta a Supabase
    const { data, error } = await supabase
      .from('eventos')
      .select(`...`)
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
```

### 3. Ajuste del Input datetime-local
```typescript
<Input
  type="datetime-local"
  label="Fecha y Hora"
  value={currentEvento?.fecha_hora ? 
    format(new Date(currentEvento.fecha_hora), "yyyy-MM-dd'T'HH:mm")
    : ''
  }
  onChange={(e) => {
    if (!e.target.value) return;
    const localDate = new Date(e.target.value)
    setCurrentEvento(prev => 
      prev ? {...prev, fecha_hora: localDate.toISOString()} : null
    )
  }}
  className="w-full"
/>
```

## Dependencias Necesarias
- date-fns: Para el manejo y formateo de fechas

## Limpieza de Datos
Para limpiar los datos inconsistentes, se ejecutaron los siguientes comandos SQL:
```sql
DELETE FROM eventos_pensamientos_emociones;
DELETE FROM eventos;
```

## Puntos de Verificación
1. La fecha inicial debe mostrar correctamente la fecha actual en Perú
2. Los eventos deben aparecer en el día correcto (00:00 a 23:59 hora Perú)
3. Los eventos cercanos a la medianoche deben aparecer en el día correcto
4. La hora mostrada debe corresponder a la hora ingresada sin desfases

## Notas Adicionales
- Se eliminó la doble conversión de zona horaria que causaba el desfase de 5 horas
- Se mantiene consistencia en el manejo de UTC en la base de datos
- La interfaz de usuario siempre muestra las horas en formato Perú (UTC-5)

