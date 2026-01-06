import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.nexusleiloes.com.br'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/v2',
          '/v3',
          '/v4',
          '/v5',
          '/problem-preview',
          '/features-preview',
          '/showcase',
          '/api/',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
