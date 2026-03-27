# Accessibility Guide

Guidelines and recommendations for making this portfolio accessible to all users.

---

## Current Accessibility Features

### Semantic HTML
- `<header>`, `<nav>`, `<section>`, `<footer>` provide document structure
- Heading hierarchy (h1, h2, h3) is maintained
- `<form>` elements with `required` attributes for validation

### Visual Accessibility
- High contrast ratio between text (#ededed) and backgrounds (#081b29)
- Accent color (#00abf0) meets WCAG AA contrast requirements against dark backgrounds
- Interactive elements have clear hover states

### Navigation
- Anchor links enable keyboard navigation between sections
- Sticky header provides persistent navigation access

---

## Recommended Improvements

### Add ARIA Labels
- Add `aria-label` to navigation, social links, and menu button
- Add `role="button"` and `tabindex="0"` to the hamburger menu icon

### Add Form Labels
- Use visually hidden `<label>` elements instead of relying solely on placeholders
- Add a `.sr-only` CSS class for screen-reader-only content

### Reduced Motion Support
Add a media query to respect user preferences:
```css
@media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
    }
}
```

### Focus Indicators
```css
a:focus-visible, button:focus-visible, input:focus-visible {
    outline: 2px solid var(--main--color);
    outline-offset: 2px;
}
```

### Skip Navigation Link
Add at the top of body: `<a href="#home" class="skip-link">Skip to main content</a>`

## Testing Accessibility

### Automated Tools
- axe DevTools - Browser extension
- WAVE - Web accessibility evaluation
- Chrome Lighthouse - Accessibility audit

### Manual Testing
1. Navigate using only keyboard (Tab, Enter, Space)
2. Test with a screen reader (NVDA, VoiceOver)
3. Verify at 200% browser zoom
4. Check with high contrast mode

## WCAG 2.1 Compliance

| Level | Status | Notes |
|---|---|---|
| A | Partial | Needs ARIA labels, form labels |
| AA | Partial | Color contrast passes, needs focus indicators |
| AAA | Not yet | Would need enhanced contrast |
