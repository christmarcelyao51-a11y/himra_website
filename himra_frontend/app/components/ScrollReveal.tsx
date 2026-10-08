'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'fade' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'zoom-in';
  duration?: number; // duration in ms
  delay?: number; // delay in ms
  threshold?: number;
  className?: string;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  animation = 'slide-up',
  duration = 800,
  delay = 0,
  threshold = 0.1,
  className = '',
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once]);

  const getAnimationStyles = (): React.CSSProperties => {
    const base: React.CSSProperties = {
      transitionProperty: 'opacity, transform',
      transitionDuration: `${duration}ms`,
      transitionDelay: `${delay}ms`,
      transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', // Custom cubic-bezier for a high-end feel
    };

    const initialStates = {
      'fade': { opacity: 0 },
      'slide-up': { opacity: 0, transform: 'translateY(30px)' },
      'slide-down': { opacity: 0, transform: 'translateY(-30px)' },
      'slide-left': { opacity: 0, transform: 'translateX(30px)' },
      'slide-right': { opacity: 0, transform: 'translateX(-30px)' },
      'zoom-in': { opacity: 0, transform: 'scale(0.95)' },
    };

    const finalStates = {
      'fade': { opacity: 1 },
      'slide-up': { opacity: 1, transform: 'translateY(0)' },
      'slide-down': { opacity: 1, transform: 'translateY(0)' },
      'slide-left': { opacity: 1, transform: 'translateX(0)' },
      'slide-right': { opacity: 1, transform: 'translateX(0)' },
      'zoom-in': { opacity: 1, transform: 'scale(1)' },
    };

    return {
      ...base,
      ...(isVisible ? finalStates[animation] : initialStates[animation]),
    };
  };

  return (
    <div ref={ref} style={getAnimationStyles()} className={className}>
      {children}
    </div>
  );
}
