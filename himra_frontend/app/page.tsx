import Link from 'next/link';
import Image from 'next/image';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';
import TextReveal from './components/TextReveal';

const portraitImages = [
  {
    src: '/images/t%C3%A9l%C3%A9chargement.jfif',
    alt: 'Portrait sombre de Himra',
    label: '1X Signal',
  },
  {
    src: '/images/t%C3%A9l%C3%A9chargement%20%283%29.jfif',
    alt: 'Himra en portrait contraste',
    label: 'Milleboy',
  },
  {
    src: '/images/Nouveau%20Boss.jfif',
    alt: 'Visuel Nouveau Boss',
    label: 'Nouveau Boss',
  },
];

const projectCovers = [
  {
    src: '/images/1900x1900-000000-80-0-0.jpg',
    title: "Sorry I'm Bad",
    meta: 'Album / Archive',
  },
  {
    src: '/images/jeune%20et%20riche%20%E2%9A%94%EF%B8%8F%F0%9F%87%A8%F0%9F%87%AE.jfif',
    title: 'Jeune et riche',
    meta: 'Classique 1X',
  },
  {
    src: '/images/ab67616d0000b273970ab0cfac1e72a3d88ce626.jfif',
    title: 'Drill ivoire',
    meta: 'Cover selection',
  },
  {
    src: '/images/ab67616d0000b27347c0225db241500f6a1c3e78.jfif',
    title: 'Milleboy mood',
    meta: 'Cover selection',
  },
];

const galleryImages = [
  '/images/SHOW%20CASE.jfif',
  '/images/HIMRA%20EN%20CONCERT%20AU%20STADE%20EBIMPE%20_%20TIKERAMA.jfif',
  '/images/l5yuq5fbgmrza_600.jpg',
  '/images/ab67616d0000b2732e1f0b5c8966a90cd1cab041.jfif',
  '/images/ab67616d0000b2737a986e9b60065a04f5085feb.jfif',
  '/images/ab67616d0000b273c0bb3339adfca725c317d687.jfif',
];

const careerSteps = [
  {
    period: 'Origines',
    title: 'Abidjan comme point de depart',
    image: '/images/t%C3%A9l%C3%A9chargement.jfif',
    imageAlt: 'Portrait de HIMRA pour ses origines',
    text: 'Abdul Rahim Souleymane Bakayoko, connu sous le nom de HIMRA, grandit dans l energie urbaine de Cocody et d Abidjan. Son univers se construit entre rap, rue, argot nouchi et culture populaire ivoirienne.',
  },
  {
    period: 'Premiers pas',
    title: 'L ecole du collectif SBS',
    image: '/images/t%C3%A9l%C3%A9chargement%20%281%29.jfif',
    imageAlt: 'Archive visuelle des premiers pas de HIMRA',
    text: 'Avant de devenir une figure solo, il passe par le groupe SBS avec des amis d ecole. Cette periode lui donne ses premiers reperes de scene, de public et de competition musicale.',
  },
  {
    period: 'Depuis 2015',
    title: 'Le choix d une trajectoire solo',
    image: '/images/t%C3%A9l%C3%A9chargement%20%283%29.jfif',
    imageAlt: 'Portrait sombre de HIMRA en solo',
    text: 'HIMRA affine peu a peu une signature plus sombre, plus nerveuse, portee par la drill et un rap hardcore adapte a la realite ivoirienne. Le signe 1X devient un marqueur visuel autant qu un cri de ralliement.',
  },
  {
    period: '2020 - 2023',
    title: 'Passage dans l industrie africaine',
    image: '/images/Nouveau%20Boss.jfif',
    imageAlt: 'Visuel Nouveau Boss de HIMRA',
    text: 'Son parcours croise Def Jam Recordings Africa et l inscrit dans une nouvelle dimension professionnelle. L artiste garde pourtant une image de terrain, tres liee a la jeunesse et aux codes d Abidjan.',
  },
  {
    period: '2024',
    title: 'L explosion Jeune et riche',
    image: '/images/jeune%20et%20riche%20%E2%9A%94%EF%B8%8F%F0%9F%87%A8%F0%9F%87%AE.jfif',
    imageAlt: 'Pochette Jeune et riche de HIMRA',
    text: 'Avec Jeune et riche, HIMRA transforme son esthetique en phenomene populaire. Les morceaux imposent une energie directe, entre ambition, galere, hargne et reconnaissance.',
  },
  {
    period: 'Aujourd hui',
    title: 'Une voix du rap ivoire',
    image: '/images/HIMRA%20EN%20CONCERT%20AU%20STADE%20EBIMPE%20_%20TIKERAMA.jfif',
    imageAlt: 'HIMRA en concert au stade Ebimpe',
    text: 'Entre concerts, clips, collaborations et certifications, HIMRA s affirme comme l un des visages majeurs du rap ivoirien contemporain, avec une ambition qui depasse Abidjan.',
  },
];

export default function Home() {
  return (
    <>
      <main className="relative isolate min-h-screen overflow-hidden bg-black text-white pt-24 font-sans antialiased selection:bg-white selection:text-black">
        <div className="fixed inset-0 z-0">
          <Image
            src="/images/1900x1900-000000-80-0-0.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center grayscale contrast-125 brightness-[0.18]"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(255,255,255,0.14),transparent_30%),linear-gradient(180deg,rgba(0,0,0,0.45),rgba(0,0,0,0.9))] ambient-glow" />
        </div>

        <section className="relative z-10 min-h-[calc(100vh-6rem)] overflow-hidden border-b border-zinc-900">
          <div className="absolute inset-0">
            <Image
              src="/images/t%C3%A9l%C3%A9chargement.jfif"
              alt="Himra signe 1X"
              fill
              priority
              sizes="100vw"
              className="scale-105 object-cover object-center grayscale contrast-150 brightness-[0.28]"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_30%,rgba(255,255,255,0.18),transparent_28%),linear-gradient(90deg,#000_0%,rgba(0,0,0,0.86)_38%,rgba(0,0,0,0.28)_100%)] ambient-glow" />
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent" />
          </div>

          <div className="relative z-10 mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
            <div className="max-w-3xl space-y-8">
              <ScrollReveal animation="fade" delay={100} duration={800}>
                <div className="inline-flex items-center gap-3 border border-white/15 bg-black/45 px-4 py-2 text-[10px] font-black uppercase tracking-[0.28em] text-zinc-300 backdrop-blur">
                  <span>Le Chette 1X</span>
                  <span className="h-1 w-1 rounded-full bg-white" />
                  <span>Official universe</span>
                </div>
              </ScrollReveal>

              <div className="space-y-5">
                <h1 className="max-w-5xl text-6xl font-black uppercase leading-[0.82] tracking-tighter text-white sm:text-8xl lg:text-[10rem]">
                  <TextReveal text="Himra" type="chars" delay={200} stagger={50} />
                  <span className="block text-zinc-500">
                    <TextReveal text="1X" type="chars" delay={500} stagger={50} />
                  </span>
                </h1>

                <ScrollReveal animation="slide-up" delay={600} duration={1000}>
                  <p className="max-w-xl text-sm font-light leading-7 tracking-wide text-zinc-300 sm:text-base">
                    De Cocody aux grandes scenes, la page retrace maintenant l ascension de HIMRA :
                    ses debuts, son identite 1X, la drill ivoirienne et l impact de Jeune et riche.
                  </p>
                </ScrollReveal>
              </div>

              <ScrollReveal animation="slide-up" delay={800} duration={800} className="flex flex-wrap gap-4">
                <Link
                  href="/discographie"
                  className="inline-block border border-white bg-white px-8 py-4 text-xs font-black uppercase tracking-widest text-black transition-all duration-300 hover:bg-black hover:text-white"
                >
                  Discographie
                </Link>
                <Link
                  href="/concerts"
                  className="inline-block border border-white/30 bg-black/20 px-8 py-4 text-xs font-black uppercase tracking-widest text-zinc-200 transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
                >
                  Concerts
                </Link>
              </ScrollReveal>
            </div>

            <div className="grid h-[560px] grid-cols-5 grid-rows-6 gap-3 lg:h-[690px]">
              <ScrollReveal
                animation="zoom-in"
                delay={200}
                className="relative col-span-3 row-span-4 overflow-hidden border border-white/10 bg-zinc-950 group"
              >
                <Image
                  src="/images/t%C3%A9l%C3%A9chargement%20%283%29.jfif"
                  alt="Portrait Himra"
                  fill
                  sizes="(min-width: 1024px) 34vw, 60vw"
                  className="object-cover grayscale contrast-125 hover-zoom-premium group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
              </ScrollReveal>

              <ScrollReveal
                animation="zoom-in"
                delay={350}
                className="relative col-span-2 row-span-3 overflow-hidden border border-white/10 bg-zinc-950 group"
              >
                <Image
                  src="/images/Nouveau%20Boss.jfif"
                  alt="Nouveau Boss"
                  fill
                  sizes="(min-width: 1024px) 22vw, 40vw"
                  className="object-cover grayscale contrast-125 hover-zoom-premium group-hover:scale-105 group-hover:grayscale-0"
                />
              </ScrollReveal>

              <ScrollReveal
                animation="zoom-in"
                delay={500}
                className="relative col-span-2 row-span-3 overflow-hidden border border-white/10 bg-zinc-950 group"
              >
                <Image
                  src="/images/SHOW%20CASE.jfif"
                  alt="Show case Himra"
                  fill
                  sizes="(min-width: 1024px) 22vw, 40vw"
                  className="object-cover grayscale contrast-125 hover-zoom-premium group-hover:scale-105 group-hover:grayscale-0"
                />
              </ScrollReveal>

              <ScrollReveal
                animation="zoom-in"
                delay={650}
                className="relative col-span-3 row-span-2 overflow-hidden border border-white/10 bg-zinc-950 group"
              >
                <Image
                  src="/images/HIMRA%20EN%20CONCERT%20AU%20STADE%20EBIMPE%20_%20TIKERAMA.jfif"
                  alt="Concert Himra au stade Ebimpe"
                  fill
                  sizes="(min-width: 1024px) 34vw, 60vw"
                  className="object-cover grayscale contrast-125 hover-zoom-premium group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute bottom-4 left-4 font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-white pointer-events-none">
                  Stade Ebimpe
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="relative z-10 border-b border-zinc-900 bg-black/[0.86] py-24 backdrop-blur-[2px]">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-12 lg:px-8">
            <div className="lg:col-span-5 space-y-6">
              <ScrollReveal animation="slide-up" delay={50}>
                <span className="font-mono text-xs font-black uppercase tracking-[0.24em] text-zinc-500">
                  01 / Portrait
                </span>
                <h2 className="mt-5 text-4xl font-black uppercase leading-none tracking-tight sm:text-6xl">
                  <TextReveal text="Qui est HIMRA ?" type="words" />
                </h2>
              </ScrollReveal>

              <ScrollReveal animation="slide-up" delay={200}>
                <p className="max-w-xl text-sm leading-7 tracking-wide text-zinc-300">
                  HIMRA, de son vrai nom Abdul Rahim Souleymane Bakayoko, est une figure du rap
                  ivoirien dont l univers melange drill, rap hardcore et langage populaire d Abidjan.
                  Sa force vient autant de sa musique que de son image : gestes 1X, noir intense,
                  pochettes marquees et energie de scene.
                </p>
              </ScrollReveal>

              <div className="grid grid-cols-3 gap-3">
                {[
                  ['Cocody', 'Origine'],
                  ['Drill', 'Signature'],
                  ['1X', 'Identite'],
                ].map(([value, label], index) => (
                  <ScrollReveal key={value} animation="zoom-in" delay={300 + index * 100} className="border border-zinc-800 bg-black/55 p-4 card-premium-hover">
                    <strong className="block text-2xl font-black uppercase tracking-tighter text-white">
                      {value}
                    </strong>
                    <span className="mt-1 block font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                      {label}
                    </span>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-8 border-l border-zinc-800">
                {careerSteps.map((step, index) => (
                  <ScrollReveal
                    key={step.title}
                    animation="slide-up"
                    delay={index * 100}
                    className="group relative pl-8"
                  >
                    <span className="absolute -left-[6px] top-6 h-3 w-3 rounded-full border border-black bg-white shadow-[0_0_0_7px_rgba(255,255,255,0.06)] transition-transform duration-500 group-hover:scale-125" />
                    <div
                      className={`grid gap-5 overflow-hidden border border-zinc-900 bg-black/55 p-4 backdrop-blur card-premium-hover sm:grid-cols-[0.86fr_1.14fr] ${index % 2 === 1 ? 'sm:[&>*:first-child]:order-2' : ''
                        }`}
                    >
                      <div className="float-slow relative min-h-56 overflow-hidden bg-zinc-950 sm:min-h-64">
                        <Image
                          src={step.image}
                          alt={step.imageAlt}
                          fill
                          sizes="(min-width: 1024px) 22vw, (min-width: 640px) 42vw, 86vw"
                          className="object-cover grayscale contrast-125 hover-zoom-premium group-hover:scale-110 group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20 pointer-events-none" />
                        <div className="absolute bottom-3 left-3 font-mono text-[10px] font-black uppercase tracking-[0.24em] text-white">
                          {step.period}
                        </div>
                      </div>

                      <div className="flex flex-col justify-between gap-6 p-2 sm:p-4">
                        <div>
                          <span className="font-mono text-[10px] font-black uppercase tracking-[0.24em] text-zinc-500">
                            Chapitre {String(index + 1).padStart(2, '0')}
                          </span>
                          <h3 className="mt-3 text-2xl font-black uppercase tracking-tight text-white">
                            {step.title}
                          </h3>
                          <p className="mt-3 text-sm leading-7 tracking-wide text-zinc-400">
                            {step.text}
                          </p>
                        </div>
                        <div className="h-px w-20 bg-white/35 transition-all duration-500 group-hover:w-32" />
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10 border-b border-zinc-900 bg-black/[0.82] py-24 backdrop-blur-[2px]">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-12 lg:px-8">
            <div className="lg:col-span-4">
              <ScrollReveal animation="slide-up">
                <span className="font-mono text-xs font-black uppercase tracking-[0.24em] text-zinc-500">
                  02 / Identite visuelle
                </span>
                <h2 className="mt-5 text-4xl font-black uppercase leading-none tracking-tight sm:text-6xl">
                  <TextReveal text="Une galerie qui frappe" />
                </h2>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:col-span-8">
              {portraitImages.map((image, index) => (
                <ScrollReveal
                  key={image.src}
                  animation="slide-up"
                  delay={index * 150}
                  className={`group relative overflow-hidden border border-zinc-900 bg-zinc-950 card-premium-hover ${index === 1 ? 'sm:translate-y-10' : ''
                    }`}
                >
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 1024px) 18vw, (min-width: 640px) 30vw, 90vw"
                      className="object-cover grayscale contrast-125 hover-zoom-premium group-hover:scale-105 group-hover:grayscale-0"
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/60 to-transparent p-5 pointer-events-none">
                    <span className="font-mono text-[10px] font-black uppercase tracking-[0.24em] text-zinc-300">
                      {image.label}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="relative z-10 border-b border-zinc-900 bg-zinc-950/70 py-24 backdrop-blur-[2px]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-2xl space-y-4">
                <ScrollReveal animation="slide-up">
                  <span className="font-mono text-xs font-black uppercase tracking-[0.24em] text-zinc-500">
                    03 / Pochettes
                  </span>
                  <h2 className="text-4xl font-black uppercase tracking-tighter sm:text-5xl">
                    <TextReveal text="Discographie en facade" />
                  </h2>
                </ScrollReveal>
              </div>
              <ScrollReveal animation="fade" delay={200}>
                <Link
                  href="/discographie"
                  className="inline-block border border-zinc-800 bg-black px-6 py-3 text-xs font-black uppercase tracking-widest text-zinc-300 transition-all duration-300 hover:bg-white hover:text-black hover:border-white"
                >
                  Voir toute la discographie
                </Link>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {projectCovers.map((cover, index) => (
                <ScrollReveal
                  key={cover.src}
                  animation="slide-up"
                  delay={index * 100}
                  className="group border border-zinc-900 bg-black p-4 card-premium-hover"
                >
                  <div className="relative aspect-square overflow-hidden bg-zinc-900">
                    <Image
                      src={cover.src}
                      alt={cover.title}
                      fill
                      sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
                      className="object-cover hover-zoom-premium group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-black uppercase tracking-tight">{cover.title}</h3>
                      <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                        {cover.meta}
                      </p>
                    </div>
                    <span className="font-mono text-xs font-bold text-zinc-600">
                      [{String(index + 1).padStart(2, '0')}]
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="relative z-10 bg-black/[0.82] py-24 backdrop-blur-[2px]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
              <div className="space-y-6">
                <ScrollReveal animation="slide-up">
                  <span className="font-mono text-xs font-black uppercase tracking-[0.24em] text-zinc-500">
                    04 / Scene & archive
                  </span>
                  <h2 className="text-4xl font-black uppercase leading-none tracking-tight sm:text-6xl">
                    <TextReveal text="Du visuel a la foule" />
                  </h2>
                </ScrollReveal>

                <ScrollReveal animation="slide-up" delay={200}>
                  <p className="max-w-md text-sm leading-7 tracking-wide text-zinc-400">
                    La derniere section assemble les images de show, les visuels de campagne et les
                    covers secondaires pour donner plus de profondeur a la page sans sortir de son
                    esthetique noire et incisive.
                  </p>
                </ScrollReveal>

                <ScrollReveal animation="fade" delay={300}>
                  <Link
                    href="/concerts"
                    className="inline-block bg-white px-7 py-4 text-xs font-black uppercase tracking-widest text-black transition duration-300 hover:bg-zinc-300"
                  >
                    Prochains concerts
                  </Link>
                </ScrollReveal>
              </div>

              <div className="grid grid-cols-6 gap-3">
                {galleryImages.map((src, index) => (
                  <ScrollReveal
                    key={src}
                    animation="zoom-in"
                    delay={index * 80}
                    className={`relative overflow-hidden border border-zinc-900 bg-zinc-950 card-premium-hover ${index === 0 || index === 1 ? 'col-span-3 aspect-[4/3]' : 'col-span-2 aspect-square'
                      }`}
                  >
                    <Image
                      src={src}
                      alt={`Archive visuelle Himra ${index + 1}`}
                      fill
                      sizes="(min-width: 1024px) 20vw, 45vw"
                      className="object-cover grayscale contrast-125 hover-zoom-premium group-hover:scale-105 group-hover:grayscale-0"
                    />
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
