import React from "react"
import type { Metadata, Viewport } from 'next'
import { Caprasimo, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const caprasimo = Caprasimo({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-caprasimo',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Peak Fresh Açaí | Delivery em Marília - SP',
  description: 'Descubra o autêntico sabor do Peak Fresh Açaí. Delivery de açaí em toda Marília - SP. Peça pelo WhatsApp e ganhe 15% de desconto!',
  keywords: ['açaí', 'delivery', 'Marília', 'Peak Fresh', 'açaí delivery'],
  openGraph: {
    title: 'Peak Fresh Açaí | Delivery em Marília - SP',
    description: 'Descubra o autêntico sabor do Peak Fresh Açaí. Delivery de açaí em toda Marília - SP.',
    type: 'website',
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: '#7c2bbf',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${caprasimo.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
