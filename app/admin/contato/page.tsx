'use client';

import { useEffect, useState } from 'react';
import { AdminLayout } from '@/components/admin/admin-layout';
import { FormSection } from '@/components/admin/form-section';

interface BrandingData {
  whatsappNumber: string;
  email: string;
  phone: string;
}

export default function AdminContatoPage() {
  const [branding, setBranding] = useState<BrandingData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const response = await fetch('/api/admin/config');
        const data = await response.json();
        setBranding(data.branding);
      } catch (error) {
        console.error('Erro ao carregar config:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchConfig();
  }, []);

  const handleSave = async () => {
    if (!branding) return;

    const response = await fetch('/api/admin/config', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        section: 'branding',
        data: {
          ...branding,
        },
      }),
    });

    if (!response.ok) {
      throw new Error('Erro ao salvar contato');
    }
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="text-center text-white/60">Carregando...</div>
      </AdminLayout>
    );
  }

  if (!branding) {
    return (
      <AdminLayout>
        <div className="text-center text-white/60">Erro ao carregar dados</div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-display text-white mb-2">Contato</h1>
        <p className="text-white/60">
          Atualize os dados de contato da sua empresa
        </p>
      </div>

      <FormSection title="Informações de Contato" onSave={handleSave}>
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            WhatsApp (apenas números, com código do país)
          </label>
          <input
            type="text"
            value={branding.whatsappNumber}
            onChange={(e) =>
              setBranding({ ...branding, whatsappNumber: e.target.value })
            }
            placeholder="551999999999"
            className="w-full px-4 py-3 bg-white/5 border border-purple-primary/20 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-purple-primary/60 transition-colors"
          />
          <p className="text-xs text-white/40 mt-2">
            Exemplo: 551999999999 (55 = Brasil, 19 = código da cidade)
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Email
          </label>
          <input
            type="email"
            value={branding.email}
            onChange={(e) =>
              setBranding({ ...branding, email: e.target.value })
            }
            placeholder="contato@peakfresh.com.br"
            className="w-full px-4 py-3 bg-white/5 border border-purple-primary/20 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-purple-primary/60 transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Telefone
          </label>
          <input
            type="tel"
            value={branding.phone}
            onChange={(e) =>
              setBranding({ ...branding, phone: e.target.value })
            }
            placeholder="(19) 99999-9999"
            className="w-full px-4 py-3 bg-white/5 border border-purple-primary/20 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-purple-primary/60 transition-colors"
          />
        </div>
      </FormSection>
    </AdminLayout>
  );
}
