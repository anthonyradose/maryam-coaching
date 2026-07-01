# Maryam Coaching

A React + TypeScript landing page project for Maryam Caillon, built to promote couple therapy services through tailored campaign pages and integrated client reviews.

[Campaign 1](https://maryam-coaching.vercel.app/conseillere-conjugale-en-ligne)
[Campaign 2](https://maryam-coaching.vercel.app/conseillere-conjugale-versailles)
[Campaign 3](https://maryam-coaching.vercel.app/ravivez-la-flamme-dans-votre-couple)
[Campaign 4](https://maryam-coaching.vercel.app/je-veux-sauver-notre-couple)

![Maryam Coaching](./public/images/maryam-caillon-preview.webp)

## Overview

Four independently routable marketing pages sharing a single React codebase, TypeScript for type safety, and Tailwind for styling. Each campaign has unique content and booking links, all configured centrally in `src/config/campaigns.tsx`. Google Reviews are pulled dynamically from a WordPress endpoint and displayed in a Swiper carousel. Built with Vite for fast development and production builds targeting Vercel.

## Features

| Feature | Description |
| --- | --- |
| Campaign landing pages | Four targeted pages with unique content and dedicated Calendly booking links, allowing different audiences to be reached with tailored messaging |
| Centralised campaign config | Content and booking links managed in `src/config/campaigns.tsx`, making it easy to add or update campaigns without touching component code |
| Dynamic Google Reviews | Fetched via a custom WordPress REST API endpoint that executes a shortcode, so new reviews appear on the site automatically |
| Reviews carousel | Client reviews displayed in a Swiper carousel, optimised for mobile |
| Animations | Framer Motion animations for a polished, modern user experience |
| Optimised build | Multi-entry Vite build with independent bundles per campaign for fast load times |

## Tech Stack

| Technology | Purpose |
| --- | --- |
| React | UI framework |
| TypeScript | Type-safe JavaScript |
| Vite | Build tool and dev server |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Animation library |
| Swiper | Carousel component |
| Lucide React | Icon library |

## Project Structure

```text
maryam-coaching/
├── campaign1/                 # Campaign HTML entry points (one per campaign)
├── campaign2/
├── campaign3/
├── campaign4/
├── src/
│   ├── campaigns/            # Campaign-specific root components
│   ├── components/           # Shared UI components
│   ├── config/               # Centralized campaign content and config
│   ├── pages/
├── public/                   # Static assets
├── wordpress-plugin/         # WordPress plugin for Google Reviews API
├── vite.config.ts
├── vercel.json
└── package.json
```

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/anthonyradose/maryam-coaching.git
cd maryam-coaching
npm install
```

## Local Development

Start the development server:

```bash
npm run dev
```

To build all four campaign bundles:

```bash
npm run build
```

`npm run build` runs `tsc -b && vite build` — type-checks then bundles each campaign into `dist/`.

To preview the production build locally:

```bash
npm run preview
```

## Deployment

This project uses a multi-entry Vite build to generate four independent campaign bundles, each deployed as a separate single-page application. All campaigns deploy together to a single Vercel project, with each campaign corresponding to a unique marketing route.

### Vercel Rewrites

Each campaign has a unique marketing route defined in `vercel.json`:

```json
{
  "rewrites": [
    { 
      "source": "/conseillere-conjugale-en-ligne", 
      "destination": "/campaign1/index.html" 
    },
    { 
      "source": "/conseillere-conjugale-versailles", 
      "destination": "/campaign2/index.html" 
    },
    { 
      "source": "/ravivez-la-flamme-dans-votre-couple", 
      "destination": "/campaign3/index.html" 
    },
    { 
      "source": "/je-veux-sauver-notre-couple", 
      "destination": "/campaign4/index.html" 
    }
  ]
}
```

To add a new route, add a new rewrite object to the `rewrites` array, set `source` to the marketing URL path and `destination` to the campaign bundle path (`/campaignX/index.html`), then commit and push to trigger auto-deploy.

### Campaign Configuration

All campaign-specific content (booking links, hero text, sections) is centralized in `src/config/campaigns.tsx`:

```typescript
export const campaigns = {
  campaign1: {
    bookingLink: "https://calendly.com/...",
    hero: { title: "...", subtitle: "...", ctaSubtitle: "..." },
    why: { title: "...", paragraphs: [...], bullets: [...] },
    howToFix: { title: "...", description: "..." }
  }
};
```

To update booking links or campaign content, edit the corresponding campaign object in `src/config/campaigns.tsx` and commit and push to trigger auto-deploy.

## License

Copyright (c) 2025 Anthony Radose. All rights reserved. Unauthorized copying, modification, or distribution is strictly prohibited.
