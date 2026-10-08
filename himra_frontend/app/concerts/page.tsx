import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import TextReveal from '../components/TextReveal';

const showCards = [
  {
    city: 'Abidjan',
    venue: 'Grande scene a confirmer',
    date: 'Bientot',
    status: 'Annonce officielle attendue',
    image: '/images/HIMRA%20EN%20CONCERT%20AU%20STADE%20EBIMPE%20_%20TIKERAMA.jfif',
  },
  {
    city: 'Afrique de l Ouest',
    venue: 'Tour regionale',
    date: 'A venir',
    status: 'Dates en preparation',
    image: '/images/SHOW%20CASE.jfif',
  },
  {
    city: 'Europe',
    venue: 'Festivals & clubs',
    date: 'A confirmer',
    status: 'Booking international',
    image: '/images/l5yuq5fbgmrza_600.jpg',
  },
];

const liveMoments = [
  {
    title: 'Entree',
    text: 'Une arrivee pensee comme un impact visuel : lumiere dure, noir profond, public deja sous tension.',
  },
  {
    title: 'Set drill',
    text: 'Les titres les plus nerveux prennent toute leur dimension en live, avec une energie frontale.',
  },
  {
    title: '1X crowd',
    text: 'Le signe devient un geste collectif, repris par le public comme un code commun.',
  },
  {
    title: 'Final',
    text: 'La fin de show garde l intensite haute : refrains scandés, basses lourdes, image de leader.',
  },
];

const practicalItems = [
  ['Billets', 'Les liens officiels seront ajoutes des confirmation des dates.'],
  ['Acces', 'Prevoir une arrivee avancee pour les grands shows et festivals.'],
  ['Merch', 'Espace ideal pour afficher collections, t-shirts, editions 1X et packs fan.'],
  ['Booking', 'Section prete pour contact management, presse ou demandes de scene.'],
];

export default function Concerts() {
  return (
    <>
      <main className="relative isolate min-h-screen overflow-hidden bg-black pt-24 text-white">
        <div className="fixed inset-0 z-0">
          <Image
            src="/images/HIMRA%20EN%20CONCERT%20AU%20STADE%20EBIMPE%20_%20TIKERAMA.jfif"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center grayscale contrast-150 brightness-[0.2]"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_25%,rgba(255,255,255,0.18),transparent_26%),linear-gradient(180deg,rgba(0,0,0,0.35),#000_76%)] ambient-glow" />
        </div>

        <section className="relative z-10 border-b border-zinc-900 px-6 py-20 lg:px-8">
          <div className="mx-auto grid min-h-[calc(100vh-10rem)] max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div className="space-y-8">
              <ScrollReveal animation="fade" delay={100} duration={800}>
                <span className="inline-flex border border-white/15 bg-black/45 px-4 py-2 font-mono text-[10px] font-black uppercase tracking-[0.28em] text-zinc-300 backdrop-blur">
                  Concerts / Live 1X
                </span>
              </ScrollReveal>

              <h1 className="text-6xl font-black uppercase leading-[0.84] tracking-tighter sm:text-8xl lg:text-[10rem]">
                <TextReveal text="La scene" type="chars" delay={200} stagger={65} />
              </h1>

              <ScrollReveal animation="slide-up" delay={500} duration={1000}>
                <p className="max-w-2xl text-sm leading-7 tracking-wide text-zinc-300 sm:text-base">
                  Une page pensee pour suivre les prochaines dates de HIMRA, presenter l energie des
                  shows et centraliser les informations utiles sans afficher de fausses annonces.
                </p>
              </ScrollReveal>

              <ScrollReveal animation="slide-up" delay={700} className="flex flex-wrap gap-4">
                <Link
                  href="#dates"
                  className="inline-block bg-white px-8 py-4 text-xs font-black uppercase tracking-widest text-black transition duration-300 hover:bg-black hover:text-white hover:border-white"
                >
                  Voir les dates
                </Link>
                <Link
                  href="#booking"
                  className="inline-block border border-white/30 bg-black/30 px-8 py-4 text-xs font-black uppercase tracking-widest text-zinc-200 transition duration-300 hover:border-white hover:bg-white hover:text-black"
                >
                  Booking
                </Link>
              </ScrollReveal>
            </div>

            <div className="grid h-[620px] grid-cols-5 grid-rows-6 gap-3">
              <ScrollReveal
                animation="zoom-in"
                delay={200}
                className="relative col-span-5 row-span-4 overflow-hidden border border-white/10 bg-zinc-950 group"
              >
                <Image
                  src="/images/HIMRA%20EN%20CONCERT%20AU%20STADE%20EBIMPE%20_%20TIKERAMA.jfif"
                  alt="HIMRA en concert"
                  fill
                  sizes="(min-width: 1024px) 44vw, 90vw"
                  className="object-cover grayscale contrast-125 hover-zoom-premium group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-5 pointer-events-none">
                  <span className="font-mono text-[10px] font-black uppercase tracking-[0.24em] text-zinc-300">
                    Archive live
                  </span>
                  <h2 className="mt-2 text-3xl font-black uppercase tracking-tight">
                    Stade / foule / impact
                  </h2>
                </div>
              </ScrollReveal>

              <ScrollReveal
                animation="zoom-in"
                delay={400}
                className="relative col-span-2 row-span-2 overflow-hidden border border-white/10 bg-zinc-950 group"
              >
                <Image
                  src="/images/SHOW%20CASE.jfif"
                  alt="Show case HIMRA"
                  fill
                  sizes="20vw"
                  className="object-cover grayscale contrast-125 hover-zoom-premium group-hover:scale-105 group-hover:grayscale-0"
                />
              </ScrollReveal>

              <ScrollReveal
                animation="zoom-in"
                delay={550}
                className="relative col-span-3 row-span-2 overflow-hidden border border-white/10 bg-zinc-950 group"
              >
                <Image
                  src="/images/t%C3%A9l%C3%A9chargement%20%282%29.jfif"
                  alt="Ambiance concert HIMRA"
                  fill
                  sizes="26vw"
                  className="object-cover grayscale contrast-125 hover-zoom-premium group-hover:scale-105 group-hover:grayscale-0"
                />
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section id="dates" className="relative z-10 border-b border-zinc-900 bg-black/[0.86] px-6 py-20 backdrop-blur-[2px] lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <ScrollReveal animation="slide-up">
                  <span className="font-mono text-xs font-black uppercase tracking-[0.24em] text-zinc-500">
                    Prochaines dates
                  </span>
                  <h2 className="mt-4 text-4xl font-black uppercase tracking-tighter sm:text-5xl">
                    <TextReveal text="Planning a confirmer" />
                  </h2>
                </ScrollReveal>
              </div>
              <ScrollReveal animation="slide-up" delay={200}>
                <p className="max-w-md text-sm leading-7 text-zinc-400">
                  Les cartes sont pretes pour les annonces officielles : date, ville, salle et lien
                  billetterie pourront etre remplaces des que les informations sont validees.
                </p>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {showCards.map((show, index) => (
                <ScrollReveal
                  key={show.city}
                  animation="slide-up"
                  delay={index * 150}
                  className="group border border-zinc-900 bg-black/70 p-4 card-premium-hover"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-zinc-950">
                    <Image
                      src={show.image}
                      alt={`Concert HIMRA ${show.city}`}
                      fill
                      sizes="(min-width: 1024px) 30vw, 90vw"
                      className="object-cover grayscale contrast-125 hover-zoom-premium group-hover:scale-105 group-hover:grayscale-0"
                    />
                    <div className="absolute left-3 top-3 bg-white px-3 py-2 font-mono text-[10px] font-black uppercase tracking-widest text-black">
                      {show.date}
                    </div>
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-5">
                    <div>
                      <h3 className="text-2xl font-black uppercase tracking-tight">{show.city}</h3>
                      <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                        {show.venue}
                      </p>
                    </div>
                    <span className="font-mono text-xs font-bold text-zinc-600">
                      [{String(index + 1).padStart(2, '0')}]
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-zinc-400">{show.status}</p>
                  <button
                    type="button"
                    disabled
                    className="mt-5 w-full border border-zinc-800 px-5 py-3 text-xs font-black uppercase tracking-widest text-zinc-500 cursor-not-allowed bg-black/30"
                  >
                    Billetterie bientot
                  </button>
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
                  Experience live
                </span>
                <h2 className="mt-4 text-4xl font-black uppercase leading-none tracking-tight sm:text-6xl">
                  <TextReveal text="Comment le show se vit" />
                </h2>
              </ScrollReveal>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
              {liveMoments.map((moment, index) => (
                <ScrollReveal
                  key={moment.title}
                  animation="slide-up"
                  delay={index * 120}
                  className="border border-zinc-900 bg-black/65 p-6 card-premium-hover"
                >
                  <span className="font-mono text-xs font-bold text-zinc-600">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-5 text-2xl font-black uppercase tracking-tight">{moment.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-zinc-400">{moment.text}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section id="booking" className="relative z-10 bg-black/[0.86] px-6 py-20 backdrop-blur-[2px] lg:px-8">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <ScrollReveal animation="slide-up">
                <span className="font-mono text-xs font-black uppercase tracking-[0.24em] text-zinc-500">
                  Infos pratiques
                </span>
                <h2 className="mt-4 text-4xl font-black uppercase leading-none tracking-tight sm:text-6xl">
                  <TextReveal text="Billets, acces, booking" />
                </h2>
              </ScrollReveal>
              <ScrollReveal animation="slide-up" delay={200}>
                <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-400">
                  Cette zone peut devenir le centre pratique de la page concerts : billetterie
                  officielle, informations salle, contacts professionnels et annonces importantes.
                </p>
              </ScrollReveal>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {practicalItems.map(([title, text], index) => (
                <ScrollReveal
                  key={title}
                  animation="zoom-in"
                  delay={index * 100}
                  className="border border-zinc-900 bg-black/65 p-5 card-premium-hover"
                >
                  <h3 className="text-xl font-black uppercase tracking-tight">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-500">{text}</p>
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
