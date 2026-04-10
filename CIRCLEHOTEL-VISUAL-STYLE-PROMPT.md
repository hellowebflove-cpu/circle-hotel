# CIRCLE HOTEL — Transfer Prompt for Visual Style

> Copy this prompt and paste into a new project to replicate the Circle Hotel visual style.

---

## PROMPT (ready to copy)

```
Implement a complete design system based on the following specification.
The aesthetic is WARM EDITORIAL MINIMALISM — premium, warm, typographic.
The mood is sophisticated yet approachable: a luxury apart-hotel brand that feels like home, not a showroom. Heavy use of warm earth tones (terracotta, sand, steel blue), large editorial typography mixing sans-serif with script-serif accents, and photography-driven layouts. Zero shadows — completely flat design. All interactive elements use pill shapes (50px radius). The overall feeling is confident, culturally aware, and community-focused.

---

## BRAND PHILOSOPHY
Aesthetic: Warm Editorial Minimalism
Principle: "Where hotel meets home" — luxury through warmth, not through coldness
Mood: Confident, culturally-rooted, community-driven. Mixes premium hospitality with neighborhood intimacy. Ukrainian identity expressed through copy tone, not decoration.

---

## COLOR SYSTEM
```css
:root {
  /* Backgrounds */
  --color-bg:            #FFFFFF;
  --color-bg-alt:        #F6F6F5;
  --color-sand:          #EBD8B0;
  --color-sand-light:    rgba(235, 216, 176, 0.3);
  --color-cream:         #F8F2E4;
  --color-white:         #FFFFFF;

  /* Text */
  --color-text:          #000000;
  --color-text-muted:    rgba(0, 0, 0, 0.8);

  /* Accent — Terracotta */
  --color-accent:        #AF5235;
  --color-accent-hover:  #9A4730; /* -10% darker */

  /* Secondary Accent — Steel Blue */
  --color-blue:          #466D84;
  --color-blue-muted:    rgba(70, 109, 132, 0.66);

  /* Semantic */
  --color-success:       #4A8B5C;
  --color-error:         #C94444;
  --color-warning:       #D4993D;
  --color-info:          #466D84;

  /* Border */
  --color-border:        #DDDDDD;
  --color-border-light:  rgba(255, 255, 255, 0.2);

  /* White variants */
  --color-white-50:      rgba(255, 255, 255, 0.5);
  --color-white-40:      rgba(255, 255, 255, 0.4);
  --color-white-20:      rgba(255, 255, 255, 0.2);

  /* Spacing */
  --space-1: 4px; --space-2: 8px; --space-3: 12px;
  --space-4: 16px; --space-5: 20px; --space-6: 24px;
  --space-8: 32px; --space-10: 40px; --space-12: 48px;
  --space-13: 50px; --space-16: 64px; --space-20: 80px;
  --space-25: 100px;

  /* Radius — BINARY SYSTEM: 0 or pill */
  --radius-none: 0px;
  --radius-pill: 50px;
  --radius-full: 50%;

  /* Shadows — NONE. Completely flat design */
  --shadow-none: none;

  /* Easing */
  --ease-default: ease;
  --ease-smooth: ease-in-out;
  --duration-fast: 200ms;
  --duration-base: 300ms;
  --duration-slow: 500ms;
  --duration-x-slow: 800ms;
}
```

---

## TYPOGRAPHY
Fonts: "TikTok Sans" (sans) + "Mary" (serif/script) — both custom
Google analogs: Inter or DM Sans (sans) + Cormorant Garamond or Playfair Display italic (serif)

Setup (Next.js):
```tsx
import { Inter } from 'next/font/google';
import { Cormorant_Garamond } from 'next/font/google';

const sans = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-sans',
  weight: ['400', '600'],
});

const serif = Cormorant_Garamond({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-serif',
  weight: ['400'],
  style: ['normal', 'italic'],
});
```

Type Scale:

| ROLE | FONT | SIZE | WEIGHT | LINE-HT | TRACKING |
|---|---|---|---|---|---|
| Display | serif | 80px | 400 | 1.0 | normal |
| H1 | sans | 80px | 400 | 1.1 | 0.48px |
| H2 | sans | 64px | 400 | 1.0 | normal |
| H2 alt | sans | 56px | 400 | 1.16 | 0.48px |
| H3 | sans | 32px | 400 | 1.25 | 0.48px |
| H3 sm | sans | 26px | 400 | 1.0 | 0.48px |
| Body L | sans | 24px | 600 | 1.33 | 0.48px |
| Body M | sans | 16px | 400 | 1.2 | 0.48px |
| Body S | sans | 14px | 400 | 1.42 | 0.48px |
| Label | sans | 16px | 600 | 1.2 | 0.48px |
| Button SM | sans | 12px | 600 | 1.0 | 0.48px |
| Button LG | sans | 20px | 600 | 1.2 | 0.48px |
| Nav Display | sans | 54px | 400 | 1.22 | 0.48px |

Special pattern: Mixed serif/sans in headings.
Key emotional words within headings are styled in serif (italic/script) font:
"Circle у серці київського *потоку*" — "потоку" is serif.
"*Сенс* понад формою" — "Сенс" is serif.
This creates emphasis and brand personality within headings.

Global: letter-spacing 0.48px on nearly all text elements.

---

## GLOBAL CSS
```css
body {
  font-family: var(--font-sans), sans-serif;
  font-size: 16px;
  color: #000000;
  background: #FFFFFF;
  line-height: 1.2;
  letter-spacing: 0.48px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

:focus-visible {
  outline: 2px solid #AF5235;
  outline-offset: 2px;
  border-radius: inherit;
}

/* Section label / overline pattern */
.section-label {
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.48px;
}
```

---

## GRID SYSTEM
- No traditional grid — full-width design
- Content padding: ~40px sides (desktop), ~20px (mobile)
- Max container width: none (edge-to-edge)
- Section padding: 0px (full-bleed) | 50px (compact) | 80px (medium) | 100px (standard)

---

## BUTTONS
All buttons use pill shape (border-radius: 50px). No intermediate radius exists.

**Primary (Terracotta):**
bg: #AF5235 | color: #FFF | radius: 50px | padding: 16px 55px | font: 24px/600
hover: bg #9A4730, transition 200ms

**Secondary (White/Black):**
bg: #FFF | color: #000 | radius: 50px | padding: 8px 20px | font: 12px/600
hover: bg subtle gray

**Secondary (White/Accent):**
bg: #FFF | color: #AF5235 | radius: 50px | padding: 8px 50px | font: 20px/600

**Tag/Tab:**
bg: rgba(255,255,255,0.4) | color: #FFF | radius: 50px | padding: 8px 20px | font: 16px/400
Active: bg more opaque

**States:**
:hover → background-color 200ms, transform 200ms
:disabled → reduced opacity
:focus → outline 2px solid #AF5235

---

## LINKS
- Default: color inherit, no underline
- Footer/contact: underline on emails, phones, map links
- Nav overlay: 54px display size, white, no underline
- Social: body size, no underline

---

## FORMS
All form inputs use pill shape (border-radius: 50px).

**Text/Tel Input:**
bg: transparent | border: 0.5px solid #FFF | radius: 50px
padding: 0 40px | height: ~50px | font: 16px/400 | color: #FFF
Focus: border color intensifies
Error: bg: #FFDEDE

**Submit:**
bg: #FFF | color: #AF5235 | radius: 50px | padding: 16px 55px | font: 24px/400

---

## CARDS

**Gallery Card:** Full-bleed image, title overlay bottom-left, white text 26px. No border, no shadow, no radius.

**Value Card:** Transparent bg (inherits section), H3 with serif word accent + body description. 2x2 grid on desktop.

**Product Card:** White/light bg, product photo, title + price row, small terracotta pill "Купити" button.

**Info Card:** Steel blue bg (#466D84), white text, bulleted list. Used for location highlights.

---

## NAVIGATION

**Header:** Fixed, transparent, 75px height.
Logo "circle" lowercase white text (left). "Інвестувати" white pill button (right). Hamburger 3 lines (far right).

**Mobile/Overlay Menu:** Full-screen dark overlay. Large nav links (54px). Stacked vertically. "Приєднатися" white pill CTA. Social links row at bottom.

**Footer:** Two-part:
1. Sand bg section with large display text (56px) containing contact info (email, phone, address)
2. White bar: logo + social links + copyright

**Swiper Dots:**
Active: #466D84 filled circle. Inactive: rgba(70,109,132,0.66).

---

## COMPONENTS

**Accordion (FAQ):**
Steel blue bg (#466D84). White text. "+" icon left. Question: H3 uppercase. Answer: body text, hidden by default. Thin white border between items. Height animation on toggle.

**Slider (Swiper):**
Multiple instances. Prev/Next: circle outline buttons with arrow SVGs. Dots: steel blue circles below. Transition: slide.

**Circle Overlay (Hero):**
Large terracotta circle (~600px) centered on hero with photo inside. Animated on scroll.

**Floating Phone Button:**
Fixed bottom-right. Terracotta bg. Circle (50%). Phone SVG icon. Always visible.

**Timeline:**
Horizontal line with dot markers. Construction photos above. Date + caption below each dot. Scrollable.

---

## ANIMATION SYSTEM
Library: Webflow Interactions + Swiper.js (for Next.js: Framer Motion + Swiper React)

**Letter-by-letter reveal:**
Each letter in heading wrapped in span. Triggered on scroll enter viewport. Sequential stagger (~50ms per letter). From opacity:0 → 1.

**Word-by-word reveal:**
Each word wrapped in span. Same scroll trigger. Used on hero H1 and select H2s.

**Hover transitions:**
Buttons: background-color 200ms ease, transform 200ms ease.
Border-radius morph: 300ms (on some hover states).

**Scroll trigger:**
Elements fade in as they enter viewport. Threshold ~0.12.

**Swiper:**
Slide transition, default easing.

**Micro-interactions:**
Minimal — the design is intentionally calm. No bounces, no springs.

---

## ACCESSIBILITY
- Focus ring: 2px solid #AF5235, offset 2px
- Contrast: Black/white 21:1 (AAA), white/terracotta ~4.5:1 (AA), white/blue ~4.8:1 (AA)
- Skip-to-content link needed
- ARIA: swiper groups labeled "X / N", FAQ needs aria-expanded
- Keyboard nav: ensure all interactive elements focusable

---

## ICONOGRAPHY
Library: Custom SVG (minimal usage)
The design relies on typography and photography, not icons.

Icons used: arrows (swiper), phone (floating CTA), plus/minus (FAQ), hamburger (menu), map pin.
Sizes: ~24px default.

For new projects, recommend: Lucide React (matches minimal aesthetic).

---

## TECH STACK
- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion (for scroll reveals, letter animations)
- Swiper React (for sliders)
- next/font/google (Inter + Cormorant Garamond)

---

## KEY DESIGN DECISIONS
1. **Binary radius:** 0px or 50px pill — nothing in between. This is core to the identity.
2. **Zero shadows:** Completely flat. Hierarchy through color, typography, and spacing only.
3. **Serif accent words:** Key emotional words in headings use serif font. This is the signature move.
4. **Warm palette:** Terracotta + sand + steel blue. No cold grays. Even "neutral" sections use warm tints.
5. **Photography-driven:** Large images, full-bleed sections. Design serves the photography.
6. **Full-width layout:** No max-width container. Content extends edge-to-edge.
7. **Minimal icons:** Typography does the work. Icons only where functionally necessary.

---

## WHAT NOT TO DO
- NO intermediate border-radius (no 8px, 12px, 16px — only 0 or 50px)
- NO box-shadows on any element
- NO cold grays — use warm tints (sand, cream) instead
- NO small body text below 14px
- NO icon-heavy designs — keep icons minimal, functional only
- NO uppercase body text (only FAQ questions and some labels)
- NO decorative borders — use color blocks for section separation
- NO gradient overlays on images — use solid color overlays if needed
- NO rounded corners on images — all images are sharp rectangles
- NO heavy animations — keep everything calm, editorial, intentional
```
