# Identidade Visual 2025 - Cores Aplicadas

## 🎨 Paleta de Cores Principal

### Cores Primárias

#### Azul Marinho (Principal)
- **Cor Principal**: `#143557`
- **Claro**: `#1a4c7a`
- **Escuro**: `#0d2438`
- **Uso**: Cor principal da marca, títulos, botões primários, navegação

#### Azul Turquesa (Secundária)
- **Cor Principal**: `#12B2C9`
- **Claro**: `#4ec5d6`
- **Escuro**: `#0e8fa3`
- **Uso**: Destaques, hover states, elementos interativos, acentos

### Cores de Destaque

#### Rosa Médio
- **Cor**: `#B577AF`
- **Uso**: Elementos decorativos, cards, ícones especiais

#### Lilás Claro
- **Cor**: `#BEA7D1`
- **Uso**: Backgrounds suaves, elementos secundários, gradientes

#### Branco
- **Cor**: `#FFFFFF`
- **Uso**: Backgrounds, contraste com cores escuras

---

## 🌈 Gradientes da Identidade Visual

### Gradiente 1: Azul Marinho → Turquesa
```css
background: linear-gradient(135deg, #143557 0%, #12B2C9 100%);
```
**Uso**: Headers principais, hero sections, CTAs importantes

### Gradiente 2: Turquesa → Rosa
```css
background: linear-gradient(135deg, #12B2C9 0%, #B577AF 100%);
```
**Uso**: Cards de destaque, seções especiais, overlays

### Gradiente 3: Turquesa → Lilás
```css
background: linear-gradient(135deg, #12B2C9 0%, #BEA7D1 100%);
```
**Uso**: Backgrounds suaves, elementos decorativos

---

## 📋 Onde as Cores Foram Aplicadas

### ✅ Arquivos Atualizados

1. **`src/styles/variables.css`**
   - Variáveis CSS globais
   - Cores primárias e secundárias
   - Gradientes
   - Sombras coloridas
   - Variáveis Bootstrap

2. **`src/constants/colors.ts`**
   - Constantes TypeScript
   - Sistema de cores tipado
   - Todas as variantes de cores

### 🎯 Como Usar as Cores

#### Em CSS/SCSS
```css
/* Usando variáveis CSS */
.elemento {
  color: var(--color-primary);              /* #143557 */
  background: var(--color-secondary);        /* #12B2C9 */
  border-color: var(--color-accent-pink);    /* #B577AF */
}

/* Usando variáveis Bootstrap */
.botao {
  background: var(--bs-primary);             /* #143557 */
  color: var(--bs-white);                    /* #FFFFFF */
}

/* Usando gradientes */
.header {
  background: var(--bg-gradient-1);          /* Azul marinho → Turquesa */
}
```

#### Em TypeScript/React
```typescript
import { COLORS } from '@/constants/colors';

// Usando as constantes
const style = {
  color: COLORS.primary.main,              // #143557
  backgroundColor: COLORS.secondary.main,   // #12B2C9
  borderColor: COLORS.accent.pink,         // #B577AF
};

// Usando gradientes
const gradientStyle = {
  background: COLORS.background.gradient.gradient1,
};
```

---

## 🎨 Exemplos de Aplicação

### Botão Primário
```css
.btn-primary {
  background: var(--color-primary);         /* #143557 */
  color: var(--bs-white);
  border: none;
}

.btn-primary:hover {
  background: var(--color-secondary);       /* #12B2C9 */
  transform: translateY(-2px);
  box-shadow: var(--shadow-secondary);
}
```

### Card com Gradiente
```css
.card-destaque {
  background: var(--bg-gradient-2);         /* Turquesa → Rosa */
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-pink);
}
```

### Título com Cor da Marca
```css
.titulo-principal {
  color: var(--color-primary);              /* #143557 */
  font-weight: var(--font-weight-bold);
}
```

---

## 📊 Valores CMYK (Para Impressão)

### Azul Marinho (#143557)
- C: 100%
- M: 78%
- Y: 38%
- K: 32%

### Azul Turquesa (#12B2C9)
- C: 73%
- M: 03%
- Y: 21%
- K: 00%

### Rosa Médio (#B577AF)
- C: 33%
- M: 61%
- Y: 01%
- K: 00%

### Lilás Claro (#BEA7D1)
- C: 29%
- M: 38%
- Y: 00%
- K: 00%

---

## ✨ Notas Importantes

1. **Consistência**: Use sempre as variáveis CSS ou constantes TypeScript ao invés de valores hardcoded
2. **Acessibilidade**: O azul marinho (#143557) tem excelente contraste com branco
3. **Gradientes**: Preferir gradientes da identidade visual para elementos de destaque
4. **Bootstrap**: Todas as classes Bootstrap (.btn-primary, .text-primary, etc) agora usam as cores da identidade visual

---

## 🔄 Próximos Passos

Para completar a aplicação da identidade visual:

1. ✅ Cores atualizadas em variables.css
2. ✅ Cores atualizadas em colors.ts
3. ✅ Bootstrap configurado com as novas cores
4. ⏳ Revisar componentes individuais se necessário
5. ⏳ Atualizar imagens e assets com as novas cores
6. ⏳ Testar em todos os navegadores

---

*Documento gerado em: outubro 2025*
*Identidade Visual: Clínica Singulare 2025*

