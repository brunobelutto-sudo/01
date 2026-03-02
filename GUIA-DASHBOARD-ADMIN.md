# Guia do Dashboard Administrativo - Peak Fresh Açaí

## Introdução

O dashboard administrativo permite que você gerencie todo o conteúdo do seu site Peak Fresh sem necessidade de editar código. Você pode alterar textos, imagens, preços, cores e todas as informações do site de forma intuitiva.

## Acesso ao Dashboard

1. Acesse: `https://seu-site.com/admin/login`
2. Senha padrão: `admin123`
3. **IMPORTANTE**: Altere a senha padrão no arquivo `.env` (variável `ADMIN_PASSWORD`)

## Estrutura do Dashboard

### 1. Dashboard Principal (`/admin`)
- Visão geral de todas as seções
- Acesso rápido a cada módulo
- Estatísticas básicas

### 2. Branding (`/admin/branding`)
Gerencie a identidade visual da sua marca:
- **Nome do Site**: Nome que aparece em toda a interface
- **Logo**: Imagem do logo da marca
- **Cores**: Cor primária (roxo), secundária (preto) e de destaque (ouro)
- **Contato**: WhatsApp, Email e Telefone

### 3. Hero Section (`/admin/hero`)
Configure a seção principal (topo da página):
- **Headline Principal**: Grande título de impacto
- **Subtítulo**: Texto descritivo
- **Botão CTA**: Texto do botão de ação
- **Imagem**: Foto grande do acaí
- **Urgência**: Mensagem tipo "Já são 23 pedidos hoje"

### 4. Produtos (`/admin/produtos`)
Gerencie seu cardápio:
- **Adicionar Novo**: Clique em "Novo Produto" para adicionar
- **Para cada Produto**:
  - Nome
  - Descrição (ingredientes e características)
  - Preço 300ml
  - Preço 500ml
  - Imagem
  - Tag (ex: "Mais Pedido", "Mais Vendido")
  - Marcar como destaque

### 5. Seções (`/admin/secoes`)
Configure as seções especiais:

#### Seção de Promoção
- **Título**: "Acaí em Dobro"
- **Descrição**: Detalhe da promoção
- **Desconto**: Quanto o cliente ganha
- **Imagem**: Foto do acaí em promoção

#### Seção de Entrega
- **Título**: Texto principal
- **Tempo de Entrega**: ~30 minutos
- **Valor Mínimo**: Valor mínimo para pedir
- **Entrega Gratuita**: Ativar/desativar

### 6. Contato (`/admin/contato`)
Atualize informações de contato:
- **WhatsApp**: Número com código de país (ex: 551999999999)
- **Email**: Email de contato
- **Telefone**: Telefone principal

## Como Fazer Upload de Imagens

1. Clique em qualquer campo de "Imagem" no dashboard
2. Clique no botão "Clique para fazer upload"
3. Selecione a imagem do seu computador
4. A imagem será enviada automaticamente

## Recomendações de Imagens

- **Logo**: JPG ou PNG, até 500x500px
- **Hero**: JPG ou PNG, mínimo 600x400px
- **Produtos**: JPG ou PNG, 500x600px
- **Promoção**: JPG ou PNG, 600x800px

## Alterando a Senha de Admin

1. Abra o arquivo `.env` na raiz do projeto
2. Procure por `ADMIN_PASSWORD=admin123`
3. Altere para `ADMIN_PASSWORD=sua-nova-senha`
4. Reinicie o servidor

## O Que Muda Automaticamente?

Quando você salva alterações no dashboard:

✓ O arquivo `public/config.json` é atualizado
✓ Todas as imagens são armazenadas em `public/uploads/`
✓ O site reflete as mudanças em tempo real (pode precisar recarregar a página)

## Dicas Importantes

1. **Sempre salve suas alterações** clicando em "Salvar Alterações"
2. **Use nomes descritivos** para produtos (ex: "Avalanche Tropical" ao invés de "Produto 1")
3. **Mantenha as descrições concisas** - devem aparecer bem em celulares
4. **Atualize os preços regularmente** para manter competitivo
5. **Use tags para destacar** produtos populares ou em promoção

## Segurança

- O dashboard é protegido por senha
- As sessões expiram em 7 dias
- Apenas você (com a senha) pode acessar
- Não compartilhe a senha em emails ou mensagens

## Troubleshooting

### Upload de imagem não funciona
- Verifique o tamanho do arquivo (máx 5MB)
- Verifique a conexão com a internet
- Limpe o cache do navegador (Ctrl+Shift+Del)

### Alterações não aparecem no site
- Recarregue a página do site (Ctrl+F5)
- Espere alguns segundos para sincronização
- Verifique se clicou em "Salvar Alterações"

### Esqueci a senha
- Altere no arquivo `.env` (confira instruções acima)
- Você pode usar qualquer senha que quiser

## Próximos Passos

1. Altere a senha de admin
2. Configure suas cores de marca
3. Atualize todos os produtos
4. Adicione suas informações de contato
5. Monitore e atualize regularmente

## Suporte

Se encontrar problemas:
1. Verifique este guia
2. Teste em outro navegador
3. Limpe o cache do navegador
4. Reinicie o servidor

---

**Versão**: 1.0
**Última atualização**: 2024
**Status**: Ativo e funcionando
