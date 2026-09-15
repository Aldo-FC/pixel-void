'use client'

import { useEffect, useState } from 'react'
import { Menu, X, Gamepad2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { GAME_NAME, navLinks } from '@/lib/game-data'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border bg-background/80 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#inicio" className="group flex items-center gap-2.5">
          <span className="flex size-8 items-center justify-center border border-neon-cyan/60 bg-neon-cyan/10 text-neon-cyan box-glow-cyan">
            <Gamepad2 className="size-4" />
          </span>
          <span className="font-pixel text-xs text-foreground transition-colors group-hover:text-neon-cyan sm:text-sm">
            {GAME_NAME}
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-sm px-3 py-2 text-sm font-medium tracking-wide text-muted-foreground transition-colors hover:text-neon-cyan"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button
            className="font-pixel text-[10px] uppercase tracking-wider box-glow-magenta"
            nativeButton={false}
            render={<a href="#contacto" />}
          >
            Wishlist
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-sm border border-border text-foreground md:hidden"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md md:hidden">
          <ul className="flex flex-col px-4 py-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-sm px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-neon-cyan"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="px-3 pb-2 pt-3">
              <Button
                className="w-full font-pixel text-[10px] uppercase tracking-wider"
                nativeButton={false}
                render={<a href="#contacto" onClick={() => setOpen(false)} />}
              >
                Wishlist
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
