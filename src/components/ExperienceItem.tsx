import { Tag } from '@/components/ui/Tag';
import type { WorkExperience } from '@/data/experience';

export function ExperienceItem({ item }: { item: WorkExperience }) {
  return (
    <li className="relative pl-8">
      <span
        aria-hidden
        className="absolute left-0 top-2 h-3 w-3 rounded-full border-2 border-warn bg-navy-950"
      />
      <span aria-hidden className="absolute left-[5px] top-5 bottom-[-2rem] w-px bg-navy-800" />

      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-base font-semibold text-white">
          {item.role}
          <span className="text-slate-400 font-normal"> · {item.company}</span>
        </h3>
        <span className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-warn/90">
          {item.start} – {item.end}
        </span>
      </div>
      {item.location && (
        <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.12em] text-slate-500">
          {item.location}
        </p>
      )}

      <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-slate-300">
        {item.bullets.map((b, i) => (
          <li key={i} className="relative pl-4">
            <span
              aria-hidden
              className="absolute left-0 top-2 h-1 w-1 rounded-full bg-accent"
            />
            {b}
          </li>
        ))}
      </ul>

      {item.tags && item.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {item.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      )}
    </li>
  );
}
