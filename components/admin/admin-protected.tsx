'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export function AdminProtected({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isAuthed, setIsAuthed] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/admin/auth');
        if (!response.ok) {
          router.push('/admin/login');
        } else {
          setIsAuthed(true);
        }
      } catch {
        router.push('/admin/login');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-purple-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-purple">Carregando...</p>
        </div>
      </div>
    );
  }

  if (!isAuthed) {
    return null;
  }

  return <>{children}</>;
}
