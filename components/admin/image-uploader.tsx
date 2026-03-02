'use client';

import { useState } from 'react';
import { Upload } from 'lucide-react';
import Image from 'next/image';

interface ImageUploaderProps {
  label: string;
  value: string;
  onChange: (url: string) => void;
}

export function ImageUploader({ label, value, onChange }: ImageUploaderProps) {
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState<string>(value);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setPreview(data.url);
        onChange(data.url);
      }
    } catch (error) {
      console.error('Erro ao fazer upload:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-white">{label}</label>

      {preview && (
        <div className="relative w-full h-48 bg-white/5 rounded-lg overflow-hidden border border-purple-primary/20">
          <Image
            src={preview}
            alt="Preview"
            fill
            className="object-cover"
          />
        </div>
      )}

      <label className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-purple-primary/10 border-2 border-dashed border-purple-primary rounded-lg cursor-pointer hover:bg-purple-primary/20 transition-colors">
        <Upload className="w-4 h-4 text-purple-primary" />
        <span className="text-sm text-white">
          {loading ? 'Enviando...' : 'Clique para fazer upload'}
        </span>
        <input
          type="file"
          accept="image/*"
          onChange={handleUpload}
          disabled={loading}
          className="hidden"
        />
      </label>
    </div>
  );
}
