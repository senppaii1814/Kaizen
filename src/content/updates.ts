import type { Locale } from '@/i18n/messages';

export type UpdateEntry = { iso: string; title: string; body: string };

const updates: Record<Locale, UpdateEntry[]> = {
  en: [
    {
      iso: '2026-04-28',
      title: 'Belajar-style IA landing + guides',
      body: 'Introduced walkthrough guides, glossary, progress tracker, and changelog pages to mirror approachable tutorial sites while keeping Kaizen narratives.'
    },
    {
      iso: '2026-04-12',
      title: 'Multisig demo clarity',
      body: 'Trust section now animates approver states with calmer copy for non-technical stewards.'
    },
    {
      iso: '2026-03-30',
      title: 'Waitlist cohort notes',
      body: 'Localization for intent tags and inline disclaimer about local browser storage for the demo form.'
    }
  ],
  ja: [
    {
      iso: '2026-04-28',
      title: 'ガイド型 IA と新ページ',
      body: 'チュートリアルサイトの構成に近づけ、ガイド一覧・レッスン・用語集・進捗・アップデートを追加しました（内容はカイゼン準拠）。'
    },
    {
      iso: '2026-04-12',
      title: 'マルチシグデモの平易化',
      body: 'Trust セクションの承認状態アニメーションと文案を、技術に不慣れな管理人向けに調整。'
    },
    {
      iso: '2026-03-30',
      title: 'ウェイトリストの意図タグ',
      body: 'フォームの用途タグと、デモがローカル保存である旨の注記を日本語でも揃えました。'
    }
  ]
};

export function getUpdates(locale: Locale): UpdateEntry[] {
  return updates[locale] ?? updates.en;
}
