---
title: ThailandDev
publishDate: 2024-12-01 00:00:00
img: /assets/projects/thailand-dev.png
img_alt: Thailand Dev job board platform interface showing tech job listings
description: |
  A complete job board platform for tech jobs in Thailand, featuring an AI-powered job scraper using Gemini 2.0, a modern Next.js web application, and an automated weekly email digest system.
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

## Overview

Thailand Dev is a comprehensive job board platform designed specifically for tech professionals seeking opportunities in Thailand. The platform combines cutting-edge AI technology with modern web development practices to create a seamless job discovery experience.

---

## Architecture

The project is structured as a monorepo with three core components:

### 1. AI-Powered Job Scraper

An intelligent scraper that automatically adapts to ANY career website structure using Google Gemini 2.0 Flash for data extraction.

**Key Features:**
- **Truly Dynamic**: Works with any career website without manual configuration
- **AI-Powered Extraction**: Uses Gemini Flash 2.0 to intelligently parse job data
- **Dual Scraper Support**: Universal AIScraper + optimized WorkdayScraper for Workday sites
- **Concurrent Processing**: Efficiently scrapes multiple jobs in parallel
- **Smart Deduplication**: Uses application URLs as unique keys to prevent duplicates

### 2. Next.js Web Application

A modern, responsive web application built with Next.js 15 and React 19.

**Features:**
- Job browser with advanced filtering
- Dedicated company profile pages
- Comprehensive job detail views
- Job alert subscription system
- Blog with career insights

### 3. Supabase Backend & Email System

Automated backend infrastructure with weekly email digests.

- **Edge Functions**: Serverless weekly digest emails via Resend
- **Cron Scheduling**: Automated Monday 9am UTC delivery
- **Database Migrations**: Version-controlled schema management

---

## Data Pipeline

```
┌─────────────────────────────────────────────────────────────────┐
│                     Data Flow Pipeline                          │
└─────────────────────────────────────────────────────────────────┘

1. SCRAPER → Visits career pages, AI extracts job data
       ↓
2. SUPABASE → Stores jobs, companies, subscribers
       ↓
3. WEB APP → Displays jobs with filters and search
       ↓
4. EMAIL DIGEST → Weekly notifications to subscribers
```

---

## Tech Stack

| Component | Technologies |
|-----------|-------------|
| **Web App** | Next.js 15, React 19, TypeScript, Tailwind CSS 4, shadcn/ui |
| **Scraper** | Python, Playwright, Google Gemini 2.0 Flash, FastAPI |
| **Backend** | Supabase (PostgreSQL), Edge Functions, Resend |
| **Infrastructure** | Vercel, Supabase Cloud |

---

## Key Technical Highlights

- **Zero-Maintenance Scraping**: AI automatically adapts to website changes
- **Real-time Database Sync**: Instant updates with duplicate prevention
- **Stale Job Management**: Automatically marks old listings as inactive
- **Scalable Architecture**: Add new companies by just adding URLs

---

## Project Vision

To create the most comprehensive and user-friendly job board for tech professionals in Thailand, powered by AI automation and modern web technologies.
