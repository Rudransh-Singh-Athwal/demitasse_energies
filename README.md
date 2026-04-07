# deMITasse Energies Website

A modern, responsive React website for deMITasse Energies focused on communicating zero-emission, grid-scale power technology.

The site includes:

- A loading screen splash
- A sticky navigation bar with dark mode toggle
- A hero section with project branding
- Content sections describing core technology and use cases
- A simple footer

## Tech Stack

- React 19
- TypeScript
- Vite 8
- Tailwind CSS
- ESLint

## Getting Started

### Prerequisites

- Node.js 18+ (Node.js 20+ recommended)
- npm (comes with Node.js)

### Run Locally

1. Clone the repository:

```bash
git clone https://github.com/Rudransh-Singh-Athwal/demitasse_energies
cd demitasse-energies
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser at:

```text
http://localhost:5173
```

## Available Scripts

- `npm run dev`: Starts Vite dev server with hot reload
- `npm run build`: Type-checks and creates a production build
- `npm run preview`: Serves the production build locally
- `npm run lint`: Runs ESLint checks

## Project Structure

```text
demitasse-energies/
|-- public/
|-- src/
|   |-- assets/
|   |-- components/
|   |   |-- ContentSection.tsx
|   |   |-- Footer.tsx
|   |   |-- Hero.tsx
|   |   |-- LoadingScreen.tsx
|   |   `-- Navbar.tsx
|   |-- App.tsx
|   |-- index.css
|   `-- main.tsx
|-- index.html
|-- tailwind.config.js
|-- vite.config.ts
`-- package.json
```

## Styling and Theme

- Tailwind is configured in `tailwind.config.js`
- Dark mode uses the `class` strategy
- Custom dark theme colors are defined (`darkBg`, `darkSurface`)

## Build for Production

```bash
npm run build
```

The build output is generated in the `dist/` folder.

To preview the production build locally:

```bash
npm run preview
```

## Deployment

This application is deployed on Netlify

Typical deployment flow:

1. Build with `npm run build`
2. Deploy the generated `dist/` directory
