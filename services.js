// services.js — Public Writer Tangier
// KnownHouses.com

const SERVICES_DATA = {
  admin: {
    slug: "administrative-services",
    icon: "📋",
    color: "#1a6b4a",
    seo: {
      ar: { title: "الخدمات الإدارية — كاتب عمومي طنجة", description: "كتابة الطلبات الإدارية والشكايات والطعون والرسائل الرسمية في طنجة. خدمة سريعة واحترافية." },
      fr: { title: "Services Administratifs — Écrivain Public Tanger", description: "Rédaction de demandes administratives, réclamations, recours et lettres officielles à Tanger." },
      en: { title: "Administrative Services — Public Writer Tangier", description: "Professional administrative writing services in Tangier: requests, complaints, appeals, official letters." },
      es: { title: "Servicios Administrativos — Escritor Público Tánger", description: "Redacción de solicitudes administrativas, reclamaciones, recursos y cartas oficiales en Tánger." }
    }
  },
  employment: {
    slug: "employment-services",
    icon: "💼",
    color: "#2563eb",
    seo: {
      ar: { title: "السيرة الذاتية ورسائل التحفيز — كاتب عمومي طنجة", description: "إعداد السيرة الذاتية الاحترافية ورسائل التحفيز وطلبات التوظيف في طنجة." },
      fr: { title: "CV & Lettres de Motivation — Écrivain Public Tanger", description: "Création de CV professionnels et lettres de motivation à Tanger, Maroc." },
      en: { title: "CV & Cover Letters — Public Writer Tangier", description: "Professional CV creation and cover letters in Tangier, Morocco." },
      es: { title: "CV y Cartas de Presentación — Escritor Público Tánger", description: "Creación de CV profesionales y cartas de presentación en Tánger, Marruecos." }
    }
  },
  legal: {
    slug: "legal-document-services",
    icon: "⚖️",
    color: "#7c3aed",
    seo: {
      ar: { title: "الخدمات القانونية والوثائقية — كاتب عمومي طنجة", description: "مساعدة في صياغة العقود وإعداد الوثائق الرسمية والملفات الإدارية في طنجة." },
      fr: { title: "Services Juridiques & Documentaires — Tanger", description: "Aide à la rédaction de contrats, préparation de dossiers et documents officiels à Tanger." },
      en: { title: "Legal & Document Services — Tangier", description: "Contract drafting assistance, document formatting and official file preparation in Tangier." },
      es: { title: "Servicios Jurídicos — Tánger", description: "Asistencia en contratos, preparación de expedientes y documentos oficiales en Tánger." }
    }
  },
  translation: {
    slug: "translation-services",
    icon: "🌐",
    color: "#0891b2",
    seo: {
      ar: { title: "خدمات الترجمة — كاتب عمومي طنجة", description: "ترجمة الوثائق بين العربية والفرنسية والإنجليزية والإسبانية. ترجمة احترافية ودقيقة في طنجة." },
      fr: { title: "Services de Traduction — Tanger Maroc", description: "Traduction professionnelle de documents entre arabe, français, anglais et espagnol à Tanger." },
      en: { title: "Document Translation Services — Tangier Morocco", description: "Professional document translation Arabic, French, English, Spanish in Tangier, Morocco." },
      es: { title: "Traducción de Documentos — Tánger Marruecos", description: "Traducción profesional árabe, francés, inglés y español en Tánger, Marruecos." }
    }
  },
  immigration: {
    slug: "immigration-visa-services",
    icon: "✈️",
    color: "#dc2626",
    seo: {
      ar: { title: "مساعدة التأشيرات والهجرة — طنجة", description: "مساعدة في طلبات التأشيرة، رسائل الدعوة، ووثائق السفر في طنجة المغرب." },
      fr: { title: "Assistance Visa & Immigration — Tanger", description: "Aide aux demandes de visa, lettres d'invitation et documents de voyage à Tanger, Maroc." },
      en: { title: "Visa & Immigration Assistance — Tangier", description: "Visa application help, invitation letters and travel document support in Tangier, Morocco." },
      es: { title: "Asistencia de Visados — Tánger", description: "Ayuda con visados, cartas de invitación y documentos de viaje en Tánger, Marruecos." }
    }
  },
  business: {
    slug: "business-services",
    icon: "🏢",
    color: "#b45309",
    seo: {
      ar: { title: "خدمات الأعمال — كاتب عمومي طنجة", description: "الرسائل التجارية والمراسلات الاحترافية ووثائق الشركات في طنجة." },
      fr: { title: "Services aux Entreprises — Tanger", description: "Lettres commerciales, correspondance professionnelle et documentation d'entreprise à Tanger." },
      en: { title: "Business Writing Services — Tangier", description: "Professional business letters, commercial correspondence and company documentation in Tangier." },
      es: { title: "Servicios Empresariales — Tánger", description: "Cartas comerciales, correspondencia empresarial y documentación corporativa en Tánger." }
    }
  },
  digital: {
    slug: "digital-services",
    icon: "💻",
    color: "#16a34a",
    seo: {
      ar: { title: "الخدمات الرقمية — كاتب عمومي طنجة", description: "ملء الاستمارات الإلكترونية وإعداد الوثائق الرقمية وتحويل الملفات في طنجة." },
      fr: { title: "Services Numériques — Tanger", description: "Remplissage de formulaires en ligne, préparation de documents numériques PDF/Word à Tanger." },
      en: { title: "Digital Document Services — Tangier", description: "Online form completion, PDF/Word document preparation and digital file conversion in Tangier." },
      es: { title: "Servicios Digitales — Tánger", description: "Relleno de formularios, preparación de documentos PDF/Word y conversión digital en Tánger." }
    }
  }
};

function renderServicesGrid(lang) {
  const t = TRANSLATIONS[lang];
  const services = t.services;
  const serviceKeys = Object.keys(services);

  return serviceKeys.map(key => {
    const data = SERVICES_DATA[key];
    const s = services[key];
    return `
      <article class="service-card" data-service="${key}">
        <div class="service-card__icon" style="background:${data.color}15; color:${data.color}">
          ${data.icon}
        </div>
        <h3 class="service-card__title">${s.title}</h3>
        <p class="service-card__desc">${s.desc}</p>
        <ul class="service-card__items">
          ${s.items.map(item => `<li>${item}</li>`).join('')}
        </ul>
        <a href="https://wa.me/212602321305?text=${encodeURIComponent(getWhatsAppMessage(lang, s.title))}"
           class="service-card__cta btn btn--whatsapp" target="_blank" rel="noopener">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          ${lang === 'ar' ? 'تواصل الآن' : lang === 'fr' ? 'Nous contacter' : lang === 'es' ? 'Contactar' : 'Contact Now'}
        </a>
      </article>
    `;
  }).join('');
}

function getWhatsAppMessage(lang, serviceName) {
  const msgs = {
    ar: `مرحباً، أريد الاستفسار عن خدمة: ${serviceName}`,
    fr: `Bonjour, je souhaite me renseigner sur le service : ${serviceName}`,
    en: `Hello, I'd like to inquire about the service: ${serviceName}`,
    es: `Hola, me gustaría consultar sobre el servicio: ${serviceName}`
  };
  return msgs[lang] || msgs.en;
}

if (typeof module !== 'undefined') module.exports = { SERVICES_DATA, renderServicesGrid, getWhatsAppMessage };
