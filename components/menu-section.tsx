"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MessageCircle, Flame, Star, ChevronRight } from "lucide-react"

const WHATSAPP_NUMBER = "5514997851670"

const products = [
  {
    name: "Avalanche Tropical",
    description: "Acaí com morango, banana, granola crocante, leite em pó e leite condensado.",
    price300: 18.99,
    price550: 24.99,
    price770: 31.99,
    image: "/images/avalanche-tropical-logo.png",
    popular: true,
    tag: "Mais Pedido",
  },
  {
    name: "Nevasca de Morango",
    description: "Acaí batido com morango, creme de Ninho, leite em pó e condensado.",
    price300: 18.99,
    price550: 24.99,
    price770: 31.99,
    image: "/images/nevasca-morango-logo.png",
    popular: false,
  },
  {
    name: "Nevasca Branca",
    description: "Acaí com Bis branco, creme de Ninho, leite em pó e condensado.",
    price300: 18.99,
    price550: 24.99,
    price770: 31.99,
    image: "/images/nevasca-branca-logo.png",
    popular: false,
  },
  {
    name: "Avalanche Negra",
    description: "Acaí com Bis preto e Nutella, leite em pó Ninho e condensado.",
    price300: 19.99,
    price550: 27.99,
    price770: 34.99,
    image: "/images/avalanche-negra-logo.png",
    popular: true,
    tag: "Mais Vendido",
  },
  {
    name: "Morangotella",
    description: "Acaí com morango e Nutella, leite em pó Ninho e condensado.",
    price300: 19.99,
    price550: 27.99,
    price770: 34.99,
    image: "/images/morangotella-logo.png",
    popular: false,
  },
  {
    name: "Bananatella",
    description: "Acaí com banana e Nutella, leite em pó Ninho e condensado.",
    price300: 19.99,
    price550: 27.99,
    price770: 34.99,
    image: "/images/bananatella-logo.png",
    popular: false,
  },
]

export function MenuSection() {
  const [selectedSizes, setSelectedSizes] = useState<Record<string, '300ml' | '500ml'>>({})

  const getSelectedSize = (productName: string) => selectedSizes[productName] || '300ml'
  
  const handleSizeSelect = (productName: string, size: '300ml' | '500ml') => {
    setSelectedSizes(prev => ({ ...prev, [productName]: size }))
  }

  const handleOrderClick = (productName: string) => {
    const size = getSelectedSize(productName)
    const product = products.find(p => p.name === productName)
    const price = size === '300ml' ? product?.price300 : product?.price500
    const message = encodeURIComponent(
      `Oi! Quero pedir:\n\n${productName} - ${size}\nValor: R$ ${price?.toFixed(2).replace('.', ',')}\n\nQuero garantir meu desconto de 15%!`
    )
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank")
  }

  const formatPrice = (price: number) => {
    return `R$ ${price.toFixed(2).replace('.', ',')}`
  }

  return (
    <section className="bg-brand-dark py-12 sm:py-16 lg:py-20" id="cardapio">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-flex items-center gap-2 text-purple-primary text-sm font-medium mb-3">
            <Flame className="w-4 h-4" />
            Cardápio Completo
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white mb-2">
            Escolha o seu
          </h2>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-purple-primary">
            acai favorito
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {products.map((product) => {
            const selectedSize = getSelectedSize(product.name)
            const currentPrice = selectedSize === '300ml' ? product.price300 : selectedSize === '550ml' ? product.price550 : product.price770

            return (
              <div
                key={product.name}
                className={`relative bg-white/5 rounded-2xl sm:rounded-3xl overflow-hidden border transition-all duration-300 hover:border-purple-primary/50 hover:bg-white/10 ${
                  product.popular ? 'border-purple-primary/30' : 'border-white/10'
                }`}
              >
                {/* Popular Tag */}
                {product.tag && (
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 bg-purple-primary text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                    <Star className="w-3 h-3 fill-white" />
                    {product.tag}
                  </div>
                )}

                {/* Product Image */}
                <div className="relative aspect-square bg-gradient-to-br from-purple-primary/20 to-transparent">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Product Info */}
                <div className="p-4 sm:p-5">
                  <h3 className="font-display text-lg sm:text-xl text-white mb-1.5">
                    {product.name}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  
                  {/* Size Selector */}
                  <div className="flex gap-2 mb-4">
                    <button
                      onClick={() => handleSizeSelect(product.name, '300ml')}
                      className={`flex-1 py-2 px-3 rounded-xl text-sm font-medium transition-all ${
                        selectedSize === '300ml'
                          ? 'bg-purple-primary text-white'
                          : 'bg-white/10 text-white/70 hover:bg-white/20'
                      }`}
                    >
                      300ml
                    </button>
                    <button
                      onClick={() => handleSizeSelect(product.name, '550ml')}
                      className={`flex-1 py-2 px-3 rounded-xl text-sm font-medium transition-all ${
                        selectedSize === '550ml'
                          ? 'bg-purple-primary text-white'
                          : 'bg-white/10 text-white/70 hover:bg-white/20'
                      }`}
                    >
                      550ml
                    </button>
                    <button
                      onClick={() => handleSizeSelect(product.name, '770ml')}
                      className={`flex-1 py-2 px-3 rounded-xl text-sm font-medium transition-all ${
                        selectedSize === '770ml'
                          ? 'bg-purple-primary text-white'
                          : 'bg-white/10 text-white/70 hover:bg-white/20'
                      }`}
                    >
                      770ml
                    </button>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <span className="font-display text-xl sm:text-2xl text-white">
                        {formatPrice(currentPrice)}
                      </span>
                    </div>
                    <Button
                      onClick={() => handleOrderClick(product.name)}
                      size="sm"
                      className="bg-green-whatsapp hover:bg-green-whatsapp/90 text-white font-medium rounded-full px-4 py-2 flex items-center gap-1.5 transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span className="hidden sm:inline">Pedir</span>
                      <ChevronRight className="w-4 h-4 sm:hidden" />
                    </Button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8 sm:mt-12">
          <p className="text-white/60 text-sm mb-4">
            Não achou o que queria? Monte seu acaí personalizado!
          </p>
          <Button
            asChild
            variant="outline"
            className="bg-transparent border-purple-primary text-purple-primary hover:bg-purple-primary hover:text-white rounded-full px-6 py-5"
          >
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Oi! Quero montar um acai personalizado!')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Montar acai personalizado
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
