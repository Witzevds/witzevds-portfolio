#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const root = process.cwd();
const outDir = path.join(root, "out");
const nextServerApp = path.join(root, ".next", "server", "app");
const nextStatic = path.join(root, ".next", "static");

const publicDir = path.join(root, "public");
const buildIdFile = path.join(root, ".next", "BUILD_ID");

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  ensureDir(dest);
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(srcPath, destPath);
    else fs.copyFileSync(srcPath, destPath);
  }
}

ensureDir(outDir);

// copy HTML files from .next/server/app
if (fs.existsSync(nextServerApp)) {
  copyDir(nextServerApp, outDir);
}

// copy static assets
copyDir(nextStatic, path.join(outDir, "_next"));
// Copy public assets (images, favicon, etc)
if (fs.existsSync(publicDir)) {
  copyDir(publicDir, outDir);
}

// Copy Next.js BUILD_ID (optional but recommended)
if (fs.existsSync(buildIdFile)) {
  fs.copyFileSync(buildIdFile, path.join(outDir, 'BUILD_ID'));
}

console.log("Exported static files to out/");
