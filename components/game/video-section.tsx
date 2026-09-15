'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'
import { Reveal } from '@/components/game/reveal'
import { cn } from '@/lib/utils'
import { videos } from '@/lib/game-data'

export function VideoSection() {
  const [active, setActive] = useState(videos[0].id)
  const [playing, setPlaying] = useState(false)

  const current = videos.find((v) => v.id === active) ?? videos[0]

  return (
    <section id="video" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="font-pixel text-[10px] uppercase tracking-widest text-neon-cyan">
            Míralo en acción
          </p>
          <h2 className="mt-4 font-pixel text-2xl leading-tight text-foreground sm:text-3xl">
            Tráiler y gameplay
          </h2>
        </Reveal>

        <Reveal className="mt-10">
          <div className="mb-4 flex flex-wrap justify-center gap-2">
            {videos.map((v) => (
              <button
                key={v.id}
                type="button"
                onClick={() => {
                  setActive(v.id)
                  setPlaying(false)
                }}
                className={cn(
                  'border px-4 py-2 font-pixel text-[10px] uppercase tracking-wider transition-colors',
                  active === v.id
                    ? 'border-neon-cyan bg-neon-cyan/10 text-neon-cyan box-glow-cyan'
                    : 'border-border text-muted-foreground hover:border-neon-cyan/50 hover:text-foreground',
                )}
              >
                {v.label}
              </button>
            ))}
          </div>

          <div className="crt-scanlines relative aspect-video overflow-hidden border border-border box-glow-magenta">
            {playing ? (
              <iframe
                key={current.id}
                className="absolute inset-0 size-full"
                src={`https://www.youtube-nocookie.com/embed/${current.youtubeId}?autoplay=1&rel=0`}
                title={`${current.label} — PIXEL VOID`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                className="group absolute inset-0 flex items-center justify-center"
                style={{
                  backgroundImage: `url(https://img.youtube.com/vi/${current.youtubeId}/hqdefault.jpg)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                aria-label={`Reproducir ${current.label}`}
              >
                <span className="absolute inset-0 bg-background/50 transition-colors group-hover:bg-background/30" />
                <span className="relative flex size-18 items-center justify-center rounded-full border-2 border-neon-cyan bg-background/70 text-neon-cyan transition-transform group-hover:scale-110 box-glow-cyan">
                  <Play className="size-7 translate-x-0.5 fill-current" />
                </span>
              </button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
