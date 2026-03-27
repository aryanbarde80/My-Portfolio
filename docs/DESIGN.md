# Design Decisions

This document explains the key design decisions made in building the portfolio.

---

## Color Palette

| Color | Hex | Usage |
|---|---|---|
| Dark Navy | `#081b29` | Primary background |
| Deep Blue | `#112e42` | Alternate section background |
| Light Gray | `#ededed` | Body text |
| Cyan Blue | `#00abf0` | Accent, links, borders, buttons |

### Rationale
- Dark theme reduces eye strain and feels modern/professional
- High contrast between text and background ensures readability
- Single accent color creates visual consistency
- Alternating backgrounds between sections creates visual separation

## Typography

- **Font Family**: `'Times New Roman', Times, serif`
- **Base Font Size**: `62.5%` (10px base for easy rem calculation)
- **Heading Sizes**: 5rem (section headings), 3.2rem (subtitles), 2.5rem (card titles)
- **Body Text**: 1.6rem

### Why Times New Roman?
- Available on all systems (no font loading delay)
- Serif font adds a professional/academic feel
- Zero performance cost from font loading

## Animation Philosophy

### Entry Animations
- Overlay elements (`.animate`) slide away to reveal content
- Creates a "curtain reveal" effect as users scroll
- Once revealed, content stays visible (no re-hiding on scroll away)

### Hover Interactions
- `::before` pseudo-elements expand from left to right on hover
- Provides clear interactive feedback without JavaScript
- Consistent hover pattern across all interactive cards

### Infinite Animations
- Profile image spinner: Adds visual interest to the about section
- Text typing effect: Draws attention to the role/title in hero section

## Layout Strategy

### Single-Page Design
- All content on one page for simplicity
- Smooth scroll navigation between sections
- Sticky header provides persistent navigation

### Section Pattern
- Each section follows: Heading → Content Grid/Timeline → Spacing
- Alternating background colors guide the eye
- Consistent padding: `10rem 9% 2rem`

## Responsive Approach

Five breakpoints handle all screen sizes:

| Breakpoint | Target |
|---|---|
| 1200px | Small laptops |
| 991px | Tablets landscape |
| 768px | Tablets portrait (hamburger menu) |
| 520px | Large phones |
| 462px | Small phones |

## Accessibility Considerations

- Semantic HTML elements (`<header>`, `<section>`, `<footer>`, `<nav>`)
- Color contrast ratios meet WCAG AA standards
- Interactive elements have clear focus/hover states
- Form inputs have placeholder text (consider adding `<label>` elements)
