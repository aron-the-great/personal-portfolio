import { type HTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

export function Tag({ className, children, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded border border-navy-800 bg-navy-900 px-2 py-0.5 font-mono text-[11px] font-medium tracking-wide text-slate-300',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
