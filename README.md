# ricardodantas.me

Personal website and blog built with [Hugo](https://gohugo.io/) using the [PaperMod](https://github.com/adityatelange/hugo-PaperMod) theme.

🌐 **Live site:** [ricardodantas.me](https://ricardodantas.me)

## Features

- **Dracula Theme** - Custom dark mode using the [Dracula](https://draculatheme.com/) color palette
- **Projects Showcase** - Featured projects section on the homepage
- **Blog** - Posts about tech, music, and life
- **Podcast** - Self-hosted podcast with iTunes-compatible RSS feed
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
├── archetypes/
│   └── podcast.md       # Podcast episode template
├── assets/
│   ├── css/extended/    # Custom CSS (Dracula, profile, podcast)
│   └── images/          # Profile image (header logo)
├── content/
│   ├── posts/           # Blog posts
│   └── podcast/         # Podcast episodes
├── layouts/
│   ├── partials/        # Custom template overrides
│   │   ├── home_info.html
│   │   └── projects.html
│   └── podcast/         # Podcast layouts
│       ├── list.html    # Episode listing page
│       ├── single.html  # Episode page with audio player
│       └── rss.xml      # iTunes-compatible RSS feed
├── static/              # Favicons, robots.txt
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

## Podcast

Self-hosted podcast with an iTunes/Spotify-compatible RSS feed. Audio files are hosted externally (CDN/S3/R2) — Hugo generates the feed and episode pages.

### Creating an Episode

```bash
hugo new podcast/my-episode.md
```

### Episode Front Matter

```yaml
---
title: "Episode Title"
date: 2026-02-18
draft: false
episode: 1
# season: 1
duration: "00:45:30"
audio_url: "https://your-cdn.com/episodes/episode-1.mp3"
audio_size: 36240000        # File size in bytes
audio_type: "audio/mpeg"    # MIME type
# episode_image: "https://your-cdn.com/art/ep1.jpg"
episode_type: "full"        # full, trailer, or bonus
tags: ["podcast"]
categories: ["podcast"]
---

Show notes go here.
```

### Feed URL

The podcast RSS feed is available at:

```
https://ricardodantas.me/podcast/feed.xml
```

Submit this URL to podcast directories:
- [Apple Podcasts](https://podcasters.apple.com/)
- [Spotify for Podcasters](https://podcasters.spotify.com/)
- [Google Podcasts](https://podcastsmanager.google.com/)
- [Pocket Casts](https://pocketcasts.com/submit)

### Audio Hosting

Audio files are too large for Git. Host them on a CDN and reference the URL in `audio_url`. Recommended:
- **Cloudflare R2** — Free egress, ~$0.015/GB/month storage
- **Backblaze B2** — 10GB free tier
- **AWS S3** — Standard, pay-per-use

### Podcast Configuration

Podcast metadata is configured in `hugo.toml` under `[params.podcast]`:

```toml
[params.podcast]
title = "Your Podcast Name"
subtitle = "A short tagline"
author = "Your Name"
email = "you@example.com"
description = "Podcast description for directories"
image = "https://yoursite.com/podcast-artwork.jpg"  # Min 1400x1400, max 3000x3000
category = "Technology"
subcategory = "Software How-To"
explicit = "no"
type = "episodic"  # episodic or serial
```

## Deployment

Pushes to `main` automatically trigger the GitHub Actions workflow which:

1. Builds the site with Hugo
2. Deploys to GitHub Pages

## License

Content © Ricardo Dantas. Code is MIT licensed.
