# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Jekyll-based portfolio website for Jesse Trippe, built with Jekyll 4.3.1 and styled with Tailwind CSS. The site showcases design work, includes an invoice system, and uses PostCSS for build processing.

## Development Commands

### Local Development
```bash
yarn serve
# OR
bundle exec jekyll serve --watch --livereload -o
```

### Production Build
```bash
yarn build
# OR  
JEKYLL_ENV=production bundle exec jekyll build
```

### Dependencies
```bash
bundle install    # Install Ruby/Jekyll dependencies
yarn install      # Install Node.js/CSS dependencies
```

## Architecture

### Jekyll Collections
- `_work_items/` - Portfolio projects with permalink `/work/:name/`
- `_invoices/` - Client invoices with permalink `/invoices/:name/`
- `_pages/` - Static pages (about, work, etc.)

### Styling System
- **Tailwind CSS 3.4.1** for utility-first styling
- **PostCSS** for processing with plugins:
  - postcss-import
  - autoprefixer 
  - cssnano (production only)
- **Custom fonts**: Roboto Slab Bold, Roboto Mono
- **Dark mode**: Media query based (`media`)
- **Custom color palette**: includes `redOrange` brand colors

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
2. PostCSS processes CSS through Tailwind
3. jekyll-postcss plugin integrates the pipeline
4. Production builds include cssnano optimization