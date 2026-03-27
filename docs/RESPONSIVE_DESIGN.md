# Responsive Design Guide

How the portfolio adapts across different screen sizes and devices.

---

## Breakpoint Strategy

The site uses 5 CSS breakpoints:

| Breakpoint | Target | Key Changes |
|---|---|---|
| > 1200px | Desktop | Full layout, 62.5% font size |
| 1200px | Small laptops | Font size 55% |
| 991px | Tablets landscape | Reduced padding to 4% |
| 768px | Tablets portrait | Hamburger menu activates |
| 520px | Large phones | Font size 50%, stacked heading |
| 462px | Small phones | Full-width inputs, stacked footer |

## Responsive Component Behavior

| Component | Desktop | Tablet | Mobile |
|---|---|---|---|
| Navigation | Horizontal links | Horizontal links | Hamburger + dropdown |
| Skills grid | 2 columns | 2 columns | 1 column (wraps) |
| Education | 2 columns | 2 columns | 1 column (wraps) |
| Course grid | 3 columns | 2 columns | 1 column |
| Career timeline | 2-sided | 2-sided | Single column |
| Contact form | 2-col inputs | 2-col inputs | Stacked inputs |
| Footer | Horizontal | Horizontal | Vertical stacked |

## Testing Responsive Layouts

### Browser DevTools
1. Open DevTools (F12)
2. Click the device toggle button (Ctrl+Shift+M)
3. Test common presets: iPhone SE, iPhone 14, iPad, laptop, Full HD

### Key Things to Verify
- No horizontal scrollbar appears
- Text is readable without zooming
- Buttons/links are easily tappable (min 44x44px)
- Images don't overflow containers
- Navigation is accessible on all sizes
- Forms are usable on mobile
- Animations don't cause jank on mobile
