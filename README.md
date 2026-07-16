# LaslesVPN — Landing Page

A pixel-faithful, fully responsive landing page for **LaslesVPN**, a fictional VPN product. Built with React 19, Vite, and Tailwind CSS 4, it recreates the popular LaslesVPN community design as a clean, component-driven single-page site.

**🔗 Live demo:** [mozhganetaati.github.io/lasles-vpn](https://mozhganetaati.github.io/lasles-vpn/)

---

## Overview

This project turns a marketing landing page design into production-quality front-end code. It's structured as a set of focused, reusable React components — one per page section — with content (pricing tiers, testimonials) separated into data files so copy can be updated without touching markup.

It's a good reference for:

- Building a responsive marketing page with **Tailwind CSS v4** (using the Vite plugin, no config file).
- Organizing a React app into clean, single-responsibility section components.
- Separating content data from presentation.
- Deploying a Vite + React app to **GitHub Pages**.

## Features

- **Fully responsive** — mobile-first layouts that scale cleanly to desktop.
- **Component-driven** — each section is an isolated, reusable React component.
- **Data-driven content** — pricing plans and testimonials live in `src/data/`.
- **Modern tooling** — React 19, Vite 8, Tailwind CSS 4, and `react-icons`.
- **One-command deploy** to GitHub Pages.

## Page sections

The page (`src/App.jsx`) is composed of these sections in order:

| Section | Component | Purpose |
|---|---|---|
| Header | `Header.jsx` | Navigation bar with logo, links, and sign-in / sign-up |
| Hero | `Hero.jsx` | Headline, value proposition, and primary call-to-action |
| Stats bar | `StatsBar.jsx` | Key metrics (users, locations, servers) |
| Features | `Features.jsx` | Product feature highlights with illustration |
| Pricing | `Pricing.jsx` | Free / Standard / Premium plans (data in `pricing.js`) |
| Global network | `GlobalNetwork.jsx` | Worldwide server coverage section |
| Trusted brands | `TrustedBrands.jsx` | Partner / sponsor logos |
| Testimonials | `Testimonials.jsx` | Customer reviews (data in `testimonials.js`) |
| Newsletter | `Newsletter.jsx` | Subscribe call-to-action |
| Footer | `Footer.jsx` | Links, social icons, and copyright |

## Tech stack

- **[React 19](https://react.dev/)** — UI components
- **[Vite 8](https://vite.dev/)** — dev server and build tool
- **[Tailwind CSS 4](https://tailwindcss.com/)** — styling via `@tailwindcss/vite`
- **[react-icons](https://react-icons.github.io/react-icons/)** — icon set
- **[gh-pages](https://github.com/tschaub/gh-pages)** — deployment
- **ESLint** — linting

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/mozhganetaati/lasles-vpn.git
cd lasles-vpn

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Available scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite dev server with hot module replacement |
| `npm run build` | Build the production bundle into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |
| `npm run deploy` | Build and publish `dist/` to GitHub Pages |

## Deployment

The site is deployed to **GitHub Pages**. Vite is configured with `base: '/lasles-vpn/'` in `vite.config.js` so assets resolve correctly under the repository subpath.

To deploy:

```bash
npm run deploy
```

This builds the project and pushes the `dist/` folder to the `gh-pages` branch via the `gh-pages` package.

## Project structure

```
lasles-vpn/
├── src/
│   ├── assets/            # Images, illustrations, logos, avatars
│   ├── components/        # One React component per page section
│   ├── data/              # Content data (pricing, testimonials)
│   ├── App.jsx            # Composes all sections into the page
│   ├── main.jsx           # React entry point
│   └── index.css          # Tailwind entry + global styles
├── vite.config.js         # Vite + Tailwind + GH Pages base config
├── eslint.config.js
└── package.json
```

## Credits

Design based on the **LaslesVPN** landing page concept from the design community. Implemented by [Mozhgan Etaati](https://github.com/mozhganetaati).
