"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MessageCircle, Star, Users, Truck } from "lucide-react"

const WHATSAPP_NUMBER = "5514997851670"
const WHATSAPP_MESSAGE = encodeURIComponent("Oi! Quero fazer um pedido e garantir meu desconto de 15%!")

export function HeroSection() {
  return (
    <section className="relative bg-lilac-light overflow-hidden min-h-[calc(100vh-44px)] flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-sm">
              <div className="flex -space-x-1">
                {[1,2,3].map((i) => (
                  <div key={i} className="w-6 h-6 rounded-full bg-purple-primary/20 border-2 border-white flex items-center justify-center">
                    <Users className="w-3 h-3 text-purple-primary" />
                  </div>
                ))}
              </div>
              <span className="text-sm font-medium text-dark-purple">
                +100 clientes em Marília
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-brand-dark leading-[1.1] mb-4">
              O açaí mais
              <br />
              <span className="text-purple-primary">gostoso</span> de
              <br />
              Marília
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-gray-purple mb-6 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Entrega rápida em toda a cidade. Peça pelo WhatsApp e ganhe{" "}
              <strong className="text-purple-primary">15% de desconto</strong> no primeiro pedido.
            </p>

            {/* Social Proof */}
            <div className="flex items-center justify-center lg:justify-start gap-1 mb-8">
              {[1,2,3,4,5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-sm text-gray-purple font-medium">
                4.9 (56 avaliações)
              </span>
            </div>
            
            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-green-whatsapp hover:bg-green-whatsapp/90 text-white font-semibold text-base sm:text-lg px-8 py-6 sm:py-7 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3"
                >
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                  Pedir agora com 15% OFF
                </a>
              </Button>

              <div className="flex items-center gap-2 text-sm text-gray-purple">
                <Truck className="w-4 h-4" />
                <span>Entrega em ~30min</span>
              </div>
            </div>

            {/* Urgency */}
            <p className="mt-4 text-sm text-gray-purple">
              Já são <strong className="text-brand-dark">23 pedidos</strong> somente hoje
            </p>
          </div>

          {/* Hero Image */}
          <div className="flex-1 order-1 lg:order-2 w-full max-w-sm sm:max-w-md lg:max-w-lg">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-purple-primary/20 rounded-full blur-3xl scale-75" />
              
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Agrupar%203-r56fbqbrDJLXnPlOdF4ALQhqvFUpa3.png"
                alt="Copo de açaí Peak Fresh com cobertura cremosa e toppings"
                width={600}
                height={700}
                className="relative z-10 w-full h-auto object-contain drop-shadow-2xl"
                priority
              />

              {/* Floating Badge */}
              <div className="absolute -right-2 sm:right-4 top-1/4 bg-white rounded-2xl p-3 sm:p-4 shadow-xl animate-bounce z-20">
                <div className="text-center">
                  <span className="font-display text-2xl sm:text-3xl text-purple-primary">15%</span>
                  <p className="text-xs text-gray-purple font-medium">OFF</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-12 sm:h-16 lg:h-20"
        >
          <path
            d="M0 100L60 90C120 80 240 60 360 50C480 40 600 40 720 45C840 50 960 60 1080 65C1200 70 1320 70 1380 70L1440 70V100H0Z"
            fill="rgb(26, 24, 35)"
          />
        </svg>
      </div>
    </section>
  )
}
