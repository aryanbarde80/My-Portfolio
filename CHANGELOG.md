# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [2.0.0] - 2026-03-27

### Added
- Career Trajectory section with interactive timeline
- Coursework section with course grid cards
- Third project entry (Task Management App)
- Comprehensive documentation (README, CONTRIBUTING, CODE_OF_CONDUCT, etc.)
- Full `docs/` directory with architecture, performance, deployment guides, and more
- GitHub issue templates and PR template

### Fixed
- **Performance**: Scroll handler now uses `requestAnimationFrame` with throttling
- **Performance**: Passive event listener for scroll events
- **Bug**: CSS `.animate` overlay `width: 100` (missing `%` unit) corrected to `width: 100%`
- **Bug**: `.animate` background changed from `yellowgreen` to match theme background
- **Bug**: Sections no longer lose `show-animate` class when scrolled past (content stays visible)
- **Bug**: `header` element cached outside scroll handler to avoid repeated DOM queries
- **Bug**: Null-safe check added for active nav link selection
- **Performance**: Reduced excessive footer margin from `100px` to `20px`
- **UX**: `DOMContentLoaded` handler triggers initial scroll check so hero section content is visible on load

### Changed
- Project descriptions expanded with richer detail
- Navigation updated to include Career and Coursework links
- Animation selectors extended to cover all new sections

## [1.0.0] - 2024-02-01

### Added
- Initial portfolio with Home, About, Education, Skills, and Contact sections
- Responsive design with mobile breakpoints
- Scroll-triggered CSS animations
- Boxicons integration
- Profile image with spinning border animation
