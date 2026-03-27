# CSS Styling Guide

A comprehensive reference for the CSS architecture used in this portfolio.

---

## CSS Custom Properties

All theme values are defined as CSS custom properties in `:root`:

```css
:root {
    --bg--color: #081b29;
    --second-bg--color: #112e42;
    --text--color: #ededed;
    --main--color: #00abf0;
}
```

Usage: `color: var(--main--color);`

## Naming Conventions

### Classes
- **Sections**: `.home`, `.about`, `.education`, `.skills`, `.contact`, `.career`, `.coursework`
- **Children**: `.section-child` (e.g., `.home-content`, `.about-img`, `.skills-row`)
- **Modifiers**: `.active`, `.sticky`, `.show-animate`
- **Utilities**: `.btn`, `.btn-box`, `.heading`

### ID Selectors
- Only used for section anchors: `#home`, `#about`, `#education`, `#skills`, `#contact`, `#career`, `#coursework`
- One exception: `#menu-icon` for the hamburger menu

## Units

| Unit | Usage |
|---|---|
| `rem` | Font sizes, padding, margins, spacing |
| `%` | Widths, responsive sizing |
| `px` | Fixed dimensions (icons, specific widths) |
| `vh` | Minimum section heights (`min-height: 100vh`) |

Base font size is set to `62.5%` (10px), making rem calculations easy:
- `1.6rem` = 16px
- `2.5rem` = 25px
- `5rem` = 50px

## Animation Patterns

### Reveal Animation (`.animate`)
```css
.animate {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: var(--bg--color);
    z-index: 98;
}

/* Triggered when section becomes visible */
.section.show-animate .animate {
    animation: showRight 1s ease forwards;
}

@keyframes showRight {
    100% { width: 0; }
}
```

### Hover Expansion
```css
.element::before {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 0; height: 100%;
    background: var(--second-bg--color);
    z-index: -1;
    transition: .5s;
}
.element:hover::before {
    width: 100%;
}
```

### Infinite Spinner
```css
@keyframes aboutSpinner {
    100% {
        transform: translate(-50%, -50%) rotate(360deg);
    }
}
```

## Responsive Breakpoints

```css
/* Small laptops */
@media (max-width: 1200px) { /* font-size: 55% */ }

/* Tablets landscape */
@media (max-width: 991px) { /* reduced padding */ }

/* Tablets portrait — hamburger menu activates */
@media (max-width: 768px) { /* mobile nav, layout changes */ }

/* Large phones */
@media (max-width: 520px) { /* font-size: 50%, stacked layout */ }

/* Small phones */
@media (max-width: 462px) { /* further size reductions */ }
```

## Component Reference

### Buttons (`.btn`)
- Inline-flex centered, 15rem wide
- Border + background with hover inversion
- `::before` pseudo-element for hover fill effect

### Progress Bars (`.bar span`)
- Height from parent, colored with accent
- Width set per-skill via CSS nth-child selectors

### Cards (`.course-card`, `.education-content .content`)
- Border with accent color
- Hover background fill animation
- Consistent padding and border-radius

### Timeline (`.timeline`)
- Vertical line via `::before` on container
- Items alternate left/right via `nth-child(odd/even)`
- Collapses to single column on mobile
