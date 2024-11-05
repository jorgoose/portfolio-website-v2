---
title: everynetnet.com 🚀
publishDate: 2024-10-06 00:00:00
img: /assets/projects/everynetnetlogo.jpg
img_alt: Iridescent ripples of a bright blue and pink liquid
description: |
  EveryNetNet.com is a platform designed to provide a comprehensive database of net-net companies (companies trading below their net current asset value). The platform is designed to help investors and investment-related firms access or filter data about net-net companies in a simple and intuitive manner, to allow them to make more informed investment decisions.
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

## Introduction
What started as a personal tool to automate my own investment research evolved into a full-featured platform serving hundreds of users. As a value investor following Benjamin Graham's (Warren Buffett's mentor) principles, I found myself manually searching through financial statements to find net-net stocks (companies trading below their net current asset value). After building a tool to automate this process for myself, I recognized the broader market need and developed it into a comprehensive platform.

<br />

---

<br />

## Technical Development

#### Frontend Evolution
The platform launched with React.js as a single-page application, using React Router and Tailwind CSS for responsive design. After several months of user growth, I migrated to Next.js to address SEO challenges and enhance page load performance through server-side rendering. This migration improved search engine crawlability while maintaining styling consistency through Tailwind CSS.

#### Backend Infrastructure
The initial version ran on Node.js with Google Cloud Functions, handling daily data aggregation tasks. As the dataset grew, I rewrote the system in Go and deployed it to Google Cloud Run, allowing us to bundle browser binaries directly with the code. This migration, scheduled through Google Cloud Scheduler, reduced processing times by 66% and significantly decreased cloud costs.

#### Data Collection System
Built a multi-source data aggregation system combining:
- Puppeteer web scraping capabilities
- Direct API integrations, including SEC EDGAR API for US-listed companies
- Automated ETL processes for daily market data updates
- Comprehensive validation logic for financial calculations

#### Payment Integration
- Implemented Stripe API for subscription management
- Built secure payment flow with webhook handling

<br />

---

<br />

## Growth & Impact
- Grew to 700+ unique users through organic growth and direct marketing
- Achieved 40% month-over-month user growth through targeted email campaigns
- Maintained over 90% gross margins through efficient infrastructure design
- Automated financial calculations that previously took hours of manual work
- Processed thousands of financial records daily through automated collection

## Key Technical Achievements
- Successfully migrated from React to Next.js for improved SEO
- Reduced data processing time by 66% through Go migration
- Built scalable infrastructure handling hundreds of concurrent users
- Designed cost-efficient serverless architecture that scaled with user growth
- Implemented automated data collection from multiple authoritative sources