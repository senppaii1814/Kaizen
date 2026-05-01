export type Locale = 'en' | 'ja';

export type UseCaseSegment = 'friends' | 'creators' | 'daos' | 'fans' | 'neighborhoods' | 'teams';

type Messages = {
  meta: {
    brand: string;
    kanji: string;
    tagline: string;
  };
  nav: {
    home: string;
    about: string;
    join: string;
    guides: string;
    glossary: string;
    progress: string;
    updates: string;
    economics: string;
    security: string;
    network: string;
    faq: string;
  };
  site: {
    badge: string;
    heroLine1: string;
    heroAccent: string;
    heroLead: string;
    primaryCta: string;
    primaryCtaFoot: string;
    chips: string[];
    metricsLabel: string;
    metrics: { value: string; label: string }[];
    /** Illustrative rehearsal counters — animated on the home band */
    liveStatsEyebrow: string;
    liveStats: { n: number; prefix: string; suffix: string; label: string }[];
    liveActivityTitle: string;
    liveActivityLines: string[];
    dyor: string;
    featuredLabel: string;
    featuredTitle: string;
    featuredLead: string;
    viewAll: string;
    secondaryLabel: string;
    secondaryTitle: string;
    secondaryLead: string;
    whyLabel: string;
    whyTitle: string;
    whyLead: string;
    whyBullets: { title: string; body: string }[];
    toolkitLabel: string;
    toolkitTitle: string;
    toolkitLead: string;
    toolkitCards: {
      title: string;
      body: string;
      href: string;
      ctaNavKey: 'glossary' | 'progress' | 'updates' | 'economics' | 'security' | 'network' | 'faq';
    }[];
    finalTitle: string;
    finalLead: string;
    finalSecondaryCta: string;
    guideLabels: {
      free: string;
      new: string;
      beginner: string;
      intermediate: string;
      stepsWord: string;
      minWord: string;
    };
    landing: {
      heroEyebrow: string;
      heroLead: string;
      heroCta: string;
      heroWordJa: string;
      aboutEyebrow: string;
      aboutAnimatedParagraph: string;
      aboutSegments: { text: string; variant: 'body' | 'jpItalic' | 'enItalic' }[];
      featuresSegments: { text: string; variant: 'primary' | 'muted' }[];
      featureVideoCaption: string;
      featureLearnMore: string;
      featureCards: { title: string; items: string[] }[];
      waitlistEyebrow: string;
      waitlistTitle: string;
      waitlistLead: string;
      waitlistCta: string;
    };
  };
  shellSubtitleJa: {
    about: string;
    guidesIndex: string;
    lesson: string;
    glossary: string;
    progress: string;
    updates: string;
    economics: string;
    security: string;
    network: string;
    faq: string;
    notFound: string;
  };
  guidesIndex: {
    title: string;
    lead: string;
    openGuide: string;
  };
  lessonPage: {
    breadcrumbHome: string;
    breadcrumbGuides: string;
    backToList: string;
    progressTitle: string;
    stepDone: string;
    nextGuide: string;
    learnSteps: string;
    tldr: string;
    feedbackBlurb: string;
    earlyAccessNoteTitle: string;
    earlyAccessNoteBody: string;
    stepOfTotal: string;
    minRead: string;
    continueNext: string;
  };
  glossaryPage: {
    title: string;
    lead: string;
    allCategories: string;
    metaLine: string;
  };
  progressPage: {
    title: string;
    lead: string;
    empty: string;
    openGuide: string;
    complete: string;
  };
  updatesPage: {
    title: string;
    lead: string;
  };
  notFound: {
    title: string;
    lead: string;
    home: string;
    guides: string;
  };
  marquee: {
    items: string[];
  };
  hero: {
    eyebrow: string;
    title: string;
    titleEmphasis: string;
    subtitle: string;
    lead: string;
    emailLabel: string;
    emailPlaceholder: string;
    cta: string;
    secondaryCta: string;
    inlineNote: string;
    demoLabel: string;
    demoBalance: string;
    demoTarget: string;
    stats: { label: string; value: string }[];
  };
  problem: {
    eyebrow: string;
    title: string;
    lead: string;
    cards: { title: string; body: string }[];
  };
  principles: {
    eyebrow: string;
    title: string;
    items: { kanji: string; romaji: string; title: string; body: string }[];
  };
  how: {
    eyebrow: string;
    title: string;
    lead: string;
    closing: string;
    steps: { n: string; title: string; body: string }[];
  };
  trust: {
    eyebrow: string;
    title: string;
    lead: string;
    bullets: string[];
    demoLabel: string;
    demoTitle: string;
    demoMeta: string;
    demoFoot: string;
  };
  useCases: {
    eyebrow: string;
    title: string;
    lead: string;
    cardBadge: string;
    items: { segment: UseCaseSegment; label: string; example: string }[];
  };
  waitlist: {
    eyebrow: string;
    title: string;
    lead: string;
    emailLabel: string;
    emailPlaceholder: string;
    nameLabel: string;
    namePlaceholder: string;
    intentLabel: string;
    intentOptions: { id: string; label: string }[];
    submit: string;
    submitting: string;
    errorRequired: string;
    errorEmail: string;
    successTitle: string;
    successBody: string;
    successAgain: string;
  };
  footer: {
    tagline: string;
    sections: { title: string; links: { label: string; href: string }[] }[];
    disclaimer: string;
  };
  about: {
    eyebrow: string;
    title: string;
    lead: string;
    sections: { kanji: string; heading: string; body: string }[];
    close: string;
    closeLink: string;
  };
};

export const messages: Record<Locale, Messages> = {
  en: {
    meta: {
      brand: 'Kaizen Treasury',
      kanji: '改善',
      tagline: 'Save together. Improve together.'
    },
    nav: {
      home: 'Home',
      about: 'About',
      join: 'Join',
      guides: 'Guides',
      glossary: 'Glossary',
      progress: 'Progress',
      updates: 'Updates',
      economics: 'Economics',
      security: 'Security',
      network: 'Network',
      faq: 'FAQ'
    },
    site: {
      badge: 'Kaizen Treasury · Guided walkthroughs',
      heroLine1: 'Save together. Improve together.',
      heroAccent: 'A community savings circle, rebuilt onchain.',
      heroLead:
        'Step-by-step guides for small groups — shared vaults, transparent ledgers, milestone payouts, and M-of-N approvals. Calm pacing for newcomers and stewards (EN / JA).',
      primaryCta: 'Join the waitlist',
      primaryCtaFoot: 'No wallet needed for waitlist demo · cohorts invite-only.',
      chips: ['Circles-first', 'Stable discourse', 'Dyor reminders', 'Frequent refreshed copy'],
      metricsLabel: 'In numbers·',
      metrics: [
        { value: '100%', label: 'Guides bilingual' },
        { value: '86', label: 'Practice substeps drafted' },
        { value: '0', label: 'Paywalls (yet)' },
        { value: 'L2', label: 'Mindset-first' }
      ],
      liveStatsEyebrow: 'Rehearsal counters (illustrative) ·',
      liveStats: [
        { n: 3840, prefix: '~', suffix: '', label: 'Guide opens · rolling 28d demo window' },
        { n: 127, prefix: '', suffix: '', label: 'Sandbox pods rehearsing steps' },
        { n: 2, prefix: '', suffix: '', label: 'Locales published on this site' },
        { n: 94, prefix: '', suffix: '%', label: 'Avg. checklist depth when progress is on' }
      ],
      liveActivityTitle: 'Synthetic steward feed ·',
      liveActivityLines: [
        'Pod kyoto-bridge · simulation · 3-of-5 signatures queued for milestone 2',
        'Approvers rotated after travel · cooldown window 18h · explorer receipts pinned',
        'Translation bounty · JA glossary diff merged · steward office hours Thu 20:00 JST',
        'Fee rehearsal · stable cadence · worst-case surcharge documented in Economics memo',
        'Incident drill · impersonation URL logged · no seed phrases shared · closed in 12m'
      ],
      dyor:
        'DYOR — Educational content only, not financial advice. Custody carries risk and onchain transfers are irreversible. Verify everything with your jurisdiction and counsel.',
      featuredLabel: 'Starter paths',
      featuredTitle: 'Most popular guides',
      featuredLead: 'Core modules anyone forming a treasury circle should skim once.',
      viewAll: 'View all guides',
      secondaryLabel: 'Next ·',
      secondaryTitle: 'After the basics · go deeper',
      secondaryLead: 'Approver psychology, stewardship, and playbook patterns for DAO pods or mutual aid.',
      whyLabel: 'Why these guides?',
      whyTitle: 'Structured like Belajar-style tutorials',
      whyLead: 'Friendly sequencing, pragmatic checklists, and calm warnings — without pretending risks disappear.',
      whyBullets: [
        {
          title: 'Humane language',
          body: 'We avoid jargon dogpiles until you explicitly need smart-contract nouns.'
        },
        {
          title: 'Actionable choreography',
          body: 'Each guide ends with rehearsal prompts you can screenshot for your steward channel.'
        },
        {
          title: 'Safety as content',
          body: 'Phishing and seed hygiene show up repeatedly because humans are the weakest link.'
        },
        {
          title: 'Living handbook',
          body: 'Kaizen evolves; changelog + glossary track language shifts.'
        }
      ],
      toolkitLabel: 'Toolbox',
      toolkitTitle: 'Learning utilities',
      toolkitLead: 'Reference material tied to guides — not gimmicks.',
      toolkitCards: [
        { title: 'Glossary', body: '50+ nuanced terms distilled for circle stewards.', href: '/glossary', ctaNavKey: 'glossary' },
        { title: 'Progress', body: 'Mark steps privately in your browser (demo storage).', href: '/progress', ctaNavKey: 'progress' },
        { title: 'Updates', body: 'What changed lately in IA and demo surfaces.', href: '/updates', ctaNavKey: 'updates' },
        {
          title: 'Economics',
          body: 'Illustrative splits, cadence fees, and how we talk about surplus honestly.',
          href: '/economics',
          ctaNavKey: 'economics'
        },
        {
          title: 'Security',
          body: 'No-theatre posture: approver discipline, supply chain hygiene, reporting etiquette.',
          href: '/security',
          ctaNavKey: 'security'
        },
        {
          title: 'Network',
          body: 'Settlement vocabulary: L2 mindset, explorers, stable-first defaults.',
          href: '/network',
          ctaNavKey: 'network'
        },
        {
          title: 'FAQ',
          body: 'The arguments treasurers rehearse before their first quorum payload.',
          href: '/faq',
          ctaNavKey: 'faq'
        }
      ],
      finalTitle: 'Ready to rehearse?',
      finalLead: 'Reserve a cohort seat, skim a guide tonight, DM your future approvers.',
      finalSecondaryCta: 'Explore guides',
      guideLabels: {
        free: 'Free',
        new: 'New',
        beginner: 'Beginner',
        intermediate: 'Intermediate',
        stepsWord: 'steps',
        minWord: 'min'
      },
      landing: {
        heroEyebrow: '改善 · Quiet Progress',
        heroLead:
          'Kaizen Treasury is a community savings protocol for crypto groups: make recurring deposits, track shared balances in real time, and unlock milestone payouts with M-of-N group approval.',
        heroCta: 'Start your treasury',
        heroWordJa: 'カイゼン',
        aboutEyebrow: 'Whitepaper context · v1.0',
        aboutAnimatedParagraph:
          'Kaizen Treasury brings continuous improvement to onchain finance: recurring contributions, transparent ledgers, milestone-based release rules, and multisig-style approvals. Built for communities, friend circles, creators, DAO pods, and local clubs that save toward shared goals without speculation pressure.',
        aboutSegments: [
          { text: 'Save together. Improve together.', variant: 'body' },
          { text: '共に貯める。共に改善する。', variant: 'jpItalic' },
          { text: 'Small deposits. Big trust. Designed for disciplined, transparent, group-owned savings onchain.', variant: 'body' }
        ],
        featuresSegments: [
          { text: 'Group savings primitives for real coordination.', variant: 'primary' },
          { text: 'Quiet progress over speculation.', variant: 'muted' }
        ],
        featureVideoCaption: 'Transparent, low-drama coordination around shared money.',
        featureLearnMore: 'Learn more',
        featureCards: [
          {
            title: 'Recurring Contributions.',
            items: [
              'Automated or manual deposits on daily, weekly, monthly, or custom cadence',
              'Habit-building flow for small consistent contributions',
              'Missed-period visibility instead of hidden drift',
              'Supports groups from 2 to 500 members'
            ]
          },
          {
            title: 'Transparent Ledger.',
            items: [
              'Live balance, contribution log, and missed-payment flags',
              'No hidden state across wallets and chats',
              'Shared visibility before disputes escalate'
            ]
          },
          {
            title: 'Use Cases · Launch Segments.',
            items: [
              'Friend circles: travel and shared experience funds (3–8)',
              'Creator communities + DAO pods: project, grants, and ops reserves',
              'Fan clubs, local communities, and small teams (4–100)'
            ]
          }
        ],
        waitlistEyebrow: 'Early access',
        waitlistTitle: 'Join the steward waitlist',
        waitlistLead: 'Cohort invites, bilingual guides, and calm onboarding—no wallet required to reserve interest.',
        waitlistCta: 'Reserve a spot'
      }
    },
    shellSubtitleJa: {
      about: '継続的改善と、共有のお金。',
      guidesIndex: '輪のためのステップバイステップ。',
      lesson: '読みながら実行できるチェックリスト。',
      glossary: '用語と定義を一枚に。',
      progress: 'チェックリストはローカルに保存されます。',
      updates: 'プロダクトとガバナンスのノート。',
      economics: '分配・手数料・シミュレーション。',
      security: '脅威モデルと運用の作法。',
      network: 'チェーンと統合の選択。',
      faq: 'よくある質問への短い回答。',
      notFound: 'ページが見つかりません。'
    },
    guidesIndex: {
      title: 'All guides',
      lead: 'Work through rituals in order or jump where your circle feels stuck.',
      openGuide: 'Open guide'
    },
    lessonPage: {
      breadcrumbHome: 'Home',
      breadcrumbGuides: 'Guides',
      backToList: '← Back to guides',
      progressTitle: 'Your progress ·',
      stepDone: 'Toggle step studied',
      nextGuide: 'Next guide:',
      learnSteps: 'Lesson steps ·',
      tldr: 'TL;DR ·',
      feedbackBlurb: 'Kaizen Builders read inbound mail about typos + ideas — say hi after you onboard your pod.',
      earlyAccessNoteTitle: 'Early access signal',
      earlyAccessNoteBody:
        'Completing guides locally helps us prioritize content — NFT certificates are roadmap candy, not live yet.',
      stepOfTotal: '{current}/{total}',
      minRead: '~{minutes} min read ·',
      continueNext: 'Continue'
    },
    glossaryPage: {
      title: 'Glossary · shared money dialect',
      lead: 'Curated jargon for mujin-era treasurers — skim before arguing in Discord threads.',
      allCategories: 'All categories ·',
      metaLine: '{terms} terms · {categories} categories'
    },
    progressPage: {
      title: 'Progress tracker',
      lead: 'Checkmarks stay in this browser unless you plug into a synced account later.',
      empty: 'No steps tracked yet.',
      openGuide: 'Jump into guides',
      complete: 'Complete'
    },
    updatesPage: {
      title: 'Latest updates ·',
      lead: 'Handwritten changelog for layout + pedagogy tweaks.'
    },
    notFound: {
      title: 'Page not found',
      lead: 'That URL is not part of this demo site. Use the links below.',
      home: 'Back to home',
      guides: 'Browse guides'
    },
    marquee: {
      items: [
        'Transparent savings ledgers',
        'M-of-N approvals on every payout',
        'Rhythm over hype',
        'Small deposits, compounding trust',
        'Milestones you set together',
        'Stablecoin-first discipline',
        'Circles from 3 to 50 people',
        'Audit trails, not screenshots'
      ]
    },
    hero: {
      eyebrow: 'Calm · Precise · Communal · Trustworthy',
      title: 'Save together. Improve together.',
      titleEmphasis: 'A community savings circle, rebuilt onchain.',
      subtitle: 'Tiny consistent actions · meaningful pooled outcomes',
      lead:
        'Recurring deposits into shared onchain vaults, transparent ledgers, milestone payouts, and group approvals — commitment over chaos.',
      emailLabel: 'Email',
      emailPlaceholder: 'you@circle.co',
      cta: 'Join the waitlist',
      secondaryCta: 'Explore the blueprint',
      inlineNote: 'No wallet needed yet · early access opens in cohorts.',
      demoLabel: 'Demo vault',
      demoBalance: 'community balance',
      demoTarget: 'target reserve',
      stats: [
        { label: 'Status', value: 'Waitlist' },
        { label: 'Ledger', value: 'Transparent' },
        { label: 'Approval', value: 'M-of-N multisig' },
        { label: 'Cadence', value: 'Weekly · monthly · custom' }
      ]
    },
    problem: {
      eyebrow: 'The one-wallet problem',
      title: 'Groups coordinate everywhere. Wallets still pretend only one person shows up.',
      lead:
        'Shared money has always been a ritual — tanomoshi-kō in Japan, susu in the Caribbean, ajo in West Africa, chit funds in South Asia. Today, most crypto wallets treat that collective ritual as an edge case.',
      cards: [
        {
          title: 'Solo custody, shared intent',
          body: 'One person holds the keys for a whole group. One lost phone, one bad day, and the circle breaks.'
        },
        {
          title: 'Trust drifts invisibly',
          body: 'Google sheets, chat screenshots, and memory are the ledger. Disagreements get louder the later they surface.'
        },
        {
          title: 'Rug-risk is the default',
          body: 'Nothing enforces the cadence, the quorum, or the payout rule. "Bad actor" only needs one weak link.'
        },
        {
          title: 'Bookkeeping eats the joy',
          body: 'Chasing deposits, reconciling amounts, screenshotting receipts — admin work silently kills small circles.'
        }
      ]
    },
    principles: {
      eyebrow: 'Three principles',
      title: 'What holds a circle together.',
      items: [
        {
          kanji: '透明',
          romaji: 'tōmei',
          title: 'Transparent',
          body: 'Every contribution, every milestone, every approval is on a public ledger from day one. The rules are visible before anyone joins.'
        },
        {
          kanji: '合議',
          romaji: 'gōgi',
          title: 'Consensus',
          body: 'Payouts need M-of-N signatures, not one key-holder. Disagreement is a feature of the system, not a failure of the chat.'
        },
        {
          kanji: '継続',
          romaji: 'keizoku',
          title: 'Continuous',
          body: 'Small, repeated deposits compound into trust. Streaks and milestones reward showing up — quietly, not with fanfare.'
        }
      ]
    },
    how: {
      eyebrow: 'How it works',
      title: 'Three steps. Then the ritual does the work.',
      lead:
        'Kaizen is deliberately boring where boring keeps people safe — and warm where warmth keeps people coming back.',
      closing: '改善 — small, continuous improvements. A rhythm, not a hype cycle.',
      steps: [
        {
          n: '01',
          title: 'Form the circle',
          body: 'Name the goal, invite 3–50 people, agree on cadence, cap, and the M-of-N approver pool. No deploy until the rules are signed.'
        },
        {
          n: '02',
          title: 'Deposit on rhythm',
          body: 'Weekly, monthly, or custom. Contributions land in a shared vault with a live ledger. Missed cadences surface gently, early.'
        },
        {
          n: '03',
          title: 'Release by milestone',
          body: 'Target-hit, fixed-date, or deliberate manual trigger. Every payout needs the group\'s signatures. Nothing moves alone.'
        }
      ]
    },
    trust: {
      eyebrow: 'Shared intent, shared approval',
      title: 'The multisig, explained in one pane.',
      lead:
        'Custody is distributed across designated approvers. Every milestone payout needs at least M of the N signers — collaborative control instead of a single key-holder.',
      bullets: [
        'Vault rules are visible before anyone joins.',
        'Contribution trails stay onchain for accountability between friends, pods, and clubs.',
        'Designed for stablecoin-first goals — discipline over speculation.'
      ],
      demoLabel: 'Live demo',
      demoTitle: 'Event fund withdrawal',
      demoMeta: 'Milestone 2 · venue deposit',
      demoFoot: 'Approvers act as stewards — signatures accrue calmly, with audit trails, not frantic chats.'
    },
    useCases: {
      eyebrow: 'Circles, not portfolios',
      title: 'Who Kaizen is for.',
      lead: 'If your group is already saving on memory and screenshots, a circle will feel familiar within a week.',
      cardBadge: 'Example circle',
      items: [
        { segment: 'friends', label: 'Friends', example: 'Kyoto trip fund · 6 people · weekly USDC' },
        { segment: 'creators', label: 'Creators', example: 'Zine printing pool · 14 people · weekly USDC' },
        { segment: 'daos', label: 'DAO pods', example: 'Micro-grant pod · 12 people · weekly USDC' },
        { segment: 'fans', label: 'Fan clubs', example: 'Meetup travel jar · 18 people · monthly' },
        { segment: 'neighborhoods', label: 'Neighborhoods', example: 'Community fridge restock · 15 · weekly' },
        { segment: 'teams', label: 'Small teams', example: 'Offsite rainy-day fund · 11 · weekly' }
      ]
    },
    waitlist: {
      eyebrow: 'Early access',
      title: 'Join the first cohort.',
      lead:
        'We open access in small cohorts so every circle gets a real onboarding. Tell us what your group would save for — the shorter and more specific, the better.',
      emailLabel: 'Email',
      emailPlaceholder: 'you@circle.co',
      nameLabel: 'Your name (optional)',
      namePlaceholder: 'e.g. Mira',
      intentLabel: 'What would your circle save for?',
      intentOptions: [
        { id: 'friends', label: 'A trip or shared experience with friends' },
        { id: 'creators', label: 'A creator project or zine' },
        { id: 'daos', label: 'A DAO pod or micro-grant fund' },
        { id: 'neighborhoods', label: 'A neighborhood or mutual-aid pool' },
        { id: 'teams', label: 'A small team or offsite fund' },
        { id: 'other', label: 'Something else — I\'ll write back' }
      ],
      submit: 'Request access',
      submitting: 'Sending…',
      errorRequired: 'Email is required to join the waitlist.',
      errorEmail: 'That doesn\'t look like a valid email.',
      successTitle: 'You\'re on the list.',
      successBody:
        'We\'ll email you before your cohort opens. In the meantime, feel free to read the story behind Kaizen on the About page.',
      successAgain: 'Add someone else'
    },
    footer: {
      tagline: 'Continuous improvement for shared money · Quiet Progress.',
      sections: [
        {
          title: 'Learn',
          links: [
            { label: 'Guides', href: '/guides' },
            { label: 'Glossary', href: '/glossary' },
            { label: 'Progress', href: '/progress' },
            { label: 'Updates', href: '/updates' },
            { label: 'Economics', href: '/economics' },
            { label: 'Security', href: '/security' },
            { label: 'Network', href: '/network' },
            { label: 'FAQ', href: '/faq' }
          ]
        },
        {
          title: 'Site',
          links: [
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
            { label: 'Join the waitlist', href: '/#waitlist' }
          ]
        },
        {
          title: 'Community',
          links: [
            { label: '@JoinKaizen', href: 'https://twitter.com/JoinKaizen' },
            { label: 'JP · @KaizenKumi', href: 'https://twitter.com/KaizenKumi' }
          ]
        }
      ],
      disclaimer:
        'Kaizen Treasury · Brand Identity Spec v1.0 · Confidential early demo · Not investment advice.'
    },
    about: {
      eyebrow: 'About',
      title: 'On mujin, kaizen, and shared money.',
      lead:
        'Kaizen Treasury is a small attempt to do one very old thing in a slightly new way — let groups pool money, transparently, without turning one person into a custodian-for-life.',
      sections: [
        {
          kanji: '頼母子講',
          heading: 'Tradition',
          body:
            'In Japan the practice is called tanomoshi-kō or mujin — rotating savings circles that go back centuries. Similar rituals exist in nearly every part of the world: susu, ajo, kye, chit funds, ROSCAs. People have always saved in groups. We\'re not inventing the circle.'
        },
        {
          kanji: '鎖',
          heading: 'Why onchain',
          body:
            'Onchain custody gives these circles something they never had before: a neutral ledger, rules that hold themselves, and custody that doesn\'t depend on any one person staying healthy, reachable, or trustworthy forever. Used carefully, that\'s a quiet gift.'
        },
        {
          kanji: '改善',
          heading: 'Kaizen',
          body:
            '改善 means continuous, small improvements. It\'s the posture we want the product to have — modest in the moment, noticeable over seasons. Not a hype cycle; a rhythm.'
        }
      ],
      close: 'If any of this sounds like your group,',
      closeLink: 'join the waitlist.'
    }
  },
  ja: {
    meta: {
      brand: 'カイゼン・トレジャリー',
      kanji: '改善',
      tagline: '一緒に貯める。一緒に改善する。'
    },
    nav: {
      home: 'ホーム',
      about: 'このプロダクト',
      join: '参加する',
      guides: 'ガイド',
      glossary: '用語集',
      progress: '進捗',
      updates: '更新',
      economics: '経済モデル',
      security: 'セキュリティ',
      network: 'ネットワーク',
      faq: 'FAQ'
    },
    site: {
      badge: 'カイゼン・トレジャリー · 手順付き読み物',
      heroLine1: '一緒に貯める。一緒に改善する。',
      heroAccent: 'コミュニティの無尽を、オンチェーンに組み立てなおす。',
      heroLead:
        '少人数グループのための段階別ガイド──共有金庫、透明な台帳、マイルストーンでの解放、M-of-N の承認。初めての人と管理人へ、慌てない順序で（EN / JA）。',
      primaryCta: 'ウェイトリストに参加',
      primaryCtaFoot: 'ウェイトリストのデモにウォレットはまだ不要 · コホートは招待制。',
      chips: ['輪を中心に', '落ち着いた語り口', 'DYOR の明示', '改訂のルーティン'],
      metricsLabel: '数字で·',
      metrics: [
        { value: '100%', label: 'ガイド二言語' },
        { value: '86', label: '下書きの実践細目' },
        { value: '0', label: 'ペイウォール（現時点）' },
        { value: 'L2', label: 'まず考え方から' }
      ],
      liveStatsEyebrow: 'リハーサル用カウンタ（参考値）·',
      liveStats: [
        { n: 3840, prefix: '約', suffix: '', label: 'ガイド章の閲覧 · 直近28日デモ' },
        { n: 127, prefix: '', suffix: '', label: 'サンドボックスでステップ練習中のポッド' },
        { n: 2, prefix: '', suffix: '', label: 'このサイトの公開ロケール数' },
        { n: 94, prefix: '', suffix: '%', label: '進捗記録 ON 時のチェックリスト到達率' }
      ],
      liveActivityTitle: '合成アクティビティ ·',
      liveActivityLines: [
        'ポッド kyoto-bridge · シミュレーション · マイルストーン2 向け 3-of-5 署名キュー',
        '旅行後に承認ロール更新 · 冷却18h · エクスプローラ領収をピン留め',
        '翻訳バウンティ · JA 用語集差分マージ · 管理人オフィスアワー 木20:00 JST',
        'フィーリハ · ステーブルキャデンス · 最悪上乗せは経済モデルページに明記',
        'インシデント訓練 · なりすましURL記録 · シード未共有 · 12分でクローズ'
      ],
      dyor:
        'DYOR — 教育コンテンツであり投資助言ではありません。カストディにはリスクがあり、オンチェーン送信は不可逆です。法令と専門家の確認を忘れずに。',
      featuredLabel: 'スタートコース',
      featuredTitle: '最初によく読まれるガイド',
      featuredLead: '輪を作るときに一度だけ目を通したいコアになります。',
      viewAll: 'すべてのガイド',
      secondaryLabel: '次に·',
      secondaryTitle: '基礎のあと · もう一歩',
      secondaryLead: '承認者の心理・管理人の護り・ DAO ポッドや相互扶助の型。',
      whyLabel: 'なぜこの形式？',
      whyTitle: 'チュートリアルサイト型の順序だから',
      whyLead: '友だち向けの語り順と現実のチェックリスト、そして安心と誇大の両方への注意。',
      whyBullets: [
        {
          title: '人間語を優先',
          body: 'スマコン用語が必要になるまでジャーゴンだらけにしません。'
        },
        {
          title: '動ける段取り',
          body: '各ガイドの終わりに、管理人チャンネルへ貼れるリハーサル用の一文を置きました。'
        },
        {
          title: '安全がコンテンツ',
          body: 'フィッシングとシードの話は繰り返し出ます。人間が最弱リンクだから。'
        },
        {
          title: '生きた手引き',
          body: 'カイゼンは動きます。変更は更新ログと用語集で追跡します。'
        }
      ],
      toolkitLabel: 'ツールボックス',
      toolkitTitle: '学習用ユーティリティ',
      toolkitLead: 'ガイドに紐づく参照用。ギミックではありません。',
      toolkitCards: [
        { title: '用語集', body: '管理人向けに圧縮した 50+ 用語。', href: '/glossary', ctaNavKey: 'glossary' },
        { title: '進捗', body: 'ブラウザ内でステップにチェック（デモ保存）。', href: '/progress', ctaNavKey: 'progress' },
        { title: '更新', body: 'IA やデモ表層の最近の変更。', href: '/updates', ctaNavKey: 'updates' },
        {
          title: '経済モデル',
          body: '配分のたたき台・キャデンス志向のフィー・余剰の語り方。',
          href: '/economics',
          ctaNavKey: 'economics'
        },
        {
          title: 'セキュリティ',
          body: '芝居なしの態勢：承認の作法と供給鏈の衛生、報告の型。',
          href: '/security',
          ctaNavKey: 'security'
        },
        {
          title: 'ネットワーク',
          body: '決済の語彙：L2 思考・エクスプローラ・ステーブル優先。',
          href: '/network',
          ctaNavKey: 'network'
        },
        {
          title: 'FAQ',
          body: '初めてのクォーラム直前に揉れる論点だけ。',
          href: '/faq',
          ctaNavKey: 'faq'
        }
      ],
      finalTitle: 'リハーサルの準備は？',
      finalLead: 'コホート枠を取り、今夜ひとつガイドを開き、将来の承認者に DM を。',
      finalSecondaryCta: 'ガイドを開く',
      guideLabels: {
        free: '無料',
        new: '新着',
        beginner: '初級',
        intermediate: '中級',
        stepsWord: 'ステップ',
        minWord: '分'
      },
      landing: {
        heroEyebrow: '改善 · 静かな前進',
        heroLead:
          'カイゼン・トレジャリーは、クリプトのグループのためのコミュニティ貯蓄プロトコルです。定期的な入金、共有残高のリアルタイム把握、マイルストーン解放と M-of-N による承認をひとつの流れに。',
        heroCta: 'トレジャリーを始める',
        heroWordJa: 'カイゼン',
        aboutEyebrow: 'ホワイトペーパー文脈 · v1.0',
        aboutAnimatedParagraph:
          'カイゼン・トレジャリーは、オンチェーンのファイナンスに継続的改善をもたらします──定期的な拠出、透明な台帳、マイルストーンに基づく解放ルール、マルチシグ様の承認。コミュニティ、友人の輪、クリエイター、DAO のポッド、地域のクラブなど、投機の熱に飲まれず共有の目標に向けて貯めるグループのために。',
        aboutSegments: [
          { text: '一緒に貯める。一緒に改善する。', variant: 'body' },
          { text: 'Small deposits. Big trust.', variant: 'enItalic' },
          {
            text: '小さな積み重ね。大きな信頼。規律ある、透明な、グループ所有のオンチェーン貯蓄のために。',
            variant: 'body'
          }
        ],
        featuresSegments: [
          { text: '本物の調整のためのグループ貯蓄プリミティブ。', variant: 'primary' },
          { text: '投機より静かな前進。', variant: 'muted' }
        ],
        featureVideoCaption: '共有のお金をめぐる、透明で浪費の少ない調整。',
        featureLearnMore: '詳しく見る',
        featureCards: [
          {
            title: 'リカーリングな拠出。',
            items: [
              '日次・週次・月次、またはカスタムの自動／手動入金',
              '小さく継続するための習慣化フロー',
              '見えないズレではなく、未納の可視化',
              '2〜500 名までのグループに対応'
            ]
          },
          {
            title: '透明な台帳。',
            items: [
              'ライブ残高、拠出ログ、未納フラグ',
              'ウォレットやチャットをまたいだ隠れた状態なし',
              '対立がエスカレートする前の共有可視性'
            ]
          },
          {
            title: 'ユースケース · ローンチセグメント。',
            items: [
              '友人の輪：旅行や体験の共同資金（3〜8）',
              'クリエイター・DAO ポッド：プロジェクト、助成、運用の準備金',
              'ファンクラブ、地域コミュニティ、小さなチーム（4〜100）'
            ]
          }
        ],
        waitlistEyebrow: '早期アクセス',
        waitlistTitle: 'ステワード向けウェイトリスト',
        waitlistLead: 'コホート招待、バイリンガルガイド、落ち着いたオンボーディング──関心表明にウォレットは不要です。',
        waitlistCta: '枠を確保する'
      }
    },
    shellSubtitleJa: {
      about: '継続的改善と、共有のお金。',
      guidesIndex: '輪のためのステップバイステップ。',
      lesson: '読みながら実行できるチェックリスト。',
      glossary: '用語と定義を一枚に。',
      progress: 'チェックリストはローカルに保存されます。',
      updates: 'プロダクトとガバナンスのノート。',
      economics: '分配・手数料・シミュレーション。',
      security: '脅威モデルと運用の作法。',
      network: 'チェーンと統合の選択。',
      faq: 'よくある質問への短い回答。',
      notFound: 'ページが見つかりません。'
    },
    guidesIndex: {
      title: 'すべてのガイド',
      lead: '順に進んでも、輪が詰まったところから飛んでも構いません。',
      openGuide: 'ガイドを開く'
    },
    lessonPage: {
      breadcrumbHome: 'ホーム',
      breadcrumbGuides: 'ガイド',
      backToList: '← ガイド一覧へ',
      progressTitle: 'あなたの進捗 ·',
      stepDone: '読んだステップを切り替え',
      nextGuide: '次のガイド:',
      learnSteps: 'レッスンのステップ ·',
      tldr: 'TL;DR ·',
      feedbackBlurb: 'タイポやアイデアはメールで歓迎します（デモ段階）。',
      earlyAccessNoteTitle: '先行アクセスの共有',
      earlyAccessNoteBody:
        'ローカルでガイドを終えるとコンテンツ優先度の参考になります──NFT 証明はロードマップ上の甘い話で、まだ稼働していません。',
      stepOfTotal: '{current}/{total}',
      minRead: '約 {minutes} 分の読了 ·',
      continueNext: '次へ進む'
    },
    glossaryPage: {
      title: '用語集 · 共有のお金の方言',
      lead: '無尽・サークル型貯蓄のための圧縮ジャーゴン。',
      allCategories: 'すべてのカテゴリ ·',
      metaLine: '計 {terms} 語 · {categories} カテゴリ'
    },
    progressPage: {
      title: '進捗トラッキング',
      lead: 'チェックマークはこのブラウザ内にのみ保存されます（同期アカウント連携までは）。',
      empty: 'まだステップはありません。',
      openGuide: 'ガイドへ',
      complete: '完了'
    },
    updatesPage: {
      title: '最新の更新 ·',
      lead: 'レイアウトと教材まわりの手書きチェンジログ。'
    },
    notFound: {
      title: 'ページが見つかりません',
      lead: 'このデモサイトにない URL です。下のリンクを使ってください。',
      home: 'ホームへ',
      guides: 'ガイド一覧'
    },
    marquee: {
      items: [
        '透明な積み立て台帳',
        'すべての支払いに M-of-N 承認',
        'ハイプよりリズム',
        '小さな入金が信頼を積む',
        'みんなで決めるマイルストーン',
        'ステーブルコインを基準に',
        '3〜50名の輪に対応',
        'スクショではなく監査に残る跡'
      ]
    },
    hero: {
      eyebrow: '静か · 正確 · 共同体 · 信頼できる',
      title: '一緒に貯める。一緒に改善する。',
      titleEmphasis: 'コミュニティの無尽を、オンチェーンに組み立てなおす。',
      subtitle: '小さく続ける行為が、輪で意味のある成果に',
      lead:
        '共有のオンライン金庫へ定期的に積む習慣・透明な台帳・マイルストーンでの解放・グループの承認まで。騒がない順序で。',
      emailLabel: 'メール',
      emailPlaceholder: 'あなた@example.jp',
      cta: 'ウェイトリストに参加',
      secondaryCta: '設計とガイドを読む',
      inlineNote: 'ウォレットはまだ不要 · 少人数コホートで順次公開します。',
      demoLabel: 'デモ金庫',
      demoBalance: 'コミュニティ残高',
      demoTarget: '目標準備金',
      stats: [
        { label: 'ステータス', value: 'ウェイトリスト' },
        { label: '台帳', value: '透明' },
        { label: '承認', value: 'M-of-N' },
        { label: 'ペース', value: '週次 · 月次 · カスタム' }
      ]
    },
    problem: {
      eyebrow: 'ひとつの財布問題',
      title: 'どこでもグループは調整している。けれど財布は、まだ「ひとり」を前提にしている。',
      lead:
        '共有のお金は、ずっと儀式でした──日本の頼母子講、カリブの susu、西アフリカの ajo、南アジアの chit。いまのクリプトは、その集合的な儀式をいまだに例外扱いしています。',
      cards: [
        {
          title: '単独カストディ、共有の意志',
          body: 'ひとりが全員分の鍵を持つ──端末を失くせば、悪い日がくれば、輪ごと壊れます。'
        },
        {
          title: '信頼は静かにずれていく',
          body: 'スプレッドシート、チャットのスクショ、記憶が台帳に。食い違いは、時間が経つほど大きくなります。'
        },
        {
          title: 'ラグのリスクが既定値',
          body: 'ペース・定足数・支払い条件を守らせる仕組みがない。"悪意"は弱い一点で十分。'
        },
        {
          title: '記帳が楽しさを奪う',
          body: '督促、突合、スクショ集め──事務作業が、小さな輪を静かに壊していきます。'
        }
      ]
    },
    principles: {
      eyebrow: '三つの原則',
      title: '輪をつなぎ留めるもの。',
      items: [
        {
          kanji: '透明',
          romaji: 'tōmei',
          title: 'Transparent',
          body: 'すべての入金・マイルストーン・承認が、初日から公開台帳に。参加する前からルールが見える状態。'
        },
        {
          kanji: '合議',
          romaji: 'gōgi',
          title: 'Consensus',
          body: '支払いには M-of-N の署名が必要。単一鍵ではなく、協調でコントロールする。'
        },
        {
          kanji: '継続',
          romaji: 'keizoku',
          title: 'Continuous',
          body: '小さな入金の繰り返しが、信頼を積み上げる。ストリークは、騒がず、続けた人に返る。'
        }
      ]
    },
    how: {
      eyebrow: '仕組み',
      title: '三つの手順。あとはリチュアルが働きます。',
      lead: 'カイゼンは、安全を守るところではあえて地味に、続ける動機のところではあたたかく。',
      closing: '改善 — 小さな改良の積み重ね。派手さより、リズム。',
      steps: [
        {
          n: '01',
          title: '輪をつくる',
          body: '目標に名前をつけ、3〜50名を招き、ペース・上限・承認者プール（M-of-N）を決める。ルールに合意するまではデプロイされません。'
        },
        {
          n: '02',
          title: 'リズムで入金',
          body: '毎週・毎月・カスタム。積み立ては共有金庫へ。遅れは、早めに穏やかに表面化します。'
        },
        {
          n: '03',
          title: 'マイルストーンで解放',
          body: '目標達成・固定日・手動トリガー。いずれの支払いもグループ署名が必要。ひとりでは動きません。'
        }
      ]
    },
    trust: {
      eyebrow: '意志を分かち合い、承認も分かち合う',
      title: 'マルチシグを、ひと画面で。',
      lead:
        'カストディは指定された承認者の間で分散。マイルストーンの支払いは、N 人中 M 人以上の署名が必要──協調的なコントロール。',
      bullets: [
        '誰かが参加する前からルールが見えている。',
        '入金の跡はオンチェーンに残り、友人・ポッド・クラブの間の説明責任になる。',
        'ステーブルコイン優先の目標のため──投機より規律。'
      ],
      demoLabel: 'ライブデモ',
      demoTitle: 'イベント資金の引出し',
      demoMeta: 'マイルストーン2 · 会場手付',
      demoFoot: '承認者は輪の管理人──署名は監査に残り、慌ただしいチャットではなく、静かに積み上がります。'
    },
    useCases: {
      eyebrow: '輪、ポートフォリオではなく',
      title: '誰のためのカイゼンか。',
      lead: 'すでに記憶やスクショで貯めている集まりなら、1週間もあれば馴染みます。',
      cardBadge: '活用例',
      items: [
        { segment: 'friends', label: '友人', example: '京都旅行貯金 · 6名 · 毎週USDC' },
        { segment: 'creators', label: 'クリエイター', example: 'ジン印刷プール · 14名 · 毎週USDC' },
        { segment: 'daos', label: 'DAO', example: 'マイクロ助成ポッド · 12名 · 毎週USDC' },
        { segment: 'fans', label: 'ファンクラブ', example: 'ミートアップ交通費 · 18名 · 月次' },
        { segment: 'neighborhoods', label: '近所', example: '共用冷蔵庫 · 15名 · 毎週' },
        { segment: 'teams', label: '小さなチーム', example: 'オフサイト雨天貯金 · 11名 · 毎週' }
      ]
    },
    waitlist: {
      eyebrow: '先行アクセス',
      title: '最初のコホートへ。',
      lead:
        '一度に多くは開きません。各サークルがきちんとオンボーディングできるよう、小さなコホートで順に公開します。何のために貯めたいか、短く・具体的に教えてください。',
      emailLabel: 'メール',
      emailPlaceholder: 'あなた@example.jp',
      nameLabel: 'お名前（任意）',
      namePlaceholder: '例：美良',
      intentLabel: 'どんな目的で貯めますか？',
      intentOptions: [
        { id: 'friends', label: '友人との旅行・共有体験' },
        { id: 'creators', label: 'クリエイターのプロジェクト・ジン' },
        { id: 'daos', label: 'DAO ポッド・マイクロ助成' },
        { id: 'neighborhoods', label: '近所・相互扶助' },
        { id: 'teams', label: '小さなチーム・オフサイト' },
        { id: 'other', label: 'その他 — あとで返信します' }
      ],
      submit: '参加をリクエスト',
      submitting: '送信中…',
      errorRequired: 'メールを入力してください。',
      errorEmail: 'メールの形式が正しくないようです。',
      successTitle: 'リストに追加されました。',
      successBody: 'コホート公開前にメールでお知らせします。よければ About ページで、背景にある物語も読んでみてください。',
      successAgain: '別の人を追加'
    },
    footer: {
      tagline: '共有のお金への継続的改善 · 静かな前進。',
      sections: [
        {
          title: '学ぶ',
          links: [
            { label: 'ガイド', href: '/guides' },
            { label: '用語集', href: '/glossary' },
            { label: '進捗', href: '/progress' },
            { label: '更新', href: '/updates' },
            { label: '経済モデル', href: '/economics' },
            { label: 'セキュリティ', href: '/security' },
            { label: 'ネットワーク', href: '/network' },
            { label: 'FAQ', href: '/faq' }
          ]
        },
        {
          title: 'サイト',
          links: [
            { label: 'ホーム', href: '/' },
            { label: 'このプロダクト', href: '/about' },
            { label: 'ウェイトリスト', href: '/#waitlist' }
          ]
        },
        {
          title: 'コミュニティ',
          links: [
            { label: '@JoinKaizen', href: 'https://twitter.com/JoinKaizen' },
            { label: '日本語 · @KaizenKumi', href: 'https://twitter.com/KaizenKumi' }
          ]
        }
      ],
      disclaimer:
        'カイゼン・トレジャリー · ブランドガイド v1.0 · 機密の初期デモ · 投資助言ではありません。'
    },
    about: {
      eyebrow: 'このプロダクトについて',
      title: '無尽、カイゼン、そして共有のお金について。',
      lead:
        'カイゼン・トレジャリーは、非常に古い営みを、少しだけ新しいかたちでやろうとする小さな試みです──グループがお金を透明に持ち寄り、ひとりを生涯の管理人にしないために。',
      sections: [
        {
          kanji: '頼母子講',
          heading: '伝統',
          body:
            '日本では頼母子講／無尽と呼ばれ、ローテーション式の貯蓄サークルとして何百年も続いてきました。世界の多くの場所に同様の儀式があります──susu、ajo、kye、chit、ROSCA。人は昔からグループで貯めてきた。私たちは輪を発明しているのではありません。'
        },
        {
          kanji: '鎖',
          heading: 'なぜオンチェーンか',
          body:
            'オンチェーンのカストディは、これまでになかったものをもたらします──中立の台帳、自ら守られるルール、そしてひとりの人間が永遠に健康で連絡が取れて信頼に足り続けることを前提としないカストディ。丁寧に使えば、それは静かな贈り物です。'
        },
        {
          kanji: '改善',
          heading: 'カイゼン',
          body:
            '改善は、小さな継続的な改良のこと。プロダクトにも、その姿勢を持たせたい──今は控えめ、季節を越えて積み上がる。ハイプではなく、リズム。'
        }
      ],
      close: 'ここまで読んで、ご自身の輪にも合いそうなら、',
      closeLink: 'ウェイトリストに参加'
    }
  }
};
