# Poorna & Kaushi · Uruthi Varthai & Dinner

A mobile-first, animated invitation in English and Tamil for **20 November 2026, 7–9 AM IST**, at Annapurna Arunya Hall, Coimbatore. Followed by dinner at **550 Kottur Road, S L Patti, Pollachi**.

[Live invitation](https://poorna-kaushi-uruthi-varthai-and-dinner.netlify.app/) · [Tamil invitation](https://poorna-kaushi-uruthi-varthai-and-dinner.netlify.app/?lang=ta)

## Development

```sh
npm ci
npm run dev
```

## Production build

```sh
npm run build
```

The static website is generated in `dist/`. It requires no environment variables, accounts, or backend.

## Netlify continuous deployment

The Netlify project `poorna-kaushi-uruthi-varthai-and-dinner` is connected to this GitHub repository, with `main` as the production branch. The included `netlify.toml` configures:

- Build command: `npm run build`
- Publish directory: `dist`
- Node.js: `22`

Pushes to `main` trigger Netlify builds and production deployments through the repository's active push webhook. Netlify accesses the repository with a read-only deploy key.

## Content and assets

- Invitation details and map location: `src/content.js`
- English and Tamil text: `src/translations.js`
- Page structure and scroll animation: `src/main.js`
- Styles: `src/style.css`, `src/opening.css`, `src/venue.css`, `src/responsive.css`, and `src/language.css`
- Current source portraits: `Poorna-c.png` and `Kaushi-c.png`
- Optimized portraits and messenger preview: `public/images/`
- Bundled typefaces and licenses: `public/fonts/`

This is the separate ceremony-and-dinner invitation. Dinner details are stored in `src/content.js`, with English and Tamil labels in `src/translations.js`.

The language switcher remembers the guest's choice. Add `?lang=ta` to open the Tamil invitation directly. The map is requested only when a guest opens it. Reduced-motion preferences show a static version of the opening.

Run `node scripts/prepare-assets.mjs` when regenerating portraits, the sharing image, and English fonts. Run `node scripts/prepare-tamil-fonts.mjs` to regenerate Tamil fonts. These scripts need internet access to fetch fonts; ordinary builds use the included local assets.

The production URL, canonical link, and absolute messenger preview URL are set in `index.html`.
