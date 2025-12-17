# Cloudflare Pages compatibility

This repository is configured for deployment to [Cloudflare Pages](https://developers.cloudflare.com/pages/). The static site lives in the repository root, so no build step is required beyond copying the files to Cloudflare.

## Prerequisites
- Node.js 18 or newer
- An active Cloudflare account with the [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) authenticated (`wrangler login`)

## Local development
```sh
npm install
npm run dev
```
This starts the Pages development server with live reloading at the default Wrangler port.

## Build
```sh
npm run build
```
Wrangler will prepare the static output from the current directory (`pages_build_output_dir = "."`).

## Deploy
```sh
npm run deploy
```
This publishes the current branch to your configured Cloudflare Pages project.

If this is the first deploy, Wrangler will prompt you to select or create a project named `gmdfbt-website`.
