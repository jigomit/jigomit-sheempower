# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Women Empowerment & Safety Foundation website - a single-page, multi-view Vue 3 application showcasing programs, impact metrics, resources, and stories for a fictional foundation focused on women's empowerment through skill training, self-defense, harassment helplines, and career support.

**Stack**: Vue 3 + TypeScript + Vite + Vue Router
**Styling**: Custom CSS with CSS variables (no framework dependencies)
**Content**: Static data exported from `/empowerment-site/src/data/content.ts`

## Development Commands

All commands are run from the **root directory** (which proxies to the `empowerment-site` subdirectory):

```bash
# Start development server (runs on http://localhost:5173)
npm run dev

# Type-check and build for production
npm run build

# Preview production build
npm run preview
```

### Working directly in empowerment-site subdirectory:

```bash
cd empowerment-site

# Development server
npm run dev

# Build (runs vue-tsc -b && vite build)
npm run build

# Preview production build
npm run preview
```

## Architecture

### Application Structure

- **Entry point**: `empowerment-site/src/main.ts` - creates Vue app, registers router, mounts to `#app`
- **Root component**: `empowerment-site/src/App.vue` - contains header, footer, navigation, router view, and back-to-top button (appears after scrolling 300px)
- **Composables**: `empowerment-site/src/composables/` - reusable logic for SEO and structured data
- **Router**: `empowerment-site/src/router.ts` - defines 8 routes with scroll-to-top behavior and dynamic SEO meta tag updates
- **Content data**: `empowerment-site/src/data/content.ts` - single source of truth for all text, stats, programs, stories, resources, etc.
- **Global styles**: `empowerment-site/src/style.css` - CSS variables, typography, component styles

### Views (Routes)

All views are in `empowerment-site/src/views/`:

1. `HomeView.vue` - Hero, stats, impact metrics, news highlights, gallery
2. `ProgramsView.vue` - Four core programs (Skill Training, Self-Defense, Helpline, Career Support)
3. `ImpactView.vue` - Timeline, metrics, initiatives, partner organizations
4. `ResourcesView.vue` - Emergency contacts, helplines, resource centers, FAQs
5. `StoriesView.vue` - Testimonial carousel with survivor stories
6. `GetInvolvedView.vue` - Donation tiers, volunteer tracks, newsletter signup
7. `BlogView.vue` - Blog post listing
8. `BlogPostView.vue` - Individual blog post view (dynamic route: `/blog/:slug`)

### Design System

**Color Palette** (defined in `:root` in `style.css`):
- `--bg`: Deep navy background (#050c18)
- `--primary`: Electric violet (#8c3bff)
- `--secondary`: Coral (#ff6f91)
- `--accent`: Sunshine (#ffd166)
- `--mint`: Mint green (#2edda7)

**Typography**:
- Headings: "Space Grotesk" (Google Fonts)
- Body: "Inter" (Google Fonts)

**Visual Effects**:
- Radial gradient backgrounds with layered effects
- Glassmorphism cards (`backdrop-filter: blur()`)
- Box shadows with colored glows
- Smooth transitions on hover states

### Content Management

All content lives in `empowerment-site/src/data/content.ts` as TypeScript exports:

- `navLinks` - Header navigation items
- `stats` - Hero section KPIs
- `programs` - Four core programs with icons, pillars, stats
- `impactPhases` - Timeline milestones (2014-2024)
- `impactMetrics` - Global impact numbers
- `resources` - Emergency helplines and contact methods
- `stories` - Testimonials from program participants
- `donationTiers` - Donation amounts and impact descriptions
- `volunteerTracks` - Volunteer opportunities
- `newsHighlights` - Press coverage
- `galleryShots` - Photo gallery with captions

**To update content**: Edit the relevant export in `content.ts`. No other files need to change.

### Responsive Design

**Breakpoints** (defined in CSS):
- Base: 0-639px (mobile)
- `md`: 640px+ (tablet)
- `lg`: 1024px+ (desktop)
- `xl`: 1440px+ (large desktop)

**Mobile-first approach**: Base styles target mobile, progressively enhanced with media queries.

**Navigation**: Hamburger menu on mobile (controlled by `mobileNavOpen` ref in `App.vue`), horizontal nav on desktop.

## Key Implementation Patterns

### Component Composition

Views are self-contained and import data directly from `content.ts`. No prop drilling or shared state management (Pinia/Vuex) is used.

Example pattern:
```vue
<script setup lang="ts">
import { programs } from '../data/content'
</script>

<template>
  <div v-for="program in programs" :key="program.title">
    <!-- render program -->
  </div>
</template>
```

### Router Transitions

`App.vue` uses Vue's `<Transition>` component with `fade-slide` animation for view changes. CSS is defined in `style.css`:

```css
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
```

### Accessibility Features

- Semantic HTML5 landmarks (`<header>`, `<nav>`, `<main>`, `<footer>`)
- ARIA labels on interactive elements (e.g., `aria-label="Toggle navigation"`)
- High-contrast color palette
- Focus states defined in CSS (`:focus-visible`)
- Floating help button (`<RouterLink class="floating-help">`) anchored bottom-right
- Back-to-top button for improved navigation on long pages

### SEO & Meta Tag Management

**Automatic SEO optimization** via `router.ts`:
- Each route defines `meta.title`, `meta.description`, `meta.keywords`, and `meta.image`
- Router `afterEach` hook dynamically updates:
  - Document title
  - Meta description and keywords
  - Open Graph tags (og:title, og:description, og:type, og:image, og:url)
  - Twitter Card tags
  - Canonical URL

**Composables** (`src/composables/`):
- `useSEO.ts` - Helper functions for SEO meta tag management
- `useStructuredData.ts` - JSON-LD structured data generation (Organization, WebSite schemas)

**Static SEO files** (in `empowerment-site/public/`):
- `robots.txt` - Search engine crawling directives
- `sitemap.xml` - Site structure for search engines
- Favicon files in multiple sizes (32px, 64px, 180px, 192px, 512px)

### Assets

- **Logo**: `/empowerment-site/public/sheempower-logo.svg`
- **Images**: External URLs from Unsplash (in `content.ts` and view templates)
- **Icons**: Inline SVGs embedded in view templates (see `ProgramsView.vue`)

## Common Tasks

### Adding a new route

1. Create view component in `src/views/`
2. Add route to `src/router.ts` with SEO meta tags:
   ```typescript
   {
     path: '/new-page',
     name: 'new-page',
     component: NewPageView,
     meta: {
       title: 'Page Title | SheEmpower Global',
       description: 'Page description for SEO',
       keywords: ['keyword1', 'keyword2'],
       image: '/image.png'
     }
   }
   ```
3. Add nav link to `src/data/content.ts` (`navLinks` array) if needed for main navigation

### Modifying styles

Global styles in `src/style.css`. Component-specific styles use scoped `<style>` blocks in `.vue` files.

**CSS variable pattern**: Update `:root` variables to change colors/spacing globally.

### TypeScript types

All content types defined at top of `src/data/content.ts`:
- `NavLink`, `Stat`, `Program`, `ImpactPhase`, `Story`, etc.

When adding new data structures, define the type first, then export typed data.

### Working with SEO

**Update meta tags for a route**: Edit the `meta` object in the route definition in `src/router.ts`.

**Add structured data**: Use the `useStructuredData` composable in components:
```typescript
import { useStructuredData } from '@/composables/useStructuredData'

const { addStructuredData, createArticleSchema } = useStructuredData()

// Add article schema for blog posts
const articleSchema = createArticleSchema({
  headline: 'Article Title',
  description: 'Article description',
  author: 'Author Name',
  datePublished: '2024-01-01',
  image: 'https://example.com/image.jpg'
})
addStructuredData(articleSchema)
```

**Update sitemap**: Manually edit `empowerment-site/public/sitemap.xml` when adding new routes.

## Design Philosophy

Per `design-plan.md`, the site emphasizes:

- **Accessibility**: High-contrast palette, focus states, semantic landmarks
- **Trust signals**: Impact metrics, testimonials, partner logos, transparent contact info
- **Immediate help access**: Persistent floating help button, emergency resources prominently featured
- **Aspirational tone**: Gradient overlays, vibrant accents, confident copy
- **Mobile safety**: Sticky help button, responsive helpline cards

The visual language balances **premium feel** (layered gradients, glassmorphism, subtle animations) with **urgency** (bold CTAs, high-contrast emergency resources).

## Research Context

`research-notes.md` documents competitive analysis of:
- UN Women (cinematic hero, multilingual accessibility)
- Malala Fund (portrait photography, sticky donation CTA)
- Vital Voices (asymmetric layouts, resource library filters)
- Women for Women International (warm palette, progress indicators)

Key takeaways incorporated:
- Dual CTA pattern (Donate + Help)
- Icon-based program cards
- Impact timeline
- Testimonial slider
- Floating helpline access
