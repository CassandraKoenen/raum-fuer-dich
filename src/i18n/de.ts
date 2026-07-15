export const de = {
  lang: 'de',
  dir: 'ltr',

  // ── Nav ─────────────────────────────────────────────────────────────────────
  nav: {
    coaching:     'Coaching',
    organizing:   'Organizing',
    fengshui:     'Feng Shui',
    findYourPath: 'Finde deinen Weg',
    blog:         'Inspiration',
    about:        'Über mich',
    contact:      'Kontakt',
    langSwitch:   'English',
    langSwitchHref: '/en',
  },

  // ── Footer ──────────────────────────────────────────────────────────────────
  footer: {
    tagline:    'Ordnung im Außen. Ruhe im Innen.',
    navigation: 'Navigation',
    legal:      'Rechtliches',
    impressum:  'Impressum',
    datenschutz:'Datenschutz',
    contact:    'Kontakt',
    instagram:  'Instagram',
    youtube:    'YouTube',
    rights:     '© 2026 Raum für dich · Cassandra Koenen',
  },

  // ── Landing page ────────────────────────────────────────────────────────────
  landing: {
    hero: {
      label:    'Raum für dich',
      headline: 'Ordnung im Außen.\nRuhe im Innen.',
      body:     'Ein Zuhause, das die Person trägt, die du sein möchtest.',
      cta:      'Finde deinen Weg',
      ctaHref:  '/finde-deinen-weg',
    },
    why: {
      label:    'Warum es wichtig ist',
      headline: 'Deine Umgebung formt dich',
      body:     'Die Atmosphäre unserer Umgebung beeinflusst direkt, wie wir uns fühlen – ob wir es bemerken oder nicht. Ein unruhiger, chaotischer Raum raubt Energie und hält uns in alten Gewohnheiten fest. Ein bewusst gestalteter Raum hingegen schenkt Leichtigkeit, Klarheit und innere Ruhe. Er unterstützt uns dabei, das Leben zu führen, das wir uns wirklich wünschen.',
      pillars: [
        { icon: '🧠', label: 'Gedanken',    text: 'Unordnung lenkt ab und belastet das Arbeitsgedächtnis.' },
        { icon: '🌀', label: 'Gewohnheiten', text: 'Klare Strukturen machen gute Gewohnheiten leichter.' },
        { icon: '😮‍💨', label: 'Stress',      text: 'Chaos erhöht das Stresshormon Cortisol messbar.' },
        { icon: '✨', label: 'Kreativität',  text: 'Freier Raum schafft Raum für neue Gedanken.' },
        { icon: '⚡', label: 'Energie',      text: 'Ordnung gibt Energie zurück, die das Chaos bindet.' },
        { icon: '🌿', label: 'Wohlbefinden', text: 'Ein stimmiges Zuhause nährt Körper und Geist.' },
      ],
    },
    paths: {
      label:    'Drei Wege',
      headline: 'Wo stehst du gerade?',
      cards: [
        {
          feeling:     'Ich weiß nicht, wo ich anfangen soll.',
          service:     'Decluttering Coaching',
          description: 'Schritt für Schritt zu mehr Klarheit, nachhaltigen Gewohnheiten und dem Gefühl, wieder Kontrolle zu haben.',
          cta:         'Mehr erfahren',
          href:        '/coaching',
          color:       'blue',
        },
        {
          feeling:     'Ich habe keine Zeit dafür.',
          service:     'Professional Organizing',
          description: 'Wir übernehmen das Aussortieren, Organisieren und Reinigen – und hinterlassen Systeme, die bleiben.',
          cta:         'Mehr erfahren',
          href:        '/organizing',
          color:       'green',
        },
        {
          feeling:     'Ich möchte mehr aus meinem Zuhause machen.',
          service:     'Feng Shui & Intentional Living',
          description: 'Gestalte dein Zuhause so, dass es deine Ziele, deine Energie und deine Zukunft trägt.',
          cta:         'Mehr erfahren',
          href:        '/feng-shui',
          color:       'sand',
        },
      ],
    },
    timeline: {
      label:    'Der Weg',
      headline: 'Alles beginnt mit Klarheit.',
      body:     'Decluttering ist fast immer der erste Schritt. Nicht weil Ordnung das Ziel ist – sondern weil sie der Anfang von allem anderen ist. Aus Klarheit entstehen Systeme. Aus Systemen entsteht Leichtigkeit. Aus Leichtigkeit entsteht Raum für Wachstum.',
      steps: [
        { label: 'Chaos',      description: 'Überwältigend. Lähmend. Kostet Energie.' },
        { label: 'Klarheit',   description: 'Der erste Atemzug. Alles wird möglich.' },
        { label: 'Leichtigkeit', description: 'Systeme tragen sich selbst.' },
        { label: 'Wachstum',   description: 'Raum für das Leben, das du willst.' },
      ],
    },
    about: {
      label:    'Über mich',
      headline: 'Hinter Raum für dich',
      body:     'Ich bin Cassandra – und was mich antreibt, ist nicht das Aufräumen selbst, sondern das, was danach passiert: wenn jemand aufatmet, sich umsieht und merkt, dass sich auch innen etwas gelöst hat.',
      cta:      'Mehr über mich',
      ctaHref:  '/ueber-mich',
    },
    social: {
      label:       'Inspiration',
      headline:    'Lass dich inspirieren',
      body:        'Tipps, Einblicke und ehrliche Gedanken rund um Ordnung, Zuhause und bewusstes Leben.',
      latestVideo: 'Neuestes Video',
      instagram:   'Instagram',
      newsletter: {
        headline:    'Bleib in Verbindung',
        body:        'Regelmäßige Impulse für mehr Klarheit und Leichtigkeit – direkt in dein Postfach.',
        placeholder: 'Deine E-Mail-Adresse',
        cta:         'Anmelden',
        note:        'Kein Spam. Jederzeit abmeldbar.',
      },
    },
  },

  // ── Coaching page ────────────────────────────────────────────────────────────
  coaching: {
    meta: {
      title:       'Decluttering Coaching',
      description: 'Schritt für Schritt zu mehr Klarheit – persönliches Ordnungscoaching vor Ort oder per Video in der Umgebung Kaiserslautern.',
    },
    hero: {
      label:    'Decluttering Coaching',
      headline: 'Der sanfte Weg\nzur Klarheit.',
      body:     'Du musst nicht erst wissen, wo du anfängst. Genau dafür bin ich da.',
    },
    intro: {
      headline: 'Klarheit entsteht nicht allein',
      body:     'Die meisten Menschen wissen, dass sich etwas ändern muss. Aber das Chaos wirkt überwältigend, der Anfang ungreifbar. Ich begleite dich – ohne Druck, ohne Urteile, mit echter Unterstützung.',
      quote:    '„Wir finden gemeinsam einen Anfang – egal, wie groß das Chaos gerade wirkt."',
    },
    offerings: [
      {
        label:      'Vor Ort',
        headline:   'Coaching bei dir zu Hause',
        body:       'Gemeinsam gehen wir durch deine Räume – ohne Druck, ohne perfekte Pläne. Wir schauen, was funktioniert, was nicht, und finden praktische Lösungen, die zu deinem Alltag passen.\n\nDu brauchst nicht aufzuräumen, bevor ich komme. Ich bin da, um dir dabei zu helfen – nicht um zu urteilen.',
        details: [
          { label: 'Dauer', value: 'Individuell nach Bedarf' },
          { label: 'Ort',   value: 'Bei dir zu Hause (Umgebung Kaiserslautern)' },
          { label: 'Preis', value: 'Auf Anfrage – Budgetanpassung möglich' },
        ],
        cta:     'Jetzt anfragen',
        ctaHref: '/kontakt',
      },
      {
        label:    'Online',
        headline: 'Begleitung per Video',
        body:     'Du zeigst mir per Videoanruf, was dich beschäftigt – und wir erarbeiten gemeinsam Schritt für Schritt, was als Nächstes dran ist. Flexibel, persönlich und von überall aus möglich.\n\nOnline-Coaching ist oft leichter als gedacht: keine Terminanreise, keine fremde Person in der Wohnung – trotzdem echte Unterstützung.',
        details: [
          { label: 'Dauer',  value: '60 Minuten pro Session' },
          { label: 'Format', value: 'Video (Zoom, FaceTime o.ä.)' },
          { label: 'Preis',  value: 'Auf Anfrage – Budgetanpassung möglich' },
        ],
        cta:     'Termin buchen',
        ctaHref: '/kontakt',
      },
    ],
    faq: {
      label:    'Häufige Fragen',
      headline: 'Was dich vielleicht beschäftigt',
      items: [
        { q: 'Muss mein Zuhause aufgeräumt sein, bevor wir uns treffen?', a: 'Nein – ganz im Gegenteil. Ich komme genau dann, wenn es unübersichtlich ist. Du musst nichts vorbereiten oder verstecken.' },
        { q: 'Wie lange dauert eine Zusammenarbeit?', a: 'Das ist sehr individuell. Manche Menschen brauchen eine einzige Session, um wieder in die Gänge zu kommen. Andere begleite ich über mehrere Wochen. Wir schauen gemeinsam, was für dich sinnvoll ist.' },
        { q: 'Was kostet die Begleitung?', a: 'Ich erstelle dir gerne ein individuelles Angebot. Mir ist es wichtig, dass meine Unterstützung zugänglich ist – sprich mich an, wenn das Budget ein Thema ist. Das Erstgespräch ist immer kostenlos.' },
        { q: 'Ich bin sehr unordentlich – ist das ein Problem?', a: 'Nein. Ich arbeite mit echten Menschen in echten Wohnungen. Es gibt kein Chaos, das „zu schlimm" wäre.' },
        { q: 'Was passiert nach dem Erstgespräch?', a: 'Du entscheidest, ob und wie wir weitermachen möchten. Ich unterbreite dir einen Vorschlag – aber der letzte Schritt liegt immer bei dir.' },
      ],
    },
    cta: {
      headline: 'Bereit für den ersten Schritt?',
      body:     'Das Erstgespräch ist kostenlos und unverbindlich. Einfach melden.',
      cta:      'Kostenloses Erstgespräch',
      ctaHref:  '/kontakt',
    },
  },

  // ── Organizing page ──────────────────────────────────────────────────────────
  organizing: {
    meta: {
      title:       'Professional Organizing',
      description: 'Kein Zeit? Wir übernehmen das komplette Aussortieren, Organisieren und Einrichten von Systemen – für dich.',
    },
    hero: {
      label:    'Professional Organizing',
      headline: 'Du musst es nicht\nselbst tun.',
      body:     'Wir kommen, wir organisieren, wir hinterlassen Ordnung, die bleibt.',
    },
    intro: {
      headline: 'Übergib die Last',
      body:     'Manchmal fehlt nicht der Wille – sondern schlicht die Zeit oder die Energie. Der Professional Organizing Service ist für Menschen, die eine fertige Lösung möchten: kein Coaching, kein Prozess, sondern konkretes Ergebnis.',
    },
    services: [
      { icon: '📦', label: 'Aussortieren',    text: 'Wir gehen durch alles – systematisch und ohne Druck.' },
      { icon: '🗂️', label: 'Organisieren',    text: 'Wir schaffen Systeme, die zu deinem Alltag passen.' },
      { icon: '✨', label: 'Einrichten',      text: 'Alles bekommt seinen Platz – durchdacht und schön.' },
      { icon: '🚛', label: 'Entsorgung',      text: 'Wir kümmern uns um Abtransport und Entsorgung.' },
    ],
    cta: {
      headline: 'Interesse? Lass uns sprechen.',
      body:     'Schildere mir kurz deine Situation – ich melde mich innerhalb von 24 Stunden.',
      cta:      'Anfrage senden',
      ctaHref:  '/kontakt',
    },
  },

  // ── Feng Shui page ───────────────────────────────────────────────────────────
  fengshui: {
    meta: {
      title:       'Feng Shui & Intentional Living',
      description: 'Gestalte dein Zuhause so, dass es deine Ziele und dein Wohlbefinden trägt – mit Feng Shui und bewusstem Wohndesign.',
    },
    hero: {
      label:    'Feng Shui & Intentional Living',
      headline: 'Ein Zuhause, das\nfür dich arbeitet.',
      body:     'Wenn Klarheit geschaffen ist, beginnt die Gestaltung. Dein Raum kann mehr sein als Hintergrund – er kann dich aktiv unterstützen.',
    },
    intro: {
      headline: 'Mehr als Einrichtung',
      body:     'Feng Shui ist keine Mystik – es ist das uralte Wissen, dass unsere Umgebung uns psychologisch, energetisch und emotional beeinflusst. Gemeinsam analysieren wir deinen Raum und gestalten ihn so, dass er deine Ziele, deine Gesundheit und dein Wohlbefinden trägt.',
      quote:    '„Dein Zuhause ist kein Hintergrund. Es ist ein aktiver Teilnehmer in deinem Leben."',
    },
    aspects: [
      { icon: '🌊', label: 'Energiefluss',     text: 'Wir analysieren, wie Energie durch deine Räume fließt – und optimieren sie.' },
      { icon: '🎨', label: 'Farbe & Licht',    text: 'Bewusste Farbwahl und Lichtgestaltung beeinflussen Stimmung und Fokus.' },
      { icon: '🌿', label: 'Natur & Elemente', text: 'Natürliche Materialien und Elemente schaffen Gleichgewicht.' },
      { icon: '📐', label: 'Raumgestaltung',   text: 'Möbelanordnung und Proportionen, die sich richtig anfühlen.' },
    ],
    cta: {
      headline: 'Bereit, deinen Raum zu transformieren?',
      body:     'Lass uns in einem kostenlosen Erstgespräch herausfinden, wie ich dir helfen kann.',
      cta:      'Erstgespräch buchen',
      ctaHref:  '/kontakt',
    },
  },

  // ── Find your path ───────────────────────────────────────────────────────────
  findYourPath: {
    meta: {
      title:       'Finde deinen Weg',
      description: 'Nicht sicher, welches Angebot zu dir passt? Dieser kurze Guide hilft dir, den richtigen Einstieg zu finden.',
    },
    hero: {
      label:    'Orientierung',
      headline: 'Finde deinen Weg.',
      body:     'Jeder Mensch ist anders. Jede Situation ist anders. Hier findest du heraus, welcher Weg gerade der richtige für dich ist.',
    },
    question: 'Was beschreibt deine Situation am besten?',
    options: [
      {
        feeling:     'Ich fühle mich überwältigt und weiß nicht, wo ich anfangen soll.',
        answer:      'Decluttering Coaching ist dein Einstieg.',
        description: 'Ich begleite dich persönlich – Schritt für Schritt, in deinem Tempo, ohne Druck.',
        cta:         'Zum Coaching',
        href:        '/coaching',
        color:       'blue',
      },
      {
        feeling:     'Ich brauche eine fertige Lösung – ich habe keine Zeit oder Energie dafür.',
        answer:      'Professional Organizing ist gemacht für dich.',
        description: 'Wir übernehmen alles für dich und hinterlassen ein Ergebnis, das sich sofort richtig anfühlt.',
        cta:         'Zum Organizing Service',
        href:        '/organizing',
        color:       'green',
      },
      {
        feeling:     'Mein Zuhause ist ordentlich – aber es fühlt sich nicht richtig an.',
        answer:      'Feng Shui & Intentional Living ist dein nächster Schritt.',
        description: 'Wir gehen tiefer: Wie unterstützt dein Raum wirklich deine Ziele und dein Wohlbefinden?',
        cta:         'Zur Raumgestaltung',
        href:        '/feng-shui',
        color:       'sand',
      },
    ],
  },

  // ── Blog ────────────────────────────────────────────────────────────────────
  blog: {
    meta: {
      title:       'Inspiration',
      description: 'Gedanken, Tipps und Einblicke rund um Ordnung, bewusstes Wohnen und das Leben, das du dir wünschst.',
    },
    hero: {
      label:    'Inspiration',
      headline: 'Gedanken für\nmehr Leichtigkeit.',
      body:     'Ehrliche Einblicke, praktische Tipps und Impulse für ein Leben mit mehr Raum.',
    },
    comingSoon: 'Bald hier – erste Beiträge in Vorbereitung.',
  },

  // ── About ────────────────────────────────────────────────────────────────────
  about: {
    meta: {
      title:       'Über mich – Cassandra Koenen',
      description: 'Ich bin Cassandra – Ordnungscoach aus Kaiserslautern. Inspiriert durch Feng Shui helfe ich Menschen, ihren Raum zu befreien und dadurch innerlich leichter zu werden.',
    },
  },

  // ── Contact ──────────────────────────────────────────────────────────────────
  contact: {
    meta: {
      title:       'Kontakt',
      description: 'Schreib mir oder buch direkt ein kostenloses Erstgespräch. Ich melde mich innerhalb von 24 Stunden bei dir.',
    },
  },

  // ── Shared UI ────────────────────────────────────────────────────────────────
  ui: {
    learnMore:       'Mehr erfahren',
    bookConsultation:'Kostenloses Erstgespräch',
    sendMessage:     'Nachricht senden',
    responseTime:    'Ich antworte innerhalb von 24 Stunden – meistens schneller.',
    freeConsult:     '20–30 Minuten · kostenlos · unverbindlich',
  },
} as const;

export type Translations = typeof de;
