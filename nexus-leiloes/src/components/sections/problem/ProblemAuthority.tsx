'use client';

import { useRef, useState, useEffect, ComponentType, SVGProps } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import Image from 'next/image';
import { useLeadModal } from '@/contexts/LeadModalContext';
import { FadeInWhenVisible, StaggerContainer, StaggerItem } from '@/components/animations';
import {
  MicrosoftWordIcon,
  MicrosoftExcelIcon,
  WhatsAppIcon,
  GoogleCalendarIcon,
  NotionIcon,
  GlobeIcon,
} from '@/components/icons/BrandIcons';

/**
 * PROBLEM SECTION V4: GRAVITATIONAL CONVERGENCE
 *
 * Frame Cognitivo: "Por que ferramentas fragmentadas NUNCA vão funcionar"
 *
 * Vieses Aplicados:
 * - Authority: Posicionamento de expert com argumento lógico
 * - Cognitive Fluency: Argumento estruturado, fácil de seguir
 * - Framing Effect: Frame o problema como estrutural
 *
 * Design:
 * - Animação scroll-triggered de convergência gravitacional
 * - Ícones de marcas reais com cores oficiais
 * - Disposição hexagonal otimizada
 */

interface Tool {
  id: number;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  color: string;
  initialX: number;
  initialY: number;
  rotation: number;
}

// Disposição bem dispersa com marcas reais
// Valores base para desktop, serão escalados para mobile
const tools: Tool[] = [
  // Topo
  { id: 1, Icon: GoogleCalendarIcon, label: 'Agenda', color: '#4285F4', initialX: 20, initialY: -200, rotation: -8 },
  // Direita-topo
  { id: 2, Icon: WhatsAppIcon, label: 'WhatsApp', color: '#25D366', initialX: 200, initialY: -80, rotation: 12 },
  // Direita-baixo
  { id: 3, Icon: NotionIcon, label: 'Notion', color: '#000000', initialX: 180, initialY: 100, rotation: 15 },
  // Baixo
  { id: 4, Icon: GlobeIcon, label: 'Sites', color: '#5C5CFF', initialX: -30, initialY: 190, rotation: -5 },
  // Esquerda-baixo
  { id: 5, Icon: MicrosoftWordIcon, label: 'Word', color: '#2B579A', initialX: -190, initialY: 90, rotation: -12 },
  // Esquerda-topo
  { id: 6, Icon: MicrosoftExcelIcon, label: 'Excel', color: '#217346', initialX: -180, initialY: -90, rotation: -10 },
];

// Hook para detectar se é mobile
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
}

function ToolCard({
  tool,
  progress,
  isMobile,
}: {
  tool: Tool;
  progress: MotionValue<number>;
  isMobile: boolean;
}) {
  // Escala de posição: 0.55 para mobile, 1 para desktop
  const posScale = isMobile ? 0.55 : 1;
  const scaledX = tool.initialX * posScale;
  const scaledY = tool.initialY * posScale;

  // MAGNETIC SNAP: Desaceleração dramática nos últimos 10%
  // 0-60%: movimento normal | 60-90%: desacelera | 90-95%: quase para | 95-100%: SNAP magnético
  const x = useTransform(
    progress,
    [0, 0.2, 0.4, 0.6, 0.75, 0.85, 0.92, 0.96, 1.0],
    [
      scaledX,
      scaledX * 0.85,
      scaledX * 0.65,
      scaledX * 0.4,
      scaledX * 0.2,
      scaledX * 0.08,
      scaledX * 0.03,
      scaledX * 0.01,
      0
    ]
  );
  const y = useTransform(
    progress,
    [0, 0.2, 0.4, 0.6, 0.75, 0.85, 0.92, 0.96, 1.0],
    [
      scaledY,
      scaledY * 0.85,
      scaledY * 0.65,
      scaledY * 0.4,
      scaledY * 0.2,
      scaledY * 0.08,
      scaledY * 0.03,
      scaledY * 0.01,
      0
    ]
  );
  const rotate = useTransform(progress, [0, 0.5, 0.8, 1.0], [tool.rotation, tool.rotation * 0.4, tool.rotation * 0.1, 0]);

  // Ícones encolhem e desaparecem no SNAP final
  const scale = useTransform(progress, [0, 0.7, 0.9, 0.96, 1.0], [1, 1, 0.9, 0.6, 0]);
  const opacity = useTransform(progress, [0, 0.85, 0.95, 1.0], [1, 1, 0.7, 0]);

  const { Icon, label, color } = tool;

  return (
    <motion.div
      style={{ x, y, rotate, scale, opacity }}
      className={`absolute left-1/2 top-1/2 ${isMobile ? '-ml-7 -mt-7' : '-ml-9 -mt-9'}`}
    >
      <div className="relative group">
        {/* Glow effect on hover */}
        <div
          className="absolute inset-0 rounded-xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300"
          style={{ backgroundColor: color }}
        />
        {/* Card - menor no mobile */}
        <div className={`relative ${isMobile ? 'w-14 h-14' : 'w-[72px] h-[72px]'} bg-white/90 backdrop-blur-xl rounded-xl border border-[#2B3259]/10 shadow-[0_10px_30px_-8px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center gap-1 hover:bg-white hover:shadow-[0_15px_40px_-8px_rgba(0,0,0,0.2)] transition-all duration-300`}>
          <Icon className={isMobile ? 'w-5 h-5' : 'w-6 h-6'} style={{ color }} />
          <span className={`${isMobile ? 'text-[7px]' : 'text-[9px]'} font-medium text-[#2B3259]/70`}>{label}</span>
        </div>
      </div>
    </motion.div>
  );
}

function GravitationalConvergenceAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.6', 'center center'],
  });

  // Transform scroll progress to animation progress
  const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Hub animations - cresce e faz BOUNCE no momento do snap
  const hubScale = useTransform(
    progress,
    [0, 0.5, 0.85, 0.95, 0.98, 1.0],
    [0.6, 0.8, 0.9, 1.15, 0.95, 1.0] // BOUNCE: 1.15 → 0.95 → 1.0
  );
  const hubOpacity = useTransform(progress, [0, 0.4, 0.9], [0.3, 0.6, 1]);

  // Background glow - intensifica no snap
  const bgGlowScale = useTransform(progress, [0.5, 0.95, 1.0], [1, 1.2, 1.8]);
  const bgGlowOpacity = useTransform(progress, [0.5, 0.9, 1.0], [0.1, 0.3, 0.6]);

  // FLASH de luz no momento do snap (92-100%) - MAIS INTENSO E VISÍVEL
  const flashOpacity = useTransform(progress, [0.88, 0.94, 0.98, 1.0], [0, 0.9, 1, 0]);
  const flashScale = useTransform(progress, [0.88, 1.0], [0.3, 4]);

  // RIPPLES concêntricos (aparecem no snap) - MAIS VISÍVEIS
  const ripple1Scale = useTransform(progress, [0.90, 1.0], [0.5, 4]);
  const ripple1Opacity = useTransform(progress, [0.90, 0.95, 1.0], [0, 0.8, 0]);
  const ripple2Scale = useTransform(progress, [0.93, 1.0], [0.5, 3.5]);
  const ripple2Opacity = useTransform(progress, [0.93, 0.97, 1.0], [0, 0.6, 0]);
  const ripple3Scale = useTransform(progress, [0.96, 1.0], [0.5, 3]);
  const ripple3Opacity = useTransform(progress, [0.96, 0.99, 1.0], [0, 0.5, 0]);

  // Labels
  const fragmentedOpacity = useTransform(progress, [0, 0.3], [1, 0]);
  const unifiedOpacity = useTransform(progress, [0.85, 1.0], [0, 1]);
  const unifiedScale = useTransform(progress, [0.85, 0.95, 1.0], [0.8, 1.05, 1.0]);

  // Hub glow intensificado após snap
  const hubGlowIntensity = useTransform(progress, [0.9, 1.0], [0.3, 1]);

  return (
    <div ref={containerRef} className={`relative ${isMobile ? 'h-[500px]' : 'h-[650px]'}`}>
      {/* Container */}
      <div className="h-full flex items-center justify-center overflow-hidden">
        {/* Background glow - intensifica no snap */}
        <motion.div
          style={{ scale: bgGlowScale, opacity: bgGlowOpacity }}
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${isMobile ? 'w-[250px] h-[250px]' : 'w-[350px] h-[350px]'} bg-[#5C5CFF]/20 rounded-full blur-3xl pointer-events-none`}
        />

        {/* Labels */}
        <motion.div
          style={{ opacity: fragmentedOpacity }}
          className="absolute top-4 left-1/2 -translate-x-1/2 text-center z-10"
        >
          <span className={`inline-block ${isMobile ? 'px-3 py-1.5' : 'px-4 py-2'} bg-white/60 backdrop-blur-xl rounded-full border border-[#2B3259]/10`}>
            <span className={`${isMobile ? 'text-xs' : 'text-sm'} font-bold text-[#2B3259]/50 line-through decoration-2 decoration-[#5C5CFF]/40`}>
              Ferramentas dispersas
            </span>
          </span>
        </motion.div>

        <motion.div
          style={{ opacity: unifiedOpacity, scale: unifiedScale }}
          className="absolute top-4 left-1/2 -translate-x-1/2 text-center z-10"
        >
          <span className={`inline-block ${isMobile ? 'px-4 py-2' : 'px-5 py-2.5'} bg-[#5C5CFF] rounded-full shadow-[0_15px_40px_-8px_rgba(92,92,255,0.6)]`}>
            <span className={`${isMobile ? 'text-xs' : 'text-sm'} font-bold text-white`}>Controle total.</span>
          </span>
        </motion.div>

        {/* Tool cards container */}
        <div className={`relative ${isMobile ? 'w-[300px] h-[300px]' : 'w-[500px] h-[500px]'}`}>
          {tools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} progress={progress} isMobile={isMobile} />
          ))}

          {/* === FLASH DE LUZ no momento do SNAP - MAIOR E MAIS INTENSO === */}
          <motion.div
            style={{ opacity: flashOpacity, scale: flashScale }}
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${isMobile ? 'w-28 h-28' : 'w-40 h-40'} bg-white rounded-full blur-3xl pointer-events-none z-30`}
          />
          {/* Segunda camada de flash com cor azul */}
          <motion.div
            style={{ opacity: flashOpacity, scale: flashScale }}
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${isMobile ? 'w-20 h-20' : 'w-32 h-32'} bg-[#5C5CFF]/40 rounded-full blur-2xl pointer-events-none z-29`}
          />

          {/* === RIPPLES CONCÊNTRICOS - MAIS GROSSOS E VISÍVEIS === */}
          <motion.div
            style={{ scale: ripple1Scale, opacity: ripple1Opacity }}
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${isMobile ? 'w-20 h-20' : 'w-28 h-28'} border-[3px] border-[#5C5CFF] rounded-full pointer-events-none z-25`}
          />
          <motion.div
            style={{ scale: ripple2Scale, opacity: ripple2Opacity }}
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${isMobile ? 'w-20 h-20' : 'w-28 h-28'} border-[3px] border-[#5C5CFF]/80 rounded-full pointer-events-none z-25`}
          />
          <motion.div
            style={{ scale: ripple3Scale, opacity: ripple3Opacity }}
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${isMobile ? 'w-20 h-20' : 'w-28 h-28'} border-2 border-[#5C5CFF]/60 rounded-full pointer-events-none z-25`}
          />

          {/* Central Hub - MAIOR para destaque da marca */}
          <motion.div
            style={{ scale: hubScale, opacity: hubOpacity }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
          >
            {/* Outer glow ring - intensifica após snap */}
            <motion.div
              style={{ opacity: hubGlowIntensity }}
              className={`absolute inset-0 ${isMobile ? '-m-6' : '-m-10'} bg-[#5C5CFF]/30 rounded-full blur-2xl`}
            />

            {/* Pulsing glow permanente */}
            <motion.div
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className={`absolute inset-0 ${isMobile ? '-m-4' : '-m-6'} bg-[#5C5CFF]/30 rounded-full blur-xl`}
            />

            {/* Hub container - Responsivo */}
            <div className={`relative ${isMobile ? 'w-20 h-20' : 'w-28 h-28'} bg-white rounded-3xl shadow-[0_30px_80px_-15px_rgba(92,92,255,0.6)] border-2 border-[#5C5CFF]/30 flex items-center justify-center`}>
              {/* Pulsing ring */}
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 0, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeOut',
                }}
                className="absolute inset-0 border-2 border-[#5C5CFF] rounded-3xl"
              />

              {/* Inner glow */}
              <div className="absolute inset-2 bg-gradient-to-br from-[#5C5CFF]/15 to-transparent rounded-2xl" />

              {/* Logo - Responsivo */}
              <div className={`relative ${isMobile ? 'w-10 h-10' : 'w-14 h-14'}`}>
                <Image
                  src="/icon-nexus.png"
                  alt="Nexus Hub"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Label below hub */}
            <motion.div
              style={{ opacity: unifiedOpacity }}
              className={`absolute ${isMobile ? '-bottom-10' : '-bottom-12'} left-1/2 -translate-x-1/2 whitespace-nowrap text-center`}
            >
              <span className={`${isMobile ? 'text-sm' : 'text-base'} font-bold text-[#5C5CFF] tracking-wide`}>NEXUS HUB</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function ProblemAuthority() {
  const { openModal } = useLeadModal();

  return (
    <section
      className="bg-[#EFF0F0] relative overflow-hidden"
      aria-labelledby="problem-authority-heading"
    >
      {/* Subtle center glow */}
      <div
        className="
          absolute
          top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          w-[400px] md:w-[800px] lg:w-[1000px] h-[400px] md:h-[800px] lg:h-[1000px]
          bg-[#5C5CFF]/[0.03]
          rounded-full
          blur-[80px] md:blur-[120px] lg:blur-[150px]
          pointer-events-none
        "
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Massive Typography Headline */}
        <FadeInWhenVisible>
          <div className="text-center pt-16 lg:pt-20 pb-8 px-6">
            <h2
              id="problem-authority-heading"
              className="
                text-3xl
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
                xl:text-7xl
                font-black
                tracking-[-0.04em]
                leading-[0.95]
                text-[#2B3259]
              "
            >
              O problema não é você.
              <br />
              É usar{' '}
              <span className="relative inline-block text-[#5C5CFF]">
                {/* Glow behind text */}
                <span
                  className="
                    absolute inset-0
                    bg-[#5C5CFF]/10
                    blur-xl
                    rounded-full
                    scale-150
                  "
                  aria-hidden="true"
                />
                <span className="relative z-10">VÁRIAS</span>
              </span>
              {' '}ferramentas
              <br />
              <span className="text-[#2B3259]/40">para fazer o trabalho de 1.</span>
            </h2>
          </div>
        </FadeInWhenVisible>

        {/* Gravitational Convergence Animation - Desktop & Mobile */}
        <GravitationalConvergenceAnimation />

        {/* Logical Argument Points */}
        <div className="px-6 pt-8 md:pt-12">
          <StaggerContainer staggerDelay={0.1} delayChildren={0.1} className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <StaggerItem className="h-full">
                <div className="h-full p-5 md:p-6 bg-white/60 rounded-2xl border border-[#2B3259]/5">
                  <h3 className="font-bold text-base md:text-lg text-[#2B3259] mb-1.5 md:mb-2">
                    Sites de leiloeiros
                  </h3>
                  <p className="text-sm text-[#2B3259]/60">
                    Três horas clicando em sites diferentes. Zero imóveis salvos. Seu tempo vale mais que ficar caçando leilão em abas infinitas.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem className="h-full">
                <div className="h-full p-5 md:p-6 bg-white/60 rounded-2xl border border-[#2B3259]/5">
                  <h3 className="font-bold text-base md:text-lg text-[#2B3259] mb-1.5 md:mb-2">
                    Excel e Notion
                  </h3>
                  <p className="text-sm text-[#2B3259]/60">
                    Você é investidor, não digitador. Mas passa mais tempo preenchendo célula do que analisando negócio.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem className="h-full">
                <div className="h-full p-5 md:p-6 bg-white/60 rounded-2xl border border-[#2B3259]/5">
                  <h3 className="font-bold text-base md:text-lg text-[#2B3259] mb-1.5 md:mb-2">
                    Calculadoras simples
                  </h3>
                  <p className="text-sm text-[#2B3259]/60">
                    Uma calculadora, um cenário, uma ilusão de controle. E se o ocupante não sair? E se a reforma custar o dobro?
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem className="h-full">
                <div className="h-full p-5 md:p-6 bg-white/60 rounded-2xl border border-[#2B3259]/5">
                  <h3 className="font-bold text-base md:text-lg text-[#2B3259] mb-1.5 md:mb-2">
                    Copiar dados manualmente
                  </h3>
                  <p className="text-sm text-[#2B3259]/60">
                    Você copia. Depois confere. Depois corrige. Depois confere de novo. Trabalho triplo que automação resolve em zero cliques.
                  </p>
                </div>
              </StaggerItem>
            </div>
          </StaggerContainer>
        </div>

        {/* Logical Conclusion */}
        <FadeInWhenVisible delay={0.2}>
          <div className="mt-8 md:mt-12 text-center max-w-3xl mx-auto px-6">
            <p className="text-lg md:text-xl lg:text-2xl text-[#2B3259]/60 leading-relaxed">
              Você trabalha demais para{' '}
              <span className="font-semibold text-[#2B3259]">organizar</span>{' '}
              e de menos para{' '}
              <span className="font-semibold text-[#2B3259]">decidir</span>.
              <br />
              A energia vai toda para o processo, não para o resultado.
            </p>
          </div>
        </FadeInWhenVisible>

        {/* Commanding CTA */}
        <FadeInWhenVisible delay={0.3}>
          <div className="mt-10 md:mt-16 pb-16 lg:pb-20 text-center px-6">
            <button
              type="button"
              onClick={openModal}
              className="
                bg-[#5C5CFF]
                text-white
                font-bold
                text-lg md:text-xl
                px-10 md:px-16 py-5 md:py-6
                rounded-full
                shadow-[0_20px_60px_-15px_rgba(92,92,255,0.4)]
                hover:-translate-y-2
                hover:shadow-[0_30px_80px_-15px_rgba(92,92,255,0.5)]
                transition-all duration-300
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-offset-2
                focus-visible:outline-[#2B3259]
                cursor-pointer
              "
            >
              Reservar meu lugar de fundador
            </button>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
