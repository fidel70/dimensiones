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
            "test": "jest",
            "test:watch": "jest --watch"
        },
        "dependencies": {
            "@supabase/auth-helpers-nextjs": "^0.9.0",
            "@supabase/supabase-js": "^2.39.3",
            "@supabase/auth-ui-react": "^0.4.7",
            "@supabase/auth-ui-shared": "^0.1.8",
            "next": "14.1.0",
            "react": "^18.2.0",
            "react-dom": "^18.2.0",
            "axios": "^1.6.5",
            "zod": "^3.22.4",
            "react-hook-form": "^7.49.3",
            "@hookform/resolvers": "^3.3.4",
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
            "supabase": "^1.131.4",
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
    # Crear archivos en la raíz
    root_files = {
        'next.config.js': """/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['your-image-domain.com'],
  },
}

module.exports = nextConfig""",

        'tailwind.config.js': """/** @type {import('tailwindcss').Config} */
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
    }

    # Crear archivos en src/lib
    lib_files = {
        'src/lib/supabase.ts': """import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)"""
    }

    # Crear archivo middleware
    middleware_files = {
        'src/middleware.ts': """import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })
  
  const {
    data: { session },
  } = await supabase.auth.getSession()

  return res
}"""
    }

    # Crear archivos
    for filepath, content in {**root_files, **lib_files, **middleware_files}.items():
        try:
            dir_name = os.path.dirname(filepath)
            if dir_name and not os.path.exists(dir_name):
                os.makedirs(dir_name)
            with open(filepath, 'w') as f:
                f.write(content)
            print(f"✅ Creado: {filepath}")
        except Exception as e:
            print(f"❌ Error creando {filepath}: {str(e)}")

def create_env_example():
    env_content = """# App
NEXT_PUBLIC_API_URL=http://localhost:3000
NODE_ENV=development

# Supabase
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Authentication
NEXT_PUBLIC_AUTH_REDIRECT=http://localhost:3000/auth/callback"""

    with open('.env.example', 'w') as f:
        f.write(env_content)

def create_auth_utils():
    auth_utils = """import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export const supabaseClient = createClientComponentClient()

export async function signInWithEmail(email: string, password: string) {
  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email,
    password,
  })
  return { data, error }
}

export async function signUp(email: string, password: string) {
  const { data, error } = await supabaseClient.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_AUTH_REDIRECT}`,
    },
  })
  return { data, error }
}

export async function signOut() {
  const { error } = await supabaseClient.auth.signOut()
  return { error }
}"""

    utils_path = 'src/utils/auth.ts'
    os.makedirs(os.path.dirname(utils_path), exist_ok=True)
    with open(utils_path, 'w') as f:
        f.write(auth_utils)

def main():
    print("Creando archivos de configuración para Next.js con Supabase...")
    
    try:
        create_package_json()
        print("✅ package.json creado")
        
        create_config_files()
        print("✅ Archivos de configuración creados")
        
        create_env_example()
        print("✅ .env.example creado")
        
        create_auth_utils()
        print("✅ Utilidades de autenticación creadas")
        
        print("\n¡Archivos creados exitosamente! 🚀")
        print("\nPasos siguientes:")
        print("1. npm install")
        print("2. cp .env.example .env")
        print("3. Configura tus variables de Supabase en el archivo .env")
        print("4. npm run dev")
        
    except Exception as e:
        print(f"❌ Error: {str(e)}")

if __name__ == "__main__":
    main()
