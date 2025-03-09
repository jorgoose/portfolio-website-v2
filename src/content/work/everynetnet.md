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

## The Story Behind EveryNetNet

I've always been fascinated by Benjamin Graham's investment philosophy. As Warren Buffett's mentor, Graham pioneered the concept of "net-net" investing – finding companies trading below their liquidation value. It's an approach that resonated deeply with me, but the process of manually sifting through financial statements was incredibly time-consuming.

After one particularly frustrating weekend spent buried in spreadsheets, I had a moment of clarity: "Why am I doing this by hand when I could build something to do it for me?" What began as a simple script to automate my own research soon evolved into something much bigger than I anticipated.

Friends who knew about my investment strategy started asking if they could use my tool. That's when I realized there was a genuine need for this in the market. EveryNetNet wasn't planned as a business initially – it was born from my own frustration and desire to work smarter rather than harder.

<br />

---

<br />

## From Personal Tool to Platform

The transformation from a personal project to a platform serving hundreds of users was both exciting and challenging. Every feature I added came from conversations with early users who, like me, were spending countless hours manually searching for these investment opportunities.

What drives me is knowing that EveryNetNet gives individual investors access to the same quality of financial data that was previously only available to large firms with significant resources. There's something deeply satisfying about democratizing access to investment tools and watching a community grow around it.

I still remember the day we crossed 100 users. It wasn't just a number – it was validation that this solution was making a real difference for people. Now with over 700 users, I'm constantly amazed by how a personal pain point turned into something that helps so many others.

<br />

---

<br />

## Under the Hood: Technical Journey

### Frontend Evolution
When I first built EveryNetNet, I was laser-focused on functionality rather than marketing. React.js gave me the flexibility to quickly iterate on features, but as our user base grew, I noticed that search engines weren't picking up our content effectively.

The migration to Next.js wasn't just a technical decision – it represented a shift in thinking about the platform's future. I vividly remember deploying the new version late one night and anxiously watching the analytics the next morning. Seeing page load times drop by almost half was one of those genuinely satisfying moments as a developer.

### Backend Transformation
Our initial Node.js setup worked well for the first few months, but as our dataset grew, I started noticing concerning patterns in processing times and costs. The decision to rewrite in Go came after a particularly painful month-end bill from Google Cloud.

Learning Go while reimplementing a production system was intimidating, but the results were worth it. The first time I ran the new system and watched it process the same workload in a third of the time, I couldn't help but smile. Sometimes the best engineering decisions come from budget constraints rather than technical ambition!

### Data Collection Challenges
Building a reliable data collection system was like solving a constantly shifting puzzle. Financial data isn't standardized across different sources, and companies report information in frustratingly inconsistent ways.

I spent countless late nights debugging edge cases where our calculations seemed off, only to discover quirks in how certain companies reported their financials. Each solved edge case made the platform more robust and trustworthy. The validation logic evolved from simple rules to a complex system that accounts for hundreds of reporting variations.

<br />

---

<br />

## Growth That Keeps Me Going

What started as a weekend project now processes thousands of financial records daily. The platform maintains over 90% gross margins – not because I was focused on profitability from day one, but because I built it to be efficient and scalable out of necessity.

The 40% month-over-month growth wasn't the result of some brilliant marketing strategy. It came from listening closely to users and continuously refining the platform to meet their needs more effectively. Every feature request email is still a highlight of my day – it means people are actually using and caring about something I built.

## Technical Details (For the Nerds)

- **React to Next.js Migration**: Implemented incremental static regeneration for data-heavy pages while maintaining a hydration strategy that preserved interactive elements. This reduced initial page load times from 2.8s to 1.2s while improving SEO ranking by 37%.

- **Go Implementation**: Rewrote our Node.js data processing pipeline in Go, using goroutines to parallelize financial calculations. Embedded Chromium instances are now managed through a pool pattern, allowing for efficient reuse during scraping operations.

- **Infrastructure Design**: Built a cost-efficient serverless architecture using Google Cloud Run containers for processing and Cloud Functions for API endpoints. This approach allows us to scale to zero when inactive, significantly reducing operational costs.

- **Data Pipeline**: Created a multi-stage ETL process that validates financial data against multiple sources before performing normalization and storing calculated metrics. The system now handles over 15,000 financial documents daily with 99.7% accuracy.

- **Payment System**: Implemented Stripe's webhook system with idempotency keys and transaction verification to ensure billing reliability even during service interruptions.