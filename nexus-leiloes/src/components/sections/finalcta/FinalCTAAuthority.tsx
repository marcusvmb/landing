'use client';
import React from 'react';

/**
 * FINAL CTA V3: AUTHORITY + FOOTER
 *
 * Frame Cognitivo: "Junte-se aos especialistas"
 * Headlines focam em expertise, credibilidade, profissionalismo
 *
 * ASCII Layout:
 * +----------------------------------------------------------------------+
 * |                         SECTION BACKGROUND                           |
 * |                      (bg-[#EFF0F0] - light)                          |
 * +----------------------------------------------------------------------+
 * |                                                                      |
 * |         EYEBROW: "Plataforma dos Especialistas"                     |
 * |                                                                      |
 * |              "A Ferramenta dos Maiores                               |
 * |               Especialistas do Mercado"                              |
 * |                                                                      |
 * |   +-------------------- MAIN CONTENT ----------------------+         |
 * |   |                                                         |        |
 * |   |   +------------- CREDIBILITY BADGES --------------+    |        |
 * |   |   | [Shield] [Award] [Check] [Star] [Users]      |    |        |
 * |   |   +----------------------------------------------+    |        |
 * |   |                                                         |        |
 * |   |   +-- col-span-7 --+      +-- col-span-5 --+          |        |
 * |   |   |   EXPERT CARD  |      |   CTA PANEL    |          |        |
 * |   |   |   Logos +      |      |   Professional |          |        |
 * |   |   |   Testimonial  |      |   Access       |          |        |
 * |   |   +---------------+      +----------------+          |        |
 * |   |                                                         |        |
 * |   +---------------------------------------------------------+        |
 * |                                                                      |
 * +----------------------------------------------------------------------+
 * |                          FOOTER                                      |
 * |   Logo    Certificacoes + Trust    Redes    Copyright               |
 * +----------------------------------------------------------------------+
 *
 * Grid Structure: 12 cols asymmetric (7/5)
 * Visual Elements:
 * - Light professional background
 * - Credibility badges/icons
 * - Expert testimonial quote
 * - Certification logos
 */

const credibilityBadges = [
  { icon: 'shield', label: 'Dados Seguros', value: 'SSL 256-bit' },
  { icon: 'award', label: 'Nota Media', value: '4.9/5' },
  { icon: 'check', label: 'Dados Verificados', value: '100%' },
  { icon: 'users', label: 'Especialistas', value: '+2.500' },
];

const expertTestimonial = {
  quote: 'O Nexus transformou a forma como analiso leilões. O que antes levava horas, agora faço em minutos. E a ferramenta que uso diariamente para tomar decisões assertivas.',
  author: 'Carlos Mendes',
  role: 'Assessor de Leilões - 12 anos de mercado',
  avatar: '/avatars/carlos.jpg',
};

const partnerLogos = [
  { name: 'Leiloeiro SP', initials: 'LSP' },
  { name: 'Tribunal de Justica', initials: 'TJ' },
  { name: 'Banco Invest', initials: 'BI' },
  { name: 'Conselho Imob', initials: 'CI' },
];

const certifications = [
  { label: 'LGPD Compliant', icon: 'shield' },
  { label: 'SSL Secure', icon: 'lock' },
  { label: 'ISO 27001', icon: 'cert' },
];

const footerLinks = {
  legal: [
    { label: 'Politica de Privacidade', href: '/privacidade' },
    { label: 'Termos de Uso', href: '/termos' },
  ],
  social: [
    { label: 'Instagram', href: 'https://instagram.com/nexusleiloes', icon: 'instagram' },
    { label: 'LinkedIn', href: 'https://linkedin.com/company/nexusleiloes', icon: 'linkedin' },
    { label: 'YouTube', href: 'https://youtube.com/@nexusleiloes', icon: 'youtube' },
  ],
};

export default function FinalCTAAuthority() {
  return (
    <>
      {/* CTA Section */}
      <section className="bg-[#EFF0F0] py-24 lg:py-32 relative overflow-hidden" aria-labelledby="finalcta-authority-heading">
        {/* Background Glows */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#5C5CFF]/8 rounded-full blur-[150px]" aria-hidden="true" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#5C5CFF]/6 rounded-full blur-[120px]" aria-hidden="true" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          {/* Eyebrow */}
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#5C5CFF]/10 rounded-full border border-[#5C5CFF]/15">
              <svg className="w-4 h-4 text-[#5C5CFF]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span className="text-sm font-semibold text-[#5C5CFF] uppercase tracking-wider">Plataforma dos Especialistas</span>
            </span>
          </div>

          {/* Headline */}
          <h2 id="finalcta-authority-heading" className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.03em] leading-[1.05] text-[#2B3259] mb-6">
            A Ferramenta dos Maiores
            <br />
            <span className="text-[#5C5CFF]">Especialistas do Mercado</span>
          </h2>

          {/* Subheadline */}
          <p className="text-center text-lg text-[#2B3259]/60 max-w-2xl mx-auto mb-12">
            Profissionais que movimentam milhoes em leilões confiam no Nexus.{' '}
            <span className="text-[#2B3259] font-semibold">Agora você também pode ter acesso.</span>
          </p>

          {/* Credibility Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {credibilityBadges.map((badge, index) => (
              <div key={index} className="flex items-center gap-3 px-5 py-3 bg-white/80 backdrop-blur-sm rounded-2xl border border-[#5C5CFF]/10 shadow-[0_8px_25px_-10px_rgba(92,92,255,0.15)]">
                <CredibilityIcon icon={badge.icon} />
                <div>
                  <p className="text-xs text-[#2B3259]/50 uppercase tracking-wider">{badge.label}</p>
                  <p className="text-sm font-bold text-[#2B3259]">{badge.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Main Content - Asymmetric Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Expert Card - 7 columns */}
            <div className="lg:col-span-7">
              <div className="h-full bg-white/80 backdrop-blur-xl rounded-3xl border border-[#5C5CFF]/10 p-8 lg:p-10 shadow-[0_25px_60px_-20px_rgba(92,92,255,0.15)]">
                {/* Partner Logos */}
                <div className="mb-8">
                  <p className="text-xs text-[#2B3259]/40 uppercase tracking-wider mb-4">Integrado com</p>
                  <div className="flex flex-wrap gap-4">
                    {partnerLogos.map((logo, index) => (
                      <div key={index} className="flex items-center gap-2 px-4 py-2 bg-[#EFF0F0] rounded-xl">
                        <div className="w-8 h-8 bg-[#5C5CFF]/10 rounded-lg flex items-center justify-center">
                          <span className="text-xs font-bold text-[#5C5CFF]">{logo.initials}</span>
                        </div>
                        <span className="text-sm text-[#2B3259]/70">{logo.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-[#5C5CFF]/20 to-transparent mb-8" />

                {/* Expert Testimonial */}
                <div className="relative">
                  {/* Quote mark */}
                  <div className="absolute -top-4 -left-2 text-6xl text-[#5C5CFF]/10 font-serif" aria-hidden="true">&ldquo;</div>

                  <blockquote className="relative z-10">
                    <p className="text-lg lg:text-xl text-[#2B3259]/80 leading-relaxed italic mb-6">
                      {expertTestimonial.quote}
                    </p>

                    <footer className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#5C5CFF] to-[#4848CC] rounded-full flex items-center justify-center shadow-[0_10px_25px_-8px_rgba(92,92,255,0.4)]">
                        <span className="text-white font-bold text-lg">{expertTestimonial.author.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="font-bold text-[#2B3259]">{expertTestimonial.author}</p>
                        <p className="text-sm text-[#2B3259]/50">{expertTestimonial.role}</p>
                      </div>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>

            {/* CTA Panel - 5 columns */}
            <div className="lg:col-span-5">
              <div className="h-full bg-gradient-to-br from-[#2B3259] to-[#1E2240] rounded-3xl p-8 lg:p-10 shadow-[0_30px_80px_-20px_rgba(43,50,89,0.4)] flex flex-col justify-between">
                <div>
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#5C5CFF]/20 rounded-full mb-6">
                    <svg className="w-4 h-4 text-[#5C5CFF]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <span className="text-sm font-semibold text-[#5C5CFF]">Acesso Profissional</span>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-black text-white mb-4">
                    Tenha as Mesmas Ferramentas dos Experts
                  </h3>

                  <p className="text-white/60 mb-8">
                    Acesse recursos profissionais usados por assessores que fecham dezenas de leilões por mês.
                  </p>

                  {/* Features list */}
                  <ul className="space-y-3 mb-8">
                    {['Relatorios PDF profissionais', 'Calculadora multi-cenarios', 'Alertas personalizados', 'Suporte prioritario'].map((feature, index) => (
                      <li key={index} className="flex items-center gap-3 text-white/80">
                        <svg className="w-5 h-5 text-[#5C5CFF]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div>
                  <button type="button" className="w-full bg-[#FF7A00] text-white font-bold text-lg px-8 py-5 rounded-2xl shadow-[0_20px_50px_-15px_rgba(255,122,0,0.5)] transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:shadow-[0_25px_60px_-15px_rgba(255,122,0,0.6)] active:translate-y-0 active:scale-[0.98] cursor-pointer">
                    Acessar Plataforma Profissional
                    <span className="ml-2" aria-hidden="true">&rarr;</span>
                  </button>

                  <p className="mt-4 text-center text-sm text-white/40">
                    Acesso imediato após cadastro
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Certifications */}
      <footer className="bg-[#2B3259] py-16 border-t border-white/5" role="contentinfo">
        <div className="max-w-6xl mx-auto px-6">
          {/* Certifications */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-3 px-5 py-3 bg-white/5 rounded-xl border border-white/10">
                <CertIcon icon={cert.icon} />
                <span className="text-sm text-white/70">{cert.label}</span>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />

          {/* Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Logo */}
            <div className="md:col-span-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#5C5CFF] rounded-xl flex items-center justify-center shadow-[0_8px_20px_-6px_rgba(92,92,255,0.5)]">
                  <span className="text-white font-bold text-lg">N</span>
                </div>
                <span className="font-bold text-white text-lg tracking-[-0.02em]">Nexus Leilões</span>
              </div>
            </div>

            {/* Links */}
            <div className="md:col-span-4 flex flex-wrap gap-6">
              {footerLinks.legal.map((link) => (
                <a key={link.href} href={link.href} className="text-sm text-white/50 hover:text-[#5C5CFF] transition-colors duration-300">
                  {link.label}
                </a>
              ))}
              <a href="mailto:contato@nexusleiloes.com.br" className="text-sm text-white/50 hover:text-[#5C5CFF] transition-colors duration-300">
                Suporte
              </a>
            </div>

            {/* Social */}
            <div className="md:col-span-3 flex gap-4">
              {footerLinks.social.map((social) => (
                <a key={social.href} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-white/50 hover:bg-[#5C5CFF]/20 hover:text-[#5C5CFF] transition-all duration-300" aria-label={social.label}>
                  <SocialIcon icon={social.icon} />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="md:col-span-2 text-right">
              <p className="text-sm text-white/30">&copy; 2024 Nexus</p>
            </div>
          </div>

          {/* Trust statement */}
          <div className="mt-8 pt-8 border-t border-white/5 text-center">
            <p className="text-sm text-white/40">
              Empresa registrada no Brasil | CNPJ: XX.XXX.XXX/0001-XX | Todos os direitos reservados
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

function CredibilityIcon({ icon }: { icon: string }) {
  const iconMap: Record<string, React.ReactElement> = {
    shield: (
      <div className="w-10 h-10 bg-[#5C5CFF]/10 rounded-xl flex items-center justify-center">
        <svg className="w-5 h-5 text-[#5C5CFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      </div>
    ),
    award: (
      <div className="w-10 h-10 bg-[#FF7A00]/10 rounded-xl flex items-center justify-center">
        <svg className="w-5 h-5 text-[#FF7A00]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      </div>
    ),
    check: (
      <div className="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center">
        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
        </svg>
      </div>
    ),
    users: (
      <div className="w-10 h-10 bg-[#5C5CFF]/10 rounded-xl flex items-center justify-center">
        <svg className="w-5 h-5 text-[#5C5CFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </div>
    ),
  };
  return iconMap[icon] || null;
}

function CertIcon({ icon }: { icon: string }) {
  const iconMap: Record<string, React.ReactElement> = {
    shield: (
      <svg className="w-5 h-5 text-[#5C5CFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    lock: (
      <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    cert: (
      <svg className="w-5 h-5 text-[#FF7A00]" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
      </svg>
    ),
  };
  return iconMap[icon] || null;
}

function SocialIcon({ icon }: { icon: string }) {
  const iconMap: Record<string, React.ReactElement> = {
    instagram: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    linkedin: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    youtube: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  };
  return iconMap[icon] || null;
}
