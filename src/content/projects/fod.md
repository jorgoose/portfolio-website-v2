---
title: föd
publishDate: 2018-12-01 00:00:00
img: /assets/projects/fod.jpeg
img_alt: A bright pink sheet of paper used to wrap flowers curves in front of rich blue background
description: |
  An Android app that allows users to better manage their nutrition and caloric intake, while also providing a platform for users to share their recipes and meal ideas.
tags:
  - Java
  - SpringBoot
  - Android Studio
  - MySQL
  - Git
emoji: 🎓
---

This was my first real full-stack project - a group assignment where we had to build something with a mobile frontend and a proper backend. We chose to make a nutrition tracking app because everyone on the team had tried MyFitnessPal at some point and had opinions about what could be better.

## Why We Built This

The idea was simple: what if calorie tracking was less tedious? Most apps make you search through massive databases or scan barcodes. We wanted users to be able to share their own recipes with nutritional info already calculated, so others could just add the whole meal with one tap.

The social recipe-sharing angle came from noticing that the hardest part of tracking nutrition is logging homemade food. Nobody wants to enter individual ingredients for their mom's lasagna recipe every time they eat it.

## How It Worked

The app had two main pieces:

**Android Frontend** - Built in Android Studio with Java. Users could log their meals, browse shared recipes, and track their daily caloric intake against their goals. The UI was nothing special, but it worked.

**Spring Boot Backend** - This handled user authentication, recipe storage, and the nutrition calculations. We used MySQL to store everything - user accounts, recipes, meal logs, and nutritional data.

When someone created a recipe, they'd enter the ingredients and quantities, and the backend would calculate the macros based on a nutritional database we imported. Other users could then add that recipe to their own meal logs without doing any of the math themselves.

## What I Actually Learned

This project taught me more about working on a team than about any specific technology. Coordinating between the Android frontend and the REST API meant we had to actually communicate about data formats and endpoints. When something broke, we had to figure out whose code was the problem.

On the technical side, this was my first time working with Spring Boot and building a real API. Understanding how the Android app made HTTP requests to our backend, and how the backend talked to the database - that whole flow clicked for me during this project.

It was also my first experience with the pain of keeping a local MySQL database in sync across team members. We learned quickly why version control for database schemas matters.

The app itself was never going to compete with established nutrition trackers, but that wasn't the point. Building something end-to-end, from mobile UI to database queries, gave me a mental model for how real applications work that I've used ever since.
