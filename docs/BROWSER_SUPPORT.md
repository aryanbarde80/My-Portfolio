# Browser Support

This portfolio targets modern browsers and uses standard CSS3 and ES6+ JavaScript features.

---

## Supported Browsers

| Browser | Version | Status |
|---|---|---|
| Google Chrome | 80+ | Fully Supported |
| Mozilla Firefox | 78+ | Fully Supported |
| Apple Safari | 14+ | Fully Supported |
| Microsoft Edge | 80+ | Fully Supported |
| Opera | 67+ | Fully Supported |
| Samsung Internet | 13+ | Fully Supported |
| Internet Explorer | 11 and below | Not Supported |

## CSS Features Used

| Feature | Chrome | Firefox | Safari | Edge |
|---|---|---|---|---|
| CSS Custom Properties | 49+ | 31+ | 9.1+ | 15+ |
| CSS Grid | 57+ | 52+ | 10.1+ | 16+ |
| Flexbox | 29+ | 22+ | 9+ | 12+ |
| CSS Animations | 43+ | 16+ | 9+ | 12+ |
| scroll-behavior: smooth | 61+ | 36+ | 15.4+ | 79+ |
| Media Queries | 21+ | 3.5+ | 4+ | 12+ |

## JavaScript Features Used

| Feature | Chrome | Firefox | Safari | Edge |
|---|---|---|---|---|
| let/const | 49+ | 44+ | 10+ | 14+ |
| Arrow Functions | 45+ | 22+ | 10+ | 12+ |
| classList | 8+ | 3.6+ | 5.1+ | 10+ |
| requestAnimationFrame | 24+ | 23+ | 6.1+ | 12+ |
| Passive Event Listeners | 51+ | 49+ | 10+ | 14+ |
| forEach on NodeList | 51+ | 50+ | 10+ | 15+ |

## Known Issues

### Safari
- `-webkit-background-clip: text` requires the `-webkit-` prefix (already included)
- `scroll-behavior: smooth` not supported until Safari 15.4

### Mobile Browsers
- Some animations may appear less smooth on older/lower-end devices
- Touch events work alongside click events for navigation

## Testing Recommendations

1. Test on at least Chrome, Firefox, and Safari
2. Test on one mobile browser (Chrome Mobile or Safari iOS)
3. Use browser DevTools responsive mode for viewport testing
4. Check real devices when possible for animation performance
