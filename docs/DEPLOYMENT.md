# Deployment Guide

This portfolio is a static site — no server-side code or build step required. Deploy it anywhere that serves static files.

---

## GitHub Pages (Recommended)

### Method 1: Deploy from Main Branch

1. Push your code to GitHub
2. Go to **Settings** → **Pages**
3. Under **Source**, select **Deploy from a branch**
4. Select `main` branch and `/ (root)` folder
5. Click **Save**
6. Your site will be live at `https://aryanbarde80.github.io/My-Portfolio/`

### Method 2: GitHub Actions

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      pages: write
      id-token: write
    steps:
      - uses: actions/checkout@v4
      - uses: actions/upload-pages-artifact@v3
        with:
          path: '.'
      - uses: actions/deploy-pages@v4
```

---

## Netlify

### Drag and Drop
1. Go to [app.netlify.com](https://app.netlify.com)
2. Drag your project folder onto the deploy area
3. Done! You get a unique URL immediately

### Git Integration
1. Connect your GitHub repo on Netlify
2. Set **Build command**: (leave empty)
3. Set **Publish directory**: `.`
4. Deploy automatically on every push

---

## Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **Import Project** → select your GitHub repo
3. Framework Preset: **Other**
4. Output Directory: `.`
5. Click **Deploy**

---

## Cloudflare Pages

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → **Pages**
2. Click **Create a project** → Connect to Git
3. Select your repository
4. Build settings: No build command, output directory `.`
5. Click **Save and Deploy**

---

## Custom Domain Setup

After deploying on any platform:

1. Purchase a domain from a registrar (Namecheap, GoDaddy, Google Domains)
2. Add a CNAME record pointing to your deployment URL
3. Configure the custom domain in your hosting platform's settings
4. Enable HTTPS (most platforms do this automatically)

## Post-Deployment Checklist

- [ ] All pages load correctly
- [ ] Images display properly
- [ ] Animations work smoothly
- [ ] Contact form displays (note: no backend handler yet)
- [ ] Responsive layout works on mobile
- [ ] HTTPS is enabled
- [ ] Social links point to correct profiles
- [ ] Meta tags are present for SEO
