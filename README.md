# Taras Smereka Portfolio

Personal portfolio website for Taras Smereka - Protocol Engineer

## Tech Stack

- **Framework**: [Astro](https://astro.build/) - Modern static site builder
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Language**: TypeScript
- **Package Manager**: npm

## Prerequisites

- Node.js 20.x or higher
- npm (comes with Node.js)

## Installation

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd portfolio-website
npm install
```

## Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:4321` (Astro's default port).

The development server features:

- Hot Module Replacement (HMR) for instant updates
- Fast refresh for component changes
- TypeScript type checking

## Building for Production

Create a production build:

```bash
npm run build
```

The built files will be output to the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

This serves the `dist/` directory to verify the production build before deployment.

## Code Formatting

Format code using Prettier:

```bash
npm run format
```

This will format all files in the project according to the Prettier configuration.

## Testing

Currently, no test suite is configured for this project. To add testing:

- Consider [Vitest](https://vitest.dev/) for unit tests
- Consider [Playwright](https://playwright.dev/) or [Cypress](https://www.cypress.io/) for E2E tests

## Deployment

### Vercel (Recommended)

This project is pre-configured for Vercel deployment with `vercel.json`.

#### Deploy with Vercel CLI

1. Install Vercel CLI:

```bash
npm install -g vercel
```

2. Deploy:

```bash
vercel
```

For production deployment:

```bash
vercel --prod
```

#### Deploy with Vercel Dashboard

1. Push your code to GitHub/GitLab/Bitbucket
2. Import the repository in [Vercel Dashboard](https://vercel.com/new)
3. Vercel will automatically detect Astro and configure the build settings
4. Deploy!

### Other Platforms

Astro can be deployed to many platforms:

- **Netlify**: Connect your Git repository and Netlify will auto-detect Astro
- **Cloudflare Pages**: Add build command `npm run build` and publish directory `dist`
- **GitHub Pages**: Use the Astro [GitHub Pages action](https://docs.astro.build/en/guides/deploy/github/)
- **Static Hosting**: Upload the `dist/` folder to any static hosting service

## Project Structure

```
portfolio-website/
├── public/             # Static assets (images, fonts, etc.)
├── src/
│   ├── components/     # Reusable Astro components
│   ├── layouts/        # Page layouts
│   └── pages/          # Page routes (file-based routing)
├── astro.config.mjs    # Astro configuration
├── tailwind.config.mjs # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Dependencies and scripts
```

## Learn More

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

Private - All Rights Reserved
