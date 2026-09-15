'use client'

import { useState, type FormEvent } from 'react'
import { Mail, Check, MessageCircle, Radio, Video, Code } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/game/reveal'

const socials = [
  { label: 'Discord', href: '#', icon: MessageCircle },
  { label: 'Twitch', href: '#', icon: Radio },
  { label: 'YouTube', href: '#', icon: Video },
  { label: 'GitHub', href: '#', icon: Code },
]

export function ContactSection() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!email) return
    setSent(true)
    setEmail('')
  }

  return (
    <section id="contacto" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal className="crt-scanlines relative overflow-hidden border border-neon-cyan/30 bg-card/60 p-8 sm:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-neon-magenta/15 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-16 -left-16 size-56 rounded-full bg-neon-cyan/15 blur-3xl"
          />

          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="font-pixel text-[10px] uppercase tracking-widest text-neon-magenta">
                Únete al vacío
              </p>
              <h2 className="mt-4 font-pixel text-xl leading-relaxed text-foreground sm:text-2xl">
                Sé el primero en jugar
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Apúntate a la beta cerrada y recibe noticias del desarrollo, claves de acceso y
                contenido exclusivo directo en tu correo.
              </p>

              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                {['Acceso a la beta', 'Sin spam', 'Cancela cuando quieras'].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check className="size-4 text-neon-cyan" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              {sent ? (
                <div
                  className="flex flex-col items-center justify-center gap-3 border border-neon-cyan/40 bg-neon-cyan/5 p-8 text-center box-glow-cyan"
                  role="status"
                >
                  <span className="flex size-12 items-center justify-center rounded-full border border-neon-cyan text-neon-cyan">
                    <Check className="size-6" />
                  </span>
                  <p className="font-pixel text-xs text-neon-cyan">¡Estás dentro!</p>
                  <p className="text-sm text-muted-foreground">
                    Revisa tu correo para confirmar tu plaza en la beta.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-3">
                  <label htmlFor="email" className="sr-only">
                    Correo electrónico
                  </label>
                  <div className="flex items-center gap-2 border border-border bg-background/70 px-3 focus-within:border-neon-cyan">
                    <Mail className="size-4 shrink-0 text-muted-foreground" />
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jugador@ejemplo.com"
                      className="h-12 w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="h-12 w-full font-pixel text-[11px] uppercase tracking-wider box-glow-magenta"
                  >
                    Reservar mi plaza
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    O añádelo a tu lista de deseos en Steam.
                  </p>
                </form>
              )}

              <div className="mt-6">
                <p className="mb-3 text-center font-pixel text-[9px] uppercase tracking-widest text-muted-foreground">
                  Síguenos
                </p>
                <div className="flex justify-center gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="flex size-11 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-neon-cyan/60 hover:text-neon-cyan"
                    >
                      <s.icon className="size-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
