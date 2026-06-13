// app.js — Public Writer Tangier
// KnownHouses.com

(function () {
  'use strict';

  const WHATSAPP_NUMBER = '212602321305';
  const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
  const DEFAULT_LANG = 'ar';
  const STORAGE_KEY = 'pw_tanger_lang';

  // ── Language Management ──────────────────────────────
  function getStoredLang() {
    try { return localStorage.getItem(STORAGE_KEY) || detectBrowserLang(); }
    catch (e) { return DEFAULT_LANG; }
  }

  function detectBrowserLang() {
    const nav = (navigator.language || navigator.userLanguage || '').toLowerCase();
    if (nav.startsWith('ar')) return 'ar';
    if (nav.startsWith('fr')) return 'fr';
    if (nav.startsWith('es')) return 'es';
    if (nav.startsWith('en')) return 'en';
    return DEFAULT_LANG;
  }

  function setLang(lang) {
    if (!TRANSLATIONS[lang]) return;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    applyLanguage(lang);
  }

  function applyLanguage(lang) {
    const t = TRANSLATIONS[lang];
    document.documentElement.lang = t.lang;
    document.documentElement.dir = t.dir;
    document.documentElement.setAttribute('data-lang', lang);

    // Update meta
    document.title = t.meta.title;
    setMeta('description', t.meta.description);
    setMeta('keywords', t.meta.keywords);
    setOG('og:title', t.meta.title);
    setOG('og:description', t.meta.description);

    // Update body font class
    document.body.classList.remove('lang-ar', 'lang-fr', 'lang-en', 'lang-es');
    document.body.classList.add(`lang-${lang}`);

    // Render sections
    renderNav(lang, t);
    renderHero(lang, t);
    renderServices(lang, t);
    renderProcess(lang, t);
    renderTestimonials(lang, t);
    renderFAQ(lang, t);
    renderContact(lang, t);
    renderFooter(lang, t);
    renderBlog(lang);
    renderFloatingWA(lang, t);
    updateLangSwitcher(lang);
  }

  function setMeta(name, content) {
    let el = document.querySelector(`meta[name="${name}"]`);
    if (!el) { el = document.createElement('meta'); el.name = name; document.head.appendChild(el); }
    el.content = content;
  }

  function setOG(property, content) {
    let el = document.querySelector(`meta[property="${property}"]`);
    if (!el) { el = document.createElement('meta'); el.setAttribute('property', property); document.head.appendChild(el); }
    el.content = content;
  }

  // ── Render Functions ─────────────────────────────────
  function renderNav(lang, t) {
    const nav = document.getElementById('main-nav');
    if (!nav) return;
    nav.innerHTML = `
      <div class="nav__logo">
        <a href="index.html">
          <span class="nav__logo-icon">✍️</span>
          <span class="nav__logo-text">
            <span class="nav__logo-primary">${lang === 'ar' ? 'كاتب عمومي' : lang === 'fr' ? 'Écrivain Public' : lang === 'es' ? 'Escritor Público' : 'Public Writer'}</span>
            <span class="nav__logo-sub">${lang === 'ar' ? 'طنجة' : 'Tanger'}</span>
          </span>
        </a>
      </div>
      <nav class="nav__links" id="nav-links" aria-label="Main navigation">
        <a href="#hero" class="nav__link">${t.nav.home}</a>
        <a href="#services" class="nav__link">${t.nav.services}</a>
        <a href="#blog" class="nav__link">${t.nav.blog}</a>
        <a href="#contact" class="nav__link">${t.nav.contact}</a>
        <a href="${WHATSAPP_URL}" class="nav__link nav__link--wa" target="_blank" rel="noopener">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          ${t.nav.whatsapp}
        </a>
      </nav>
      <div class="nav__lang" id="lang-switcher" role="navigation" aria-label="Language selector">
        ${['ar','fr','en','es'].map(l => `
          <button class="lang-btn${l === lang ? ' lang-btn--active' : ''}" onclick="window.PWT.setLang('${l}')" aria-label="Switch to ${l}" aria-current="${l === lang ? 'true' : 'false'}">${l.toUpperCase()}</button>
        `).join('')}
      </div>
      <button class="nav__menu-toggle" id="menu-toggle" aria-expanded="false" aria-controls="nav-links" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    `;

    // Mobile menu toggle
    const toggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    if (toggle && navLinks) {
      toggle.addEventListener('click', () => {
        const open = navLinks.classList.toggle('nav__links--open');
        toggle.setAttribute('aria-expanded', open);
      });
    }
  }

  function renderHero(lang, t) {
    const hero = document.getElementById('hero');
    if (!hero) return;
    const h = t.hero;
    hero.innerHTML = `
      <div class="hero__bg" aria-hidden="true">
        <div class="hero__bg-pattern"></div>
        <div class="hero__bg-overlay"></div>
      </div>
      <div class="hero__content container">
        <span class="hero__badge">${h.badge}</span>
        <h1 class="hero__headline">${h.headline.replace('\n', '<br>')}</h1>
        <p class="hero__sub">${h.subheadline}</p>
        <div class="hero__actions">
          <a href="${WHATSAPP_URL}?text=${encodeURIComponent(getHeroWAMsg(lang))}"
             class="btn btn--wa btn--lg" target="_blank" rel="noopener">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            ${h.cta_primary}
          </a>
          <a href="#services" class="btn btn--outline btn--lg">${h.cta_secondary}</a>
        </div>
        <div class="hero__trust">
          <span class="hero__trust-badge">✓ ${h.trust}</span>
        </div>
      </div>
      <div class="hero__scroll-hint" aria-hidden="true">
        <span class="hero__scroll-icon">↓</span>
      </div>
    `;
  }

  function getHeroWAMsg(lang) {
    const msgs = {
      ar: 'مرحباً، أريد الاستفسار عن خدمات الكاتب العمومي في طنجة',
      fr: 'Bonjour, je souhaite me renseigner sur vos services d\'écrivain public à Tanger',
      en: 'Hello, I\'d like to inquire about your public writing services in Tangier',
      es: 'Hola, me gustaría consultar sobre sus servicios de escritor público en Tánger'
    };
    return msgs[lang] || msgs.en;
  }

  function renderServices(lang, t) {
    const section = document.getElementById('services');
    if (!section) return;
    const st = t.services_section;
    section.innerHTML = `
      <div class="container">
        <header class="section-header">
          <h2 class="section-title">${st.title}</h2>
          <p class="section-subtitle">${st.subtitle}</p>
        </header>
        <div class="services-grid" id="services-grid">
          ${typeof renderServicesGrid === 'function' ? renderServicesGrid(lang) : ''}
        </div>
        <div class="services__cta">
          <a href="${WHATSAPP_URL}?text=${encodeURIComponent(getHeroWAMsg(lang))}" class="btn btn--wa btn--lg" target="_blank" rel="noopener">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            ${lang === 'ar' ? 'تواصل معنا الآن' : lang === 'fr' ? 'Contactez-nous maintenant' : lang === 'es' ? 'Contáctenos ahora' : 'Contact Us Now'}
          </a>
        </div>
      </div>
    `;
  }

  function renderProcess(lang, t) {
    const section = document.getElementById('process');
    if (!section) return;
    const p = t.process;
    section.innerHTML = `
      <div class="container">
        <header class="section-header">
          <h2 class="section-title">${p.title}</h2>
        </header>
        <ol class="process-steps" role="list">
          ${p.steps.map((step, i) => `
            <li class="process-step" data-step="${i + 1}">
              <div class="process-step__num" aria-hidden="true">${step.num}</div>
              <div class="process-step__content">
                <h3 class="process-step__title">${step.title}</h3>
                <p class="process-step__desc">${step.desc}</p>
              </div>
            </li>
          `).join('')}
        </ol>
      </div>
    `;
  }

  function renderTestimonials(lang, t) {
    const section = document.getElementById('testimonials');
    if (!section) return;
    const test = t.testimonials;
    section.innerHTML = `
      <div class="container">
        <header class="section-header">
          <h2 class="section-title">${test.title}</h2>
        </header>
        <div class="testimonials-grid">
          ${test.items.map(item => `
            <blockquote class="testimonial-card" itemscope itemtype="https://schema.org/Review">
              <div class="testimonial-card__stars" aria-label="${item.stars} stars">
                ${'★'.repeat(item.stars)}
              </div>
              <p class="testimonial-card__text" itemprop="reviewBody">"${item.text}"</p>
              <footer class="testimonial-card__author" itemprop="author" itemscope itemtype="https://schema.org/Person">
                <cite itemprop="name">${item.name}</cite>
              </footer>
            </blockquote>
          `).join('')}
        </div>
      </div>
    `;
  }

  function renderFAQ(lang, t) {
    const section = document.getElementById('faq');
    if (!section) return;
    const faq = t.faq;
    section.innerHTML = `
      <div class="container">
        <header class="section-header">
          <h2 class="section-title">${faq.title}</h2>
        </header>
        <div class="faq-list" itemscope itemtype="https://schema.org/FAQPage">
          ${faq.items.map((item, i) => `
            <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <button class="faq-item__question" aria-expanded="false" aria-controls="faq-ans-${i}" onclick="toggleFAQ(this)">
                <span itemprop="name">${item.q}</span>
                <span class="faq-item__icon" aria-hidden="true">+</span>
              </button>
              <div class="faq-item__answer" id="faq-ans-${i}" hidden itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <p itemprop="text">${item.a}</p>
                <a href="${WHATSAPP_URL}" class="faq-wa-link" target="_blank" rel="noopener">
                  ${lang === 'ar' ? 'تواصل معنا →' : lang === 'fr' ? 'Nous contacter →' : lang === 'es' ? 'Contáctenos →' : 'Contact Us →'}
                </a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  function renderBlog(lang) {
    const section = document.getElementById('blog');
    if (!section || typeof BLOG_ARTICLES === 'undefined') return;
    const t = TRANSLATIONS[lang];
    const blogTitle = lang === 'ar' ? 'مقالاتنا' : lang === 'fr' ? 'Notre Blog' : lang === 'es' ? 'Nuestro Blog' : 'Our Blog';
    const blogSub = lang === 'ar' ? 'مقالات ونصائح حول الخدمات الإدارية' : lang === 'fr' ? 'Articles et conseils sur les démarches administratives' : lang === 'es' ? 'Artículos y consejos sobre trámites administrativos' : 'Articles and tips on administrative procedures';
    const allLangs = ['ar', 'fr', 'en', 'es'];
    const articles = BLOG_ARTICLES[lang] || BLOG_ARTICLES.en;
    section.innerHTML = `
      <div class="container">
        <header class="section-header">
          <h2 class="section-title">${blogTitle}</h2>
          <p class="section-subtitle">${blogSub}</p>
          <div class="blog-lang-tabs" role="tablist">
            ${allLangs.map(l => `
              <button class="blog-tab${l === lang ? ' blog-tab--active' : ''}" role="tab" aria-selected="${l === lang}" onclick="window.PWT.setLang('${l}')">
                ${l.toUpperCase()} <span class="blog-tab__count">(${BLOG_ARTICLES[l].length})</span>
              </button>
            `).join('')}
          </div>
        </header>
        <div class="blog-grid" id="blog-grid">
          ${typeof renderBlogGrid === 'function' ? renderBlogGrid(lang, 9) : ''}
        </div>
        <div class="blog__more">
          <button class="btn btn--outline" onclick="loadMoreBlog('${lang}')">
            ${lang === 'ar' ? 'عرض المزيد' : lang === 'fr' ? 'Voir plus' : lang === 'es' ? 'Ver más' : 'Load More'}
          </button>
        </div>
      </div>
    `;
  }

  function renderContact(lang, t) {
    const section = document.getElementById('contact');
    if (!section) return;
    const c = t.contact;
    const f = c.form;
    section.innerHTML = `
      <div class="container">
        <header class="section-header">
          <h2 class="section-title">${c.title}</h2>
          <p class="section-subtitle">${c.subtitle}</p>
        </header>
        <div class="contact-grid">
          <div class="contact-info">
            <a href="${WHATSAPP_URL}?text=${encodeURIComponent(getHeroWAMsg(lang))}"
               class="btn btn--wa btn--xl contact-wa-btn" target="_blank" rel="noopener">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              ${c.whatsapp_btn}
            </a>
            <div class="contact-details">
              <div class="contact-detail">
                <span class="contact-detail__icon">📱</span>
                <span>+212 602 321 305</span>
              </div>
              <div class="contact-detail">
                <span class="contact-detail__icon">📧</span>
                <a href="mailto:salatrir@gmail.com">salatrir@gmail.com</a>
              </div>
              <div class="contact-detail">
                <span class="contact-detail__icon">📍</span>
                <span>Tanger, Maroc / طنجة، المغرب</span>
              </div>
            </div>
            <div class="contact-map" id="contact-map" aria-label="Location map">
              <div class="contact-map__placeholder">
                <a href="https://www.google.com/maps/search/Tanger+Maroc" target="_blank" rel="noopener" class="map-link">
                  🗺️ ${lang === 'ar' ? 'عرض على خريطة جوجل' : lang === 'fr' ? 'Voir sur Google Maps' : lang === 'es' ? 'Ver en Google Maps' : 'View on Google Maps'}
                </a>
              </div>
            </div>
          </div>
          <div class="contact-form-wrap">
            <form class="contact-form" id="contact-form" onsubmit="submitContactForm(event, '${lang}')">
              <div class="form-group">
                <label for="cf-name">${f.name}</label>
                <input type="text" id="cf-name" name="name" required autocomplete="name" placeholder="${f.name}">
              </div>
              <div class="form-group">
                <label for="cf-email">${f.email}</label>
                <input type="email" id="cf-email" name="email" autocomplete="email" placeholder="${f.email}">
              </div>
              <div class="form-group">
                <label for="cf-phone">${f.phone}</label>
                <input type="tel" id="cf-phone" name="phone" autocomplete="tel" placeholder="+212...">
              </div>
              <div class="form-group">
                <label for="cf-service">${f.service}</label>
                <select id="cf-service" name="service">
                  ${Object.values(TRANSLATIONS[lang].services).map(s => `<option value="${s.title}">${s.title}</option>`).join('')}
                </select>
              </div>
              <div class="form-group">
                <label for="cf-message">${f.message}</label>
                <textarea id="cf-message" name="message" rows="4" required placeholder="${f.message}"></textarea>
              </div>
              <button type="submit" class="btn btn--primary btn--block">${f.submit}</button>
            </form>
          </div>
        </div>
      </div>
    `;
  }

  function renderFooter(lang, t) {
    const footer = document.getElementById('main-footer');
    if (!footer) return;
    const f = t.footer;
    const sv = t.services;
    footer.innerHTML = `
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="footer-logo">✍️ ${lang === 'ar' ? 'كاتب عمومي طنجة' : lang === 'fr' ? 'Écrivain Public Tanger' : lang === 'es' ? 'Escritor Público Tánger' : 'Public Writer Tanger'}</div>
            <p class="footer-tagline">${f.tagline}</p>
            <a href="${WHATSAPP_URL}" class="footer-wa" target="_blank" rel="noopener">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              +212 602 321 305
            </a>
          </div>
          <div class="footer-services">
            <h3>${f.services_title}</h3>
            <ul>
              ${Object.values(sv).map(s => `<li><a href="#services">${s.title}</a></li>`).join('')}
            </ul>
          </div>
          <div class="footer-contact">
            <h3>${f.contact_title}</h3>
            <ul>
              <li><a href="${WHATSAPP_URL}" target="_blank" rel="noopener">WhatsApp: +212 602 321 305</a></li>
              <li><a href="mailto:salatrir@gmail.com">salatrir@gmail.com</a></li>
              <li>Tanger / طنجة, Maroc / المغرب</li>
            </ul>
            <div class="footer-langs">
              ${['ar','fr','en','es'].map(l => `
                <button class="lang-btn-sm" onclick="window.PWT.setLang('${l}')">${l.toUpperCase()}</button>
              `).join('')}
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>© ${new Date().getFullYear()} KnownHouses.com — ${f.legal}</p>
          <div class="footer-legal">
            <a href="privacy.html">${f.privacy}</a>
            <a href="terms.html">${f.terms}</a>
          </div>
        </div>
      </div>
    `;
  }

  function renderFloatingWA(lang, t) {
    let fab = document.getElementById('wa-fab');
    if (!fab) {
      fab = document.createElement('a');
      fab.id = 'wa-fab';
      fab.setAttribute('role', 'complementary');
      fab.setAttribute('aria-label', 'WhatsApp');
      document.body.appendChild(fab);
    }
    fab.href = `${WHATSAPP_URL}?text=${encodeURIComponent(getHeroWAMsg(lang))}`;
    fab.target = '_blank';
    fab.rel = 'noopener';
    fab.className = 'wa-fab';
    fab.innerHTML = `
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      <span class="wa-fab__label">${t.whatsapp_float}</span>
    `;
  }

  function updateLangSwitcher(activeLang) {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      const isActive = btn.textContent.trim().toLowerCase() === activeLang;
      btn.classList.toggle('lang-btn--active', isActive);
      btn.setAttribute('aria-current', isActive ? 'true' : 'false');
    });
  }

  // ── Global helpers ─────────────────────────────────────
  window.toggleFAQ = function (btn) {
    const item = btn.closest('.faq-item');
    const answer = item.querySelector('.faq-item__answer');
    const icon = btn.querySelector('.faq-item__icon');
    const isOpen = !answer.hidden;
    // Close all
    document.querySelectorAll('.faq-item__answer').forEach(a => { a.hidden = true; });
    document.querySelectorAll('.faq-item__question').forEach(b => { b.setAttribute('aria-expanded', 'false'); b.querySelector('.faq-item__icon').textContent = '+'; });
    if (!isOpen) {
      answer.hidden = false;
      btn.setAttribute('aria-expanded', 'true');
      icon.textContent = '−';
    }
  };

  window.submitContactForm = function (e, lang) {
    e.preventDefault();
    const form = e.target;
    const name = form.querySelector('#cf-name').value;
    const phone = form.querySelector('#cf-phone').value;
    const service = form.querySelector('#cf-service').value;
    const message = form.querySelector('#cf-message').value;
    const msgs = {
      ar: `مرحباً، أنا ${name}. أريد الاستفسار عن خدمة: ${service}\n\nالرسالة: ${message}`,
      fr: `Bonjour, je suis ${name}. Je souhaite me renseigner sur : ${service}\n\nMessage : ${message}`,
      en: `Hello, I'm ${name}. I'd like to inquire about: ${service}\n\nMessage: ${message}`,
      es: `Hola, soy ${name}. Me gustaría consultar sobre: ${service}\n\nMensaje: ${message}`
    };
    const waMsg = msgs[lang] || msgs.en;
    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(waMsg)}`, '_blank');
  };

  let blogOffset = 9;
  window.loadMoreBlog = function (lang) {
    const grid = document.getElementById('blog-grid');
    if (!grid || typeof BLOG_ARTICLES === 'undefined') return;
    const articles = BLOG_ARTICLES[lang] || BLOG_ARTICLES.en;
    const batch = articles.slice(blogOffset, blogOffset + 6);
    if (!batch.length) return;
    if (typeof renderBlogGrid === 'function') {
      const tmp = document.createElement('div');
      tmp.innerHTML = batch.map(a => `
        <article class="blog-card">
          <div class="blog-card__cat blog-cat--${a.category}">${getCategoryLabel(lang, a.category)}</div>
          <h3 class="blog-card__title"><a href="blog/${a.slug}.html">${a.title}</a></h3>
          <p class="blog-card__excerpt">${a.excerpt}</p>
          <div class="blog-card__meta">
            <span class="read-time">⏱ ${a.readTime} min</span>
            <a href="blog/${a.slug}.html" class="read-more">Read more →</a>
          </div>
        </article>
      `).join('');
      grid.append(...tmp.children);
    }
    blogOffset += 6;
  };

  // ── Scroll behavior ────────────────────────────────────
  function initScrollEffects() {
    const header = document.getElementById('site-header');
    if (!header) return;
    let lastY = 0;
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      header.classList.toggle('header--scrolled', y > 50);
      header.classList.toggle('header--hidden', y > lastY && y > 200);
      lastY = y;
    }, { passive: true });
  }

  // ── Intersection Observer for animations ──────────────
  function initObserver() {
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.service-card, .process-step, .testimonial-card, .blog-card, .faq-item').forEach(el => observer.observe(el));
  }

  // ── Init ──────────────────────────────────────────────
  function init() {
    const lang = getStoredLang();
    applyLanguage(lang);
    initScrollEffects();
    setTimeout(initObserver, 100);
  }

  // Public API
  window.PWT = { setLang, getStoredLang };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
