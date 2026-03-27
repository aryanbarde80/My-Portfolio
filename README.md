# Aryan Barde — Personal Portfolio

A fully responsive personal portfolio website showcasing skills, education, career trajectory, coursework, projects, and contact information.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Sections](#sections)
- [Performance](#performance)
- [Customization](#customization)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

This is a modern, animated, single-page portfolio website for **Aryan Barde**, an undergraduate Computer Science student and Full Stack Developer. The site features scroll-triggered animations, a responsive layout, and a dark theme with accent highlights.

## Features

- Fully responsive design (mobile, tablet, desktop)
- Smooth scroll-triggered CSS animations
- Sticky navigation header
- Interactive skill progress bars
- Career trajectory timeline
- Coursework showcase grid
- Contact form with focus animations
- Social media integration (GitHub, LinkedIn, Instagram)
- Performance-optimized scroll handling via `requestAnimationFrame`

## Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and semantic markup |
| CSS3 | Styling, animations, responsive breakpoints |
| JavaScript (ES6+) | Interactivity, scroll handling, navbar toggle |
| [Boxicons](https://boxicons.com/) | Icon library via CDN |

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A code editor (VS Code recommended)
- (Optional) A local development server like [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

### Installation

```bash
# Clone the repository
git clone https://github.com/aryanbarde80/My-Portfolio.git

# Navigate into the directory
cd My-Portfolio

# Open in your browser
open index.html
# or use Live Server in VS Code
```

## Project Structure

```
My-Portfolio/
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.md
│   │   └── feature_request.md
│   └── PULL_REQUEST_TEMPLATE.md
├── docs/
│   ├── ARCHITECTURE.md
│   ├── ACCESSIBILITY.md
│   ├── BROWSER_SUPPORT.md
│   ├── CUSTOMIZATION.md
│   ├── DEPLOYMENT.md
│   ├── DESIGN.md
│   ├── PERFORMANCE.md
│   ├── RESPONSIVE_DESIGN.md
│   ├── SEO.md
│   ├── SETUP.md
│   ├── STYLING.md
│   └── TROUBLESHOOTING.md
├── image/
│   └── profile.png
├── index.html
├── script.js
├── style.css
├── README.md
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── CHANGELOG.md
├── LICENSE.md
└── SECURITY.md
```

## Sections

| Section | Description |
|---|---|
| **Home** | Hero section with name, role, social links, and CTA buttons |
| **About** | Profile image with spinning border animation and bio |
| **Education** | Academic background and timeline |
| **Projects** | Showcase of completed projects with tech stacks |
| **Career Trajectory** | Interactive timeline of professional experience |
| **Coursework** | Grid of relevant academic courses |
| **Skills** | Coding and professional skill progress bars |
| **Contact** | Contact form with animated focus states |

## Performance

This portfolio is optimized for performance:

- **Throttled scroll handler** using `requestAnimationFrame` to prevent jank
- **Passive event listeners** for scroll events
- **CSS animations** using `transform` and `opacity` for GPU acceleration
- **Minimal dependencies** — only Boxicons loaded via CDN
- **No JavaScript frameworks** — vanilla JS for minimal bundle size

See [docs/PERFORMANCE.md](docs/PERFORMANCE.md) for detailed performance guidelines.

## Customization

To personalize this portfolio for your own use, see the [docs/CUSTOMIZATION.md](docs/CUSTOMIZATION.md) guide.

Quick start:
1. Update personal info in `index.html`
2. Replace `image/profile.png` with your photo
3. Modify CSS variables in `:root` in `style.css`
4. Update social media links

## Deployment

This is a static site and can be deployed on any static hosting platform:

- **GitHub Pages** — Free, directly from this repo
- **Netlify** — Drag and drop or connect to GitHub
- **Vercel** — Import from GitHub

See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for step-by-step instructions.

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

This project is licensed under the MIT License. See [LICENSE.md](LICENSE.md) for details.

---

**Made with passion by [Aryan Barde](https://github.com/aryanbarde80)**
