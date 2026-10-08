import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import TextReveal from '../components/TextReveal';

const certifications = [
  {
    title: 'Jeune & Riche',
    level: 'Disque de diamant',
    year: '2025',
    body: 'Le projet devient un repere majeur du rap ivoirien avec une progression de l or au platine, puis au diamant en Cote d Ivoire.',
    image: '/images/jeune%20et%20riche%20%E2%9A%94%EF%B8%8F%F0%9F%87%A8%F0%9F%87%AE.jfif',
  },
  {
    title: 'Jeune & Riche',
    level: 'Double platine',
    year: '2025',
    body: 'Une certification obtenue quelques mois apres la sortie, symbole d un album devenu central dans la culture urbaine ivoirienne.',
    image: '/images/1900x1900-000000-80-0-0.jpg',
  },
  {
    title: 'Number One feat. Minz',
    level: 'Single d or SNEP',
    year: '2026',
    body: 'Le titre franchit un cap important en France et marque une ouverture plus large vers le public international.',
    image: '/images/ab67616d00001e02f720d917c23d9b388b017a7f.jfif',
  },
];

const awards = [
  {
    event: 'African Talent Awards',
    year: '2024',
    prize: 'Triple laureat',
    detail: 'Meilleur album francophone, meilleur artiste francophone et Black Trophy.',
  },
  {
    event: 'Primud',
    year: '2024',
    prize: 'Meilleur artiste rap ivoirien',
    detail: 'Reconnaissance locale forte dans l univers des musiques urbaines ivoiriennes.',
  },
  {
    event: 'Galsen Hip-Hop Awards',
    year: '2025',
    prize: 'Meilleur artiste africain',
    detail: 'Distinction regionale autour de son impact dans le rap francophone africain.',
  },
  {
    event: 'Arawa Awards',
    year: '2025',
    prize: 'Arawa d or Afrique francophone',
    detail: 'Une distinction qui confirme son rayonnement hors de Cote d Ivoire.',
  },
  {
    event: 'Primud',
    year: '2025',
    prize: 'Primud d or',
    detail: 'Une place centrale dans les distinctions populaires et urbaines ivoiriennes.',
  },
];

const milestones = [
  ['2024', 'Jeune & Riche installe HIMRA comme figure majeure du rap ivoirien.'],
  ['2024', 'Reconnaissance aux African Talent Awards with plusieurs prix.'],
  ['2025', 'L album poursuit sa course avec les certifications platine puis diamant.'],
  ['2026', 'Number One feat. Minz obtient une certification single d or en France.'],
];

export default function Certifications() {
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(255,255,255,0.18),transparent_26%),linear-gradient(180deg,rgba(0,0,0,0.42),#000_78%)] ambient-glow" />
        </div>

        <section className="relative z-10 border-b border-zinc-900 px-6 py-20 lg:px-8">
          <div className="mx-auto grid min-h-[calc(100vh-10rem)] max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="space-y-8">
              <ScrollReveal animation="fade" delay={100} duration={800}>
                <span className="inline-flex border border-white/15 bg-black/45 px-4 py-2 font-mono text-[10px] font-black uppercase tracking-[0.28em] text-zinc-300 backdrop-blur">
                  Certifications / Distinctions
                </span>
              </ScrollReveal>
              
              <h1 className="text-6xl font-black uppercase leading-[0.84] tracking-tighter sm:text-8xl lg:text-[9rem]">
                <TextReveal text="Palmares" type="chars" delay={200} stagger={55} />
              </h1>
              
              <ScrollReveal animation="slide-up" delay={500} duration={1000}>
                <p className="max-w-2xl text-sm leading-7 tracking-wide text-zinc-300 sm:text-base">
                  Les certifications et recompenses racontent l autre face de l ascension de HIMRA :
                  chiffres, prix, reconnaissance publique et validation de son impact culturel.
                </p>
              </ScrollReveal>

              <div className="grid max-w-2xl grid-cols-3 gap-3">
                {[
                  ['Diamant', 'Jeune & Riche'],
                  ['Or SNEP', 'Number One'],
                  ['Awards', 'Afrique'],
                ].map(([value, label], idx) => (
                  <ScrollReveal
                    key={value}
                    animation="zoom-in"
                    delay={600 + idx * 100}
                    className="border border-white/10 bg-black/55 p-4 backdrop-blur card-premium-hover"
                  >
                    <strong className="block text-2xl font-black uppercase tracking-tighter">{value}</strong>
                    <span className="mt-1 block font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                      {label}
                    </span>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            <ScrollReveal
              animation="slide-up"
              delay={400}
              className="group grid gap-5 border border-white/10 bg-black/60 p-4 backdrop-blur card-premium-hover sm:grid-cols-[0.8fr_1fr]"
            >
              <div className="relative aspect-square overflow-hidden bg-zinc-950">
                <Image
                  src="/images/jeune%20et%20riche%20%E2%9A%94%EF%B8%8F%F0%9F%87%A8%F0%9F%87%AE.jfif"
                  alt="Jeune et Riche"
                  fill
                  sizes="(min-width: 1024px) 28vw, 90vw"
                  className="object-cover hover-zoom-premium group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-between p-2 sm:p-4">
                <div>
                  <span className="font-mono text-[10px] font-black uppercase tracking-[0.24em] text-zinc-500">
                    Projet certifie
                  </span>
                  <h2 className="mt-4 text-3xl font-black uppercase tracking-tight">
                    Jeune & Riche
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-zinc-400">
                    L album concentre la reconnaissance commerciale la plus visible de HIMRA, avec
                    une trajectoire de certification devenue historique pour le rap ivoirien.
                  </p>
                </div>
                <Link
                  href="/discographie"
                  className="inline-block mt-8 w-fit bg-white px-6 py-3 text-xs font-black uppercase tracking-widest text-black transition duration-300 hover:bg-black hover:text-white hover:border-white"
                >
                  Voir la discographie
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="relative z-10 border-b border-zinc-900 bg-black/[0.86] px-6 py-20 backdrop-blur-[2px] lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <ScrollReveal animation="slide-up">
                  <span className="font-mono text-xs font-black uppercase tracking-[0.24em] text-zinc-500">
                    Certifications
                  </span>
                  <h2 className="mt-4 text-4xl font-black uppercase tracking-tighter sm:text-5xl">
                    <TextReveal text="Les seuils franchis" />
                  </h2>
                </ScrollReveal>
              </div>
              <ScrollReveal animation="slide-up" delay={200}>
                <p className="max-w-md text-sm leading-7 text-zinc-400">
                  Une selection de certifications publiques autour des projets et titres qui ont
                  marque l ascension de HIMRA.
                </p>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {certifications.map((certification, index) => (
                <ScrollReveal
                  key={`${certification.title}-${certification.level}`}
                  animation="slide-up"
                  delay={index * 150}
                  className="group border border-zinc-900 bg-black/70 p-4 card-premium-hover"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-zinc-950">
                    <Image
                      src={certification.image}
                      alt={certification.title}
                      fill
                      sizes="(min-width: 1024px) 30vw, 90vw"
                      className="object-cover grayscale contrast-125 hover-zoom-premium group-hover:scale-105 group-hover:grayscale-0"
                    />
                    <div className="absolute left-3 top-3 bg-white px-3 py-2 font-mono text-[10px] font-black uppercase tracking-widest text-black">
                      {certification.year}
                    </div>
                  </div>
                  <h3 className="mt-5 text-2xl font-black uppercase tracking-tight">
                    {certification.level}
                  </h3>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                    {certification.title}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-zinc-400">{certification.body}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="relative z-10 border-b border-zinc-900 bg-zinc-950/[0.78] px-6 py-20 backdrop-blur-[2px] lg:px-8">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <ScrollReveal animation="slide-up">
                <span className="font-mono text-xs font-black uppercase tracking-[0.24em] text-zinc-500">
                  Distinctions
                </span>
                <h2 className="mt-4 text-4xl font-black uppercase leading-none tracking-tight sm:text-6xl">
                  <TextReveal text="Prix et reconnaissance" />
                </h2>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-8">
              <div className="divide-y divide-zinc-900 border-b border-zinc-900">
                {awards.map((award, index) => (
                  <ScrollReveal
                    key={`${award.event}-${award.prize}`}
                    animation="slide-up"
                    delay={index * 80}
                    className="grid gap-4 py-6 transition-all duration-300 hover:bg-white hover:px-4 hover:text-black md:grid-cols-[0.6fr_1fr_1.35fr]"
                  >
                    <span className="font-mono text-xs text-zinc-500">{award.year}</span>
                    <div>
                      <h3 className="text-xl font-black uppercase tracking-tight">{award.event}</h3>
                      <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                        #{String(index + 1).padStart(2, '0')}
                      </p>
                    </div>
                    <div>
                      <strong className="text-sm font-black uppercase tracking-wide">{award.prize}</strong>
                      <p className="mt-2 text-sm leading-7 text-zinc-500 transition-colors duration-300 group-hover:text-zinc-800">{award.detail}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10 bg-black/[0.86] px-6 py-20 backdrop-blur-[2px] lg:px-8">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal animation="slide-up">
              <span className="font-mono text-xs font-black uppercase tracking-[0.24em] text-zinc-500">
                Timeline
              </span>
            </ScrollReveal>
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-4">
              {milestones.map(([year, text], index) => (
                <ScrollReveal
                  key={`${year}-${text}`}
                  animation="zoom-in"
                  delay={index * 120}
                  className="border border-zinc-900 bg-black/60 p-5 card-premium-hover"
                >
                  <span className="font-mono text-sm font-black text-white">{year}</span>
                  <p className="mt-4 text-sm leading-7 text-zinc-500">{text}</p>
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
