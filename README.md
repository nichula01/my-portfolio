# Next.js Portfolio Starter

A single-page portfolio built with the Next.js App Router, Tailwind CSS, and shadcn/ui components. Customize the copy, links, and case studies to match your work.

## Getting started

1. Install dependencies (Node.js 18+ required):

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
   npm run dev
   ```

3. Visit `http://localhost:3000` to view the site. Update content in the files inside `src/components/sections`.

## Customization

- Update the hero copy and links inside `src/components/sections/hero.tsx`.
- Edit the skills array, experience data, and projects in their respective section files.
- Colors and typography are controlled through CSS variables in `src/app/globals.css` and Tailwind tokens in `tailwind.config.ts`.
- `components/ui` contains extracted shadcn primitives (button, card, badge) you can extend for more complex layouts.

## Production build

```bash
npm run build
npm run start
```

This will output an optimized Next.js build ready to deploy.
