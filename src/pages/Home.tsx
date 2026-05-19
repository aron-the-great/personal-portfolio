import { Link } from 'react-router-dom';
import { ArrowRight, Download, MapPin } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button, buttonClasses } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectCard } from '@/components/ProjectCard';
import { useTypewriter } from '@/hooks/useTypewriter';
import { profile } from '@/data/profile';
import { projects } from '@/data/projects';

export default function Home() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);
  const phrases = profile.typewriter && profile.typewriter.length > 0
    ? profile.typewriter
    : [profile.name];
  const typed = useTypewriter(phrases);

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28">
        {/* Gulfstream G800 background — anchored right so the aircraft is visible beside the headline */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <img
            src={encodeURI('/Gulfstream background.jpg')}
            alt=""
            className="h-full w-full object-cover object-right opacity-80 brightness-110 contrast-110 saturate-110"
            loading="eager"
            decoding="async"
          />
          {/* Strong left-side darkening (fully solid behind text), fades to transparent over the aircraft */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 from-15% via-navy-950/70 to-transparent" />
          {/* Bottom fade into the next section */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy-950" />
        </div>
        <Container>
          <div className="max-w-3xl animate-fade-in-up">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-navy-800 bg-navy-900/60 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-slate-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-warn opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-warn" />
              </span>
              Status: Open to engineering internships
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span className="block">
                Hi, I’m{' '}
                <span className="text-accent">
                  {typed}
                  <span
                    aria-hidden
                    className="ml-0.5 inline-block w-[0.08em] text-accent animate-blink"
                  >
                    |
                  </span>
                </span>
              </span>
              <span className="mt-2 block text-slate-200">{profile.headline}</span>
            </h1>
            <span className="sr-only">Hi, I’m {profile.name}. {profile.headline}</span>

            {profile.location && (
              <p className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-slate-400">
                <MapPin size={14} className="text-accent" />
                {profile.location}
              </p>
            )}

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/projects" className={buttonClasses({ size: 'lg' })}>
                View projects
                <ArrowRight size={16} />
              </Link>
              <Button as="a" href={profile.resumeUrl} download size="lg" variant="outline">
                Download resume
                <Download size={16} />
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* About */}
      <section id="about" className="pt-24 sm:pt-32">
        <Container>
          <SectionHeading eyebrow="01 // About" title="A bit about me" />
          <div className="mt-8 grid gap-8 sm:grid-cols-[auto_1fr] sm:items-start">
            <figure className="shrink-0">
              <div className="overflow-hidden rounded-md border border-navy-800 bg-navy-900/60">
                <img
                  src="/me2.jpeg"
                  alt={`Headshot of ${profile.name}`}
                  width={256}
                  height={320}
                  className="h-64 w-52 object-cover sm:h-80 sm:w-64"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <figcaption className="mt-3">
                <div className="text-sm font-semibold text-white">
                  Aaron H. Wong{' '}
                  <span className="font-normal text-slate-300">(黃曦樂)</span>
                </div>
                <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-warn">
                  Georgia Tech ’28
                </div>
              </figcaption>
            </figure>
            <div className="grid max-w-2xl gap-4 text-base leading-relaxed text-slate-300">
              {profile.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Featured projects */}
      <section id="featured" className="pt-24 sm:pt-32">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="02 // Selected work"
              title="Featured projects"
              description="A few things I’ve built recently. The full list lives on the Projects page."
            />
            <Link
              to="/projects"
              className="ring-focus group inline-flex items-center gap-1.5 rounded-md font-mono text-xs uppercase tracking-[0.14em] text-accent hover:text-accent-soft transition-colors"
            >
              All projects
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="pt-24 sm:pt-32">
        <Container>
          <div className="rounded-md border border-navy-800 bg-navy-900/60 p-8 sm:p-12">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="max-w-xl">
                <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Need an engineer ready for liftoff?
                </h2>
                <p className="mt-2 text-slate-400">
                  I’m actively interviewing. Quickest way to reach me is the contact page.
                </p>
              </div>
              <Link to="/contact" className={buttonClasses({ size: 'lg' })}>
                Get in touch
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
