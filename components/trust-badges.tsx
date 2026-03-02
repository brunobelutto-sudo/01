"use client"

import { MapPin, Clock, MessageCircle, ShieldCheck } from "lucide-react"

const badges = [
  {
    icon: MapPin,
    title: "Toda Marilia",
    description: "Entrega em todos os bairros",
  },
  {
    icon: Clock,
    title: "Feito na hora",
    description: "Sempre fresquinho",
  },
  {
    icon: MessageCircle,
    title: "Direto no Zap",
    description: "Sem intermediarios",
  },
  {
    icon: ShieldCheck,
    title: "Qualidade",
    description: "Ingredientes premium",
  },
]

export function TrustBadges() {
  return (
    <section className="bg-brand-dark py-6 sm:py-8" id="beneficios">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {badges.map((badge) => (
            <div
              key={badge.title}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-3 text-center sm:text-left p-3 sm:p-4 rounded-2xl bg-white/10"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <badge.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm sm:text-base">
                  {badge.title}
                </h3>
                <p className="text-white/70 text-xs sm:text-sm">
                  {badge.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
