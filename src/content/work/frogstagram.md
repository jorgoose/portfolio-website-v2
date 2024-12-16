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

When users upload a photo, it's sent to a Lambda function running the image classification model. The model determines if the image contains a frog - if it does, the image is stored in S3 and appears in feeds. If not, it's rejected. This process ensures the feed remains only frog photos.

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
  <table class="screenshot-table">
    <tr>
      <td align="center">
        <img src="/assets/projects/frogstagram_upload_page.jpg" alt="Frogstagram upload interface">
        <br>
        <font size="2"><em>Upload interface with ML-powered verification</em></font>
      </td>
    </tr>
  </table>
</div>

<br/>

**[Live Demo](https://frogstagram.vercel.app)**

[View on GitHub](https://github.com/jorgoose/frogstagram-live)
