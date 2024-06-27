---
title: Marketmon
publishDate: 2024-10-07 00:00:00
img: /assets/projects/marketmon.jpg
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

## <!-- Horizontal Line -->

---

## Inspiration

Marketmon was inspired by the desire to create an engaging and educational experience that combines the excitement of trading card games like Pokemon or Yugioh with the world of finance and investing. By linking each card to a real-world company, players can learn about different businesses, their performance, and how various financial metrics influence their strength in the game.

## What is Marketmon?

Marketmon is a web-based trading card game where players battle with cards representing S&P 500 companies. Each card's stats are directly impacted by real-time financial metrics such as market cap, free cash flow, and earnings growth. As companies grow and expand, so do the strength and abilities of their corresponding cards.

## How We Built It

Marketmon's architecture includes:

- **Svelte with TypeScript**: For the frontend development
- **Tailwind CSS**: For styling
- **Python**: For data scraping
- **Claude Haiku API**: To generate creature descriptions
- **Stability API**: To generate creature images
- **Yahoo Finance API**: To fetch real-time financial data

### Key Steps:

1. **Data Scraping**: Gather company data from Yahoo Finance
2. **Description Generation**: Use Claude API to create creature descriptions based on company profiles
3. **Image Generation**: Use Stability API to create unique creature images
4. **Game Logic**: Implement game state and moves client-side in the browser
5. **UI Development**: Create an engaging interface using Svelte and Tailwind CSS

## Challenges

Our main challenges included conceptualizing and implementing complex game logic, balancing game mechanics based on financial metrics, and managing state mutability issues.

## Accomplishments

We're proud of developing a functional UI with visually appealing cards displaying real data, successfully integrating multiple APIs (yfinance, Claude, Stability), and creating an engaging experience that blends trading card games with dynamic financial elements.

## What We Learned

We gained insights into the complexities of game logic development, the benefits of using TypeScript for catching potential bugs, and the importance of careful API integration and variable naming.

## What's Next

We plan to:

- Improve game balance and logic
- Implement real-time multiplayer functionality
- Develop a system for leveling up and opening card packs
- Expand the game to include more companies and industries
- Introduce leaderboards and competitive elements

We're committed to continuously improving Marketmon to provide an even more engaging and educational experience for players interested in finance and trading card games.

#### [Visit Marketmon](https://marketmon.vercel.app)
---