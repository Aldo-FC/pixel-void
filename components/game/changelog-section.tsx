import { Plus, Wrench, ArrowUp } from 'lucide-react'
import { Reveal } from '@/components/game/reveal'
import { cn } from '@/lib/utils'
import { changelog, type ChangeType } from '@/lib/game-data'

const typeStyles: Record<ChangeType, { badge: string; icon: typeof Plus }> = {
  Nuevo: { badge: 'border-neon-cyan/60 bg-neon-cyan/10 text-neon-cyan', icon: Plus },
  Fix: { badge: 'border-amber-400/60 bg-amber-400/10 text-amber-300', icon: Wrench },
  Mejora: { badge: 'border-neon-magenta/60 bg-neon-magenta/10 text-neon-magenta', icon: ArrowUp },
}

export function ChangelogSection() {
  return (
    <section id="actualizaciones" className="relative bg-card/20 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="font-pixel text-[10px] uppercase tracking-widest text-neon-magenta">
            Siempre en evolución
          </p>
          <h2 className="mt-4 font-pixel text-2xl leading-tight text-foreground sm:text-3xl">
            Actualizaciones
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Novedades del desarrollo, directo desde el estudio.
          </p>
        </Reveal>

        <ol className="mt-16 space-y-8">
          {changelog.map((entry, i) => {
            const style = typeStyles[entry.type]
            return (
              <Reveal as="li" key={entry.version} delay={i * 80} className="relative pl-8 sm:pl-10">
                <span
                  aria-hidden
                  className="absolute left-[7px] top-2 size-3 rounded-full bg-neon-cyan box-glow-cyan sm:left-[9px]"
                />
                {i < changelog.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute left-3 top-6 h-[calc(100%+2rem)] w-px bg-border sm:left-[15px]"
                  />
                )}
                <div className="border border-border bg-background/60 p-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-pixel text-sm text-foreground">{entry.version}</span>
                    <span
                      className={cn(
                        'inline-flex items-center gap-1.5 border px-2 py-1 font-pixel text-[9px] uppercase tracking-wider',
                        style.badge,
                      )}
                    >
                      <style.icon className="size-3" />
                      {entry.type}
                    </span>
                    <span className="ml-auto text-xs uppercase tracking-wide text-muted-foreground">
                      {entry.date}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {entry.changes.map((change) => (
                      <li
                        key={change}
                        className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span className="mt-2 size-1.5 shrink-0 bg-neon-magenta" />
                        {change}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
