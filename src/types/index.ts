export interface Paciente {
  id: number;
  codigo: string;
  nombre: string;
}

export interface Pensamiento {
  id: number;
  codigo: string;
  pensamiento: string;
  paciente_id: number;
}

export interface Dimension {
  id: number;
  pensamiento_id: number;
  fecha: string;
  cantidad: number;
  duracion: number | null;
  intensidad: number;
}// Add your types here 
