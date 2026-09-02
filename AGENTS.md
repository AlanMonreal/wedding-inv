## Design Standard

Every design decision on this project targets awwwards-honorable quality. This is not a template — the site should feel editorial, considered, and confident. Apply this to any UI change, without needing to be reminded:

- **Composition first.** Think magazine spread, not admin panel. Intentional negative space, deliberate asymmetry when it earns it, cohesive rhythm across sections.
- **Verify visually before claiming done.** Any layout change gets loaded in the browser at both a phone width (~375px) and a desktop width (≥1280px). If the composition feels stranded, sparse, floating, or accidentally decorative, iterate before reporting — don't ship "technically correct but visually off."
- **Short content still deserves presence.** A section with only two entries should feel curated, not empty. Redesign the layout, don't just center smaller cards in dead space.
- **Bold typography over safe typography.** Display type is a design element — lean into scale and weight. Body copy stays restrained. Never both timid.
- **Photos are anchors, not stranded elements.** Integrate them with adjacent typography (aligned baselines, deliberate crops via `aspect-ratio` + `object-fit`, considered proportions). A tall portrait dropped into a text column at natural aspect is almost always wrong.
- **Motion is design.** Reveal transitions, hover states, and dialog behavior should feel considered — not the browser default and not stock ease-in-out.
- **Avoid template patterns.** Symmetric grids of identical cards, tiny centered lists, generic underline-on-hover, evenly-spaced everything. Prefer variation with intent.
- **When a layout uses CSS grid,** be explicit about spans and rows. `grid-row: 1 / -1` requires explicit `grid-template-rows` — otherwise `-1` collapses and the span silently doesn't happen.

If the user has to point out that a design "looks off" or ask whether it's awwwards-worthy, that's a signal the standard wasn't applied — treat it as a real bug, not a taste disagreement.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Key Principles

- Write concise, technical responses with accurate Astro examples.
- Prioritize static generation and minimal client-side JavaScript.
- Use descriptive variable and component names.
- Organize files using Astro's file-based routing (`src/pages/`).

## Project Structure

- `src/pages/` — routes. Use `[...slug].astro` + `getStaticPaths()` for dynamic routes, and `404.astro` for not-found handling.
- `src/components/`, `src/layouts/`, `src/styles/` — create as needed; none exist yet beyond `src/pages/index.astro`.
- No UI framework (React/Vue/Svelte) or CSS framework (Tailwind) is installed. Don't reference `@astrojs/tailwind`, `tailwind.config.cjs`, or framework components unless the corresponding integration has actually been added to `astro.config.mjs` and `package.json`.

## Components & Styling

- Use `.astro` components with `Astro.props` for data passing.
- Use scoped `<style>` tags in `.astro` files; promote to a shared stylesheet in a layout only when styles are genuinely global.
- Implement responsive design with CSS custom properties and media queries.

## Performance & Accessibility

- Minimize client-side JavaScript; reach for `client:*` directives deliberately (`client:load` for immediately-needed interactivity, `client:idle`/`client:visible` otherwise).
- Lazy-load images and non-critical assets.
- Use semantic HTML, ARIA attributes where needed, and ensure keyboard navigation works for interactive elements.

## Code Documentation

- Add JSDoc comments to every new or updated component, function, and class — describe purpose, params, and return values.
- Follow CUPID properties for code you write or touch:
  - **Composable** — small pieces that combine well, minimal dependencies.
  - **Unix philosophy** — each component/function does one thing well.
  - **Predictable** — behaves as it looks; no surprising side effects.
  - **Idiomatic** — reads like natural Astro/TypeScript, matches surrounding code.
  - **Domain-based** — names and structure reflect the problem domain (wedding invite content/flow), not incidental implementation details.

## Key Conventions

- Use TypeScript for type safety.
- Handle errors at actual boundaries (data fetching, external calls) — don't add speculative error handling for cases that can't occur.
- Write all code comments, file/variable/component names, commit messages, and documentation (this file, README, etc.) in English. This does not apply to the guest-facing copy rendered on the page (invitation text, venue names, RSVP labels) — that stays in Spanish for the wedding's Spanish-speaking guests.

## Documentation

Full documentation: https://docs.astro.build

- [Routing](https://docs.astro.build/en/guides/routing/)
- [Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Framework components](https://docs.astro.build/en/guides/framework-components/) (only once one is integrated)
- [Styling](https://docs.astro.build/en/guides/styling/)
