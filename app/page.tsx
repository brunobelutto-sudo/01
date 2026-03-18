import { HeroSection } from "@/components/hero-section"
import { TrustBadges } from "@/components/trust-badges"
import { MenuSection } from "@/components/menu-section"
import { PromoSection } from "@/components/promo-section"
import { DeliverySection } from "@/components/delivery-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { PromoBanner } from "@/components/promo-banner"
import { LaunchBanner } from "@/components/launch-banner"
import { TestimonialsSection } from "@/components/testimonials-section"

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Launch Banner - Inaugural Promotion */}
      <LaunchBanner />
      
      {/* Hero - Value Proposition + Primary CTA */}
      <HeroSection />
      
      {/* Trust Badges - Reduce Objections */}
      <TrustBadges />
      
      {/* Menu - Product Showcase */}
      <MenuSection />
      
      {/* Promo Section - Weekly Deal */}
      <PromoSection />
      
      {/* Testimonials - Social Proof */}
      <TestimonialsSection />
      
      {/* Delivery Info - Address Objections */}
      <DeliverySection />
      
      {/* Why Choose Us - 4 Pillars */}
      <WhyChooseUs />
      
      {/* Footer */}
      <Footer />
      
      {/* Floating WhatsApp CTA - Always Visible */}
      <WhatsAppButton />
    </main>
  )
}
