---
title: ThailandDev
publishDate: 2025-12-01 00:00:00
img: /assets/projects/thailand-dev.webp
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

I noticed that developers who wanted to move to Thailand lacked a platform specific to their needs. The existing job boards didn't filter for what actually mattered: English-speaking roles at companies willing to handle visa sponsorship.

---

## The Solution

Thailand Dev aggregates tech jobs from companies known to hire international developers and sponsor visas. Instead of checking twenty career pages every week, you check one site or subscribe to a Monday morning email with the latest postings.

The core insight was that the scraping problem had changed. Traditional scrapers break constantly because every company structures their career page differently. But with modern LLMs, I could build a scraper that reads pages the way a human does—understanding context rather than relying on brittle CSS selectors.

---

## How It Works

The scraper uses Playwright to load career pages and Google's Gemini AI to extract job data. The AI reads the page like a human would, pulling out titles, descriptions, and application links regardless of the site's structure.

This handles all the annoying edge cases—infinite scroll, pagination, weird layouts—without writing custom code for each company. For Workday-powered sites (there are a lot of them), I built a faster specialized scraper since their structure is predictable.

Jobs go into Supabase. If a listing disappears for two scrape cycles, it gets marked inactive instead of deleted.

---

## The Website

Simple filtering by company, location, or keywords. Each company has a profile page with their openings. Job pages have the full description and a direct apply link—no account needed.

There's also a weekly email digest every Monday with new jobs from the past week for people who'd rather not check the site constantly.

---

## Tech Stack

Python scraper with Playwright and FastAPI, running on a schedule. Supabase for the database. Next.js frontend deployed on Vercel with ISR to keep pages fast while showing new jobs quickly.

---

## What I Learned

Building an AI-powered scraper taught me that LLMs are genuinely good at unstructured data extraction—better than I expected. The Gemini API handles messy HTML gracefully, and the cost per job extraction is negligible.

The harder problem was curation. Which companies actually sponsor visas? Which roles are realistic for foreign applicants? That required research and judgment calls that no amount of automation could replace.

The project also reinforced something I already believed: simple tools that solve a specific problem well are more valuable than feature-packed platforms that try to do everything.
