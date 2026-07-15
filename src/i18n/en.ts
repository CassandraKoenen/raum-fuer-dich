import type { Translations } from './de';

export const en: Translations = {
  lang: 'en',
  dir: 'ltr',

  // ── Nav ─────────────────────────────────────────────────────────────────────
  nav: {
    coaching:     'Coaching',
    organizing:   'Organizing',
    fengshui:     'Feng Shui',
    findYourPath: 'Find your path',
    blog:         'Inspiration',
    about:        'About',
    contact:      'Contact',
    langSwitch:   'Deutsch',
    langSwitchHref: '/',
  },

  // ── Footer ──────────────────────────────────────────────────────────────────
  footer: {
    tagline:    'Order on the outside. Peace on the inside.',
    navigation: 'Navigation',
    legal:      'Legal',
    impressum:  'Imprint',
    datenschutz:'Privacy Policy',
    contact:    'Contact',
    instagram:  'Instagram',
    youtube:    'YouTube',
    rights:     '© 2026 Raum für dich · Cassandra Koenen',
  },

  // ── Landing page ────────────────────────────────────────────────────────────
  landing: {
    hero: {
      label:    'Raum für dich',
      headline: 'Order on the outside.\nPeace on the inside.',
      body:     'A home that supports the person you want to become.',
      cta:      'Find your path',
      ctaHref:  '/en/find-your-path',
    },
    why: {
      label:    'Why it matters',
      headline: 'Your environment shapes you',
      body:     'The atmosphere of our surroundings directly influences how we feel—whether we realize it or not. A restless, chaotic space drains our energy and keeps us stuck in old habits. A thoughtfully designed space, on the other hand, brings a sense of lightness, clarity, and inner peace. It helps us live the life we truly desire.',
      pillars: [
        { icon: '🧠', label: 'Thoughts',     text: 'Clutter distracts and burdens your working memory.' },
        { icon: '🌀', label: 'Habits',        text: 'Clear structures make good habits effortless.' },
        { icon: '😮‍💨', label: 'Stress',       text: 'Chaos measurably raises the stress hormone cortisol.' },
        { icon: '✨', label: 'Creativity',    text: 'Free space makes room for new ideas.' },
        { icon: '⚡', label: 'Energy',        text: 'Order returns the energy that chaos consumes.' },
        { icon: '🌿', label: 'Wellbeing',     text: 'A harmonious home nourishes body and mind.' },
      ],
    },
    paths: {
      label:    'Three paths',
      headline: 'Where are you right now?',
      cards: [
        {
          feeling:     'I don\'t know where to start.',
          service:     'Decluttering Coaching',
          description: 'Step by step towards clarity, sustainable habits and the feeling of being in control again.',
          cta:         'Learn more',
          href:        '/en/coaching',
          color:       'blue',
        },
        {
          feeling:     'I don\'t have the time.',
          service:     'Professional Organizing',
          description: 'We handle the sorting, organizing and cleaning — leaving behind systems that actually last.',
          cta:         'Learn more',
          href:        '/en/organizing',
          color:       'green',
        },
        {
          feeling:     'I want more from my home.',
          service:     'Feng Shui & Intentional Living',
          description: 'Design your home to support your goals, your energy and your future.',
          cta:         'Learn more',
          href:        '/en/feng-shui',
          color:       'sand',
        },
      ],
    },
    timeline: {
      label:    'The journey',
      headline: 'Everything begins with clarity.',
      body:     'Decluttering is almost always the first step. Not because order is the goal — but because it is the beginning of everything else. From clarity come systems. From systems comes ease. From ease comes room for growth.',
      steps: [
        { label: 'Chaos',     description: 'Overwhelming. Paralyzing. Drains your energy.' },
        { label: 'Clarity',   description: 'The first breath. Everything becomes possible.' },
        { label: 'Ease',      description: 'Systems carry themselves.' },
        { label: 'Growth',    description: 'Space for the life you want.' },
      ],
    },
    about: {
      label:    'About',
      headline: 'Behind Raum für dich',
      body:     'I\'m Cassandra — and what drives me is not the tidying itself, but what happens after: when someone takes a breath, looks around and realizes that something has shifted on the inside too.',
      cta:      'More about me',
      ctaHref:  '/en/about',
    },
    social: {
      label:       'Inspiration',
      headline:    'Get inspired',
      body:        'Tips, insights and honest thoughts on organizing, intentional living and creating a home that truly supports you.',
      latestVideo: 'Latest video',
      instagram:   'Instagram',
      newsletter: {
        headline:    'Stay connected',
        body:        'Regular impulses for more clarity and ease — straight to your inbox.',
        placeholder: 'Your email address',
        cta:         'Subscribe',
        note:        'No spam. Unsubscribe any time.',
      },
    },
  },

  // ── Coaching page ────────────────────────────────────────────────────────────
  coaching: {
    meta: {
      title:       'Decluttering Coaching',
      description: 'Step by step towards clarity — personal decluttering coaching in person or via video, based near Kaiserslautern.',
    },
    hero: {
      label:    'Decluttering Coaching',
      headline: 'The gentle path\nto clarity.',
      body:     'You don\'t need to know where to start. That\'s exactly what I\'m here for.',
    },
    intro: {
      headline: 'Clarity doesn\'t come alone',
      body:     'Most people know something needs to change. But the chaos feels overwhelming, the starting point out of reach. I walk alongside you — without pressure, without judgement, with genuine support.',
      quote:    '"We\'ll find a beginning together — no matter how big the chaos feels right now."',
    },
    offerings: [
      {
        label:      'In person',
        headline:   'Coaching at your home',
        body:       'Together we move through your spaces — without pressure, without perfect plans. We look at what works, what doesn\'t, and find practical solutions that fit your everyday life.\n\nYou don\'t need to tidy up before I arrive. I\'m here to help you do that — not to judge.',
        details: [
          { label: 'Duration', value: 'Individual, based on your needs' },
          { label: 'Location', value: 'At your home (Kaiserslautern area)' },
          { label: 'Price',    value: 'On request — budget adjustments possible' },
        ],
        cta:     'Get in touch',
        ctaHref: '/en/contact',
      },
      {
        label:    'Online',
        headline: 'Coaching via video',
        body:     'You show me via video call what\'s on your mind — and together we work out step by step what comes next. Flexible, personal and possible from anywhere.\n\nOnline coaching is often easier than expected: no travel time, no stranger in your home — and still real support.',
        details: [
          { label: 'Duration', value: '60 minutes per session' },
          { label: 'Format',   value: 'Video (Zoom, FaceTime or similar)' },
          { label: 'Price',    value: 'On request — budget adjustments possible' },
        ],
        cta:     'Book a session',
        ctaHref: '/en/contact',
      },
    ],
    faq: {
      label:    'FAQ',
      headline: 'Things you might be wondering',
      items: [
        { q: 'Does my home need to be tidy before we meet?', a: 'No — quite the opposite. I come precisely when things are out of order. You don\'t need to prepare or hide anything.' },
        { q: 'How long does working together take?', a: 'It varies. Some people need a single session to get going again. Others I accompany over several weeks. We\'ll figure out together what makes sense for you.' },
        { q: 'What does it cost?', a: 'I\'m happy to create a tailored offer for your situation. Access matters to me — please reach out if budget is a concern. The initial call is always free.' },
        { q: 'I\'m very messy — is that a problem?', a: 'Not at all. I work with real people in real homes. There is no chaos that is "too bad".' },
        { q: 'What happens after the initial call?', a: 'You decide whether and how we continue. I\'ll make a suggestion — but the final step is always yours.' },
      ],
    },
    cta: {
      headline: 'Ready for the first step?',
      body:     'The initial call is free and without obligation. Just reach out.',
      cta:      'Free initial call',
      ctaHref:  '/en/contact',
    },
  },

  // ── Organizing page ──────────────────────────────────────────────────────────
  organizing: {
    meta: {
      title:       'Professional Organizing',
      description: 'No time? We handle the complete sorting, organizing and setting up of systems — for you.',
    },
    hero: {
      label:    'Professional Organizing',
      headline: 'You don\'t have to\ndo it yourself.',
      body:     'We come, we organize, we leave behind order that lasts.',
    },
    intro: {
      headline: 'Hand over the burden',
      body:     'Sometimes it\'s not the will that\'s missing — it\'s simply the time or energy. The Professional Organizing Service is for people who want a finished solution: no coaching, no process, just a concrete result.',
    },
    services: [
      { icon: '📦', label: 'Sorting',      text: 'We go through everything — systematically and without pressure.' },
      { icon: '🗂️', label: 'Organizing',   text: 'We create systems that fit your everyday life.' },
      { icon: '✨', label: 'Setting up',   text: 'Everything gets its place — thoughtfully and beautifully.' },
      { icon: '🚛', label: 'Disposal',     text: 'We handle transport and disposal.' },
    ],
    cta: {
      headline: 'Interested? Let\'s talk.',
      body:     'Tell me briefly about your situation — I\'ll get back to you within 24 hours.',
      cta:      'Send an enquiry',
      ctaHref:  '/en/contact',
    },
  },

  // ── Feng Shui page ───────────────────────────────────────────────────────────
  fengshui: {
    meta: {
      title:       'Feng Shui & Intentional Living',
      description: 'Design your home to support your goals and wellbeing — with Feng Shui and intentional home design.',
    },
    hero: {
      label:    'Feng Shui & Intentional Living',
      headline: 'A home that\nworks for you.',
      body:     'Once clarity is created, design begins. Your space can be more than a backdrop — it can actively support you.',
    },
    intro: {
      headline: 'More than décor',
      body:     'Feng Shui is not mysticism — it is the ancient knowledge that our surroundings influence us psychologically, energetically and emotionally. Together we analyse your space and shape it so that it supports your goals, your health and your wellbeing.',
      quote:    '"Your home is not a backdrop. It is an active participant in your life."',
    },
    aspects: [
      { icon: '🌊', label: 'Energy flow',       text: 'We analyse how energy flows through your spaces — and optimise it.' },
      { icon: '🎨', label: 'Colour & light',    text: 'Conscious colour and lighting choices influence mood and focus.' },
      { icon: '🌿', label: 'Nature & elements', text: 'Natural materials and elements create balance.' },
      { icon: '📐', label: 'Spatial design',    text: 'Furniture placement and proportions that simply feel right.' },
    ],
    cta: {
      headline: 'Ready to transform your space?',
      body:     'Let\'s find out in a free initial call how I can help you.',
      cta:      'Book initial call',
      ctaHref:  '/en/contact',
    },
  },

  // ── Find your path ───────────────────────────────────────────────────────────
  findYourPath: {
    meta: {
      title:       'Find your path',
      description: 'Not sure which service is right for you? This short guide helps you find the right starting point.',
    },
    hero: {
      label:    'Orientation',
      headline: 'Find your path.',
      body:     'Everyone is different. Every situation is different. Here you\'ll find out which path is right for you right now.',
    },
    question: 'Which best describes your situation?',
    options: [
      {
        feeling:     'I feel overwhelmed and don\'t know where to start.',
        answer:      'Decluttering Coaching is your starting point.',
        description: 'I accompany you personally — step by step, at your pace, without pressure.',
        cta:         'Explore coaching',
        href:        '/en/coaching',
        color:       'blue',
      },
      {
        feeling:     'I need a finished solution — I don\'t have the time or energy.',
        answer:      'Professional Organizing is made for you.',
        description: 'We handle everything for you and leave a result that feels right immediately.',
        cta:         'Explore organizing',
        href:        '/en/organizing',
        color:       'green',
      },
      {
        feeling:     'My home is tidy — but it doesn\'t feel right.',
        answer:      'Feng Shui & Intentional Living is your next step.',
        description: 'We go deeper: how does your space truly support your goals and wellbeing?',
        cta:         'Explore Feng Shui',
        href:        '/en/feng-shui',
        color:       'sand',
      },
    ],
  },

  // ── Blog ────────────────────────────────────────────────────────────────────
  blog: {
    meta: {
      title:       'Inspiration',
      description: 'Thoughts, tips and insights on organizing, intentional living and the life you want.',
    },
    hero: {
      label:    'Inspiration',
      headline: 'Thoughts for\na lighter life.',
      body:     'Honest insights, practical tips and impulses for a life with more space.',
    },
    comingSoon: 'Coming soon — first posts in preparation.',
  },

  // ── About ────────────────────────────────────────────────────────────────────
  about: {
    meta: {
      title:       'About – Cassandra Koenen',
      description: 'I\'m Cassandra — an organizing coach based near Kaiserslautern. Inspired by Feng Shui, I help people free their spaces and feel lighter within.',
    },
  },

  // ── Contact ──────────────────────────────────────────────────────────────────
  contact: {
    meta: {
      title:       'Contact',
      description: 'Write to me or book a free initial call. I\'ll get back to you within 24 hours.',
    },
  },

  // ── Shared UI ────────────────────────────────────────────────────────────────
  ui: {
    learnMore:        'Learn more',
    bookConsultation: 'Free initial call',
    sendMessage:      'Send message',
    responseTime:     'I respond within 24 hours — usually faster.',
    freeConsult:      '20–30 minutes · free · no obligation',
  },
} as const;
