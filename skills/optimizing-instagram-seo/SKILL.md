---
name: optimizing-instagram-seo
description: |
  Analisa e otimiza perfis de Instagram para descoberta organica no Google
  e na busca interna do Instagram. Gera relatorios de score, bio otimizada,
  templates de legenda com keywords, alt text e estrategia de hashtags.
  Use quando o usuario mencionar: Instagram, perfil, bio, hashtags,
  descoberta, alcance, SEO social, ou indexacao de posts.
---

# Optimizing Instagram SEO

Skill para otimizacao de perfis de Instagram visando indexacao no Google (update julho 2025) e descoberta na busca interna do Instagram.

## Contexto Importante (2025)

Desde julho de 2025, o Google indexa posts publicos de contas profissionais do Instagram. Isso transforma cada post em uma "mini landing page" que pode aparecer nos resultados de busca.

**Top 3 fatores de ranking (Adam Mosseri):**
1. Watch time (tempo de visualizacao)
2. DM shares (compartilhamentos por DM) - 3-5x mais peso que likes
3. Likes per reach

## Workflow de Analise (6 etapas)

### 1. Discovery
Coletar informacoes do usuario:
- Qual e o nicho/segmento?
- Quem e o publico-alvo?
- Tem localizacao fisica (negocio local)?
- Tipo de conta (Business/Creator)?
- Objetivo principal (vendas, autoridade, leads)?
- 3 concorrentes de referencia?

### 2. Audit
Verificar elementos do perfil e gerar score inicial (0-100):
- Username (@handle) - contem keyword?
- Display Name (64 chars) - keyword + localizacao?
- Bio (150 chars) - proposta valor + CTA + keywords?
- Categoria - mais especifica possivel?
- Configuracoes - conta publica, profissional, indexacao ativa?

Consulte `AUDIT-CHECKLIST.md` para lista completa de verificacao.

### 3. Keywords
Identificar keywords do nicho:
- Keyword primaria (termo principal de busca)
- Keywords secundarias (variacoes e relacionadas)
- Keywords de localizacao (se negocio local)

### 4. Optimize
Aplicar otimizacoes nos elementos do perfil usando templates de `templates/BIOS.md`.

### 5. Content
Gerar templates prontos para uso:
- Bio otimizada (usando formulas de `templates/BIOS.md`)
- Estruturas de caption (usando `templates/CAPTIONS.md`)
- Padroes de alt text
- Sets de hashtags (3-5 por post)

### 6. Validate
Re-audit para verificar melhorias:
- Se score < 80: voltar ao passo 4
- Se score >= 80: entregar relatorio final

## Sistema de Scoring (0-100)

| Area | Peso | Verificacoes |
|------|------|--------------|
| Perfil SEO | 40% | Username, Name Field, Bio, Categoria |
| Caption SEO | 30% | Primeiros 125 chars, keywords, estrutura |
| Alt Text | 15% | Customizado, descritivo, com keywords |
| Configuracoes | 15% | Conta publica, profissional, indexacao |

## Estrutura do Relatorio de Saida

```
## RELATORIO DE OTIMIZACAO INSTAGRAM SEO

### Score Geral: X/100
- Perfil SEO: X/40
- Caption SEO: X/30
- Alt Text: X/15
- Configuracoes: X/15

### 1. PERFIL OTIMIZADO
**Name Field sugerido (64 chars):**
[Nome] | [Keyword Principal] | [Local/Especialidade]

**Bio otimizada (150 chars):**
[Proposta de valor com keyword]
[Prova social]
[CTA]

**Categoria recomendada:** [categoria]

### 2. TEMPLATES DE CAPTION
[3 templates prontos baseados no nicho]

### 3. PADROES DE ALT TEXT
[Exemplos especificos para o tipo de conteudo]

### 4. ESTRATEGIA DE HASHTAGS
[3-5 hashtags por post, organizadas em sets para rotacao]

### 5. QUICK WINS (Acoes Imediatas)
- [ ] [Acao 1]
- [ ] [Acao 2]
- [ ] [Acao 3]

### 6. CHECKLIST DE GOOGLE INDEXING
Consulte `GOOGLE-INDEXING.md` para verificar se o perfil esta pronto.
```

## Arquivos de Referencia

- `AUDIT-CHECKLIST.md` - Lista completa de elementos a verificar
- `GOOGLE-INDEXING.md` - Guia especifico para indexacao no Google
- `templates/BIOS.md` - 10 formulas de bio otimizadas
- `templates/CAPTIONS.md` - 3 estruturas de caption + hooks
- `EXAMPLES.md` - Casos praticos antes/depois

## Comandos de Acao

O usuario pode solicitar:
- "Gere uma bio otimizada para meu perfil de [nicho]"
- "Crie templates de caption para [segmento]"
- "Monte sets de hashtags para [area]"
- "Audite meu perfil @username"
- "Como configuro meu perfil para aparecer no Google?"

## Diretrizes de Analise

1. **Sempre pergunte o nicho** antes de gerar templates
2. **Respeite limites de caracteres** (64 name, 150 bio, 125 primeiros chars caption)
3. **Priorize keywords** sobre hashtags (mudanca 2025)
4. **Inclua prova social** sempre que possivel
5. **CTAs claros** em toda bio
6. **Alt text descritivo** com keywords naturais (100-125 chars)
