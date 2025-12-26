import { useEffect, useRef, useState, RefObject } from 'react';

interface UseIntersectionObserverOptions {
  /** Threshold de visibilidade (0-1) */
  threshold?: number | number[];
  /** Elemento root para o observer */
  root?: Element | null;
  /** Margem ao redor do root para pre-carregar */
  rootMargin?: string;
  /** Se true, congela o estado após ficar visível uma vez */
  freezeOnceVisible?: boolean;
}

interface UseIntersectionObserverReturn<T extends HTMLElement> {
  ref: RefObject<T | null>;
  isVisible: boolean;
  entry: IntersectionObserverEntry | null;
}

export function useIntersectionObserver<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.1,
  root = null,
  rootMargin = '100px',
  freezeOnceVisible = false,
}: UseIntersectionObserverOptions = {}): UseIntersectionObserverReturn<T> {
  const ref = useRef<T | null>(null);
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const frozen = freezeOnceVisible && isVisible;

  useEffect(() => {
    const node = ref.current;

    // Fallback para browsers sem suporte
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    if (!node || frozen) return;

    const observer = new IntersectionObserver(
      ([observerEntry]) => {
        setEntry(observerEntry);
        setIsVisible(observerEntry.isIntersecting);
      },
      { threshold, root, rootMargin }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold, root, rootMargin, frozen]);

  return { ref, isVisible, entry };
}
