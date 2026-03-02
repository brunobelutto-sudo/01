"use client"

import { Truck, MapPin, Clock, CheckCircle2 } from "lucide-react"

const neighborhoods = [
  "Centro", "Cascata", "Alto Cafezal", "Fragata", "Palmital", 
  "Santa Antonieta", "Altos do Marilia", "Esmeralda", "Maria Isabel"
]

export function DeliverySection() {
  return (
    <section className="bg-lilac-light py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Main Card */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10 relative overflow-hidden">
            
            {/* Decorative Background */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-purple-primary/5 rounded-full" />
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-purple-primary/5 rounded-full" />

            <div className="relative z-10">
              {/* Header */}
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-6 sm:mb-8 text-center sm:text-left">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-purple-primary rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <Truck className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <div>
                  <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-brand-dark mb-1">
                    Entregamos em toda
                  </h2>
                  <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-purple-primary">
                    Marilia - SP
                  </h2>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="flex items-center gap-3 bg-lilac-light/50 rounded-xl sm:rounded-2xl p-3 sm:p-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-purple-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-dark text-sm sm:text-base">+30 bairros</p>
                    <p className="text-xs sm:text-sm text-gray-purple">Cobertura total</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-lilac-light/50 rounded-xl sm:rounded-2xl p-3 sm:p-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-purple-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-dark text-sm sm:text-base">~30 minutos</p>
                    <p className="text-xs sm:text-sm text-gray-purple">Tempo medio</p>
                  </div>
                </div>
              </div>

              {/* Neighborhoods */}
              <div>
                <p className="text-sm font-medium text-gray-purple mb-3">
                  Alguns bairros que atendemos:
                </p>
                <div className="flex flex-wrap gap-2">
                  {neighborhoods.map((neighborhood) => (
                    <span
                      key={neighborhood}
                      className="inline-flex items-center gap-1.5 bg-lilac-light text-brand-dark text-xs sm:text-sm px-3 py-1.5 rounded-full"
                    >
                      <CheckCircle2 className="w-3 h-3 text-purple-primary" />
                      {neighborhood}
                    </span>
                  ))}
                  <span className="text-xs sm:text-sm text-purple-primary font-medium px-3 py-1.5">
                    e muito mais...
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
