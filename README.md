# Jesse Trippe - Design Portfolio

A Jekyll-based portfolio website showcasing UX/UI design work and professional experience. Built with performance and accessibility in mind, featuring a clean, responsive design and project case studies.

## Features

- **Portfolio Showcase**: Case studies of design work for Amazon, Carta, Coyote Logistics, Cityblock Health, and more
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Mode Support**: Automatic dark mode based on system preferences
- **Invoice System**: Built-in client invoice management
- **Performance Optimized**: PostCSS build pipeline with production optimizations

## Tech Stack

- **Static Site Generator**: Jekyll 4.3.1
- **Styling**: Tailwind CSS 3.4.1 with custom design tokens
- **Build Tools**: PostCSS with autoprefixer and cssnano
- **Typography**: Custom Roboto Slab and Roboto Mono font stack
- **Icons**: Custom SVG vector set

## Quick Start

### Prerequisites

- Ruby (version specified in `.ruby-version` or Gemfile)
- Node.js and yarn
- Bundler gem

### Installation

```bash
# Clone the repository
git clone https://github.com/jessetrippe/jesse.desi.git
cd jesse.desi

# Install Ruby dependencies
bundle install

# Install Node.js dependencies  
yarn install
```

### Development

```bash
# Start development server with live reload
yarn serve

# Or use Jekyll directly
bundle exec jekyll serve --watch --livereload -o
```

Visit `http://localhost:4000` to view the site.

### Production Build

```bash
# Build optimized production site
yarn build

# Or use Jekyll directly
JEKYLL_ENV=production bundle exec jekyll build
```

## Project Structure

```
├── _includes/           # Reusable HTML components
│   ├── scripts/        # JavaScript modules
│   ├── templates/      # Layout partials
│   └── vectors/        # SVG icons
├── _layouts/           # Page templates
├── _pages/             # Static pages (About, Work, etc.)
├── _work_items/        # Portfolio project collection
├── _invoices/          # Client invoice collection
├── images/             # Static assets and project images
├── styles/             # CSS source files
├── _config.yml         # Jekyll configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── postcss.config.js   # PostCSS build configuration
```

## Design System

The site uses a custom design system built on Tailwind CSS:

- **Colors**: Custom `redOrange` brand palette alongside Tailwind defaults
- **Typography**: Roboto Slab Bold for headings, Roboto Mono for code
- **Components**: Utility-first approach with custom component classes
- **Dark Mode**: System preference detection with `media` strategy

## Content Management

### Adding Work Items

Create new Markdown files in `_work_items/` with front matter:

```yaml
---
layout: default
title: "Project Title"
description: "Project description"
order: 1
featured: image-filename.png
meta: [Company, Role, Year]
---
```

### Adding Invoices

Create new Markdown files in `_invoices/` with appropriate front matter for the invoice layout.

## Deployment

The site generates static files in `_site/` ready for deployment to:

- GitHub Pages
- Netlify
- Vercel
- AWS S3 + CloudFront
- Any static hosting provider

## Contact

**Jesse Trippe**  
UX/UI Designer and Developer

- Portfolio: [jesse.desi](https://jesse.desi)

## License

This project is for portfolio purposes. Please respect the work and content.
