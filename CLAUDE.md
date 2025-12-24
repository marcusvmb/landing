# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Purpose

This repository serves two purposes:

1. **Landing Page Project**: Active development of a lead capture landing page for "Hub Leilão" - a SaaS platform for real estate auction investors and advisors in Brazil
2. **Agent Skills Reference**: Documentation about Claude Agent Skills (for reference when creating Skills)

## Active Project: Hub Leilão Landing Page

### Project Status
Pre-launch lead capture page - collecting emails for waitlist with exclusive discount code.

### Key Files
- **strategic-brief-hub-leilao.md** - Complete strategic brief with positioning, personas, competitive analysis, and copywriting direction
- **respotas.txt** - Raw client questionnaire responses (source material)
- **novos_estudos.md** - Behavioral psychology and neurocopywriting techniques for persuasion
- **identidade_visual/** - Brand identity assets (color palette, typography, visual examples)

### Target Audience
- P1: Individual real estate auction investors (PF)
- P2: Auction advisors/consultants
- P3: Advisory firms/offices
- P4: Home buyers seeking property via auction

### Key Differentiators to Emphasize
1. Only complete "Hub" - search + analysis + management in one platform
2. Multi-scenario financial calculator (unique feature)
3. Professional PDF reports for sharing
4. Advisor-specific tools for client portfolio management
5. Occupant data lookup

### Positioning
Solution Aware audience - they know competitors (Auket, Leilão Ninja, Procura Bem, QAchado, Núcleo Leilões). Differentiate on "complete hub" vs fragmented tools.

### Tone
Professional + Friendly. Simple language (5th-7th grade level). Portuguese BR.

### Conversion Goal
Email capture for waitlist → exclusive discount code at launch.

---

## Agent Skills Reference

### Three-Level Loading Architecture
Skills use progressive disclosure:
1. **Level 1 (Metadata)**: Name + description from YAML frontmatter (~100 tokens)
2. **Level 2 (Instructions)**: SKILL.md body when triggered (<5k tokens)
3. **Level 3 (Resources)**: Additional files loaded as needed

### Skill Structure
```
skill-name/
├── SKILL.md              # Required - YAML frontmatter + instructions
├── REFERENCE.md          # Optional - API docs
├── EXAMPLES.md           # Optional - usage patterns
└── scripts/              # Optional - executable utilities
```

### YAML Frontmatter
- `name`: Max 64 chars, lowercase letters/numbers/hyphens, no "anthropic" or "claude"
- `description`: Max 1024 chars, describes what Skill does AND when to use it

### Constraints
- SKILL.md body: under 500 lines
- File references: one level deep from SKILL.md
- Paths: forward slashes only
- Naming: gerund form (e.g., `processing-pdfs`)
- Test with Haiku, Sonnet, and Opus models

### Key Patterns
- **Template pattern**: Output format templates with appropriate strictness
- **Examples pattern**: Input/output pairs for style
- **Conditional workflow**: Decision point guidance
- **Feedback loops**: Validate → fix → repeat
- **Plan-validate-execute**: Structured intermediate outputs for batch ops
