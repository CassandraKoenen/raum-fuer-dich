import { de } from './de';
import { en } from './en';

export type Lang = 'de' | 'en';

export const translations = { de, en } as const;

export function t(lang: Lang) {
  return translations[lang];
}

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  if (first === 'en') return 'en';
  return 'de';
}

export function getAlternateUrl(url: URL, targetLang: Lang): string {
  const path = url.pathname;
  if (targetLang === 'en') {
    return path.startsWith('/en') ? path : `/en${path === '/' ? '' : path}`;
  } else {
    return path.startsWith('/en') ? path.replace(/^\/en/, '') || '/' : path;
  }
}
