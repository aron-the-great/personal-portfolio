/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        mono: [
          '"JetBrains Mono"',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Consolas',
          'monospace',
        ],
      },
      colors: {
        // Primary accent: safety orange. Buttons, active states, focus rings, links.
        accent: {
          DEFAULT: 'rgb(var(--accent) / <alpha-value>)',
          soft: 'rgb(var(--accent-soft) / <alpha-value>)',
        },
        // Secondary accent: instrument amber. Badges, status indicators, eyebrows, timeline.
        warn: {
          DEFAULT: 'rgb(var(--warn) / <alpha-value>)',
          soft: 'rgb(var(--warn-soft) / <alpha-value>)',
        },
        // Midnight navy palette — page bg, card surfaces, borders.
        navy: {
          950: 'rgb(var(--bg) / <alpha-value>)',
          900: 'rgb(var(--surface) / <alpha-value>)',
          850: 'rgb(var(--surface-hover) / <alpha-value>)',
          800: 'rgb(var(--border) / <alpha-value>)',
          700: 'rgb(var(--border-hover) / <alpha-value>)',
        },
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.5s ease-out both',
        blink: 'blink 1s steps(2, end) infinite',
      },
    },
  },
  plugins: [],
};
