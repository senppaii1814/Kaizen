import type { Locale } from '@/i18n/messages';

export type GuideSlug =
  | 'forming-a-circle'
  | 'deposit-rhythm'
  | 'ledger-milestones'
  | 'multisig-payouts'
  | 'wallet-stewardship'
  | 'explore-use-cases';

export type GuideLevel = 'beginner' | 'intermediate';

export type GuideStep = {
  title: string;
  readMin: number;
  bullets: string[];
  body: string;
};

export type GuideDoc = {
  slug: GuideSlug;
  title: string;
  deck: string;
  category: string;
  level: GuideLevel;
  free: boolean;
  isNew?: boolean;
  durationMin: number;
  rating: string;
  steps: GuideStep[];
};

const guides: Record<GuideSlug, Record<Locale, GuideDoc>> = {
  'forming-a-circle': {
    en: {
      slug: 'forming-a-circle',
      title: 'Start a treasury circle from scratch',
      deck:
        'Name the savings goal, choose cadence (weekly or monthly), set caps, and lock in an M-of-N approver pool before anyone sends funds. Built for small groups new to shared onchain savings.',
      category: 'Setup',
      level: 'beginner',
      free: true,
      isNew: true,
      durationMin: 16,
      rating: '4.9',
      steps: [
        {
          title: 'What is a mujin-style circle on Kaizen?',
          readMin: 4,
          bullets: ['Shared intent, neutral ledger', 'Rules before deposits', 'Stables-first stance'],
          body:
            'A mujin-, ROSCA-inspired circle pools small contributions toward one visible goal.\nKaizen is designed so the ledger and payout rules exist before liquidity — lowering “one person holds everything” risk.\nWe bias toward stablecoin goals so speculation does not creep into ritual savings.'
        },
        {
          title: 'Name the vault and boundaries',
          readMin: 3,
          bullets: ['Plain-language goal title', 'Min / max cohort size', 'Contribution cap per period'],
          body:
            'Pick a readable title everyone will recognize in notifications.\nDecide inclusive limits: typically 3–50 participants, cadence weekly or monthly, and per-person ceilings that feel safe for friendships or clubs.'
        },
        {
          title: 'Choose M-of-N approvers thoughtfully',
          readMin: 4,
          bullets: ['M ≤ N stewards', 'Geography + redundancy', 'No single-bus factor'],
          body:
            'Approvers cosign payouts; they should be reachable but not centralized in one inbox.\nFavor redundancy: if two people vacation together, diversify who holds cosign duties.\nDocument who they are inside the circle before going live.'
        },
        {
          title: 'Review and collectively agree',
          readMin: 3,
          bullets: ['Read the rule pane aloud', 'Snapshot expectations', 'No deploy until signed'],
          body:
            'Walk through payout triggers, timelines, and what happens if cadence slips.\nWhen everyone aligns, Kaizen persists that manifest onchain so future disputes reference the same text — not lost chat threads.'
        },
        {
          title: 'Ready checklist before first deposit',
          readMin: 2,
          bullets: ['Contact list validated', 'Wallets communicated', 'Calendars aligned'],
          body:
            'Confirm each member can receive stablecoins on target networks.\nShare the official join link once; beware impersonation phishing that asks for seeds.\nDeposit only after approvals show “live” inside the vault UI.'
        }
      ]
    },
    ja: {
      slug: 'forming-a-circle',
      title: 'ゼロからトレジャリー輪を始める',
      deck:
        '貯める目的に名前をつけ、ペース（週次・月次）と上限を決め、誰より先に資金が動く前に M-of-N の承認者プールを固定します。共有のオンライン貯蓄に初めて触れる小さなグループ向けです。',
      category: 'セットアップ',
      level: 'beginner',
      free: true,
      isNew: true,
      durationMin: 16,
      rating: '4.9',
      steps: [
        {
          title: 'カイゼンにおける mujin／輪とは？',
          readMin: 4,
          bullets: ['共有の意志と中立の台帳', '入金より前にルール', 'ステーブル志向'],
          body:
            '輪は、ひとつの目標に向けて少額を積み重ねる儀式です。\nカイゼンでは、流動性より先に台帳と支払い条件を置き、「ひとりが全部持つ」リスクを下げます。\n投機ではなく、儀式としての貯蓄に寄せるためステーブルコインを前提にします。'
        },
        {
          title: '金庫の名前と境界を決める',
          readMin: 3,
          bullets: ['誰にでも分かるタイトル', '人数の上下限', '期間あたりの上限'],
          body:
            '通知に出る名前は短く具体的に。\n友人・サークルで無理のない範囲（例：3〜50名、週次／月次、一人あたりの上限）を決めます。'
        },
        {
          title: 'M-of-N 承認者を慎重に選ぶ',
          readMin: 4,
          bullets: ['M ≤ N の管理人', '連絡と冗長性', '単一障害点を避ける'],
          body:
            '承認者は支払いに共同署名します。旅行も一緒な二人だけに偏らないよう分散させましょう。\n誰が承認者かを、デプロイ前に輪の中で文書化します。'
        },
        {
          title: 'ルールを読み上げて合意する',
          readMin: 3,
          bullets: ['支払いトリガー', '遅延時の扱い', '署名までデプロイしない'],
          body:
            'トリガー・タイムライン・リズムを外したときの扱いを確認します。\n合意できた状態だけがオンチェーンに残り、あとからの議論は同じ条文を参照できます。'
        },
        {
          title: '初回入金前のチェックリスト',
          readMin: 2,
          bullets: ['連絡先の確認', 'ウォレットの共有', 'カレンダー'],
          body:
            'すべての参加者がステーブルを受け取れるネットであることを確認。\n招待リンクは公式のみ。シードや秘密鍵を求めるフィッシングに注意。\nUI で「公開済み」と出てからデポジットします。'
        }
      ]
    }
  },
  'deposit-rhythm': {
    en: {
      slug: 'deposit-rhythm',
      title: 'Keep rhythm with deposits',
      deck:
        'How weekly or monthly pulses become a credible ledger streak. Miss gracefully, reconcile early, and keep dignity in nudges — not spreadsheets.',
      category: 'Deposits',
      level: 'beginner',
      free: true,
      durationMin: 12,
      rating: '4.8',
      steps: [
        {
          title: 'Why rhythm beats lump sums',
          readMin: 3,
          bullets: ['Friction is the teacher', 'Streak semantics', 'Psychological fairness'],
          body:
            'Small recurring deposits emulate classic circles and keep everyone honest without surprise cliffs.\nStreak visuals stay subtle so pride works for the collective, not against laggards.'
        },
        {
          title: 'Calendar the cadence realistically',
          readMin: 3,
          bullets: ['Align with payroll days', 'Time zones explicit', 'Skip rules optional'],
          body:
            'Choose days people already think about cash flow.\nIf your circle spans continents, bake in ±24 hour grace semantics up front.'
        },
        {
          title: 'What happens after a skipped beat',
          readMin: 4,
          bullets: ['Quiet surfacing early', 'No public shaming', 'Escalation paths'],
          body:
            'Kaizen pings privately before escalating to stewards.\nDocument whether makeup deposits are encouraged or discouraged so expectations stay crisp.'
        },
        {
          title: 'Celebrate milestones without spectacle',
          readMin: 2,
          bullets: ['Milestone pings', 'Optional notes', 'Return focus to rhythm'],
          body:
            'Mark balance checkpoints with calm copy — balloons optional, seriousness not.\nMomentum should feel sustainable over quarters, not influencer hype cycles.'
        }
      ]
    },
    ja: {
      slug: 'deposit-rhythm',
      title: 'リズムで積み立てる',
      deck:
        '週次・月次の「拍」が台帳上の信頼になる理由。遅れを穏やかに浮かべ、早めに突き合わせ、尊厳を保ったリマインドへ。',
      category: '入金',
      level: 'beginner',
      free: true,
      durationMin: 12,
      rating: '4.8',
      steps: [
        {
          title: 'なぜ一括よりリズムか',
          readMin: 3,
          bullets: ['小さな摩擦が教える', 'ストリークの意味', '公平感'],
          body:
            '少額の繰り返しは古典的な輪に近く、急な負担で誠実さが壊れにくくなります。\n表示は控えめに、遅れた人を晒さない設計を意識します。'
        },
        {
          title: '現実的なカレンダー',
          readMin: 3,
          bullets: ['給日に寄せる', 'タイムゾーン', '猶予の取り決め'],
          body:
            '現金の流れを考えた曜日に置きます。\n大陸をまたぐなら、±24 時間の猶予などを最初に決めておきます。'
        },
        {
          title: '一拍抜けたあと',
          readMin: 4,
          bullets: ['早めの個別通知', '公開での恥', 'エスカレーション'],
          body:
            'まず静かに本人へ。必要なら管理人へ。\n追加入金を推奨するかどうかも文書化しておくと争いが減ります。'
        },
        {
          title: 'マイルストーンは静かに',
          readMin: 2,
          bullets: ['通知のトーン', '短いメモ', 'リズムに戻る'],
          body:
            '節目は落ち着いたコピーで。四半期で続く温度感を大事にします。'
        }
      ]
    }
  },
  'ledger-milestones': {
    en: {
      slug: 'ledger-milestones',
      title: 'Public ledger & milestones you co-author',
      deck:
        'Every deposit, approval, and payout trigger is legible onchain. Learn how milestone states move from draft → pending → released with signatures.',
      category: 'Ledger',
      level: 'beginner',
      free: true,
      isNew: true,
      durationMin: 14,
      rating: '4.85',
      steps: [
        {
          title: 'What “transparent” means here',
          readMin: 3,
          bullets: ['Hash references', 'Human summaries', 'Privacy boundaries'],
          body:
            'Participants see amounts and timing appropriate to their role while keeping personal identifiers minimal.\nWe never substitute screenshots for cryptographic receipts.'
        },
        {
          title: 'Drafting milestone releases',
          readMin: 4,
          bullets: ['Target hit vs date-based', 'Manual compassionate triggers', 'Quorum thresholds'],
          body:
            'Decide upfront whether vaults dissolve on numeric targets, calendars, or collective discretion.\nQuorum thresholds should anticipate vacations and offline periods.'
        },
        {
          title: 'Approver signatures in practice',
          readMin: 4,
          bullets: ['Cold notification hygiene', 'Timeboxed cosign cycles', 'Audit trail exports'],
          body:
            'Approvers rehearse phishing resistance: verify URL + device posture before tapping cosign.\nExports help treasurers file taxes without re-scraping chats.'
        },
        {
          title: 'Closing a circle ethically',
          readMin: 3,
          bullets: ['Surplus dispersion', 'Unclaimed dust', 'Ritual debrief optional'],
          body:
            'Document how stray cents settle and whether leftovers roll into mutual aid pools.\nA short retrospective cements relational learning.'
        }
      ]
    },
    ja: {
      slug: 'ledger-milestones',
      title: '公開台帳と、共同で決めるマイルストーン',
      deck:
        '入金・承認・解放の状態がオンチェーンで読み取れるしくみです。ドラフトから署名済みへの流れを理解します。',
      category: '台帳',
      level: 'beginner',
      free: true,
      isNew: true,
      durationMin: 14,
      rating: '4.85',
      steps: [
        {
          title: '「透明」とは何を指すか',
          readMin: 3,
          bullets: ['ハッシュ参照', '人が読む要約', 'プライバシー'],
          body:
            '役割に応じて見える金額と時刻を分け、個人識別子は最小限にします。\nスクショを暗号学的な領収書の代わりにはしません。'
        },
        {
          title: 'マイルストーンの設計',
          readMin: 4,
          bullets: ['目標額・日付・手動', '定足数', '予定外の休み'],
          body:
            '数値・カレンダー・裁量のどれで解放するかを先に決めます。\n承認者の休暇も想定して定足数を設計します。'
        },
        {
          title: '承認の実務',
          readMin: 4,
          bullets: ['通知の見分け方', '署名の期限', 'エクスポート'],
          body:
            'フィッシングに慣れる：URL と端末を確認してから署名。\n税務や記録用に台帳を書き出せます。'
        },
        {
          title: '輪を閉じるとき',
          readMin: 3,
          bullets: ['余剰の配分', 'ダスト', '振り返り'],
          body:
            '端数の扱いと、残りを相互扶助に回すかを決めておきます。短い振り返りが学びを残します。'
        }
      ]
    }
  },
  'multisig-payouts': {
    en: {
      slug: 'multisig-payouts',
      title: 'Multisig payouts without the panic chat',
      deck:
        'Translate M-of-N custody into everyday language: who signs, when reminders fire, and how disputes fall back to onchain evidence.',
      category: 'Governance',
      level: 'intermediate',
      free: true,
      durationMin: 20,
      rating: '4.75',
      steps: [
        {
          title: 'M-of-N in human terms',
          readMin: 4,
          bullets: ['Quorum vs veto', 'Rotation policies', 'Lost device contingencies'],
          body:
            'Cosigning is collaborative custody: no single human can move the vault alone.\nPlan how new approvers join and how compromised devices are rotated.'
        },
        {
          title: 'Simulation: venue deposit release',
          readMin: 5,
          bullets: ['Two-of-three flow', 'Time locks optional', 'Fallback channels'],
          body:
            'Walk through a milestone release for a trip or event fund.\nUse offchain comms only to confirm intent, never to replace signature trails.'
        },
        {
          title: 'When approvers disagree',
          readMin: 5,
          bullets: ['Cooling-off cadence', 'Community mediation', 'Final onchain vote'],
          body:
            'Disagreement is expected. Kaizen encodes cooling-off windows before irreversible sends.\nDocument who facilitates discussion when signatures stall.'
        },
        {
          title: 'Security checklist for stewards',
          readMin: 6,
          bullets: ['Hardware hygiene', 'Malware vigilance', 'Backup cosign schedules'],
          body:
            'Stewards should separate daily browsing devices from signing devices when feasible.\nShare an on-call calendar so quorum never hinges on vacation roulette.'
        }
      ]
    },
    ja: {
      slug: 'multisig-payouts',
      title: '慌たないチャットでマルチシグ解放',
      deck:
        'M-of-N のカストディを日常語に落とします。誰が署名するか、いつ催促が届くか、議論がオンチェーン証跡に戻るか。',
      category: 'ガバナンス',
      level: 'intermediate',
      free: true,
      durationMin: 20,
      rating: '4.75',
      steps: [
        {
          title: '人間語の M-of-N',
          readMin: 4,
          bullets: ['定足と拒否権', 'ローテーション', '端末紛失'],
          body:
            '共同署名は協調カストディです。\n新任・失効の手順を先に決めておきます。'
        },
        {
          title: '場所手付の解放ハンズオン',
          readMin: 5,
          bullets: ['2-of-3', 'タイムロック', '予備チャネル'],
          body:
            '旅行やイベント資金を例に、マイルストーン解放を順に確認します。\nオフチェーンは意思の確認のみ。署名の代替にはしません。'
        },
        {
          title: '承認者が割れたら',
          readMin: 5,
          bullets: ['冷却期間', '仲介', '最終の投票'],
          body:
            '対立は想定内です。不可逆な送金前に冷却ウィンドウを置きます。'
        },
        {
          title: '管理人のセキュリティ',
          readMin: 6,
          bullets: ['端末の分離', 'マルウェア', '当番表'],
          body:
            '署名用端末を分けられるなら分けます。休暇に定足が止まらないよう当番を共有します。'
        }
      ]
    }
  },
  'wallet-stewardship': {
    en: {
      slug: 'wallet-stewardship',
      title: 'Wallet stewardship for circle leaders',
      deck:
        'Phishing resistance, seed phrase myth-busting in a smart-wallet era, and guardrails when friends ask you to “just move the funds.”',
      category: 'Security',
      level: 'beginner',
      free: true,
      isNew: true,
      durationMin: 18,
      rating: '4.95',
      steps: [
        {
          title: 'Threat model for friend groups',
          readMin: 4,
          bullets: ['Impersonation DMs', 'Fake support', 'Clipboard malware'],
          body:
            'Assume attackers know your trip hashtag or Discord role.\nNo legitimate steward asks for seeds in emergencies — rotate suspicion, not empathy.'
        },
        {
          title: 'Operational separation',
          readMin: 4,
          bullets: ['Cold vs hot habits', 'Passkey realities', 'Shared devices caution'],
          body:
            'If you steward both personal degen wallets and communal treasuries, segregate bookmarks and passphrase managers.\nPasskeys simplify UX but backups still deserve physical redundancy.'
        },
        {
          title: 'Supporting non-technical members',
          readMin: 5,
          bullets: ['Screen-share etiquette', 'What never to dictate aloud', 'Local meetups vs remote'],
          body:
            'Screen shares hide URL bars — prefer sending official links asynchronously.\nNever read seeds aloud even to “trusted” auditors.'
        },
        {
          title: 'Incident playbook',
          readMin: 5,
          bullets: ['Pause signatures', 'Snapshot state', 'Notify circle template'],
          body:
            'If a steward suspects compromise, halt cosign rotations and alert the quorum using pre-shared out-of-band channels.\nPreserve explorer links before adversaries launder.'
        }
      ]
    },
    ja: {
      slug: 'wallet-stewardship',
      title: 'リーダー向けウォレットの守り方',
      deck:
        'フィッシング、スマートウォ時代の種の話、友人から「ちょっとだけ動かして」と頼られたときの境界線。',
      category: 'セキュリティ',
      level: 'beginner',
      free: true,
      isNew: true,
      durationMin: 18,
      rating: '4.95',
      steps: [
        {
          title: '友人グループの脅威モデル',
          readMin: 4,
          bullets: ['なりすまし DM', '偽サポート', 'クリップボード'],
          body:
            '旅行のハッシュタグや Discord ロールから狙われると想定。\nどんな緊急でもシードは聞かれません——疑ってかかります。'
        },
        {
          title: '運用の分離',
          readMin: 4,
          bullets: ['冷熱の習慣', 'パスキーとバックアップ', '共有端末'],
          body:
            '個人と共有金庫のブックマークやパスマネージャーを分けます。\nパスキーでも物理バックアップは検討の価値があります。'
        },
        {
          title: '非エンジニアのサポート',
          readMin: 5,
          bullets: ['画面共有の罠', '声に出してはいけないもの', 'オフラインとリモート'],
          body:
            'URL が隠れる画面共有は避け、公式リンクを非同期で送ります。\n監査名目のシード朗読もしません。'
        },
        {
          title: 'インシデント手順',
          readMin: 5,
          bullets: ['署名停止', 'スナップショット', '通知テンプレ'],
          body:
            '侵害が疑われたら署名輪番を止め、あらかじめ決めた帯域外で定足へ連絡。エクスプローラのリンクを先に保存します。'
        }
      ]
    }
  },
  'explore-use-cases': {
    en: {
      slug: 'explore-use-cases',
      title: 'Circle patterns that fit Kaizen',
      deck:
        'Trip jars, DAO pods, mutual-aid refrigerators, indie printing pools — archetypes with realistic cadences and stewardship tips.',
      category: 'Playbooks',
      level: 'intermediate',
      free: true,
      durationMin: 22,
      rating: '4.7',
      steps: [
        {
          title: 'Pick a playbook, not vibes',
          readMin: 4,
          bullets: ['Articulate scarcity', 'Name success/fail', 'Length of commitment'],
          body:
            'Borrow patterns from histories of ROSCAs: finite seasons beat infinite ambiguity.\nDecide upfront how many cycles you run before reassessing.'
        },
        {
          title: 'Friends & travel',
          readMin: 4,
          bullets: ['FX exposure', 'Shared liability comfort', 'Exit clauses'],
          body:
            'Travel funds need explicit rules for dropouts and currency volatility.\nDocument how refunds or rollovers work if someone cannot fly.'
        },
        {
          title: 'Creators & micro-budgets',
          readMin: 5,
          bullets: ['Proof of spend', 'Milestone tied to printing', 'Open books culture'],
          body:
            'Creative circles thrive when receipts are celebrated, not hidden.\nTie releases to deliverables so trust compounds with shipping.'
        },
        {
          title: 'Neighborhood mutual aid',
          readMin: 5,
          bullets: ['Anonymous optionality', 'Rotation of buyers', 'Partner org handoff'],
          body:
            'When interfacing with fridges or pantries, agree who physically shops and how surplus routes to charities.\nConsider seasonal breaks to avoid burnout.'
        },
        {
          title: 'When to graduate to other tools',
          readMin: 4,
          bullets: ['Legal wrappers', 'Tax complexity', 'Institutional counterparties'],
          body:
            'Kaizen excels at humane scale. Larger treasuries may need counsel — export history early when engaging professionals.'
        }
      ]
    },
    ja: {
      slug: 'explore-use-cases',
      title: 'カイゼンに合う輪のアーキタイプ',
      deck:
        '旅行貯金、DAO ポッド、近所の冷蔵庫、同人印刷プールなど。現実のペースと管理人のヒント。',
      category: 'プレイブック',
      level: 'intermediate',
      free: true,
      durationMin: 22,
      rating: '4.7',
      steps: [
        {
          title: '雰囲気ではなく型を選ぶ',
          readMin: 4,
          bullets: ['不足の言語化', '成功／失敗', '約束の長さ'],
          body:
            'ROSCA の知恵：有限シーズンの方が曖昧さが減ります。\n何周で見直すかを最初に決めます。'
        },
        {
          title: '友人・旅行',
          readMin: 4,
          bullets: ['為替の認識', '脱落・返金', '出国できないとき'],
          body:
            '為替や欠席時の返金／繰越を明示。飛べなくなった人への扱いを書きます。'
        },
        {
          title: 'クリエイターと小さい予算',
          readMin: 5,
          bullets: ['支出の証跡', '印刷マイルストーン', '公開の文化'],
          body:
            '領収が称賛される文化なら信頼が積み上がります。成果物と解放をリンクさせます。'
        },
        {
          title: '近所の相互扶助',
          readMin: 5,
          bullets: ['匿名性の選択', '買い物当番', '提携団体へ'],
          body:
            '誰が店に行くか、余りをどう回すか。燃え尽き防止にシーズン休みも。'
        },
        {
          title: '他ツールへの卒業タイミング',
          readMin: 4,
          bullets: ['法形式', '税の複雑さ', 'カウンターパーティ'],
          body:
            '人間サイズでの儀式に強いだけです。専門家を挟むときは履歴を早めに出力します。'
        }
      ]
    }
  }
};

export const FEATURED_GUIDE_SLUGS: GuideSlug[] = ['forming-a-circle', 'deposit-rhythm', 'ledger-milestones'];

export const NEXT_GUIDE_SLUGS: GuideSlug[] = ['multisig-payouts', 'wallet-stewardship', 'explore-use-cases'];

export const ALL_GUIDE_SLUGS = Object.keys(guides) as GuideSlug[];

export function getGuide(slug: string, locale: Locale): GuideDoc | null {
  const g = guides[slug as GuideSlug];
  if (!g) return null;
  return g[locale] ?? g.en;
}

export function guideExists(slug: string): slug is GuideSlug {
  return slug in guides;
}
