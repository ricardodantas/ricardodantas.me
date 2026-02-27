---
layout: post
title: "Perch: Social Media from the Terminal"
microblog: false
custom_summary: true
summary: "After building RSS readers and file organizers in Rust, I turned my attention to social media. Perch is a terminal client for Mastodon and Bluesky that lets you read, post, and engage—without ever opening a browser."
date: 2026-02-27T10:00:00+0100
categories:
- "Dev"
---
I've been on a bit of a streak with Rust and terminal apps. After [Feedo and Hazelnut](/posts/building-tui-apps-with-rust/), I kept looking for things I do daily that could live in the terminal. Social media was an obvious one—and an interesting challenge.

The thing about social media clients is that they're either overwhelming web apps with infinite scroll and algorithmic noise, or they're bare-bones API wrappers that feel like work. I wanted something in between: a beautiful, keyboard-driven interface that makes social media feel intentional instead of addictive.

## Why a Terminal Client?

I spend most of my day in the terminal. Between coding, managing files with Hazelnut, reading feeds with Feedo, and everything else—the terminal is home. Opening a browser tab for Mastodon or Bluesky always felt like a context switch. And context switches are expensive.

There's also something philosophical about using social media in a terminal. It strips away the visual manipulation—the infinite scroll, the notifications badge, the algorithmic feed. You see the content, you engage with it, and you move on. It's social media on your terms.

## What Perch Does

Perch supports both Mastodon and Bluesky, which covers the decentralized social networks I actually use. You authenticate once, and then everything works through either the TUI (text user interface) or the CLI.

The TUI is a three-panel layout: accounts on the left, timeline in the center, and post detail on the right. It's navigated entirely with vim keybindings, which at this point feels as natural as breathing. You can browse your home timeline, like and boost posts, reply, compose new posts—everything you'd do in a web client.

But the part I'm most proud of is **cross-posting**. Write a post once, and Perch sends it to both Mastodon and Bluesky simultaneously. I've been maintaining a presence on both networks, and doing it manually was getting old. Now it's one command or one keystroke.

The CLI side is equally useful. You can script your social media—schedule posts, fetch timelines, manage accounts—all from shell scripts or cron jobs. It composes nicely with other tools.

## The Technical Bits

Building a multi-network social client in Rust was more complex than my previous projects. Mastodon uses OAuth and a REST API, while Bluesky uses the AT Protocol with app passwords. Abstracting these behind a unified `SocialApi` trait took some careful design, but the result is clean—adding a new network in the future would be straightforward.

Credentials are stored in the system keyring (via the `keyring` crate), so no plaintext tokens lying around in config files. There's also a SQLite-backed cache for offline reading, which means Perch works even when your connection doesn't.

For theming, I integrated [ratatui-themes](https://github.com/ricardodantas/ratatui-themes)—a theme library I built separately. Perch ships with 15 themes out of the box, from Dracula to Catppuccin to a neon Cyberpunk theme that's entirely too fun.

## What I Learned This Time

Each Rust project teaches me something different:

- **Trait-based abstraction pays off.** The `SocialApi` trait let me treat Mastodon and Bluesky uniformly throughout the app. When I added cross-posting, it was trivial because the abstraction was already there.

- **OAuth in Rust is painful.** Not because of Rust itself, but because OAuth flows involve HTTP redirects, local servers, token exchange—it's inherently messy. Getting it right took more time than I'd like to admit.

- **SQLite is the right default.** Every time I reach for SQLite in a desktop/CLI app, I'm reminded how good it is. Zero configuration, embedded, fast. The `rusqlite` crate makes it feel native to Rust.

- **People care about themes.** I added theming almost as an afterthought in Feedo, and it was the most commented-on feature. For Perch, I made it a first-class concern from day one.

## Try It

Perch is open source and available now:

- **Website:** [perch.ricardodantas.me](https://perch.ricardodantas.me)
- **GitHub:** [github.com/ricardodantas/perch](https://github.com/ricardodantas/perch)
- **Install:** `brew install ricardodantas/tap/perch` or `cargo install perch`

If you use Mastodon, Bluesky, or both—give it a try. It might change how you think about social media. Or at least save you from opening another browser tab. 🐦
