'use client'

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { Button, Divider } from "@nextui-org/react";
import { Menu, X, BookText, Box, Calendar } from "lucide-react";

type ComponentName = 'RegistroPensamientos' | 'RegistroDimensiones' | 'RegistroEventos';

const MainPage = () => {
  const [currentView, setCurrentView] = useState<ComponentName | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const loadComponent = (component: ComponentName) => {
    setCurrentView(component);
    setMobileMenuOpen(false);
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

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="bg-blue-600 px-4 sm:px-6">
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
                  onClick={() => loadComponent(item.component)}
                  startContent={item.icon}
                >
                  {item.name}
                </Button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                isIconOnly
                variant="light"
                className="text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded="false"
              >
                <span className="sr-only">Abrir menú principal</span>
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6" aria-hidden="true" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden ${
            mobileMenuOpen ? 'fixed inset-0 z-50' : 'hidden'
          }`}
        >
          {/* Background overlay */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Menu panel */}
          <div className="fixed inset-y-0 right-0 w-64 bg-white overflow-y-auto">
            <div className="flex items-center justify-end px-4 py-4">
              <Button
                isIconOnly
                variant="light"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </Button>
            </div>

            <div className="px-2 py-2">
              {menuItems.map((item) => (
                <Button
                  key={item.component}
                  variant="light"
                  className={`w-full justify-start mb-2 ${
                    currentView === item.component ? 'bg-blue-100' : ''
                  }`}
                  onClick={() => loadComponent(item.component)}
                  startContent={item.icon}
                >
                  {item.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </nav>

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