# 📝 Guia de Edição de Dados do Site

## 🎯 Visão Geral

O site agora possui uma estrutura organizada de dados por seção, facilitando a edição de conteúdo sem precisar mexer no código dos componentes.

## 📁 Estrutura de Dados

```
src/data/
├── hero/           # Carrossel principal
├── about/          # Seção "Sobre nós"
├── services/       # Seção de serviços
├── treatments/     # Tratamentos oferecidos
├── team/           # Equipe da clínica
├── testimonials/   # Depoimentos
├── blog/           # Posts do blog
├── events/         # Eventos
├── programs/       # Programas
├── contact/        # Informações de contato
└── index.ts        # Arquivo centralizador
```

## 🚀 Como Editar

### 1. **Localize o Arquivo**
- Vá para a pasta `src/data/`
- Encontre a seção que deseja editar
- Abra o arquivo `.ts` correspondente

### 2. **Edite o Conteúdo**
- Altere apenas os textos entre aspas `"assim"`
- **NÃO altere** as chaves como `id:`, `titulo:`, etc.
- **NÃO altere** os `slug` (usados nas URLs)

### 3. **Salve o Arquivo**
- Pressione `Ctrl+S` (ou `Cmd+S` no Mac)
- O site será atualizado automaticamente

## 📋 Seções Disponíveis

### 🎠 Hero Section (`src/data/hero/heroData.ts`)
**O que editar:** Slides do carrossel principal
- Títulos e subtítulos
- Imagens de fundo
- Textos dos botões
- Links dos botões

**Como adicionar novo slide:**
```typescript
{
  id: 4, // Próximo número
  titulo: "Seu Novo Título",
  subtitulo: "Seu novo subtítulo",
  imagemFundo: "nova-imagem.jpg",
  botaoTexto: "Texto do Botão",
  botaoLink: "/caminho"
}
```

### 👥 About Section (`src/data/about/aboutData.ts`)
**O que editar:** Seção "Sobre nós"
- Título principal
- Texto descritivo
- Texto do botão
- Link do botão
- Arquivo do vídeo

### 🛠️ Services Section (`src/data/services/servicesData.ts`)
**O que editar:** Cards de serviços
- Títulos dos serviços
- Descrições
- Ícones (FontAwesome)
- Cores

**Como adicionar novo serviço:**
```typescript
{
  id: 5, // Próximo número
  titulo: "Novo Serviço",
  descricao: "Descrição do novo serviço",
  icone: "fas fa-star", // Classe FontAwesome
  cor: "#FF0000" // Cor em hexadecimal
}
```

### 💊 Treatments (`src/data/treatments/treatmentsData.ts`)
**O que editar:** Tratamentos oferecidos
- Títulos e descrições
- Como funciona
- Etapas do tratamento
- Benefícios
- Imagens

**⚠️ IMPORTANTE:** NÃO altere o `slug` - ele é usado na URL da página

### 👨‍⚕️ Team (`src/data/team/teamData.ts`)
**O que editar:** Membros da equipe
- Nomes e cargos
- Descrições
- Especialidades
- Fotos
- Redes sociais

**Como adicionar novo membro:**
```typescript
{
  id: 5, // Próximo número
  nome: "Dr. Novo Membro",
  cargo: "Especialidade",
  foto: "nova-foto.jpg",
  descricao: "Descrição do profissional",
  especialidades: ["Especialidade 1", "Especialidade 2"],
  facebook: "https://facebook.com/perfil",
  instagram: "https://instagram.com/perfil",
  linkedin: "https://linkedin.com/in/perfil"
}
```

### 💬 Testimonials (`src/data/testimonials/testimonialsData.ts`)
**O que editar:** Depoimentos dos clientes
- Nomes e profissões
- Textos dos depoimentos
- Avaliações (1 a 5)
- Fotos

### 📝 Blog (`src/data/blog/blogData.ts`)
**O que editar:** Posts do blog
- Títulos e resumos
- Categorias
- Datas
- Tempo de leitura
- Autores
- Imagens

**⚠️ IMPORTANTE:** NÃO altere o `slug` - ele é usado na URL da página

### 📅 Events (`src/data/events/eventsData.ts`)
**O que editar:** Eventos da clínica
- Títulos e descrições
- Datas e horários
- Locais
- Imagens
- Links (opcional)

### 🎓 Programs (`src/data/programs/programsData.ts`)
**O que editar:** Programas oferecidos
- Títulos e descrições
- Preços
- Professores
- Detalhes (vagas, aulas, horas)
- Imagens

### 📞 Contact (`src/data/contact/contactData.ts`)
**O que editar:** Informações de contato
- Endereço
- Telefone
- Email
- Horários de funcionamento
- Redes sociais (opcional)

## 🖼️ Como Adicionar Imagens

### 1. **Para Imagens de Seções**
- Coloque o arquivo em `src/assets/images/`
- Use o nome do arquivo no campo `imagem` ou `foto`

### 2. **Para Vídeos**
- Coloque o arquivo em `src/assets/videos/`
- Use o nome do arquivo no campo `videoArquivo`

### 3. **Para Imagens de Blog**
- Use URLs completas (ex: `https://images.unsplash.com/...`)
- Ou coloque em `src/assets/images/` e use o nome do arquivo

## 🎨 Cores e Ícones

### Cores
- Use código hexadecimal: `#FF0000` (vermelho)
- Exemplos: `#007bff` (azul), `#28a745` (verde), `#dc3545` (vermelho)

### Ícones
- Use classes do FontAwesome: `fas fa-heart`
- Exemplos: `fas fa-user-md`, `fas fa-comments`, `fas fa-star`

## ⚠️ Regras Importantes

### ✅ PODE FAZER:
- Alterar textos entre aspas
- Adicionar novos itens (copiando blocos existentes)
- Remover itens (deletando blocos)
- Trocar imagens e vídeos
- Alterar cores e ícones

### ❌ NÃO PODE FAZER:
- Alterar chaves como `id:`, `titulo:`, etc.
- Alterar `slug` (usados nas URLs)
- Alterar a estrutura dos objetos
- Deletar vírgulas ou chaves `{ }`

## 🔧 Exemplo Prático

### Antes:
```typescript
{
  id: 1,
  titulo: "Fisioterapia Pediátrica",
  descricao: "Promovendo o desenvolvimento motor..."
}
```

### Depois:
```typescript
{
  id: 1,
  titulo: "Fisioterapia Pediátrica Especializada",
  descricao: "Promovendo o desenvolvimento motor e funcional das crianças com técnicas avançadas..."
}
```

## 🆘 Precisa de Ajuda?

1. **Verifique a sintaxe:** Certifique-se de que não deletou vírgulas ou chaves
2. **Salve o arquivo:** Pressione `Ctrl+S`
3. **Recarregue a página:** Atualize o navegador
4. **Verifique o console:** Se houver erro, aparecerá no console do navegador

## 📚 Arquivos de Referência

- `src/data/index.ts` - Arquivo centralizador
- `src/content.ts` - Arquivo antigo (pode ser removido)
- `docs/` - Documentação adicional

---

**💡 Dica:** Sempre faça backup dos arquivos antes de editar em produção!
