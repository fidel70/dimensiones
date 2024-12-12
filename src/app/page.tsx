'use client'

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { Button, Divider } from "@nextui-org/react";
import { Menu, X, BookText, Box, Calendar } from "lucide-react";

type ComponentName = 'RegistroPensamientos' | 'RegistroDimensiones' | 'RegistroEventos';

const MainPage = () => {
  const [currentView, setCurrentView] = useState<ComponentName | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const loadComponent = (component: ComponentName) => {
    setCurrentView(component);
    setIsOpen(false);
  };

  const renderComponent = () => {
    if (!currentView) return null;

    const Component = dynamic(() => import(`./${currentView}`), {
      loading: () => <p className="text-center mt-4 text-black">Cargando componente...</p>
    });

    return <Component />;
  };

  return (
    <div className="min-h-screen bg-white relative">
      {/* Header */}
      <header className="bg-blue-600 p-4 flex justify-between items-center">
        <h1 className="text-white text-xl font-semibold">Registro Psicológico</h1>
        <Button
          isIconOnly
          variant="light"
          aria-label="Menu"
          className="text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </header>

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 right-0 h-full w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="p-4 h-full flex flex-col">
          <div className="flex justify-end mb-4">
            <Button
              isIconOnly
              variant="light"
              onClick={() => setIsOpen(false)}
            >
              <X size={24} />
            </Button>
          </div>
          
          <Divider className="my-4" />
          
          <nav className="flex flex-col gap-2">
            <Button
              variant="light"
              className={`justify-start ${currentView === 'RegistroPensamientos' ? 'bg-blue-100' : ''}`}
              onClick={() => loadComponent('RegistroPensamientos')}
              startContent={<BookText size={20} />}
            >
              Registro de Pensamientos
            </Button>
            
            <Button
              variant="light"
              className={`justify-start ${currentView === 'RegistroDimensiones' ? 'bg-blue-100' : ''}`}
              onClick={() => loadComponent('RegistroDimensiones')}
              startContent={<Box size={20} />}
            >
              Registro de Dimensiones
            </Button>
            
            <Button
              variant="light"
              className={`justify-start ${currentView === 'RegistroEventos' ? 'bg-blue-100' : ''}`}
              onClick={() => loadComponent('RegistroEventos')}
              startContent={<Calendar size={20} />}
            >
              Registro de Eventos
            </Button>
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="container mx-auto p-6">
        {renderComponent()}
      </main>
    </div>
  );
};

export default MainPage;
