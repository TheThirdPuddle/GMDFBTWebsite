# Cloudflare Pages compatibility

This repository is configured for deployment to [Cloudflare Pages](https://developers.cloudflare.com/pages/). The static site lives in the repository root and is copied into a `dist/` folder that Pages can serve.

## Prerequisites
- Node.js 18 or newer
- An active Cloudflare account with the [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) authenticated (`wrangler login`)

## Local development
```
npm install
npm run dev
```
`npm run dev` builds the `dist/` folder and starts the Pages development server with live reloading at the default Wrangler port.

## Build
```
npm run build
```
This copies the repository contents into `dist/` while skipping development artifacts (such as `node_modules`, `package-lock.json`, and `wrangler.toml`).

## Deploy
```
npm run deploy
```
This builds the site into `dist/` and publishes the folder to your configured Cloudflare Pages project. On first deploy, Wrangler will prompt you to select or create a project named `gmdfbt-website`.

### Cloudflare Pages dashboard settings
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Root directory:** leave blank (repository root)

If your Pages project defaulted to running `wrangler pages build`, change the build command to the one above; `wrangler pages build` does not support positional arguments and will fail when run with `.`.
