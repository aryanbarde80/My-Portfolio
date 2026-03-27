# Security Policy

## Supported Versions

| Version | Supported |
|---|---|
| 2.x | Yes |
| 1.x | No |

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please report it responsibly:

1. **Do NOT** open a public issue
2. Email the maintainer or contact via [GitHub](https://github.com/aryanbarde80)
3. Provide a detailed description of the vulnerability
4. Include steps to reproduce if possible

## Security Considerations

This is a static portfolio website with no backend or database. However, keep the following in mind:

### Client-Side Security
- The contact form currently uses `action="#"` and does not submit data to a server
- No sensitive data is stored client-side
- No cookies or local storage are used

### Third-Party Dependencies
- **Boxicons** is loaded via CDN (`unpkg.com`). Ensure the CDN URL uses HTTPS
- No other external JavaScript libraries are used

### Content Security
- All external links should use `rel="noopener noreferrer"` for security
- Images are served locally from the `image/` directory

### Deployment Security
- Always serve the site over HTTPS in production
- Set appropriate security headers (CSP, X-Frame-Options, etc.) on your hosting platform
- Keep dependencies updated

## Best Practices for Contributors

- Do not commit secrets, API keys, or credentials
- Do not add tracking scripts without explicit consent
- Validate and sanitize any user input if a backend is added in the future
- Use Subresource Integrity (SRI) hashes for CDN resources when possible
