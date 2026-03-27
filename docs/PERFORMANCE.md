# Performance Optimization Guide

This document covers performance considerations and optimizations implemented in the portfolio.

---

## Current Optimizations

### 1. Throttled Scroll Handler

The scroll event handler uses `requestAnimationFrame` to prevent layout thrashing:

```javascript
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(onScroll);
        ticking = true;
    }
}, { passive: true });
```

**Why it matters:**
- Scroll events fire 60+ times per second
- Without throttling, DOM queries and class manipulations happen every frame
- `requestAnimationFrame` batches updates to sync with the browser's paint cycle

### 2. Passive Event Listeners

The scroll listener uses `{ passive: true }`:
- Tells the browser the handler won't call `preventDefault()`
- Allows the browser to scroll immediately without waiting for JS

### 3. Cached DOM Queries

DOM elements are queried once and cached:
```javascript
let header = document.querySelector('header');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
```

### 4. No JavaScript Frameworks

- Zero runtime JavaScript dependencies
- No virtual DOM overhead
- No bundle to parse and execute
- Total JS: ~60 lines

### 5. CSS Animation Performance

- Animations use `transform` and `opacity` where possible (GPU-accelerated)
- `will-change` can be added for frequently animated elements
- Animations are triggered only when sections enter viewport

### 6. Minimal External Resources

- Only one external CSS file (Boxicons from CDN)
- Single local image file
- No web fonts loaded (uses system `Times New Roman`)

---

## Performance Checklist

- [ ] Images are optimized (compressed, correct dimensions)
- [ ] No unused CSS rules
- [ ] No layout shifts (CLS) during page load
- [ ] Animations don't cause jank on low-end devices
- [ ] External resources use CDN with caching

## Measuring Performance

### Lighthouse
1. Open Chrome DevTools → Lighthouse tab
2. Run audit for Performance, Accessibility, SEO
3. Target scores: 90+ across all categories

### Chrome DevTools Performance Tab
1. Open DevTools → Performance
2. Click Record → scroll through the page → Stop
3. Check for long tasks (>50ms) and layout shifts

### Web Vitals
| Metric | Target | What It Measures |
|---|---|---|
| LCP | < 2.5s | Largest Contentful Paint |
| FID | < 100ms | First Input Delay |
| CLS | < 0.1 | Cumulative Layout Shift |
| FCP | < 1.8s | First Contentful Paint |
| TTFB | < 800ms | Time to First Byte |

## Future Improvements

- [ ] Convert `profile.png` to WebP format for smaller file size
- [ ] Add `loading="lazy"` to images below the fold
- [ ] Implement `IntersectionObserver` instead of scroll-based detection
- [ ] Add `preconnect` hints for CDN resources
- [ ] Minify CSS and JS for production
- [ ] Add service worker for offline caching
