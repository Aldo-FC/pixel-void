import { Gamepad2 } from 'lucide-react'
import { GAME_NAME, navLinks } from '@/lib/game-data'

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2.5">
            <span className="flex size-8 items-center justify-center border border-neon-cyan/60 bg-neon-cyan/10 text-neon-cyan">
              <Gamepad2 className="size-4" />
            </span>
            <span className="font-pixel text-xs text-foreground">{GAME_NAME}</span>
          </div>

          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-neon-cyan"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-center text-xs text-muted-foreground sm:flex-row sm:text-left">
          <p>© 2026 {GAME_NAME}. Todos los derechos reservados.</p>
          <p className="font-pixel text-[9px] uppercase tracking-wider text-muted-foreground/70">
            Hecho con pixeles y café
          </p>
        </div>
      </div>
    </footer>
  )
}
