# Design System - The Simcoe Clinic

## Overview
Modern, professional design system with darker tones, clean gradients, and full responsive support.

## Color Palette

### Primary (Slate/Charcoal)
Professional darker tones for main UI elements:
- `primary-50`: #f8fafc (lightest)
- `primary-100`: #f1f5f9
- `primary-200`: #e2e8f0
- `primary-300`: #cbd5e1
- `primary-400`: #94a3b8
- `primary-500`: #64748b
- `primary-600`: #475569
- `primary-700`: #334155
- `primary-800`: #1e293b
- `primary-900`: #0f172a
- `primary-950`: #020617 (darkest)

### Accent (Emerald/Green)
Used for CTAs and highlights:
- `accent-50`: #ecfdf5 (lightest)
- `accent-100`: #d1fae5
- `accent-200`: #a7f3d0
- `accent-300`: #6ee7b7
- `accent-400`: #34d399
- `accent-500`: #10b981
- `accent-600`: #059669
- `accent-700`: #047857
- `accent-800`: #065f46
- `accent-900`: #064e3b
- `accent-950`: #022c22 (darkest)

### Neutral (True Gray)
For text and subtle backgrounds:
- `neutral-50`: #fafafa (lightest)
- `neutral-100`: #f5f5f5
- `neutral-200`: #e5e5e5
- `neutral-300`: #d4d4d4
- `neutral-400`: #a3a3a3
- `neutral-500`: #737373
- `neutral-600`: #525252
- `neutral-700`: #404040
- `neutral-800`: #262626
- `neutral-900`: #171717
- `neutral-950`: #0a0a0a (darkest)

## Components

### Button
**Variants:**
- `primary`: Dark gradient (primary-700 → primary-900)
- `secondary`: Neutral gradient (neutral-600 → neutral-800)
- `accent`: Emerald gradient (accent-600 → accent-800)
- `outline`: Transparent with border, fills on hover

**Sizes:**
- `small`: Compact (min-h: 44px)
- `medium`: Standard (min-h: 48px)
- `large`: Prominent (min-h: 52px)

**Features:**
- Clean gradient backgrounds
- Smooth hover transitions (300ms)
- Scale animations (hover: 105%, active: 95%)
- Shadow elevation on hover
- Fully responsive (100% width on mobile, auto on desktop)
- Accessible (WCAG 2.1 AA compliant)

### Card
**Variants:**
- `default`: Light gradient with subtle shadow
- `elevated`: Dark gradient (primary-900 → neutral-900) with white text
- `bordered`: Light with accent border

**Features:**
- Rounded corners (rounded-xl)
- Hover scale effect (102%)
- Shadow elevation on hover
- Optional header and footer with gradient backgrounds
- Responsive padding (4/6 on mobile/desktop)

### Section
**Variants:**
- `default`: White background
- `dark`: Dark gradient (primary-900 → neutral-900) with white text
- `accent`: Light accent gradient
- `gradient`: Subtle gradient (neutral-50 → accent-50)

**Features:**
- Smooth transitions
- Responsive padding (8/12/16 on mobile/tablet/desktop)
- Max-width container (7xl)
- Optional full-width content

### Link
**Variants:**
- `default`: Underlined text with accent color
- `button`: Button-styled link with gradient

**Features:**
- Smooth color transitions
- Underline decoration on hover
- External link support (opens in new tab)
- Accessible focus states

## Typography

### Headings
- Use `neutral-900` for dark text
- Use `white` for text on dark backgrounds
- Bold font weights (600-700)
- Responsive sizing (text-4xl sm:text-5xl)

### Body Text
- Use `neutral-700` for primary text
- Use `neutral-600` for secondary text
- Use `neutral-100` for text on dark backgrounds
- Line height: 1.75 for readability

## Spacing
- Consistent scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64
- Mobile-first responsive spacing
- Use `sm:`, `md:`, `lg:` breakpoints

## Shadows
- `shadow-md`: Default cards
- `shadow-lg`: Elevated cards
- `shadow-xl`: Hover states
- `shadow-2xl`: Dark elevated cards

## Transitions
- Duration: 300ms (default)
- Easing: ease-in-out
- Properties: all, colors, transform, shadow

## Accessibility
- Minimum touch target: 44px
- Color contrast: WCAG 2.1 AA compliant
- Focus visible states on all interactive elements
- Keyboard navigation support
- Semantic HTML throughout

## Responsive Design
- Mobile-first approach
- Breakpoints:
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px
- Full-width buttons on mobile
- Stacked layouts on mobile
- Grid layouts on desktop

## Usage Examples

### Button
```tsx
<Button variant="accent" size="large">
  Call Us
</Button>

<Button variant="outline" size="medium">
  Learn More
</Button>
```

### Card
```tsx
<Card variant="bordered">
  <h3>Service Name</h3>
  <p>Service description</p>
</Card>

<Card variant="elevated" header={<h2>Featured</h2>}>
  <p>Premium content</p>
</Card>
```

### Section
```tsx
<Section variant="dark" className="py-16">
  <Hero />
</Section>

<Section variant="gradient" className="py-12">
  <Services />
</Section>
```

## Design Principles
1. **Professional**: Dark, sophisticated tones convey trust
2. **Clean**: Minimal clutter, clear hierarchy
3. **Modern**: Gradients and animations add polish
4. **Accessible**: WCAG 2.1 AA compliant throughout
5. **Responsive**: Mobile-first, works on all devices
6. **Performant**: Optimized for fast loading

