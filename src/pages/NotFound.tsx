import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export default function NotFound() {
  return (
    <section className="pt-24 sm:pt-32">
      <Container>
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-warn">
          ERR_404 // route not found
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Off the chart
        </h1>
        <p className="mt-3 max-w-prose text-slate-400">
          This page doesn’t exist or has been moved. Re-plot a course from the home page.
        </p>
        <Link
          to="/"
          className="ring-focus mt-8 inline-flex items-center gap-2 rounded-md font-mono text-xs uppercase tracking-[0.14em] text-accent hover:text-accent-soft transition-colors"
        >
          <ArrowLeft size={14} />
          Back home
        </Link>
      </Container>
    </section>
  );
}
