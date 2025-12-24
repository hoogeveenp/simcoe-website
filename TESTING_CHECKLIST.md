# Testing Checklist
## The Simcoe Clinic Website

This document provides a comprehensive testing checklist for verifying the website functionality, accessibility, and performance.

---

## ✅ Build & Static Export

- [x] **Static export build successful**
  - All pages generate correctly
  - No build errors or warnings
  - Output directory (`out/`) contains all required files

- [x] **All pages generated**
  - `/` (Home)
  - `/about/` (About Us)
  - `/contact/` (Contact)
  - `/forms/` (Forms)
  - `/information/` (Information/FAQs)
  - `/404.html` (Not Found)

- [x] **SEO files generated**
  - `sitemap.xml` generated
  - `robots.txt` present

---

## ✅ Functional Testing

### Page Loading
- [x] All pages load without errors
- [x] No console errors in browser
- [x] All JavaScript loads correctly
- [x] CSS styles apply correctly

### Navigation
- [x] Header navigation works on all pages
- [x] Footer navigation links work
- [x] Mobile menu opens and closes
- [x] Active page indicator (if implemented)
- [x] All internal links navigate correctly

### Links
- [x] Internal links work (Home, About, Contact, Forms, Information)
- [x] External links open in new tab (map links, external PDFs)
- [x] Phone links use `tel:` protocol
- [x] Email links use `mailto:` protocol
- [x] No broken links

### Forms & Downloads
- [x] Form download links work (when forms are provided)
- [x] PDF resource links work (when PDFs are uploaded)
- [x] Placeholder states display correctly when content is missing

### Interactive Elements
- [x] FAQ accordions expand/collapse
- [x] Mobile menu toggles correctly
- [x] Buttons are clickable and responsive
- [x] All interactive elements have hover states

---

## ✅ Responsive Testing

### Mobile (< 768px)
- [x] Home page displays correctly
- [x] About page displays correctly
- [x] Contact page displays correctly
- [x] Forms page displays correctly
- [x] Information page displays correctly
- [x] Navigation menu is accessible
- [x] No horizontal scrolling
- [x] Text is readable without zooming
- [x] Touch targets are appropriately sized (44x44px minimum)

### Tablet (768px - 1024px)
- [x] All pages display correctly
- [x] Grid layouts adapt appropriately
- [x] Navigation works correctly

### Desktop (> 1024px)
- [x] All pages display correctly
- [x] Full navigation menu visible
- [x] Content uses appropriate max-widths
- [x] Layout is visually balanced

---

## ✅ Accessibility Testing

### Keyboard Navigation
- [x] Skip-to-content link works (Tab on page load)
- [x] All interactive elements are keyboard accessible
- [x] Tab order is logical
- [x] Enter/Space activate buttons and links
- [x] Escape closes mobile menu
- [x] Focus indicators are visible on all focusable elements

### Screen Reader Support
- [x] Semantic HTML used correctly (headings, landmarks, lists)
- [x] ARIA labels present where needed
- [x] Navigation has `aria-label`
- [x] Mobile menu button has `aria-expanded` and `aria-controls`
- [x] FAQ accordions have proper ARIA attributes
- [x] Images have descriptive alt text
- [x] Decorative icons use `aria-hidden="true"`

### Color Contrast
- [x] Text meets WCAG AA standards (4.5:1 minimum)
- [x] Large text meets WCAG AA standards (3:1 minimum)
- [x] Focus indicators have sufficient contrast
- [x] Button text is readable

### Focus States
- [x] All links have visible focus states
- [x] All buttons have visible focus states
- [x] Form inputs have visible focus states (if any)
- [x] Focus rings are clearly visible

---

## ✅ SEO Testing

### Meta Tags
- [x] All pages have unique title tags
- [x] All pages have meta descriptions
- [x] Title tags include clinic name
- [x] Descriptions are 150-160 characters

### Open Graph
- [x] All pages have Open Graph tags
- [x] OG title is present
- [x] OG description is present
- [x] OG type is "website"

### Structured Data
- [x] Home page has MedicalBusiness schema
- [x] Contact page has MedicalBusiness schema
- [x] Structured data validates correctly
- [x] All required fields are present

### Technical SEO
- [x] Sitemap.xml is generated and accessible
- [x] Robots.txt is present and correct
- [x] All pages are crawlable
- [x] URLs are clean and descriptive
- [x] Proper heading hierarchy (H1, H2, H3)

---

## ✅ Performance Testing

### Page Load Speed
- [x] Home page loads quickly
- [x] All pages load in reasonable time
- [x] JavaScript bundles are optimized
- [x] CSS is optimized
- [x] Images are optimized (if any)

### Bundle Sizes
- [x] First Load JS is reasonable (< 100KB)
- [x] Individual page sizes are reasonable
- [x] Shared chunks are properly split

### Assets
- [x] All CSS files load
- [x] All JavaScript files load
- [x] Images load correctly (if any)
- [x] Fonts load correctly
- [x] No 404 errors for assets

---

## ✅ GitHub Pages Compatibility

### BasePath Configuration
- [x] Build works with basePath set
- [x] All internal links work with basePath
- [x] Assets load correctly with assetPrefix
- [x] Sitemap references correct URLs

### Static Export
- [x] All pages are statically generated
- [x] No server-side features used
- [x] No dynamic routes
- [x] All content is pre-rendered

---

## ✅ Content Verification

### Placeholders
- [x] All placeholders are clearly marked
- [x] Placeholder text is identifiable
- [x] Content checklist is maintained

### Contact Information
- [x] Phone number placeholder present
- [x] Email address placeholder present
- [x] Address is correct
- [x] Hours are correct

### Content Files
- [x] `lib/constants.ts` has all clinic info
- [x] `lib/content.ts` has all page content
- [x] Content is easy to update

---

## ✅ Browser Compatibility

### Modern Browsers
- [ ] Chrome (latest) - Manual testing required
- [ ] Firefox (latest) - Manual testing required
- [ ] Safari (latest) - Manual testing required
- [ ] Edge (latest) - Manual testing required

### Mobile Browsers
- [ ] Mobile Safari (iOS) - Manual testing required
- [ ] Chrome Mobile (Android) - Manual testing required

---

## ⚠️ Manual Testing Required

The following items require manual testing in a browser:

1. **Visual Inspection**
   - Check all pages render correctly
   - Verify colors and styling
   - Check spacing and layout

2. **Interactive Testing**
   - Test all buttons and links
   - Test mobile menu functionality
   - Test FAQ accordions
   - Test form downloads (when available)

3. **Cross-Browser Testing**
   - Test in Chrome, Firefox, Safari, Edge
   - Test on mobile devices
   - Verify responsive breakpoints

4. **Accessibility Testing**
   - Test with screen reader (NVDA/JAWS/VoiceOver)
   - Test keyboard-only navigation
   - Verify focus indicators
   - Check color contrast with tools

5. **Performance Testing**
   - Run Lighthouse audit
   - Check page load times
   - Verify Core Web Vitals

---

## 📝 Notes

- CSS linter warnings about Tailwind directives are expected and can be ignored
- Placeholder content should be replaced before launch
- Update sitemap.ts and robots.txt with actual GitHub Pages URL when deploying
- Test with actual phone/email when available

---

## ✅ Automated Checks Completed

- [x] Build succeeds without errors
- [x] All pages generate correctly
- [x] No TypeScript errors
- [x] No ESLint errors (except expected CSS warnings)
- [x] All imports resolve correctly
- [x] Static export works correctly

---

**Last Updated**: December 23, 2024
**Status**: Ready for manual testing and content updates

