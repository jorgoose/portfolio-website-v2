---
title: Stock Performance vs. Annual Report Complexity
publishDate: 2014-12-01 00:00:00
img: /assets/projects/pricechart.jpeg
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

## The Hypothesis

I was reading an annual report for a company I was researching and found myself re-reading the same paragraph three times. Not because it was dense with information, but because it was written in a way that seemed deliberately confusing.

That got me thinking: what if companies with something to hide write more complex reports? And if that's true, would their stock performance reflect it?

The idea isn't original. Warren Buffett has said that when a CEO uses lots of jargon, they're often trying to hide something. Academic research has explored similar territory. But I wanted to test it myself with actual data.

---

## The Approach

### Getting The Data

The SEC's EDGAR database has every public company's annual report (10-K filings) going back decades. I wrote a Python script to pull reports for S&P 500 companies over a five-year period.

Parsing these reports was messier than expected. They're filed in various formats, some with embedded HTML, others as plain text. A lot of the code ended up being cleanup logic.

### Measuring Complexity

I used several readability metrics:

- **Flesch-Kincaid Grade Level** - estimates the years of education needed to understand the text
- **Gunning Fog Index** - similar concept, weights complex words more heavily
- **Average sentence length and syllables per word** - simpler proxies

I also counted passive voice usage and the frequency of certain hedge words ("may," "could," "potentially") that tend to appear when companies are being evasive.

### Measuring Performance

For stock performance, I looked at returns over the year following each report's publication. I also compared against sector benchmarks to control for broader market movements.

---

## What I Found

The correlation was weak but present. Companies with more complex reports underperformed their sector benchmarks by a small margin on average. The relationship was stronger in certain sectors (financials, biotech) where there's more room to obscure things in technical language.

The most interesting finding wasn't the overall correlation but the outliers. Companies that suddenly increased their report complexity from one year to the next often had rough years ahead. A jump in Fog Index seemed to precede bad news more often than random chance would suggest.

---

## Limitations

This was an exploratory analysis, not rigorous academic research. The sample size was decent but not huge. I didn't control for all the variables a proper study would. Correlation doesn't imply causation, and there are plenty of reasons a company might write complex reports that have nothing to do with hiding problems.

Also, by the time you read an annual report, a lot of information is already priced into the stock. Markets are fairly efficient, especially for large-cap companies.

---

## What I Took Away

The project reinforced something I still believe: how someone communicates tells you a lot about what they're actually saying. Clear writing usually comes from clear thinking. Obfuscation is often intentional.

It also taught me a lot about working with messy real-world data. Financial documents don't come in nice clean formats. You spend more time cleaning and parsing than doing the actual analysis.

I still check readability scores on reports when I'm researching companies. It's not a trading signal, but it's a useful filter for "do I trust these people?"
