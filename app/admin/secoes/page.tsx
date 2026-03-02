'use client';

import { useEffect, useState } from 'react';
import { AdminLayout } from '@/components/admin/admin-layout';
import { FormSection } from '@/components/admin/form-section';
import { ImageUploader } from '@/components/admin/image-uploader';

interface SecoesData {
  promo: {
    title: string;
    description: string;
    discount: string;
    image: string;
  };
  delivery: {
    title: string;
    time: string;
    timeLabel: string;
    freeDelivery: boolean;
    minValue: number;
  };
}

export default function AdminSecoesPage() {
  const [secoes, setSecoes] = useState<SecoesData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const response = await fetch('/api/admin/config');
        const data = await response.json();
        setSecoes(data.secoes);
      } catch (error) {
        console.error('Erro ao carregar config:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchConfig();
  }, []);

  const handleSave = async () => {
    if (!secoes) return;

    const response = await fetch('/api/admin/config', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ section: 'secoes', data: secoes }),
    });

    if (!response.ok) {
      throw new Error('Erro ao salvar seções');
    }
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="text-center text-white/60">Carregando...</div>
      </AdminLayout>
    );
  }

  if (!secoes) {
    return (
      <AdminLayout>
        <div className="text-center text-white/60">Erro ao carregar dados</div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-display text-white mb-2">Seções</h1>
        <p className="text-white/60">Configure as seções de promoção e entrega</p>
      </div>

      <FormSection
        title="Seção de Promoção"
        onSave={handleSave}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Título
              </label>
              <input
                type="text"
                value={secoes.promo.title}
                onChange={(e) =>
                  setSecoes({
                    ...secoes,
                    promo: { ...secoes.promo, title: e.target.value },
                  })
                }
                className="w-full px-4 py-3 bg-white/5 border border-purple-primary/20 rounded-lg text-white focus:outline-none focus:border-purple-primary/60"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Descrição
              </label>
              <textarea
                value={secoes.promo.description}
                onChange={(e) =>
                  setSecoes({
                    ...secoes,
                    promo: { ...secoes.promo, description: e.target.value },
                  })
                }
                rows={3}
                className="w-full px-4 py-3 bg-white/5 border border-purple-primary/20 rounded-lg text-white focus:outline-none focus:border-purple-primary/60"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Desconto
              </label>
              <input
                type="text"
                value={secoes.promo.discount}
                onChange={(e) =>
                  setSecoes({
                    ...secoes,
                    promo: { ...secoes.promo, discount: e.target.value },
                  })
                }
                className="w-full px-4 py-3 bg-white/5 border border-purple-primary/20 rounded-lg text-white focus:outline-none focus:border-purple-primary/60"
              />
            </div>
          </div>

          <ImageUploader
            label="Imagem da Promoção"
            value={secoes.promo.image}
            onChange={(url) =>
              setSecoes({
                ...secoes,
                promo: { ...secoes.promo, image: url },
              })
            }
          />
        </div>
      </FormSection>

      <FormSection
        title="Seção de Entrega"
        onSave={handleSave}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Título
              </label>
              <input
                type="text"
                value={secoes.delivery.title}
                onChange={(e) =>
                  setSecoes({
                    ...secoes,
                    delivery: { ...secoes.delivery, title: e.target.value },
                  })
                }
                className="w-full px-4 py-3 bg-white/5 border border-purple-primary/20 rounded-lg text-white focus:outline-none focus:border-purple-primary/60"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Tempo de Entrega
              </label>
              <input
                type="text"
                value={secoes.delivery.time}
                onChange={(e) =>
                  setSecoes({
                    ...secoes,
                    delivery: { ...secoes.delivery, time: e.target.value },
                  })
                }
                className="w-full px-4 py-3 bg-white/5 border border-purple-primary/20 rounded-lg text-white focus:outline-none focus:border-purple-primary/60"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Rótulo do Tempo
              </label>
              <input
                type="text"
                value={secoes.delivery.timeLabel}
                onChange={(e) =>
                  setSecoes({
                    ...secoes,
                    delivery: {
                      ...secoes.delivery,
                      timeLabel: e.target.value,
                    },
                  })
                }
                className="w-full px-4 py-3 bg-white/5 border border-purple-primary/20 rounded-lg text-white focus:outline-none focus:border-purple-primary/60"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Valor Mínimo para Entrega
              </label>
              <input
                type="number"
                value={secoes.delivery.minValue}
                onChange={(e) =>
                  setSecoes({
                    ...secoes,
                    delivery: {
                      ...secoes.delivery,
                      minValue: parseFloat(e.target.value),
                    },
                  })
                }
                className="w-full px-4 py-3 bg-white/5 border border-purple-primary/20 rounded-lg text-white focus:outline-none focus:border-purple-primary/60"
              />
            </div>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={secoes.delivery.freeDelivery}
                onChange={(e) =>
                  setSecoes({
                    ...secoes,
                    delivery: {
                      ...secoes.delivery,
                      freeDelivery: e.target.checked,
                    },
                  })
                }
                className="w-4 h-4 rounded"
              />
              <span className="text-white/80">Entrega gratuita</span>
            </label>
          </div>
        </div>
      </FormSection>
    </AdminLayout>
  );
}
