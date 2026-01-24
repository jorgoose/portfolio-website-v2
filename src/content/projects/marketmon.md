---
title: Marketmon 🏆 (x2)
publishDate: 2024-09-04 00:00:00
img: /assets/projects/marketmon.png
img_alt: Trading card game interface with financial data-based monsters
description: |
  Marketmon is a web-based trading card game that combines the excitement of battling monsters with real-time financial data from S&P 500 companies, offering an engaging and educational experience in finance and investing.
tags:
  - Svelte
  - TypeScript
  - Tailwind CSS
  - Python
  - Claude API
  - Stability API
---

#### [Visit Marketmon](https://marketmon.vercel.app)

---

## The Idea

I grew up obsessed with Pokemon and Yu-Gi-Oh cards. There's something deeply satisfying about collecting creatures, building decks, and battling friends. At the same time, I've always been curious about finance and what makes companies tick.

One day it clicked: what if the monsters *were* the companies? What if Apple's market dominance made its creature stronger, or a company's earnings growth literally powered up its attacks?

That's Marketmon. Every card represents a real S&P 500 company, and their stats update based on actual financial metrics. It's a trading card game where the meta shifts with the market.

## How It Works

You pick a deck of company-monsters and battle against an AI opponent. Each card has stats derived from real financial data - market cap affects health, free cash flow influences attack power, earnings growth boosts special abilities. When Apple has a good quarter, the Apple creature gets stronger. When a company struggles, so does its monster.

The creatures themselves are AI-generated. I fed company profiles into Claude to create creature descriptions that capture each company's essence, then used Stability AI to generate the artwork. The result is a unique monster for every S&P 500 company, each one thematically tied to what that company actually does.

## Building It

The tech stack came together based on what each problem needed:

- **Svelte + TypeScript** for the frontend - I wanted something fast and reactive for the card battles, and Svelte's approach to reactivity felt natural for game state
- **Tailwind CSS** for styling the cards and battle UI
- **Python scripts** to scrape financial data from Yahoo Finance
- **Claude Haiku API** to generate creature lore from company descriptions
- **Stability API** to create the actual creature artwork

The pipeline was fun to build: scrape company data, generate descriptions, create images, then wire it all into a browser-based battle system. All the game logic runs client-side, so there's no server managing game state - just you, the cards, and real market data.

## The Hard Parts

Game balance was trickier than I expected. Financial metrics span huge ranges - Apple's market cap is orders of magnitude larger than smaller S&P companies. I had to normalize everything carefully so battles weren't predetermined by company size alone.

The state management for battles also got messy fast. Tracking health, energy, status effects, turn order, ability cooldowns - TypeScript saved me here. Every time I thought "this should work," the type checker would catch some edge case I'd missed.

## What Made It Special

Seeing the creatures come to life was genuinely exciting. Each one feels connected to its company in ways that surprised me. The AI picked up on themes I wouldn't have thought of, creating monsters that somehow *feel* like their companies.

And there's something satisfying about checking your deck after market close to see if your creatures got buffed or nerfed. It makes financial data weirdly engaging.

## Where It Could Go

The obvious next step is multiplayer - battling friends with your carefully curated decks. I'd also love to add card packs, deck building with rarity tiers, maybe even a system where you can level up creatures by holding them through earnings seasons.

For now though, it's a fun proof of concept that won a couple hackathon awards and taught me a ton about game development, API orchestration, and making financial data actually interesting.

#### [Visit Marketmon](https://marketmon.vercel.app)
