---
layout: post
title: "Launching Pikr: A Color Picker for Accessibility-Minded Developers"
microblog: false
custom_summary: true
summary: "After building several Rust projects, I'm launching Pikr—a color picker that makes checking WCAG contrast ratios effortless. Here's the story behind it."
date: 2026-02-17T16:00:00+0100
categories:
- "Dev"
---
If you've ever worked on a UI—whether as a developer or designer—you know the dance. Pick a color. Check if it's accessible. Open another tool. Paste the hex code. Check the contrast ratio. Realize it fails AA. Go back. Adjust. Repeat.

It's tedious. And it's a workflow I've done hundreds of times.

So I built something to fix it.

## Introducing Pikr

[Pikr](https://getpikr.app) is a color picker with built-in WCAG accessibility contrast checking. Pick any color from your screen, and instantly see if it meets AA or AAA compliance standards. No switching between apps. No copy-pasting hex codes into web tools. Just pick and know.

It sounds simple because it should be simple. That's the whole point.

## The Problem It Solves

Accessibility isn't optional anymore—and it shouldn't be. But the tooling around it has always felt fragmented. You have your design tool, your color picker, and then some separate contrast checker (usually a website). Every time you want to verify a color choice, you're context-switching.

I wanted something integrated. Pick a color, see the contrast ratio against your background, know immediately if it passes. All in one place.

## What It Does

Pikr keeps things focused:

- **Pick colors from anywhere on screen** — Works system-wide, not locked to any specific app
- **Instant WCAG contrast checking** — See AA and AAA compliance as you pick
- **Multiple color formats** — Hex, RGB, HSB, HSL, LAB, and OpenGL
- **Clean, minimal interface** — It stays out of your way until you need it

Nothing more than necessary. I've grown to appreciate tools that do one thing well.

## Why Tauri?

After spending time with Rust building [Feedo and Hazelnut](/2026/02/04/building-tui-apps-with-rust/), I wanted to apply what I learned to a desktop app with an actual GUI. [Tauri](https://tauri.app/) was the natural choice—it combines a Rust backend with a web-based frontend, resulting in small, fast, native applications.

The development experience was smooth. Tauri handles the cross-platform complexity (system tray, global shortcuts, native dialogs) while letting me use familiar web technologies for the interface. The final binary is tiny compared to Electron-based alternatives, and it feels snappy.

Pikr currently runs on macOS and Linux, with Windows support coming soon.

## Shipping Something

There's something satisfying about taking a personal frustration and turning it into a tool others can use. Pikr started as a solution to my own workflow problem, but accessibility affects everyone building interfaces. If it saves someone else from the tab-switching dance, that's a win.

The app is available at [getpikr.app](https://getpikr.app) for $5—or $3 right now with a 40% launch discount. It's not free, but it's also not trying to be a subscription or harvest your data. Just a small tool that does its job.

## What's Next?

I'll keep refining Pikr based on feedback and my own usage. Windows support is the immediate priority. Beyond that, I have some ideas for features, but I want to be careful not to bloat it. The simplicity is intentional.

If you're a developer or designer who cares about accessibility (and you should), give it a look. And if you have feedback, I'd love to hear it.

Let's see where this one goes. 🎨
