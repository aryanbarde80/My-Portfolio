# SEO Optimization Guide

Recommendations for improving search engine visibility for this portfolio.

---

## Current SEO Status

### Present
- Title tag set
- Meta charset defined
- Meta viewport for mobile
- Semantic HTML structure

### Recommended Additions

Add these meta tags to the head in index.html:

- Meta description with portfolio summary
- Meta keywords with relevant terms
- Meta author tag
- Open Graph tags for social sharing (og:title, og:description, og:image)
- Twitter Card tags
- Canonical URL
- Favicon link
- Structured data (JSON-LD) for Person schema

## Structured Data

Add a JSON-LD script with schema.org Person type including:
- name, url, jobTitle, alumniOf
- sameAs links to GitHub and LinkedIn profiles

## Performance for SEO

Search engines factor in page speed:
- Minimize CSS and JS file sizes
- Optimize images (compress, use WebP)
- Enable caching via hosting headers
- Use CDN for static assets

## Additional Files

Consider creating:
- sitemap.xml with the site URL
- robots.txt allowing all crawlers

## SEO Checklist

- [ ] Add meta description
- [ ] Add Open Graph tags
- [ ] Add Twitter Card tags
- [ ] Add structured data (JSON-LD)
- [ ] Add favicon
- [ ] Add canonical URL
- [ ] Create sitemap.xml
- [ ] Create robots.txt
- [ ] Optimize image alt text
- [ ] Ensure all headings follow hierarchy
- [ ] Check page load speed (< 3 seconds)
- [ ] Submit to Google Search Console
