import json
import os

def create_package_json():
    package_json = {
        "name": "nextjs-app",
        "version": "0.1.0",
        "private": True,
        "scripts": {
            "dev": "next dev",
            "build": "next build",
            "start": "next start",
            "lint": "next lint",
            "format": "prettier --write .",
            "migrate:dev": "prisma migrate dev",
            "migrate:prod": "prisma migrate deploy",
            "test": "jest",
            "test:watch": "jest --watch"
        },
        "dependencies": {
            "@prisma/client": "^5.9.0",
            "next": "14.1.0",
            "react": "^18.2.0",
            "react-dom": "^18.2.0",
            "axios": "^1.6.5",
            "zod": "^3.22.4",
            "react-hook-form": "^7.49.3",
            "@hookform/resolvers": "^3.3.4",
            "next-auth": "^4.24.5",
            "bcryptjs": "^2.4.3",
            "jsonwebtoken": "^9.0.2",
            "tailwindcss": "^3.4.1",
            "postcss": "^8.4.33",
            "autoprefixer": "^10.4.17",
            "@headlessui/react": "^1.7.18",
            "zustand": "^4.5.0"
        },
        "devDependencies": {
            "@types/react": "^18.2.48",
            "@types/react-dom": "^18.2.18",
            "@types/node": "^20.11.5",
            "@types/bcryptjs": "^2.4.6",
            "@types/jsonwebtoken": "^9.0.5",
            "typescript": "^5.3.3",
            "prisma": "^5.9.0",
            "@testing-library/react": "^14.1.2",
            "@testing-library/jest-dom": "^6.2.0",
            "jest": "^29.7.0",
            "@types/jest": "^29.5.11",
            "jest-environment-jsdom": "^29.7.0",
            "prettier": "^3.2.4",
            "eslint": "^8.56.0",
            "eslint-config-next": "14.1.0",
            "@typescript-eslint/eslint-plugin": "^6.19.1",
            "@typescript-eslint/parser": "^6.19.1"
        }
    }
    
    with open('package.json', 'w') as f:
        json.dump(package_json, f, indent=2)

def create_config_files():
    # next.config.js
    next_config = """/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['your-image-domain.com'],
  },
}

module.exports = nextConfig"""

    # tailwind.config.js
    tailwind_config = """/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007AFF',
        secondary: '#6C757D',
      },
    },
  },
  plugins: [],
}"""

    # postcss.config.js
    postcss_config = """module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}"""

    # prettier config
    prettier_config = """{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5"
}"""

    # eslint config
    eslint_config = """module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {},
}"""

    # prisma schema
    prisma_schema = """generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        String   @id @default(uuid())
  email     String   @unique
  name      String?
  password  String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}"""

    # jest config
    jest_config = """const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
}

module.exports = createJestConfig(customJestConfig)"""

    # jest setup
    jest_setup = """import '@testing-library/jest-dom'"""

    files = {
        'next.config.js': next_config,
        'tailwind.config.js': tailwind_config,
        'postcss.config.js': postcss_config,
        '.prettierrc': prettier_config,
        '.eslintrc.js': eslint_config,
        'prisma/schema.prisma': prisma_schema,
        'jest.config.js': jest_config,
        'jest.setup.js': jest_setup
    }

    # Crear directorio prisma si no existe
    if not os.path.exists('prisma'):
        os.makedirs('prisma')

    # Crear cada archivo
    for filename, content in files.items():
        with open(filename, 'w') as f:
            f.write(content)

def create_env_example():
    env_content = """# App
NEXT_PUBLIC_API_URL=http://localhost:3000
NODE_ENV=development

# Database
DATABASE_URL="postgresql://user:password@localhost:5432/dbname?schema=public"

# Authentication
JWT_SECRET=your-super-secret-key
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-nextauth-secret

# External Services
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASSWORD=your-password"""

    with open('.env.example', 'w') as f:
        f.write(env_content)

def main():
    print("Creando archivos de configuración para Next.js...")
    
    try:
        create_package_json()
        print("✅ package.json creado")
        
        create_config_files()
        print("✅ Archivos de configuración creados")
        
        create_env_example()
        print("✅ .env.example creado")
        
        print("\n¡Todo listo! 🚀")
        print("\nPara comenzar:")
        print("1. Ejecuta: npm install")
        print("2. Copia .env.example a .env y configura tus variables")
        print("3. Ejecuta: npm run dev")
        
    except Exception as e:
        print(f"❌ Error: {str(e)}")

if __name__ == "__main__":
    main()
