# AGENTS.md - ricardodantas.me

Personal website and blog built with Hugo and PaperMod theme.

## Tech Stack

- **Framework:** Hugo (static site generator)
- **Theme:** PaperMod (customized with Dracula theme)
- **Hosting:** GitHub Pages
- **Domain:** ricardodantas.me

## Structure

```
ricardodantas.me/
├── content/
│   ├── posts/           # Blog posts
│   ├── about.md         # About page
│   ├── projects.md      # Projects page
│   ├── darkfrets.md     # Music page
│   ├── archives.md      # Archive page
│   ├── search.md        # Search page
│   └── subscribe.md     # Subscribe page
├── layouts/
│   └── partials/
│       └── projects.html  # Homepage projects section
├── assets/
│   └── css/
│       └── extended/
│           └── dracula-theme.css  # Custom theme styles
├── static/
│   ├── llms.txt         # AI agent info
│   └── robots.txt       # Crawler rules
├── themes/
│   └── PaperMod/        # Hugo theme
└── hugo.toml            # Site configuration
```

## Development

```bash
# Run local dev server
hugo server -D

# Build for production
hugo --minify

# Create new post
hugo new posts/my-post.md
```

## Configuration

Main config in `hugo.toml`:
- Site metadata
- Menu structure
- Social icons
- Theme settings

Custom styles in `assets/css/extended/dracula-theme.css`:
- Dracula color scheme
- Project cards styling
- Dark mode improvements

## Content

### Blog Posts
Located in `content/posts/`. Front matter includes:
- title, date, tags, categories
- Optional: cover image, summary, draft status

### Pages
Static pages in `content/`:
- About, Projects, DarkFrets (music)
- Archives, Search (auto-generated)

## Deployment

Automatic via GitHub Actions on push to main branch.
Deploys to GitHub Pages at ricardodantas.me.

## Owner

Ricardo Dantas
- GitHub: ricardodantas
- Email: me@ricardodantas.me
