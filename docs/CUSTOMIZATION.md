# Customization Guide

How to personalize this portfolio template for your own use.

---

## Quick Customization Checklist

- [ ] Update personal information in `index.html`
- [ ] Replace profile image
- [ ] Change theme colors in CSS variables
- [ ] Update social media links
- [ ] Modify education and project entries
- [ ] Update career trajectory timeline
- [ ] Adjust coursework cards
- [ ] Update skills and progress bars

---

## 1. Personal Information

### Name and Title
In `index.html`, update the hero section:
```html
<h1>Hi, I'm <span>YOUR NAME</span></h1>
<h3>Your Job Title</h3>
<p>Your bio paragraph here...</p>
```

### About Section
```html
<div class="about-content">
    <h3>Your Title</h3>
    <p>Your description...</p>
</div>
```

## 2. Profile Image

Replace `image/profile.png` with your own photo:
- Recommended size: 500x500px or larger
- Square aspect ratio works best (the CSS applies `border-radius: 50%`)
- Keep the filename as `profile.png` or update references in HTML and CSS

## 3. Theme Colors

Edit CSS custom properties in `style.css`:
```css
:root {
    --bg--color: #081b29;        /* Main background */
    --second-bg--color: #112e42; /* Alternate section background */
    --text--color: #ededed;      /* Text color */
    --main--color: #00abf0;      /* Accent color (links, borders, buttons) */
}
```

### Color Scheme Examples

| Theme | Background | Secondary | Text | Accent |
|---|---|---|---|---|
| Ocean (default) | `#081b29` | `#112e42` | `#ededed` | `#00abf0` |
| Forest | `#0a1f0a` | `#1a3a1a` | `#e0e8e0` | `#4caf50` |
| Sunset | `#1a0a0a` | `#2d1515` | `#f0e0d0` | `#ff6b35` |
| Purple | `#0d0a1a` | `#1a1530` | `#e8e0f0` | `#9c27b0` |
| Minimal | `#1a1a2e` | `#16213e` | `#eaeaea` | `#e94560` |

## 4. Social Media Links

In the home section of `index.html`:
```html
<div class="home-sci">
    <a href="YOUR_GITHUB_URL"><i class='bx bxl-github'></i></a>
    <a href="YOUR_LINKEDIN_URL"><i class='bx bxl-linkedin'></i></a>
    <a href="YOUR_INSTAGRAM_URL"><i class='bx bxl-instagram'></i></a>
</div>
```

Add more icons from [Boxicons](https://boxicons.com/):
```html
<a href="YOUR_TWITTER"><i class='bx bxl-twitter'></i></a>
<a href="YOUR_YOUTUBE"><i class='bx bxl-youtube'></i></a>
<a href="YOUR_DRIBBBLE"><i class='bx bxl-dribbble'></i></a>
```

## 5. Education Entries

Add or modify entries in the education section:
```html
<div class="education-content">
    <div class="content">
        <div class="year"><i class='bx bxs-calendar'></i> YEAR-RANGE</div>
        <h3>Degree - University</h3>
        <p>Details about your education</p>
    </div>
</div>
```

## 6. Skills Progress Bars

Update skill names and percentages in `index.html`:
```html
<div class="progress">
    <h3>Skill Name <span>85%</span></h3>
    <div class="bar"><span></span></div>
</div>
```

Then update the corresponding CSS width in `style.css`:
```css
.skills-column:nth-child(1) .skills-content .progress:nth-child(1) .bar span {
    width: 85%;
}
```

## 7. Adding New Sections

1. Add HTML section in `index.html`
2. Add a nav link in the header
3. Add corresponding styles in `style.css`
4. The scroll handler in `script.js` automatically detects new `<section>` elements
