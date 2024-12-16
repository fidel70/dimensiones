import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NextUIProvider } from '@nextui-org/react'
import './globals.css'

// Configuración de la fuente Inter
const inter = Inter({ subsets: ['latin'] })

// Metadata para SEO
export const metadata: Metadata = {
  title: 'App Dimensiones',
  description: 'Aplicación para registro de dimensiones y pensamientos',
}

// Proveedor con soporte para el tema y modo oscuro
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className='light'>
      <body className={inter.className}>
        <NextUIProvider>
          {children}
        </NextUIProvider>
      </body>
    </html>
  )
}

