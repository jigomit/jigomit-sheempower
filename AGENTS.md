# Repository Guidelines

## Project Structure & Module Organization
The root `package.json` only relays scripts; the Vue 3 + Vite app lives in `empowerment-site/`. `src/main.ts`, `router.ts`, and `App.vue` wire up the shell, while feature pages live in `src/views/` and reusable UI sits in `src/components/`. Keep structured copy plus TypeScript models in `src/data/content.ts`, static media in `src/assets/`, and CDN-safe files in `public/`. Treat `dist/` as generated output and keep it out of commits.

## Build, Test, and Development Commands
- `npm run dev` — runs Vite with hot reload (proxied to `npm --prefix empowerment-site run dev`).
- `npm run build` — executes `vue-tsc -b` for type safety, then builds the production bundle.
- `npm run preview` — serves the latest build so you can inspect router titles, transitions, and SEO tags.
Run these from the repo root; append `--prefix empowerment-site` if you ever need to call the underlying scripts directly.

## Coding Style & Naming Conventions
Use `<script setup lang="ts">`, two-space indentation, and single quotes. Components are `PascalCase.vue`, composables are `useThing.ts`, and route names stay kebab-case (`get-involved`). Extend the exported interfaces in `src/data/content.ts` instead of creating loose objects. Global CSS belongs in `src/style.css`; scope page-specific styles under `.view-*` class roots to avoid collisions. Always finish with `npm run build` so `vue-tsc` can flag type drift.

## Testing Guidelines
There is no bundled automated suite yet, so regression-test every route (desktop + mobile nav) whenever data or layout changes. If you add Vitest, colocate specs beside the component or under `src/__tests__/`, mock data from `src/data`, and prioritize router guards, CTA buttons, donation flows, and contact links. Include screenshots from `npm run preview` when sharing manual test evidence.

## Commit & Pull Request Guidelines
Upstream history follows conventional commits such as `feat: add impact timeline` and `fix: close mobile menu`. Keep subjects under 50 characters, write bodies in the imperative, and mention tracking issues (`Refs #123`) when relevant. Pull requests should explain the user impact, list commands/tests that were run, and attach before/after screenshots for UI changes so reviewers can validate quickly.

## Security & Configuration Tips
Never embed secrets or unpublished contact info directly into `src/data`; keep them in `empowerment-site/.env.local` (gitignored). Sanitize any third-party embed props and prefer assets in `public/` to avoid broken CDN links. Before deployment, inspect `dist/` for oversized media or content that should remain internal.
