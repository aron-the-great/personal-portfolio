import { useEffect, useState } from 'react';

type Phase = 'typing' | 'holding' | 'deleting';

type Options = {
  /** ms per character while typing. Default 65. */
  typeMs?: number;
  /** ms per character while deleting. Default 35. */
  deleteMs?: number;
  /** ms to hold each fully-typed phrase before deleting. Default 1800. */
  holdMs?: number;
  /** Pause between deleting and starting the next phrase. Default 350. */
  pauseMs?: number;
};

/**
 * Drives a cycling typewriter effect.
 * Returns the current displayed text. Render your own cursor next to it.
 *
 * Respects `prefers-reduced-motion`: returns the first phrase statically.
 */
export function useTypewriter(phrases: string[], opts: Options = {}) {
  const { typeMs = 65, deleteMs = 35, holdMs = 1800, pauseMs = 350 } = opts;

  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const [text, setText] = useState(phrases[0] ?? '');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [phase, setPhase] = useState<Phase>('holding');

  useEffect(() => {
    if (reducedMotion || phrases.length <= 1) return;

    const current = phrases[phraseIdx];
    let timer: number;

    if (phase === 'typing') {
      if (text.length < current.length) {
        timer = window.setTimeout(
          () => setText(current.slice(0, text.length + 1)),
          typeMs,
        );
      } else {
        setPhase('holding');
        return;
      }
    } else if (phase === 'holding') {
      timer = window.setTimeout(() => setPhase('deleting'), holdMs);
    } else {
      if (text.length > 0) {
        timer = window.setTimeout(() => setText(text.slice(0, -1)), deleteMs);
      } else {
        timer = window.setTimeout(() => {
          setPhraseIdx((i) => (i + 1) % phrases.length);
          setPhase('typing');
        }, pauseMs);
      }
    }

    return () => clearTimeout(timer);
  }, [text, phase, phraseIdx, phrases, typeMs, deleteMs, holdMs, pauseMs, reducedMotion]);

  return text;
}
