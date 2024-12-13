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

  const menuItems = [
    {
      name: 'Registro de Pensamientos',
      component: 'RegistroPensamientos' as ComponentName,
      icon: <BookText size={20} />
    },
    {
      name: 'Registro de Dimensiones',
      component: 'RegistroDimensiones' as ComponentName,
      icon: <Box size={20} />
    },
    {
      name: 'Registro de Eventos',
      component: 'RegistroEventos' as ComponentName,
      icon: <Calendar size={20} />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Fijo */}
      <header className="fixed top-0 left-0 right-0 bg-blue-600 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-white text-xl font-semibold truncate">
              Registro Psicológico
            </h1>
            <Button
              isIconOnly
              variant="light"
              aria-label="Menu"
              className="text-white lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>

            {/* Menú horizontal para pantallas grandes */}
            <nav className="hidden lg:flex items-center space-x-4">
              {menuItems.map((item) => (
                <Button
                  key={item.component}
                  variant="light"
                  className={`text-white hover:bg-blue-700 ${
                    currentView === item.component ? 'bg-blue-700' : ''
                  }`}
                  onClick={() => loadComponent(item.component)}
                  startContent={item.icon}
                >
                  {item.name}
                </Button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Menú móvil */}
      <div
        className={`
          fixed inset-y-0 right-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50
          lg:hidden
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-end p-4">
            <Button
              isIconOnly
              variant="light"
              onClick={() => setIsOpen(false)}
            >
              <X size={24} />
            </Button>
          </div>
          
          <Divider />
          
          <nav className="flex-1 px-4 py-2 space-y-2">
            {menuItems.map((item) => (
              <Button
                key={item.component}
                variant="light"
                className={`w-full justify-start ${
                  currentView === item.component ? 'bg-blue-100' : ''
                }`}
                onClick={() => loadComponent(item.component)}
                startContent={item.icon}
              >
                {item.name}
              </Button>
            ))}
          </nav>
        </div>
      </div>

      {/* Overlay para móvil */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Contenido principal */}
      <main className="pt-20 px-4 pb-6 max-w-7xl mx-auto">
        {renderComponent()}
      </main>
    </div>
  );
};

export default MainPage;