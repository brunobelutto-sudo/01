'use client';

import { useEffect, useState } from 'react';
import { AdminLayout } from '@/components/admin/admin-layout';
import { FormSection } from '@/components/admin/form-section';
import { ImageUploader } from '@/components/admin/image-uploader';

interface HeroData {
  headline: string;
  subheadline: string;
  cta: string;
  image: string;
  urgency: string;
}

export default function AdminHeroPage() {
  const [hero, setHero] = useState<HeroData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const response = await fetch('/api/admin/config');
        const data = await response.json();
        setHero(data.hero);
      } catch (error) {
        console.error('Erro ao carregar config:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchConfig();
  }, []);

  const handleSave = async () => {
    if (!hero) return;

    const response = await fetch('/api/admin/config', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ section: 'hero', data: hero }),
    });

    if (!response.ok) {
      throw new Error('Erro ao salvar hero section');
    }
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="text-center text-white/60">Carregando...</div>
      </AdminLayout>
    );
  }

  if (!hero) {
    return (
      <AdminLayout>
        <div className="text-center text-white/60">Erro ao carregar dados</div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-display text-white mb-2">Hero Section</h1>
        <p className="text-white/60">Configure a seção principal do seu site</p>
      </div>

      <FormSection title="Hero Section" onSave={handleSave}>
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Headline Principal
          </label>
          <input
            type="text"
            value={hero.headline}
            onChange={(e) => setHero({ ...hero, headline: e.target.value })}
            className="w-full px-4 py-3 bg-white/5 border border-purple-primary/20 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-purple-primary/60 transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Subtítulo
          </label>
          <textarea
            value={hero.subheadline}
            onChange={(e) =>
              setHero({ ...hero, subheadline: e.target.value })
            }
            rows={3}
            className="w-full px-4 py-3 bg-white/5 border border-purple-primary/20 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-purple-primary/60 transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Texto do Botão
          </label>
          <input
            type="text"
            value={hero.cta}
            onChange={(e) => setHero({ ...hero, cta: e.target.value })}
            className="w-full px-4 py-3 bg-white/5 border border-purple-primary/20 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-purple-primary/60 transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Mensagem de Urgência
          </label>
          <input
            type="text"
            value={hero.urgency}
            onChange={(e) => setHero({ ...hero, urgency: e.target.value })}
            placeholder="Ex: Já são 23 pedidos somente hoje"
            className="w-full px-4 py-3 bg-white/5 border border-purple-primary/20 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-purple-primary/60 transition-colors"
          />
        </div>

        <ImageUploader
          label="Imagem Hero"
          value={hero.image}
          onChange={(url) => setHero({ ...hero, image: url })}
        />
      </FormSection>
    </AdminLayout>
  );
}
