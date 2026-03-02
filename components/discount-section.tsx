"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Zap, Percent, CreditCard, Check } from "lucide-react"

const WHATSAPP_NUMBER = "5514997851670"
const WHATSAPP_MESSAGE = encodeURIComponent("Oi! Quero fazer meu pedido e garantir meu desconto de 15%!")

const benefits = [
  { icon: Zap, text: "Resposta em até 2 minutos" },
  { icon: CreditCard, text: "Sem taxa de aplicativo" },
  { icon: Check, text: "Pedido direto com a loja" },
]

export function DiscountSection() {
  return (
    <section className="bg-purple-primary py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
            <Percent className="w-4 h-4" />
            Exclusivo WhatsApp
          </div>

            {/* Headline */}
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white mb-4 leading-tight">
            Peça pelo WhatsApp
            <br />
            <span className="text-yellow-300">ganhe 15% OFF</span>
          </h2>

          <p className="text-base sm:text-lg text-white/80 mb-8 sm:mb-10 max-w-xl mx-auto leading-relaxed">
            Além das promoções semanais, quem pede direto conosco no WhatsApp paga menos. Sem intermediários.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
            {benefits.map((benefit) => (
              <div 
                key={benefit.text}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2.5 rounded-full"
              >
                <benefit.icon className="w-4 h-4 text-yellow-300" />
                <span className="text-sm text-white font-medium">{benefit.text}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto bg-white hover:bg-white/95 text-purple-primary font-semibold text-base sm:text-lg px-10 py-6 sm:py-7 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
              Pedir com desconto agora
            </a>
          </Button>

          {/* Trust */}
          <p className="mt-6 text-sm text-white/60">
            Mais de 100 clientes já aproveitaram esse desconto
          </p>
        </div>
      </div>
    </section>
  )
}
