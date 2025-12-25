---
title: "Next.js SSG Basics"
slug: "nextjs-ssg-basics"
date: "2025-01-03"
lastModified: "2025-01-13"
description: "Learn the basics of Next.js Static Site Generation."

metaTitle: "Next.js SSG Basics"
metaDescription: "Understand how Next.js SSG works and how to leverage it for static content."
keywords:
  - nextjs
  - ssg
  - static site
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
  - Markdown
  - Static Site

status: "published"
featured: true
featuredImage: "/images/posts/nextjs-ssg-basics/thumbnail.jpg"
readingTime: 7

order: 3
sidebarTitle: "SSG Basics"
toc: true

ogImage: "/images/posts/nextjs-ssg-basics/og.png"
twitterCard: "summary_large_image"

language: "en"
translations:
  uk: "/uk/docs/nextjs-ssg-basics"
  ru: "/ru/docs/nextjs-ssg-basics"

layout: "docs"
difficulty: "beginner"
relatedPosts:
  - "hello-world"
  - "getting-started"

---

# Next.js SSG Basics

Static Site Generation (SSG) in Next.js allows you to pre-render pages **at build time**.

---

## Core Concepts

- `getStaticProps` – fetch data for a page at build time
- `getStaticPaths` – define dynamic routes for static generation
- Markdown integration for content-driven sites

> SSG ensures fast page load and SEO optimization.