import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes, type Ref } from 'react';
import { cn } from '@/lib/cn';

export type ButtonVariant = 'primary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 rounded-md font-medium ring-focus transition-colors duration-200 ease-out disabled:opacity-50 disabled:cursor-not-allowed';

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-accent text-navy-950 hover:bg-accent-soft border border-accent',
  outline:
    'border border-navy-800 text-slate-100 hover:border-accent/60 hover:text-accent hover:bg-accent/5',
  ghost:
    'text-slate-300 hover:text-accent hover:bg-accent/5',
};

const sizes: Record<ButtonSize, string> = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-6 text-base',
};

export function buttonClasses({
  variant = 'primary',
  size = 'md',
  className,
}: { variant?: ButtonVariant; size?: ButtonSize; className?: string } = {}) {
  return cn(base, variants[variant], sizes[size], className);
}

type StyleProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

type AsButton = { as?: 'button' } & ButtonHTMLAttributes<HTMLButtonElement>;
type AsAnchor = { as: 'a' } & AnchorHTMLAttributes<HTMLAnchorElement>;
export type ButtonOrLinkProps = StyleProps & (AsButton | AsAnchor);

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonOrLinkProps>(
  function Button(props, ref) {
    const { variant, size, className, ...rest } = props as StyleProps & {
      className?: string;
      as?: 'a' | 'button';
    } & Record<string, unknown>;
    const cls = buttonClasses({ variant, size, className });
    const { as, ...domProps } = rest;
    if (as === 'a') {
      return (
        <a
          ref={ref as Ref<HTMLAnchorElement>}
          className={cls}
          {...(domProps as AnchorHTMLAttributes<HTMLAnchorElement>)}
        />
      );
    }
    return (
      <button
        ref={ref as Ref<HTMLButtonElement>}
        className={cls}
        {...(domProps as ButtonHTMLAttributes<HTMLButtonElement>)}
      />
    );
  },
);
