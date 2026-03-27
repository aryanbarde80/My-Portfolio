# Troubleshooting Guide

Common issues and their solutions.

---

## Animations Not Working

### Sections appear empty or content is hidden
**Cause**: The show-animate class is not being added to sections.

**Solutions**:
1. Ensure script.js is loaded at the bottom of body
2. Check browser console for JavaScript errors
3. Verify sections have an id attribute matching the nav links
4. The DOMContentLoaded handler should trigger initial visibility

### Animations look choppy or laggy
**Cause**: Too many animations or unoptimized scroll handler.

**Solutions**:
1. The scroll handler uses requestAnimationFrame for performance
2. On low-end devices, consider reducing animation duration
3. Check if browser hardware acceleration is enabled

---

## Layout Issues

### Content overflows horizontally
1. The html element has overflow-x: hidden set
2. Check for elements with fixed pixel widths exceeding viewport
3. Use browser DevTools to identify the overflowing element

### Navigation menu doesn't open on mobile
1. Check console for JS errors
2. Verify menu-icon element exists in HTML
3. Ensure script.js is loaded after the HTML elements

### Profile image not showing
1. Verify image/profile.png exists
2. Check the path in both index.html and style.css
3. Paths are relative - serve from the project root

---

## Development Issues

### Live Server not auto-reloading
1. Ensure you opened the project folder in VS Code
2. Check Live Server extension settings
3. Try restarting VS Code

### CSS changes not reflecting
1. Hard refresh: Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)
2. Clear browser cache
3. Check for CSS specificity conflicts

---

## Deployment Issues

### GitHub Pages shows 404
1. Ensure the repository is public
2. Check Settings > Pages > Source is set correctly
3. Verify index.html is in the root directory
4. Wait 1-2 minutes for deployment

### Images not loading after deployment
1. GitHub Pages is case-sensitive: Image/ is not image/
2. Verify file paths match exactly
3. Use all lowercase for file and folder names

### Custom domain not working
1. Verify DNS CNAME record points to username.github.io
2. Add a CNAME file to the repo root
3. Wait for DNS propagation (up to 48 hours)
4. Ensure HTTPS is enabled in GitHub Pages settings
