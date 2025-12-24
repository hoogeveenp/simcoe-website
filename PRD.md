# Project Requirements Document (PRD)
## The Simcoe Clinic Website

---

## 1. Goals and Non-Goals

### Goals
- Create a professional, trustworthy, and accessible website for The Simcoe Clinic
- Provide clear information about clinic services, location, hours, and contact methods
- Enable patients to easily access pre-visit forms and informational resources
- Support patient conversion through clear call-to-action (phone/email/appointment requests)
- Ensure the site is fully accessible, mobile-optimized, and SEO-friendly
- Deploy as a static site on GitHub Pages with no backend dependencies

### Non-Goals
- Online appointment booking system (booking via phone/email only)
- Backend services or server-side APIs
- Patient portal or authenticated user areas
- Storage of patient health information (PHI)
- E-commerce or payment processing
- Real-time chat or messaging features
- Blog or content management system

---

## 2. Primary Users

### User Personas
1. **New Patients**
   - Seeking pain intervention services
   - Need to understand clinic services, location, and how to book
   - May need to download pre-visit forms

2. **Existing Patients**
   - Returning for follow-up appointments
   - Need to access forms or informational resources
   - May need to update contact information or check hours

3. **Caregivers/Family Members**
   - Assisting patients with appointment scheduling
   - Need clear, simple navigation and information

4. **Referring Physicians**
   - May need referral information or clinic contact details
   - May need to access physician referral resources

### User Needs
- Quick access to contact information (phone, address, hours)
- Clear understanding of services offered
- Easy access to required forms before visits
- Mobile-friendly experience
- Accessible design for users with varying abilities

---

## 3. Site Map

### Pages Structure

1. **Home (`/`)**
   - Hero section: Clinic name, tagline, primary CTA (Call button)
   - Mission statement / Welcome message
   - Services overview (brief)
   - Location + hours snapshot
   - Footer with contact info

2. **Forms (`/forms`)**
   - Description of pre-visit forms
   - Links to downloadable PDFs or hosted form links
   - Instructions for form submission

3. **About Us (`/about`)**
   - Provider bios (when provided)
   - Provider photos (optional)
   - Clinic history/mission (if available)

4. **Contact / Location (`/contact`)**
   - Full address with map link
   - Hours of operation
   - Phone number (clickable)
   - Email address (mailto link)
   - Fax number (if applicable)
   - Emergency disclaimer

5. **Information / FAQs (`/information`)**
   - 5 frequently asked questions
   - 3 PDF documents:
     - Constipation information
     - Pain Terminology and Pathways
     - Physician Referral information
   - Additional resources (if any)

---

## 4. Content Requirements Per Page

### Home Page
- **Hero**: "The Simcoe Clinic" heading, tagline (e.g., "Specializing in Pain Intervention"), primary CTA button (Call)
- **Mission Statement**: Brief, patient-friendly description of clinic purpose
- **Services Snapshot**: Short list of services (pain intervention focus)
- **Location Snapshot**: Address, hours summary
- **Footer**: Full contact information, navigation links

### Forms Page
- **Introduction**: Explanation of pre-visit forms and why they're needed
- **Form Links**: List of available forms with download/external links
- **Instructions**: How to submit completed forms

### About Us Page
- **Provider Information**: Names, titles, bios (when provided)
- **Provider Photos**: Optional, if available
- **Clinic Information**: Mission, values, or history (if available)

### Contact / Location Page
- **Address**: 370 Bayview Dr, Barrie, ON L4N 7L3
- **Map Link**: Google Maps or similar
- **Hours**: 9:00 AM – 4:00 PM, Monday to Friday
- **Phone**: Clickable phone number
- **Email**: Mailto link
- **Fax**: If applicable
- **Emergency Disclaimer**: "If this is a medical emergency, call 911 or go to the nearest emergency department."

### Information / FAQs Page
- **5 FAQs**: Common questions about services, appointments, insurance, etc.
- **PDF Resources**:
  - Constipation information PDF
  - Pain Terminology and Pathways PDF
  - Physician Referral PDF
- **Additional Resources**: Any other informational content

---

## 5. Design Direction

### Visual Style
- **Palette**: Light and airy
  - Primary: Soft, professional colors (suggest: soft blues, teals, or neutral grays)
  - Background: White or very light neutral
  - Accents: Gentle, calming colors
  - Text: High contrast dark gray/black on light backgrounds

- **Feeling**: Calm, safe, relaxing, professional
- **Aesthetic**: Modern clinic design
  - Generous white space
  - Soft accents (no harsh borders)
  - Gentle typography (readable, professional fonts)
  - Clean, minimal layouts

### UI Patterns
- Simple navigation (header menu, footer links)
- Clear call-to-action buttons (primary: Call, secondary: Email/Directions)
- Card-based sections for content organization
- Consistent spacing and typography hierarchy
- Mobile-first responsive design

### Avoid
- Harsh contrasts
- Heavy borders
- Loud or aggressive colors
- Cluttered layouts
- Complex animations or interactions

---

## 6. Technical Constraints

### Static Export Requirements
- Next.js App Router with static generation only
- `output: "export"` in `next.config.js`
- No server-side features (no API routes, no server components that require runtime)
- All pages must be statically generated at build time

### GitHub Pages Compatibility
- Must support `basePath` configuration (e.g., `/simcoe-website`)
- Must support `assetPrefix` for correct asset loading
- All internal links must work under subpath deployment
- Images and assets must be properly referenced

### Technology Stack
- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Deployment**: GitHub Pages (static hosting)
- **Package Manager**: npm or yarn (to be determined)

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers

---

## 7. Accessibility Requirements

### WCAG Compliance
- Target: WCAG 2.1 Level AA where possible
- Color contrast: Minimum 4.5:1 for normal text, 3:1 for large text
- Keyboard navigation: All interactive elements must be keyboard accessible
- Focus indicators: Visible focus states on all focusable elements

### Implementation Requirements
- **Semantic HTML**: Proper use of headings, landmarks, lists
- **Keyboard Navigation**: Full site navigable via keyboard (Tab, Enter, Esc)
- **Focus States**: Clear visual indicators for focused elements
- **Alt Text**: Descriptive alt text for all meaningful images
- **Skip Links**: Skip-to-content link for keyboard users
- **Form Labels**: All form elements properly labeled (if forms are added)
- **ARIA**: Use ARIA labels where semantic HTML is insufficient
- **Screen Readers**: Test with screen reader compatibility in mind

### Mobile Optimization
- **Responsive Design**: All pages must be fully functional on mobile devices
- **Touch Targets**: Minimum 44x44px for touch interactions
- **Readable Text**: No horizontal scrolling, appropriate font sizes
- **Fast Loading**: Optimized images and assets for mobile networks

---

## 8. SEO Requirements

### On-Page SEO
- **Page Titles**: Descriptive, unique titles for each page (include clinic name and page topic)
- **Meta Descriptions**: Compelling, unique descriptions (150-160 characters)
- **Heading Structure**: Proper H1-H6 hierarchy (one H1 per page)
- **URL Structure**: Clean, descriptive URLs (`/contact`, `/about`, etc.)

### Open Graph & Social
- **Open Graph Tags**: Title, description, image for social sharing
- **Twitter Card**: Basic summary card support

### Technical SEO
- **Sitemap**: Static XML sitemap generation
- **Robots.txt**: Allow all crawlers, reference sitemap
- **Structured Data**: JSON-LD schema markup
  - LocalBusiness schema (address, hours, phone)
  - MedicalOrganization schema (specialty, services)

### Local SEO
- **Location Keywords**: "Barrie, Ontario", "pain intervention", "The Simcoe Clinic"
- **NAP Consistency**: Name, Address, Phone consistent across all pages
- **Local Business Schema**: Proper structured data for local search

---

## 9. Success Criteria

### Functional Requirements
- ✅ All pages load correctly under GitHub Pages basePath
- ✅ All links (internal and external) work correctly
- ✅ Contact information is accessible on every page (header/footer)
- ✅ Forms page provides access to all required pre-visit forms
- ✅ Mobile layout is fully functional and readable
- ✅ Navigation is keyboard accessible
- ✅ Site loads quickly (< 3 seconds on 3G)

### Content Requirements
- ✅ All clinic information is accurate and up-to-date
- ✅ Emergency disclaimer present on Contact page
- ✅ All placeholders are replaced with actual content
- ✅ FAQs are helpful and address common patient questions

### Quality Requirements
- ✅ No broken links or missing assets
- ✅ All images have appropriate alt text
- ✅ Color contrast meets WCAG AA standards
- ✅ SEO metadata is present on all pages
- ✅ Structured data validates correctly

### User Experience
- ✅ Clear call-to-action on Home page (Call button)
- ✅ Contact information is easy to find
- ✅ Forms are easy to locate and access
- ✅ Site feels professional and trustworthy
- ✅ Navigation is intuitive for users of all ages

---

## 10. Out of Scope Items

### Explicitly Out of Scope
- Online appointment booking system
- Patient portal or login system
- Backend services or databases
- Email forms or contact forms (mailto links only)
- Real-time chat or messaging
- Blog or news section
- Multi-language support
- Patient reviews or testimonials section
- Integration with external booking systems
- Analytics implementation (can be added later)
- Cookie consent (if not required by law)

### Future Considerations (Not in Initial Build)
- Provider scheduling availability
- Online form submission (currently download-only)
- Patient education blog
- Video content or virtual tour
- Social media integration

---

## 11. Content Checklist (Items Needing User Input)

### Required Information
- [ ] **Phone Number**: Contact phone number for clinic
- [ ] **Email Address**: Contact email address
- [ ] **Fax Number**: If applicable
- [ ] **Provider Names**: Names of providers at the clinic
- [ ] **Provider Titles**: Professional titles (e.g., MD, DO, NP)
- [ ] **Provider Bios**: Brief biographical information for each provider
- [ ] **Provider Photos**: Optional photos of providers
- [ ] **Clinic Logo**: If available, logo file for header
- [ ] **Mission Statement**: Brief statement about clinic mission/values
- [ ] **Services List**: Detailed list of services offered (beyond "pain intervention")
- [ ] **5 FAQs**: Questions and answers for Information page
- [ ] **Form Links**: URLs or file paths for pre-visit forms
- [ ] **PDF Documents**: 
  - [ ] Constipation information PDF
  - [ ] Pain Terminology and Pathways PDF
  - [ ] Physician Referral PDF
- [ ] **Insurance Information**: Accepted insurance plans (if applicable)
- [ ] **Payment Information**: Payment methods accepted
- [ ] **Cancellation Policy**: Policy for appointment cancellations
- [ ] **Referral Policy**: Information about referrals

### Optional Information
- [ ] Clinic history or background
- [ ] Testimonials or patient stories (if desired)
- [ ] Additional resources or educational content
- [ ] Social media links (if applicable)

---

## 12. Risk Mitigation

### Technical Risks
- **GitHub Pages basePath issues**: Test thoroughly with basePath configuration
- **Static export limitations**: Ensure no dynamic features are used
- **Image optimization**: Use Next.js Image component with static export compatibility

### Content Risks
- **Missing information**: Use clear placeholders and content checklist
- **Medical disclaimers**: Include appropriate disclaimers on Contact page
- **Accessibility compliance**: Regular testing with accessibility tools

### Deployment Risks
- **Build failures**: Ensure all dependencies are compatible with static export
- **Asset loading**: Verify all assets load correctly under basePath
- **Link validation**: Test all internal and external links

---

## Document Version
- **Version**: 1.0
- **Date**: Initial creation
- **Status**: Ready for implementation planning

