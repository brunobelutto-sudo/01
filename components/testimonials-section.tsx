'use client'

import { Star } from 'lucide-react'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

interface Testimonial {
  name: string
  role: string
  content: string
  rating: number
  image: string
}

const testimonials: Testimonial[] = [
  {
    name: "Maria Silva",
    role: "Cliente há 3 meses",
    content: "Melhor açaí que já experimentei em Marília! Ingredientes fresquinhos e o atendimento no WhatsApp é impecável.",
    rating: 5,
    image: "/placeholder-user.jpg"
  },
  {
    name: "João Santos",
    role: "Cliente frequente",
    content: "Adoro a qualidade! Cada pedido vem perfeito. A Avalanche Negra é simplesmente sensacional.",
    rating: 5,
    image: "/placeholder-user.jpg"
  },
  {
    name: "Ana Costa",
    role: "Cliente desde abertura",
    content: "Peak Fresh nasceu para revolucionar. Criatividade nos sabores e comprometimento com qualidade premium.",
    rating: 5,
    image: "/placeholder-user.jpg"
  }
]

export function TestimonialsSection() {
  return (
    <section className="bg-brand-dark py-16 sm:py-20 lg:py-24" id="depoimentos">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 text-purple-primary text-sm font-medium mb-3 sm:mb-4">
            <Star className="w-4 h-4" />
            O que nossos clientes dizem
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white mb-4 leading-tight">
            Qualidade que<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-100">
              fala por si
            </span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-sm sm:text-base">
            Ouça quem já provou a diferença Peak Fresh Açaí
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-purple-primary/30 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:translate-y-[-4px]"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-300 text-yellow-300" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6 line-clamp-4">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <Avatar className="w-10 h-10 sm:w-12 sm:h-12">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback className="bg-purple-primary/20 text-purple-primary">
                    {testimonial.name[0]}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-white/50 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-white/60 text-sm mb-4">
            Junte-se a centenas de clientes satisfeitos
          </p>
          <a
            href="#cardapio"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-primary to-purple-primary/80 hover:from-purple-primary/90 hover:to-purple-primary text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-purple-primary/20"
          >
            Faça seu pedido agora
          </a>
        </div>
      </div>
    </section>
  )
}
