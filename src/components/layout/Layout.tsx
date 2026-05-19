import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);

  return (
    <div className="relative min-h-screen bg-navy-950 text-slate-50">
      {/* Drafting-paper grid backdrop — fixed so it doesn't scroll with content */}
      <div
        aria-hidden
        className="bg-blueprint pointer-events-none fixed inset-0 -z-20"
      />
      {/* Subtle radar bloom at the top — orange instrument glow */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-[55vh] bg-[radial-gradient(55%_45%_at_50%_0%,rgba(249,115,22,0.08),transparent_70%)]"
      />
      {/* Soft vignette to settle the edges */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(120%_80%_at_50%_50%,transparent_40%,rgba(10,16,32,0.6)_100%)]"
      />

      <Navbar />
      <main className="pt-8 sm:pt-12">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
