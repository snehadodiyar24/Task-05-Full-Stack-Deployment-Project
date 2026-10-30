# Task 05 — Full-Stack Deployment & Project Architecture

A modular, responsive e-commerce product catalog built with HTML, CSS, JavaScript ES modules and Vite.

## Features
- Modular components and page files
- Client-side hash routing (Home, Shop, Product details, Cart)
- Product search, category filtering and sorting
- Add/remove products and update cart quantities
- Cart persistence with localStorage
- Responsive layout
- Optimized production build using Vite
- Deployment configuration for Vercel and Netlify

## Run locally
1. Extract the ZIP and open the project folder in VS Code.
2. Open the VS Code terminal in this folder.
3. Run `npm install`
4. Run `npm run dev`
5. Open the local URL shown (usually http://localhost:5173).

Do not open index.html directly; run it through Vite because the project uses JavaScript modules.

## Production build
Run `npm run build`. The optimized website is generated in `dist`.
Run `npm run preview` to preview the production build.

## Deploy
**Vercel:** Import the GitHub repository, select Vite, build command `npm run build`, output directory `dist`.

**Netlify:** Import the GitHub repository, build command `npm run build`, publish directory `dist`.

## Structure
- `src/main.js` — application entry point and shared click handling
- `src/router.js` — client-side navigation
- `src/data/products.js` — sample product data
- `src/components/` — reusable header, footer and product card
- `src/pages/` — home, shop, product and cart pages
- `src/utils/cartStore.js` — cart state and localStorage

This is a frontend demonstration project. It does not connect to a backend or process real payments. Product images load from Unsplash.
