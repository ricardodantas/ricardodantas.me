# Contributing to ricardodantas.me

Thanks for your interest in contributing!

## Development Setup

1. Clone with submodules:
   ```bash
   git clone --recurse-submodules https://github.com/ricardodantas/ricardodantas.me.git
   ```

2. Install [Hugo Extended](https://gohugo.io/installation/) (v0.154+)

3. Run locally:
   ```bash
   hugo server -D
   ```

## Making Changes

### Blog Posts
- Create new posts in `content/posts/`
- Use proper front matter (title, date, tags)
- Preview with `hugo server -D`

### Theme Customizations
- CSS goes in `assets/css/extended/`
- Template overrides in `layouts/partials/`
- **Don't modify** files in `themes/PaperMod/`

### Projects Section
- Edit `layouts/partials/projects.html`
- Follow existing card structure

## Pull Requests

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `hugo server`
5. Submit a PR with a clear description

## Code Style

- Use consistent indentation (2 spaces for HTML/CSS)
- Keep CSS organized by component
- Comment complex template logic
