# Ken Huang Personal Site (kenhuang-2022)

Personal website and portfolio of **Ken Huang** – front-end developer and product designer based in Taipei, Taiwan.

The UI keeps the original 2022 design, with ongoing engineering and maintainability improvements in 2026.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (Pages Router)
- **Language**: JavaScript (ESNext)
- **UI**:
  - [React](https://reactjs.org/)
  - [Tailwind CSS](https://tailwindcss.com/)
  - SCSS modules (e.g. `pages/index.module.scss`)
- **Tooling**:
  - TypeScript for type-checking only (`tsconfig.json`, `npm run typecheck`)
  - ESLint (`npm run lint`)
  - [`clsx`](https://github.com/lukeed/clsx) for className composition in shared components

## Project Structure (high level)

```bash
.
├── components/
│   ├── Button.jsx          # Shared button component (variants via clsx)
│   ├── CategoryBar.jsx     # Category filters (Camino / Front-end / Design / All)
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Layout.jsx          # Shared layout + <Head> SEO meta
│   ├── Portfolio.jsx       # Portfolio cards, list, summary components
│   ├── Typography.jsx      # Heading component (H1–H6)
│   └── ...
├── constants/
│   ├── articles.js         # ARTICLES: all article metadata (Camino, Medium, etc.)
│   ├── portfolioData.js    # PORTFOLIO: all portfolio items
│   └── site.js             # Site-level constants: title, tagline, meta description, URL
├── pages/
│   ├── index.jsx           # Home (hero + featured posts/projects)
│   ├── about.jsx           # About
│   ├── mentorship.jsx      # Mentorship
│   ├── contact.jsx         # Contact
│   ├── portfolio/
│   │   ├── index.jsx       # Portfolio list (uses PORTFOLIO)
│   │   └── *.jsx           # Individual project case-study pages
│   └── articles/
│       ├── List.jsx        # Article list (uses ARTICLES)
│       ├── constants.jsx   # Legacy article content constants (used by some pages)
│       └── camino-*.jsx    # Camino daily article pages
├── public/
│   └── images/             # All image assets (avatar, portfolio, Camino, etc.)
├── utils/
│   └── tools.js            # Shared utilities (e.g. dateConvert)
├── package.json
└── tsconfig.json
```

> **Note**  
> As of 2026, article and portfolio data is sourced **only** from  
> `constants/articles.js` and `constants/portfolioData.js`.  
> Legacy API routes (`/pages/api/articles`, `/pages/api/portfolio`) have been removed and are no longer used by the front-end.

## Getting Started

### Installation

Use `npm` (recommended):

```bash
npm install
```

(You can also use `yarn install` if you prefer yarn.)

### Development

```bash
npm run dev
# http://localhost:3000
```

### Production Build

```bash
npm run build
npm start
```

`npm run build` will:

- Run TypeScript type-checking (no emit)
- Build the production Next.js app
- Pre-render all static pages (Home, About, Portfolio, Articles, etc.)

## NPM Scripts

```jsonc
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint .",
    "lint:fix": "next lint --fix",
    "typecheck": "tsc --noEmit"
  }
}
```

- `dev`: start the development server
- `build`: create a production build
- `start`: start the production server
- `lint`: run ESLint (Next.js integrated)
- `lint:fix`: run ESLint with auto-fix
- `typecheck`: run TypeScript type-checking only
