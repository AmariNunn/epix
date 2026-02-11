# Epix Era Website

## Overview
A luxury lifestyle brand website for The Epix Era, targeting women entering their next chapter. The site showcases curated experiences, travel services, and lifestyle products.

## Recent Changes (Feb 2026)
- Added Epix Era globe logo to header navigation
- Changed all CTA buttons to red (#DC2626)
- Updated hero section with playing cards photo and new taglines
- Updated About/Manifesto page with temple umbrella photo
- Reordered Experiences: Reset Package first, Proposal & Romance last
- Added Reset Package details (workbook, audio modules, templates, vision framework)
- Updated Proposal & Romance with romantic red-themed stock image
- Added TikTok and YouTube to footer social links
- Changed "Join" to "Meet Me" and "ticked" to "checked" sitewide

## Project Architecture
- **Frontend**: React + Vite + TypeScript, styled with Tailwind CSS
- **Backend**: Express.js REST API
- **Database**: PostgreSQL with Drizzle ORM
- **UI**: Shadcn/UI components + custom FancyButton, Framer Motion animations
- **Routing**: Wouter

### Pages
- `/` - Home (hero, shift section, curate section, reset offer)
- `/about` - About/Manifesto page
- `/experiences` - Curated experiences listing
- `/shop` - Merchandise and digital products

### Key Files
- `client/src/pages/` - Page components
- `client/src/components/` - Shared components (Navigation, Footer, FancyButton, ApplicationDialog)
- `client/src/index.css` - Global styles and CSS variables
- `server/` - Express backend with API routes
- `shared/schema.ts` - Database schema (Drizzle)

## User Preferences
- Brand colors: Obsidian Black (#0E0E0E), Warm Ivory (#F6F1EB), Champagne Gold (#C9A24D), Oxblood Crimson (#6B0F1A)
- CTA buttons should be red (#DC2626)
- Elegant, editorial luxury aesthetic
- Serif fonts (Playfair Display) for headings, Sans (Inter) for body
