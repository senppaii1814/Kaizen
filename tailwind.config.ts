import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#DEDBC8',
        paper: '#E1E0CC',
        sumi: '#000000',
        warm: '#9A9A8F',
        oxide: '#DEDBC8',
        gold: '#B8973A',
        mist: '#212121',
        night: '#101010'
      },
      fontFamily: {
        display: ['Almarai', 'system-ui', 'sans-serif'],
        ui: ['Almarai', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        'jp-sans': ['"Noto Sans JP"', 'Almarai', 'sans-serif'],
        'jp-serif': ['"Instrument Serif"', '"Noto Serif JP"', 'serif'],
        'jp-yuji': ['"Noto Sans JP"', 'Almarai', 'sans-serif'],
        'jp-sawarabi-m': ['"Noto Sans JP"', 'Almarai', 'sans-serif'],
        'jp-sawarabi-g': ['"Noto Sans JP"', 'Almarai', 'sans-serif'],
        'jp-kosugi': ['"Noto Sans JP"', 'Almarai', 'sans-serif'],
        'jp-kaisei': ['"Noto Serif JP"', '"Instrument Serif"', 'serif'],
        'jp-shippori': ['"Noto Serif JP"', '"Instrument Serif"', 'serif'],
        'jp-zen-maru': ['"Noto Sans JP"', 'Almarai', 'sans-serif']
      },
      transitionDuration: {
        kaizen: '280ms'
      },
      transitionTimingFunction: {
        kaizen: 'cubic-bezier(0.22, 1, 0.36, 1)'
      },
      maxWidth: {
        reading: '42rem'
      }
    }
  },
  plugins: []
} satisfies Config;
