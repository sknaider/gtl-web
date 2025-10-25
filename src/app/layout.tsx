import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import WhatsAppWidget from '@/components/common/WhatsAppWidget'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'GTL Consulting - ConsultorÃ­a en Comercio Exterior',
  description: 'ConsultorÃ­a en Comercio Exterior con mÃ¡s de 22 aÃ±os de experiencia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const bodyClassName = [
    inter.variable,
    montserrat.variable,
    'min-h-screen',
    'bg-white',
    'font-sans',
    'antialiased'
  ].join(' ')

  return (
    <html lang="es" suppressHydrationWarning>
      <body className={bodyClassName}>
        {children}
        <WhatsAppWidget />
      </body>
    </html>
  )
}