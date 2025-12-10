## Women Empowerment & Safety Foundation – Site Architecture

### Overall approach
- Stack: Vue 3 + Vite + TypeScript + Tailwind-like utility layer via custom CSS variables for flexibility without dependencies.
- Single-page landing with smooth-scrolling nav, but componentized sections for maintainability.
- Emphasis on accessibility (high-contrast palette, focus states, semantic landmarks).

### Sections & Components
1. **Navigation/Header**
   - Logo lockup + tagline.
   - Links: Programs, Impact, Resources, Stories, Join Us.
   - Primary CTA button: “Donate Now”; Secondary: “Need Help?” triggers helpline drawer.

2. **Hero**
   - Split layout: text + CTA stack, and collage card (image overlay with stats + gradient).
   - KPIs row: beneficiaries trained, helpline calls answered, careers launched.

3. **Programs Grid**
   - Four cards (Skill Training, Self-Defense, Harassment Helpline, Career Support) with icons, short descriptions, and “Explore” link chips.

4. **Impact Timeline**
   - Horizontal steps on desktop, stacked on mobile.
   - Each step shows year, milestone, and supporting copy.

5. **Resource Helplines**
   - Emergency contact numbers + quick action buttons (Call, Chat, Email).
   - Mini FAQ accordion for immediate guidance.

6. **Stories/Testimonial Slider**
   - Quotes with avatar initials, location tags, and program label chips.

7. **Call-to-Action Panel**
   - Newsletter signup + donation tiers (chips) + secondary CTA for volunteering.

8. **Footer**
   - Multi-column layout with quick links, contact info, and social icons.

### Visual/Brand System
- Palette: Deep navy (#0A1A2F), electric violet (#8C3BFF), coral (#FF6F91), sunshine (#FFD166), mint (#2EDDA7).  
- Typography: “Space Grotesk” for headings, “Inter” for body text (Google Fonts).  
- Backgrounds: layered gradients + subtle noise to feel premium; cards with glassmorphism effect.  
- Icons: simple inline SVGs for each program (self-contained, no external assets).

### Responsive Strategy
- Mobile-first CSS grid + flex utilities.
- Sticky help button anchored bottom-right on small screens.
- Breakpoints: base (0-639), md (640-1023), lg (1024-1439), xl (1440+).
