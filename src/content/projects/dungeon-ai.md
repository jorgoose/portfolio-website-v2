---
title: dungeon_ai
publishDate: 2019-12-01 00:00:00
img: /assets/projects/dungeon_ai.webp
img_alt: A bright pink sheet of paper used to wrap flowers curves in front of rich blue background
description: |
  A full-stack web application meant to remove the need for a traditional D&D Dungeon Master and increase accessibility to new players by allowing users to generate scenarios, monsters, and images for their game using a mix of AI technologies.
tags:
  - PyTorch
  - Python
  - FastAPI
  - MySQL
  - React
  - Tailwind CSS
  - SpringBoot
emoji: 🏆
---

#### [View on GitHub](https://github.com/jorgoose/dungeon_ai)

---

## Iowa State Computer Science Hackathon 2023

**Team:** Logan Jorgensen, Sam McGrath, David Szczepanik, Eli Brady

### The Problem We Wanted To Solve

Here's something I've always found frustrating about D&D: you need someone who really knows what they're doing to run the game. The Dungeon Master has to prep encounters, improvise storylines, manage NPCs, and somehow keep everything balanced and fun. It's a lot to ask, and it means a lot of people who'd love to try D&D never get the chance because they don't have an experienced DM in their friend group.

So our hackathon pitch was simple: what if AI could be the Dungeon Master?

### What We Built

dungeon_ai is a web app that lets you create characters, allocate skill points, and go on adventures without needing a human DM. You roll dice, encounter monsters, find treasure, and explore, all with the story being generated on the fly by AI.

Each campaign supports three characters. The AI handles everything a Dungeon Master normally would: generating the narrative, deciding what happens next based on your choices and dice rolls, even creating images of your characters and the scenes you encounter. We used OpenAI's API for the story generation and ran Stable Diffusion locally for the image generation.

The coolest part? No two playthroughs are the same. The AI comes up with different scenarios, different twists, different encounters every time. It actually felt like playing with a creative (if sometimes chaotic) DM.

### The Tech Stack

![Tech Stack Logos](/assets/projects/dungeon_ai_tech_stack.webp)

We went a bit ambitious with the stack for a hackathon: React with Tailwind CSS on the frontend, SpringBoot for the main backend, and a separate FastAPI service running PyTorch for the image generation. Was it overkill? Probably. Did it work? Somehow, yes.

### How It All Fits Together

We split the project into three main pieces:

1. **/frontend** - The React app that players actually interact with
2. **/backend** - SpringBoot handling game logic, data persistence, and orchestrating the AI calls
3. **/diffusion** - A FastAPI service dedicated to running Stable Diffusion

### The Frontend

![Image of "Game" View Page](/assets/projects/game_view.webp)
*The main game view where the magic happens*

I'm pretty happy with how the UI turned out, especially given the time constraints. We used React Router to handle navigation between the different screens:

- **Games view** - See all your saved campaigns and start new ones
- **Game view** - The main gameplay screen with your party info on the sidebar, the story unfolding in the center, and that satisfying dice roll button to trigger new encounters
- **Create view** - Build your party and describe your characters
- **Character view** - Deep dive into a specific character's stats, health, backstory, and AI-generated portrait

### The Backend

![Springboot Logo](https://miro.medium.com/max/700/1*-uckV8DOh3l0bCvqZ73zYg.webp)

The SpringBoot backend ended up being the brain of the operation. It handles:

- **Data persistence** with Hibernate and MySQL, so your campaigns, characters, and story history all get saved
- **Story generation** by building prompts with the current game state and sending them to OpenAI
- **Image prompt crafting** based on character descriptions and story events, which get sent to our Stable Diffusion service
- **RESTful APIs** to feed everything to the frontend

One thing I learned: prompt engineering is half the battle when you're trying to get consistent, sensible outputs from these models. We spent a lot of time tweaking the prompts to get stories that actually made sense.

### The Image Generation

This was honestly the part that felt most like magic. Watching Stable Diffusion generate portraits of the characters we described never got old.

|                Image of a Warrior Character                 |                      Image of Paladin Character                      |             Image of Another Paladin Character              |               Image of a Ghoul Character                |
| :---------------------------------------------------------: | :------------------------------------------------------------------: | :---------------------------------------------------------: | :-----------------------------------------------------: |
| ![Image of Warrior Character](/assets/projects/warrior.webp) | ![Image of Another Paladin Character](/assets/projects/paladin2.webp) | ![Image of Paladin Character](/assets/projects/paladin.webp) | ![Image of Ghoul Character](/assets/projects/ghoul.webp) |

The quality varied, and sometimes the AI would give a character three arms or forget what a sword looks like, but when it worked, it really sold the fantasy.

### Running It Yourself

If you want to try it out:

**Frontend:**
```
npm i
npm run dev
```

**Stable Diffusion service** (needs an Nvidia GPU with CUDA):
```
diffuzers api
```

### Looking Back

We won the hackathon with this project, which was awesome. But more than the trophy, I'm proud that we actually shipped something that worked end-to-end in a weekend. The AI-generated stories were hit or miss, the image generation was slow, and there were definitely bugs, but you could actually sit down and play through a campaign. For 36 hours of frantic coding, I'll take it.
