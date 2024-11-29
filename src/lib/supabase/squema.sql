create table pacientes (
  id serial primary key,
  codigo varchar(10) unique not null,
  nombre varchar(100) not null
);

create table pensamientos (
  id serial primary key,
  codigo varchar(20) not null,
  pensamiento text not null,
  paciente_id integer references pacientes(id)
);

create table dimensiones (
  id serial primary key,
  pensamiento_id integer references pensamientos(id),
  fecha date not null,
  cantidad integer not null,
  duracion integer,
  intensidad integer not null,
  created_at timestamp with time zone default now()
);