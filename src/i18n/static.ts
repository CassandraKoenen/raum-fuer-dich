import type { Lang } from './index';

// All non-translated, language-independent static config lives here.
// Translation files (de.ts / en.ts) must contain ONLY translated strings.

export const routes: Record<Lang, Record<string, string>> = {
  de: {
    home:         '/',
    coaching:     '/coaching',
    organizing:   '/organizing',
    fengshui:     '/feng-shui',
    findYourPath: '/finde-deinen-weg',
    blog:         '/inspiration',
    about:        '/ueber-mich',
    contact:      '/kontakt',
    langSwitch:   '/en',
  },
  en: {
    home:         '/en',
    coaching:     '/en/coaching',
    organizing:   '/en/organizing',
    fengshui:     '/en/feng-shui',
    findYourPath: '/en/find-your-path',
    blog:         '/en/inspiration',
    about:        '/en/about',
    contact:      '/en/contact',
    langSwitch:   '/',
  },
} as const;

// Icons for landing page "why" pillars – same order as the translation pillars array.
export const pillarIcons = ['🧠', '🌀', '😮‍💨', '✨', '⚡', '🌿', '🎯', '🌱'] as const;

// Color theme + route key for landing page path cards – same order as the translation cards array.
export const pathCards = [
  { color: 'blue',  route: 'coaching'   },
  { color: 'green', route: 'organizing' },
  { color: 'sand',  route: 'fengshui'  },
] as const;

// Icons for organizing services – same order as the translation services array.
export const organizingServiceIcons = ['📦', '🗂️', '✨', '🚛'] as const;

// Icons for feng shui aspects – same order as the translation aspects array.
export const fengshuiAspectIcons = ['🌊', '🎨', '🌿', '📐'] as const;

// Color theme + route key for "find your path" options – same order as the translation options array.
export const findYourPathOptions = [
  { color: 'blue',  route: 'coaching'   },
  { color: 'green', route: 'organizing' },
  { color: 'sand',  route: 'fengshui'  },
] as const;

// Icons for about page values – same order as the translation values.items array.
export const aboutValueIcons = ['🌿', '🐢', '♻️'] as const;
