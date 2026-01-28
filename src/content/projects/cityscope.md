---
title: CityScope
publishDate: 2013-12-01 00:00:00
img: /assets/projects/CityScope.webp
img_alt: A bright pink sheet of paper used to wrap flowers curves in front of rich blue background
description: |
  A full-stack web application developed during the Capital One TEIP hackathon that allows users to identify the best city to live in based on their preferences and career goals.
tags:
  - Python
  - Flask
  - PyTorch
  - React
  - Git
---

## The Idea

The Capital One TEIP hackathon gave us 24 hours to build something. Our team started talking about how choosing where to live after graduation felt weirdly overwhelming. There's cost of living, job markets, weather, things to do—and everyone weighs these differently. We figured we could build something that actually personalizes that decision instead of just showing generic city rankings.

The concept was simple: let users tell us what matters to them, then show them which cities actually fit their priorities. Not everyone cares about nightlife. Some people need to be near family. Others just want the lowest rent possible. CityScope was supposed to handle all of that.

---

## How It Works

Users fill out a quick survey about their preferences—things like career field, budget, climate preferences, and lifestyle priorities. The backend takes those inputs and runs them through a weighted scoring model we trained on city data we scraped and aggregated from various sources.

The machine learning piece was ambitious for a hackathon. We used PyTorch to build a model that learned relationships between user preferences and city characteristics. It wasn't perfect, but it was better than just doing a simple weighted average.

On the frontend, React handled the survey flow and displayed results as a ranked list of cities with explanations for why each one scored the way it did. Flask served as the API layer connecting everything together.

---

## The Hackathon Experience

Building a full-stack app with ML in 24 hours is chaotic. We split the work—some people scraped and cleaned city data, others built the frontend, and I focused on the Flask API and helping integrate the PyTorch model.

The hardest part was getting enough quality data. City statistics come from different sources with different formats, and normalizing everything took longer than expected. We ended up with fewer data points than we wanted, but enough to make the demo work.

Sleep was minimal. Coffee was plentiful. The final presentation came together about 20 minutes before we had to present.

---

## What I Learned

This was my first real experience building something end-to-end under time pressure with a team. I learned that scope creep is real even in a 24-hour window—we kept wanting to add features and had to keep reminding ourselves to finish the core functionality first.

Working with PyTorch in a hackathon context also taught me that ML projects need way more data prep time than you'd expect. The actual model training was quick. Getting the data into a usable state took hours.

Looking back, CityScope was rough around the edges, but it worked. And it convinced me that hackathons are one of the best ways to learn—you ship something real, even if it's messy.
