"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MessageCircle, Calendar, Gift, AlertCircle } from "lucide-react"

const WHATSAPP_NUMBER = "5514997851670"
const WHATSAPP_MESSAGE = encodeURIComponent("Oi! Quero aproveitar a promocao de quarta-feira - acai em dobro!")

export function PromoSection() {
  const today = new Date()
  const isWednesday = today.getDay() === 3

  return (
    <section className="bg-lilac-light py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          
          {/* Promo Image */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Live Badge */}
              {isWednesday && (
                <div className="absolute -top-2 -right-2 sm:top-4 sm:right-4 z-10 flex items-center gap-2 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full animate-pulse">
                  <span className="w-2 h-2 bg-white rounded-full" />
                  HOJE
                </div>
              )}
              
              <Image
                src="/images/promo.jpg"
                alt="Promocao acai em dobro"
                width={500}
                height={700}
                className="rounded-2xl sm:rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>

          {/* Promo Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left order-1 lg:order-2">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 bg-purple-primary/10 text-purple-primary text-sm font-medium px-4 py-2 rounded-full mb-4 sm:mb-6">
              <Calendar className="w-4 h-4" />
              Promocao de Quarta-feira
            </div>
            
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-brand-dark mb-3 sm:mb-4 leading-tight">
              Acai em
              <span className="text-purple-primary"> Dobro</span>
            </h2>
            
            {/* Offer Box */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg mb-6 sm:mb-8 max-w-md mx-auto lg:mx-0">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Gift className="w-5 h-5 sm:w-6 sm:h-6 text-purple-primary" />
                </div>
                <div className="text-left">
                  <p className="text-gray-purple text-sm sm:text-base mb-1">
                    Na compra de qualquer produto
                  </p>
                  <p className="font-display text-xl sm:text-2xl text-brand-dark">
                    + R$ 7,00 = Copo de 300ml
                  </p>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="flex items-start gap-2 text-left bg-yellow-50 rounded-xl p-3 sm:p-4 mb-6 sm:mb-8 max-w-md mx-auto lg:mx-0">
              <AlertCircle className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-yellow-800">
                Promocao valida apenas as quartas-feiras para pedidos via WhatsApp.
              </p>
            </div>

            {/* CTA */}
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-green-whatsapp hover:bg-green-whatsapp/90 text-white font-semibold text-base sm:text-lg px-8 py-6 sm:py-7 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                {isWednesday ? "Aproveitar promocao AGORA" : "Quero essa promocao!"}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
