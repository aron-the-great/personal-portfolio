import { type HTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'group relative rounded-md border border-navy-800 bg-navy-900/60 p-6',
        'transition-colors duration-200 ease-out',
        'hover:border-accent/50 hover:bg-navy-850/80',
        className,
      )}
      {...props}
    />
  );
}
