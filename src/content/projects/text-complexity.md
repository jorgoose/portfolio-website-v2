---
title: Stock Performance vs. Annual Report Complexity
publishDate: 2014-12-01 00:00:00
img: /assets/projects/pricechart.webp
img_alt: A bright pink sheet of paper used to wrap flowers curves in front of rich blue background
description: |
  Using statistical analysis to determine if there is a correlation between the text complexity of a company's annual report and the performance of its stock.
tags:
  - Python
  - Pandas
  - NumPy
  - Matplotlib
  - SEC EDGAR API
---

## The hypothesis

I was reading an annual report for a company I was looking into and had to re-read the same paragraph three times. Not because it was information-dense, but because it felt like it was written to be confusing on purpose.

That made me wonder: do companies with something to hide write harder-to-read reports? And if so, does their stock price eventually reflect it?

The idea isn't new. Buffett has said that when a CEO loads up on jargon, they're usually trying to obscure something. There's academic work on this too. I just wanted to see for myself with real data.

---

## The approach

### Getting the data

The SEC's EDGAR database has every public company's 10-K filing going back decades. I wrote a Python script to pull reports for S&P 500 companies over five years.

Parsing them was worse than I expected. Some filings are embedded HTML, others are plain text, some are a mix. Most of the code ended up being cleanup.

### Measuring complexity

I used a few readability metrics:

- Flesch-Kincaid Grade Level, which estimates years of education needed to understand the text
- Gunning Fog Index, which weights complex words more heavily
- Average sentence length and syllables per word as simpler proxies

I also tracked passive voice and hedge words ("may," "could," "potentially") since those tend to show up when companies are being evasive.

### Measuring performance

For stock performance I looked at returns over the year after each report was published, compared against sector benchmarks to control for broader market moves.

---

## What I found

The correlation was weak but there. Companies with more complex reports underperformed their sector benchmarks by a small margin on average. It was stronger in financials and biotech, where there's more room to hide things behind technical language.

The more interesting finding was in the outliers. Companies whose report complexity jumped significantly from one year to the next tended to have rough years ahead. A sudden spike in Fog Index seemed to precede bad news more often than chance would explain.

---

## Limitations

This was exploratory, not rigorous research. Decent sample size but not huge. I didn't control for everything a proper study would. There are plenty of reasons a company might write dense reports that have nothing to do with hiding problems.

Also, by the time you're reading a 10-K, most of that information is already priced in. Markets are pretty efficient for large-cap companies.

---

## What I took away

How someone communicates tells you a lot about what they're actually saying. Clear writing usually means clear thinking. When it's hard to parse, that's often on purpose.

The project also taught me a lot about working with messy real-world data. Financial documents don't come in clean formats. I spent way more time on parsing and cleanup than on the actual analysis.

I still check readability scores when I'm researching companies. It's not a trading signal, but it's a decent filter for "do I trust these people?"
