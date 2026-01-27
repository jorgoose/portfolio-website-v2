---
title: Hachiko
publishDate: 2025-03-09 00:00:00
img: /assets/projects/hachiko-logo.jpg
img_alt: Silhouette of the loyal Akita dog Hachiko
description: |
  Hachiko is a modern, developer-friendly platform that makes financial data for Japanese companies accessible and consistent. It transforms the complex, scattered financial disclosures from Japan's Financial Services Agency into clean, structured data through a streamlined ETL process and API.
tags:
  - Rust
  - Axum
  - SvelteKit
  - SQLite
emoji: 🚀
---

#### [Visit Hachiko](#) *(Coming Soon)*

<br />

---

## The Problem Hachiko Solves

Accessing financial statement data for Japanese companies can generally be a frustrating and inconvenient experience. The Financial Services Agency (FSA) of Japan—the government's integrated financial regulator—provides this data, but in formats that are difficult to work with. Investors and analysts face numerous obstacles:

- Japanese PDFs with no English translation
- A barebones API with only two main endpoints, neither of which easily provide data at the company level
- ZIP files filled with UTF-16 TSVs and XBRL/XML documents instead of structured JSON
- Scattered documentation across multiple PDFs with limited English support

After facing these challenges repeatedly in previous projects, I decided to create a solution that would make this valuable data accessible to everyone. Just as the loyal Akita dog Hachiko faithfully waited at Shibuya Station for nearly 10 years, my goal is to make access to Japanese financial data equally consistent and reliable.

<br />

---

<br />

## The Vision for Hachiko

Hachiko is designed to be a modern, developer-friendly platform built on top of the official FSA data sources. Instead of dealing with scattered files and inconsistent formats, Hachiko transforms these into a consolidated, centralized API with an accessible JSON schema. It streamlines the extraction, normalization, and storage of financial disclosures with a simple goal:

- Search by company name or ticker
- Get clean, structured financial statements
- Query data through a modern REST API

This eliminates the need to parse ZIP files, decode UTF-16 TSVs, or navigate complex XBRL documents—saving developers and analysts countless hours of frustration. This way, investors, analysts, researchers, and whomever else can focus on their core work instead of wrestling with creating a custom solution for interacting with the FSA's data in a way that is both efficient and effective.

<br />

---

<br />

## Technical Implementation

### Current Progress: Data Extraction Layer

The first phase of Hachiko has been completed using Rust and SQLite. This foundation of the project:

- Pulls raw disclosures from EDINET's API (the FSA's electronic disclosure system)
- Processes raw bytes of ZIPs from the API and decodes both UTF-16 TSVs and XBRL/XML documents in-memory
- Normalizes the complex, inconsistent data formats into a clean, structured schema
- Stores the transformed data in an SQLite database ready for API consumption

The ETL (Extract, Transform, Load) process works as follows:

1. **Extract**: Fetch the raw bytes of .zip files from EDINET's API
2. **Transform**: Process and decode both TSV and XBRL data into structured models that can be mapped in a relational way
3. **Load**: Insert the cleaned data into a two-table SQLite database

By leveraging Rust's performance characteristics, the entire process runs in-memory with exceptional speed and memory efficiency. This makes Hachiko not only functional but also highly scalable.

### In-Progress: API and UI Layers

The next phases of development are currently underway:

- **API Layer**: Being built with Rust and Axum to provide a clean, modern interface for developers
- **UI Layer**: Under development with SvelteKit to create an intuitive front-end experience

<br />

---

<br />

## Technical Details

- **Rust Implementation**: Core data processing leverages Rust's safety guarantees and performance optimizations. The system handles complex file formats (ZIP, UTF-16 TSV, XBRL/XML) in-memory for maximum efficiency.

- **Data Processing**: The extraction process intelligently handles the quirks of Japan's FSA data sources, managing UTF-16 character encoding, inconsistent TSV formats, and complex nested XBRL structures to transform them into a standardized JSON format that developers actually want to work with.

- **Database Design**: The SQLite implementation uses a carefully designed schema that balances normalization with query performance, allowing for efficient retrieval of financial data across multiple reporting periods. Indexing strategies are employed to optimize common queries that will be used by the API layer.

- **API Architecture**: The in-progress Axum-based API is being designed with RESTful principles, appropriate caching strategies, and comprehensive documentation to ensure developers can integrate with minimal friction.

<br />

---

<br />

## Roadmap

Hachiko is being built with a clear vision for the future:

- ✅ **Phase 1**: Build data extraction layer (Complete)
- 🚧 **Phase 2**: Develop API layer with Rust and Axum (In Progress)
- 🚧 **Phase 3**: Create web interface with SvelteKit (In Progress)
- 📅 **Phase 4**: Implement embeddings & LLM for natural language queries
- 📅 **Phase 5**: Add historical data analysis and visualization tools, and add valuation multiples and ratios

The ultimate goal is to create a platform where users can search for financial data without needing exact ticker symbols or document structures, making Japanese financial data accessible to everyone from individual investors to large financial institutions.