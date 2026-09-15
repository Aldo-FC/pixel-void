import { Navbar } from '@/components/game/navbar'
import { Hero } from '@/components/game/hero'
import { MechanicsSection } from '@/components/game/mechanics-section'
import { VideoSection } from '@/components/game/video-section'
import { ChangelogSection } from '@/components/game/changelog-section'
import { ModsSection } from '@/components/game/mods-section'
import { ContactSection } from '@/components/game/contact-section'
import { Footer } from '@/components/game/footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MechanicsSection />
        <VideoSection />
        <ChangelogSection />
        <ModsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
