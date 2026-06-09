# NewThinkCompared

NewThinkCompared is a modern Angular storefront and product comparison web application. It uses Angular 20, Angular Material, Tailwind CSS, and FontAwesome to deliver a responsive and polished shopping experience.

## Project overview

- Built with Angular 20 and standalone component/module architecture.
- Uses Angular Material and FontAwesome for UI components and icons.
- Includes Tailwind CSS and `@tailwindcss/postcss` for utility-based styling.
- Contains feature modules for landing, categories, products, authentication, and contact pages.
- Includes shared components for pagination, product cards, search bar, and help sections.
- Includes `db.json` for local mock backend data via `json-server`.

## Features

- Landing page with highlights and featured products.
- Category browsing and category-specific views.
- Product listing, filtering, search, and comparison UI.
- Authentication modules for sign-in and sign-up flows.
- Contact form page for user inquiries.
- Modular routing with lazy-loaded feature modules.
- Shared core and layout services, guards, and reusable components.

## Project structure

- `src/app/core` — core services, guards, layout components, and shared providers.
- `src/app/features/landing` — home page and landing content.
- `src/app/features/category` — category pages and category browsing.
- `src/app/features/product` — product listing, filters, and comparison features.
- `src/app/features/auth` — authentication pages and routing.
- `src/app/features/contact-us` — contact page and form.
- `src/app/shared` — reusable UI components used across the app.

## Prerequisites

- Node.js 18 or later
- npm 10 or later
- Angular CLI (optional, for running CLI commands directly)

## Setup

Install dependencies:

```bash
npm install
```

## Development server

Run the application locally:

```bash
npm start
```

Open your browser at `http://localhost:4200/`.

## Build

Build the production bundle:

```bash
npm run build
```

The built files are stored in the `dist/` directory.

## Testing

Run unit tests:

```bash
npm test
```

## Optional mock API

This repository includes `db.json`, which can be used with `json-server` as a mock backend.

```bash
npx json-server --watch db.json --port 3000
```

Adjust the application API endpoint if needed to point to the mock API.


