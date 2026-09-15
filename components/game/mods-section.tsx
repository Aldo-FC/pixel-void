'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { Star, Download, User, Check } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/game/reveal'
import { cn } from '@/lib/utils'
import { mods, modCategories, type Mod } from '@/lib/game-data'

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} de 5 estrellas`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i + 1 <= Math.round(rating)
        return (
          <Star
            key={i}
            className={cn(
              'size-3.5',
              filled ? 'fill-amber-300 text-amber-300' : 'fill-transparent text-muted-foreground/40',
            )}
          />
        )
      })}
      <span className="ml-1 text-xs text-muted-foreground">{rating.toFixed(1)}</span>
    </div>
  )
}

const FILTERS = ['Todos', ...modCategories] as const

export function ModsSection() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('Todos')
  const [selected, setSelected] = useState<Mod | null>(null)

  const visible = useMemo(
    () => (filter === 'Todos' ? mods : mods.filter((m) => m.category === filter)),
    [filter],
  )

  return (
    <section id="mods" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-pixel text-[10px] uppercase tracking-widest text-neon-cyan">
            Creado por jugadores
          </p>
          <h2 className="mt-4 font-pixel text-2xl leading-tight text-foreground sm:text-3xl">
            Mods de la comunidad
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Personajes, niveles y remixes hechos por la comunidad. Descárgalos gratis desde el
            workshop.
          </p>
        </Reveal>

        {/* Filters */}
        <Reveal className="mt-10 flex flex-wrap justify-center gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={cn(
                'border px-4 py-2 font-pixel text-[9px] uppercase tracking-wider transition-colors',
                filter === f
                  ? 'border-neon-magenta bg-neon-magenta/10 text-neon-magenta box-glow-magenta'
                  : 'border-border text-muted-foreground hover:border-neon-magenta/50 hover:text-foreground',
              )}
            >
              {f}
            </button>
          ))}
        </Reveal>

        {/* Grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((mod, i) => (
            <Reveal
              key={mod.id}
              delay={(i % 4) * 80}
              className="group overflow-hidden border border-border bg-card/50 transition-colors hover:border-neon-cyan/60"
            >
              <button
                type="button"
                onClick={() => setSelected(mod)}
                className="block w-full cursor-pointer text-left"
                aria-label={`Ver detalles del mod ${mod.name}`}
              >
                <span className="crt-scanlines relative block aspect-square overflow-hidden">
                  <Image
                    src={mod.thumb || '/placeholder.svg'}
                    alt={mod.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="pixelated object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {mod.featured && (
                    <span className="absolute left-2 top-2 z-[4] border border-neon-cyan/60 bg-background/80 px-2 py-1 font-pixel text-[8px] uppercase tracking-wider text-neon-cyan">
                      Destacado
                    </span>
                  )}
                </span>
                <span className="block p-4">
                  <span className="flex items-center justify-between gap-2">
                    <span className="truncate font-semibold text-foreground">{mod.name}</span>
                    <span className="shrink-0 border border-border px-1.5 py-0.5 font-pixel text-[8px] uppercase text-muted-foreground">
                      {mod.category}
                    </span>
                  </span>
                  <span className="mt-1.5 flex items-center gap-1.5 text-xs text-muted-foreground">
                    <User className="size-3" />
                    {mod.author}
                  </span>
                  <span className="mt-3 flex items-center justify-between">
                    <Stars rating={mod.rating} />
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Download className="size-3" />
                      {mod.downloads}
                    </span>
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="border-border bg-card sm:max-w-lg">
          {selected && (
            <>
              <div className="crt-scanlines relative -mx-6 -mt-6 aspect-video overflow-hidden border-b border-border">
                <Image
                  src={selected.thumb || '/placeholder.svg'}
                  alt={selected.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 512px"
                  className="pixelated object-cover"
                />
              </div>
              <DialogHeader>
                <DialogTitle className="font-pixel text-sm leading-relaxed text-foreground">
                  {selected.name}
                </DialogTitle>
                <DialogDescription className="flex items-center gap-2">
                  <User className="size-3.5" />
                  Por {selected.author} · Compatible {selected.version}
                </DialogDescription>
              </DialogHeader>

              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="border border-border p-3">
                  <p className="font-pixel text-[9px] uppercase text-muted-foreground">Rating</p>
                  <p className="mt-2 flex justify-center">
                    <Stars rating={selected.rating} />
                  </p>
                </div>
                <div className="border border-border p-3">
                  <p className="font-pixel text-[9px] uppercase text-muted-foreground">Descargas</p>
                  <p className="mt-2 text-sm font-semibold text-foreground">{selected.downloads}</p>
                </div>
                <div className="border border-border p-3">
                  <p className="font-pixel text-[9px] uppercase text-muted-foreground">Categoría</p>
                  <p className="mt-2 text-sm font-semibold text-foreground">{selected.category}</p>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground">
                Este mod ha sido verificado por la comunidad y es compatible con la versión{' '}
                {selected.version}. Se instala automáticamente a través del workshop integrado del
                juego.
              </p>

              <div className="flex flex-col gap-2 sm:flex-row">
                <Button className="flex-1 gap-2 font-pixel text-[10px] uppercase tracking-wider box-glow-cyan">
                  <Download className="size-4" />
                  Instalar mod
                </Button>
                <Button
                  variant="outline"
                  className="gap-2 border-border font-pixel text-[10px] uppercase tracking-wider"
                >
                  <Check className="size-4" />
                  Guardar
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
