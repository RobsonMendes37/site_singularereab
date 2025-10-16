# 🚀 Guia Rápido de Uso - Nova Estrutura

## 📝 Como Usar os Novos Recursos

### 1️⃣ **Constants - Rotas, Cores e Mensagens**

```typescript
// Importar constants
import { ROUTES, COLORS, MESSAGES } from './constants';

// Usar rotas
navigate(ROUTES.ABOUT);
<Link to={ROUTES.TREATMENTS}>Tratamentos</Link>

// Usar cores
style={{ background: COLORS.primary.main }}

// Usar mensagens
alert(MESSAGES.success.contactSent);
console.log(MESSAGES.clinic.phone);
```

### 2️⃣ **Custom Hooks**

#### useCarousel (para Carrosséis)
```typescript
import { useCarousel } from './hooks';

const MyCarousel = () => {
  const { currentIndex, goToNext, goToPrevious, visibleRange } = useCarousel({
    totalItems: testimonials.length,
    itemsPerPage: 2,
    autoPlay: true,
    autoPlayInterval: 5000
  });

  const visibleItems = testimonials.slice(visibleRange.start, visibleRange.end);

  return (
    <div>
      <button onClick={goToPrevious}>Anterior</button>
      {visibleItems.map(item => <Card key={item.id} {...item} />)}
      <button onClick={goToNext}>Próximo</button>
    </div>
  );
};
```

#### useWindowSize (Responsividade)
```typescript
import { useWindowSize, useBreakpoints } from './hooks';

const MyComponent = () => {
  const { isMobile, isTablet, isDesktop } = useBreakpoints();

  return (
    <div>
      {isMobile && <MobileMenu />}
      {isDesktop && <DesktopMenu />}
    </div>
  );
};
```

#### useDebounce (Otimizar Buscas)
```typescript
import { useState } from 'react';
import { useDebounce } from './hooks';

const SearchComponent = () => {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    if (debouncedSearch) {
      // Busca só acontece depois que o usuário para de digitar
      searchAPI(debouncedSearch);
    }
  }, [debouncedSearch]);

  return <input value={search} onChange={(e) => setSearch(e.target.value)} />;
};
```

### 3️⃣ **Componentes Reutilizáveis**

#### Button
```typescript
import { Button } from './components/common';

// Variantes: primary, secondary, outline, ghost, danger
// Tamanhos: sm, md, lg

<Button variant="primary" size="lg" onClick={handleClick}>
  Agendar Consulta
</Button>

<Button 
  variant="outline" 
  icon={<i className="fab fa-whatsapp" />}
  iconPosition="left"
>
  WhatsApp
</Button>

<Button variant="secondary" loading={isLoading}>
  Enviando...
</Button>
```

#### Loading
```typescript
import { Loading } from './components/common';

// Loading spinner simples
<Loading />

// Loading com texto
<Loading size="lg" text="Carregando dados..." />

// Loading fullscreen
<Loading fullScreen variant="pulse" />

// Variantes: spinner, dots, pulse
```

### 4️⃣ **Context API - Estado Global**

```typescript
import { useApp } from './contexts/AppContext';

const MyComponent = () => {
  const { theme, toggleTheme, language, setLanguage } = useApp();

  return (
    <div>
      <p>Tema atual: {theme}</p>
      <button onClick={toggleTheme}>Trocar Tema</button>
      
      <p>Idioma: {language}</p>
      <button onClick={() => setLanguage('en')}>English</button>
    </div>
  );
};
```

### 5️⃣ **Variáveis CSS**

```css
/* Usar no CSS */
.my-button {
  background: var(--color-primary);
  padding: var(--spacing-md);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  transition: var(--transition-base);
}

.my-button:hover {
  background: var(--color-primary-dark);
  box-shadow: var(--shadow-lg);
}

/* Classes utilitárias disponíveis */
.text-center
.text-left
.text-right
.mt-1, .mt-2, .mt-3, .mt-4, .mt-5
.mb-1, .mb-2, .mb-3, .mb-4, .mb-5
.py-1, .py-2, .py-3, .py-4, .py-5
```

### 6️⃣ **Refatorando Componentes Existentes**

#### ANTES:
```typescript
const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  
  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };
  
  // ... mais código de carrossel
};
```

#### DEPOIS:
```typescript
import { useCarousel } from '../../hooks';

const TestimonialsSection = () => {
  const { currentIndex, goToNext, goToPrevious, visibleRange } = useCarousel({
    totalItems: testimonials.length,
    itemsPerPage: 2,
  });
  
  // Muito mais limpo! 🎉
};
```

## 🎨 **Exemplos Práticos**

### Exemplo 1: Card de Tratamento
```typescript
import { Button } from '../../components/common';
import { ROUTES, COLORS } from '../../constants';

const TreatmentCard = ({ title, description, icon }) => {
  return (
    <div style={{
      padding: 'var(--spacing-lg)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-md)',
      background: 'white',
      transition: 'var(--transition-base)'
    }}>
      <div style={{ color: COLORS.primary.main, fontSize: '48px' }}>
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <Button 
        variant="outline" 
        size="sm"
        onClick={() => navigate(ROUTES.TREATMENT_DETAIL)}
      >
        Ver Detalhes
      </Button>
    </div>
  );
};
```

### Exemplo 2: Formulário de Contato
```typescript
import { useState } from 'react';
import { Button, Loading } from '../../components/common';
import { MESSAGES, EXTERNAL_ROUTES } from '../../constants';

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');

  const handleSubmit = async () => {
    setLoading(true);
    // ... lógica de envio
    alert(MESSAGES.success.contactSent);
    setLoading(false);
  };

  const handleWhatsApp = () => {
    const message = MESSAGES.whatsapp.appointmentRequest;
    window.open(EXTERNAL_ROUTES.WHATSAPP(MESSAGES.clinic.phoneRaw, message));
  };

  if (loading) return <Loading fullScreen text="Enviando mensagem..." />;

  return (
    <form>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <Button variant="primary" onClick={handleSubmit}>
        Enviar
      </Button>
      <Button variant="secondary" onClick={handleWhatsApp}>
        WhatsApp
      </Button>
    </form>
  );
};
```

## 💡 **Dicas Importantes**

1. **Sempre use os hooks personalizados** em vez de reescrever lógica
2. **Use as constants** em vez de strings hardcoded
3. **Use as variáveis CSS** para manter consistência
4. **Importe dos barrels** (`@/components/common` em vez de caminhos longos)
5. **Documente componentes complexos** com JSDoc
6. **Teste responsividade** usando `useBreakpoints`

## 🔥 **Próximos Passos**

1. Refatore `TestimonialsSection` para usar `useCarousel`
2. Refatore `TreatmentsSection` para usar `Button` component
3. Adicione validações usando as constants de mensagens
4. Implemente theme toggle usando `useApp`
5. Configure variáveis de ambiente no `.env`

---

**Qualquer dúvida, consulte o `README_ESTRUTURA.md` para detalhes completos!** 📚

