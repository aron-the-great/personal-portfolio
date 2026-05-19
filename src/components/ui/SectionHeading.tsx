import { type ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({ eyebrow, title, description, className, align = 'left' }: Props) {
  return (
    <div className={cn(align === 'center' && 'text-center mx-auto', 'max-w-2xl', className)}>
      {eyebrow && (
        <div className="mb-3 inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-warn">
          <span className="h-px w-6 bg-warn/70" />
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base leading-relaxed text-slate-400">{description}</p>
      )}
    </div>
  );
}
