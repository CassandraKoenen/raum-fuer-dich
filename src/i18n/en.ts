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
    meta: {
      title:       'Raum für dich',
      description: 'A home that supports the person you want to become. Decluttering Coaching, Professional Organizing and Feng Shui.',
    },
    hero: {
      label:    'Raum für dich',
      headline: 'Order on the outside.\nPeace on the inside.',
      body:     'A home that supports the person you want to become.',
      cta:      'Find your path',
    },
    why: {
      label:    'Why it matters',
      headline: 'Your environment shapes you',
      body:     'The atmosphere of our surroundings directly influences how we feel—whether we realize it or not. A restless, chaotic space drains our energy and keeps us stuck in old habits. A thoughtfully designed space, on the other hand, brings a sense of lightness, clarity, and inner peace. It helps us live the life we truly desire.',
      pillars: [
        { label: 'Thoughts',    text: 'Clutter distracts and burdens your working memory.' },
        { label: 'Habits',       text: 'Clear structures make good habits effortless.' },
        { label: 'Stress',      text: 'Chaos measurably raises the stress hormone cortisol.' },
        { label: 'Creativity',   text: 'Free space makes room for new ideas.' },
        { label: 'Energy',       text: 'Order returns the energy that chaos consumes.' },
        { label: 'Wellbeing',    text: 'A harmonious home nourishes body and mind.' },
        { label: 'Goals',        text: 'An intentionally designed space supports your goals.' },
        { label: 'Growth',       text: 'Our surroundings shape us, so we start by shaping them.' },
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
        },
        {
          feeling:     'I don\'t have the time.',
          service:     'Professional Organizing',
          description: 'We handle the sorting, organizing and cleaning — leaving behind systems that actually last.',
          cta:         'Learn more',
        },
        {
          feeling:     'I want more from my home.',
          service:     'Feng Shui & Intentional Living',
          description: 'Learn how your home becomes a support for your personal goals - intentional, effective and effortless.',
          cta:         'Learn more',
        },
      ],
    },
    timeline: {
      label:    'The journey',
      headline: 'Everything begins with clarity.',
      body:     'Decluttering is almost always the first step. Not because order is the goal — but because it is the beginning of everything else. From clarity come systems. From systems comes ease. From ease comes room for growth.',
      steps: [
        { label: 'Chaos',   description: 'Overwhelming. Paralyzing. Drains your energy.' },
        { label: 'Clarity', description: 'The first breath. Everything becomes possible.' },
        { label: 'Ease',    description: 'Systems carry themselves.' },
        { label: 'Growth',  description: 'Your home works for your goals.' },
      ],
    },
    about: {
      label:    'About',
      headline: 'Behind Raum für dich',
      body:     'I\'m Cassandra — and I believe our environment has more influence on our lives than we often realise. What fascinates me is not the tidying itself, but how a thoughtfully designed home creates clarity, supports good habits and opens up space for personal growth.',
      cta:      'More about me',
    },
    social: {
      label:        'Inspiration',
      headline:     'Get inspired',
      body:         'Tips, insights and honest thoughts on organizing, intentional living and creating a home that truly supports you.',
      latestVideo:  'Latest video',
      instagram:    'Instagram',
      instagramCta: 'Follow on Instagram',
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
        cta:     'Get in touch',
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
      { label: 'Sorting',    text: 'We go through everything — systematically and without pressure.' },
      { label: 'Organizing', text: 'We create systems that fit your everyday life.' },
      { label: 'Setting up', text: 'Everything gets its place — thoughtfully and beautifully.' },
      { label: 'Disposal',   text: 'We handle transport and disposal.' },
    ],
    cta: {
      headline: 'Interested? Let\'s talk.',
      body:     'Tell me briefly about your situation — I\'ll get back to you within 24 hours.',
      cta:      'Send an enquiry',
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
      { label: 'Energy flow',       text: 'We analyse how energy flows through your spaces — and optimise it.' },
      { label: 'Colour & light',    text: 'Conscious colour and lighting choices influence mood and focus.' },
      { label: 'Texture & materials', text: 'Natural materials and textures create balance.' },
      { label: 'Spatial design',    text: 'Furniture placement and proportions that simply feel right.' },
    ],
    cta: {
      headline: 'Ready to transform your space?',
      body:     'Let\'s find out in a free initial call how I can help you.',
      cta:      'Book initial call',
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
      },
      {
        feeling:     'I need a finished solution — I don\'t have the time or energy.',
        answer:      'Professional Organizing is made for you.',
        description: 'We handle everything for you and leave a result that feels right immediately.',
        cta:         'Explore organizing',
      },
      {
        feeling:     'My home is tidy — but it doesn\'t feel right.',
        answer:      'Feng Shui & Intentional Living is your next step.',
        description: 'We go deeper: how does your space truly support your goals and wellbeing?',
        cta:         'Explore Feng Shui',
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
    comingSoon:    'Coming soon — first posts in preparation.',
    comingSoonSub: 'In the meantime: follow me on Instagram for regular inspiration.',
    contactButton: 'Write to me directly',
  },

  // ── About ────────────────────────────────────────────────────────────────────
  about: {
    meta: {
      title:       'About – Cassandra Koenen',
      description: 'I\'m Cassandra — an organizing coach based near Kaiserslautern. Inspired by Feng Shui, I help people free their spaces and feel lighter within.',
    },
    hero: {
      label:    'About',
      headline: 'Behind Raum für dich',
      body:     'I\'m Cassandra — for me, change often begins at home. Through a combination of organising, spatial design and coaching, I help you transform chaos into clarity, build lasting structures and create spaces that support your personal growth. The result is not just more order, but a home that gives you energy and accompanies you on your path.',
    },
    story: {
      label:    'My path',
      headline: 'Why I do what I do',
      paragraphs: [
        'Organising, structuring and redesigning spaces have always brought me joy. At some point I realised I didn\'t just want to use this knowledge and these skills for myself — I wanted to share them with others, to help them find more clarity, lightness and quality of life.',
        'When I began studying Feng Shui, the ancient Chinese art of harmony, I came to understand just how deeply our environment influences us — psychologically and even physically. Our home should be a safe place — one that gives us strength rather than drains it. When we organise and consciously shape our surroundings, we begin to feel lighter inside. That\'s not theory — it\'s an experience I share with people again and again.',
        'I want to accompany you in finding that space — space for what truly matters to you, for your passions and the life you want to live.',
      ],
    },
    values: {
      label:    'What guides me',
      headline: 'What matters to me in our work together',
      items: [
        { label: 'No perfection',  text: 'Order doesn\'t have to be flawless. It just needs to feel right — for you, in your life, right now.' },
        { label: 'Your pace',      text: 'We go as fast or as slowly as you want. No pressure, no comparison.' },
        { label: 'Lasting change', text: 'Not a one-time tidy-up — but structures that genuinely last and suit you.' },
      ],
    },
    process: {
      label:    'How I work',
      headline: 'A simple, clear path',
      body:     'No complicated programme. Three steps that feel honest and human.',
      steps: [
        { step: '01', title: 'First contact',    text: 'We talk for 20–30 minutes, free of charge. You tell me what\'s on your mind — I listen, without judgement.' },
        { step: '02', title: 'Working together', text: 'We start where it makes the most sense for you. Not where it looks easiest — but where it really helps.' },
        { step: '03', title: 'Your space',       text: 'You don\'t just get order — you get a home that gives you strength every single day. Very real.' },
      ],
    },
    cta: {
      headline: 'Get to know me',
      body:     'No obligation. Just an open conversation — and who knows, maybe the beginning of something lighter.',
      button:   'Free initial call',
    },
  },

  // ── Contact ──────────────────────────────────────────────────────────────────
  contact: {
    meta: {
      title:       'Contact',
      description: 'Write to me or book a free initial call. I\'ll get back to you within 24 hours.',
    },
    hero: {
      label:    'Contact',
      headline: 'Let\'s talk',
      body:     'Got a question, a specific situation, or just want to see if we\'re a good fit? I\'d love to hear from you.',
    },
    form: {
      label:    'Write to me',
      headline: 'Your message',
      lead:     'I\'ll get back to you within 24 hours — usually faster.',
      name:     { label: 'Name',         placeholder: 'Your name' },
      email:    { label: 'Email',        placeholder: 'your@email.com' },
      phone:    { label: 'Phone',        optional: '(optional)', placeholder: '+44 ...' },
      message:  { label: 'Your message', placeholder: 'Tell me briefly about your situation…' },
      branch: {
        label:   'I\'m interested in...',
        none:    'No selection',
        options: [
          { value: 'coaching',   label: 'Coaching' },
          { value: 'organizing', label: 'Decluttering & Organizing' },
          { value: 'fengshui',   label: 'Feng Shui' },
        ],
      },
      images: {
        label:   'Upload photos',
        hint:    'Up to 5 images (JPG, PNG, WEBP) – optional',
        tooMany: 'Please select a maximum of 5 images.',
      },
      privacyBefore: 'I have read the ',
      privacyLink:   'privacy policy',
      privacyAfter:  ' and agree to the processing of my data.',
      submit:   'Send message',
      success:  '✓ Your message has been sent. I\'ll be in touch soon.',
      error:    'Something went wrong. Please write to me at info@raumfuerdich-impulse.de.',
    },
    alt: {
      label:    'Or directly',
      headline: 'Other ways to reach me',
      email:    { label: 'Email',    value: 'info@raumfuerdich-impulse.de' },
      whatsapp: { label: 'WhatsApp', text: 'Quick message, quick reply' },
      response: 'I respond within 24 hours — usually faster.',
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
