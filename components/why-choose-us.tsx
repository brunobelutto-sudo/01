"use client"

import { MessageCircle, Clock, Package, MapPin, Smartphone, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_NUMBER = "5514997851670"

const reasons = [
  {
    icon: MessageCircle,
    title: "Atendimento direto",
    description: "Fale diretamente conosco, sem intermediários",
  },
  {
    icon: Clock,
    title: "Feito na hora",
    description: "Preparamos seu acaí no momento do pedido",
  },
  {
    icon: Package,
    title: "Embalagem segura",
    description: "Chega perfeito e fresquinho até você",
  },
  {
    icon: MapPin,
    title: "Marca local",
    description: "Apoie o comércio de Marília",
  },
  {
    icon: Smartphone,
    title: "Pedido fácil",
    description: "Em poucos cliques no WhatsApp",
  },
  {
    icon: Heart,
    title: "Feito com carinho",
    description: "Cada acaí preparado com amor",
  },
]

export function WhyChooseUs() {
  return (
    <section className="bg-lilac-light py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-display text-3xl sm:text-4xl text-brand-dark mb-2">
            Por que pedir na
          </h2>
          <h2 className="font-display text-3xl sm:text-4xl text-purple-primary">
            Peak Fresh?
          </h2>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 max-w-5xl mx-auto mb-8 sm:mb-12">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-purple-primary/20 transition-colors">
                <reason.icon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-primary" />
              </div>
              <h3 className="font-semibold text-brand-dark text-sm sm:text-base mb-1">
                {reason.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-purple leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-purple-primary rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center">
            <h3 className="font-display text-xl sm:text-2xl text-white mb-2">
              Pronto para experimentar?
            </h3>
            <p className="text-white/80 text-sm sm:text-base mb-6">
              Faça seu pedido agora e ganhe 15% de desconto!
            </p>
            
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-white hover:bg-white/95 text-purple-primary font-semibold text-base sm:text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Oi! Quero fazer meu pedido e garantir meu desconto de 15%!')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                Pedir pelo WhatsApp
              </a>
            </Button>

            <p className="mt-4 text-sm text-white/60">
              (14) 99785-1670
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
