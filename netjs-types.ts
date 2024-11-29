// types/index.ts
export interface Paciente {
  id: string;
  codigo: string;
  nombre: string;
}

export interface Pensamiento {
  id: string;
  codigo: string;
  pensamiento: string;
  paciente_id: string;
}

export interface Dimension {
  id: string;
  pensamiento_id: string;
  fecha: string;
  cantidad: number;
  duracion: number | null;
  intensidad: number;
}

// utils/dateUtils.ts
export const formatDate = (date: Date): string => {
  return date.toISOString().split('T')[0];
};

export const parseDate = (dateStr: string): Date => {
  return new Date(dateStr);
};
