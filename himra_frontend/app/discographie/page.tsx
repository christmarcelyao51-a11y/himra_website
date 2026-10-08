import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import TextReveal from '../components/TextReveal';

type Platform = 'deezer' | 'spotify' | 'apple' | 'youtube';

const releases = [
  {
    title: 'Nfusa',
    type: 'Album',
    year: '2019',
    cover: '/images/ab67616d0000b2732e1f0b5c8966a90cd1cab041.jfif',
    note: 'Premiere base discographique, avant la pleine explosion du personnage HIMRA.',
  },
  {
    title: 'Ivoire Drill King',
    type: 'EP',
    year: '2021',
    cover: '/images/ab67616d0000b273970ab0cfac1e72a3d88ce626.jfif',
    note: 'Le virage drill devient central : son plus froid, diction nerveuse, univers plus sombre.',
  },
  {
    title: 'IDK2',
    type: 'Mixtape',
    year: '2023',
    cover: '/images/ab67616d0000b27347c0225db241500f6a1c3e78.jfif',
    note: 'Une suite qui renforce la signature 1X et installe une cadence de sortie plus offensive.',
  },
  {
    title: '1X',
    type: 'Mixtape',
    year: '2023',
    cover: '/images/t%C3%A9l%C3%A9chargement%20%283%29.jfif',
    note: 'Le signe devient une identite musicale et visuelle : brute, directe, reconnaissable.',
  },
  {
    title: 'Jeune et riche',
    type: 'Album',
    year: '2024',
    cover: '/images/jeune%20et%20riche%20%E2%9A%94%EF%B8%8F%F0%9F%87%A8%F0%9F%87%AE.jfif',
    note: 'Le projet qui le fait basculer dans une autre dimension populaire en Cote d Ivoire.',
    featured: true,
  },
  {
    title: 'Nouveau Boss',
    type: 'Album',
    year: '2025',
    cover: '/images/Nouveau%20Boss.jfif',
    note: 'Une etape plus ambitieuse, pensee comme une affirmation de statut.',
  },
];

const keyTracks = [
  {
    title: 'Banger',
    youtubeUrl: 'https://www.youtube.com/results?search_query=Himra+Banger+official+video',
  },
  {
    title: 'Yorobo Drill Acte 3',
    youtubeUrl: 'https://www.youtube.com/results?search_query=Himra+Yorobo+Drill+Acte+3+official+video',
  },
  {
    title: 'Vetements',
    youtubeUrl: 'https://www.youtube.com/results?search_query=Himra+Vetements+official+video',
  },
  {
    title: 'Sans pression',
    youtubeUrl: 'https://www.youtube.com/results?search_query=Himra+Sans+pression+official+video',
  },
  {
    title: 'Number One feat. Minz',
    youtubeUrl: 'https://www.youtube.com/results?search_query=Himra+Number+One+Minz+official+video',
  },
  {
    title: 'Legendes feat. La Fouine',
    youtubeUrl: 'https://www.youtube.com/results?search_query=Himra+Legendes+La+Fouine+official+video',
  },
];

const eras = [
  ['2019', 'Premiers projets', 'HIMRA pose ses fondations et commence a structurer son univers.'],
  ['2021', 'Drill ivoirienne', 'Le son devient plus noir, plus sec, plus marque par les codes drill.'],
  ['2023', '1X prend forme', 'Les mixtapes renforcent l identite visuelle et la communaute autour du signe.'],
  ['2024', 'Explosion populaire', 'Jeune et riche installe HIMRA dans la conversation nationale.'],
  ['2025+', 'Confirmation', 'Les collaborations et nouveaux projets prolongent l impact au-dela d Abidjan.'],
];

function getStreamingLinks(title: string) {
  const query = encodeURIComponent(`Himra ${title}`);

  return [
    {
      platform: 'deezer' as const,
      label: `Ecouter ${title} sur Deezer`,
      href: `https://www.deezer.com/search/${query}`,
    },
    {
      platform: 'spotify' as const,
      label: `Ecouter ${title} sur Spotify`,
      href: `https://open.spotify.com/search/${query}/albums`,
    },
    {
      platform: 'apple' as const,
      label: `Ecouter ${title} sur Apple Music`,
      href: `https://music.apple.com/search?term=${query}`,
    },
    {
      platform: 'youtube' as const,
      label: `Chercher ${title} sur YouTube`,
      href: `https://www.youtube.com/results?search_query=${query}`,
    },
  ];
}

function PlatformIcon({ platform }: { platform: Platform }) {
  if (platform === 'deezer') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
        <rect x="3" y="13" width="3" height="6" fill="currentColor" />
        <rect x="7.5" y="10" width="3" height="9" fill="currentColor" />
        <rect x="12" y="7" width="3" height="12" fill="currentColor" />
        <rect x="16.5" y="4" width="3" height="15" fill="currentColor" />
      </svg>
    );
  }

  if (platform === 'spotify') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M7.5 10.2c3.2-.9 6.5-.6 9.2.9" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
        <path d="M8.2 13.1c2.5-.6 5-.4 7.1.8" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
        <path d="M9 15.8c1.8-.4 3.5-.2 5 .6" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.4" />
      </svg>
    );
  }

  if (platform === 'apple') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
        <path d="M10 17.4V6.8l8-1.6v10.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <circle cx="7.5" cy="17.5" r="2.5" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="15.5" cy="15.5" r="2.5" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <rect x="3" y="6" width="18" height="12" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M10 9.5v5l4.5-2.5L10 9.5Z" fill="currentColor" />
    </svg>
  );
}

function StreamingLinks({ title }: { title: string }) {
  return (
    <div className="mt-5 flex items-center gap-2 border-t border-zinc-900 pt-4">
      {getStreamingLinks(title).map((link) => (
        <Link
          key={link.platform}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          aria-label={link.label}
          title={link.label}
          className="grid h-10 w-10 place-items-center border border-zinc-800 bg-zinc-950 text-zinc-400 transition hover:border-white hover:bg-white hover:text-black"
        >
          <PlatformIcon platform={link.platform} />
        </Link>
      ))}
    </div>
  );
}

export default function Discographie() {
  const featuredRelease = releases.find((release) => release.featured);

  return (
    <>
      <main className="relative isolate min-h-screen overflow-hidden bg-black pt-24 text-white">
        <div className="fixed inset-0 z-0">
          <Image
            src="/images/1900x1900-000000-80-0-0.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center grayscale contrast-125 brightness-[0.16]"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_18%,rgba(255,255,255,0.16),transparent_28%),linear-gradient(180deg,rgba(0,0,0,0.46),#000_78%)] ambient-glow" />
        </div>

        <section className="relative z-10 border-b border-zinc-900 px-6 py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div className="space-y-7">
              <ScrollReveal animation="fade" delay={100} duration={800}>
                <span className="font-mono text-xs font-black uppercase tracking-[0.28em] text-zinc-500">
                  Discographie / HIMRA 1X
                </span>
              </ScrollReveal>

              <h1 className="text-6xl font-black uppercase leading-[0.85] tracking-tighter sm:text-8xl lg:text-[9rem]">
                <TextReveal text="Les projets" type="chars" delay={200} stagger={60} />
              </h1>

              <ScrollReveal animation="slide-up" delay={500} duration={1000}>
                <p className="max-w-2xl text-sm leading-7 tracking-wide text-zinc-300 sm:text-base">
                  Une discographie construite comme une montee en pression : premiers projets,
                  drill ivoirienne, mixtapes 1X, puis l impact massif de Jeune et riche.
                </p>
              </ScrollReveal>
            </div>

            {featuredRelease && (
              <ScrollReveal
                animation="slide-up"
                delay={400}
                className="group grid gap-5 border border-white/10 bg-black/60 p-4 backdrop-blur card-premium-hover sm:grid-cols-[0.82fr_1fr]"
              >
                <div className="relative aspect-square overflow-hidden bg-zinc-950">
                  <Image
                    src={featuredRelease.cover}
                    alt={featuredRelease.title}
                    fill
                    sizes="(min-width: 1024px) 28vw, 90vw"
                    className="object-cover hover-zoom-premium group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-between p-2 sm:p-4">
                  <div>
                    <span className="font-mono text-[10px] font-black uppercase tracking-[0.24em] text-zinc-500">
                      Projet pivot / {featuredRelease.year}
                    </span>
                    <h2 className="mt-4 text-3xl font-black uppercase tracking-tight">
                      {featuredRelease.title}
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-zinc-400">{featuredRelease.note}</p>
                  </div>
                  <StreamingLinks title={featuredRelease.title} />
                </div>
              </ScrollReveal>
            )}
          </div>
        </section>

        <section className="relative z-10 border-b border-zinc-900 bg-black/[0.84] px-6 py-20 backdrop-blur-[2px] lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <ScrollReveal animation="slide-up">
                  <span className="font-mono text-xs font-black uppercase tracking-[0.24em] text-zinc-500">
                    Albums / EP / Mixtapes
                  </span>
                  <h2 className="mt-4 text-4xl font-black uppercase tracking-tighter sm:text-5xl">
                    <TextReveal text="Catalogue selectionne" />
                  </h2>
                </ScrollReveal>
              </div>
              <ScrollReveal animation="slide-up" delay={200}>
                <p className="max-w-md text-sm leading-7 text-zinc-400">
                  Les visuels disponibles dans le dossier images sont utilises pour composer une
                  archive propre, dense et lisible.
                </p>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {releases.map((release, index) => (
                <ScrollReveal
                  key={release.title}
                  animation="slide-up"
                  delay={index * 120}
                  className="group border border-zinc-900 bg-black/70 p-4 card-premium-hover"
                >
                  <div className="relative aspect-square overflow-hidden bg-zinc-950">
                    <Image
                      src={release.cover}
                      alt={release.title}
                      fill
                      sizes="(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 90vw"
                      className="object-cover grayscale contrast-125 hover-zoom-premium group-hover:scale-105 group-hover:grayscale-0"
                    />
                    <div className="absolute left-3 top-3 bg-white px-3 py-2 font-mono text-[10px] font-black uppercase tracking-widest text-black">
                      {release.type}
                    </div>
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-5">
                    <div>
                      <h3 className="text-2xl font-black uppercase tracking-tight">
                        {release.title}
                      </h3>
                      <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                        {release.year}
                      </p>
                    </div>
                    <span className="font-mono text-xs font-bold text-zinc-600">
                      [{String(index + 1).padStart(2, '0')}]
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-zinc-400">{release.note}</p>
                  <StreamingLinks title={release.title} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="relative z-10 border-b border-zinc-900 bg-zinc-950/[0.78] px-6 py-20 backdrop-blur-[2px] lg:px-8">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <ScrollReveal animation="slide-up">
                <span className="font-mono text-xs font-black uppercase tracking-[0.24em] text-zinc-500">
                  Morceaux marquants
                </span>
                <h2 className="mt-4 text-4xl font-black uppercase leading-none tracking-tight sm:text-6xl">
                  <TextReveal text="La bande-son de l ascension" />
                </h2>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-7">
              <div className="divide-y divide-zinc-900 border-b border-zinc-900">
                {keyTracks.map((track, index) => (
                  <ScrollReveal
                    key={track.title}
                    animation="slide-up"
                    delay={index * 80}
                  >
                    <Link
                      href={track.youtubeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between gap-6 py-5 transition-all duration-300 hover:bg-white hover:px-4 hover:text-black"
                    >
                      <div className="flex items-center gap-5">
                        <span className="font-mono text-xs text-zinc-600 group-hover:text-black">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <h3 className="text-xl font-black uppercase tracking-tight">{track.title}</h3>
                      </div>
                      <span className="grid h-10 w-10 place-items-center border border-zinc-800 text-zinc-400 transition duration-300 group-hover:border-black group-hover:text-black">
                        <PlatformIcon platform="youtube" />
                      </span>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
              <ScrollReveal animation="fade" delay={300}>
                <p className="mt-5 text-xs leading-6 text-zinc-500">
                  Les icones YouTube ouvrent une recherche ciblee. Pour une lecture integree
                  directement sur le site, il faudra remplacer ces recherches par les IDs exacts des
                  clips officiels.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="relative z-10 bg-black/[0.86] px-6 py-20 backdrop-blur-[2px] lg:px-8">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal animation="slide-up">
              <span className="font-mono text-xs font-black uppercase tracking-[0.24em] text-zinc-500">
                Chronologie sonore
              </span>
            </ScrollReveal>
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-5">
              {eras.map(([year, title, text], index) => (
                <ScrollReveal
                  key={year}
                  animation="zoom-in"
                  delay={index * 100}
                  className="border border-zinc-900 bg-black/60 p-5 card-premium-hover"
                >
                  <span className="font-mono text-sm font-black text-white">{year}</span>
                  <h3 className="mt-4 text-lg font-black uppercase tracking-tight">{title}</h3>
                  <p className="mt-3 text-xs leading-6 text-zinc-500">{text}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
