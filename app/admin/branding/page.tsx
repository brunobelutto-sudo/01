'use client';

import { useEffect, useState } from 'react';
import { AdminLayout } from '@/components/admin/admin-layout';
import { FormSection } from '@/components/admin/form-section';
import { ImageUploader } from '@/components/admin/image-uploader';
import { ColorPicker } from '@/components/admin/color-picker';

interface BrandingData {
  siteName: string;
  logo: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  whatsappNumber: string;
  email: string;
  phone: string;
}

export default function AdminBrandingPage() {
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
      body: JSON.stringify({ section: 'branding', data: branding }),
    });

    if (!response.ok) {
      throw new Error('Erro ao salvar branding');
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
        <h1 className="text-3xl font-display text-white mb-2">Branding</h1>
        <p className="text-white/60">
          Configure logo, cores e informações da sua marca
        </p>
      </div>

      <FormSection
        title="Identidade Visual"
        onSave={handleSave}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Nome do Site
            </label>
            <input
              type="text"
              value={branding.siteName}
              onChange={(e) =>
                setBranding({ ...branding, siteName: e.target.value })
              }
              className="w-full px-4 py-3 bg-white/5 border border-purple-primary/20 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-purple-primary/60 transition-colors"
            />
          </div>

          <ImageUploader
            label="Logo"
            value={branding.logo}
            onChange={(url) => setBranding({ ...branding, logo: url })}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ColorPicker
            label="Cor Primária"
            value={branding.primaryColor}
            onChange={(color) =>
              setBranding({ ...branding, primaryColor: color })
            }
          />
          <ColorPicker
            label="Cor Secundária"
            value={branding.secondaryColor}
            onChange={(color) =>
              setBranding({ ...branding, secondaryColor: color })
            }
          />
          <ColorPicker
            label="Cor de Destaque"
            value={branding.accentColor}
            onChange={(color) =>
              setBranding({ ...branding, accentColor: color })
            }
          />
        </div>
      </FormSection>

      <FormSection
        title="Informações de Contato"
        onSave={handleSave}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              WhatsApp
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
        </div>
      </FormSection>
    </AdminLayout>
  );
}
