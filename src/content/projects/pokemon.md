---
title: Pokemon Image Classifier
publishDate: 2016-12-01 00:00:00
img: /assets/projects/pkmn.jpeg
img_alt: A bright pink sheet of paper used to wrap flowers curves in front of rich blue background
description: |
  Training an image classificaiton model to identify images of Pokémon
tags:
  - TensorFlow
  - Keras
  - Python
---

#### [View on GitHub](https://github.com/jorgoose/pokemon-classification)

---

### Why Pokemon?

Back in 2016, I was getting into machine learning and wanted a project that would actually be fun to work on. I grew up playing Pokemon, so when I needed a dataset for image classification, the choice was obvious. Why train a model on boring stock photos when you could teach a computer to tell Pikachu from Charizard?

### How It Works

I scraped together images of different Pokemon and fed them into a convolutional neural network. The model learns to pick up on visual patterns - Pikachu's pointy ears, Bulbasaur's spots, that kind of thing. After training, you can throw a new Pokemon image at it and it'll tell you what it's looking at.

The fun part was watching the model improve. Early on it was basically guessing, but after enough training it hit 95% accuracy on images it had never seen before. Pretty satisfying to see a computer correctly identify a Pokemon from a random screenshot.

### What I Used

- **TensorFlow and Keras** - These made building the neural network way more approachable than writing everything from scratch. Keras especially is great for prototyping quickly.

- **Python** - The go-to language for ML projects. All the libraries you need are already there.
