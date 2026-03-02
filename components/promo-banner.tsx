"use client"

import { useState, useEffect } from "react"
import { Sparkles, Clock } from "lucide-react"

export function PromoBanner() {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    // Calculate time until midnight
    const calculateTimeLeft = () => {
      const now = new Date()
      const midnight = new Date()
      midnight.setHours(23, 59, 59, 999)
      const diff = midnight.getTime() - now.getTime()
      
      return {
        hours: Math.floor(diff / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000)
      }
    }

    setTimeLeft(calculateTimeLeft())
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-purple-primary text-white py-2.5 px-4">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-yellow-300 flex-shrink-0" />
          <span className="text-sm sm:text-base font-medium">
            <strong className="text-yellow-300">15% OFF</strong> no WhatsApp
          </span>
        </div>
        
        <span className="hidden sm:inline text-white/40">|</span>
        
        <div className="flex items-center gap-2 text-sm">
          <Clock className="w-3.5 h-3.5 flex-shrink-0" />
          <span className="text-white/90">Oferta expira em:</span>
          <span className="font-mono font-bold bg-white/20 px-2 py-0.5 rounded text-yellow-300">
            {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
          </span>
        </div>
      </div>
    </div>
  )
}
