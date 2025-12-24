# The Simcoe Clinic Website

A professional, accessible website for The Simcoe Clinic, specializing in Pain Intervention in Barrie, Ontario.

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server (for testing)
npm start
```

The site will be available at `http://localhost:3000` (without basePath) or `http://localhost:3000/simcoe-website` (with basePath).

## 📁 Project Structure

```
simcoe-website/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── public/
│   ├── images/                 # Static images
│   ├── pdfs/                   # PDF documents
│   └── robots.txt              # Search engine instructions
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/              # About Us page
│   │   ├── contact/            # Contact page
│   │   ├── forms/              # Forms page
│   │   ├── information/        # Information/FAQs page
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   └── sitemap.ts          # Sitemap generation
│   ├── components/
│   │   ├── content/            # Content components
│   │   ├── layout/             # Layout components (Header, Footer)
│   │   └── ui/                 # UI primitives (Button, Card, etc.)
│   └── lib/
│       ├── constants.ts        # Clinic information constants
│       ├── content.ts           # Page content
│       └── utils.ts            # Utility functions
├── DEPLOYMENT.md               # Deployment guide
├── IMPLEMENTATION_PLAN.md      # Implementation plan
├── PRD.md                      # Project requirements document
├── TESTING_CHECKLIST.md        # Testing checklist
└── SITEMAP_AND_CONTENT_CHECKLIST.md  # Content checklist
```

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: GitHub Pages (static export)
- **Build Tool**: Next.js static export

## 📝 Content Management

Content is managed through centralized files:

- **`src/lib/constants.ts`**: Clinic information (name, address, phone, hours)
- **`src/lib/content.ts`**: Page content (mission, services, FAQs, providers, forms)

Update these files to change content without modifying components.

## 🚢 Deployment

### Automatic Deployment (GitHub Actions)

The site automatically deploys to GitHub Pages when you push to the `main` branch.

1. Enable GitHub Pages in repository settings
2. Select "GitHub Actions" as the source
3. Push to `main` branch
4. Site will be available at `https://[username].github.io/simcoe-website/`

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

### Manual Deployment

```bash
npm run build
# Then follow instructions in DEPLOYMENT.md
```

## ✅ Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Accessible (WCAG AA compliant)
- ✅ SEO optimized (meta tags, structured data, sitemap)
- ✅ Fast loading (optimized bundles)
- ✅ Static site generation
- ✅ GitHub Pages compatible

## 📄 Pages

- **Home** (`/`): Hero, mission, services, location snapshot
- **About Us** (`/about`): Provider information and clinic details
- **Contact** (`/contact`): Contact information, map, hours, emergency disclaimer
- **Forms** (`/forms`): Pre-visit forms and submission instructions
- **Information** (`/information`): FAQs and PDF resources

## 🎨 Design

- Clean, professional medical clinic aesthetic
- Light and airy color palette
- Calm, trustworthy design
- Accessible typography and spacing
- Consistent component library

## ♿ Accessibility

- Keyboard navigation support
- Screen reader compatible
- Focus indicators on all interactive elements
- Skip-to-content link
- Semantic HTML
- WCAG AA color contrast

## 🔍 SEO

- Meta descriptions on all pages
- Open Graph tags for social sharing
- JSON-LD structured data (MedicalBusiness schema)
- XML sitemap
- Robots.txt
- Clean, descriptive URLs

## 📚 Documentation

- [PRD.md](./PRD.md) - Project requirements document
- [IMPLEMENTATION_PLAN.md](./IMPLEMENTATION_PLAN.md) - Implementation plan
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Deployment guide
- [TESTING_CHECKLIST.md](./TESTING_CHECKLIST.md) - Testing checklist
- [SITEMAP_AND_CONTENT_CHECKLIST.md](./SITEMAP_AND_CONTENT_CHECKLIST.md) - Content checklist

## 🧪 Testing

See [TESTING_CHECKLIST.md](./TESTING_CHECKLIST.md) for comprehensive testing guidelines.

## 📝 License

Private project for The Simcoe Clinic.

---

**Built with ❤️ for The Simcoe Clinic**
