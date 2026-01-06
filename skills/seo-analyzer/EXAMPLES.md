# Exemplos de Análise SEO

## Exemplo 1: Relatório Completo

```markdown
# Relatório SEO: Página Inicial

**URL analisada:** `/`
**Data:** 2024-01-15
**Score Geral:** 62/100

## Resumo Executivo

A página inicial possui meta tags básicas configuradas, mas carece de dados estruturados (Schema.org), otimização de imagens adequada, e apresenta problemas de performance que afetam Core Web Vitals. Prioridade imediata: corrigir LCP e adicionar JSON-LD.

---

## Problemas Críticos (Impacto Alto)

### [Meta Tags] Title muito longo

**Status:** ⚠️ Parcial
**Impacto:** 🔴 Alto
**Esforço:** Baixo

#### O que foi encontrado
```tsx
// app/page.tsx
export const metadata = {
  title: 'Hub Leilão - A Plataforma Completa para Investidores de Leilões Imobiliários no Brasil com Análise, Gestão e Muito Mais',
}
```
Título atual: 127 caracteres (máximo recomendado: 60)

#### Por que isso importa
Títulos acima de 60 caracteres são truncados nos resultados de busca do Google, perdendo informação importante e reduzindo CTR. O Google pode até reescrever seu título automaticamente.

#### Como corrigir
```tsx
// app/page.tsx
export const metadata: Metadata = {
  title: 'Hub Leilão | Plataforma para Investidores de Leilões',
  // 52 caracteres - dentro do limite
}
```

---

### [Performance] LCP acima de 4s

**Status:** ❌ Não implementado
**Impacto:** 🔴 Alto
**Esforço:** Médio

#### O que foi encontrado
```tsx
// Imagem hero sem otimização
<img
  src="/hero-image.png"
  className="w-full"
/>
```
- Imagem de 2.4MB sem compressão
- Sem atributo `priority`
- Sem dimensões definidas (causa CLS)

#### Por que isso importa
LCP (Largest Contentful Paint) é uma Core Web Vital. Valores acima de 2.5s prejudicam diretamente o ranking no Google. Seu LCP atual de 4.2s está na faixa "ruim".

#### Como corrigir
```tsx
import Image from 'next/image'

<Image
  src="/hero-image.webp"
  alt="Descrição da imagem hero"
  width={1920}
  height={1080}
  priority // Carrega imediatamente
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQ..."
  sizes="100vw"
  className="w-full"
/>
```
Adicionar também em `next.config.js`:
```js
images: {
  formats: ['image/avif', 'image/webp'],
}
```

---

### [Schema] Dados estruturados ausentes

**Status:** ❌ Não implementado
**Impacto:** 🔴 Alto
**Esforço:** Baixo

#### O que foi encontrado
Nenhum script JSON-LD encontrado na página.

#### Por que isso importa
Dados estruturados habilitam rich snippets nos resultados de busca (estrelas, preços, FAQs), aumentando visibilidade e CTR em até 30%.

#### Como corrigir
```tsx
// components/json-ld.tsx
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// app/page.tsx
import { JsonLd } from '@/components/json-ld'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Hub Leilão',
  url: 'https://hubleilao.com.br',
  logo: 'https://hubleilao.com.br/logo.png',
  description: 'Plataforma completa para investidores de leilões imobiliários',
  sameAs: [
    'https://instagram.com/hubleilao',
    'https://linkedin.com/company/hubleilao',
  ],
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      {/* resto da página */}
    </>
  )
}
```

---

## Melhorias Recomendadas (Impacto Médio)

### [Open Graph] Imagem não otimizada

**Status:** ⚠️ Parcial
**Impacto:** 🟡 Médio
**Esforço:** Baixo

#### O que foi encontrado
```tsx
openGraph: {
  images: ['/logo.png'], // 200x200px
}
```

#### Por que isso importa
Imagens OG devem ter 1200x630px para exibição correta em Facebook, LinkedIn e WhatsApp. Imagens pequenas aparecem cortadas ou pixeladas.

#### Como corrigir
```tsx
openGraph: {
  images: [
    {
      url: 'https://hubleilao.com.br/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Hub Leilão - Sua plataforma de leilões imobiliários',
    },
  ],
}
```

---

### [Headings] Múltiplos H1

**Status:** ❌ Não implementado
**Impacto:** 🟡 Médio
**Esforço:** Baixo

#### O que foi encontrado
```tsx
// Hero section
<h1>Bem-vindo ao Hub Leilão</h1>

// Features section
<h1>Nossas Funcionalidades</h1>

// Pricing section
<h1>Planos e Preços</h1>
```

#### Por que isso importa
Cada página deve ter exatamente um H1, que indica ao Google o tópico principal. Múltiplos H1 diluem a relevância e confundem crawlers.

#### Como corrigir
```tsx
// Hero section - manter como H1
<h1>Bem-vindo ao Hub Leilão</h1>

// Features section - alterar para H2
<h2>Nossas Funcionalidades</h2>

// Pricing section - alterar para H2
<h2>Planos e Preços</h2>
```

---

## Checklist Detalhado

| Categoria | Item | Status | Impacto |
|-----------|------|--------|---------|
| **Meta Tags** | Title | ⚠️ | Alto |
| | Description | ✅ | Alto |
| | Viewport | ✅ | Alto |
| | Canonical | ❌ | Alto |
| **Headings** | H1 único | ❌ | Médio |
| | Hierarquia | ⚠️ | Médio |
| **Imagens** | Alt text | ⚠️ | Alto |
| | next/image | ❌ | Médio |
| | Dimensões | ❌ | Médio |
| **Open Graph** | og:title | ✅ | Médio |
| | og:image | ⚠️ | Médio |
| **Schema.org** | Organization | ❌ | Médio |
| | WebSite | ❌ | Baixo |
| **Performance** | LCP | ❌ | Alto |
| | CLS | ⚠️ | Alto |
| **Técnico** | robots.txt | ✅ | Alto |
| | sitemap.xml | ❌ | Alto |

---

## Próximos Passos Recomendados

1. **Urgente**: Corrigir LCP otimizando imagem hero
2. **Urgente**: Adicionar canonical URL
3. **Alto**: Implementar Schema.org Organization
4. **Alto**: Gerar sitemap dinâmico
5. **Médio**: Criar imagem OG 1200x630
6. **Médio**: Corrigir hierarquia de headings
```

---

## Exemplo 2: Análise Rápida (Sumário)

```markdown
# Quick SEO Check: /blog/[slug]

**Score:** 78/100

## ✅ Funcionando
- Meta title e description dinâmicos
- Canonical configurado
- Open Graph completo
- next/image em uso
- Headings hierárquicos

## ❌ Precisa Atenção
- **Article Schema ausente** - Adicionar JSON-LD para artigos
- **Breadcrumbs sem Schema** - Estruturar navegação
- **Alt text genérico** - "imagem" não é descritivo
- **Font not optimized** - Migrar para next/font

## Correção Prioritária

```tsx
// Adicionar ao componente de post
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: post.title,
  image: post.coverImage,
  author: { '@type': 'Person', name: post.author },
  datePublished: post.publishedAt,
  dateModified: post.updatedAt,
}
```
```

---

## Exemplo 3: Issue Específica

```markdown
### [CLS] Layout shift detectado

**Arquivo:** `components/hero.tsx:23`
**Status:** ❌
**Impacto:** 🔴 Alto

#### Problema
```tsx
const [loaded, setLoaded] = useState(false)

return (
  <div>
    {loaded && <Image ... />}  {/* Causa shift quando carrega */}
  </div>
)
```

#### Impacto
CLS de 0.25 (ruim). Google penaliza páginas com CLS > 0.1.

#### Solução
```tsx
return (
  <div className="relative aspect-video"> {/* Container com aspect ratio fixo */}
    <Image
      fill
      sizes="100vw"
      placeholder="blur"
      blurDataURL="..."
    />
  </div>
)
```
```
