import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Press_Start_2P, Rajdhani } from 'next/font/google'
import './globals.css'

const pressStart = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pixel',
  display: 'swap',
})

const rajdhani = Rajdhani({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'PIXEL VOID — Una aventura 2D pixel-art',
  description:
    'PIXEL VOID es un videojuego indie 2D estilo pixel-art: combate dinámico, un mundo explorable lleno de secretos y bosses épicos. Mira el tráiler y súmate a la comunidad.',
  generator: 'v0.app',
  keywords: ['videojuego indie', 'pixel art', '2D', 'metroidvania', 'PIXEL VOID', 'Steam'],
  openGraph: {
    title: 'PIXEL VOID — Una aventura 2D pixel-art',
    description: 'Combate dinámico, mundo explorable y bosses épicos en un mundo neón de píxeles.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0d0d1a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${pressStart.variable} ${rajdhani.variable} font-body antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
