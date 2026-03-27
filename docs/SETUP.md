# Setup Guide

Complete guide to setting up the portfolio for local development.

## Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- A text editor or IDE (VS Code recommended)
- Git installed on your machine

## Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/aryanbarde80/My-Portfolio.git
cd My-Portfolio
```

### 2. Open in Browser

Simply open `index.html` in your browser:

```bash
# macOS
open index.html

# Linux
xdg-open index.html

# Windows
start index.html
```

### 3. Using Live Server (Recommended)

For a better development experience with auto-reload:

**VS Code Live Server Extension:**
1. Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension
2. Right-click `index.html` → "Open with Live Server"
3. Browser opens at `http://127.0.0.1:5500`

**Python HTTP Server:**
```bash
# Python 3
python -m http.server 8000

# Then open http://localhost:8000
```

**Node.js HTTP Server:**
```bash
npx serve .
# or
npx http-server .
```

## Editor Setup

### VS Code Recommended Extensions

| Extension | Purpose |
|---|---|
| Live Server | Auto-reload on save |
| HTML CSS Support | CSS class autocomplete in HTML |
| CSS Peek | Peek at CSS definitions from HTML |
| Auto Rename Tag | Rename paired HTML tags |
| Prettier | Code formatting |
| IntelliSense for CSS | CSS class name completion |

### Settings

Add to `.vscode/settings.json`:
```json
{
    "editor.tabSize": 4,
    "editor.formatOnSave": true,
    "emmet.includeLanguages": {
        "html": "html"
    }
}
```

## Project Structure

```
My-Portfolio/
├── index.html      ← Main (and only) HTML page
├── style.css       ← All styles, animations, responsive rules
├── script.js       ← Scroll handling, nav toggle, animations
├── image/
│   └── profile.png ← Profile photo
├── docs/           ← Documentation files
└── .github/        ← Issue/PR templates
```

## No Build Step Required

This project uses vanilla HTML, CSS, and JavaScript. There is:
- No package.json
- No build tools (webpack, vite, etc.)
- No transpilation needed
- No node_modules

Just edit the files and refresh your browser.
