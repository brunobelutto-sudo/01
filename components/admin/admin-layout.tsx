'use client';

import { AdminNav } from './admin-nav';
import { AdminProtected } from './admin-protected';

export function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminProtected>
      <div className="min-h-screen bg-brand-dark">
        <AdminNav />
        <main className="container mx-auto px-4 py-8">{children}</main>
      </div>
    </AdminProtected>
  );
}
