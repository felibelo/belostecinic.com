# belostecinic.com

Personal academic website of Felicia Belostecinic. Plain HTML/CSS/JS, no build step, hosted on GitHub Pages.

## Updating content

**Everything you'd normally change is in `data.js`:** bio, research interests, profile links, publications, projects, experience, and education.

- **Add a publication:** copy a `{ ... }` block in `PUBLICATIONS`, paste it, and edit the fields. Entries are grouped by year automatically. Once there are two or more types (e.g. "Working Paper" and "Journal Article"), filter buttons appear.
- **Host a PDF yourself:** put it in `papers/` and link it as `papers/your-file.pdf`.
- **Photo:** save a headshot as `images/headshot.jpg` (a square crop works best). Your initials show until then.

To preview, just double-click `index.html`.

## Publishing changes

```
git add -A
git commit -m "Add new paper"
git push
```

GitHub Pages redeploys within about a minute.

## Domain setup (one-time)

1. GitHub repo → **Settings → Pages**: Source = *Deploy from a branch*, branch `main`, folder `/ (root)`. Custom domain = `belostecinic.com` (the `CNAME` file already sets this).
2. At your domain registrar, add these DNS records:

   | Type  | Host/Name | Value                    |
   |-------|-----------|--------------------------|
   | A     | @         | 185.199.108.153          |
   | A     | @         | 185.199.109.153          |
   | A     | @         | 185.199.110.153          |
   | A     | @         | 185.199.111.153          |
   | CNAME | www       | `<your-github-username>`.github.io |

   Remove any existing A/CNAME records for `@` and `www` that point elsewhere (e.g., registrar parking pages).
3. Once DNS propagates (minutes to a few hours), check **Enforce HTTPS** in Settings → Pages.
