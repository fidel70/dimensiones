'use client'

import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const MainPage = () => {
  const [currentView, setCurrentView] = useState(null);

  const loadComponent = (component) => {
    setCurrentView(component);
  };

  const renderComponent = () => {
    if (!currentView) return null;

    const Component = dynamic(() => import(`./${currentView}`), {
      loading: () => <p className="text-center mt-4 text-black">Cargando componente...</p>
    });

    return <Component />;
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-blue-600 p-6">
        <div className="max-w-4xl mx-auto flex justify-center gap-6">
          <button 
            onClick={() => loadComponent('RegistroPensamientos')}
            className={`
              py-3 px-6 rounded-lg font-semibold text-lg
              ${currentView === 'RegistroPensamientos' 
                ? 'bg-green-500 text-white' 
                : 'bg-white text-blue-600 hover:bg-gray-100'
              }
              shadow-md
            `}
          >
            Registro de Pensamientos
          </button>
          <button 
            onClick={() => loadComponent('RegistroDimensiones')}
            className={`
              py-3 px-6 rounded-lg font-semibold text-lg
              ${currentView === 'RegistroDimensiones' 
                ? 'bg-green-500 text-white' 
                : 'bg-white text-blue-600 hover:bg-gray-100'
              }
              shadow-md
            `}
          >
            Registro de Dimensiones
          </button>
        </div>
      </header>

      <main className="container mx-auto p-6">
        {renderComponent()}
      </main>
    </div>
  );
};

export default MainPage;
