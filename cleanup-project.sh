#!/bin/bash

# Script de Limpeza do Projeto Clínica Singulare
# Este script remove arquivos desnecessários para um ambiente profissional

echo "🧹 Iniciando limpeza do projeto..."
echo ""

# Verificar se estamos no diretório correto
if [ ! -f "package.json" ]; then
    echo "❌ Erro: Execute este script na raiz do projeto clinica-singulare"
    exit 1
fi

# Criar pasta docs/ se não existir
if [ ! -d "docs" ]; then
    echo "📁 Criando pasta docs/..."
    mkdir docs
fi

# Lista de arquivos de documentação para mover para docs/
DOCS_TO_KEEP=(
    "ESTRUTURA_PASTAS_COMPONENTES.md"
    "CORES_IDENTIDADE_VISUAL.md"
    "RESUMO_CORES_APLICADAS.md"
    "GUIA_RAPIDO.md"
)

# Lista de arquivos temporários para deletar
DOCS_TO_DELETE=(
    "CORRECAO_LINKS_FOOTER.md"
    "MELHORIAS_NOSSA_HISTORIA.md"
    "MIGRACAO_BOOTSTRAP.md"
    "MELHORIAS_HEADER.md"
    "CORRECAO_VIDEO.md"
    "ESTRUTURA_VISUAL_FINAL.txt"
    "RESUMO_EXECUTIVO.md"
    "ANTES_E_DEPOIS_CSS.md"
    "CHECKLIST_ORGANIZACAO_CSS.md"
    "ORGANIZACAO_CSS_COMPLETA.md"
    "REFATORACAO_CSS.md"
    "BLOG_README.md"
    "RESUMO_MUDANCAS.md"
    "IMPLEMENTACAO_COMPLETA.md"
    "README_ESTRUTURA.md"
)

# Mover documentação relevante para docs/
echo "📦 Movendo documentação relevante para docs/..."
for doc in "${DOCS_TO_KEEP[@]}"; do
    if [ -f "$doc" ]; then
        mv "$doc" docs/
        echo "  ✓ Movido: $doc"
    fi
done

# Deletar documentação temporária
echo ""
echo "🗑️  Removendo documentação temporária..."
for doc in "${DOCS_TO_DELETE[@]}"; do
    if [ -f "$doc" ]; then
        rm "$doc"
        echo "  ✓ Removido: $doc"
    fi
done

# Remover pasta build/ do Git (mas manter localmente)
echo ""
echo "🏗️  Removendo pasta build/ do controle de versão..."
if [ -d "build" ]; then
    git rm -r --cached build/ 2>/dev/null || rm -rf build/
    echo "  ✓ Pasta build/ removida do Git"
fi

# Atualizar .gitignore
echo ""
echo "📝 Atualizando .gitignore..."
if ! grep -q "/build" .gitignore; then
    echo "" >> .gitignore
    echo "# Build folder" >> .gitignore
    echo "/build" >> .gitignore
    echo "  ✓ Adicionado /build ao .gitignore"
fi

# Criar arquivo de configuração de exemplo
echo ""
echo "⚙️  Criando arquivo de configuração..."
cat > src/config.example.ts << 'EOF'
// Arquivo de configuração do projeto
// Renomeie para config.ts e preencha com suas informações

export const config = {
  // Informações de contato
  contact: {
    phone: '(85) 9 9644-2225',
    email: 'contato@clinicasingulare.com.br',
    address: 'Rua Exemplo, 123 - Bairro, Fortaleza - CE',
    whatsapp: '5585996442225',
    hours: 'Seg-Sex: 8h às 18h, Sáb: 8h às 12h'
  },

  // Redes sociais
  social: {
    facebook: 'https://www.facebook.com/clinicasingulare',
    instagram: 'https://www.instagram.com/clinicasingulare',
    linkedin: 'https://www.linkedin.com/company/clinicasingulare'
  },

  // Google Analytics (opcional)
  analytics: {
    googleAnalyticsId: 'G-XXXXXXXXXX'
  },

  // API URLs (quando implementar backend)
  api: {
    baseUrl: process.env.REACT_APP_API_URL || 'http://localhost:3001'
  }
};
EOF

echo "  ✓ Criado src/config.example.ts"

# Criar README para a pasta docs
echo ""
echo "📄 Criando README para docs/..."
cat > docs/README.md << 'EOF'
# 📚 Documentação do Projeto

Esta pasta contém a documentação técnica e guias do projeto Clínica Singulare.

## 📁 Arquivos

- **ESTRUTURA_PASTAS_COMPONENTES.md** - Estrutura de componentes do projeto
- **CORES_IDENTIDADE_VISUAL.md** - Paleta de cores e identidade visual
- **RESUMO_CORES_APLICADAS.md** - Como as cores são aplicadas no projeto
- **GUIA_RAPIDO.md** - Guia rápido para desenvolvedores

## 🔙 Voltar

Para informações gerais do projeto, veja o [README principal](../README.md).
EOF

echo "  ✓ Criado docs/README.md"

# Resumo
echo ""
echo "✨ Limpeza concluída!"
echo ""
echo "📊 Resumo:"
echo "  • Documentação relevante movida para docs/"
echo "  • Documentação temporária removida"
echo "  • Pasta build/ removida do Git"
echo "  • .gitignore atualizado"
echo "  • config.example.ts criado"
echo ""
echo "🎯 Próximos passos:"
echo "  1. Revisar as mudanças com 'git status'"
echo "  2. Copiar config.example.ts para config.ts e preencher"
echo "  3. Corrigir os warnings do build (veja ANALISE_PROJETO.md)"
echo "  4. Fazer commit das mudanças"
echo ""
echo "📖 Para mais detalhes, consulte: ANALISE_PROJETO.md"

