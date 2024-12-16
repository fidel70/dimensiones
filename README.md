# Proyecto de Registro de Pensamientos
## Aplicación para Psicología Clínica

### Descripción General
Este proyecto consiste en una aplicación web desarrollada para profesionales de la psicología, enfocada en el registro y seguimiento de pensamientos, emociones y eventos de pacientes. La aplicación está construida con tecnologías modernas y sigue las mejores prácticas de desarrollo.

### Stack Tecnológico
- **Frontend**:
  - Next.js 13+ (App Router)
  - React
  - TypeScript
  - TailwindCSS
  - NextUI (componentes de UI)
  - Lucide React (iconos)
- **Backend**:
  - Supabase (PostgreSQL)
  - Row Level Security (RLS)

### Estructura de la Base de Datos
Se han implementado las siguientes tablas principales:
1. `emociones_tipo`
   - Catálogo de emociones con códigos estandarizados
   - Incluye descripción y metadatos
   - Constraint para formato de código (E###)

2. `eventos`
   - Registro de eventos del paciente
   - Incluye fecha, hora, descripción, lugar y contexto
   - Vinculado a pacientes mediante FK

3. `eventos_pensamientos_emociones`
   - Tabla de relación para eventos, pensamientos y emociones
   - Incluye escala de intensidad (0-10)
   - Observaciones adicionales

### Características Implementadas
1. **Sistema de Autenticación**
   - Políticas RLS para seguridad de datos
   - Acceso controlado por usuario autenticado

2. **Interfaz de Usuario**
   - Diseño responsivo
   - Componentes modulares
   - Sistema de navegación intuitivo

3. **Gestión de Datos**
   - Filtrado por fecha
   - Búsqueda de eventos
   - Zona horaria adaptada a Perú (UTC-5)

4. **Registro de Eventos**
   - Formulario detallado para eventos
   - Múltiples pensamientos y emociones por evento
   - Escala de intensidad emocional
   - Sistema de observaciones

### Componentes Principales
1. **MainPage**
   - Componente principal de navegación
   - Sistema de carga dinámica de componentes

2. **RegistroEventos**
   - Gestión completa de eventos
   - Formularios modulares
   - Sistema de notificaciones

3. **Componentes Auxiliares**
   - HeaderControls
   - EventoCard
   - EventoForm

### Optimizaciones
1. **Base de Datos**
   - Índices optimizados
   - Triggers para actualización de timestamps
   - Constraints para integridad de datos

2. **Frontend**
   - Lazy loading de componentes
   - Gestión eficiente de estados
   - Validación de formularios

### Pendiente de Implementación
1. Registro de dimensiones adicionales
2. Sistema de reportes
3. Visualización de estadísticas
4. Exportación de datos
5. Sistema de backup

### Contribución
Para contribuir al proyecto:
1. Fork del repositorio
2. Crear rama para features
3. Seguir guías de estilo establecidas
4. Crear Pull Request con descripción detallada

### Equipo de Desarrollo
- Desarrolladores Full Stack
- Especialistas en UX/UI
- Consultores en Psicología Clínica

### Licencia
Pendiente de definir
