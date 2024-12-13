'use client'

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { Button } from "@nextui-org/react";
import { Menu, X, BookText, Box, Calendar } from "lucide-react";

type ComponentName = 'RegistroPensamientos' | 'RegistroDimensiones' | 'RegistroEventos';

const MainPage = () => {
  const [currentView, setCurrentView] = useState<ComponentName | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const loadComponent = (component: ComponentName) => {
    console.log('Loading component:', component); // Para debugging
    setCurrentView(component);
    setMobileMenuOpen(false);
  };

  const renderComponent = () => {
    if (!currentView) return null;

    console.log('Rendering component:', currentView); // Para debugging

    const Component = dynamic(() => import(`./${currentView}`), {
      loading: () => <p className="text-center mt-4 text-black">Cargando componente...</p>
    });

    return <Component />;
  };

  const menuItems = [
    {
      name: 'Registro de Pensamientos',
      component: 'RegistroPensamientos' as ComponentName,
      icon: <BookText className="w-5 h-5" />
    },
    {
      name: 'Registro de Dimensiones',
      component: 'RegistroDimensiones' as ComponentName,
      icon: <Box className="w-5 h-5" />
    },
    {
      name: 'Registro de Eventos',
      component: 'RegistroEventos' as ComponentName,
      icon: <Calendar className="w-5 h-5" />
    }
  ];

  const handleMenuItemClick = (component: ComponentName) => {
    console.log('Menu item clicked:', component); // Para debugging
    loadComponent(component);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header - Fixed position */}
      <header className="fixed top-0 left-0 right-0 bg-blue-600 z-40">
        <div className="px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between">
            {/* Logo/Title */}
            <h1 className="text-white text-xl font-semibold">
              Registro Psicológico
            </h1>

            {/* Desktop Menu */}
            <div className="hidden lg:flex lg:gap-x-6">
              {menuItems.map((item) => (
                <Button
                  key={item.component}
                  variant="light"
                  className={`text-white ${
                    currentView === item.component ? 'bg-blue-700' : 'hover:bg-blue-500'
                  }`}
                  onClick={() => handleMenuItemClick(item.component)}
                  startContent={item.icon}
                >
                  {item.name}
                </Button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-blue-500 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Abrir menú principal</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40" 
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile menu panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-64 bg-white transform transition-transform ease-in-out duration-300 z-50 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-end p-4">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="px-4 py-2 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.component}
              className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                currentView === item.component 
                  ? 'bg-blue-100 text-blue-600' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
              onClick={() => handleMenuItemClick(item.component)}
            >
              <span className="mr-3">{item.icon}</span>
              {item.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <main className="pt-20 px-4 pb-6">
        <div className="mx-auto max-w-7xl">
          {renderComponent()}
        </div>
      </main>
    </div>
  );
};

export default MainPage;
