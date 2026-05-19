import { Github, Linkedin, Mail } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { profile } from '@/data/profile';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-navy-800 py-10">
      <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-slate-500">
          &copy; {year} {profile.name} &middot; Built with React + Tailwind
        </p>
        <div className="flex items-center gap-1">
          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="ring-focus inline-flex h-9 w-9 items-center justify-center rounded-md text-slate-400 hover:text-accent hover:bg-navy-900 transition-colors"
            >
              <Linkedin size={16} />
            </a>
          )}
          {profile.github && (
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="ring-focus inline-flex h-9 w-9 items-center justify-center rounded-md text-slate-400 hover:text-accent hover:bg-navy-900 transition-colors"
            >
              <Github size={16} />
            </a>
          )}
          {profile.email && (
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="ring-focus inline-flex h-9 w-9 items-center justify-center rounded-md text-slate-400 hover:text-accent hover:bg-navy-900 transition-colors"
            >
              <Mail size={16} />
            </a>
          )}
        </div>
      </Container>
    </footer>
  );
}
