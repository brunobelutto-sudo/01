'use client';

import { AdminLayout } from '@/components/admin/admin-layout';
import { useEffect, useState } from 'react';
import { Palette, ShoppingCart, FileText, Mail, Image } from 'lucide-react';
import Link from 'next/link';

interface Stats {
  totalProducts: number;
  sections: number;
}

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<Stats>({ totalProducts: 0, sections: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/admin/config');
        const data = await response.json();
        setStats({
          totalProducts: data.produtos?.length || 0,
          sections: Object.keys(data.secoes || {}).length,
        });
      } catch (error) {
        console.error('Erro ao carregar stats:', error);
      }
    };

    fetchStats();
  }, []);

  const dashboardItems = [
    {
      title: 'Branding',
      description: 'Logo, cores e identidade visual',
      icon: Palette,
      href: '/admin/branding',
      color: 'from-purple-primary to-purple-primary/60',
    },
    {
      title: 'Hero Section',
      description: 'Imagem e textos principais',
      icon: Image,
      href: '/admin/hero',
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Produtos',
      description: `${stats.totalProducts} produtos cadastrados`,
      icon: ShoppingCart,
      href: '/admin/produtos',
      color: 'from-green-500 to-green-600',
    },
    {
      title: 'Seções',
      description: 'Promoção, entrega e benefícios',
      icon: FileText,
      href: '/admin/secoes',
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      title: 'Contato',
      description: 'WhatsApp, email e telefone',
      icon: Mail,
      href: '/admin/contato',
      color: 'from-pink-500 to-pink-600',
    },
  ];

  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-display text-white mb-2">Dashboard</h1>
        <p className="text-white/60">Gerencie todo o conteúdo do seu site</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {dashboardItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="group relative overflow-hidden bg-white/5 border border-purple-primary/20 rounded-xl p-6 hover:border-purple-primary/40 transition-all duration-300"
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-r ${item.color} transition-opacity duration-300`}
              />

              {/* Icon background */}
              <div className={`absolute -right-8 -top-8 w-32 h-32 bg-gradient-to-r ${item.color} opacity-10 rounded-full group-hover:opacity-20 transition-opacity duration-300`} />

              {/* Content */}
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-lg font-semibold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-white/60">{item.description}</p>

                <div className="mt-4 flex items-center text-purple-primary text-sm font-medium group-hover:gap-2 transition-all duration-300">
                  Acessar
                  <span className="ml-2">→</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Info box */}
      <div className="mt-8 bg-purple-primary/10 border border-purple-primary/20 rounded-xl p-6">
        <h3 className="text-white font-semibold mb-2">Dica</h3>
        <p className="text-white/70 text-sm">
          Use este dashboard para atualizar textos, imagens, cores e todas as informações do seu site Peak Fresh Açaí. As mudanças são salvas automaticamente.
        </p>
      </div>
    </AdminLayout>
  );
}
