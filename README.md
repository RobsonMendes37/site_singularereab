# 🏥 Clínica Singulare - Site Institucional
![Uploading image.png…]()

> **Especializada em reabilitação e desenvolvimento infantil com equipe multidisciplinar qualificada**

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue.svg)](https://www.typescriptlang.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.0-purple.svg)](https://getbootstrap.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Instalação](#-instalação)
- [Configuração](#-configuração)
- [Como Editar Conteúdo](#-como-editar-conteúdo)
- [Deploy](#-deploy)
- [Contribuição](#-contribuição)
- [Licença](#-licença)

## 🎯 Sobre o Projeto

O **Site da Clínica Singulare** é uma plataforma web moderna e responsiva desenvolvida para apresentar os serviços especializados em reabilitação infantil. O projeto foi criado com foco na experiência do usuário, performance e facilidade de manutenção.

### 🏥 Sobre a Clínica

A Clínica Singulare nasceu do sonho de Vancleid e Victor, que enfrentaram a árdua jornada de cuidar de seu filho Ezequiel, testemunhando a falta de estrutura e tratamentos de excelência para crianças neuroatípicas. Hoje, oferecemos uma abordagem multidisciplinar completa com profissionais altamente qualificados.

## ✨ Funcionalidades

### 🎨 **Interface Moderna**
- Design responsivo e elegante
- Animações suaves e interativas
- Carrossel de imagens no hero
- Vídeos integrados (formato vertical 9:16)

### 📱 **Responsividade Total**
- Otimizado para desktop, tablet e mobile
- Breakpoints personalizados
- Navegação adaptativa

### 🎯 **Seções Principais**
- **Hero:** Carrossel principal com chamadas para ação
- **Sobre Nós:** História da clínica com vídeo institucional
- **Serviços:** Especialidades oferecidas
- **Tratamentos:** Detalhamento dos tratamentos disponíveis
- **Equipe:** Profissionais especializados
- **Depoimentos:** Testemunhos de famílias atendidas
- **Blog:** Artigos e conteúdos educativos
- **Eventos:** Workshops e palestras
- **Programas:** Programas especiais
- **Contato:** Informações e formulário de contato

### 🛠️ **Funcionalidades Técnicas**
- Sistema de dados centralizado e modular
- Fácil edição de conteúdo
- SEO otimizado
- Performance otimizada
- Acessibilidade (WCAG)

## 🚀 Tecnologias

### **Frontend**
- **React 18.2.0** - Biblioteca principal
- **TypeScript 4.9.5** - Tipagem estática
- **Bootstrap 5.3.0** - Framework CSS
- **React Router** - Navegação
- **React Markdown** - Renderização de conteúdo

### **Estilização**
- **CSS3** - Estilos customizados
- **CSS Modules** - Componentes isolados
- **Responsive Design** - Mobile-first
- **Animações CSS** - Transições suaves

### **Ferramentas**
- **Create React App** - Boilerplate
- **ESLint** - Linting de código
- **Prettier** - Formatação de código
- **Git** - Controle de versão

## 📁 Estrutura do Projeto

```
src/
├── 📁 components/           # Componentes React
│   ├── 📁 common/          # Componentes reutilizáveis
│   ├── 📁 layout/          # Layout (Header, Footer)
│   ├── 📁 sections/        # Seções da página
│   └── 📁 blog/            # Componentes do blog
├── 📁 data/                # 🎯 DADOS CENTRALIZADOS
│   ├── 📁 hero/            # Carrossel principal
│   ├── 📁 about/           # Seção "Sobre nós"
│   ├── 📁 services/        # Serviços oferecidos
│   ├── 📁 treatments/      # Tratamentos
│   ├── 📁 team/            # Equipe
│   ├── 📁 testimonials/    # Depoimentos
│   ├── 📁 blog/            # Posts do blog
│   ├── 📁 events/          # Eventos
│   ├── 📁 programs/        # Programas
│   ├── 📁 contact/         # Contato
│   └── 📄 index.ts         # Centralizador
├── 📁 pages/               # Páginas da aplicação
├── 📁 types/               # Definições TypeScript
├── 📁 hooks/               # Hooks customizados
├── 📁 utils/               # Utilitários
├── 📁 styles/              # Estilos globais
├── 📁 assets/              # Imagens, vídeos, ícones
└── 📄 config.ts            # Configurações gerais
```

## 🛠️ Instalação

### **Pré-requisitos**
- Node.js 16+ 
- npm ou yarn
- Git

### **Passo a Passo**

1. **Clone o repositório**
```bash
git clone https://github.com/RobsonMendes37/site_singularereab.git
cd site_singularereab
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Inicie o servidor de desenvolvimento**
```bash
npm start
# ou
yarn start
```

4. **Acesse no navegador**
```
http://localhost:3000
```

## ⚙️ Configuração

### **Configurações Gerais**
Edite o arquivo `src/config.ts` para personalizar:

```typescript
export const config = {
  clinic: {
    name: "Clínica Singulare",
    description: "Especializada em reabilitação infantil...",
    address: {
      street: "Av. Dom Luís, 1233",
      // ... outros dados
    }
  },
  contact: {
    phone: "(85) 99999-9999",
    email: "contato@clinicasingulare.com.br",
    // ... outros dados
  }
  // ... mais configurações
};
```

### **Variáveis de Ambiente**
Crie um arquivo `.env` na raiz do projeto:

```env
REACT_APP_SITE_URL=https://clinicasingulare.com.br
REACT_APP_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
```

## 📝 Como Editar Conteúdo

### **🎯 Sistema de Dados Centralizado**

O projeto utiliza um sistema modular onde cada seção tem seu próprio arquivo de dados:

#### **📁 Estrutura de Dados**
```
src/data/
├── hero/heroData.ts         # Carrossel principal
├── about/aboutData.ts       # Seção "Sobre nós"
├── services/servicesData.ts # Serviços
├── treatments/treatmentsData.ts # Tratamentos
├── team/teamData.ts         # Equipe
├── testimonials/testimonialsData.ts # Depoimentos
├── blog/blogData.ts         # Posts do blog
├── events/eventsData.ts     # Eventos
├── programs/programsData.ts # Programas
└── contact/contactData.ts   # Contato
```

#### **📝 Como Editar**

1. **Vá para o arquivo da seção desejada**
   ```
   src/data/[seção]/[seção]Data.ts
   ```

2. **Altere os textos entre aspas**
   ```typescript
   export const aboutData = {
     titulo: "Sobre nós", // ← Altere aqui
     texto: "Vancleid e Victor enfrentaram...", // ← E aqui
     // ...
   };
   ```

3. **Para adicionar novo item**
   - Copie um bloco `{ }` existente
   - Cole no final do array
   - Altere as informações

4. **Para remover item**
   - Delete o bloco `{ }` inteiro

5. **Salve o arquivo (Ctrl+S)**

### **🎨 Personalização Visual**

#### **Cores e Tema**
Edite `src/styles/global.css`:
```css
:root {
  --bs-primary: #007bff;    /* Cor principal */
  --bs-secondary: #6c757d;  /* Cor secundária */
  /* ... outras variáveis */
}
```

#### **Fontes**
Configure em `src/styles/fonts.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Pacifico:wght@400&display=swap');
```

### **📱 Responsividade**

O projeto é totalmente responsivo com breakpoints:
- **Desktop:** > 768px
- **Tablet:** 576px - 768px  
- **Mobile:** < 576px

## 🚀 Deploy

### **Build de Produção**
```bash
npm run build
```

### **Deploy no Vercel**
1. Conecte o repositório no [Vercel](https://vercel.com)
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

### **Deploy Manual**
```bash
# Build
npm run build

# Servir localmente
npx serve -s build

# Ou usar qualquer servidor estático
```

## 🤝 Contribuição

1. **Fork** o projeto
2. **Crie** uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. **Push** para a branch (`git push origin feature/AmazingFeature`)
5. **Abra** um Pull Request

### **Padrões de Código**
- Use TypeScript para tipagem
- Siga as convenções do ESLint
- Formate com Prettier
- Documente componentes complexos

## 📞 Suporte

- **Email:** contato@clinicasingulare.com.br
- **Telefone:** (85) 99999-9999
- **WhatsApp:** [Clique aqui](https://wa.me/5585999999999)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">

**Desenvolvido com ❤️ para a Clínica Singulare**

[🌐 Site Oficial](https://clinicasingulare.com.br) | [📧 Contato](mailto:contato@clinicasingulare.com.br)

</div>
