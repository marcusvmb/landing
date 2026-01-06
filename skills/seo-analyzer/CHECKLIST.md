# SEO Checklist Completo para Next.js

## Nível 1: Básico (Essencial)

### Meta Tags Fundamentais

| Item | Verificação | Impacto |
|------|-------------|---------|
| `<title>` | Presente, único, 50-60 caracteres | 🔴 Alto |
| `meta description` | Presente, único, 150-160 caracteres | 🔴 Alto |
| `viewport` | `width=device-width, initial-scale=1` | 🔴 Alto |
| `charset` | UTF-8 definido | 🔴 Alto |
| `lang` | Atributo no `<html>` | 🟡 Médio |

### Estrutura de Headings

| Item | Verificação | Impacto |
|------|-------------|---------|
| H1 único | Apenas um H1 por página | 🔴 Alto |
| H1 presente | Página tem H1 | 🔴 Alto |
| Hierarquia | H1 → H2 → H3 (sem pular níveis) | 🟡 Médio |
| Keywords no H1 | Palavra-chave principal presente | 🟡 Médio |

### Imagens

| Item | Verificação | Impacto |
|------|-------------|---------|
| Alt text | Todas imagens têm alt descritivo | 🔴 Alto |
| next/image | Usando componente otimizado | 🟡 Médio |
| Dimensões | width/height definidos | 🟡 Médio |
| Formatos modernos | WebP/AVIF quando possível | 🟢 Baixo |

### Links

| Item | Verificação | Impacto |
|------|-------------|---------|
| Links internos | Usando next/link | 🟡 Médio |
| Links externos | `rel="noopener noreferrer"` | 🟢 Baixo |
| Anchor text | Descritivo (não "clique aqui") | 🟡 Médio |
| Links quebrados | Nenhum 404 interno | 🔴 Alto |

---

## Nível 2: Intermediário (Importante)

### Open Graph (Redes Sociais)

| Item | Verificação | Impacto |
|------|-------------|---------|
| `og:title` | Presente e otimizado | 🟡 Médio |
| `og:description` | Presente, até 200 chars | 🟡 Médio |
| `og:image` | Imagem 1200x630px | 🟡 Médio |
| `og:url` | URL canônica | 🟡 Médio |
| `og:type` | website/article/product | 🟢 Baixo |
| `og:site_name` | Nome do site | 🟢 Baixo |

### Twitter Cards

| Item | Verificação | Impacto |
|------|-------------|---------|
| `twitter:card` | summary_large_image | 🟡 Médio |
| `twitter:title` | Presente | 🟢 Baixo |
| `twitter:description` | Presente | 🟢 Baixo |
| `twitter:image` | Imagem otimizada | 🟢 Baixo |

### Canonical e Indexação

| Item | Verificação | Impacto |
|------|-------------|---------|
| Canonical URL | Definida e correta | 🔴 Alto |
| robots meta | Configurado corretamente | 🔴 Alto |
| robots.txt | Presente e correto | 🔴 Alto |
| sitemap.xml | Presente e atualizado | 🔴 Alto |
| Trailing slashes | Consistente | 🟡 Médio |

### URLs

| Item | Verificação | Impacto |
|------|-------------|---------|
| URL amigável | Lowercase, hífens, sem caracteres especiais | 🟡 Médio |
| URL curta | Máximo 3-5 níveis de profundidade | 🟢 Baixo |
| Keywords na URL | Palavra-chave presente | 🟡 Médio |
| Sem parâmetros | URLs limpas quando possível | 🟢 Baixo |

---

## Nível 3: Avançado (Diferencial)

### Schema.org / Dados Estruturados

| Item | Verificação | Impacto |
|------|-------------|---------|
| JSON-LD presente | Script no head ou body | 🟡 Médio |
| Schema válido | Sem erros no Rich Results Test | 🟡 Médio |
| Organization | Dados da empresa | 🟡 Médio |
| WebSite | SearchAction para site search | 🟢 Baixo |
| BreadcrumbList | Navegação estruturada | 🟡 Médio |
| Article/Product | Tipo específico do conteúdo | 🟡 Médio |
| FAQ | Se houver perguntas frequentes | 🟡 Médio |
| LocalBusiness | Se for negócio local | 🟡 Médio |

### Performance (Core Web Vitals)

| Item | Verificação | Impacto |
|------|-------------|---------|
| LCP < 2.5s | Largest Contentful Paint | 🔴 Alto |
| FID < 100ms | First Input Delay | 🔴 Alto |
| CLS < 0.1 | Cumulative Layout Shift | 🔴 Alto |
| TTFB < 600ms | Time to First Byte | 🟡 Médio |
| FCP < 1.8s | First Contentful Paint | 🟡 Médio |

### Otimizações Next.js

| Item | Verificação | Impacto |
|------|-------------|---------|
| Font optimization | next/font utilizado | 🟡 Médio |
| Image optimization | Loader configurado, sizes definido | 🟡 Médio |
| Script optimization | next/script com strategy | 🟡 Médio |
| Dynamic imports | Componentes pesados lazy loaded | 🟡 Médio |
| ISR/SSG | Páginas estáticas quando possível | 🔴 Alto |
| Streaming | Suspense para conteúdo assíncrono | 🟢 Baixo |

### Internacionalização (se aplicável)

| Item | Verificação | Impacto |
|------|-------------|---------|
| hreflang | Tags para cada idioma | 🔴 Alto |
| x-default | Versão padrão definida | 🟡 Médio |
| URL structure | /pt-br/, /en/, etc. | 🟡 Médio |
| Content translation | Conteúdo real traduzido | 🔴 Alto |

### Segurança (impacta SEO)

| Item | Verificação | Impacto |
|------|-------------|---------|
| HTTPS | Site totalmente em HTTPS | 🔴 Alto |
| Mixed content | Sem recursos HTTP em página HTTPS | 🔴 Alto |
| Security headers | CSP, X-Frame-Options, etc. | 🟢 Baixo |

---

## Nível 4: Expert (Excelência)

### Mobile SEO

| Item | Verificação | Impacto |
|------|-------------|---------|
| Mobile-first | Design responsivo completo | 🔴 Alto |
| Touch targets | Botões ≥ 48x48px | 🟡 Médio |
| Font size | Mínimo 16px para body | 🟡 Médio |
| Viewport config | Sem zoom disabled | 🟡 Médio |

### Acessibilidade (A11y → SEO)

| Item | Verificação | Impacto |
|------|-------------|---------|
| ARIA labels | Elementos interativos rotulados | 🟡 Médio |
| Skip links | Navegação por teclado | 🟢 Baixo |
| Color contrast | WCAG AA mínimo | 🟡 Médio |
| Focus visible | Estados de foco claros | 🟢 Baixo |
| Semantic HTML | Uso correto de tags | 🟡 Médio |

### Conteúdo

| Item | Verificação | Impacto |
|------|-------------|---------|
| Keyword density | 1-2% natural | 🟡 Médio |
| Content length | Adequado ao tipo de página | 🟡 Médio |
| Readability | Escrita clara e escaneável | 🟡 Médio |
| Fresh content | Data de atualização | 🟢 Baixo |
| Internal linking | Links contextuais | 🟡 Médio |

### Técnico Avançado

| Item | Verificação | Impacto |
|------|-------------|---------|
| Prefetch | Links importantes prefetched | 🟢 Baixo |
| DNS prefetch | Domínios externos | 🟢 Baixo |
| Preconnect | APIs e CDNs críticos | 🟡 Médio |
| Bundle size | JS/CSS otimizados | 🟡 Médio |
| Cache headers | Configurados corretamente | 🟡 Médio |
| Compression | Gzip/Brotli ativo | 🟡 Médio |

---

## Ferramentas de Validação

| Ferramenta | URL | Uso |
|------------|-----|-----|
| Rich Results Test | search.google.com/test/rich-results | Schema.org |
| PageSpeed Insights | pagespeed.web.dev | Core Web Vitals |
| Mobile-Friendly Test | search.google.com/test/mobile-friendly | Mobile |
| Schema Validator | validator.schema.org | JSON-LD |
| W3C Validator | validator.w3.org | HTML |
| WAVE | wave.webaim.org | Acessibilidade |
