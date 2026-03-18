"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MessageCircle, Calendar, Zap, Clock } from "lucide-react"

const WHATSAPP_NUMBER = "5514997851670"
const WHATSAPP_MESSAGE = encodeURIComponent("Oi! Quero aproveitar a promoção especial de quarta-feira!")

export function PromoSection() {
  const today = new Date()
  const dayOfWeek = today.getDay()
  const daysUntilWednesday = (3 - dayOfWeek + 7) % 7 || 7

  return (
    <section className="bg-brand-dark py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/3 w-96 h-96 bg-purple-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/3 -right-1/4 w-96 h-96 bg-yellow-300/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          
          {/* Promo Image */}
          <div className="order-2 lg:order-1">
            <div className="relative max-w-md mx-auto">
              {daysUntilWednesday === 7 && (
                <div className="absolute -top-3 -right-3 sm:top-6 sm:right-6 z-20 flex items-center gap-2 bg-yellow-300 text-brand-dark text-xs font-bold px-4 py-2 rounded-full animate-bounce">
                  <Zap className="w-4 h-4" />
                  DISPONÍVEL HOJE
                </div>
              )}
              
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-primary to-yellow-300 rounded-2xl sm:rounded-3xl blur-2xl group-hover:blur-3xl opacity-20 group-hover:opacity-30 transition-all" />
                <Image
                  src="/images/promo.jpg"
                  alt="Promoção especial quarta-feira"
                  width={500}
                  height={600}
                  className="relative rounded-2xl sm:rounded-3xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Promo Content */}
          <div className="order-1 lg:order-2">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 bg-purple-primary/20 border border-purple-primary/40 text-purple-primary text-sm font-bold px-4 py-2 rounded-full mb-4 sm:mb-6 uppercase tracking-wide">
              <Calendar className="w-4 h-4" />
              Quarta-feira especial
            </div>
            
            {/* Headline */}
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white mb-3 sm:mb-4 leading-tight">
              Promoção
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-primary via-yellow-300 to-purple-primary">
                Imperdível
              </span>
            </h2>

            {/* Description */}
            <p className="text-white/80 text-base sm:text-lg mb-8 leading-relaxed max-w-lg">
              Toda quarta-feira, aproveite desconto especial em qualquer bebida. Quantidade limitada!
            </p>

            {/* Offer Cards */}
            <div className="space-y-4 mb-8">
              <div className="bg-gradient-to-r from-yellow-300/10 to-transparent border border-yellow-300/30 rounded-xl p-4 sm:p-5 flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-300/20 border border-yellow-300/40 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-300" />
                </div>
                <div>
                  <p className="text-yellow-300 font-bold text-sm sm:text-base">Desconto na quarta</p>
                  <p className="text-white/70 text-xs sm:text-sm">Válido em qualquer tamanho</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-primary/10 to-transparent border border-purple-primary/30 rounded-xl p-4 sm:p-5 flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-primary/20 border border-purple-primary/40 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-purple-primary" />
                </div>
                <div>
                  <p className="text-purple-primary font-bold text-sm sm:text-base">Entrega rápida</p>
                  <p className="text-white/70 text-xs sm:text-sm">Preparado na hora</p>
                </div>
              </div>
            </div>

            {/* Days until info */}
            {daysUntilWednesday !== 7 && (
              <p className="text-white/60 text-sm mb-6">
                Faltam <span className="text-yellow-300 font-bold">{daysUntilWednesday}</span> dia{daysUntilWednesday !== 1 ? 's' : ''} para a próxima promoção
              </p>
            )}

            {/* CTA */}
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-purple-primary to-purple-primary/80 hover:from-purple-primary/90 hover:to-purple-primary text-white font-bold text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.05] active:scale-[0.95]"
            >
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                Aproveitar promoção
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
