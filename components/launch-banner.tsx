'use client'

import { useEffect, useState } from 'react'
import { Sparkles, Gift } from 'lucide-react'

export function LaunchBanner() {
  const [remaining, setRemaining] = useState(50)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval)
          return 0
        }
        return prev - 1
      })
      setIsAnimating(true)
      setTimeout(() => setIsAnimating(false), 300)
    }, 120000) // Atualiza a cada 2 minutos

    return () => clearInterval(interval)
  }, [])

  const percentage = (remaining / 50) * 100

  return (
    <div className="bg-gradient-to-r from-purple-primary via-brand-dark to-purple-primary relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-purple-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-yellow-300/5 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-300 animate-spin" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-yellow-300 uppercase tracking-wide">
                Inauguração!
              </p>
              <p className="text-white font-semibold text-sm sm:text-base">
                Primeiros 50 pedidos ganham brinde + 20% OFF no próximo
              </p>
            </div>
            <Gift className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-300 hidden sm:block" />
          </div>

          {/* Counter */}
          <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
            <div className="text-right">
              <p className="text-xs text-white/70">Restando</p>
              <p className={`text-2xl sm:text-3xl font-bold transition-all duration-300 ${
                isAnimating ? 'text-yellow-300 scale-110' : 'text-white scale-100'
              }`}>
                {remaining}
              </p>
            </div>

            {/* Progress bar */}
            <div className="hidden sm:block w-24 h-2 bg-white/10 rounded-full overflow-hidden border border-white/20">
              <div
                className="h-full bg-gradient-to-r from-yellow-300 to-yellow-200 transition-all duration-500 rounded-full"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
