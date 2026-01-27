---
title: everynetnet.com
publishDate: 2024-08-01 00:00:00
img: /assets/projects/everynetnetlogo.jpg
img_alt: EveryNetNet logo
description: |
  A database of net-net stocks (companies trading below their net current asset value) with filtering. Built for value investors who don't want to spend weekends in spreadsheets.
tags:
  - React
  - Next.js
  - Go
  - Google Cloud Platform
  - Puppeteer
  - Stripe API
---

#### [Visit EveryNetNet.com](https://everynetnet.com/)

<br />

---

## How this started

Benjamin Graham's net-net strategy is simple in theory: find companies trading below their liquidation value. In practice, it means digging through thousands of financial statements looking for needles in haystacks.

I spent a weekend doing this manually and got annoyed enough to write a script. The script worked. Friends asked to use it. More people asked. At some point I realized I'd accidentally started a business.

<br />

---

<br />

## Going from script to product

The jump from "thing I built for myself" to "thing 700+ people use" happened gradually. Early users would email me about missing data or confusing UI, and I'd fix it. Most features exist because someone asked for them.

The first 100 users felt like a lot. Now there are over 700, which still surprises me. Individual investors using the same data that used to require a Bloomberg terminal or a team of analysts.

<br />

---

<br />

## Technical decisions

### Frontend

Started with React because I knew it. Moved to Next.js to improve the end user experience with server-side rendering. Page loads dropped from 2.8s to 1.2s after the migration, time to first contentful paint improved significantly, and SEO got noticeably better.

### Backend

The original Node.js backend worked until it didn't. Processing costs kept climbing as the dataset grew. I rewrote the whole thing in Go, which cut processing time by two-thirds. The rewrite was motivated entirely by a cloud bill that made me wince.

Go's goroutines handle the parallel processing. Chromium instances run in a pool for scraping. It's faster and cheaper than before.

### Data collection

Financial data is messy. Companies report things inconsistently, formats vary between sources, and edge cases are everywhere. The validation logic started as a few rules and grew into something that handles hundreds of reporting quirks.

I still find bugs sometimes. A company reports something weird, the calculation looks wrong, and I spend an evening figuring out why. It's annoying but also kind of interesting.

<br />

---

<br />

## The business side

EveryNetNet runs on a paid monthly subscription. It reached profitability and now operates at over 90% margins, mostly because the infrastructure is lean. Growth has been around 40% month-over-month, driven by word of mouth more than marketing.

The system processes about 15,000 financial documents daily. Accuracy sits at 99.7% after a lot of validation work.

## Technical specs

The stack, for those who care:

- Next.js with incremental static regeneration for the data pages
- Go backend with goroutines for parallel financial calculations
- Pooled Chromium instances for scraping
- Google Cloud Run containers and Cloud Functions
- Stripe webhooks with idempotency keys for billing
- Multi-stage ETL pipeline with cross-source validation
