'use client';

import React, { useEffect, useRef, useState } from 'react';

interface TextRevealProps {
  text: string;
  type?: 'words' | 'chars';
  delay?: number; // base delay in ms
  stagger?: number; // delay between elements in ms
  className?: string;
}

export default function TextReveal({
  text,
  type = 'words',
  delay = 0,
  stagger = 40,
  className = '',
}: TextRevealProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold: 0.1 }
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
  }, []);

  const items = type === 'words' ? text.split(' ') : text.split('');

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {items.map((item, idx) => (
        <span
          key={idx}
          className="inline-block overflow-hidden"
          style={{ marginRight: type === 'words' ? '0.25em' : '0' }}
        >
          <span
            className="inline-block transition-transform duration-[1200ms]"
            style={{
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
              transform: isVisible ? 'translateY(0)' : 'translateY(105%)',
              transitionDelay: `${delay + idx * stagger}ms`,
            }}
          >
            {item === ' ' ? '\u00A0' : item}
          </span>
        </span>
      ))}
    </span>
  );
}
