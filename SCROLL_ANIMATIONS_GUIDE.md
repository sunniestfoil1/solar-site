# 🎬 Guia: Animações de Scroll em React com Framer Motion

## 🚀 Como Usar as Animações

### 1. **Importar os Hooks e Animações**
```tsx
import { motion } from "framer-motion";
import { useScrollAnimation, fadeInUp, fadeInLeft, fadeInRight, scaleIn, staggerContainer } from "@/hooks/useScrollAnimation";
```

### 2. **Criar as Animações no Componente**
```tsx
const MeuComponente = () => {
  const elemento1 = useScrollAnimation();
  const elemento2 = useScrollAnimation();
  
  return (
    <section>
      <motion.div
        ref={elemento1.ref}
        initial="hidden"
        animate={elemento1.isInView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        Conteúdo que anima de baixo para cima
      </motion.div>
      
      <motion.div
        ref={elemento2.ref}
        initial="hidden"
        animate={elemento2.isInView ? "visible" : "hidden"}
        variants={fadeInLeft}
      >
        Conteúdo que anima da esquerda
      </motion.div>
    </section>
  );
};
```

### 3. **Tipos de Animações Disponíveis**

- **`fadeInUp`** - Aparece de baixo para cima
- **`fadeInLeft`** - Aparece da esquerda para direita  
- **`fadeInRight`** - Aparece da direita para esquerda
- **`scaleIn`** - Aparece crescendo (scale)
- **`staggerContainer`** - Para animar filhos em sequência

### 4. **Exemplo com Stagger (Sequencial)**
```tsx
<motion.div
  ref={container.ref}
  initial="hidden"
  animate={container.isInView ? "visible" : "hidden"}
  variants={staggerContainer}
>
  <motion.div variants={fadeInUp}>Item 1</motion.div>
  <motion.div variants={fadeInUp}>Item 2</motion.div>
  <motion.div variants={fadeInUp}>Item 3</motion.div>
</motion.div>
```

## 🎯 Aplicação Rápida em Qualquer Seção

### Para ContactSection.tsx:
```tsx
const ContactSection = () => {
  const title = useScrollAnimation();
  const form = useScrollAnimation();
  
  return (
    <section>
      <motion.h2
        ref={title.ref}
        initial="hidden"
        animate={title.isInView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        Entre em Contato
      </motion.h2>
      
      <motion.div
        ref={form.ref}
        initial="hidden"
        animate={form.isInView ? "visible" : "hidden"}
        variants={scaleIn}
      >
        {/* Formulário */}
      </motion.div>
    </section>
  );
};
```

### Para Cards/Lista:
```tsx
<motion.div
  ref={cards.ref}
  initial="hidden"
  animate={cards.isInView ? "visible" : "hidden"}
  variants={staggerContainer}
  className="grid grid-cols-1 md:grid-cols-3 gap-6"
>
  {items.map((item, index) => (
    <motion.div key={index} variants={fadeInUp}>
      {/* Card content */}
    </motion.div>
  ))}
</motion.div>
```

## 🛠️ Customizando Animações

### Criando Nova Animação:
```tsx
export const fadeInDown = {
  hidden: { 
    opacity: 0, 
    y: -60
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.645, 0.045, 0.355, 1]
    }
  }
};
```

### Ajustando Timing:
```tsx
export const slowFadeIn = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 1.2,  // Mais lenta
      delay: 0.3      // Com delay
    }
  }
};
```

## 📱 Compatibilidade

- ✅ **Desktop** - Todas as animações
- ✅ **Mobile** - Animações otimizadas
- ✅ **Accessibility** - Respeita prefers-reduced-motion
- ✅ **Performance** - Apenas anima quando necessário

## 🎯 Prompt para IA/Copilot

```
Adicione animações de scroll ao componente [NOME_COMPONENTE] usando o sistema de animações do projeto. Aplique:

1. Importe motion e useScrollAnimation do hook personalizado
2. Crie instâncias de useScrollAnimation para cada elemento
3. Aplique as animações adequadas:
   - Títulos: fadeInUp
   - Cards/Grid: staggerContainer com fadeInUp
   - Imagens: scaleIn
   - Texto: fadeInLeft ou fadeInRight

Mantenha todo o código existente e apenas adicione as animações.
```

---

**💡 Resultado**: Elementos aparecem suavemente conforme você desce a página, criando uma experiência visual profissional e moderna!