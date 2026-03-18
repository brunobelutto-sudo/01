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
    <section className="bg-brand-dark py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-0 w-72 h-72 bg-purple-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-16 lg:mb-20">
          <p className="text-purple-primary text-sm font-semibold uppercase tracking-widest mb-3 sm:mb-4">
            O que nos torna especial
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white mb-4 leading-tight">
            Quatro pilares de
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-primary to-yellow-300">
              excelência
            </span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-sm sm:text-base">
            Cada elemento pensado para oferecer a melhor experiência
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto mb-14 sm:mb-16">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <div
                key={index}
                className={`group relative bg-gradient-to-br ${pillar.gradient} border border-white/10 hover:border-white/20 rounded-2xl sm:rounded-3xl p-7 sm:p-8 lg:p-10 transition-all duration-300 hover:translate-y-[-4px]`}
              >
                {/* Icon background */}
                <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                  <Icon className="w-full h-full text-white blur-sm" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-white/10 group-hover:border-white/20 transition-all">
                    <Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${pillar.color}`} />
                  </div>

                  <h3 className="font-display text-lg sm:text-xl lg:text-2xl text-white mb-2 sm:mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Border accent */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border border-transparent bg-gradient-to-r from-purple-primary/0 via-transparent to-yellow-300/0 group-hover:from-purple-primary/20 group-hover:via-transparent group-hover:to-yellow-300/20 transition-all opacity-0 group-hover:opacity-100 pointer-events-none" />
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="relative max-w-3xl mx-auto">
          <div className="relative bg-gradient-to-br from-purple-primary/90 to-purple-primary rounded-2xl sm:rounded-3xl overflow-hidden p-8 sm:p-10 lg:p-12 border border-purple-primary/50">
            {/* Background accent */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-yellow-300/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              <h3 className="font-display text-2xl sm:text-3xl text-white mb-3 text-center">
                Aproveite a inauguração
              </h3>
              <p className="text-white/90 text-sm sm:text-base text-center mb-8">
                Faça seu pedido agora e ganhe um brinde exclusivo + 20% OFF no próximo pedido
              </p>

              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto block mx-auto bg-white hover:bg-white/95 text-purple-primary font-bold text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-[1.05] active:scale-[0.95]"
              >
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Oi! Quero aproveitar a promoção de inauguração com brinde + 20% OFF!')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fazer Pedido no WhatsApp
                </a>
              </Button>

              <p className="text-center text-white/70 text-xs sm:text-sm mt-5">
                Resposta rápida • Entrega segura • Qualidade garantida
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
