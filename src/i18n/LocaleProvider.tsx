import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode
} from 'react';
import type { Locale } from './messages';
import { messages } from './messages';

const STORAGE_KEY = 'kaizen-locale';

function lookup(path: string, locale: Locale): unknown {
  const parts = path.split('.');
  let cur: unknown = messages[locale];
  for (const p of parts) {
    if (cur == null || typeof cur !== 'object') return undefined;
    if (Array.isArray(cur) && /^\d+$/.test(p)) {
      cur = cur[Number(p)];
      continue;
    }
    cur = (cur as Record<string, unknown>)[p];
  }
  return cur;
}

function interpolate(template: string, vars?: Record<string, string | number>): string {
  if (!vars) return template;
  let out = template;
  for (const [k, v] of Object.entries(vars)) {
    out = out.replaceAll(`{${k}}`, String(v));
  }
  return out;
}

type LocaleContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (path: string, vars?: Record<string, string | number>) => string;
  m: (typeof messages)[Locale];
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    try {
      const s = localStorage.getItem(STORAGE_KEY);
      return s === 'en' ? 'en' : 'ja';
    } catch {
      return 'ja';
    }
  });

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
    document.documentElement.lang = l === 'ja' ? 'ja' : 'en';
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === 'ja' ? 'ja' : 'en';
  }, [locale]);

  const t = useCallback(
    (path: string, vars?: Record<string, string | number>) => {
      let raw = lookup(path, locale);
      if (typeof raw !== 'string') {
        raw = lookup(path, 'en');
      }
      if (typeof raw !== 'string') return path;
      return interpolate(raw, vars);
    },
    [locale]
  );

  const value = useMemo(() => ({ locale, setLocale, t, m: messages[locale] }), [locale, setLocale, t]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useI18n(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useI18n must be used within LocaleProvider');
  return ctx;
}
