---
title: FuzzGuard
publishDate: 2024-08-06 00:00:00
img: /assets/projects/fuzzguard.webp
img_alt: Abstract representation of code being fuzz tested with digital patterns
description: |
  FuzzGuard is a Software-as-a-Service (SaaS) application designed to enhance code security through dynamic fuzz testing techniques, leveraging Large Language Models (LLMs) for automated test generation and execution.
tags:
  - Python
  - OpenAI API
  - Supabase
  - GitHub
  - Software Security
---

#### [Visit DevPost](https://devpost.com/software/fuzzguard)

---

## The Idea

With everyone using LLMs to write code faster than ever, I started thinking about the flip side: we're probably also introducing vulnerabilities faster than ever. My team and I wanted to tackle this for a hackathon, and we landed on fuzz testing as our approach. There's something satisfying about throwing random, unexpected inputs at code and watching it break in ways you never anticipated.

## What We Built

FuzzGuard connects to your GitHub repository, scans through your Python code to find functions worth testing, and then uses an LLM to generate fuzz tests automatically. The idea is that you shouldn't need to be a security expert to catch edge cases in your code.

We built it as a web app where you can link your repo, kick off the analysis, and see the results all in one place. Google's Atheris library handles the actual fuzzing, while Supabase stores everything on the backend.

## How It Works

The pipeline goes something like this: we parse your code's AST to figure out what functions exist and what inputs they expect. Then we feed that context to an LLM along with some examples of good fuzz tests. The LLM generates test cases, we run them, collect coverage data, and loop back to generate better tests based on what we learn.

It's a pretty classic feedback loop, but getting the LLM to produce tests that actually compile and run reliably took more iteration than I expected.

## The Hard Parts

Getting LLMs to generate valid, runnable fuzz tests was trickier than we thought going in. They'd often produce code that looked right but had subtle issues that broke execution. We spent a lot of hackathon hours on prompt engineering and validation logic.

The GitHub integration also had its moments. OAuth flows, API rate limits, handling private repos - all the stuff that seems simple until you're debugging it at 2am.

## What I Took Away

This project taught me a lot about the gap between "AI can write code" and "AI can write *reliable* code for a specific purpose." You need good context, good examples, and good error handling to make it work in practice.

I also got much more comfortable with fuzz testing as a technique. It's one of those things I'd read about but never really used before this project.

## What's Next

We'd love to expand this beyond Python - the same approach should work for other languages with the right fuzzing libraries. And integrating directly into GitHub Actions so tests run automatically on every push would make it much more practical for day-to-day use.

#### [Visit DevPost](https://devpost.com/software/fuzzguard)
