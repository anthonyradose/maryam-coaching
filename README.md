# Maryam Coaching

A React + TypeScript landing page project for Maryam Caillon, built to promote couple therapy services through tailored campaign pages and integrated client reviews.

[Campaign 1](https://maryam-coaching.vercel.app/conseillere-conjugale-en-ligne)
[Campaign 2](https://maryam-coaching.vercel.app/conseillere-conjugale-versailles)
[Campaign 3](https://maryam-coaching.vercel.app/ravivez-la-flamme-dans-votre-couple)
[Campaign 4](https://maryam-coaching.vercel.app/je-veux-sauver-notre-couple)

![Maryam Coaching](./public/images/maryam-caillon-preview.webp)

## Table of Contents

## Overview

## Campaigns

## Features

## Tech Stack

## Project Structure

## Installation

## Local Development

## Configuration

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

**To add a new route:**

1. Add a new rewrite object to the `rewrites` array
2. Set `source` to the marketing URL path
3. Set `destination` to the campaign bundle path (`/campaignX/index.html`)
4. Commit and push to trigger auto-deploy

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

**To update booking links:**

1. Open `src/config/campaigns.tsx`
2. Update the `bookingLink` URL for the desired campaign
3. Commit and push to trigger auto-deploy

**To update campaign content:**

1. Edit the corresponding campaign object in `src/config/campaigns.tsx` (hero title/subtitle, why section, how-to-fix section)
2. Commit and push to trigger auto-deploy

## Deployment

This project uses a multi-entry Vite build to generate four independent campaign bundles, each deployed as a separate single-page application. All campaigns deploy together to a single Vercel project, with each campaign corresponding to a unique marketing route.

### Vite Configuration

- **Vite** bundles each campaign as a separate entry point defined in `vite.config.ts`
- The `vite.config.ts` file contains a `build.rollupOptions.input` object that maps each campaign to its HTML entry file
- Each campaign bundle is self-contained and includes only the code needed for that specific landing page

### Campaign HTML Entrypoints

The following HTML files serve as the entry points for each campaign:

```text
campaign1/index.html
campaign2/index.html
campaign3/index.html
campaign4/index.html
```

Each file mounts the React app with its corresponding campaign configuration from `src/campaigns/`.

### Build Process

Run the build command to generate all four campaign bundles:

```bash
npm run build
```

This command executes `tsc -b && vite build`, which:

- Compiles TypeScript to JavaScript (`tsc -b`)
- Bundles each campaign entry point into a separate output directory using Vite (`vite build`)

### Output Bundles

After running `npm run build`, Vite generates four separate campaign bundles in the `dist/` directory:

- `dist/campaign1/` — compiled bundle for Campaign 1
- `dist/campaign2/` — compiled bundle for Campaign 2
- `dist/campaign3/` — compiled bundle for Campaign 3
- `dist/campaign4/` — compiled bundle for Campaign 4

For deployment to production, use **Vercel**. See the Configuration section for how Vercel routes map to these campaign bundles.

## Usage

## Testing & Validation

## Known Issues

## Future Improvements

## Credits & Acknowledgements

## License
