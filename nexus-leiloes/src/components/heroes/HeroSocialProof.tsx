'use client';

import { useState, useEffect, useCallback } from 'react';

/**
 * HERO 4: SOCIAL PROOF (Validacao Social + Form Inline)
 *
 * Frame Cognitivo: Prova social - "outros já estão fazendo, você também deveria"
 *
 * Layout Specifications:
 * - Avatar stack no topo com contador
 * - Headline centralizado com numero em destaque
 * - Formulario inline com glassmorphism
 * - Toast notification animado mostrando novos cadastros
 * - Pattern sutil de dots no background
 *
 * Design Tokens:
 * - Background: #EFF0F0 com dot pattern #5C5CFF
 * - Avatars: Solid #5C5CFF com border
 * - Form: Glassmorphism intenso (backdrop-blur-xl)
 * - Toast: Card branco com border azul e shadow
 * - CTA: #5C5CFF (Primary Blue)
 *
 * Anti-AI Checklist:
 * [x] Dot pattern no background
 * [x] Avatar stack sobreposto
 * [x] Shadows coloridas
 * [x] Toast animado com slide-in
 * [x] Form com glassmorphism
 * [x] Hover states em inputs e botao
 * [x] Contador animado
 */

const FAKE_USERS = [
  { name: 'João M.', city: 'São Paulo' },
  { name: 'Maria S.', city: 'Rio de Janeiro' },
  { name: 'Pedro L.', city: 'Belo Horizonte' },
  { name: 'Ana C.', city: 'Curitiba' },
  { name: 'Carlos R.', city: 'Porto Alegre' },
  { name: 'Fernanda B.', city: 'Brasília' },
  { name: 'Ricardo T.', city: 'Salvador' },
  { name: 'Juliana P.', city: 'Fortaleza' },
  { name: 'Lucas A.', city: 'Campinas' },
  { name: 'Patrícia M.', city: 'Recife' },
];

export default function HeroSocialProof() {
  const [showToast, setShowToast] = useState(false);
  const [currentUser, setCurrentUser] = useState(FAKE_USERS[0]);
  const [counter, setCounter] = useState(547);

  // Memoized function to show toast
  const showNewUserToast = useCallback(() => {
    const randomUser = FAKE_USERS[Math.floor(Math.random() * FAKE_USERS.length)];
    setCurrentUser(randomUser);
    setShowToast(true);
    setCounter((prev) => prev + 1);

    // Hide toast after 4 seconds
    setTimeout(() => setShowToast(false), 4000);
  }, []);

  useEffect(() => {
    // Show initial toast after 3 seconds
    const initialTimeout = setTimeout(() => {
      showNewUserToast();
    }, 3000);

    // Show toast every 10 seconds
    const interval = setInterval(() => {
      showNewUserToast();
    }, 10000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [showNewUserToast]);

  return (
    <section
      className="bg-[#EFF0F0] min-h-screen relative overflow-hidden"
      aria-labelledby="hero-social-proof-heading"
    >
      {/* Dot Pattern Background */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `radial-gradient(#5C5CFF 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Subtle glow */}
      <div
        className="
          absolute
          top-1/3 left-1/2
          -translate-x-1/2
          w-[600px] h-[600px]
          bg-[#5C5CFF]/5
          rounded-full
          blur-[100px]
        "
      />

      {/* Header */}
      <header className="relative z-20 max-w-7xl mx-auto px-6 py-6 flex items-center justify-center">
        <div className="flex items-center gap-2">
          <img src="/logo-nexus.png" alt="Nexus Leilões" className="h-10" />
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-8 lg:pt-12 pb-24">

        {/* Avatar Stack + Counter */}
        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center">
            {/* Avatars */}
            <div className="flex -space-x-3" role="img" aria-label="Avatares de investidores na lista de espera">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="
                    w-11 h-11
                    rounded-full
                    bg-[#5C5CFF]
                    border-3 border-[#EFF0F0]
                    flex items-center justify-center
                    shadow-[0_4px_12px_-3px_rgba(92,92,255,0.4)]
                  "
                  style={{ borderWidth: '3px' }}
                  aria-hidden="true"
                >
                  <span className="text-white text-xs font-bold">
                    {String.fromCharCode(64 + i)}
                  </span>
                </div>
              ))}
            </div>

            {/* Counter Badge */}
            <div className="ml-4 px-5 py-2.5 bg-[#5C5CFF]/10 rounded-full border border-[#5C5CFF]/15">
              <span
                key={counter}
                className="font-bold text-[#5C5CFF] text-lg animate-count"
              >
                +{counter}
              </span>
              <span className="text-sm text-[#2B3259]/60 ml-2">
                investidores já na lista
              </span>
            </div>
          </div>
        </div>

        {/* Headline */}
        <div className="text-center mb-6">
          <h1
            id="hero-social-proof-heading"
            className="
              text-[2rem]
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              font-black
              tracking-[-0.03em]
              leading-[0.95]
              text-[#2B3259]
            "
          >
            Junte-se a{' '}
            <span className="text-[#5C5CFF]">500+</span> Investidores
            <br />
            Que Já Simplificaram Seus Leilões
          </h1>
        </div>

        {/* Subheadline */}
        <p className="text-center text-lg md:text-xl text-[#2B3259]/60 mb-10 max-w-2xl mx-auto leading-relaxed">
          Seja um dos primeiros a acessar o Hub mais completo de leilão imobiliário do Brasil.
          Benefícios exclusivos para quem entrar antes do lançamento.
        </p>

        {/* Inline Form - Glassmorphism Card */}
        <div
          className="
            bg-white/70
            backdrop-blur-xl
            rounded-3xl
            p-6 md:p-8
            border border-white/60
            shadow-[0_25px_60px_-15px_rgba(92,92,255,0.2)]
            max-w-3xl
            mx-auto
          "
        >
          <form className="space-y-6" aria-label="Formulário de inscrição na lista de espera">
            {/* Form Fields - 3 columns on desktop */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Nome */}
              <div>
                <label htmlFor="waitlist-name" className="block text-sm font-semibold text-[#2B3259] mb-2">
                  Seu nome
                </label>
                <input
                  id="waitlist-name"
                  name="name"
                  type="text"
                  placeholder="Como podemos te chamar?"
                  autoComplete="name"
                  required
                  className="
                    w-full
                    px-4 py-3.5
                    rounded-xl
                    bg-white
                    border border-[#2B3259]/10
                    text-[#2B3259]
                    placeholder-[#2B3259]/40
                    text-sm
                    transition-all
                    duration-200
                    focus:outline-none
                    focus:border-[#5C5CFF]
                    focus:ring-4
                    focus:ring-[#5C5CFF]/20
                    hover:border-[#2B3259]/20
                  "
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="waitlist-email" className="block text-sm font-semibold text-[#2B3259] mb-2">
                  Seu melhor email
                </label>
                <input
                  id="waitlist-email"
                  name="email"
                  type="email"
                  placeholder="email@exemplo.com"
                  autoComplete="email"
                  required
                  className="
                    w-full
                    px-4 py-3.5
                    rounded-xl
                    bg-white
                    border border-[#2B3259]/10
                    text-[#2B3259]
                    placeholder-[#2B3259]/40
                    text-sm
                    transition-all
                    duration-200
                    focus:outline-none
                    focus:border-[#5C5CFF]
                    focus:ring-4
                    focus:ring-[#5C5CFF]/20
                    hover:border-[#2B3259]/20
                  "
                />
              </div>

              {/* WhatsApp */}
              <div>
                <label htmlFor="waitlist-phone" className="block text-sm font-semibold text-[#2B3259] mb-2">
                  WhatsApp com DDD
                </label>
                <input
                  id="waitlist-phone"
                  name="phone"
                  type="tel"
                  placeholder="(11) 99999-9999"
                  autoComplete="tel"
                  inputMode="tel"
                  className="
                    w-full
                    px-4 py-3.5
                    rounded-xl
                    bg-white
                    border border-[#2B3259]/10
                    text-[#2B3259]
                    placeholder-[#2B3259]/40
                    text-sm
                    transition-all
                    duration-200
                    focus:outline-none
                    focus:border-[#5C5CFF]
                    focus:ring-4
                    focus:ring-[#5C5CFF]/20
                    hover:border-[#2B3259]/20
                  "
                />
              </div>
            </div>

            {/* Profile Selector */}
            <fieldset>
              <legend className="block text-sm font-semibold text-[#2B3259] mb-3">
                Qual seu perfil?
              </legend>
              <div className="flex flex-wrap gap-4" role="radiogroup" aria-label="Selecione seu perfil">
                <label htmlFor="profile-investidor" className="flex items-center gap-2.5 cursor-pointer group">
                  <input
                    id="profile-investidor"
                    type="radio"
                    name="profile"
                    value="investidor"
                    defaultChecked
                    className="
                      w-6 h-6
                      text-[#5C5CFF]
                      border-2 border-[#2B3259]/20
                      focus:ring-[#5C5CFF]
                      focus:ring-2
                      focus:ring-offset-2
                      cursor-pointer
                    "
                  />
                  <span className="text-[#2B3259] font-medium group-hover:text-[#5C5CFF] transition-colors">
                    Investidor
                  </span>
                </label>
                <label htmlFor="profile-assessor" className="flex items-center gap-2.5 cursor-pointer group">
                  <input
                    id="profile-assessor"
                    type="radio"
                    name="profile"
                    value="assessor"
                    className="
                      w-6 h-6
                      text-[#5C5CFF]
                      border-2 border-[#2B3259]/20
                      focus:ring-[#5C5CFF]
                      focus:ring-2
                      focus:ring-offset-2
                      cursor-pointer
                    "
                  />
                  <span className="text-[#2B3259] font-medium group-hover:text-[#5C5CFF] transition-colors">
                    Assessor
                  </span>
                </label>
              </div>
            </fieldset>

            {/* CTA Button - Full width */}
            <button
              type="submit"
              className="
                w-full
                bg-[#5C5CFF]
                text-white
                font-bold
                text-lg
                px-8 py-4
                rounded-full
                shadow-[0_15px_40px_-10px_rgba(92,92,255,0.4)]
                transition-all
                duration-300
                ease-[cubic-bezier(0.34,1.56,0.64,1)]
                hover:-translate-y-1
                hover:scale-[1.01]
                hover:shadow-[0_20px_50px_-10px_rgba(92,92,255,0.5)]
                active:translate-y-0
                active:scale-[0.99]
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-offset-2
                focus-visible:outline-[#2B3259]
                cursor-pointer
              "
            >
              Entrar na Lista VIP
            </button>

            {/* Security Microcopy - Improved contrast (70% instead of 50%) */}
            <p className="text-center text-sm text-[#2B3259]/70 flex items-center justify-center gap-2">
              <span className="text-[#5C5CFF]" aria-hidden="true">🔒</span>
              Seus dados estão seguros. Não enviamos spam.
            </p>
          </form>
        </div>
      </div>

      {/* Toast Notification - Animated slide-in */}
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className={`
          fixed
          bottom-6 right-6
          z-50
          transition-all
          duration-500
          ease-[cubic-bezier(0.34,1.56,0.64,1)]
          ${showToast
            ? 'translate-x-0 opacity-100'
            : 'translate-x-[120%] opacity-0 pointer-events-none'
          }
        `}
      >
        <div
          className="
            flex items-center gap-3
            px-5 py-4
            bg-white
            rounded-2xl
            shadow-[0_15px_50px_-10px_rgba(92,92,255,0.25)]
            border border-[#5C5CFF]/15
          "
        >
          <div
            className="
              w-10 h-10
              bg-green-500
              rounded-full
              flex items-center justify-center
              shadow-[0_4px_12px_-3px_rgba(34,197,94,0.4)]
            "
            aria-hidden="true"
          >
            <span className="text-white text-lg">&#10003;</span>
          </div>
          <div>
            <p className="text-sm font-semibold text-[#2B3259]">
              {currentUser.name} de {currentUser.city}
            </p>
            <p className="text-xs text-[#2B3259]/70">
              acabou de entrar na lista
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
