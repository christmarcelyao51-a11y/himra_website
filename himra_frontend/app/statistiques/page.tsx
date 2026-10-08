'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import TextReveal from '../components/TextReveal';
import CountUp from '../components/CountUp';

type Platform = 'all' | 'spotify' | 'youtube' | 'apple' | 'deezer';

// Streaming platform themes configurations
const PLATFORM_THEMES = {
  all: {
    color: '#ffffff',
    glowClass: 'shadow-white/10 border-zinc-800',
    accentText: 'text-white',
    gradientFrom: 'from-zinc-900',
    chartStroke: '#ffffff',
    gradientColor: '#ffffff'
  },
  spotify: {
    color: '#1DB954',
    glowClass: 'shadow-spotify/20 border-spotify/20 hover:border-spotify/50',
    accentText: 'text-spotify',
    gradientFrom: 'from-spotify/10',
    chartStroke: '#1DB954',
    gradientColor: '#1DB954'
  },
  youtube: {
    color: '#FF0000',
    glowClass: 'shadow-youtube/20 border-youtube/20 hover:border-youtube/50',
    accentText: 'text-youtube',
    gradientFrom: 'from-youtube/10',
    chartStroke: '#FF0000',
    gradientColor: '#FF0000'
  },
  apple: {
    color: '#FA243C',
    glowClass: 'shadow-apple/20 border-apple/20 hover:border-apple/50',
    accentText: 'text-apple',
    gradientFrom: 'from-apple/10',
    chartStroke: '#FA243C',
    gradientColor: '#FA243C'
  },
  deezer: {
    color: '#a238ff',
    glowClass: 'shadow-deezer/20 border-deezer/20 hover:border-deezer/50',
    accentText: 'text-deezer',
    gradientFrom: 'from-deezer/10',
    chartStroke: '#a238ff',
    gradientColor: '#a238ff'
  }
};

export default function Statistiques() {
  const [activePlatform, setActivePlatform] = useState<Platform>('all');
  const activeTheme = PLATFORM_THEMES[activePlatform];

  // Overview metrics
  const totalStreams = 133700000;
  const totalSubscribers = 1330000;

  // Platform specific summaries
  const platformStats = {
    spotify: {
      title: 'Spotify',
      metrics: [
        { label: 'Auditeurs mensuels', value: 654000, suffix: '' },
        { label: 'Streams cumulés', value: 48900000, suffix: '' },
        { label: 'Indice de popularité', value: 78, suffix: '%' }
      ]
    },
    youtube: {
      title: 'YouTube',
      metrics: [
        { label: 'Abonnés officiels', value: 482000, suffix: '' },
        { label: 'Vues totales', value: 72500000, suffix: '' },
        { label: 'Vidéos en ligne', value: 108, suffix: '' }
      ]
    },
    apple: {
      title: 'Apple Music',
      metrics: [
        { label: 'Part d\'audience', value: 32, suffix: '%' },
        { label: 'Top Classement Album', value: 1, suffix: 'er' },
        { label: 'Score d\'écoute', value: 84, suffix: '/100' }
      ]
    },
    deezer: {
      title: 'Deezer',
      metrics: [
        { label: 'Fans actifs', value: 194000, suffix: '' },
        { label: 'Streams cumulés', value: 12400000, suffix: '' }
      ]
    }
  };

  // SVG Chart data points mapping (6 months: Jan to Jun)
  // X values correspond to months. Y values are normalized to a 150px height chart container.
  const chartData = {
    all: [
      { month: 'Jan', value: 105000000, y: 130 },
      { month: 'Fév', value: 110000000, y: 115 },
      { month: 'Mar', value: 116000000, y: 95 },
      { month: 'Avr', value: 122000000, y: 70 },
      { month: 'Mai', value: 128000000, y: 45 },
      { month: 'Juin', value: 133700000, y: 10 }
    ],
    spotify: [
      { month: 'Jan', value: 500000, y: 120 },
      { month: 'Fév', value: 530000, y: 108 },
      { month: 'Mar', value: 580000, y: 80 },
      { month: 'Avr', value: 610000, y: 60 },
      { month: 'Mai', value: 630000, y: 45 },
      { month: 'Juin', value: 654000, y: 10 }
    ],
    youtube: [
      { month: 'Jan', value: 410000, y: 130 },
      { month: 'Fév', value: 425000, y: 115 },
      { month: 'Mar', value: 440000, y: 95 },
      { month: 'Avr', value: 455000, y: 72 },
      { month: 'Mai', value: 470000, y: 45 },
      { month: 'Juin', value: 482000, y: 10 }
    ],
    apple: [
      { month: 'Jan', value: 18, y: 120 },
      { month: 'Fév', value: 20, y: 110 },
      { month: 'Mar', value: 24, y: 90 },
      { month: 'Avr', value: 27, y: 75 },
      { month: 'Mai', value: 30, y: 40 },
      { month: 'Juin', value: 32, y: 10 }
    ],
    deezer: [
      { month: 'Jan', value: 155000, y: 130 },
      { month: 'Fév', value: 162000, y: 118 },
      { month: 'Mar', value: 171000, y: 95 },
      { month: 'Avr', value: 180000, y: 70 },
      { month: 'Mai', value: 188000, y: 40 },
      { month: 'Juin', value: 194000, y: 10 }
    ]
  };

  const activeChartPoints = chartData[activePlatform];

  // SVG path generation utility
  const generatePath = () => {
    let d = '';
    activeChartPoints.forEach((p, i) => {
      const x = 40 + i * 110;
      const y = p.y;
      if (i === 0) {
        d += `M ${x} ${y}`;
      } else {
        // Curve construction using cubic bezier coordinates for a very smooth visual wave
        const prevX = 40 + (i - 1) * 110;
        const prevY = activeChartPoints[i - 1].y;
        const cp1X = prevX + 55;
        const cp1Y = prevY;
        const cp2X = prevX + 55;
        const cp2Y = y;
        d += ` C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${x} ${y}`;
      }
    });
    return d;
  };

  const generateAreaPath = () => {
    const path = generatePath();
    const firstX = 40;
    const lastX = 40 + (activeChartPoints.length - 1) * 110;
    return `${path} L ${lastX} 160 L ${firstX} 160 Z`;
  };

  // Geographic breakdown data
  const locations = [
    { country: 'Côte d\'Ivoire', percentage: 42, color: 'bg-orange-500' },
    { country: 'France', percentage: 28, color: 'bg-blue-500' },
    { country: 'Sénégal', percentage: 15, color: 'bg-emerald-500' },
    { country: 'Cameroun', percentage: 9, color: 'bg-red-500' },
    { country: 'Autres pays', percentage: 6, color: 'bg-zinc-600' }
  ];

  // Top Tracks details per platform
  const topTracks = {
    all: [
      { title: 'Number One feat. Minz', streams: '18.7M streams', platform: 'spotify', year: '2026' },
      { title: 'Jeune & Riche (Clip)', streams: '20.4M vues', platform: 'youtube', year: '2025' },
      { title: 'Jeune & Riche', streams: '13.6M streams', platform: 'spotify', year: '2024' },
      { title: 'Number One (Clip)', streams: '12.1M vues', platform: 'youtube', year: '2026' }
    ],
    spotify: [
      { title: 'Number One feat. Minz', streams: '15.8M streams', platform: 'spotify', year: '2026' },
      { title: 'Jeune & Riche', streams: '10.2M streams', platform: 'spotify', year: '2024' },
      { title: 'Sans pression', streams: '4.6M streams', platform: 'spotify', year: '2025' },
      { title: 'Vetements', streams: '3.2M streams', platform: 'spotify', year: '2024' }
    ],
    youtube: [
      { title: 'Jeune & Riche (Clip Officiel)', streams: '20.4M vues', platform: 'youtube', year: '2025' },
      { title: 'Number One feat. Minz (Clip)', streams: '12.1M vues', platform: 'youtube', year: '2026' },
      { title: 'Yorobo Drill Acte 3 (Clip)', streams: '8.3M vues', platform: 'youtube', year: '2023' },
      { title: 'Banger (Clip Officiel)', streams: '4.1M vues', platform: 'youtube', year: '2024' }
    ],
    apple: [
      { title: 'Number One feat. Minz', streams: 'Rank 1 (12 semaines)', platform: 'apple', year: '2026' },
      { title: 'Jeune & Riche', streams: 'Rank 3 (18 semaines)', platform: 'apple', year: '2024' },
      { title: 'Ivoire Drill King EP', streams: 'Rank 5 (8 semaines)', platform: 'apple', year: '2021' },
      { title: 'Sans pression', streams: 'Rank 9 (4 semaines)', platform: 'apple', year: '2025' }
    ],
    deezer: [
      { title: 'Jeune & Riche', streams: '3.4M écoutes', platform: 'deezer', year: '2024' },
      { title: 'Number One feat. Minz', streams: '2.9M écoutes', platform: 'deezer', year: '2026' },
      { title: 'Ivoire Drill King', streams: '1.2M écoutes', platform: 'deezer', year: '2021' },
      { title: 'IDK2', streams: '800K écoutes', platform: 'deezer', year: '2023' }
    ]
  };

  const activeTopTracks = topTracks[activePlatform];

  return (
    <>
      <main className="relative isolate min-h-screen overflow-hidden bg-black pt-24 text-white font-sans selection:bg-white selection:text-black">
        {/* Background glow and images */}
        <div className="fixed inset-0 z-0">
          <Image
            src="/images/HIMRA%20EN%20CONCERT%20AU%20STADE%20EBIMPE%20_%20TIKERAMA.jfif"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center grayscale contrast-150 brightness-[0.14]"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.12),transparent_35%),linear-gradient(180deg,rgba(0,0,0,0.5),rgba(0,0,0,0.95))] ambient-glow" />
        </div>

        {/* Hero Section */}
        <section className="relative z-10 border-b border-zinc-900 px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal animation="fade" delay={100} duration={800}>
              <span className="inline-flex border border-white/15 bg-black/45 px-4 py-2 font-mono text-[10px] font-black uppercase tracking-[0.28em] text-zinc-300 backdrop-blur">
                HIMRA / Audience Hub
              </span>
            </ScrollReveal>

            <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <h1 className="text-5xl font-black uppercase leading-none tracking-tighter sm:text-7xl lg:text-[8rem]">
                <TextReveal text="Stats 1X" type="chars" delay={200} stagger={60} />
              </h1>

              <ScrollReveal animation="slide-up" delay={500} className="max-w-md">
                <p className="text-sm leading-7 text-zinc-400">
                  Performances et statistiques consolidées de l'univers musical de HIMRA.
                  Une vue en direct de la portée cumulée sur YouTube et les principales plateformes de streaming.
                </p>
              </ScrollReveal>
            </div>

            {/* Platform selector tabs */}
            <ScrollReveal animation="slide-up" delay={600} className="mt-12 flex flex-wrap gap-2 border-b border-zinc-800 pb-6">
              {(['all', 'spotify', 'youtube', 'apple', 'deezer'] as Platform[]).map((p) => (
                <button
                  key={p}
                  onClick={() => setActivePlatform(p)}
                  className={`px-5 py-3 text-xs font-black uppercase tracking-widest transition-all duration-300 ${activePlatform === p
                      ? 'bg-white text-black'
                      : 'border border-zinc-900 bg-zinc-950/60 text-zinc-500 hover:border-zinc-700 hover:text-white'
                    }`}
                  style={{
                    boxShadow: activePlatform === p ? `0 0 15px -2px ${PLATFORM_THEMES[p].color}40` : 'none'
                  }}
                >
                  {p === 'all' ? 'Toutes les plateformes' : p}
                </button>
              ))}
            </ScrollReveal>
          </div>
        </section>

        {/* Cards widgets row */}
        <section className="relative z-10 border-b border-zinc-900 bg-black/35 py-12 backdrop-blur-[1px] px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            {activePlatform === 'all' ? (
              // All-Platform Cumulative metrics
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                <ScrollReveal animation="zoom-in" delay={100} className="border border-zinc-800 bg-black/60 p-6 card-premium-hover relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-orange-500 via-red-500 to-emerald-500" />
                  <span className="font-mono text-[10px] font-black uppercase tracking-[0.24em] text-zinc-500">
                    Volume d'écoute global
                  </span>
                  <strong className="mt-5 block text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
                    <CountUp end={totalStreams} suffix="+" />
                  </strong>
                  <p className="mt-2 text-xs text-zinc-500">
                    Streams accumulés sur l'ensemble du catalogue.
                  </p>
                </ScrollReveal>

                <ScrollReveal animation="zoom-in" delay={250} className="border border-zinc-800 bg-black/60 p-6 card-premium-hover relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500" />
                  <span className="font-mono text-[10px] font-black uppercase tracking-[0.24em] text-zinc-500">
                    Communauté abonnée
                  </span>
                  <strong className="mt-5 block text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
                    <CountUp end={totalSubscribers} />
                  </strong>
                  <p className="mt-2 text-xs text-zinc-500">
                    Fans inscrits sur YouTube, Spotify & Deezer.
                  </p>
                </ScrollReveal>

                <ScrollReveal animation="zoom-in" delay={400} className="border border-zinc-800 bg-black/60 p-6 card-premium-hover relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500" />
                  <span className="font-mono text-[10px] font-black uppercase tracking-[0.24em] text-zinc-500">
                    Audience Actuelle
                  </span>
                  <strong className="mt-5 block text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
                    <CountUp end={654000} suffix=" Ltn" />
                  </strong>
                  <p className="mt-2 text-xs text-zinc-500">
                    Auditeurs Spotify mensuels les plus récents.
                  </p>
                </ScrollReveal>
              </div>
            ) : (
              // Specific Platform metrics
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                {platformStats[activePlatform as Exclude<Platform, 'all'>].metrics.map((metric, idx) => (
                  <ScrollReveal
                    key={metric.label}
                    animation="zoom-in"
                    delay={idx * 150}
                    className={`border bg-black/60 p-6 card-premium-hover relative transition-all duration-300 ${activeTheme.glowClass}`}
                  >
                    <div
                      className="absolute top-0 left-0 w-full h-[2px]"
                      style={{ backgroundColor: activeTheme.color }}
                    />
                    <span className="font-mono text-[10px] font-black uppercase tracking-[0.24em] text-zinc-500">
                      {metric.label}
                    </span>
                    <strong className="mt-5 block text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
                      <CountUp end={metric.value} suffix={metric.suffix} />
                    </strong>
                    <p className="mt-2 text-xs text-zinc-500">
                      Statistique mise à jour pour {platformStats[activePlatform as Exclude<Platform, 'all'>].title}.
                    </p>
                  </ScrollReveal>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Graph and Demographics */}
        <section className="relative z-10 border-b border-zinc-900 bg-zinc-950/70 py-20 backdrop-blur-[2px] px-6 lg:px-8">
          <div className="mx-auto max-w-7xl grid grid-cols-1 gap-12 lg:grid-cols-12">

            {/* SVG Wave Growth Chart */}
            <div className="lg:col-span-7 space-y-6">
              <ScrollReveal animation="slide-up">
                <span className="font-mono text-xs font-black uppercase tracking-[0.24em] text-zinc-500">
                  Croissance
                </span>
                <h3 className="mt-3 text-3xl font-black uppercase tracking-tight">
                  Tendance de progression (6 mois)
                </h3>
              </ScrollReveal>

              <ScrollReveal
                animation="zoom-in"
                delay={200}
                className="border border-zinc-900 bg-black/80 p-6 relative overflow-hidden"
              >
                <div className="relative h-56 w-full">
                  <svg className="w-full h-full" viewBox="0 0 600 200" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id={`gradient-${activePlatform}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={activeTheme.gradientColor} stopOpacity="0.3" />
                        <stop offset="100%" stopColor={activeTheme.gradientColor} stopOpacity="0.0" />
                      </linearGradient>
                    </defs>

                    {/* Chart horizontal grid lines */}
                    <line x1="40" y1="10" x2="590" y2="10" stroke="#1c1c1e" strokeWidth="1" />
                    <line x1="40" y1="60" x2="590" y2="60" stroke="#1c1c1e" strokeWidth="1" />
                    <line x1="40" y1="110" x2="590" y2="110" stroke="#1c1c1e" strokeWidth="1" />
                    <line x1="40" y1="160" x2="590" y2="160" stroke="#1c1c1e" strokeWidth="1.5" />

                    {/* Glowing Filled Area */}
                    <path
                      d={generateAreaPath()}
                      fill={`url(#gradient-${activePlatform})`}
                      className="transition-all duration-1000 ease-in-out"
                    />

                    {/* Drawing growth line */}
                    <path
                      d={generatePath()}
                      fill="none"
                      stroke={activeTheme.chartStroke}
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      className="transition-all duration-1000 ease-in-out"
                    />

                    {/* Interactive dots */}
                    {activeChartPoints.map((p, idx) => (
                      <circle
                        key={idx}
                        cx={40 + idx * 110}
                        cy={p.y}
                        r="5.5"
                        fill="#000000"
                        stroke={activeTheme.chartStroke}
                        strokeWidth="3.5"
                        className="transition-all duration-1000 ease-in-out hover:r-7 cursor-pointer"
                      />
                    ))}
                  </svg>
                </div>

                {/* X labels mapping */}
                <div className="flex justify-between pl-8 pr-1 mt-3 font-mono text-[10px] uppercase text-zinc-500">
                  {activeChartPoints.map((p, idx) => (
                    <span key={idx} className="w-12 text-center">{p.month}</span>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Geographical Audience Share */}
            <div className="lg:col-span-5 space-y-6">
              <ScrollReveal animation="slide-up">
                <span className="font-mono text-xs font-black uppercase tracking-[0.24em] text-zinc-500">
                  Démographie
                </span>
                <h3 className="mt-3 text-3xl font-black uppercase tracking-tight">
                  Origine de l'Audience
                </h3>
              </ScrollReveal>

              <div className="space-y-5 border border-zinc-900 bg-black/60 p-6">
                {locations.map((loc, idx) => (
                  <ScrollReveal
                    key={loc.country}
                    animation="slide-left"
                    delay={idx * 100}
                    className="space-y-2"
                  >
                    <div className="flex justify-between text-xs font-mono font-bold text-zinc-400">
                      <span className="uppercase tracking-widest">{loc.country}</span>
                      <span className="text-white">{loc.percentage}%</span>
                    </div>
                    {/* Glowing progress bar */}
                    <div className="h-2 w-full bg-zinc-950 overflow-hidden rounded-full">
                      <div
                        className={`h-full rounded-full ${loc.color} transition-all duration-[1200ms] ease-out`}
                        style={{
                          width: `${loc.percentage}%`,
                          boxShadow: `0 0 10px 1px ${activeTheme.color}35`
                        }}
                      />
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Top Streams Rankings List */}
        <section className="relative z-10 bg-black/[0.86] py-20 backdrop-blur-[2px] px-6 lg:px-8">
          <div className="mx-auto max-w-7xl grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <ScrollReveal animation="slide-up">
                <span className="font-mono text-xs font-black uppercase tracking-[0.24em] text-zinc-500">
                  Top titres
                </span>
                <h2 className="mt-4 text-4xl font-black uppercase leading-none tracking-tight sm:text-6xl">
                  <TextReveal text="Classement des performances" />
                </h2>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-8">
              <div className="divide-y divide-zinc-900 border-b border-zinc-900">
                {activeTopTracks.map((track, index) => (
                  <ScrollReveal
                    key={track.title}
                    animation="slide-up"
                    delay={index * 100}
                    className="grid gap-4 py-6 md:grid-cols-[0.4fr_1.8fr_0.8fr] items-center group transition-colors duration-300"
                  >
                    <span className="font-mono text-sm text-zinc-600 group-hover:text-white">
                      #{String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="text-xl font-black uppercase tracking-tight text-white">
                        {track.title}
                      </h3>
                      <p className="mt-1 font-mono text-[9px] uppercase tracking-widest text-zinc-500">
                        HIMRA • {track.year}
                      </p>
                    </div>
                    <div className="md:text-right">
                      <strong className={`font-mono text-sm font-black uppercase tracking-wider ${activeTheme.accentText}`}>
                        {track.streams}
                      </strong>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
