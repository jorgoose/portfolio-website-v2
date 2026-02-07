---
title: Costco CLI
publishDate: 2025-01-01 00:00:00
img: /assets/projects/costco-cli.webp
img_alt: Terminal interface showing the Costco CLI shopping assistant
description: |
  An AI-powered terminal shopping assistant that lets you browse and purchase items from Costco.com using natural language commands in your command line.
tags:
  - Python
  - Claude API
  - Model Context Protocol
  - Playwright
  - Typer
---

#### [View on GitHub](https://github.com/jorgoose/costco-cli)

---

## The Idea

I wanted to see how far I could push the Model Context Protocol for browser automation. Costco seemed like the perfect test case: a site with complex interactions, dynamic content, and real stakes if something goes wrong.

The goal was simple: shop for groceries without leaving the terminal. Search for products, add them to a cart, and check out, all through natural language.

---

## How It Works

You type what you want in plain English. The CLI interprets your intent, controls a headless browser, and reports back with results.

**Searching** - Type something like "find kirkland olive oil" and the tool scrapes Costco's search results, extracting prices, descriptions, and product details.

**Cart management** - Reference items by number from your search results. "Add 1 to cart" grabs the first result. You can view your cart at any time with estimated totals.

**Checkout** - The tool can navigate to checkout, but there's a hard stop before any purchase. Human confirmation is mandatory. This wasn't a feature I wanted to get wrong.

---

## The Stack

Claude Haiku handles the natural language understanding. It's cheap enough (about a penny per shopping session) that using it for casual browsing makes sense.

The Model Context Protocol connects Claude to Playwright, which controls the browser. MCP is interesting because it standardizes how AI models interact with external tools. Instead of writing custom integrations, you define capabilities once and any compatible model can use them.

Playwright runs Chromium headlessly in the background. No browser windows pop up. The CLI stays in control.

---

## Why This Matters

This project was partly a joke and partly a proof of concept. But the underlying pattern, using MCP to give language models access to browser automation, has real applications beyond shopping for bulk paper towels.

The same approach could work for any site without an API. Data extraction, form filling, testing. The model figures out the "how" while you specify the "what."

