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

## Documentation

Full documentation: https://docs.astro.build

- [Routing](https://docs.astro.build/en/guides/routing/)
- [Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Framework components](https://docs.astro.build/en/guides/framework-components/) (only once one is integrated)
- [Styling](https://docs.astro.build/en/guides/styling/)
