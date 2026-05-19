import { useMemo, useState } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import { cn } from '@/lib/cn';

export default function Projects() {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.tags.forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }, []);

  const filtered = useMemo(
    () => (activeTag ? projects.filter((p) => p.tags.includes(activeTag)) : projects),
    [activeTag],
  );

  return (
    <section className="pt-12 sm:pt-16">
      <Container>
        <SectionHeading
          eyebrow="// Projects"
          title="Things I’ve built"
          description="Side projects, coursework, and internship work."
        />

        {/* Tag filter */}
        <div className="mt-8 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTag(null)}
            className={cn(
              'ring-focus rounded-md border px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-wider transition-colors',
              activeTag === null
                ? 'border-accent/60 bg-accent/10 text-accent'
                : 'border-navy-800 text-slate-400 hover:border-navy-700 hover:text-slate-200',
            )}
          >
            All
          </button>
          {allTags.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTag(t === activeTag ? null : t)}
              className={cn(
                'ring-focus rounded-md border px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-wider transition-colors',
                activeTag === t
                  ? 'border-accent/60 bg-accent/10 text-accent'
                  : 'border-navy-800 text-slate-400 hover:border-navy-700 hover:text-slate-200',
              )}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-12 text-center font-mono text-xs uppercase tracking-[0.12em] text-slate-500">
            No projects match this filter yet.
          </p>
        )}
      </Container>
    </section>
  );
}
