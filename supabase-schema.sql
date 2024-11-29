-- Crear tabla de pacientes
create table pacientes (
  id uuid default uuid_generate_v4() primary key,
  codigo text unique not null,
  nombre text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Crear tabla de pensamientos
create table pensamientos (
  id uuid default uuid_generate_v4() primary key,
  codigo text unique not null,
  pensamiento text not null,
  paciente_id uuid references pacientes(id) not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Crear tabla de dimensiones
create table dimensiones (
  id uuid default uuid_generate_v4() primary key,
  pensamiento_id uuid references pensamientos(id) not null,
  fecha date not null,
  cantidad integer not null,
  duracion integer,
  intensidad integer not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Insertar un paciente de ejemplo
INSERT INTO pacientes (codigo, nombre) 
VALUES ('P001', 'Paciente Ejemplo');

-- Crear políticas de seguridad (RLS)
alter table pacientes enable row level security;
alter table pensamientos enable row level security;
alter table dimensiones enable row level security;

-- Crear políticas para lectura y escritura
create policy "Permitir lectura pública de pacientes"
  on pacientes for select
  to authenticated
  using (true);

create policy "Permitir lectura pública de pensamientos"
  on pensamientos for select
  to authenticated
  using (true);

create policy "Permitir lectura y escritura de dimensiones"
  on dimensiones for all
  to authenticated
  using (true);
