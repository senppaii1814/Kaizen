import type { Locale } from '@/i18n/messages';

export type GlossaryCategory = { id: string; title: string; terms: { term: string; def: string }[] };

const glossary: Record<Locale, GlossaryCategory[]> = {
  en: [
    {
      id: 'circle',
      title: 'Circles & Ritual',
      terms: [
        { term: 'Mujin', def: 'Japanese rotating savings association; inspiration for transparent group pools.' },
        { term: 'ROSCA', def: 'Rotating savings and credit association — a global pattern for collective saving.' },
        { term: 'Cadence', def: 'Repeating schedule (weekly, monthly, custom) for deposits into a shared vault.' },
        { term: 'Milestone', def: 'Onchain condition (target amount, date, or manual) that unlocks a payout path.' }
      ]
    },
    {
      id: 'chain',
      title: 'Chain concepts',
      terms: [
        { term: 'Stablecoin', def: 'Crypto token designed to track fiat (e.g., USDC) for calmer shared goals.' },
        { term: 'Onchain', def: 'Recorded on a public blockchain anyone can verify.' },
        { term: 'Explorer', def: 'Website to read transactions, addresses, and contract state.' },
        { term: 'Gas', def: 'Network fee to process a transaction — often small on L2 versus L1.' },
        { term: 'DAO', def: 'Community where rules and treasuries often run through smart contracts.' }
      ]
    },
    {
      id: 'custody',
      title: 'Custody & security',
      terms: [
        { term: 'Multisig · M-of-N', def: 'Wallet that needs M signatures out of N guardians to move funds.' },
        { term: 'Approver', def: 'Trusted cosigner for Kaizen milestone releases.' },
        { term: 'Seed phrase', def: 'Sensitive words that recover a wallet — never share or screenshot.' },
        { term: 'Smart wallet', def: 'Contract-based account with features like passkeys; still needs recovery hygiene.' },
        { term: 'Phishing', def: 'Fake links or support agents meant to steal credentials.' }
      ]
    },
    {
      id: 'culture',
      title: 'Culture',
      terms: [
        { term: 'DYOR', def: 'Do Your Own Research — Kaizen is educational, not personalized financial advice.' },
        { term: 'Quiet progress', def: 'Small, continuous improvements rather than hype-cycle marketing.' },
        { term: 'Kaizen (改善)', def: 'Continuous incremental betterment; posture of the protocol story.' }
      ]
    }
  ],
  ja: [
    {
      id: 'circle',
      title: '輪と儀式',
      terms: [
        { term: '無尽・頼母子講', def: '輪番式の貯蓄の日本の型。透明な共有プールの参照モデル。' },
        { term: 'ROSCA', def: '世界中にあるローテーション式の貯蓄・融資の組合型。' },
        { term: 'キャデンス', def: '共有金庫への入金ペース（毎週・毎月・カスタム）。' },
        { term: 'マイルストーン', def: '目標額・日付・手動など、支払い経路を開く条件。' }
      ]
    },
    {
      id: 'chain',
      title: 'チェーンの基礎',
      terms: [
        { term: 'ステーブルコイン', def: 'ドルなどに近い価値を狙うトークン（例：USDC）。' },
        { term: 'オンチェーン', def: '誰でも検証できる公開ブロックチェーン上の記録。' },
        { term: 'エクスプローラ', def: '送金やアドレスの状態を読むブラウザツール。' },
        { term: 'ガス', def: 'トランザクションを処理するネット手数料。L2 では L1 より小さくなりがち。' },
        { term: 'DAO', def: 'スマートコントラクトでルールや金庫を回すコミュニティ。' }
      ]
    },
    {
      id: 'custody',
      title: 'カストディと安全',
      terms: [
        { term: 'マルチシグ（M-of-N）', def: 'N 人中 M 人の署名で資金を動かす設計。' },
        { term: '承認者', def: 'マイルストーン解放に共同署名する管理人。' },
        { term: 'シード／リカバリフレーズ', def: 'ウォレット復元用の単語列。共有・スクショ厳禁。' },
        { term: 'スマートウォレット', def: 'コントラクトアカウント。パスキーでもバックアップ設計は必要。' },
        { term: 'フィッシング', def: '公式を装い資格情報を盗む攻撃。' }
      ]
    },
    {
      id: 'culture',
      title: '文化・姿勢',
      terms: [
        { term: 'DYOR', def: '自分で調べること。当サイトは教育であり個別の投資助言ではありません。' },
        { term: '静かな前進', def: 'ハイプではなく、続く小さな改善。' },
        { term: '改善（カイゼン）', def: '継続的で小さな改良。プロダクトの姿勢としての語。' }
      ]
    }
  ]
};

export function getGlossary(locale: Locale): GlossaryCategory[] {
  return glossary[locale] ?? glossary.en;
}
