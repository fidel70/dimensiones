'use client'
import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import { ChevronUp, ChevronDown } from 'lucide-react'
import { supabase } from '@/lib/supabase'

// ... interfaces se mantienen igual ...

const ModernTracker = () => {
  // ... estados y funciones se mantienen igual ...

  return (
    <div className="min-h-screen bg-white p-2 sm:p-4">
      {/* Header más responsivo */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4 mb-4">
        <select 
          className="w-full sm:w-auto p-1 border rounded text-sm sm:text-base"
          onChange={(e) => {
            const patient = patients.find(p => p.id.toString() === e.target.value)
            setSelectedPatient(patient || null)
          }}
        >
          <option value="">Seleccionar Paciente</option>
          {patients.map(p => (
            <option key={p.id} value={p.id}>
              {p.codigo} - {p.nombre}
            </option>
          ))}
        </select>
        <span className="text-sm sm:text-base">
          {format(new Date(), 'dd/MM/yyyy')}
        </span>
      </div>

      {/* Grid responsivo con mejor manejo de alturas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Columna de Pensamientos */}
        <div className="h-[50vh] md:h-[calc(100vh-120px)] flex flex-col">
          <div className="flex justify-between items-center mb-2 p-2">
            <h2 className="text-base sm:text-lg">Pensamientos</h2>
            <div className="flex">
              <button 
                className="px-2 border"
                onClick={() => navigatePensamiento('up')}
                disabled={selectedIndex === 0}
              >
                <ChevronUp className="w-4 h-4" />
              </button>
              <button
                className="px-2 border"
                onClick={() => navigatePensamiento('down')}
                disabled={selectedIndex === pensamientos.length - 1}
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto border">
            {pensamientos.map((pensamiento, idx) => (
              <div
                key={pensamiento.id}
                onClick={() => {
                  setSelectedIndex(idx)
                  setSelectedPensamiento(pensamiento)
                }}
                className={`p-2 cursor-pointer border-b hover:bg-gray-100
                  ${idx === selectedIndex ? 'bg-gray-100' : ''}`}
              >
                <div className="font-medium text-sm sm:text-base">{pensamiento.codigo}</div>
                <div className="text-xs sm:text-sm">{pensamiento.pensamiento}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Columna de Dimensiones */}
        <div className="h-[50vh] md:h-[calc(100vh-120px)] overflow-y-auto">
          <h2 className="mb-4 text-base sm:text-lg">Dimensiones</h2>
          {selectedPensamiento ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-2 bg-gray-100">
                <div className="font-medium text-sm sm:text-base">{selectedPensamiento.codigo}</div>
                <div className="text-xs sm:text-sm">{selectedPensamiento.pensamiento}</div>
              </div>

              <div className="space-y-4">
                {/* Cantidad */}
                <div>
                  <label className="block text-xs sm:text-sm mb-1">
                    Cantidad de veces
                  </label>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      className="px-2 py-1 border text-sm sm:text-base"
                      onClick={() => cantidad > 0 && setCantidad(c => c - 1)}
                    >
                      -
                    </button>
                    <span className="w-8 text-center text-sm sm:text-base">
                      {cantidad}
                    </span>
                    <button
                      type="button"
                      className="px-2 py-1 border text-sm sm:text-base"
                      onClick={() => setCantidad(c => c + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Duración */}
                <div>
                  <label className="block text-xs sm:text-sm mb-1">
                    Duración (minutos)
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={duracion}
                    onChange={e => setDuracion(e.target.value)}
                    className="border p-1 w-full sm:w-32 text-sm"
                  />
                </div>

                {/* Intensidad */}
                <div>
                  <label className="block text-xs sm:text-sm mb-1">
                    Intensidad (0-10)
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="10"
                    value={intensidad}
                    onChange={e => setIntensidad(Number(e.target.value))}
                    className="w-full sm:w-32"
                  />
                  <span className="text-sm ml-2">{intensidad}</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-4 py-1 bg-blue-500 text-white rounded text-sm sm:text-base"
              >
                Guardar Dimensión
              </button>

              {/* Tabla de dimensiones responsiva */}
              {dimensions.length > 0 && (
                <div className="mt-4 overflow-x-auto">
                  <h3 className="mb-2 text-sm sm:text-base">Dimensiones registradas hoy</h3>
                  <table className="w-full border text-sm">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="p-2 text-left border-b">Cantidad</th>
                        <th className="p-2 text-left border-b">Duración</th>
                        <th className="p-2 text-left border-b">Intensidad</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dimensions.map(d => (
                        <tr key={d.id}>
                          <td className="p-2 border-b">{d.cantidad}</td>
                          <td className="p-2 border-b">{d.duracion || '-'}</td>
                          <td className="p-2 border-b">{d.intensidad}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </form>
          ) : (
            <div className="text-gray-500 text-center p-4 text-sm">
              Selecciona un pensamiento para registrar dimensiones
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ModernTracker