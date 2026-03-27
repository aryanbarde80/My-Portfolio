# Architecture Overview

This document describes the architecture and structure of the portfolio website.

## High-Level Architecture

```
┌─────────────────────────────────────────────┐
│                  Browser                     │
├─────────────────────────────────────────────┤
│  index.html (Single Page Application)       │
│  ├── Header / Navigation                    │
│  ├── Home Section (Hero)                    │
│  ├── About Section                          │
│  ├── Education Section                      │
│  ├── Career Trajectory Section              │
│  ├── Coursework Section                     │
│  ├── Skills Section                         │
│  ├── Contact Section                        │
│  └── Footer                                 │
├─────────────────────────────────────────────┤
│  style.css          │  script.js            │
│  - Layout           │  - Scroll handling    │
│  - Animations       │  - Nav toggle         │
│  - Responsive       │  - Section visibility │
│  - Theme variables  │  - RAF throttling     │
├─────────────────────────────────────────────┤
│  External: Boxicons CDN                     │
└─────────────────────────────────────────────┘
```

## File Responsibilities

### `index.html`
- Contains all page content in a single file
- Uses semantic HTML5 sections
- Links to external Boxicons CDN for icons
- Links to local `style.css` and `script.js`

### `style.css`
- **CSS Custom Properties**: Theme colors defined in `:root`
- **Base Styles**: Reset, typography, box model
- **Component Styles**: Header, sections, buttons, forms
- **Animation Definitions**: Keyframes for scroll and hover animations
- **Responsive Breakpoints**: Media queries at 1200px, 991px, 768px, 520px, 462px

### `script.js`
- **Navbar Toggle**: Mobile hamburger menu open/close
- **Scroll Handler**: Throttled with `requestAnimationFrame`
  - Updates active nav link based on scroll position
  - Toggles sticky header
  - Triggers section entry animations via `show-animate` class
- **DOMContentLoaded**: Initial visibility check on page load

## CSS Architecture

### Custom Properties (Design Tokens)
```css
:root {
    --bg--color: #081b29;        /* Primary background */
    --second-bg--color: #112e42; /* Secondary background */
    --text--color: #ededed;      /* Text color */
    --main--color: #00abf0;      /* Accent / highlight color */
}
```

### Animation System
1. **Entry Animations**: `.animate` overlays slide away via `showRight` keyframe
2. **Scroll Triggers**: JavaScript adds `show-animate` class when sections enter viewport
3. **Hover Effects**: `::before` pseudo-elements expand on hover for interactive feedback
4. **Infinite Animations**: Spinner on about image, text typing effect on hero

### Responsive Strategy
- Mobile-first considerations with progressive enhancement
- Breakpoints: 1200px → 991px → 768px → 520px → 462px
- Navigation collapses to hamburger menu at 768px
- Grid layouts adapt column counts at smaller viewports

## Data Flow

```
User scrolls
    → scroll event fires
    → requestAnimationFrame queues handler
    → onScroll() executes:
        → Calculates which section is in viewport
        → Updates active nav link highlighting
        → Adds show-animate class to visible sections
        → Toggles sticky header class
```

## Dependencies

| Dependency | Type | Source |
|---|---|---|
| Boxicons 2.1.4 | CSS (icons) | unpkg.com CDN |

No JavaScript dependencies. No build tools required.
