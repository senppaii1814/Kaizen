import { useId, useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, Loader2 } from 'lucide-react';
import { useI18n } from '@/i18n/LocaleProvider';

const STORAGE_KEY = 'kaizen-waitlist';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Entry = {
  email: string;
  name: string;
  intent: string;
  locale: string;
  ts: number;
};

function storeEntry(entry: Entry) {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const list: Entry[] = raw ? JSON.parse(raw) : [];
    list.push(entry);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  } catch {
    /* ignore */
  }
}

export function Waitlist() {
  const { t, m, locale } = useI18n();
  const intents = m.waitlist.intentOptions;

  const emailId = useId();
  const nameId = useId();
  const intentId = useId();
  const errorId = useId();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [intent, setIntent] = useState(intents[0]?.id ?? 'friends');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done'>('idle');
  const [error, setError] = useState<string | null>(null);

  function reset() {
    setEmail('');
    setName('');
    setIntent(intents[0]?.id ?? 'friends');
    setStatus('idle');
    setError(null);
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.trim()) {
      setError(t('waitlist.errorRequired'));
      return;
    }
    if (!EMAIL_RE.test(email.trim())) {
      setError(t('waitlist.errorEmail'));
      return;
    }
    setError(null);
    setStatus('submitting');
    await new Promise(r => setTimeout(r, 550));
    storeEntry({
      email: email.trim(),
      name: name.trim(),
      intent,
      locale,
      ts: Date.now()
    });
    setStatus('done');
  }

  return (
    <section id="waitlist" className="page-section border-b border-warm/15">
      <div className="page-container grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-14">
        <div className="min-w-0">
          <p className="section-label">{t('waitlist.eyebrow')}</p>
          <h2 className="mt-6 font-display text-3xl leading-[1.1] tracking-tight text-sumi sm:text-4xl">{t('waitlist.title')}</h2>
          <p className="mt-5 max-w-md font-jp-sawarabi-m text-sm leading-relaxed text-warm">{t('waitlist.lead')}</p>
        </div>

        <div className="card-paper relative min-w-0 rounded-3xl border border-warm/20 bg-paper p-8 sm:p-10">
          <AnimatePresence mode="wait" initial={false}>
            {status !== 'done' ? (
              <motion.form
                key="form"
                onSubmit={onSubmit}
                noValidate
                initial={false}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-6"
                aria-describedby={error ? errorId : undefined}
              >
                <label htmlFor={emailId} className="block font-ui text-sm">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-warm">
                    {t('waitlist.emailLabel')}
                  </span>
                  <input
                    id={emailId}
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder={t('waitlist.emailPlaceholder')}
                    aria-invalid={error ? true : undefined}
                    className="focus-ring mt-2 w-full rounded-xl border border-warm/30 bg-paper px-4 py-3 font-ui text-sumi placeholder-warm/60 transition focus:border-oxide focus:outline-none"
                  />
                </label>

                <label htmlFor={nameId} className="block font-ui text-sm">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-warm">
                    {t('waitlist.nameLabel')}
                  </span>
                  <input
                    id={nameId}
                    type="text"
                    autoComplete="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder={t('waitlist.namePlaceholder')}
                    className="focus-ring mt-2 w-full rounded-xl border border-warm/30 bg-paper px-4 py-3 font-ui text-sumi placeholder-warm/60 transition focus:border-oxide focus:outline-none"
                  />
                </label>

                <label htmlFor={intentId} className="block font-ui text-sm">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-warm">
                    {t('waitlist.intentLabel')}
                  </span>
                  <select
                    id={intentId}
                    value={intent}
                    onChange={e => setIntent(e.target.value)}
                    className="focus-ring mt-2 w-full rounded-xl border border-warm/30 bg-paper px-4 py-3 font-ui text-sumi transition focus:border-oxide focus:outline-none"
                  >
                    {intents.map(opt => (
                      <option key={opt.id} value={opt.id}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </label>

                {error && (
                  <p id={errorId} role="alert" className="font-mono text-xs text-red-900">
                    {error}
                  </p>
                )}

                <div className="flex flex-wrap items-center gap-4">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="focus-ring group inline-flex items-center gap-3 rounded-full bg-oxide px-6 py-3.5 font-ui text-sm font-medium text-paper transition duration-kaizen ease-kaizen hover:brightness-95 disabled:opacity-70"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                        {t('waitlist.submitting')}
                      </>
                    ) : (
                      <>
                        {t('waitlist.submit')}
                        <ArrowRight className="h-4 w-4 transition-transform duration-kaizen group-hover:translate-x-0.5" aria-hidden />
                      </>
                    )}
                  </button>
                  <p className="font-mono text-[11px] text-warm">
                    demo · stored locally in your browser
                  </p>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="done"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-6"
                role="status"
                aria-live="polite"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/55 bg-gold/10 text-sumi">
                  <Check className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <h3 className="font-display text-2xl text-sumi">{t('waitlist.successTitle')}</h3>
                  <p className="mt-3 max-w-md font-jp-kosugi text-sm leading-relaxed text-warm">
                    {t('waitlist.successBody')}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={reset}
                  className="focus-ring inline-flex w-fit items-center gap-2 rounded-full border border-warm/30 px-5 py-2.5 font-ui text-sm text-sumi transition duration-kaizen ease-kaizen hover:border-oxide hover:text-oxide"
                >
                  {t('waitlist.successAgain')}
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
