---
title: "Dynamic Routes"
slug: "dynamic-routes"
date: "2025-01-07"
lastModified: "2025-01-17"
description: "How to handle dynamic routes with Next.js SSG."

metaTitle: "Dynamic Routes – Next.js SSG"
metaDescription: "Learn to generate dynamic pages at build time using Next.js static site generation."
keywords:
  - nextjs
  - ssg
  - dynamic routes
  - markdown
  - frontend

author:
  name: "John Doe"
  avatar: "/images/authors/author.jpg"
  url: "https://example.com"
  role: "Full-Stack Developer"

category: "Documentation"
categories:
  - Next.js
  - Frontend
tags:
  - SSG
  - Dynamic
  - Static Content

status: "published"
featured: true
featuredImage: "/images/posts/dynamic-routes/thumbnail.jpg"
readingTime: 6

order: 7
sidebarTitle: "Dynamic Routes"
toc: true

ogImage: "/images/posts/dynamic-routes/og.png"
twitterCard: "summary_large_image"

language: "en"
translations:
  uk: "/uk/docs/dynamic-routes"
  ru: "/ru/docs/dynamic-routes"

layout: "docs"
difficulty: "intermediate"
relatedPosts:
  - "nextjs-ssg-basics"
  - "advanced-ssg-techniques"

---

# Dynamic Routes 🌐

Next.js allows **dynamic route generation** for static sites using `getStaticPaths`.

---

## Example

```ts
export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: 'example' } }],
    fallback: false
  };
}