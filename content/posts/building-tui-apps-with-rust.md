---
layout: post
title: "Building TUI Apps with Rust: Feedo and Hazelnut"
microblog: false
draft: true
custom_summary: true
summary: "With some unexpected free time, I dove into Rust development and built two terminal-based applications. Here's the story behind Feedo and Hazelnut."
date: 2026-02-04T18:00:00+0100
categories:
- "Dev"
---
My family traveled abroad for a month, and suddenly I had something rare: free time. Instead of binge-watching series or scrolling endlessly, I decided to channel that energy into something I've been curious about for a while—Rust development.

I've been watching Rust from the sidelines for years. The language always intrigued me: its focus on memory safety, the passionate community, the promise of "fearless concurrency." But between work and family life, I never found the right moment to dive in properly.

Well, the moment arrived.

## Why Rust?

As a software developer, I've worked with many languages over the years. JavaScript and TypeScript dominate my day job, and I've dabbled in Python, Go, and others. But Rust felt different. The learning curve is famously steep, but the payoff—fast, safe, reliable code—seemed worth it.

What really drew me in was the terminal ecosystem. Rust has incredible libraries for building command-line and TUI (Text User Interface) applications. Tools like [ratatui](https://ratatui.rs/) make it surprisingly pleasant to create rich terminal interfaces.

## Feedo: A TUI RSS Reader

The first project I tackled was **Feedo**, a terminal-based RSS feed reader.

I've always liked RSS. It's the antidote to algorithm-driven feeds—you choose what you want to read, and that's what you get. But most RSS readers are either web-based or clunky desktop apps. I wanted something fast, keyboard-driven, and integrated into my terminal workflow.

Feedo lets you:
- Add and organize RSS/Atom feeds
- Browse articles with vim-like keybindings
- Open articles in your browser
- Search through your feeds
- Choose from multiple themes

Building it taught me a lot about async Rust, HTTP clients, and XML parsing. The ratatui library made the UI work enjoyable, and I'm genuinely happy with how it turned out.

**Check it out:** [feedo.ricardodantas.me](https://feedo.ricardodantas.me) | [GitHub](https://github.com/ricardodantas/feedo)

## Hazelnut: Automated File Organization

The second project, **Hazelnut**, scratches a different itch. It's inspired by [Hazel](https://www.noodlesoft.com/), the popular macOS file automation tool.

I've always wanted something like Hazel, but cross-platform and terminal-based. Hazelnut watches folders and automatically organizes files based on rules you define. Downloaded a PDF? Move it to Documents. Old screenshots? Archive them. Temporary files older than 30 days? Delete them.

The architecture is split into two parts:
- **hazelnut** — The TUI for managing rules and watches
- **hazelnutd** — The background daemon that does the actual work

Building the daemon was particularly interesting. It uses the `notify` crate for cross-platform file watching (inotify on Linux, kqueue on macOS) and supports hot-reloading configuration via Unix signals.

**Check it out:** [hazelnut.ricardodantas.me](https://hazelnut.ricardodantas.me) | [GitHub](https://github.com/ricardodantas/hazelnut)

## What I Learned

This month of intense Rust development taught me more than I expected:

- **The compiler is your friend.** Yes, it's strict. Yes, it will reject your code often. But when it compiles, it usually works. The confidence that brings is remarkable.

- **TUI development is fun.** There's something deeply satisfying about building interfaces that run in the terminal. It feels efficient and focused.

- **Side projects need deadlines.** Having a month with clear free time created natural pressure to ship something. Without that, these projects might have lingered in "someday" territory forever.

- **Rust is worth the investment.** The learning curve is real, but the language's design makes you think more carefully about your code. That translates to better habits in other languages too.

## What's Next?

Both projects are open source and available on GitHub. I'm planning to publish them on crates.io and set up Homebrew formulas for easier installation.

There's still plenty to improve—better documentation, more features, and refinements based on real-world usage. But for now, I'm happy to have shipped two actual tools that I use daily.

If you're curious about Rust or TUI development, I encourage you to try building something small. The ecosystem is welcoming, the tooling is excellent, and there's something special about seeing your creation run in the terminal.

Now I just need to figure out what to build next. 🦀
