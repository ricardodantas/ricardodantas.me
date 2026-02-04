# ricardodantas.me

Personal website and blog built with [Hugo](https://gohugo.io/) using the [PaperMod](https://github.com/adityatelange/hugo-PaperMod) theme.

🌐 **Live site:** [ricardodantas.me](https://ricardodantas.me)

## Features

- **Dracula Theme** - Custom dark mode using the [Dracula](https://draculatheme.com/) color palette
- **Projects Showcase** - Featured projects section on the homepage
- **Blog** - Posts about tech, music, and life
- **RSS Feed** - Subscribe at `/feed.xml`
- **Full-text Search** - Built-in search functionality

## Tech Stack

- **Static Site Generator:** Hugo
- **Theme:** PaperMod (with customizations)
- **Hosting:** GitHub Pages
- **CI/CD:** GitHub Actions

## Local Development

### Prerequisites

- [Hugo Extended](https://gohugo.io/installation/) (v0.154+)
- Git

### Running Locally

```bash
# Clone with submodules (theme)
git clone --recurse-submodules https://github.com/ricardodantas/ricardodantas.me.git
cd ricardodantas.me

# Start dev server
hugo server -D

# Build for production
hugo --gc --minify
```

The site will be available at `http://localhost:1313`

## Project Structure

```
.
├── archetypes/          # Content templates
├── assets/
│   └── css/
│       └── extended/    # Custom CSS (Dracula theme)
├── content/
│   └── posts/           # Blog posts
├── layouts/
│   └── partials/        # Custom template overrides
│       ├── home_info.html
│       └── projects.html
├── themes/
│   └── PaperMod/        # Theme (git submodule)
├── hugo.toml            # Site configuration
└── .github/
    └── workflows/       # GitHub Actions deployment
```

## Customizations

### Dracula Theme (`assets/css/extended/dracula-theme.css`)

Custom color scheme using Dracula palette:
- Background: `#282a36`
- Foreground: `#f8f8f2`
- Purple: `#bd93f9` (primary accent)
- Pink: `#ff79c6` (hover states)
- Cyan: `#8be9fd` (links)
- Green: `#50fa7b` (code, titles)

### Projects Section (`layouts/partials/projects.html`)

Featured projects displayed as cards on the homepage with:
- Project icon and title
- Tech badge (language/framework)
- Description
- Links to website and GitHub

## Writing Posts

```bash
# Create a new post
hugo new posts/my-new-post.md
```

Posts use front matter for metadata:

```yaml
---
title: "Post Title"
date: 2024-01-01
draft: false
tags: ["tech", "rust"]
categories: ["development"]
---
```

## Deployment

Pushes to `main` automatically trigger the GitHub Actions workflow which:

1. Builds the site with Hugo
2. Deploys to GitHub Pages

## License

Content © Ricardo Dantas. Code is MIT licensed.
