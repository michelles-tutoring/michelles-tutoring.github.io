# Michelle's Tutoring website

This repository contains the static website for Michelle's Tutoring. It works without a database, backend, or build process and can eventually be hosted on GitHub Pages.

## Website files

- `index.html` — all page content and metadata
- `styles.css` — colors, typography, layout, and mobile styles
- `script.js` — the mobile navigation and automatic footer year
- `favicon.svg` — the small “M” icon shown in browser tabs
- `SourceSans3.ttf` — the locally hosted typeface used throughout the site

## Preview the website

Tutoring resources are stored separately in `tutoring-materials/` so the website files can remain at the repository root for GitHub Pages.

The simplest option is to double-click `index.html`. It will open in your default web browser.

For a more accurate local preview, open PowerShell in this folder and run:

```powershell
python -m http.server 8000
```

Then visit <http://localhost:8000> in a web browser. Press `Ctrl+C` in PowerShell when finished.

## Update text

Open `index.html` in a text editor, find the wording you want to change, make the edit, and save. Refresh the browser to see the result. Most visual settings are near the top of `styles.css` under `:root`.

## Google tutoring request form

The Google Form address appears in every request link in `index.html`. To replace it later, use Find and Replace in that file and replace every occurrence of the old address with the new one:

`https://docs.google.com/forms/d/e/1FAIpQLSfHUAtLI34n1dVAE1f-QxEZVnIAZg8eJHqy4QD1APhTLcOQ_g/viewform`

The website does not collect or store personal information directly.

## Publish later with GitHub Pages

The site is compatible with a user-level GitHub Pages repository. When the site is approved, push these files to the repository's default branch, open the repository **Settings**, select **Pages**, and choose deployment from the root of that branch. Do not enable Pages until the site is ready to publish.
