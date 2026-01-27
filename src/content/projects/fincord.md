---
title: FinCord
publishDate: 2012-12-01 00:00:00
img: /assets/projects/fincord.jpeg
img_alt: A bright pink sheet of paper used to wrap flowers curves in front of rich blue background
description: |
  A social media bot with a focus on improving financial literacy, with features such as defining financial terms, providing stock quotes, and providing easy access to various financial calculators without having to leave the Discord app.
tags:
  - Python
  - Git
  - Firebase
  - NLTK
  - QuickChart API
  - Discord API
emoji: 🏆
---

#### [View on GitHub](https://github.com/jorgoose/FinCord)

---

## Why A Financial Literacy Bot?

I built FinCord during a hackathon after noticing a pattern in the Discord servers I was in: people would ask basic financial questions and either get no response or get overwhelmed with jargon. What does P/E ratio actually mean? How do compound interest calculations work? These aren't complicated concepts, but the answers were always a Google search away instead of right there in the conversation.

The idea was simple: bring financial education into the spaces where people already hang out. Instead of leaving Discord to look something up, just ask the bot.

---

## What It Does

FinCord has a few core features that made it useful:

**Financial term definitions** - Ask about any finance term and get a plain-English explanation. The bot uses NLTK for natural language processing, so you don't have to phrase things perfectly. It tries to understand what you're actually asking about.

**Stock quotes** - Quick access to current stock prices without switching apps. Type a ticker symbol and get the price, change, and a simple chart generated through QuickChart.

**Financial calculators** - Compound interest, loan payments, investment growth projections. The kind of calculations that are simple in concept but annoying to set up in a spreadsheet every time.

---

## Building It

This was my first real experience with natural language processing. NLTK handled the text parsing, which let users ask questions in natural ways rather than memorizing exact commands. Firebase stored user preferences and tracked usage patterns.

The trickiest part was making the responses actually helpful. A definition is only useful if someone can understand it. I spent a lot of time rewriting explanations to avoid the trap of defining finance terms with more finance terms.

---

## The Hackathon

FinCord won an award at the hackathon where it was built. Looking back, I think it resonated because it solved a real problem in a space judges could relate to. Everyone's been in a conversation where they didn't understand a term but didn't want to derail things by asking.

The project taught me that the most useful tools often aren't the most technically impressive ones. They're the ones that remove small frictions from things people already do.
