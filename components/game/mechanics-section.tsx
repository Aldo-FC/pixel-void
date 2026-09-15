import Image from 'next/image'
import { Reveal } from '@/components/game/reveal'
import { features, mechanics, screenshots } from '@/lib/game-data'

export function MechanicsSection() {
  return (
    <section id="mecanicas" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-pixel text-[10px] uppercase tracking-widest text-neon-magenta">
            Qué te espera
          </p>
          <h2 className="mt-4 font-pixel text-2xl leading-tight text-foreground sm:text-3xl">
            Mecánicas de juego
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Tres pilares definen la experiencia de {`PIXEL VOID`}: pelea, explora y sobrevive.
          </p>
        </Reveal>

        {/* Feature pillars */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal
              key={feature.title}
              delay={i * 120}
              className="group relative overflow-hidden border border-border bg-card/60 p-8 transition-colors hover:border-neon-cyan/50"
            >
              <div
                aria-hidden
                className="absolute right-0 top-0 size-24 translate-x-8 -translate-y-8 bg-neon-cyan/10 blur-2xl transition-opacity group-hover:opacity-100 md:opacity-0"
              />
              <span className="inline-flex size-12 items-center justify-center border border-neon-cyan/50 bg-neon-cyan/10 text-neon-cyan box-glow-cyan">
                <feature.icon className="size-6" />
              </span>
              <h3 className="mt-6 font-pixel text-sm text-foreground">{feature.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{feature.description}</p>
            </Reveal>
          ))}
        </div>

        {/* Mechanics grid */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {mechanics.map((mech, i) => (
            <Reveal
              key={mech.name}
              delay={(i % 3) * 100}
              className="flex items-start gap-4 border border-border bg-card/40 p-5 transition-colors hover:border-neon-magenta/50"
            >
              <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center border border-neon-magenta/40 text-neon-magenta">
                <mech.icon className="size-4.5" />
              </span>
              <div>
                <h4 className="text-base font-semibold text-foreground">{mech.name}</h4>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {mech.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Screenshot gallery */}
        <Reveal className="mt-20">
          <div className="mb-6 flex items-end justify-between">
            <h3 className="font-pixel text-sm text-foreground sm:text-base">Capturas</h3>
            <span className="font-pixel text-[9px] uppercase tracking-widest text-muted-foreground">
              In-game
            </span>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {screenshots.map((shot, i) => (
              <div
                key={shot.src}
                className="crt-scanlines group relative aspect-video overflow-hidden border border-border transition-colors hover:border-neon-cyan/60"
              >
                <Image
                  src={shot.src || '/placeholder.svg'}
                  alt={shot.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="pixelated object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
