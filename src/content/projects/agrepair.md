---
title: Agrepair
publishDate: 2023-10-02 00:00:00
img: /assets/projects/agrepair.png
img_alt: Agrepair project logo
description: |
  Agrepair is a platform designed to connect equipment owners with skilled contractors for repair and maintenance services. It provides a seamless way to manage equipment, schedule maintenance, and communicate with contractors. This project was created for HackISU v2 with the goal of simplifying the process of finding reliable contractors for agricultural equipment repairs.
tags:
  - Svelte
  - TailwindCSS
  - Supabase
  - TypeScript
emoji: 🏆
---

#### [View on GitHub](https://github.com/kygoben/agrepair)

---

### The Problem We Noticed

At HackISU v2, my team and I started talking about problems in industries we knew. One teammate had family in farming and mentioned how frustrating it was for equipment owners to find reliable contractors when something broke down. A combine sitting idle during harvest isn't just inconvenient - it's expensive.

The existing options weren't great. You could call around to contractors you'd used before, hope they were available, and coordinate everything over phone calls and text messages. There wasn't really a centralized way to find new contractors, compare options, or keep track of maintenance history.

So we decided to build something that would make that process less painful.

### What We Built

Agrepair connects equipment owners with contractors who specialize in agricultural equipment repair. Owners can list their equipment, schedule maintenance, and find contractors in their area. Contractors can manage their availability and communicate with clients through the platform.

We focused on making the core flow work smoothly: owner needs a repair, finds a qualified contractor, schedules the work, and keeps a record of what was done. Nothing revolutionary, but the kind of practical tool that actually gets used.

### How It Went

We ended up placing 2nd at the hackathon, which felt pretty good for a weekend project. The judges seemed to appreciate that we'd picked a real problem and built something that could genuinely help people, rather than going for something flashy but impractical.

### Tech Choices

We went with Svelte for the frontend because it's fast to build with and performs well. I'd used it on a few projects before and knew we could move quickly with it. TailwindCSS handled the styling - during a hackathon you don't have time to write custom CSS for everything, and Tailwind let us get a clean, responsive design without slowing down.

For the backend, we used Supabase. It gave us auth, database, and real-time features out of the box, which was exactly what we needed when time was tight. TypeScript kept us from making dumb mistakes at 2am when we were running on caffeine and determination.
