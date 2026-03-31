# Furniro Homepage

Production-ready frontend implementation of the Furniro interior landing page using `Next.js 16`, `TypeScript`, `Tailwind CSS 4`, and shadcn/ui-style primitives. The homepage is built to closely match the provided Furniro reference design while keeping the codebase modular and scalable.

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy environment variables:

   ```bash
   copy .env.example .env.local
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open `http://localhost:3000`.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run check:types
npm run format
```

## Tech Stack

- Framework: `Next.js 16.2.1` with the App Router
- Language: `TypeScript`
- Styling: `Tailwind CSS 4`
- UI primitives: shadcn/ui-style `Button`, `Input`, `Label`, and `Separator`
- State management: `Zustand`
- Forms: `React Hook Form` + `Zod`
- API handling: native `fetch` through `src/lib/api/http.ts`
- SEO: App Router metadata, `robots.ts`, and `sitemap.ts`

## Why Zustand

The homepage only needs lightweight shared UI state, so Zustand was chosen over Redux Toolkit or Context API because it avoids provider nesting and keeps cross-component state simple. It currently powers:

- Mobile navigation state
- Wishlist count
- Cart count from homepage product interactions

## Folder Structure

```text
src/
  app/
    api/
    about/
    contact/
    shop/
  components/
    feature/home/
    shared/
    ui/
  hooks/
  lib/
    api/
  services/
  store/
  types/
public/
  images/
```

## Key Decisions

- The brief mentioned both NestJS and Next.js. This implementation follows `Next.js` because the later requirements explicitly require App Router, page metadata, and Next-specific SEO behavior.
- Homepage content is served through a typed async service (`src/services/homepage-service.ts`) so the current mock content can be swapped for a CMS or API later without changing UI components.
- A small newsletter API route was added to demonstrate fetch abstraction, loading/error handling, and form validation.
- Header navigation routes (`/shop`, `/about`, `/contact`) use lightweight placeholder pages to avoid broken navigation while keeping the homepage as the primary scoped deliverable.
- Image assets were localized under `public/images` for stable builds and accurate visual matching.

## SEO Coverage

- Page-level metadata on the homepage
- Open Graph metadata
- Twitter card metadata
- Semantic layout with `header`, `main`, `section`, and `footer`
- `robots.txt`
- `sitemap.xml`

## Verification

The project was verified with:

```bash
npm run lint
npm run check:types
npm run build
```
