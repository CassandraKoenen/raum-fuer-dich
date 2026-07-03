# Raum für dich

Static website for [raumfuerdich-impulse.de](https://raumfuerdich-impulse.de), built with [Astro](https://astro.build).

## Prerequisites

- Node.js 18+
- npm

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

Opens a local dev server at `http://localhost:4321` with hot reload.

## Production build

```bash
npm run build
```

Output goes to `dist/`. Preview the production build locally:

```bash
npm run preview
```

## Deployment

The site deploys automatically to Netlify on every push to `main`.

- Build command: `npm run build`
- Publish directory: `dist`
- Contact form submissions appear in the Netlify dashboard under **Forms**
