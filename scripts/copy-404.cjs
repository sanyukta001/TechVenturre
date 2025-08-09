// scripts/copy-404.js
const fs = require('fs');
const path = require('path');

const outDir = path.resolve(__dirname, '..', 'dist', 'public');
const indexFile = path.join(outDir, 'index.html');
const notFoundFile = path.join(outDir, '404.html');

if (fs.existsSync(indexFile)) {
  fs.copyFileSync(indexFile, notFoundFile);
  console.log('Copied index.html -> 404.html');
} else {
  console.error('index.html not found in', outDir);
  process.exit(1);
}
