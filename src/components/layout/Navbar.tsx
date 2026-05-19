import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/cn';
import { profile } from '@/data/profile';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/projects', label: 'Projects' },
  { to: '/resume', label: 'Resume' },
  { to: '/skills', label: 'Skills' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full transition-all duration-200',
        scrolled
          ? 'border-b border-navy-800/80 bg-navy-950/80 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <NavLink
          to="/"
          className="ring-focus rounded-md text-sm font-semibold tracking-tight text-white hover:text-accent transition-colors"
        >
          {profile.shortName ?? profile.name}
          <span className="text-accent">.</span>
        </NavLink>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                cn(
                  'ring-focus relative rounded-md px-3 py-2 text-sm font-medium transition-colors',
                  isActive ? 'text-accent' : 'text-slate-300 hover:text-white',
                )
              }
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  {isActive && (
                    <span className="absolute inset-x-3 -bottom-px h-px bg-accent" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="ring-focus md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-slate-300 hover:text-accent hover:bg-navy-900 transition-colors"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </Container>

      {open && (
        <div className="md:hidden border-t border-navy-800 bg-navy-950/95 backdrop-blur-md">
          <Container className="flex flex-col gap-1 py-3">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'ring-focus rounded-md px-3 py-2 text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-accent/10 text-accent'
                      : 'text-slate-300 hover:bg-navy-900 hover:text-white',
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
          </Container>
        </div>
      )}
    </header>
  );
}
