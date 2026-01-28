---
title: Hachiquant
publishDate: 2025-03-09 00:00:00
img: /assets/projects/hachiquant-logo.webp
img_alt: Silhouette of the loyal Akita dog Hachiquant
description: |
  Hachiquant is a modern, developer-friendly platform that makes financial data for Japanese companies accessible and consistent. It transforms the complex, scattered financial disclosures from Japan's Financial Services Agency into clean, structured data through a streamlined ETL process and API.
tags:
  - Rust
  - Axum
  - SvelteKit
  - SQLite
emoji: 🚀
---

#### [Visit Hachiquant](#) *(Coming Soon)*

<br />

---

## The Problem Hachiquant Solves

Accessing financial statement data for Japanese companies is, frankly, a mess. The Financial Services Agency (FSA) of Japan—the government's integrated financial regulator—does provide this data, but in formats that reflect the archaic and scattered technology environment you find across many long-lasting businesses in Japan. Here's what you're up against:

- Japanese PDFs with no English translation
- A barebones API with only two main endpoints, neither of which easily provide data at the company level
- ZIP files filled with UTF-16 TSVs and XBRL/XML documents instead of structured JSON
- Scattered documentation across multiple PDFs with limited English support

After banging my head against these problems in previous projects one too many times, I decided enough was enough. I wanted to build something that would make this valuable data accessible to everyone. Just as the loyal Akita dog Hachiquant faithfully waited at Shibuya Station for nearly 10 years, my goal is to make access to Japanese financial data equally consistent and reliable.

<br />

---

<br />

## The Vision For Hachiquant

Hachiquant is meant to be a modern, developer-friendly platform built on top of the official FSA data sources. Instead of wading through scattered files and inconsistent formats, Hachiquant transforms everything into a consolidated, centralized API with a clean JSON schema. The idea is simple:

- Search by company name or ticker
- Get clean, structured financial statements
- Query data through a modern REST API

No more parsing ZIP files, decoding UTF-16 TSVs, or wrestling with complex XBRL documents. That's hours of frustration I want to save for anyone else who needs this data—whether you're an investor, analyst, researcher, or just curious about Japanese markets.

<br />

---

<br />

## Technical Implementation

### Current Progress: Data Extraction Layer

The first phase is done, and I'm pretty proud of how it turned out. Built in Rust with SQLite, this foundation:

- Pulls raw disclosures from EDINET's API (the FSA's electronic disclosure system)
- Processes raw bytes of ZIPs from the API and decodes both UTF-16 TSVs and XBRL/XML documents in-memory
- Normalizes the complex, inconsistent data formats into a clean, structured schema
- Stores the transformed data in an SQLite database ready for API consumption

The ETL (Extract, Transform, Load) process works like this:

1. **Extract**: Fetch the raw bytes of .zip files from EDINET's API
2. **Transform**: Process and decode both TSV and XBRL data into structured models that can be mapped relationally
3. **Load**: Insert the cleaned data into a two-table SQLite database

One thing I love about using Rust here is that the entire process runs in-memory with impressive speed and memory efficiency. It makes the system not only functional but genuinely scalable too.

### In-Progress: API And UI Layers

I'm currently working on the next pieces:

- **API Layer**: Being built with Rust and Axum to give developers a clean, modern interface
- **UI Layer**: Under development with SvelteKit to create an intuitive front-end experience

<br />

---

<br />

## Technical Details

- **Rust Implementation**: The core data processing takes full advantage of Rust's safety guarantees and performance. The system handles complex file formats (ZIP, UTF-16 TSV, XBRL/XML) entirely in-memory for maximum efficiency.

- **Data Processing**: The extraction process handles all the quirks of Japan's FSA data sources—managing UTF-16 character encoding, inconsistent TSV formats, and complex nested XBRL structures—and transforms them into a standardized JSON format that developers actually want to work with.

- **Database Design**: The SQLite implementation uses a schema that balances normalization with query performance, allowing for efficient retrieval of financial data across multiple reporting periods. I've put thought into indexing strategies to optimize the common queries the API layer will need.

- **API Architecture**: The in-progress Axum-based API follows RESTful principles with appropriate caching strategies and comprehensive documentation. My goal is to make integration as friction-free as possible for developers.

<br />

---

<br />

## Roadmap

Here's where Hachiquant is headed:

- **Phase 1**: Build data extraction layer (Complete)
- **Phase 2**: Develop API layer with Rust and Axum (In Progress)
- **Phase 3**: Create web interface with SvelteKit (In Progress)
- **Phase 4**: Implement embeddings & LLM for natural language queries
- **Phase 5**: Add historical data analysis and visualization tools, plus valuation multiples and ratios

The dream is a platform where users can search for financial data without needing exact ticker symbols or document structures—making Japanese financial data accessible to everyone from individual investors to large institutions.
