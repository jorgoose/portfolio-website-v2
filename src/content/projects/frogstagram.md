---
title: Frogstagram
publishDate: 2024-10-05 00:00:00
img: /assets/projects/frogstagram_feed_page.webp
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

#### [View on GitHub](https://github.com/jorgoose/frogstagram-live)

What if Instagram only allowed frog photos? That was the ridiculous question that sparked this project.

Frogstagram is exactly what it sounds like: a social photo-sharing platform where the only content allowed is pictures of frogs. Try to upload a selfie? Rejected. A sunset? Nope. Your cat? Not unless it's a very frog-shaped cat. The twist is that I'm not manually reviewing every upload - a computer vision model handles that automatically.

## The Idea

I wanted an excuse to deploy a machine learning model in a real production environment, but I didn't want to build yet another generic image classifier demo. So I thought: what's the most absurdly specific use case I could come up with? Frog detection it was.

The concept is simple but it touches a lot of interesting technical challenges: user authentication, image storage, running ML inference at scale, and building a responsive frontend that doesn't feel like a tech demo.

## How It Works

When you upload a photo, it doesn't just go straight to the feed. First, it gets sent to an AWS Lambda function running a YOLOv11 object detection model (packaged in a Docker container via Amazon ECR). The model analyzes the image and decides: frog or not frog?

If it detects a frog, congratulations - your photo gets stored in S3 and shows up in everyone's feed. If not, you get a rejection message. It's a harsh world out there for non-frog content.

## The Tech Stack

The frontend is built with SvelteKit and Tailwind CSS, which made it easy to create something that actually looks and feels like a modern social app. The backend runs on FastAPI deployed to AWS Lambda, so it scales automatically and I'm not paying for idle servers.

For authentication, I used AWS Cognito so users can create accounts and have their own profiles. All the images live in S3, which handles the storage and delivery.

<style>
@media (max-width: 768px) {
  .screenshot-table td {
    display: block;
    width: 100%;
    padding: 20px;
  }

  .screenshot-table {
    width: 90%;
    margin: 0 auto;
  }

  .screenshot-table img {
    width: 100%;
    max-width: 450px;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
}

.screenshot-container {
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 2rem auto;
}

.screenshot-table img {
  width: 450px;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
</style>

<div class="screenshot-container">
<!-- Row spacing -->
  <table class="screenshot-table" cellspacing="20">
    <tr>
      <td align="center">
        <img src="/assets/projects/frogstagram_feed_page.webp" alt="Frogstagram feed interface">
        <font size="2"><em>Frogstagram feed page</em></font>
      </td>
    </tr>
    <tr>
      <td align="center">
        <img src="/assets/projects/frogstagram_upload_page.webp" alt="Frogstagram upload interface">
        <font size="2"><em>Upload interface with ML-powered verification</em></font>
      </td>
    </tr>
  </table>
</div>

<br/>

#### [Live Demo](https://frogstagram.vercel.app)

> Note: The legacy version of this project, which used vanilla JavaScript for the frontend and FastAPI with SQLAlchemy for the backend, and TensorFlow for inference, can be found at [Frogstagram Legacy](https://github.com/jorgoose/frogstagram). The current production version is at [Frogstagram Live](https://github.com/jorgoose/frogstagram-live).
