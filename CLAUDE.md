# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Jekyll-based portfolio website for Jesse Trippe, built with Jekyll 4.4.1 and styled with Tailwind CSS v4.1.11. The site showcases design work, includes an invoice system, and uses the jekyll-tailwindcss gem for CSS processing.

## Development Commands

### Local Development
```bash
bundle exec jekyll serve --watch -l -o
```

### Production Build
```bash
JEKYLL_ENV=production bundle exec jekyll build
```

### Dependencies
```bash
bundle install    # Install Ruby/Jekyll dependencies
```

## Architecture

### Jekyll Collections
- `_work_items/` - Portfolio projects with permalink `/work/:name/`
- `_invoices/` - Client invoices with permalink `/invoices/:name/`
- `_pages/` - Static pages (about, work, etc.)

### Styling System
- **Tailwind CSS v4.1.11** for utility-first styling
- **jekyll-tailwindcss gem** for CSS processing and Tailwind integration
- **Custom fonts**: Roboto Slab Bold, Roboto Mono (defined in @theme block)
- **Dark mode**: Media query based (`media`)

### File Structure
- `_includes/` - Reusable HTML components (header, footer, vectors)
- `_layouts/` - Page templates (default.html, invoice.html)
- `styles/` - CSS source files
- `images/` - Static assets and project images
- `_site/` - Generated site output (excluded from repo)

### Content Configuration
Tailwind scans these paths for classes:
- `_includes/**/*.html`
- `_layouts/**/*.html` 
- `_pages/*.md`
- `_work_items/*.md`
- `_invoices/*.md`

### Build Process
1. Jekyll processes Markdown/Liquid templates
2. jekyll-tailwindcss gem processes CSS with Tailwind v4
3. Font definitions and custom styles are inlined in main.css
4. Production builds are optimized by Jekyll and Tailwind