# Public Writer Tangier — KnownHouses.com

> **Multilingual professional public writing website for Tangier, Morocco.**
> Available in Arabic 🇲🇦, French 🇫🇷, English 🇬🇧, Spanish 🇪🇸

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [File Structure](#file-structure)
3. [GitHub Pages Deployment](#github-pages-deployment)
4. [SEO Guide](#seo-guide)
5. [Content Management](#content-management)
6. [Translation Management](#translation-management)
7. [WhatsApp Integration Guide](#whatsapp-integration-guide)
8. [Core Web Vitals Optimization](#core-web-vitals-optimization)
9. [Local SEO Strategy](#local-seo-strategy)
10. [Blog Management](#blog-management)

---

## 🎯 Project Overview

**Domain:** KnownHouses.com
**Service:** Professional Public Writer in Tangier, Morocco
**WhatsApp:** +212602321305
**Email:** salatrir@gmail.com

### Services Offered
- Administrative writing (requests, complaints, appeals)
- CV creation and redesign
- Document translation (AR ↔ FR ↔ EN ↔ ES)
- Legal & document preparation
- Immigration & visa assistance
- Business correspondence
- Digital document services

### Target Audience
- Tangier residents needing administrative help
- Foreign residents and expats in Morocco
- Tourists visiting Tangier
- International clients needing Moroccan document assistance

---

## 📁 File Structure

```
public-writer-tangier/
├── index.html          # Main homepage (multilingual SPA)
├── style.css           # Complete stylesheet (RTL + LTR)
├── app.js              # Main application logic + rendering
├── translations.js     # All 4-language translation strings
├── services.js         # Services data + rendering functions
├── blog.js             # 230 blog articles metadata
├── sitemap.xml         # XML sitemap (all pages + blog)
├── robots.txt          # Search engine crawl instructions
├── manifest.json       # PWA web app manifest
├── service-worker.js   # Offline caching service worker
├── seo.json            # SEO reference data & checklist
├── .gitignore          # Git ignore file
├── README.md           # This file
└── icons/              # PWA icons (generate separately)
    ├── icon-72.png
    ├── icon-96.png
    ├── icon-128.png
    ├── icon-192.png
    └── icon-512.png
```

---

## 🚀 GitHub Pages Deployment

### Step 1 — Create GitHub Repository

```bash
# Go to github.com and create new repository named:
# public-writer-tangier

# Then clone locally
git clone https://github.com/YOUR_USERNAME/public-writer-tangier.git
cd public-writer-tangier
```

### Step 2 — Copy Project Files

Copy all project files into the cloned repository folder.

### Step 3 — Generate PWA Icons

Before deploying, generate the required icon files. You can use:
- **RealFaviconGenerator**: https://realfavicongenerator.net
- **PWA Asset Generator**: `npx pwa-asset-generator icon-source.png icons/`

Use an image of a pen or writing symbol (✍️) as the source.

### Step 4 — Push to GitHub

```bash
git add .
git commit -m "Initial deployment — Public Writer Tangier"
git push origin main
```

### Step 5 — Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **Deploy from a branch**
4. Choose `main` branch, `/ (root)` folder
5. Click **Save**

Your site will be live at:
`https://YOUR_USERNAME.github.io/public-writer-tangier/`

### Step 6 — Custom Domain (KnownHouses.com)

1. In GitHub Pages settings, enter your custom domain
2. Create a `CNAME` file in root with content: `knownhouses.com`
3. In your DNS provider, add:
   ```
   Type: CNAME
   Name: www (or subdomain)
   Value: YOUR_USERNAME.github.io
   ```
4. Enable **Enforce HTTPS** in GitHub Pages settings

### Step 7 — Update URLs

After setting custom domain, update these files:
- `sitemap.xml` — replace all `https://knownhouses.com/public-writer-tangier/` URLs
- `index.html` — update canonical and hreflang URLs
- `seo.json` — update `base_url` field

---

## 🔍 SEO Guide

### On-Page SEO Implemented

| Feature | Status |
|---------|--------|
| Multilingual meta tags (AR/FR/EN/ES) | ✅ |
| Hreflang tags | ✅ |
| Canonical URLs | ✅ |
| Open Graph tags | ✅ |
| Twitter/X Cards | ✅ |
| Schema.org LocalBusiness | ✅ |
| Schema.org ProfessionalService | ✅ |
| FAQ Schema | ✅ |
| Review/AggregateRating Schema | ✅ |
| Geo meta tags | ✅ |
| Sitemap.xml | ✅ |
| Robots.txt | ✅ |
| Mobile-first design | ✅ |
| RTL support (Arabic) | ✅ |
| PWA manifest | ✅ |
| Service Worker caching | ✅ |

### Keyword Strategy

**Arabic (Primary):**
- كاتب عمومي طنجة *(high intent)*
- خدمات الكتابة العمومية طنجة
- كتابة الطلبات الإدارية
- ترجمة الوثائق طنجة
- سيرة ذاتية احترافية طنجة

**French (Strong secondary):**
- écrivain public Tanger
- services administratifs Tanger
- traduction de documents Tanger
- CV professionnel Tanger

**English (International):**
- public writer Tangier
- administrative assistance Morocco
- document translation Tangier

**Spanish (Proximity market):**
- escritor público Tánger
- servicios administrativos Marruecos
- traducción documentos Tánger

### Local SEO Actions

1. **Google Business Profile** — Create/claim at business.google.com
   - Name: كاتب عمومي طنجة | Écrivain Public Tanger
   - Category: Writer / Administrative Services
   - Phone: +212602321305
   - Address: Tanger, Maroc

2. **Bing Places** — Register at bingplaces.com

3. **Local Directories** — Submit to:
   - Maroc Annuaire
   - Yelo.ma
   - Morocco Yellow Pages

4. **Citations** — Ensure NAP (Name, Address, Phone) consistency everywhere.

### Important SEO Notes

- This site implements all recognized SEO best practices
- Rankings depend on many factors including competition, backlinks, and content quality
- **First-page rankings are not guaranteed**
- Consistent content updates via the blog are essential for growth

---

## ✏️ Content Management

### Updating Text Content

All user-facing text lives in `translations.js`. To update any text:

```javascript
// Example: Change the Arabic hero headline
ar: {
  hero: {
    headline: "YOUR NEW HEADLINE HERE",
    // ...
  }
}
```

### Adding a New Service

1. Open `translations.js`
2. Add to the `services` object in each language section:

```javascript
services: {
  // ... existing services
  myNewService: {
    title: "New Service Name",
    desc: "Service description",
    items: ["Item 1", "Item 2", "Item 3"]
  }
}
```

3. Open `services.js`
4. Add metadata to `SERVICES_DATA`:

```javascript
myNewService: {
  slug: "my-new-service",
  icon: "🆕",
  color: "#your-color",
  seo: {
    ar: { title: "...", description: "..." },
    fr: { title: "...", description: "..." },
    en: { title: "...", description: "..." },
    es: { title: "...", description: "..." }
  }
}
```

### Updating Testimonials

In `translations.js`, find the `testimonials.items` array for each language:

```javascript
testimonials: {
  items: [
    { name: "Client Name", text: "Testimonial text here.", stars: 5 },
    // add more...
  ]
}
```

### Updating FAQ

In `translations.js`, find the `faq.items` array:

```javascript
faq: {
  items: [
    { q: "Question?", a: "Answer here." },
    // add more...
  ]
}
```

---

## 🌐 Translation Management

### Adding a New Language

1. In `translations.js`, add a new language key:

```javascript
const TRANSLATIONS = {
  ar: { /* Arabic */ },
  fr: { /* French */ },
  en: { /* English */ },
  es: { /* Spanish */ },
  // Add new language:
  pt: {
    dir: "ltr",
    lang: "pt",
    meta: {
      title: "Escritor Público Tânger | Serviços Administrativos",
      description: "...",
      keywords: "..."
    },
    nav: { home: "Início", services: "Serviços", /* ... */ },
    // Complete all sections...
  }
};
```

2. In `app.js`, add the new language to the lang switcher array:
   - Find `['ar','fr','en','es']` and add your new lang code.

3. In `index.html`, add hreflang link:
```html
<link rel="alternate" hreflang="pt" href="https://knownhouses.com/public-writer-tangier/?lang=pt">
```

4. In `sitemap.xml`, add URL variants for the new language.

### Modifying Existing Translations

Each translation is organized by sections:
- `meta` — SEO meta tags
- `nav` — Navigation labels
- `hero` — Hero section
- `services_section` — Services section header
- `services` — Individual service names and descriptions
- `testimonials` — Client testimonials
- `faq` — Frequently asked questions
- `process` — How-it-works steps
- `contact` — Contact page
- `footer` — Footer content

---

## 📱 WhatsApp Integration Guide

### WhatsApp Number
```
+212602321305
wa.me URL: https://wa.me/212602321305
```

### WhatsApp Appears On
✅ Header navigation
✅ Hero section (main CTA)
✅ All service cards
✅ FAQ section links
✅ Contact page (primary CTA)
✅ Footer
✅ Floating button (all pages)

### Pre-filled Messages

Messages are pre-filled based on the current language. To customize them, edit `app.js`:

```javascript
function getHeroWAMsg(lang) {
  const msgs = {
    ar: 'مرحباً، أريد الاستفسار عن خدمات الكاتب العمومي في طنجة',
    fr: 'Bonjour, je souhaite me renseigner sur vos services à Tanger',
    en: 'Hello, I\'d like to inquire about your services in Tangier',
    es: 'Hola, me gustaría consultar sobre sus servicios en Tánger'
  };
  return msgs[lang] || msgs.en;
}
```

### Service-Specific Messages

When a user clicks a service card CTA, the WhatsApp message includes the service name. This is handled in `services.js`:

```javascript
function getWhatsAppMessage(lang, serviceName) {
  // Returns language-appropriate message mentioning the service
}
```

### Contact Form → WhatsApp

When the contact form is submitted, it generates a formatted WhatsApp message with:
- Client's name
- Selected service
- Message/description

This is handled by `submitContactForm()` in `app.js`.

---

## ⚡ Core Web Vitals Optimization

### LCP (Largest Contentful Paint) — Target: < 2.5s
- ✅ Fonts preloaded with `rel="preconnect"`
- ✅ CSS inlined for critical styles via `<style>` for skip link
- ✅ Hero section renders immediately via JavaScript
- ✅ No render-blocking resources

**Further actions:**
- Host fonts locally (download from Google Fonts)
- Add `loading="lazy"` to below-fold images
- Compress and serve images in WebP format

### FID / INP (Interaction) — Target: < 100ms
- ✅ Vanilla JavaScript, no heavy frameworks
- ✅ Event listeners added efficiently
- ✅ Animations use CSS transforms (GPU-accelerated)

### CLS (Cumulative Layout Shift) — Target: < 0.1
- ✅ All sections have defined heights/structure
- ✅ Fonts use `font-display: swap` equivalent via Google Fonts
- ✅ No dynamically inserted ads or banners

### Additional Performance
- ✅ Service Worker caches all assets
- ✅ Minimal JavaScript bundle
- ✅ Efficient CSS custom properties
- ✅ IntersectionObserver for lazy animations

---

## 📍 Local SEO Strategy

### Google Business Profile Setup

1. Go to https://business.google.com
2. Search for your business
3. Create/claim the listing:
   - **Business Name:** كاتب عمومي طنجة | Écrivain Public Tanger
   - **Category:** Administrative Services / Writer
   - **Phone:** +212602321305
   - **Website:** https://knownhouses.com/public-writer-tangier/
4. Add photos of your workspace and services
5. Respond to all reviews promptly
6. Post weekly updates

### NAP Consistency

Always use EXACTLY this format:
```
Name: كاتب عمومي طنجة — Écrivain Public Tanger — KnownHouses.com
Address: Tanger, Maroc 90000
Phone: +212602321305
```

### Local Keywords to Target

| Language | Priority Keywords |
|----------|------------------|
| Arabic | كاتب عمومي طنجة، خدمات إدارية طنجة |
| French | écrivain public Tanger, services administratifs Tanger |
| English | public writer Tangier, administrative help Morocco |
| Spanish | escritor público Tánger, trámites Marruecos |

---

## 📝 Blog Management

### Current Blog Content

| Language | Articles |
|----------|----------|
| Arabic (العربية) | 100 |
| French (Français) | 50 |
| English | 50 |
| Spanish (Español) | 30 |
| **Total** | **230** |

### Adding New Blog Articles

In `blog.js`, find the appropriate language array and add:

```javascript
{ 
  id: "ar-101",               // unique ID
  slug: "your-article-slug",  // URL-friendly, no spaces
  title: "عنوان المقال",      // Article title
  excerpt: "وصف قصير للمقال", // Short description
  category: "admin",          // See categories below
  readTime: 7                 // Estimated read time in minutes
}
```

### Blog Categories

| Code | Arabic | French | English | Spanish |
|------|--------|--------|---------|---------|
| `admin` | إداري | Administratif | Administrative | Administrativo |
| `employment` | توظيف | Emploi | Employment | Empleo |
| `translation` | ترجمة | Traduction | Translation | Traducción |
| `immigration` | هجرة | Immigration | Immigration | Inmigración |
| `legal` | قانوني | Juridique | Legal | Legal |
| `business` | أعمال | Entreprise | Business | Empresas |
| `digital` | رقمي | Numérique | Digital | Digital |
| `tangier` | طنجة | Tanger | Tangier | Tánger |
| `general` | عام | Général | General | General |

### Creating Individual Blog Post Pages

For each article, create an HTML file at `blog/[slug].html`:

```html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <title>[Article Title] — كاتب عمومي طنجة</title>
  <meta name="description" content="[Article excerpt]">
  <link rel="canonical" href="https://knownhouses.com/public-writer-tangier/blog/[slug].html">
  <!-- Schema Article markup -->
  <script type="application/ld+json">
  {
    "@type": "Article",
    "headline": "[Title]",
    "description": "[Excerpt]",
    "author": {"@type": "Person", "name": "Écrivain Public Tanger"},
    "publisher": {"@type": "Organization", "name": "KnownHouses.com"}
  }
  </script>
</head>
<body>
  <!-- Include header, nav, article content, footer -->
  <!-- Add WhatsApp CTA at end of every article -->
</body>
</html>
```

### SEO Best Practices for Blog Posts

1. **Use the slug as the URL** — clean, descriptive, keyword-rich
2. **Title tag** — Include primary keyword near the start
3. **Meta description** — 150-160 characters, action-oriented
4. **H1** — One per page, matches title intent
5. **Internal links** — Link to relevant service pages
6. **WhatsApp CTA** — Include at end of every post
7. **Schema markup** — Article schema on every post
8. **Images** — Add alt text in the correct language
9. **Word count** — Aim for 800+ words per post

---

## 📊 Analytics Setup

### Google Analytics 4

Add before `</head>` in `index.html`:

```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Track WhatsApp Clicks

Add to `app.js` or inline:

```javascript
// Track WhatsApp click events
document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
  link.addEventListener('click', () => {
    gtag('event', 'whatsapp_click', {
      event_category: 'engagement',
      event_label: document.documentElement.getAttribute('data-lang')
    });
  });
});
```

### Google Search Console

1. Go to https://search.google.com/search-console
2. Add property: `https://knownhouses.com/public-writer-tangier/`
3. Verify ownership (HTML tag method)
4. Submit sitemap: `https://knownhouses.com/public-writer-tangier/sitemap.xml`
5. Monitor performance weekly

---

## 🔧 Maintenance Checklist

### Monthly
- [ ] Add 5+ new blog articles per language
- [ ] Review and update FAQ based on common questions
- [ ] Check Google Search Console for errors
- [ ] Respond to all Google Business reviews
- [ ] Update testimonials with new client feedback

### Quarterly
- [ ] Audit all internal links
- [ ] Check Core Web Vitals in PageSpeed Insights
- [ ] Update sitemap with new blog articles
- [ ] Review keyword rankings
- [ ] Update WhatsApp pre-filled messages if needed

### Yearly
- [ ] Full content audit
- [ ] Design refresh if needed
- [ ] Schema markup update for new services
- [ ] Competitor analysis

---

## 📞 Contact & Support

**WhatsApp:** +212602321305
**Email:** salatrir@gmail.com
**Domain:** KnownHouses.com

---

*Generated by Claude (Anthropic) — Production-ready multilingual SEO website for Public Writer Tangier, Morocco.*

*© KnownHouses.com — All rights reserved*
