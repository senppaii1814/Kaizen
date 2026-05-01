import type { Locale } from '@/i18n/messages';

type SplitBlock = { pct: string; title: string; detail: string };
type BodySection = { heading: string; paragraphs: string[] };
type FAQItem = { q: string; a: string };
type FactCard = { title: string; body: string };

export type EconomicsContent = {
  eyebrow: string;
  title: string;
  lead: string;
  splitLabel: string;
  splitBlocks: SplitBlock[];
  sections: BodySection[];
  footnote: string;
};

export type SecurityContent = {
  eyebrow: string;
  title: string;
  lead: string;
  checklistIntro: string;
  checklist: string[];
  sections: BodySection[];
  closing: string;
};

export type NetworkContent = {
  eyebrow: string;
  title: string;
  lead: string;
  cards: FactCard[];
  footnote: string;
};

export type FAQContent = {
  eyebrow: string;
  title: string;
  lead: string;
  items: FAQItem[];
};

const economics: Record<Locale, EconomicsContent> = {
  en: {
    eyebrow: 'Model ·',
    title: 'How surplus is routed (design intent)',
    lead:
      'Kaizen prioritizes circulating value back through the circle stewards instead of speculative extraction. The split below mirrors how we intend public goods + operational continuity to coexist — exact parameters will be DAO-governed after mainnet cohorts stabilize.',
    splitLabel: 'Illustrative distribution',
    splitBlocks: [
      {
        pct: '74%',
        title: 'Circles reserve',
        detail: 'Default slice stays inside participant-facing vault rails — earmarked for disbursements rather than discretionary trading wallets.'
      },
      {
        pct: '16%',
        title: 'Operational continuity',
        detail: 'Pays infra, audits, multilingual support, progressive disclosure UX, and the boring compliance glue that prevents drama later.'
      },
      {
        pct: '10%',
        title: 'Public goods treasury',
        detail: 'Seeded for mutual-aid matching funds, bounty translation, steward education pilots, and open documentation.'
      }
    ],
    sections: [
      {
        heading: 'Why publish a fictive economics page?',
        paragraphs: [
          'Because trust starts with admitting what is illustrative versus what ships in production. Builders hide behind vagueness — we expose the scaffolding so your pod treasurer can crib talking points verbatim.',
          'Every percentage is movable through governance snapshots. Numbers here act as conversational defaults for workshops, Discord office hours, and investor decks where “we’ll announce later” is not acceptable.'
        ]
      },
      {
        heading: 'Cadence-aligned fees (once live)',
        paragraphs: [
          'Instead of ripping basis points silently on swaps, cohorts optionally prepay facilitator fees denominated in the same stable asset they deposit. Transparency means you compare fee drag against your chosen cadence upfront.',
          'Where gas exists, relays can be pooled so approvals remain human-scale even when signatures batch across multiple payouts.'
        ]
      }
    ],
    footnote:
      'This page is explanatory only. Custody regimes, payout flows, and tax treatment depend on finalized protocol deployment and jurisdictional posture — revisit after reading our Security memo.'
  },
  ja: {
    eyebrow: 'モデル ·',
    title: '余剰の配線（設計意向）',
    lead:
      'カイゼンは投機より先に輪の管理人たちへ資金が循環する姿勢を優先します。以下の配分は本番 DAO 統治でのパラメータのたたき台です──メインネットのコホートが安定するまで変更され得ます。',
    splitLabel: '参考イメージ',
    splitBlocks: [
      {
        pct: '74%',
        title: '輪への準備金',
        detail: '参加者向けヴォールトのレール内に寄せられる前提のウェイトです。恣意的な売買用ウォレットにはまわしません。'
      },
      {
        pct: '16%',
        title: '運用の連続性',
        detail: 'インフラ、監査・レビュー、多言語対応、「あとから揉める」順守要件を現実規模で支える層です。'
      },
      {
        pct: '10%',
        title: '公共財トレジャリー',
        detail: '相互扶助のミニ・マッチ、翻訳バウンティ、管理人教育ファイルの実験、オープンドキュメントへの種銭。'
      }
    ],
    sections: [
      {
        heading: 'なぜ「仮」の経済モデルを載せるのか',
        paragraphs: [
          'イメージ値と製品コードの間を曖昧にしないためです。司書の友人に話すとき、数字をそのまま引用できるよう骨格を読ませます。',
          '実数値はガバナンススナップショットごとに動きます。ここにあるのはワークショップ用の既定値です。'
        ]
      },
      {
        heading: '（稼働後の）キャデンス志向のフィー',
        paragraphs: [
          'スワップに忍ばせた bps に頼らず、入金するのと同じステーブルの形で準備することもあります。',
          'ガスがある場面では複数署名をまとめてリレイし、ひとつひとの承認でも人間サイズの体感に留めます。'
        ]
      }
    ],
    footnote:
      '教育的な説明にすぎません。カストディ・送金経路・税務は確定実装と法域によります。「セキュリティ」ページとの併読をお勧めします。'
  }
};

const security: Record<Locale, SecurityContent> = {
  en: {
    eyebrow: 'Risk · Stewardship ·',
    title: 'Security posture without theatre',
    lead:
      'Circles amplify human trust bugs faster than Solidity bugs. This memo lists how Kaizen stewards behave, why multisig quorum matters, and which promises we will never utter — phishing resistance first.',
    checklistIntro: 'Before every payout rehearsal, confirm:',
    checklist: [
      'Two independent communication channels verified out-of-band (Signal + email you already possessed).',
      'Approvers rotated after travel / device loss even if biometric wallets “feel safer.”',
      'Explorer links captured before escalating dispute — screenshots are hearsay.',
      '"Support" impersonations never merit seed phrases. Ever.',
      'Recovery hardware stored with different physical catastrophe exposure than originals.'
    ],
    sections: [
      {
        heading: 'Approvers ≠ celebrities',
        paragraphs: [
          'Being chosen as an approver means inheriting boredom: reading transaction calldata calmly, rejecting rushed signatures, escalating when coercion is suspected.',
          'If your circle rotates approvers silently, quorum math must update onchain simultaneously — mismatched folklore creates silent rug windows.'
        ]
      },
      {
        heading: 'Operational split: hot choreography / cold conscience',
        paragraphs: [
          'Daily treasury moves may live inside mobile-friendly smart wallets — but high-value rollover keys should converge on hardened devices or geographically distributed quorum ceremonies.',
          'Software supply-chain hygiene beats shiny dashboards: deterministic builds, reproducible attestations, and hashed release artifacts show up boring changelogs — read them.'
        ]
      },
      {
        heading: 'Legal & regulatory overlays',
        paragraphs: [
          'Nothing here waives AML/KYC expectations where they apply — Kaizen demos stay sandboxed precisely so legal teams get breathing room.',
          'When bridging onchain bookkeeping to offchain statutes, coordinate with attorneys who comprehend both DAO lore and fiduciary duty.'
        ]
      }
    ],
    closing:
      'Report suspected incidents responsibly: include chain ID, offending URL, impersonated brand string, timestamps, victim wallet fingerprints (truncated where privacy demands). Faster triage lifts everyone’s curve.'
  },
  ja: {
    eyebrow: 'リスク・管理人規範 ·',
    title: '芝居じゃなくて、セキュリティの態勢',
    lead:
      '輪が集まれば人間側の弱点が増幅します。このメモは承認者の振る舞い、定足が必要な理由、そして決してしない約束――フィッシング耐性を優先――を整理します。',
    checklistIntro: '支払いリハーサルの前に、毎回：',
    checklist: [
      '帯域外で二つの連絡手段を確認（手持ちの Signal とメール）。',
      '旅行や端末喪失のあとは承認ロールも更新――バイオメトリックスマートウォだけでは足りません。',
      '紛争前にエクスプローラの URL をタイムスタンプごと確保――スクショは十分ではありません。',
      'サポートになりすました相手へシードを渡したりはしない。',
      'バックアップ媒体は原体と別灾害圏に。',
    ],
    sections: [
      {
        heading: '承認者 ≠ インフルエンサー',
        paragraphs: [
          '読むのはログとカルラデータ――焦らせられた署名は拒否し、強要が疑われる場合は昇格させる。',
          '承認者を静かに入れ替えたときはオンライン側のクォーラム計算も同時更新しないとサイレントな窓が開きます。'
        ]
      },
      {
        heading: '熱運用／冷える良心',
        paragraphs: [
          '日常の調整はモバイル向けでも、高いロールオーバーは強化デバイスか地理分散セレモニーへ。',
          '派手ダッシュより供給鏈の衛生――ビルドの再現性とハッシュ済み資産ログを読んでください。',
        ]
      },
      {
        heading: '法と規制',
        paragraphs: [
          '適用があるところで AML／KYC を消す説明にはなりません。デモがサンドボックスにあるのは法務への猶予のためでもあります。',
          'オンとオフチェーン実務と橋渡しするときには DAO だけでなく信託の言葉も分かる専門家を挟んでください。'
        ]
      }
    ],
    closing:
      'インシデントは責任をもって報告しましょう。チェーン ID、URL、になりすましたブランド文、タイムスタンプ、（必要なら短縮した）関連アドレスを添えればトリアージが速くなり、みんなの学び曲線も上がります。'
  }
};

const network: Record<Locale, NetworkContent> = {
  en: {
    eyebrow: 'Infrastructure ·',
    title: 'What “onchain” means in Kaizen rehearsals',
    lead:
      'We borrow Ethereum’s settlement assurances plus L2 cost gravity so friend-group treasurers stop apologizing for “crypto fees.” Exact chain selection evolves — this page freezes vocabulary, not bytecode.',
    cards: [
      {
        title: 'Ethereum settlement',
        body: 'State roots eventually reconcile to Ethereum L1 security budget. Practical UX sits on rollup lanes that amortize congestion into cents, not twenties of dollars.'
      },
      {
        title: 'Stable-first deposits',
        body: 'USDC / EURC metaphors dominate examples because mujin ethos demands spendable denomination stability — speculative assets gate behind opt-in playgrounds.'
      },
      {
        title: 'Explorers & receipts',
        body: 'Block explorers behave like immutable PDF ledgers once you screenshot with URL bar visible. Teach your circle where to bookmark so panic clicks stop.'
      },
      {
        title: 'Future bridges (carefully)',
        body: 'When bridging across domains, quorum members sign explicit asset manifests — no “surprise bridged wrappers” during payout weeks.'
      }
    ],
    footnote:
      'Chain IDs / contract addresses arrive with audited deploy posts. Until then treat every address as ephemeral lab furniture unless published in our Updates feed.'
  },
  ja: {
    eyebrow: '基盤 ·',
    title: '「オンチェーン」をカイゼンの語で',
    lead:
      'イーサの決済耐性と L2 の手数料感度を借用し、「友だち輪でもガスごめん」の空気を減らします。どのチェーンを使うかは進化しますが、このページは語彙と礼儀を固定します。',
    cards: [
      {
        title: 'イーサの決済へ',
        body: '最終的に L1 に根を下ろす状態。日常はロールアップ側でガス体感を細かく砕いたUIに載せます。'
      },
      {
        title: 'ステーブル優先',
        body: 'USDC／EURC たとえ話が多いのは無尽の論理から外れにくく送れる建て付けが欲しいから。投機用資産はオプションの別室。'
      },
      {
        title: 'エクスプローラと領収',
        body: 'URL まで写したスクショは固定 PDF 並みです。輪のみんなにお気に入りの探索画面を決めさせましょう。'
      },
      {
        title: 'これからのブリッジ',
        body: '跨ぐときは定足側が資産目録に署名することを儀式化し、変なラップが支払い週に紛れないようにします。',
      }
    ],
    footnote:
      'チェーン ID／コントラクト本体は監査済みデプロイ通信でだけ信頼します。アップデートに載ってないものは研究室の備品――本番とはみなさないでください。',
  }
};

const faq: Record<Locale, FAQContent> = {
  en: {
    eyebrow: 'FAQ ·',
    title: 'Frequently argued questions',
    lead: 'Straight answers treasury stewards ask before signing their first quorum payload.',
    items: [
      {
        q: 'Is Kaizen Treasury custodial?',
        a: 'No—design intent pushes toward self-custody vaults enforced by programmable rules. Humans still shepherd UX, but keys should not converge in one hoodie pocket.'
      },
      {
        q: 'Who pays gas?',
        a: 'Relayers or pooled sponsors can abstract gas until your circle chooses otherwise. Transparency means you simulate worst-case surcharge before approving cadence shifts.'
      },
      {
        q: 'Can we pause a circle?',
        a: 'Yes, with quorum agreement and an onchain cooldown window so knee-jerk pauses cannot trap funds arbitrarily long.'
      },
      {
        q: 'Multisig of three feels slow—why?',
        a: 'Speed without witness is solo custody rebranded. Add parallel approvers for timezone coverage rather than collapsing M.'
      },
      {
        q: 'What happens if seed phrases leak?',
        a: 'Irreversible loss—rotate approvers immediately, dissolve compromised vault manifests, recreate with fresh quorum documentation.'
      },
      {
        q: 'Do contributors need passports?',
        a: 'KYC hinges on fiat ramps you choose, not onchain choreography. Keep compliance concerns explicit in onboarding copy.'
      },
      {
        q: 'Stablecoins only forever?',
        a: 'No—some pods run hybrid experiments. Default templates remain stable-first to match mujin temperament.'
      },
      {
        q: 'Analytics sell our deposit sizes?',
        a: 'No sale of granular deposit telemetry in demos. Telemetry that exists should be hashed cohort stats at most — review privacy addenda per release.'
      },
      {
        q: 'How do disputes resolve?',
        a: 'Onchain attestations freeze facts; mediation happens offchain with signed minutes referencing those hashes.'
      },
      {
        q: 'Can DAOs automate payroll out of circles?',
        a: 'Potential future module—not shipping in first cohort playbook. Separate legal review mandatory.'
      }
    ]
  },
  ja: {
    eyebrow: 'FAQ ·',
    title: 'よく揉める質問',
    lead: '初めて署名バッチを出す管理人が先にぶつける論点だけ短く並べました。',
    items: [
      {
        q: 'カスタディアルなのか？',
        a: '意図は非カストディアル──ルールできちんと縛られる自己保管に寄せます。鍵だけがひとつのポケットに集まるなら名前が変わりません。',
      },
      {
        q: 'ガスは誰が払う？',
        a: 'リレイヤやプールによる肩代わりが可能で、輪側が選べば可視化だけ残せます。ペース変更前に最悪の上乗せを読みます。'
      },
      {
        q: '輪を一時停止できる？',
        a: '定足の合意とオンチェーン冷却時間があれば。膝の条件反射だけで資金が永久凍結されないようにします。'
      },
      {
        q: '3-of-5 は遅いのでは？',
        a: '証人無しで速くするのは一人カストディの別名です。タイムゾーン用に承認ポッドを増やしましょう。'
      },
      {
        q: 'シードが流出したら？',
        a: '取り返しは基本ありません。承認線を即刻更新し、壊れたマニフェストを解体し文書ごと組み替えます。'
      },
      {
        q: '入金にはパスポートが？',
        a: 'KYC は選ぶ法定ランプ次第。オンライン儀式と切り離して書きましょう。'
      },
      {
        q: 'いつまでもステのみ？',
        a: 'いいえ――ハイブリッド試験はありえますが初期テンプレは無尽の気質へ。'
      },
      {
        q: 'データを売るか？',
        a: 'デモ粒度を売ったりはしません。統計にもハッシュ済み匿名集計に閾値を載せます。'
      },
      {
        q: '紛争処理は？',
        a: 'オンチェーンは事実停止、人の話はオフチェーンでハッシュにつなぐ議事ログ付き。',
      },
      {
        q: 'DAO ペイロールに直結させたい。',
        a: 'いずれ検討──最初のコホート台本では切り離し。法レビューを別フェーズで。'
      }
    ]
  }
};

export function getEconomics(locale: Locale): EconomicsContent {
  return economics[locale] ?? economics.en;
}
export function getSecurity(locale: Locale): SecurityContent {
  return security[locale] ?? security.en;
}
export function getNetwork(locale: Locale): NetworkContent {
  return network[locale] ?? network.en;
}
export function getFAQ(locale: Locale): FAQContent {
  return faq[locale] ?? faq.en;
}
