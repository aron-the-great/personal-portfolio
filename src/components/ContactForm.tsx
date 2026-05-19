import { useState, type FormEvent } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/cn';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const inputBase =
  'block w-full rounded-md border border-navy-800 bg-navy-900/60 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 transition-colors focus:border-accent/60 focus:bg-navy-900 ring-focus';

const labelBase =
  'mb-1.5 block font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400';

function isValidEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

export function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg(null);

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus('error');
      setErrorMsg('Please fill in all fields.');
      return;
    }
    if (!isValidEmail(email)) {
      setStatus('error');
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    if (!endpoint) {
      setStatus('error');
      setErrorMsg(
        'Form endpoint not configured. Set VITE_FORMSPREE_ENDPOINT in .env to enable submissions.',
      );
      return;
    }

    setStatus('submitting');

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });
      if (res.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        const data = await res.json().catch(() => null);
        setStatus('error');
        setErrorMsg(data?.errors?.[0]?.message ?? 'Submission failed. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please try again.');
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      {/* Honeypot for spam — Formspree convention */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelBase}>
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={status === 'submitting'}
            className={inputBase}
            placeholder="Jane Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className={labelBase}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === 'submitting'}
            className={inputBase}
            placeholder="jane@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelBase}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={status === 'submitting'}
          className={cn(inputBase, 'resize-y min-h-32')}
          placeholder="What’s on your mind?"
        />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <Button type="submit" disabled={status === 'submitting'} size="md">
          {status === 'submitting' ? 'Transmitting…' : 'Send message'}
          <Send size={14} />
        </Button>

        {status === 'success' && (
          <p className="inline-flex items-center gap-2 text-sm text-accent" role="status">
            <CheckCircle2 size={16} /> Thanks — I’ll get back to you soon.
          </p>
        )}
        {status === 'error' && errorMsg && (
          <p className="inline-flex items-center gap-2 text-sm text-warn" role="alert">
            <AlertCircle size={16} /> {errorMsg}
          </p>
        )}
      </div>
    </form>
  );
}
