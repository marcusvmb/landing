'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface LazyVideoProps {
  /** URL do vídeo */
  src: string;
  /** URL da imagem poster (placeholder enquanto carrega) */
  poster?: string;
  /** Classes CSS adicionais */
  className?: string;
  /** Threshold de visibilidade para iniciar o play (0-1) */
  playThreshold?: number;
  /** Se deve pausar quando sair da viewport */
  pauseOnExit?: boolean;
  /** Margem para pré-carregar antes de entrar na viewport */
  rootMargin?: string;
}

export function LazyVideo({
  src,
  poster,
  className = '',
  playThreshold = 0.3,
  pauseOnExit = true,
  rootMargin = '200px',
}: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Observer para detectar quando deve carregar o vídeo
  const { ref: containerRef, isVisible } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
    rootMargin,
    freezeOnceVisible: true, // Uma vez que começou a carregar, não para
  });

  // Observer separado para play/pause (threshold maior)
  const { ref: playRef, isVisible: isVisibleForPlay } = useIntersectionObserver<HTMLDivElement>({
    threshold: playThreshold,
    rootMargin: '0px',
    freezeOnceVisible: false,
  });

  // Detectar preferência de reduced motion
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Carrega o vídeo quando entra na zona de pré-carregamento
  useEffect(() => {
    if (isVisible && !shouldLoad && !prefersReducedMotion) {
      setShouldLoad(true);
    }
  }, [isVisible, shouldLoad, prefersReducedMotion]);

  // Força o carregamento do vídeo quando shouldLoad muda
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoad) return;

    // Força o início do carregamento
    video.load();
  }, [shouldLoad]);

  // Play/Pause baseado na visibilidade
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isLoaded || prefersReducedMotion) return;

    if (isVisibleForPlay) {
      video.play().catch(() => {
        // Autoplay bloqueado - esperado em alguns browsers
      });
    } else if (pauseOnExit) {
      video.pause();
    }
  }, [isVisibleForPlay, isLoaded, pauseOnExit, prefersReducedMotion]);

  // Usar onLoadedData que é mais confiável que onCanPlay
  const handleLoadedData = useCallback(() => {
    setIsLoaded(true);
  }, []);

  // Combina as refs para o container
  const setRefs = useCallback(
    (node: HTMLDivElement | null) => {
      (containerRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
      (playRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
    },
    [containerRef, playRef]
  );

  return (
    <div ref={setRefs} className={`relative overflow-hidden ${className}`}>
      {/* Poster/Placeholder - mostrado enquanto vídeo não carrega */}
      {poster && (
        <div
          className={`
            absolute inset-0 z-10
            bg-cover bg-center
            transition-opacity duration-700 ease-out
            ${isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}
          `}
          style={{ backgroundImage: `url(${poster})` }}
          aria-hidden="true"
        />
      )}

      {/* Skeleton se não tiver poster */}
      {!poster && !isLoaded && (
        <div
          className="absolute inset-0 z-10 bg-gradient-to-br from-[#5C5CFF]/5 to-[#5C5CFF]/10 animate-pulse"
          aria-hidden="true"
        />
      )}

      {/* Video element - só renderiza quando shouldLoad */}
      {shouldLoad && !prefersReducedMotion && (
        <video
          ref={videoRef}
          className={`
            w-full h-full object-cover
            transition-opacity duration-700 ease-out
            ${isLoaded ? 'opacity-100' : 'opacity-0'}
          `}
          poster={poster}
          preload="auto"
          muted
          loop
          playsInline
          onLoadedData={handleLoadedData}
          aria-hidden="true"
        >
          <source src={src} type={src.endsWith('.webm') ? 'video/webm' : 'video/mp4'} />
        </video>
      )}

      {/* Fallback para reduced motion - imagem estática */}
      {prefersReducedMotion && poster && (
        <img
          src={poster}
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
      )}

      {/* Loading indicator sutil */}
      {shouldLoad && !isLoaded && !prefersReducedMotion && (
        <div
          className="absolute inset-0 flex items-center justify-center z-20"
          aria-hidden="true"
        >
          <div className="w-10 h-10 rounded-full border-2 border-[#5C5CFF]/20 border-t-[#5C5CFF]/60 animate-spin" />
        </div>
      )}
    </div>
  );
}
