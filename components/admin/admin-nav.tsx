'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Settings, LayoutDashboard, Palette, Image, ShoppingCart, Mail, FileText, LogOut } from 'lucide-react';

export function AdminNav() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const handleLogout = async () => {
    document.cookie = 'admin-session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    window.location.href = '/admin/login';
  };

  return (
    <nav className="bg-brand-dark border-b border-purple-primary/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Settings className="w-6 h-6 text-purple-primary" />
            <h1 className="text-xl font-display text-white">Peak Fresh Admin</h1>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
          >
            <LogOut className="w-4 h-4" />
            Sair
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
          {[
            { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
            { href: '/admin/branding', label: 'Branding', icon: Palette },
            { href: '/admin/hero', label: 'Hero', icon: Image },
            { href: '/admin/produtos', label: 'Produtos', icon: ShoppingCart },
            { href: '/admin/secoes', label: 'Seções', icon: FileText },
            { href: '/admin/contato', label: 'Contato', icon: Mail },
          ].map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors text-sm ${
                isActive(href)
                  ? 'bg-purple-primary text-white'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="hidden sm:inline">{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
