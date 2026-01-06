# Padrões SEO para Next.js

## Metadata API (App Router - Next.js 13+)

### Metadata Estática

```tsx
// app/page.tsx ou app/[slug]/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Título da Página | Nome do Site',
  description: 'Descrição com 150-160 caracteres que resume o conteúdo da página e inclui palavra-chave principal.',

  // Canonical
  alternates: {
    canonical: 'https://seusite.com.br/pagina',
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Open Graph
  openGraph: {
    title: 'Título para Redes Sociais',
    description: 'Descrição otimizada para compartilhamento social.',
    url: 'https://seusite.com.br/pagina',
    siteName: 'Nome do Site',
    images: [
      {
        url: 'https://seusite.com.br/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Descrição da imagem',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },

  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'Título para Twitter',
    description: 'Descrição para Twitter.',
    images: ['https://seusite.com.br/twitter-image.jpg'],
  },

  // Verificação
  verification: {
    google: 'código-de-verificação',
  },
}
```

### Metadata Dinâmica

```tsx
// app/blog/[slug]/page.tsx
import type { Metadata } from 'next'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)

  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author.name],
    },
  }
}
```

### Layout Root com Defaults

```tsx
// app/layout.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://seusite.com.br'),
  title: {
    default: 'Nome do Site',
    template: '%s | Nome do Site',
  },
  description: 'Descrição padrão do site.',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Nome do Site',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
```

---

## Schema.org / JSON-LD

### Componente Reutilizável

```tsx
// components/json-ld.tsx
type JsonLdProps = {
  data: Record<string, unknown>
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
```

### Organization Schema

```tsx
// app/layout.tsx ou componente global
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Nome da Empresa',
  url: 'https://seusite.com.br',
  logo: 'https://seusite.com.br/logo.png',
  sameAs: [
    'https://facebook.com/empresa',
    'https://instagram.com/empresa',
    'https://linkedin.com/company/empresa',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+55-11-99999-9999',
    contactType: 'customer service',
    availableLanguage: 'Portuguese',
  },
}
```

### WebSite Schema com SearchAction

```tsx
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Nome do Site',
  url: 'https://seusite.com.br',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://seusite.com.br/busca?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
}
```

### BreadcrumbList Schema

```tsx
// Gerar dinamicamente baseado na rota
function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

// Uso
const breadcrumbs = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://seusite.com.br' },
  { name: 'Blog', url: 'https://seusite.com.br/blog' },
  { name: 'Título do Post', url: 'https://seusite.com.br/blog/slug' },
])
```

### Article Schema

```tsx
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Título do Artigo',
  description: 'Descrição do artigo',
  image: 'https://seusite.com.br/imagem.jpg',
  author: {
    '@type': 'Person',
    name: 'Nome do Autor',
    url: 'https://seusite.com.br/autor/nome',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Nome do Site',
    logo: {
      '@type': 'ImageObject',
      url: 'https://seusite.com.br/logo.png',
    },
  },
  datePublished: '2024-01-15',
  dateModified: '2024-01-20',
}
```

### FAQ Schema

```tsx
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Pergunta 1?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Resposta da pergunta 1.',
      },
    },
    {
      '@type': 'Question',
      name: 'Pergunta 2?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Resposta da pergunta 2.',
      },
    },
  ],
}
```

### Product Schema (E-commerce)

```tsx
const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Nome do Produto',
  description: 'Descrição do produto',
  image: 'https://seusite.com.br/produto.jpg',
  sku: 'SKU123',
  brand: {
    '@type': 'Brand',
    name: 'Nome da Marca',
  },
  offers: {
    '@type': 'Offer',
    price: '199.90',
    priceCurrency: 'BRL',
    availability: 'https://schema.org/InStock',
    url: 'https://seusite.com.br/produto/slug',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.5',
    reviewCount: '89',
  },
}
```

---

## Sitemap Dinâmico

```tsx
// app/sitemap.ts
import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://seusite.com.br'

  // Páginas estáticas
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/sobre`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  // Páginas dinâmicas (ex: posts do blog)
  const posts = await getPosts()
  const postPages = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...postPages]
}
```

---

## Robots.txt

```tsx
// app/robots.ts
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://seusite.com.br'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
```

---

## Otimização de Imagens

```tsx
import Image from 'next/image'

// Imagem otimizada com todos os atributos SEO
<Image
  src="/imagem.jpg"
  alt="Descrição detalhada da imagem para acessibilidade e SEO"
  width={800}
  height={600}
  priority={true} // Para imagens above-the-fold (LCP)
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

---

## Otimização de Fontes

```tsx
// app/layout.tsx
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // Importante para CLS
  variable: '--font-inter',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
```

---

## Scripts Externos Otimizados

```tsx
import Script from 'next/script'

// Google Analytics (ou similar)
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_ID"
  strategy="afterInteractive"
/>

// Scripts não críticos
<Script
  src="https://widget.exemplo.com/script.js"
  strategy="lazyOnload"
/>

// Scripts críticos
<Script
  src="https://critico.com/script.js"
  strategy="beforeInteractive"
/>
```

---

## Prefetch e Preconnect

```tsx
// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Preconnect para recursos críticos */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        {/* DNS Prefetch para domínios secundários */}
        <link rel="dns-prefetch" href="https://api.seusite.com.br" />
        <link rel="dns-prefetch" href="https://analytics.exemplo.com" />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

---

## next.config.js Otimizado

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Trailing slashes consistentes
  trailingSlash: false,

  // Compressão
  compress: true,

  // Headers de segurança e cache
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
      {
        source: '/(.*).(jpg|jpeg|png|gif|ico|webp|svg)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },

  // Redirects para URLs antigas
  async redirects() {
    return [
      {
        source: '/pagina-antiga',
        destination: '/pagina-nova',
        permanent: true, // 301
      },
    ]
  },

  // Domínios de imagem permitidos
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.seusite.com.br',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
```
