const { cp, mkdir, readdir, rm, stat } = require('node:fs/promises');
const path = require('node:path');

const projectRoot = process.cwd();
const outputDir = path.join(projectRoot, 'dist');

const ignoreNames = new Set([
  'dist',
  'node_modules',
  '.git',
  '.gitignore',
  '.npmrc',
  'package-lock.json',
  'pnpm-lock.yaml',
  'bun.lockb',
  'wrangler.toml',
  'package.json',
  'scripts',
]);

async function copyDirectory(source, destination) {
  await mkdir(destination, { recursive: true });
  const entries = await readdir(source, { withFileTypes: true });
  for (const entry of entries) {
    if (ignoreNames.has(entry.name)) continue;
    if (entry.name.startsWith('.git')) continue;

    const from = path.join(source, entry.name);
    const to = path.join(destination, entry.name);

    if (entry.isDirectory()) {
      await copyDirectory(from, to);
    } else if (entry.isFile()) {
      await cp(from, to);
    }
  }
}

async function build() {
  await rm(outputDir, { recursive: true, force: true });
  await copyDirectory(projectRoot, outputDir);
  const summary = await stat(outputDir);
  console.log(`Build complete: ${outputDir} (${summary.isDirectory() ? 'directory' : 'file'})`);
}

build().catch((error) => {
  console.error('Build failed:', error);
  process.exitCode = 1;
});
