# Ruju & Vraj — Wedding Site

A responsive wedding invitation site for **Ruju & Vraj** · February 11, 2026 · Thailand.

Built with React + Vite.

## Live site

https://vrajshah2311.github.io/Ruju-Vraj-/

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Deploy

Pushing to `main` triggers the GitHub Actions workflow in
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the
site and publishes `dist/` to GitHub Pages.

## Content

- Sections: hero, save-the-date, our story, dress code / events, schedule, family blessing, footer.
- Images are placeholders (`placehold.co`) — swap in real photos in the component files under `src/components/`.
- Family names and the Gujarati blessing are in [`src/components/Blessing.jsx`](src/components/Blessing.jsx).
