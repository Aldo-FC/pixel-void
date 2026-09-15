'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Play, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GAME_NAME } from '@/lib/game-data'

const PHRASES = [
  'Explora el vacío de neón.',
  'Domina el combate pixelado.',
  'Derrota a los bosses del abismo.',
]

function useTypewriter(phrases: string[]) {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[index]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && text === '') {
      setDeleting(false)
      setIndex((i) => (i + 1) % phrases.length)
    } else {
      timeout = setTimeout(
        () => {
          setText((prev) =>
            deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1),
          )
        },
        deleting ? 40 : 70,
      )
    }
    return () => clearTimeout(timeout)
  }, [text, deleting, index, phrases])

  return text
}

export function Hero() {
  const typed = useTypewriter(PHRASES)
  const parallaxRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const node = parallaxRef.current
    if (!node) return
    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const y = window.scrollY
        node.style.setProperty('--par', `${y}`)
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section
      id="inicio"
      ref={parallaxRef}
      className="crt-scanlines relative flex min-h-svh items-center overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0"
        style={{ transform: 'translateY(calc(var(--par, 0) * 0.35px))' }}
      >
        <Image
          src="/images/hero-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="pixelated object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </div>

      {/* animated grid floor */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-1/2"
        style={{
          background:
            'linear-gradient(rgba(0,240,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.18) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'linear-gradient(to top, black, transparent)',
          WebkitMaskImage: 'linear-gradient(to top, black, transparent)',
          animation: 'grid-drift 1.6s linear infinite',
        }}
      />

      {/* floating pixels */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-[1]">
        <span className="animate-float-slow absolute left-[12%] top-[24%] size-3 bg-neon-cyan box-glow-cyan" />
        <span className="animate-float-med absolute right-[16%] top-[30%] size-4 bg-neon-magenta box-glow-magenta" />
        <span className="animate-float-med absolute left-[22%] bottom-[26%] size-2 bg-neon-magenta" />
        <span className="animate-float-slow absolute right-[26%] bottom-[32%] size-3 bg-neon-cyan box-glow-cyan" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex items-center gap-2 border border-neon-cyan/40 bg-neon-cyan/5 px-3 py-1.5 font-pixel text-[9px] uppercase tracking-widest text-neon-cyan">
            <span className="size-2 animate-pulse bg-neon-cyan" />
            Acceso anticipado · v0.3.1
          </p>

          <h1 className="animate-glitch font-pixel text-4xl leading-[1.15] text-foreground text-glow-cyan sm:text-6xl lg:text-7xl">
            {GAME_NAME}
          </h1>

          <p className="mt-6 min-h-[2.5rem] font-pixel text-xs text-neon-magenta text-glow-magenta sm:text-sm">
            {typed}
            <span className="animate-caret ml-1 inline-block">_</span>
          </p>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Un action-platformer 2D pixel-art con combate dinámico, un vasto mundo interconectado y
            jefes colosales. Sumérgete en el vacío de neón.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-13 gap-2 font-pixel text-[11px] uppercase tracking-wider box-glow-cyan"
              nativeButton={false}
              render={<a href="#contacto" />}
            >
              <Heart className="size-4" />
              Añadir a Steam
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-13 gap-2 border-neon-magenta/50 font-pixel text-[11px] uppercase tracking-wider text-neon-magenta hover:bg-neon-magenta/10 hover:text-neon-magenta"
              nativeButton={false}
              render={<a href="#video" />}
            >
              <Play className="size-4" />
              Ver tráiler
            </Button>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6">
            {[
              ['12+', 'Bosses'],
              ['40h', 'Campaña'],
              ['8', 'Biomas'],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="font-pixel text-xl text-neon-cyan sm:text-2xl">{value}</dt>
                <dd className="mt-1 text-sm uppercase tracking-wide text-muted-foreground">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
