import { HeroSection } from "@/components/hero-section"
import { ArchitectureSection } from "@/components/architecture-section"
import { FeaturesSection } from "@/components/features-section"
import { IntegrationsSection } from "@/components/integrations-section"
import { MetricsSection } from "@/components/metrics-section"
import { CTASection } from "@/components/cta-section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Navbar />
      <HeroSection />
      <ArchitectureSection />
      <FeaturesSection />
      <IntegrationsSection />
      <MetricsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
