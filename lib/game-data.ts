import {
  Swords,
  Compass,
  Skull,
  Sparkles,
  Zap,
  ShieldHalf,
  Wand2,
  Footprints,
  type LucideIcon,
} from 'lucide-react'

export const GAME_NAME = 'PIXEL VOID'

export type Feature = {
  icon: LucideIcon
  title: string
  description: string
}

export const features: Feature[] = [
  {
    icon: Swords,
    title: 'Combate dinámico',
    description:
      'Combos fluidos, esquives con dash y armas desbloqueables. Cada enemigo pide su propia estrategia.',
  },
  {
    icon: Compass,
    title: 'Mundo explorable',
    description:
      'Un mapa interconectado lleno de secretos, atajos y biomas de neón que recompensan la curiosidad.',
  },
  {
    icon: Skull,
    title: 'Bosses épicos',
    description:
      'Jefes gigantes de varias fases con patrones memorizables y una banda sonora chiptune vibrante.',
  },
]

export type Mechanic = {
  icon: LucideIcon
  name: string
  description: string
}

export const mechanics: Mechanic[] = [
  { icon: Zap, name: 'Dash de energía', description: 'Atraviesa proyectiles y cruza abismos con un impulso de plasma.' },
  { icon: Wand2, name: 'Runas modulares', description: 'Combina runas para crear habilidades únicas cada partida.' },
  { icon: ShieldHalf, name: 'Parry perfecto', description: 'Bloquea en el momento justo para reflejar el daño al enemigo.' },
  { icon: Footprints, name: 'Doble salto', description: 'Encadena saltos aéreos para alcanzar plataformas ocultas.' },
  { icon: Sparkles, name: 'Modo furia', description: 'Acumula energía al atacar y desata un estado de poder temporal.' },
  { icon: Swords, name: 'Armas mutables', description: 'Cambia entre espada, arco y guantelete sobre la marcha.' },
]

export type ChangeType = 'Nuevo' | 'Fix' | 'Mejora'

export type ChangelogEntry = {
  version: string
  date: string
  type: ChangeType
  changes: string[]
}

export const changelog: ChangelogEntry[] = [
  {
    version: 'v0.3.1',
    date: '12 SEP 2026',
    type: 'Nuevo',
    changes: [
      'Nuevo bioma: las Cavernas de Cristal con 3 mini-jefes.',
      'Añadida la runa "Eco de Vacío" para ataques a distancia.',
      'Soporte inicial para mods de la comunidad.',
    ],
  },
  {
    version: 'v0.2.7',
    date: '28 AGO 2026',
    type: 'Mejora',
    changes: [
      'Rebalanceado el daño del dash y el consumo de energía.',
      'Mejorada la iluminación neón en pantallas OLED.',
    ],
  },
  {
    version: 'v0.2.4',
    date: '09 AGO 2026',
    type: 'Fix',
    changes: [
      'Corregido un crash al derrotar al boss del Pantano.',
      'Solucionado el guardado que no registraba secretos.',
    ],
  },
  {
    version: 'v0.2.0',
    date: '21 JUL 2026',
    type: 'Nuevo',
    changes: [
      'Sistema de parry perfecto añadido al combate.',
      'Nueva banda sonora chiptune de 12 pistas.',
    ],
  },
]

export type VideoItem = {
  id: string
  label: string
  youtubeId: string
}

export const videos: VideoItem[] = [
  { id: 'trailer', label: 'Tráiler', youtubeId: 'dQw4w9WgXcQ' },
  { id: 'gameplay', label: 'Gameplay', youtubeId: 'ScMzIvxBSi4' },
  { id: 'devlog', label: 'Devlog', youtubeId: 'aqz-KE-bpKQ' },
]

export type ModCategory = 'Personajes' | 'Niveles' | 'Gameplay' | 'Gráficos' | 'Sonido'

export const modCategories: ModCategory[] = [
  'Personajes',
  'Niveles',
  'Gameplay',
  'Gráficos',
  'Sonido',
]

export type Mod = {
  id: string
  name: string
  author: string
  category: ModCategory
  rating: number
  downloads: string
  version: string
  thumb: string
  featured?: boolean
}

export const mods: Mod[] = [
  {
    id: 'm1',
    name: 'Héroes del Vacío',
    author: 'nyx_dev',
    category: 'Personajes',
    rating: 5,
    downloads: '48.2k',
    version: 'v0.3.x',
    thumb: '/images/mod-1.png',
    featured: true,
  },
  {
    id: 'm2',
    name: 'Mazmorra Infinita',
    author: 'pixelmancer',
    category: 'Niveles',
    rating: 4.5,
    downloads: '31.7k',
    version: 'v0.3.x',
    thumb: '/images/mod-2.png',
    featured: true,
  },
  {
    id: 'm3',
    name: 'Neón Ultra HD',
    author: 'glow.studio',
    category: 'Gráficos',
    rating: 5,
    downloads: '27.9k',
    version: 'v0.3.1',
    thumb: '/images/mod-3.png',
    featured: true,
  },
  {
    id: 'm4',
    name: 'Chiptune Remix Pack',
    author: 'wavebyte',
    category: 'Sonido',
    rating: 4,
    downloads: '12.4k',
    version: 'v0.2.x',
    thumb: '/images/mod-4.png',
  },
  {
    id: 'm5',
    name: 'Jefe Secreto: Krael',
    author: 'nyx_dev',
    category: 'Gameplay',
    rating: 4.5,
    downloads: '19.1k',
    version: 'v0.3.x',
    thumb: '/images/mod-5.png',
  },
  {
    id: 'm6',
    name: 'Arsenal Expandido',
    author: 'forge.mods',
    category: 'Gameplay',
    rating: 4,
    downloads: '9.8k',
    version: 'v0.3.x',
    thumb: '/images/mod-6.png',
  },
  {
    id: 'm7',
    name: 'Skins Retro 8-bit',
    author: 'oldschool',
    category: 'Personajes',
    rating: 3.5,
    downloads: '7.2k',
    version: 'v0.2.x',
    thumb: '/images/mod-1.png',
  },
  {
    id: 'm8',
    name: 'Bosque Corrupto',
    author: 'pixelmancer',
    category: 'Niveles',
    rating: 4,
    downloads: '5.6k',
    version: 'v0.3.x',
    thumb: '/images/mod-2.png',
  },
]

export const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#mecanicas', label: 'Mecánicas' },
  { href: '#video', label: 'Video' },
  { href: '#actualizaciones', label: 'Actualizaciones' },
  { href: '#mods', label: 'Mods' },
  { href: '#contacto', label: 'Contacto' },
]

export const screenshots = [
  { src: '/images/screen-1.png', alt: 'Combate contra un enemigo slime de neón en una mazmorra' },
  { src: '/images/screen-2.png', alt: 'Un boss gigante enfrentándose al héroe pixelado' },
  { src: '/images/screen-3.png', alt: 'Mapa del mundo explorable con biomas de neón' },
]
