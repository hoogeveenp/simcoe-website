# Deployment Guide
## The Simcoe Clinic Website - GitHub Pages

This guide explains how to deploy the website to GitHub Pages.

---

## Prerequisites

- GitHub account
- Repository named `simcoe-website` (or update basePath in `next.config.js`)
- Node.js 20+ installed locally (for testing)

---

## Automatic Deployment (Recommended)

The repository includes a GitHub Actions workflow that automatically deploys the site when you push to the `main` branch.

### Setup Steps

1. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - Save the settings

2. **Push to Main Branch**
   - The workflow will automatically trigger on push to `main`
   - You can also manually trigger it from the **Actions** tab

3. **Verify Deployment**
   - Go to **Actions** tab to see deployment progress
   - Once complete, your site will be available at:
     `https://[username].github.io/simcoe-website/`

### Workflow Details

The GitHub Actions workflow (`.github/workflows/deploy.yml`):
- Runs on push to `main` branch
- Builds the Next.js static site
- Deploys to GitHub Pages
- Uses Node.js 20
- Caches npm dependencies for faster builds

---

## Manual Deployment

If you prefer to deploy manually:

### Option 1: Using gh-pages Branch

1. **Build the site locally:**
   ```bash
   npm run build
   ```

2. **Install gh-pages (if not already installed):**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add deploy script to package.json:**
   ```json
   {
     "scripts": {
       "deploy": "npm run build && gh-pages -d out"
     }
   }
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

### Option 2: Using GitHub Pages Settings

1. **Build the site:**
   ```bash
   npm run build
   ```

2. **Copy `out/` folder contents to a `docs/` folder:**
   ```bash
   cp -r out/* docs/
   ```

3. **Commit and push:**
   ```bash
   git add docs/
   git commit -m "Deploy to GitHub Pages"
   git push
   ```

4. **Configure GitHub Pages:**
   - Go to **Settings** → **Pages**
   - Select **Source**: `main` branch, `/docs` folder
   - Save

---

## Configuration

### BasePath Configuration

The site is configured for GitHub Pages deployment with basePath:

```javascript
// next.config.js
basePath: process.env.NODE_ENV === 'production' ? '/simcoe-website' : '',
assetPrefix: process.env.NODE_ENV === 'production' ? '/simcoe-website' : '',
```

**Important:** If your repository name is different from `simcoe-website`, update these values in `next.config.js`.

### Custom Domain (Optional)

If you have a custom domain:

1. **Update basePath in next.config.js:**
   ```javascript
   basePath: '',
   assetPrefix: '',
   ```

2. **Add CNAME file to public folder:**
   ```
   yourdomain.com
   ```

3. **Configure DNS:**
   - Add CNAME record pointing to `[username].github.io`

---

## Pre-Deployment Checklist

Before deploying, ensure:

- [ ] All placeholder content is replaced
- [ ] Phone number is updated in `src/lib/constants.ts`
- [ ] Email address is updated in `src/lib/constants.ts`
- [ ] Sitemap URL is updated in `src/app/sitemap.ts`
- [ ] Robots.txt URL is updated in `public/robots.txt`
- [ ] All forms and PDFs are uploaded (if applicable)
- [ ] Provider information is added (if applicable)
- [ ] FAQs are completed (if applicable)
- [ ] Mission statement is added (if applicable)
- [ ] Services list is completed (if applicable)

---

## Post-Deployment Verification

After deployment, verify:

1. **Site loads correctly:**
   - Visit `https://[username].github.io/simcoe-website/`
   - Check all pages load

2. **Links work:**
   - Test all navigation links
   - Test phone and email links
   - Test external links (maps, etc.)

3. **Assets load:**
   - Verify CSS loads correctly
   - Verify JavaScript loads correctly
   - Verify images load (if any)

4. **SEO:**
   - Check sitemap is accessible: `/sitemap.xml`
   - Check robots.txt is accessible: `/robots.txt`
   - Verify structured data in page source

5. **Mobile:**
   - Test on mobile device
   - Verify responsive layout works
   - Test mobile menu

---

## Troubleshooting

### Site Not Loading

- Check GitHub Actions workflow for errors
- Verify basePath matches repository name
- Check GitHub Pages settings are correct

### Assets Not Loading

- Verify assetPrefix matches basePath
- Check browser console for 404 errors
- Ensure all assets are in `public/` folder

### Links Not Working

- Verify internal links use relative paths
- Check basePath configuration
- Test with basePath in URL

### Build Fails

- Check Node.js version (should be 20+)
- Verify all dependencies are installed
- Check for TypeScript/ESLint errors

---

## Updating Content

To update content after deployment:

1. **Edit content files:**
   - `src/lib/constants.ts` - Clinic information
   - `src/lib/content.ts` - Page content

2. **Commit and push:**
   ```bash
   git add src/lib/
   git commit -m "Update content"
   git push
   ```

3. **Automatic deployment:**
   - GitHub Actions will automatically rebuild and deploy

---

## Environment Variables

Currently, no environment variables are required. All configuration is in:
- `next.config.js` - Build configuration
- `src/lib/constants.ts` - Clinic information
- `src/lib/content.ts` - Page content

---

## Support

For issues or questions:
- Check GitHub Actions logs
- Review Next.js static export documentation
- Check GitHub Pages documentation

---

**Last Updated**: December 23, 2024
**Status**: Ready for deployment

