#!/usr/bin/env bash
# Rebuild the GitHub Pages files that live at the repo root
# (Pages is locked to main / — Jekyll + .nojekyll).
set -euo pipefail
cd "$(dirname "$0")/.."
GITHUB_PAGES=true npm run build
touch out/.nojekyll
rm -rf _next photos 404
cp -a out/.nojekyll out/index.html out/404.html out/icon.svg .
cp -a out/_next out/photos out/404 .
echo "Root Pages files refreshed. Commit index.html, 404.html, icon.svg, .nojekyll, _next/, photos/."
