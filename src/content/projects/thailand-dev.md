---
title: ThailandDev
publishDate: 2024-12-01 00:00:00
img: /assets/projects/thailand-dev.png
img_alt: Thailand Dev job board platform interface showing tech job listings
description: |
  A job board for developers seeking visa-sponsored tech roles in Thailand, featuring an AI scraper that adapts to any career site and weekly email digests of new opportunities.
tags:
  - Next.js
  - TypeScript
  - Python
  - Playwright
  - Google Gemini AI
  - Supabase
  - Tailwind CSS
  - FastAPI
---

#### [Visit thailand-dev.com](https://thailand-dev.com)

---

## The Problem

Finding a developer job in Thailand as a foreigner is harder than it should be. The listings are scattered across dozens of company career pages, each with different formats and navigation. Most aggregators either focus on local-language roles or mix in positions that won't sponsor a work visa. You end up spending hours every week checking the same sites, trying to remember which jobs you've already seen.

I wanted to move to Thailand and kept running into these frustrations firsthand. The existing job boards didn't filter for what actually mattered: English-speaking roles at companies willing to handle visa sponsorship.

---

## The Solution

Thailand Dev aggregates tech jobs from companies known to hire international developers and sponsor visas. Instead of checking twenty career pages every week, you check one site or subscribe to a Monday morning email with the latest postings.

The core insight was that the scraping problem had changed. Traditional scrapers break constantly because every company structures their career page differently. But with modern LLMs, I could build a scraper that reads pages the way a human does—understanding context rather than relying on brittle CSS selectors.

---

## How the Scraper Works

The scraper visits each company's career page using Playwright, captures the rendered HTML, and sends it to Google's Gemini 2.0 Flash model with a structured prompt. The AI extracts job titles, descriptions, locations, and application URLs regardless of how the page is laid out.

This approach handles edge cases that would break traditional scrapers. Infinite scroll? The scraper scrolls until content stops loading. Jobs spread across multiple pages? It follows pagination. Unusual HTML structure? The AI figures it out.

For Workday sites—which power a surprising number of enterprise career pages—I built a specialized scraper that's faster and more reliable since Workday's structure is consistent across companies.

New jobs get stored in Supabase with the application URL as a unique key. If a job disappears from a company's site for two consecutive scrape cycles, it gets marked as inactive rather than deleted, keeping the database clean without losing historical data.

---

## The Web Application

The frontend is a Next.js 15 app with a straightforward goal: help you find relevant jobs quickly. You can filter by company, location, or keywords. Each company has a profile page showing their current openings and a bit of context about what they do.

Job detail pages include the full description and a direct link to apply. No account required, no friction between you and the application.

For people who prefer passive job hunting, there's an email subscription. Every Monday at 9am UTC, subscribers get a digest of jobs posted in the previous week. The emails are sent via Resend through a Supabase Edge Function triggered by a cron job.

---

## Technical Architecture

The system runs as three independent components:

**The scraper** is a Python service using Playwright for browser automation and FastAPI to expose an endpoint for manual triggers. It runs on a schedule and processes companies concurrently, keeping total scrape time reasonable even as the company list grows.

**The database** is Supabase (PostgreSQL underneath) storing jobs, companies, and email subscribers. Schema changes are handled through versioned migrations. Row-level security policies control access, and the web app queries through Supabase's auto-generated API.

**The web app** deploys to Vercel with ISR for job listing pages. Static generation keeps things fast while revalidation ensures new jobs show up within minutes of being scraped.

---

## What I Learned

Building an AI-powered scraper taught me that LLMs are genuinely good at unstructured data extraction—better than I expected. The Gemini API handles messy HTML gracefully, and the cost per job extraction is negligible.

The harder problem was curation. Which companies actually sponsor visas? Which roles are realistic for foreign applicants? That required research and judgment calls that no amount of automation could replace.

The project also reinforced something I already believed: simple tools that solve a specific problem well are more valuable than feature-packed platforms that try to do everything.
