import { useState, useEffect } from 'react';

interface Config {
  branding: any;
  hero: any;
  trust_badges: any;
  produtos: any;
  secoes: any;
}

export function useConfig() {
  const [config, setConfig] = useState<Config | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const response = await fetch('/config.json');
        if (!response.ok) {
          throw new Error('Erro ao carregar configuração');
        }
        const data = await response.json();
        setConfig(data);
      } catch (err: any) {
        console.error('Erro ao carregar config:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchConfig();
  }, []);

  return { config, loading, error };
}
