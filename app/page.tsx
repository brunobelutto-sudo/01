import { HeroSection } from "@/components/hero-section"
import { TrustBadges } from "@/components/trust-badges"
import { MenuSection } from "@/components/menu-section"
import { PromoSection } from "@/components/promo-section"
import { DiscountSection } from "@/components/discount-section"
import { DeliverySection } from "@/components/delivery-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { PromoBanner } from "@/components/promo-banner"

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Urgency Banner - Creates FOMO */}
      <PromoBanner />
      
      {/* Hero - Value Proposition + Primary CTA */}
      <HeroSection />
      
      {/* Trust Badges - Reduce Objections */}
      <TrustBadges />
      
      {/* Menu - Product Showcase */}
      <MenuSection />
      
      {/* Promo Section - Weekly Deal */}
      <PromoSection />
      
      {/* Discount Section - WhatsApp CTA */}
      <DiscountSection />
      
      {/* Delivery Info - Address Objections */}
      <DeliverySection />
      
      {/* Social Proof - Build Trust */}
      <WhyChooseUs />
      
      {/* Footer */}
      <Footer />
      
      {/* Floating WhatsApp CTA - Always Visible */}
      <WhatsAppButton />
    </main>
  )
}
