'use client';

import { useEffect, useState } from 'react';
import { AdminLayout } from '@/components/admin/admin-layout';
import { FormSection } from '@/components/admin/form-section';
import { ImageUploader } from '@/components/admin/image-uploader';
import { Plus, X } from 'lucide-react';

interface Produto {
  id: string;
  name: string;
  description: string;
  price300: number;
  price550: number;
  price770: number;
  image: string;
  popular: boolean;
  tag: string;
}

export default function AdminProdutosPage() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const response = await fetch('/api/admin/config');
        const data = await response.json();
        setProdutos(data.produtos);
      } catch (error) {
        console.error('Erro ao carregar config:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchConfig();
  }, []);

  const handleSave = async () => {
    const response = await fetch('/api/admin/config', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ section: 'produtos', data: produtos }),
    });

    if (!response.ok) {
      throw new Error('Erro ao salvar produtos');
    }
  };

  const updateProduto = (id: string, field: string, value: any) => {
    setProdutos(
      produtos.map((p) => (p.id === id ? { ...p, [field]: value } : p))
    );
  };

  const addProduto = () => {
    const newProduct: Produto = {
      id: `produto-${Date.now()}`,
      name: 'Novo Produto',
      description: 'Descrição do produto',
      price300: 0,
      price550: 0,
      price770: 0,
      image: '',
      popular: false,
      tag: '',
    };
    setProdutos([...produtos, newProduct]);
    setEditingId(newProduct.id);
  };

  const deleteProduto = (id: string) => {
    setProdutos(produtos.filter((p) => p.id !== id));
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="text-center text-white/60">Carregando...</div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display text-white mb-2">Produtos</h1>
          <p className="text-white/60">
            Gerencie os produtos do seu cardápio
          </p>
        </div>
        <button
          onClick={addProduto}
          className="flex items-center gap-2 bg-purple-primary hover:bg-purple-primary/80 text-white px-4 py-2 rounded-lg transition-colors"
        >
          <Plus className="w-4 h-4" />
          Novo Produto
        </button>
      </div>

      <FormSection title="Cardápio" onSave={handleSave}>
        <div className="space-y-6">
          {produtos.map((produto) => (
            <div
              key={produto.id}
              className="bg-white/5 border border-purple-primary/20 rounded-lg p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">
                  {produto.name}
                </h3>
                <button
                  onClick={() => deleteProduto(produto.id)}
                  className="text-red-400 hover:text-red-300 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Nome
                    </label>
                    <input
                      type="text"
                      value={produto.name}
                      onChange={(e) =>
                        updateProduto(produto.id, 'name', e.target.value)
                      }
                      className="w-full px-4 py-3 bg-white/5 border border-purple-primary/20 rounded-lg text-white focus:outline-none focus:border-purple-primary/60"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Descrição
                    </label>
                    <textarea
                      value={produto.description}
                      onChange={(e) =>
                        updateProduto(produto.id, 'description', e.target.value)
                      }
                      rows={3}
                      className="w-full px-4 py-3 bg-white/5 border border-purple-primary/20 rounded-lg text-white focus:outline-none focus:border-purple-primary/60"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Preço 300ml
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        value={produto.price300}
                        onChange={(e) =>
                          updateProduto(
                            produto.id,
                            'price300',
                            parseFloat(e.target.value)
                          )
                        }
                        className="w-full px-4 py-3 bg-white/5 border border-purple-primary/20 rounded-lg text-white focus:outline-none focus:border-purple-primary/60"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Preço 550ml
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        value={produto.price550}
                        onChange={(e) =>
                          updateProduto(
                            produto.id,
                            'price550',
                            parseFloat(e.target.value)
                          )
                        }
                        className="w-full px-4 py-3 bg-white/5 border border-purple-primary/20 rounded-lg text-white focus:outline-none focus:border-purple-primary/60"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Preço 770ml
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        value={produto.price770}
                        onChange={(e) =>
                          updateProduto(
                            produto.id,
                            'price770',
                            parseFloat(e.target.value)
                          )
                        }
                        className="w-full px-4 py-3 bg-white/5 border border-purple-primary/20 rounded-lg text-white focus:outline-none focus:border-purple-primary/60"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Tag (ex: Mais Pedido)
                    </label>
                    <input
                      type="text"
                      value={produto.tag}
                      onChange={(e) =>
                        updateProduto(produto.id, 'tag', e.target.value)
                      }
                      className="w-full px-4 py-3 bg-white/5 border border-purple-primary/20 rounded-lg text-white focus:outline-none focus:border-purple-primary/60"
                    />
                  </div>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={produto.popular}
                      onChange={(e) =>
                        updateProduto(produto.id, 'popular', e.target.checked)
                      }
                      className="w-4 h-4 rounded"
                    />
                    <span className="text-white/80">Produto em destaque</span>
                  </label>
                </div>

                <ImageUploader
                  label="Imagem do Produto"
                  value={produto.image}
                  onChange={(url) =>
                    updateProduto(produto.id, 'image', url)
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </FormSection>
    </AdminLayout>
  );
}
