@echo off
echo Creando estructura de carpetas para Next.js...

:: Crear carpetas principales
mkdir src
cd src

:: Componentes y sus subcarpetas
mkdir components
cd components
mkdir common
mkdir layout
mkdir sections
cd ..

:: Páginas y rutas
mkdir app
cd app
echo // Add your page content here > page.tsx
mkdir api
cd ..

:: Base de datos
mkdir db
cd db
mkdir models
mkdir migrations
mkdir seeders
mkdir config
echo // Database configuration > config/database.js
echo // Base model configuration > models/index.js
cd ..

:: Configuración
mkdir config
mkdir constants

:: Utilidades
mkdir utils
mkdir hooks
mkdir services

:: Tipos
mkdir types
mkdir interfaces

:: Estilos
mkdir styles
echo /* Add your global styles here */ > styles/globals.css

:: Assets
mkdir public
cd public
mkdir images
mkdir icons
mkdir fonts
cd ..

:: Estado y Store
mkdir store
mkdir context

:: Tests
mkdir __tests__
mkdir __mocks__

:: Crear archivos base
echo // Add your types here > types/index.ts
echo // Add your interfaces here > interfaces/index.ts
echo // Add your utilities here > utils/index.ts
echo // Add your hooks here > hooks/index.ts
echo // Add your services here > services/index.ts
echo // Add your constants here > constants/index.ts

cd ..

:: Crear archivos de configuración en la raíz
echo {> next.config.js
echo   "compilerOptions": {>> next.config.js
echo     "baseUrl": "./src",>> next.config.js
echo     "paths": {>> next.config.js
echo       "@/*": ["*"]>> next.config.js
echo     }>> next.config.js
echo   }>> next.config.js
echo }>> next.config.js

echo {> package.json
echo   "name": "nextjs-app",>> package.json
echo   "version": "0.1.0",>> package.json
echo   "private": true,>> package.json
echo   "scripts": {>> package.json
echo     "dev": "next dev",>> package.json
echo     "build": "next build",>> package.json
echo     "start": "next start",>> package.json
echo     "lint": "next lint">> package.json
echo   }>> package.json
echo }>> package.json

echo Estructura de carpetas creada exitosamente!
echo.
echo La estructura incluye:
echo - src/
echo   ├── app/         (páginas y API routes)
echo   ├── components/  (componentes reutilizables)
echo   ├── db/          (configuración y modelos de base de datos)
echo   │   ├── models/     (modelos de datos)
echo   │   ├── migrations/ (migraciones de la base de datos)
echo   │   ├── seeders/    (datos de prueba)
echo   │   └── config/     (configuración de la BD)
echo   ├── styles/      (estilos globales y módulos CSS)
echo   ├── utils/       (funciones útiles)
echo   ├── hooks/       (custom hooks)
echo   ├── services/    (servicios y API calls)
echo   ├── types/       (TypeScript types)
echo   ├── store/       (manejo de estado)
echo   └── public/      (assets estáticos)

pause
