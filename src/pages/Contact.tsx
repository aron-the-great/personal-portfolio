import { Github, Linkedin, Mail } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ContactForm } from '@/components/ContactForm';
import { profile } from '@/data/profile';

type LinkItem = { label: string; href: string; icon: typeof Mail; sub?: string };

export default function Contact() {
  const links: LinkItem[] = [
    profile.email && {
      label: 'Email',
      href: `mailto:${profile.email}`,
      icon: Mail,
      sub: profile.email,
    },
    profile.linkedin && {
      label: 'LinkedIn',
      href: profile.linkedin,
      icon: Linkedin,
      sub: profile.linkedin.replace(/^https?:\/\//, ''),
    },
    profile.github && {
      label: 'GitHub',
      href: profile.github,
      icon: Github,
      sub: profile.github.replace(/^https?:\/\//, ''),
    },
  ].filter(Boolean) as LinkItem[];

  return (
    <section className="pt-12 sm:pt-16">
      <Container>
        <SectionHeading
          eyebrow="// Contact"
          title="Let’s talk"
          description="Have a role, a question, or a project? Drop a note and I’ll get back within a day or two."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          <aside className="lg:col-span-2">
            <div className="rounded-md border border-navy-800 bg-navy-900/60 p-6">
              <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-warn">
                // Or find me at
              </h3>
              <ul className="mt-5 space-y-3">
                {links.map(({ label, href, icon: Icon, sub }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noreferrer' : undefined}
                      className="ring-focus group flex items-center gap-3 rounded-md border border-transparent p-2 -m-2 transition-colors hover:border-navy-800 hover:bg-navy-900"
                    >
                      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-navy-800 bg-navy-950 text-slate-300 group-hover:border-accent/60 group-hover:text-accent transition-colors">
                        <Icon size={15} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-medium text-white">
                          {label}
                        </span>
                        {sub && (
                          <span className="block truncate font-mono text-[11px] text-slate-500">
                            {sub}
                          </span>
                        )}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
