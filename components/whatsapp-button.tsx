"use client"

import { MessageCircle } from "lucide-react"

const WHATSAPP_NUMBER = "5514997851670"
const WHATSAPP_MESSAGE = encodeURIComponent("Oi! Quero fazer um pedido!")

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 group"
      aria-label="Abrir WhatsApp para fazer pedido"
    >
      {/* Pulse Animation Rings */}
      <span className="absolute inset-0 rounded-full bg-green-whatsapp/60 animate-ping" />
      <span className="absolute inset-0 rounded-full bg-green-whatsapp/40 animate-pulse" />
      
      {/* Main Button */}
      <div className="relative flex items-center gap-2 bg-green-whatsapp hover:bg-green-600 text-white px-4 sm:px-5 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95">
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
        <span className="font-semibold text-sm sm:text-base hidden sm:block">
          Pedir agora
        </span>
      </div>

      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none sm:hidden">
        <div className="bg-dark-purple text-white text-xs font-medium px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
          Pedir pelo WhatsApp
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-dark-purple" />
        </div>
      </div>
    </a>
  )
}
