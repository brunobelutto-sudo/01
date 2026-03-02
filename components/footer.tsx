"use client"

import Image from "next/image"
import { MessageCircle, MapPin, Phone, Instagram, Clock } from "lucide-react"

const WHATSAPP_NUMBER = "5514997851670"

export function Footer() {
  return (
    <footer className="bg-brand-dark py-10 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          
          {/* Main Footer Content */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-12 mb-8 lg:mb-12">
            
            {/* Logo & Description */}
            <div className="text-center lg:text-left">
              <Image
                src="/images/logo.png"
                alt="Peak Fresh Acai"
                width={180}
                height={70}
                className="brightness-0 invert mx-auto lg:mx-0 mb-4"
              />
              <p className="text-white/60 text-sm max-w-xs mx-auto lg:mx-0">
                O acai mais gostoso de Marilia, feito com ingredientes selecionados e muito carinho.
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 sm:gap-8 lg:gap-4">
              <div className="flex items-center gap-3 text-white/80">
                <MapPin className="w-5 h-5 text-purple-primary flex-shrink-0" />
                <span className="text-sm">Marilia - SP</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Clock className="w-5 h-5 text-purple-primary flex-shrink-0" />
                <span className="text-sm">Seg-Dom: 14h - 22h</span>
              </div>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white hover:text-purple-primary transition-colors"
              >
                <Phone className="w-5 h-5 text-purple-primary flex-shrink-0" />
                <span className="font-semibold">(14) 99785-1670</span>
              </a>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col items-center lg:items-end gap-4">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Oi! Quero fazer um pedido!')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-whatsapp hover:bg-green-whatsapp/90 text-white font-medium px-6 py-3 rounded-full transition-all hover:scale-[1.02]"
              >
                <MessageCircle className="w-5 h-5" />
                Fazer pedido
              </a>
              
              <a
                href="https://instagram.com/peakfresh.acai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
              >
                <Instagram className="w-4 h-4" />
                @peakfresh.acai
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 pt-6 lg:pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <p className="text-white/40 text-xs sm:text-sm">
                © {new Date().getFullYear()} Peak Fresh Acai. Todos os direitos reservados.
              </p>
              <p className="text-white/40 text-xs sm:text-sm">
                Feito com amor em Marilia - SP
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
