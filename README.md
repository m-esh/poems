# Golshan Raz گلشن راز

_A rose garden of secrets._

A small, unhurried showcase devoted entirely to the poetry of **Jalal ad-Din
Rumi** — his life, his message, and his verse — built to feel like an
illuminated manuscript reimagined for the web: warm parchment tones,
candlelit dark mode, geometric borders, and slow, meditative motion rather
than anything flashy.

## Features

- **Home** — a rotating "poem of the day," a short introduction to the
  collection, and a dedicated section introducing Rumi himself.
- **Library** (`/library`) — every poem in the collection, filterable by
  collection and theme, with filters synced to the URL so a filtered view
  is shareable.
- **Poem pages** (`/poem/[slug]`) — large, readable typography; the Persian
  text (in Noto Nastaliq Urdu) alongside the English; translator credit;
  theme tags; and a reflection/historical-context note.
- **Rumi** (`/poets/rumi`) — a full biography: his life, his meeting with
  Shams-e Tabrizi, the Masnavi, and his message, alongside his poems.
- **Search** (`/search`) — search across titles, lines, and themes.
- **Poem of the day / randomizer** — a deterministic "poem of the day" (same
  for everyone, changes at UTC midnight) plus a "poem of chance" button that
  jumps to a random poem.
- **Favorites** — save poems to a `/favorites` page, stored in
  `localStorage` (no account, no backend).
- **Shareable poem cards** — the share dialog on each poem renders a
  parchment-styled card you can download as a PNG or copy a link to.
- **Scroll-triggered line reveal** — poem lines fade/rise into place as you
  scroll, evoking a slow recitation. Lines are never fully hidden (they
  start partially visible), so the poem — the actual point of the site —
  is always legible even without JavaScript or before the animation runs.
- **Light/dark themes** — "daylight parchment" and "candlelight" (dark),
  toggleable, respecting system preference by default.
- **Responsive** — from a 375px phone to a wide desktop layout.

## Tech stack

- [Next.js](https://nextjs.org) (App Router, TypeScript)
- [Tailwind CSS v4](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com) conventions — components are hand-owned
  source in `src/components/ui`, built on [Radix UI](https://radix-ui.com)
  primitives (the `shadcn` CLI itself needs network access to
  `ui.shadcn.com`, which wasn't available while building this project, so
  the primitives were vendored by hand instead — see
  [Working with shadcn/ui](#working-with-shadcnui) below)
- [Bun](https://bun.sh) as the package manager and script runner
- [motion](https://motion.dev) (Framer Motion's successor) for the scroll
  reveal
- [next-themes](https://github.com/pacocoursey/next-themes) for the
  light/dark toggle
- [html-to-image](https://github.com/bubkoo/html-to-image) for the
  shareable-card PNG export

## Getting started

Requires [Bun](https://bun.sh) 1.x and Node 20.9+.

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
bun run build          # production build
bun run start           # serve the production build
bun run lint             # ESLint
bun run typecheck        # tsc --noEmit
bun run format            # Prettier, writes changes (Tailwind class sorting included)
bun run format:check     # Prettier, check only
```

## Folder structure

```
src/
  app/                     # Next.js App Router routes
    page.tsx                # Home
    library/page.tsx        # Library / browse
    poem/[slug]/page.tsx     # Individual poem
    poets/page.tsx           # Redirects to /poets/rumi
    poets/[slug]/page.tsx    # Rumi's biography + his poems
    search/page.tsx          # Search
    favorites/page.tsx       # Saved poems (client-only, localStorage)
    layout.tsx                # Root layout: fonts, theme provider, header/footer
    globals.css                # Design tokens, palette, fonts, decorative utilities

  components/
    ui/          # shadcn-style primitives (button, card, dialog, select, …)
    site/        # header, footer, theme toggle, ornamental divider
    poems/       # poem-card, library-explorer, poem-lines-reveal,
                 # favorite-button, share-poem-dialog, featured-poem, …

  data/
    poets.json   # a single entry: Rumi
    poems.json   # Rumi's poems

  lib/
    poems.ts     # data-access helpers (filtering, search, poem of the day, …)
    utils.ts     # cn() class-name helper

  hooks/
    use-favorites.ts  # localStorage-backed favorites (useSyncExternalStore)
    use-mounted.ts     # SSR-safe "has this mounted on the client" hook

  types/
    poem.ts      # Poem / Poet / Theme types
```

## Content model

Poems and poets are plain JSON (`src/data/poems.json`,
`src/data/poets.json`), typed via `src/types/poem.ts`. There's no CMS or
database — adding a poem is a pull request, not a migration. The data model
supports multiple poets even though the collection is currently Rumi-only,
so a future expansion doesn't require restructuring anything.

```ts
interface Poem {
  slug: string; // URL slug, unique
  title: string;
  titleOriginal?: string; // Persian title, if known
  poetSlug: string; // must match a Poet.slug
  collection: string; // e.g. "Divan-e Shams-e Tabrizi"
  century: string;
  themes: Theme[]; // "love" | "longing" | "the-divine" | "nature" |
  // "wine-and-ecstasy" | "impermanence" | "unity" | "wisdom"
  translation: string[]; // one entry per line; "" marks a stanza break
  translator: string; // credit line
  originalText?: string[]; // Persian lines, same "" convention, optional
  note: string; // reflection / historical context, shown on the poem page
}
```

### Adding a poem

1. Add a poem object to `src/data/poems.json`. `slug` must be unique and
   URL-safe (kebab-case). `poetSlug` should be `"rumi"` unless the
   collection is expanded to other poets (see `src/data/poets.json`).
2. Split `translation` (and `originalText`, if you have it) into one array
   entry per line; insert an empty string `""` where you want a stanza
   break/blank line.
3. Pick 1–4 `themes` from the existing set (see `THEME_LABELS` in
   `src/lib/poems.ts` if you're adding a new theme — you'll also need to add
   a label there).
4. Run `bun run typecheck` — the JSON is typed, so a missing field or typo
   will surface immediately. Static params for the poem/poet pages are
   generated automatically at build time, so no route wiring is needed.

### A note on translations

Where a poem quotes Rumi's own Persian verbatim (currently: "The Song of the
Reed," the opening of the Masnavi — a very famous, well-attested text), the
`translator` field reads "Rendered for Golshan Raz, after the Persian," and
the `note` says so explicitly. For the other poems in the collection, the
English text is an original composition written for this collection in
Rumi's spirit and imagery — not a translation of one specific historical
verse — and the `translator` field says so plainly ("English original for
Golshan Raz, with a Persian rendering by the editors"). In those cases the
Persian text is the editors' own rendering of the English, offered
alongside it, not a quotation from Rumi's manuscript. This distinction is
spelled out in each poem's `note` field. Please preserve it — don't relabel
an original composition or an editors' rendering as if it were a direct
quotation of Rumi's actual text — when adding poems.

## Design system

Palette, fonts, and both themes live in `src/app/globals.css` as CSS custom
properties (`--background`, `--primary`, `--gold`, `--sienna`, …), mapped to
Tailwind utilities via `@theme inline`. Fonts (declared in
`src/app/layout.tsx`, via `next/font/google`):

- **Cormorant Garamond** — display/titles (`font-display`)
- **Lora** — body text (`font-body`, the default)
- **Noto Nastaliq Urdu** — original Persian text (`font-nastaliq`, `dir="rtl"`)

Decorative motifs (`pattern-lattice` background, `OrnamentalDivider`) are
hand-built CSS/SVG — no external image assets.

## Working with shadcn/ui

Components in `src/components/ui` follow shadcn/ui's conventions
(`components.json`, the same file shapes, Radix + `class-variance-authority`

- `tailwind-merge`) but were added by hand rather than via `bunx shadcn add
<component>`, since the CLI needs to reach `ui.shadcn.com`. If you have
  network access to that host, the CLI should work normally against this repo
  (`bunx shadcn@latest add <component>`) and will follow the existing
  `components.json` config; otherwise, copy the shape of an existing file in
  `src/components/ui` as a template.

One gotcha hit while building this: rendering a component that pulls in
`@radix-ui/react-slot` (i.e. anything using `asChild`, like `Button`)
directly from a Server Component — no `"use client"` anywhere above it in
the tree — could trip a Turbopack/Next 16 bug
(`TypeError: ... createContext is not a function` during
`next build`'s page-data collection). `button.tsx` is marked `"use client"`
to sidestep it; keep that in mind if you add new Radix-backed primitives
that might be rendered from a plain server component.

## Deploying to Vercel

`vercel.json` pins `"framework": "nextjs"` so Vercel uses the Next.js
builder even if the dashboard's Framework Preset was ever set to something
else (a mismatch there causes a build to fail looking for a `public/`
output directory). `package.json` also pins `engines.node` to `>=20.9.0`,
which Next.js 16 requires.

## Linting & formatting

ESLint (`eslint-config-next`) and Prettier (with
`prettier-plugin-tailwindcss` for class sorting) are both configured.
Run `bun run lint` and `bun run format:check` before opening a PR.
