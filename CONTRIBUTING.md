# Contributing to Aryan's Portfolio

Thank you for your interest in contributing! This document provides guidelines and steps for contributing.

## How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported in [Issues](https://github.com/aryanbarde80/My-Portfolio/issues)
2. If not, create a new issue using the [Bug Report template](.github/ISSUE_TEMPLATE/bug_report.md)
3. Include as much detail as possible:
   - Browser and version
   - Operating system
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable

### Suggesting Features

1. Check existing [Issues](https://github.com/aryanbarde80/My-Portfolio/issues) for similar suggestions
2. Create a new issue using the [Feature Request template](.github/ISSUE_TEMPLATE/feature_request.md)
3. Describe the feature and why it would be useful

### Submitting Changes

1. Fork the repository
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes
4. Test your changes across different browsers and screen sizes
5. Commit with a clear message:
   ```bash
   git commit -m "feat: add dark mode toggle"
   ```
6. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
7. Open a Pull Request using the [PR template](.github/PULL_REQUEST_TEMPLATE.md)

## Development Setup

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/My-Portfolio.git
cd My-Portfolio

# Open with Live Server or simply open index.html in a browser
```

## Code Style Guidelines

### HTML
- Use semantic HTML5 elements
- Maintain proper indentation (4 spaces)
- Add comments for section boundaries
- Use meaningful class names

### CSS
- Use CSS custom properties (variables) defined in `:root`
- Follow BEM-like naming conventions
- Group related styles together
- Add comments for major sections
- Use `rem` units for sizing

### JavaScript
- Use `const` and `let` (no `var`)
- Use arrow functions where appropriate
- Add comments for complex logic
- Use `requestAnimationFrame` for scroll/animation handlers

## Commit Message Convention

Follow the [Conventional Commits](https://www.conventionalcommits.org/) format:

| Prefix | Purpose |
|---|---|
| `feat:` | New feature |
| `fix:` | Bug fix |
| `docs:` | Documentation changes |
| `style:` | Code style changes (formatting, no logic change) |
| `refactor:` | Code refactoring |
| `perf:` | Performance improvement |
| `chore:` | Maintenance tasks |

## Code of Conduct

Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md).

## Questions?

Feel free to open an issue or reach out via the contact form on the portfolio.
