'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock } from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Erro ao fazer login');
        return;
      }

      router.push('/admin');
    } catch (err: any) {
      setError('Erro ao conectar com o servidor');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-dark flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-white/5 border border-purple-primary/20 rounded-xl p-8">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-purple-primary/20 rounded-lg">
              <Lock className="w-6 h-6 text-purple-primary" />
            </div>
          </div>

          <h1 className="text-2xl font-display text-white text-center mb-2">
            Peak Fresh Admin
          </h1>
          <p className="text-center text-white/60 text-sm mb-6">
            Acesso restrito ao painel administrativo
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Senha
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite a senha"
                className="w-full px-4 py-3 bg-white/5 border border-purple-primary/20 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-purple-primary/60 transition-colors"
                disabled={loading}
              />
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                <p className="text-sm text-red-200">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-purple-primary hover:bg-purple-primary/80 disabled:bg-purple-primary/50 text-white py-3 rounded-lg transition-colors font-medium"
            >
              {loading ? 'Entrando...' : 'Entrar'}
            </button>
          </form>

          <p className="text-center text-xs text-white/40 mt-6">
            Senha padrão: admin123
          </p>
        </div>
      </div>
    </div>
  );
}
