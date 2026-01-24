---
layout: post
title: "Leveling up my dotfiles"
microblog: false
guid: http://ricardodantas.micro.blog/2026/01/23/leveling-up-my-dotfiles/
post_id: 5728352
custom_summary: true
summary: "I’ve come across some truly helpful tools that have made a big difference in how I manage my dotfiles. They not only enhance automation but also boost security, making the setup process feel much more efficient and safe. "
date: 2026-01-23T23:54:21+0100
lastmod: 2026-01-24T02:13:00+0100
categories:
- "Dev"
thumbnail: https://s3.amazonaws.com/micro.blog/thumbnails/2026/01/24/ricardodantas.me/1e924b547001432c82168279f0efcd80.png
opengraph:
  title: "Ricardo Dantas - Leveling up my dotfiles"
  image: https://s3.amazonaws.com/micro.blog/opengraph/2026/01/23/5728352.png
url: "/2026/01/23/leveling-up-my-dotfiles/"
mastodon:
  id: "115946873013274058"
  username: "ricardodantas"
  hostname: "mastodon.social"
bluesky:
  id: "bafyreif3j4lqk2mltlc4ooivy2zar2kdhhc3mredrbskplxwh2lgffucom"
  url: "at://did:plc:gio66oanstyf42dkcpw3phxc/app.bsky.feed.post/3md4s7fth7d2t"
  link: "https://bsky.app/profile/did:plc:gio66oanstyf42dkcpw3phxc/post/3md4s7fth7d2t"
  handle: "ricardodantas.me"
  hostname: "bsky.social"
  did: "did:plc:gio66oanstyf42dkcpw3phxc"
---
For months, I have sought better ways to automate reinstalling my work tools when switching to a new laptop. Years ago, I began using [dotfiles](https://www.freecodecamp.org/news/dotfiles-what-is-a-dot-file-and-how-to-create-it-in-mac-and-linux/). Initially, I used some tooling I wasn't entirely happy with, but given the options at the time, it was what I had. After a few months, I simplified my approach, adopting only [Stow](https://www.gnu.org/software/stow/) and a Bash Script for managing my dotfiles. This made the setup process much faster and easier, significantly reducing overhead. However, I was concerned about the security of my secrets — they were stored in plain text in the config files. Although my repository was private and I used a password manager via a Bash Script, I didn’t feel comfortable with unencrypted passwords in the configs.

- [Mise (or “mise-en-place”)](https://mise.jdx.dev/) is an open-source development environment setup tool designed to make local dev environments easy, consistent, and reproducible across projects and languages.

- [Fnox](https://fnox.jdx.dev/) is a developer-focused secret management CLI tool that helps you securely manage and use sensitive configuration values (like API keys, database passwords, tokens) across development, CI/CD, and production workflows. It combines encrypted storage in version control with support for remote secret providers into a single workflow.

I don't like giving other apps permission to integrate with my password manager, and that is non-negotiable. This was one of the main problems in integrating my secrets with my old workflow. With Fnox and Mise, I can pull the secrets from my password manager during the setup script, encrypt them with a disposable key, and that is it. No secrets exposed in the config files.

Maintaining my Bash scripts became much easier thanks to [Mise Tasks](https://mise.jdx.dev/tasks/). It reminded me of [Makefiles](https://www.gnu.org/software/make/manual/make.html), but easier to use. Additionally, with support for managing versions of Node.js, Rust, Ruby, and many other packages—since it also functions as a package manager—along with integration for [idiomatic version files](https://mise.jdx.dev/configuration.html#idiomatic-version-files) like .ruby-version, Gemfile, .nvmrc, environment variable management, and CI/CD integration, it fulfilled all my needs.

As a result, my dotfiles are now easier to maintain, more secure, and quicker to install. I might consider making my dotfiles public at some point. Yeah... maybe. 🤔

And, Yes! I rotated all my secrets while refactoring my dotfiles and recreated my repo from scratch. 😎
