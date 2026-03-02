'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';

interface ColorPickerProps {
  label: string;
  value: string;
  onChange: (color: string) => void;
}

export function ColorPicker({ label, value, onChange }: ColorPickerProps) {
  const [showInput, setShowInput] = useState(false);

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-white">{label}</label>
      <div className="flex items-center gap-4">
        <div
          onClick={() => setShowInput(!showInput)}
          className="w-16 h-16 rounded-lg border-2 border-purple-primary/30 cursor-pointer hover:border-purple-primary/60 transition-colors"
          style={{ backgroundColor: value }}
        />
        {showInput && (
          <input
            type="color"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-24 h-10 rounded cursor-pointer"
          />
        )}
        <div>
          <p className="text-sm text-white/60">{value}</p>
          <button
            onClick={() => {
              setShowInput(!showInput);
            }}
            className="text-xs text-purple-primary hover:text-purple-primary/80 transition-colors"
          >
            {showInput ? 'Fechar' : 'Editar'}
          </button>
        </div>
      </div>
    </div>
  );
}
