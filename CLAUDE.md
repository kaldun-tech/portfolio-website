# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal brand portfolio website. The repository is configured to support Node.js-based web frameworks (Next.js, Nuxt, Vite, Sveltekit, Gatsby, etc.) based on the .gitignore configuration.

## Common Development Commands

Once the project is initialized with a package.json, expect these common patterns:

- **Install dependencies**: `npm install` (or `yarn install` / `pnpm install`)
- **Development server**: `npm run dev` (typically runs on localhost:3000 or similar)
- **Build for production**: `npm run build`
- **Run tests**: `npm test` or `npm run test`
- **Linting**: `npm run lint`
- **Type checking** (if TypeScript): `npm run type-check`
- **Format code**: `npm run format`

## Project Setup Phase

When initially setting up this project:

1. **Determine the framework**: Confirm which framework is being used (Next.js, React + Vite, Svelte, etc.)
2. **Create package.json**: Define dependencies, scripts, and project metadata
3. **Configure build tools**: Set up appropriate config files (tsconfig.json, vite.config.ts, next.config.js, etc.)
4. **Environment variables**: Use .env.example as a template for required environment variables
5. **Linting and formatting**: Configure ESLint and Prettier (or similar) for code quality

## Development Workflow

When making changes to this portfolio:

- **Components and pages**: Store reusable components in a `components/` directory and pages in a `pages/` or `app/` directory
- **Styling**: Use CSS Modules, Tailwind CSS, or component-scoped styles depending on the framework choice
- **Build output**: The dist directory contains production builds - do not commit this to version control (it's in .gitignore)
- **Testing**: Write tests for components and utility functions

## Environment Variables

The .gitignore indicates environment variables should follow this pattern:
- `.env` - local configuration (not committed)
- `.env.example` - template showing required variables (committed to repo)

Create .env.example to document what variables are needed.

## Key Directories (Expected Structure)

Once initialized, the codebase will likely have:

```
portfolio-website/
├── src/                    # Source code
│   ├── components/         # Reusable React/Vue/Svelte components
│   ├── pages/ or app/      # Page components (framework-specific)
│   └── styles/             # Global styles
├── public/                 # Static assets
├── dist/ or .next/         # Build output (in .gitignore - not committed)
├── package.json            # Project dependencies and scripts
├── tsconfig.json           # TypeScript configuration (if using TS)
└── [config].config.js/ts   # Framework-specific config
```

## Important Notes

- This is a frontend-focused project (portfolio website), so there's no backend development here
- Keep assets optimized for web performance
- Ensure the site is responsive and accessible
- Portfolio should have proper SEO metadata
