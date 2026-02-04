# AGENTS.md - ricardodantas.me

Personal website and blog for Ricardo Dantas.

## Project Overview

- **Type:** Static site (Hugo)
- **Theme:** PaperMod with Dracula customizations
- **Hosting:** GitHub Pages via GitHub Actions
- **URL:** https://ricardodantas.me

## Key Files

| File | Purpose |
|------|---------|
| `hugo.toml` | Site configuration (title, menus, params) |
| `assets/css/extended/dracula-theme.css` | Custom Dracula color theme |
| `layouts/partials/home_info.html` | Homepage intro override |
| `layouts/partials/projects.html` | Featured projects section |
| `content/posts/` | Blog posts (Markdown) |
| `.github/workflows/hugo.yml` | CI/CD deployment |

## Customization Approach

PaperMod supports extending without modifying the theme directly:

- **CSS:** Add files to `assets/css/extended/` (auto-loaded)
- **Templates:** Override partials in `layouts/partials/`
- **Config:** Everything in `hugo.toml`

Never edit files inside `themes/PaperMod/` — they're from a submodule.

## Theme Colors (Dracula)

```
Background:    #282a36
Current Line:  #44475a
Foreground:    #f8f8f2
Comment:       #6272a4
Cyan:          #8be9fd
Green:         #50fa7b
Orange:        #ffb86c
Pink:          #ff79c6
Purple:        #bd93f9
Red:           #ff5555
Yellow:        #f1fa8c
```

## Common Tasks

### Add a new blog post
```bash
hugo new posts/my-post-title.md
```

### Add a new project to homepage
Edit `layouts/partials/projects.html` and add a new `.project-card` div.

### Update theme colors
Edit `assets/css/extended/dracula-theme.css`

### Preview locally
```bash
hugo server -D
```

### Build production
```bash
hugo --gc --minify
```

## Deployment

Automatic on push to `main`. GitHub Actions builds and deploys to GitHub Pages.

Check deployment status: https://github.com/ricardodantas/ricardodantas.me/actions

## Content Guidelines

- Posts are in `content/posts/` as Markdown
- Use front matter for title, date, tags, categories
- Images go in `static/images/` and reference as `/images/filename.png`
- Draft posts use `draft: true` in front matter

## Dependencies

- Hugo Extended v0.154+
- PaperMod theme (git submodule)
- Dart Sass (for CI build)
