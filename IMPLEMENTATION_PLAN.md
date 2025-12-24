# Implementation Plan
## The Simcoe Clinic Website

---

## Milestones / Phases

### Phase 1: Project Setup & Foundation
**Goal**: Set up Next.js project with static export configuration and basic structure

**Tasks**:
- Initialize Next.js project with App Router
- Configure `next.config.js` for static export and GitHub Pages
- Set up Tailwind CSS
- Create basic folder structure
- Set up basePath and assetPrefix configuration
- Create basic layout components (Header, Footer)
- Test static export build

**Deliverables**:
- Working Next.js project
- Successful static export build
- Basic layout structure

**Estimated Time**: 2-3 hours

---

### Phase 2: Core Components & Design System
**Goal**: Build reusable UI components and establish design system

**Tasks**:
- Create reusable components (Button, Card, Section, Link)
- Set up Tailwind theme with clinic colors
- Create Header component with navigation
- Create Footer component with contact info
- Implement responsive navigation (mobile menu)
- Add skip-to-content link
- Ensure keyboard navigation works
- Test accessibility basics (focus states, contrast)

**Deliverables**:
- Component library
- Design system (colors, typography, spacing)
- Accessible Header and Footer

**Estimated Time**: 3-4 hours

---

### Phase 3: Home Page
**Goal**: Build the home page with hero, mission, and key information

**Tasks**:
- Create hero section with clinic name, tagline, CTA
- Add mission statement section
- Add services overview section
- Add location + hours snapshot
- Ensure mobile responsiveness
- Add SEO metadata
- Test page load and performance

**Deliverables**:
- Complete home page
- Mobile-optimized layout
- SEO metadata

**Estimated Time**: 2-3 hours

---

### Phase 4: Contact / Location Page
**Goal**: Build contact page with all contact information and map

**Tasks**:
- Create contact page layout
- Add address with map link
- Add hours of operation
- Add phone, email, fax (with proper links)
- Add emergency disclaimer
- Ensure mobile-friendly layout
- Add LocalBusiness structured data
- Add SEO metadata

**Deliverables**:
- Complete contact page
- Structured data markup
- Emergency disclaimer

**Estimated Time**: 2 hours

---

### Phase 5: Forms Page
**Goal**: Build forms page with links to pre-visit forms

**Tasks**:
- Create forms page layout
- Add description of pre-visit forms
- Add form links (downloadable PDFs or external links)
- Add submission instructions
- Ensure mobile-friendly layout
- Add SEO metadata

**Deliverables**:
- Complete forms page
- Working form links

**Estimated Time**: 1-2 hours

---

### Phase 6: About Us Page
**Goal**: Build about page with provider information

**Tasks**:
- Create about page layout
- Add provider information section (with placeholders)
- Add provider photos section (optional, if available)
- Ensure mobile-friendly layout
- Add SEO metadata

**Deliverables**:
- Complete about page
- Placeholder structure for provider info

**Estimated Time**: 1-2 hours

---

### Phase 7: Information / FAQs Page
**Goal**: Build information page with FAQs and PDF resources

**Tasks**:
- Create information page layout
- Add FAQ section (5 questions with placeholders)
- Add PDF resources section (3 PDFs)
- Ensure mobile-friendly layout
- Add SEO metadata

**Deliverables**:
- Complete information page
- FAQ structure
- PDF resource links

**Estimated Time**: 2-3 hours

---

### Phase 8: SEO & Accessibility Polish
**Goal**: Ensure all SEO and accessibility requirements are met

**Tasks**:
- Add meta descriptions to all pages
- Add Open Graph tags to all pages
- Generate sitemap.xml
- Create robots.txt
- Add JSON-LD structured data (LocalBusiness, MedicalOrganization)
- Verify all alt text is present
- Test keyboard navigation on all pages
- Test color contrast
- Test screen reader compatibility
- Verify skip links work

**Deliverables**:
- Complete SEO implementation
- Accessibility compliance verified

**Estimated Time**: 2-3 hours

---

### Phase 9: Testing & Quality Assurance
**Goal**: Comprehensive testing before deployment

**Tasks**:
- Test all pages on mobile devices
- Test all pages on desktop browsers
- Verify all links (internal and external)
- Test static export build
- Test with basePath configuration
- Verify assets load correctly
- Test keyboard navigation
- Test with screen reader
- Check color contrast
- Verify page load speeds
- Test in different browsers (Chrome, Firefox, Safari, Edge)

**Deliverables**:
- Test report
- Bug fixes (if any)

**Estimated Time**: 2-3 hours

---

### Phase 10: GitHub Pages Deployment Setup
**Goal**: Configure and document GitHub Pages deployment

**Tasks**:
- Create GitHub Actions workflow for deployment (or document manual process)
- Configure basePath in next.config.js
- Test deployment to GitHub Pages
- Verify all assets and links work in production
- Document deployment process

**Deliverables**:
- Working GitHub Pages deployment
- Deployment documentation

**Estimated Time**: 1-2 hours

---

## File and Folder Structure

```
simcoe-website/
├── .github/
│   └── workflows/
│       └── deploy.yml (GitHub Actions for deployment)
├── app/
│   ├── layout.tsx (Root layout with Header/Footer)
│   ├── page.tsx (Home page)
│   ├── about/
│   │   └── page.tsx (About Us page)
│   ├── contact/
│   │   └── page.tsx (Contact/Location page)
│   ├── forms/
│   │   └── page.tsx (Forms page)
│   ├── information/
│   │   └── page.tsx (Information/FAQs page)
│   └── globals.css (Global styles)
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Link.tsx
│   │   └── Section.tsx
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   └── content/
│       ├── Hero.tsx
│       ├── Mission.tsx
│       ├── Services.tsx
│       └── FAQ.tsx
├── lib/
│   ├── constants.ts (Clinic information, contact details)
│   └── content.ts (Page content, FAQs, etc.)
├── public/
│   ├── images/ (Logo, provider photos, etc.)
│   └── pdfs/ (PDF documents)
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
├── package.json
├── .gitignore
├── README.md
├── PRD.md
└── IMPLEMENTATION_PLAN.md
```

---

## Reusable Components List

### UI Primitives
1. **Button**
   - Variants: primary, secondary, outline
   - Sizes: small, medium, large
   - Accessible (keyboard, focus states)
   - Mobile-friendly touch targets

2. **Card**
   - Container for content sections
   - Consistent padding and spacing
   - Optional header/footer

3. **Link**
   - Internal and external link handling
   - Proper basePath support
   - Accessible (keyboard, focus states)

4. **Section**
   - Consistent section wrapper
   - Max-width container
   - Responsive padding

### Layout Components
5. **Header**
   - Logo/branding
   - Navigation menu
   - Mobile hamburger menu
   - Skip-to-content link

6. **Footer**
   - Contact information
   - Navigation links
   - Copyright information

7. **Navigation**
   - Desktop horizontal menu
   - Mobile dropdown menu
   - Keyboard accessible
   - Active state indicators

### Content Components
8. **Hero**
   - Large heading
   - Tagline
   - Primary CTA button
   - Responsive layout

9. **Mission**
   - Mission statement section
   - Clean typography

10. **Services**
    - Services list/grid
    - Brief descriptions

11. **FAQ**
    - Accordion or list format
    - Questions and answers
    - Accessible markup

---

## Content Strategy

### Content Organization
- **Centralized Constants**: All clinic information (name, address, phone, hours) in `lib/constants.ts`
- **Content File**: Page-specific content in `lib/content.ts` (FAQs, mission statement, etc.)
- **Easy Updates**: Content can be updated by modifying these files without touching components

### Content Files Structure

**lib/constants.ts**:
```typescript
export const CLINIC_NAME = "The Simcoe Clinic";
export const CLINIC_ADDRESS = "370 Bayview Dr, Barrie, ON L4N 7L3";
export const CLINIC_PHONE = "[Phone Number]"; // Placeholder
export const CLINIC_EMAIL = "[Email Address]"; // Placeholder
export const CLINIC_FAX = "[Fax Number]"; // Placeholder (optional)
export const CLINIC_HOURS = {
  weekdays: "9:00 AM – 4:00 PM",
  days: "Monday to Friday"
};
export const CLINIC_SPECIALTY = "Pain Intervention";
```

**lib/content.ts**:
```typescript
export const missionStatement = "...";
export const services = [...];
export const faqs = [...];
export const providers = [...];
export const forms = [...];
```

### Placeholder Strategy
- Use clear placeholders like `[Phone Number]`, `[Email Address]`
- Maintain content checklist in PRD.md
- Replace placeholders as content becomes available

---

## Deployment Approach for GitHub Pages

### Configuration
1. **next.config.js**:
   - Set `output: "export"` for static export
   - Set `basePath: "/simcoe-website"` (or repo name)
   - Set `assetPrefix: "/simcoe-website"` (or repo name)

2. **GitHub Pages Settings**:
   - Source: Deploy from `gh-pages` branch or `/docs` folder
   - Custom domain: Can be configured later if needed

### Deployment Options

**Option A: GitHub Actions (Recommended)**
- Create `.github/workflows/deploy.yml`
- Automatically build and deploy on push to main
- Deploy to `gh-pages` branch

**Option B: Manual Deployment**
- Run `npm run build` locally
- Copy `out/` folder contents to `gh-pages` branch
- Push to GitHub

### Build Scripts
```json
{
  "scripts": {
    "build": "next build",
    "export": "next build",
    "deploy": "npm run build && gh-pages -d out"
  }
}
```

### Verification Steps
1. Build locally and test with basePath
2. Deploy to GitHub Pages
3. Verify all assets load correctly
4. Test all internal links
5. Test on mobile devices
6. Verify SEO metadata

---

## Testing Checklist

### Functional Testing
- [ ] All pages load correctly
- [ ] All internal links work
- [ ] All external links work (open in new tab)
- [ ] Phone number links work (tel: links)
- [ ] Email links work (mailto: links)
- [ ] Map links work
- [ ] PDF links download/open correctly
- [ ] Navigation menu works on all pages
- [ ] Mobile menu opens/closes correctly
- [ ] Footer links work

### Responsive Testing
- [ ] Home page looks good on mobile (< 768px)
- [ ] Home page looks good on tablet (768px - 1024px)
- [ ] Home page looks good on desktop (> 1024px)
- [ ] All other pages responsive on all screen sizes
- [ ] No horizontal scrolling on any device
- [ ] Touch targets are appropriately sized (44x44px minimum)
- [ ] Text is readable without zooming

### Accessibility Testing
- [ ] Keyboard navigation works (Tab through all interactive elements)
- [ ] Focus states are visible on all focusable elements
- [ ] Skip-to-content link works
- [ ] All images have alt text
- [ ] Color contrast meets WCAG AA standards
- [ ] Screen reader can navigate site (test with NVDA/JAWS/VoiceOver)
- [ ] Semantic HTML is used correctly (headings, landmarks)
- [ ] Form elements (if any) are properly labeled

### SEO Testing
- [ ] Each page has unique title tag
- [ ] Each page has meta description
- [ ] Open Graph tags are present
- [ ] Structured data (JSON-LD) validates
- [ ] Sitemap.xml is generated and accessible
- [ ] Robots.txt is present and correct
- [ ] All pages are crawlable

### Performance Testing
- [ ] Page load time < 3 seconds on 3G
- [ ] Images are optimized
- [ ] No console errors
- [ ] Lighthouse score > 90 for Performance
- [ ] Lighthouse score > 90 for Accessibility
- [ ] Lighthouse score > 90 for Best Practices
- [ ] Lighthouse score > 90 for SEO

### Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### GitHub Pages Specific Testing
- [ ] Site works with basePath configuration
- [ ] All assets load correctly (images, CSS, JS)
- [ ] Internal links work with basePath
- [ ] External links work correctly
- [ ] No 404 errors
- [ ] Build completes successfully

### Content Verification
- [ ] All placeholders replaced with actual content
- [ ] Contact information is accurate
- [ ] Hours are correct
- [ ] Address is correct
- [ ] Emergency disclaimer is present
- [ ] All FAQs have answers
- [ ] All PDF links work

---

## Estimated Total Timeline

**Total Estimated Time**: 18-25 hours

**Breakdown**:
- Setup & Foundation: 2-3 hours
- Components & Design: 3-4 hours
- Home Page: 2-3 hours
- Contact Page: 2 hours
- Forms Page: 1-2 hours
- About Page: 1-2 hours
- Information Page: 2-3 hours
- SEO & Accessibility: 2-3 hours
- Testing & QA: 2-3 hours
- Deployment Setup: 1-2 hours

---

## Next Steps

1. Review PRD.md and this implementation plan
2. Confirm content checklist items
3. Begin Phase 1: Project Setup & Foundation
4. Proceed through phases sequentially
5. Update content checklist as placeholders are filled

---

## Document Version
- **Version**: 1.0
- **Date**: Initial creation
- **Status**: Ready for execution

