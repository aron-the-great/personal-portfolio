import { ArrowUpRight, Github, Lock, Unlink, Wrench } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Tag } from '@/components/ui/Tag';
import type { Project } from '@/data/projects';

type ReadoutColor = 'warn' | 'accent';

function Readout({
  label,
  body,
  color = 'warn',
}: {
  label: string;
  body: string;
  color?: ReadoutColor;
}) {
  const labelColor = color === 'accent' ? 'text-accent/90' : 'text-warn/90';
  const bodyColor = color === 'accent' ? 'text-slate-200' : 'text-slate-400';
  return (
    <div>
      <div
        className={`font-mono text-[10px] font-semibold uppercase tracking-[0.18em] ${labelColor}`}
      >
        // {label}
      </div>
      <p className={`mt-1 text-sm leading-relaxed ${bodyColor}`}>{body}</p>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const isConfidential = project.confidential === true;
  const isInProgress = project.inProgress === true;
  const isUnlinked = project.unlinked === true;
  const primary = isConfidential || isUnlinked ? undefined : project.demoUrl ?? project.repoUrl;

  return (
    <Card className="flex h-full flex-col">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold tracking-tight text-white group-hover:text-accent transition-colors">
          {primary ? (
            <a
              href={primary}
              target="_blank"
              rel="noreferrer"
              className="ring-focus inline-flex items-center gap-1.5 rounded-md"
            >
              {project.title}
              <ArrowUpRight
                size={16}
                className="text-slate-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
              />
            </a>
          ) : (
            project.title
          )}
        </h3>

        {isConfidential ? (
          <span
            className="inline-flex shrink-0 items-center gap-1 rounded border border-warn/40 bg-warn/10 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-warn/90"
            title="This project is not publicly shareable. Details available on request."
          >
            <Lock size={11} />
            {project.confidentialLabel ?? 'Confidential'}
          </span>
        ) : isInProgress ? (
          <span
            className="inline-flex shrink-0 items-center gap-1 rounded border border-warn-soft/40 bg-warn-soft/10 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-warn-soft"
            title="This project is still under active development."
          >
            <Wrench size={11} />
            {project.inProgressLabel ?? 'In Progress'}
          </span>
        ) : isUnlinked ? (
          <span
            className="inline-flex shrink-0 items-center gap-1 rounded border border-navy-700 bg-navy-800/60 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-slate-400"
            title="No public link is shared for this project."
          >
            <Unlink size={11} />
            {project.unlinkedLabel ?? 'Unlinked'}
          </span>
        ) : (
          project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} source on GitHub`}
              className="ring-focus shrink-0 rounded-md p-1 text-slate-500 hover:text-accent transition-colors"
            >
              <Github size={16} />
            </a>
          )
        )}
      </div>

      <div className="mt-4 flex-1 space-y-3">
        <Readout label="Purpose" body={project.purpose} />
        <Readout label="What I did" body={project.contribution} />
        <Readout label="Impact" body={project.impact} color="accent" />
      </div>

      {project.tags.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      )}
    </Card>
  );
}
