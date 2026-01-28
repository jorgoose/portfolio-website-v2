---
title: InsuriQuest
publishDate: 2023-09-20 00:00:00
img: /assets/projects/insuriquest.webp
img_alt: InsuriQuest
description: |
  A hackathon project that turned insurance education into choose-your-own-adventure stories. Won "Best Insurance Hack" at HackUIowa 2023.
tags:
  - NextJS
  - TailwindCSS
  - OpenAI API
emoji: 🏆
---

#### [View on GitHub](https://github.com/jorgoose/insuriquest)

---

## The Idea

Hackathons always push you to think differently about boring problems. And honestly, few things are as boring as learning about insurance.

We've all been there - trying to understand deductibles, premiums, coverage limits - and giving up halfway through some corporate PDF. So our team asked ourselves: what if we made it feel like a game instead?

That's how InsuriQuest was born. The pitch was simple - turn insurance concepts into interactive choose-your-own-adventure stories. You make decisions as a character, face consequences, and actually learn something along the way without feeling like you're studying.

## How It Works

The core mechanic is dynamic story generation. When you start a scenario, the app uses the OpenAI API to create a narrative based on your choices. Every decision branches into new possibilities, building out a decision tree as you play.

So you might be a first-time homeowner dealing with a flood, or a college student figuring out health insurance options. Each choice teaches you something about how insurance actually works in that situation.

The stories aren't pre-written - they generate in real-time based on your path. That meant no two playthroughs are exactly alike, which kept people engaged during our demo.

## The Build

We had 24 hours to pull this together. Went with NextJS and TypeScript for the frontend since it's what we knew best, styled everything with Tailwind CSS to move fast. Deployed on Vercel so we could push updates without thinking about infrastructure.

The tricky part was getting the AI to generate stories that were both entertaining and actually educational. Took a lot of prompt engineering to hit that balance.

## The Win

We ended up taking home "Best Insurance Hack" at HackUIowa. Pretty surreal moment when they called our name - we genuinely built something we thought was fun, and it was cool to see the judges agree.

Looking back, the project taught me a lot about making complex topics accessible. Sometimes the answer isn't simplifying the content - it's changing the format entirely.
