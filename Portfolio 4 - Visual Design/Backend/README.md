# Static Build

Astro validates the portfolio data and generates HTML for Vercel. TAP.ID transfers the approved Google Form responses into the data file before building.

```text
Google Form → portfolio.json → Astro validation → dist/ → Vercel
```

Run the following commands from `Frontend` with Node.js 24 LTS.

```sh
npm ci
npm run check
npm run build
```

The output is in `Frontend/dist/`. Run `npm run preview` from `Frontend` to inspect the built site locally.

- [Data schema and examples](../Database/README.md)
- [Vercel configuration and client handoff](../Documentation/PANDUAN.md)
