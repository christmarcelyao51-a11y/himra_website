'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  ['HOME', '/'],
  ['DISCOGRAPHIE', '/discographie'],
  ['CONCERTS', '/concerts'],
  ['CERTIFICATIONS', '/certifications'],
  ['STATISTIQUES', '/statistiques'],
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Shrink nav if scrolled past 30px
      if (currentScrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > 120) {
        if (currentScrollY > lastScrollY) {
          setIsHidden(true); // scrolling down
        } else {
          setIsHidden(false); // scrolling up
        }
      } else {
        setIsHidden(false); // near the top
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full border-b transition-all duration-500 ease-in-out ${
        isScrolled
          ? 'border-zinc-900 bg-black/95 py-0 shadow-lg shadow-black/30'
          : 'border-zinc-800/40 bg-black/30 py-2'
      } ${
        isHidden ? '-translate-y-full' : 'translate-y-0'
      } backdrop-blur-md`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between transition-all duration-500">
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="font-sans text-2xl font-black uppercase tracking-tighter text-white transition duration-300 group-hover:opacity-80">
              HIMRA <span className="font-mono text-lg font-light text-zinc-500 transition duration-300 group-hover:text-zinc-400">[1X]</span>
            </span>
          </Link>
          
          <div className="hidden items-center space-x-8 text-xs font-black uppercase tracking-[0.2em] text-zinc-400 md:flex">
            {navLinks.map(([label, href]) => {
              const isActive = pathname === href || (href !== '/' && pathname?.startsWith(href));
              return (
                <Link
                  key={href}
                  href={href}
                  className={`link-underline transition-colors duration-300 py-1 ${
                    isActive ? 'text-white font-black' : 'hover:text-white text-zinc-400'
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          <div>
            <Link
              href="/concerts"
              className="inline-block border border-white bg-white px-6 py-3 text-xs font-black uppercase tracking-widest text-black transition-all duration-300 hover:bg-black hover:text-white hover:border-white"
            >
              TICKETS
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

