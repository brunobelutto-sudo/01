'use client';

import { useState } from 'react';
import { Save, AlertCircle } from 'lucide-react';

interface FormSectionProps {
  title: string;
  children: React.ReactNode;
  onSave: () => Promise<void>;
}

export function FormSection({ title, children, onSave }: FormSectionProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSave = async () => {
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      await onSave();
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err: any) {
      setError(err.message || 'Erro ao salvar');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white/5 border border-purple-primary/20 rounded-xl p-6 mb-6">
      <h2 className="text-xl font-display text-white mb-6">{title}</h2>

      <div className="space-y-6 mb-6">{children}</div>

      {error && (
        <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-6">
          <AlertCircle className="w-5 h-5 text-red-500" />
          <p className="text-sm text-red-200">{error}</p>
        </div>
      )}

      {success && (
        <div className="flex items-center gap-3 bg-green-500/10 border border-green-500/20 rounded-lg p-4 mb-6">
          <Check className="w-5 h-5 text-green-500" />
          <p className="text-sm text-green-200">Salvo com sucesso!</p>
        </div>
      )}

      <button
        onClick={handleSave}
        disabled={loading}
        className="flex items-center gap-2 bg-purple-primary hover:bg-purple-primary/80 disabled:bg-purple-primary/50 text-white px-6 py-3 rounded-lg transition-colors font-medium"
      >
        <Save className="w-4 h-4" />
        {loading ? 'Salvando...' : 'Salvar Alterações'}
      </button>
    </div>
  );
}
