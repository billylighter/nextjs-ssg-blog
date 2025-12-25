---
# Core metadata
title: "Hello World"
slug: "hello-world"
date: "2025-01-01"
lastModified: "2025-01-10"
description: "My first static post rendered via Next.js SSG using Markdown files."

# SEO
metaTitle: "Hello World – Next.js SSG Markdown Guide"
metaDescription: "Learn how to render Markdown files using Next.js Static Site Generation with full SEO metadata."
keywords:
  - nextjs
  - ssg
  - markdown
  - static site
  - documentation

# Authoring
author:
  name: "John Doe"
  avatar: "/images/authors/author.jpg"
  url: "https://example.com"
  role: "Full-Stack Developer"

# Content classification
category: "Documentation"
categories:
  - Next.js
  - Frontend
tags:
  - SSG
  - Markdown
  - SEO
  - Static Content

# Publishing controls
status: "published" # draft | published | archived
featured: true
featuredImage: "/images/posts/hello-world/thumbnail.jpg"
readingTime: 5 # minutes

# Navigation (useful for docs)
order: 1
sidebarTitle: "Introduction"
toc: true

# Social sharing
ogImage: "/images/posts/hello-world/og.png"
twitterCard: "summary_large_image"

# Internationalization
language: "en"
translations:
  uk: "/uk/docs/hello-world"
  ru: "/ru/docs/hello-world"

# Custom / extensible fields
layout: "docs"
difficulty: "beginner"
relatedPosts:
  - "nextjs-ssg-basics"
  - "markdown-in-nextjs"

---

# Hello World 👋

Welcome to your **first static Markdown page** rendered using **Next.js Static Site Generation (SSG)**.

This document demonstrates **rich Markdown syntax**, **frontmatter metadata**, and **content structures** commonly used in documentation platforms and blogs.

---

## What this page demonstrates

- Markdown syntax support
- Frontmatter metadata
- SEO-friendly content structure
- Documentation-style layout
- Compatibility with Next.js SSG

---

## Text formatting

You can use standard Markdown formatting:

- **Bold text**
- *Italic text*
- ~~Strikethrough~~
- `Inline code`
> Blockquotes for highlighting important notes

Example blockquote:

> Static Site Generation allows pages to be built at **build time**, resulting in faster load times and improved SEO.

---

## Headings hierarchy

Proper heading structure is critical for **SEO and accessibility**:

```md
# H1 – Page title (usually single)
## H2 – Section
### H3 – Subsection
#### H4 – Details
