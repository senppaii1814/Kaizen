# Kaizen Treasury · 現代の無尽

A modern mujin. Save in circles, onchain.

Vite + React + TypeScript + Tailwind. Editorial marketing site with an inline waitlist.

```bash
npm install
npm run dev
```

## Routes

- `/` — landing (hero → problem → principles → how → trust → use-cases → waitlist)
- `/about` — short story: tradition (頼母子講), why onchain, kaizen philosophy
- Unknown paths fall back to the landing page

## i18n

- EN / JA via [`src/i18n/LocaleProvider.tsx`](src/i18n/LocaleProvider.tsx) — copy in [`src/i18n/messages.ts`](src/i18n/messages.ts)
- Switcher in the top-right nav; preference stored in `localStorage`

## Brand tokens

- Palette: `paper` · `sumi` · `oxide` (vermillion) · `gold` (ochre) · `warm` (stone) · `celadon` · `mist` · `night` — see [`tailwind.config.ts`](tailwind.config.ts)
- Latin: Fraunces (display) · Inter (ui) · JetBrains Mono (mono)
- Japanese-capable: 11 families via Google Fonts (Noto Sans/Serif JP, Zen Kaku/Maru, M PLUS Rounded 1c, Kosugi Maru, Shippori Mincho, Kaisei Decol, Yuji Syuku, Sawarabi Gothic/Mincho)

## Waitlist

Inline section on `/` (`#waitlist`). Submissions are written to `localStorage` under `kaizen-waitlist` for demo purposes — swap for a real backend before launch.
