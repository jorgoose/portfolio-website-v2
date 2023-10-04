---
title: Frogstagram
publishDate: 2019-10-02 00:00:00
img: /assets/projects/frogstagram.jpg
img_alt: Soft pink and baby blue water ripples together in a subtle texture.
description: |
  Frogstagram is a frog-centric social media application inspired by Instagram. It allows users to create an account, upload photos, and follow other users. The platform incorporates an image classification model to ensure that only frog photos can be uploaded.
tags:
  - TensorFlow
  - Python
  - FastAPI
  - React
  - Tailwind CSS
---

Frogstagram is an exciting social media application that revolves around frogs. Inspired by Instagram, this platform allows users to create an account, share photos, and connect with other frog enthusiasts. The distinguishing feature of Frogstagram is its image classification model, which ensures that only frog photos can be uploaded to the platform.

When users upload a photo, the image classification model kicks in. If the photo is recognized as a frog, the user is redirected to the success page, and the photo is added to the database. The uploaded photo can then be viewed on the homepage, where other users can appreciate and interact with it. Likes on Frogstagram are called "ribbits," and comments are referred to as "croaks," giving the platform a fun and frog-themed twist.

However, if a photo fails to be recognized as a frog, the user is redirected to the failure page, and the photo is not uploaded to the database. This restriction ensures that Frogstagram remains a dedicated space for frog lovers to share their favorite amphibious images.

Frogstagram employs a tech stack that includes React for the frontend, TailwindCSS for styling, FastAPI for the backend, and TensorFlow for image classification. The backend relies on a SQLite database and employs SQLAlchemy as an Object-Relational Mapping (ORM) tool. By utilizing the power of TensorFlow and its pre-trained image classification model, Frogstagram ensures that the platform remains exclusively dedicated to frog-related content.

Overall, Frogstagram offers a unique and engaging social media experience for frog enthusiasts, allowing them to connect, share, and appreciate the captivating world of frogs while celebrating the beauty and diversity of these amazing creatures.

<!-- Link to GitHub Repository in a Button at the Bottom of the Page -->
<div class="flex justify-center">
  <a href="https://github.com/jorgoose/frogstagram" target="_blank" rel="noopener noreferrer" class="btn btn-primary">View on GitHub</a>
</div>
