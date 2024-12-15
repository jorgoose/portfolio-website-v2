---
title: Frogstagram
publishDate: 2024-10-05 00:00:00
img: /assets/projects/frogstagram_feed_page.jpg
img_alt: Frogstagram web application interface showing image feed
description: |
  An Instagram-inspired platform with a twist: it only allows frog photos. Uses AWS services and computer vision to automatically filter uploads, ensuring only frog images make it to the feed.
tags:
  - Python
  - FastAPI
  - AWS
  - SvelteKit
  - Tailwind CSS
  - Docker
---

Frogstagram is Instagram with one key difference: it only allows photos of frogs. Using a YOLOv11 computer vision model, the platform automatically filters uploads to maintain a strictly frog-focused feed. This creates a unique use case for deploying ML in production while serving a specific community.
Core Technical Features:
- Frontend built with SvelteKit and Tailwind CSS for responsive, modern UI
- Backend Service:
  - FastAPI running on AWS Lambda for efficient API handling
  - Computer vision using YOLOv11 model in Docker containers via Amazon ECR
  - Resulted in automated image filtering ensuring frog-only content
- Other AWS Infrastructure:
  - S3 for scalable image storage and delivery
  - Cognito handling user authentication

When users upload a photo, it's sent to a Lambda function running the image classification model. The model classificataiomn is used to determine if the image contains a frog - if it does, the image is stored in S3 and appears in feeds to other users. If not, it's rejected and the image is deleted. This process ensures the feed remains only frog photos.

<div class="flex justify-center">
  <a href="https://github.com/jorgoose/frogstagram-live" target="_blank" rel="noopener noreferrer" class="btn btn-primary">View on GitHub</a>
</div>
