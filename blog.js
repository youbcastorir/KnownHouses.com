// blog.js — Public Writer Tangier
// KnownHouses.com
// 230 SEO articles: 100 Arabic, 50 French, 50 English, 30 Spanish

const BLOG_ARTICLES = {

  // ========== ARABIC — 100 ARTICLES ==========
  ar: [
    // Administrative Services
    { id: "ar-001", slug: "katib-umumi-tanja", title: "كاتب عمومي طنجة: دليلك الكامل للخدمات الإدارية", excerpt: "تعرف على خدمات الكاتب العمومي في طنجة وكيف يمكنه مساعدتك في إنجاز معاملاتك الإدارية بسهولة واحترافية.", category: "admin", readTime: 5 },
    { id: "ar-002", slug: "khidmat-kitaba-umomiya-tanja", title: "خدمات الكتابة العمومية في طنجة: كل ما تحتاج معرفته", excerpt: "دليل شامل لخدمات الكتابة العمومية في طنجة، من الطلبات الإدارية إلى الترجمة والسيرة الذاتية.", category: "admin", readTime: 6 },
    { id: "ar-003", slug: "kitabat-talab-idari-tanja", title: "كيف تكتب طلباً إدارياً صحيحاً في المغرب", excerpt: "خطوات كتابة طلب إداري احترافي يحقق نتائج. نصائح عملية من خبير الكتابة العمومية في طنجة.", category: "admin", readTime: 7 },
    { id: "ar-004", slug: "kitabat-shikaya-idaria", title: "كيفية كتابة شكاية إدارية فعّالة", excerpt: "تعلم كيفية صياغة شكوى إدارية رسمية تصل إلى هدفها. نماذج وأمثلة عملية.", category: "admin", readTime: 8 },
    { id: "ar-005", slug: "taoun-idari-maghrib", title: "الطعن الإداري في المغرب: كيف تكتبه بشكل صحيح", excerpt: "دليل مفصل لكتابة الطعن الإداري في المغرب: الشروط، الإجراءات، والصياغة الصحيحة.", category: "admin", readTime: 9 },
    { id: "ar-006", slug: "rasail-rasmia-maghrib", title: "الرسائل الرسمية في المغرب: أنواعها وأسلوب كتابتها", excerpt: "تعرف على أنواع الرسائل الرسمية المستخدمة في المغرب وكيفية كتابتها بالطريقة الصحيحة.", category: "admin", readTime: 6 },
    { id: "ar-007", slug: "murasala-idaria-maghrib", title: "المراسلة الإدارية في المغرب: القواعد والأساليب", excerpt: "أساسيات المراسلة الإدارية الرسمية في المغرب. كيف تكتب رسائل تحقق هدفها.", category: "admin", readTime: 7 },
    { id: "ar-008", slug: "wathiqa-rasmia-tanja", title: "الوثائق الرسمية في طنجة: كيف تحضرها وتوثقها", excerpt: "دليل إعداد الوثائق الرسمية في طنجة، من التوثيق إلى التصديق والمصادقة.", category: "admin", readTime: 5 },
    { id: "ar-009", slug: "malaf-idari-mutakamil", title: "كيف تعد ملفاً إدارياً متكاملاً في المغرب", excerpt: "خطوات إعداد الملف الإداري الكامل: الوثائق المطلوبة، الترتيب، والتقديم الصحيح.", category: "admin", readTime: 8 },
    { id: "ar-010", slug: "murasala-rasmia-maktub", title: "نماذج المراسلات الإدارية الرسمية المكتوبة", excerpt: "نماذج جاهزة للمراسلات الإدارية الأكثر شيوعاً في المغرب، قابلة للتخصيص.", category: "admin", readTime: 6 },

    // Employment Services
    { id: "ar-011", slug: "sira-dhatia-ihtirafi-tanja", title: "السيرة الذاتية الاحترافية في طنجة: كيف تُعدّها", excerpt: "دليل إعداد السيرة الذاتية الاحترافية في المغرب: العناصر الأساسية، التنسيق، والأخطاء الشائعة.", category: "employment", readTime: 7 },
    { id: "ar-012", slug: "tahdith-cv-tanja", title: "تحديث السيرة الذاتية: متى وكيف تفعل ذلك", excerpt: "كيف تحدّث سيرتك الذاتية لتتناسب مع متطلبات سوق العمل في المغرب.", category: "employment", readTime: 6 },
    { id: "ar-013", slug: "risalat-tahfiz-maghrib", title: "رسالة التحفيز: دليل كتابتها بالعربية والفرنسية", excerpt: "كيف تكتب رسالة تحفيز مقنعة تفتح لك أبواب التوظيف في المغرب.", category: "employment", readTime: 8 },
    { id: "ar-014", slug: "talab-amal-maghrib", title: "طلب العمل الاحترافي في المغرب: النموذج الكامل", excerpt: "نموذج طلب عمل احترافي مع شرح كيفية تخصيصه لكل وظيفة.", category: "employment", readTime: 7 },
    { id: "ar-015", slug: "cv-fransawi-tanja", title: "السيرة الذاتية بالفرنسية في طنجة: ما تحتاج معرفته", excerpt: "كيف تعد سيرتك الذاتية بالفرنسية في المغرب، مع نماذج جاهزة.", category: "employment", readTime: 6 },
    { id: "ar-016", slug: "muqabala-amal-tanja", title: "كيف تستعد لمقابلة العمل في طنجة", excerpt: "نصائح عملية للاستعداد لمقابلة العمل في المغرب، من السيرة الذاتية إلى يوم المقابلة.", category: "employment", readTime: 9 },
    { id: "ar-017", slug: "swuk-amal-maghrib-2024", title: "سوق العمل في المغرب 2024: ما الذي يبحث عنه أصحاب العمل", excerpt: "تحليل سوق العمل المغربي وما يتوقعه أصحاب العمل في السيرة الذاتية ورسائل التحفيز.", category: "employment", readTime: 8 },
    { id: "ar-018", slug: "cv-inglizy-maghrib", title: "السيرة الذاتية بالإنجليزية للعمل في المغرب", excerpt: "كيف تعد سيرتك الذاتية بالإنجليزية للتقدم لوظائف في الشركات الدولية بالمغرب.", category: "employment", readTime: 7 },
    { id: "ar-019", slug: "taghyir-muhna-cv", title: "كيف تكتب سيرة ذاتية عند تغيير المسار المهني", excerpt: "نصائح لإعداد سيرة ذاتية احترافية عند التحول من مسار مهني إلى آخر.", category: "employment", readTime: 6 },
    { id: "ar-020", slug: "cv-awwal-mara-tanja", title: "أول سيرة ذاتية لك في طنجة: دليل المبتدئين", excerpt: "كيف تعد أول سيرة ذاتية لك إذا كانت خبرتك محدودة. نصائح للطلاب وحديثي التخرج.", category: "employment", readTime: 5 },

    // Translation Services
    { id: "ar-021", slug: "tarjama-wathiqa-tanja", title: "ترجمة الوثائق في طنجة: كل ما تحتاج معرفته", excerpt: "دليل شامل لخدمات ترجمة الوثائق في طنجة، الأسعار، المدد الزمنية، وأنواع الوثائق.", category: "translation", readTime: 7 },
    { id: "ar-022", slug: "tarjama-arabi-fransawi", title: "الترجمة من العربية إلى الفرنسية: دليل الوثائق الرسمية", excerpt: "كيفية ترجمة وثائقك الرسمية من العربية إلى الفرنسية في المغرب.", category: "translation", readTime: 6 },
    { id: "ar-023", slug: "tarjama-fransawi-arabi-tanja", title: "ترجمة الوثائق الفرنسية إلى العربية في طنجة", excerpt: "خدمة الترجمة من الفرنسية إلى العربية للوثائق الإدارية والرسمية في طنجة.", category: "translation", readTime: 6 },
    { id: "ar-024", slug: "tarjama-arabi-inglizy-maghrib", title: "الترجمة العربية الإنجليزية في المغرب: متى وكيف", excerpt: "متى تحتاج إلى ترجمة وثائقك من العربية إلى الإنجليزية وكيف تختار المترجم المناسب.", category: "translation", readTime: 7 },
    { id: "ar-025", slug:="tarjama-wathiqa-hudud", title: "ترجمة وثائق الحالة المدنية في المغرب", excerpt: "ترجمة عقود الزواج، شهادات الميلاد، بطاقات التعريف الوطنية وغيرها.", category: "translation", readTime: 8 },
    { id: "ar-026", slug: "tarjama-mustanad-qanuni", title: "ترجمة الوثائق القانونية في طنجة", excerpt: "خدمة ترجمة العقود، الاتفاقيات، والوثائق القانونية في طنجة.", category: "translation", readTime: 7 },
    { id: "ar-027", slug: "tarjama-ishbania-arabi", title: "الترجمة بين العربية والإسبانية في طنجة", excerpt: "خدمة الترجمة بين العربية والإسبانية. طنجة قريبة من إسبانيا — نحن نجسر الهوة.", category: "translation", readTime: 5 },
    { id: "ar-028", slug: "tarjama-mustanad-tibbi", title: "ترجمة الوثائق الطبية في طنجة", excerpt: "ترجمة التقارير الطبية، وصفات الدواء، والوثائق الصحية بدقة واحترافية.", category: "translation", readTime: 6 },
    { id: "ar-029", slug: "tarjama-shahadat-dirasat", title: "ترجمة الشهادات الدراسية والعلمية في المغرب", excerpt: "كيف تترجم شهادتك الجامعية أو الدراسية للاستخدام في الخارج.", category: "translation", readTime: 7 },
    { id: "ar-030", slug: "tarjama-mustanad-tijari", title: "ترجمة الوثائق التجارية في طنجة", excerpt: "ترجمة العقود التجارية، الفواتير، والوثائق المالية للشركات في طنجة.", category: "translation", readTime: 6 },

    // Immigration Services
    { id: "ar-031", slug: "taashira-uruba-min-tanja", title: "كيف تتقدم بطلب تأشيرة أوروبية من طنجة", excerpt: "دليل شامل لإجراءات طلب تأشيرة شنغن من طنجة: الوثائق، الخطوات، والنصائح.", category: "immigration", readTime: 10 },
    { id: "ar-032", slug: "taashira-schengen-wathiqa", title: "الوثائق المطلوبة لتأشيرة شنغن من المغرب", excerpt: "قائمة كاملة بالوثائق الضرورية للحصول على تأشيرة شنغن من المغرب.", category: "immigration", readTime: 8 },
    { id: "ar-033", slug: "risalat-dawaa-taashira", title: "كيف تكتب رسالة دعوة لاستقبال شخص في الخارج", excerpt: "نموذج رسالة دعوة رسمية لاستقبال شخص وكيفية كتابتها بشكل صحيح.", category: "immigration", readTime: 7 },
    { id: "ar-034", slug: "taashira-amrika-wathiqa", title: "تأشيرة الولايات المتحدة من المغرب: دليل الوثائق", excerpt: "الوثائق المطلوبة للتقدم بطلب تأشيرة أمريكية من المغرب.", category: "immigration", readTime: 9 },
    { id: "ar-035", slug: "taashira-canada-maghrib", title: "التأشيرة الكندية من المغرب: ما تحتاج معرفته", excerpt: "إجراءات ووثائق طلب التأشيرة الكندية من المغرب.", category: "immigration", readTime: 9 },
    { id: "ar-036", slug: "tawthiqa-wathiqa-safar", title: "توثيق وثائق السفر في طنجة", excerpt: "كيف توثق وتصدق وثائق سفرك في طنجة للاستخدام الدولي.", category: "immigration", readTime: 6 },
    { id: "ar-037", slug: "iqama-ajnabi-maghrib", title: "الإقامة للأجانب في المغرب: الوثائق والإجراءات", excerpt: "دليل الحصول على الإقامة في المغرب للأجانب: الوثائق المطلوبة والإجراءات الإدارية.", category: "immigration", readTime: 10 },
    { id: "ar-038", slug: "taashira-khaleej-maghrib", title: "تأشيرة دول الخليج من المغرب", excerpt: "إجراءات ووثائق طلب تأشيرات الإمارات، السعودية، وقطر من المغرب.", category: "immigration", readTime: 8 },
    { id: "ar-039", slug: "taashira-turkia-maghrib", title: "تأشيرة تركيا من المغرب: هل تحتاجها", excerpt: "معلومات عن إجراءات السفر إلى تركيا للمواطنين المغاربة.", category: "immigration", readTime: 6 },
    { id: "ar-040", slug: "taashira-alistidad-muqabala", title: "كيف تستعد لمقابلة التأشيرة", excerpt: "نصائح الاستعداد لمقابلة القنصلية عند تقديم طلب التأشيرة.", category: "immigration", readTime: 8 },

    // Legal Services
    { id: "ar-041", slug: "aqd-ijara-maghrib", title: "كيف تصيغ عقد إيجار صحيح في المغرب", excerpt: "دليل صياغة عقد الإيجار القانوني في المغرب: العناصر الأساسية والبنود الضرورية.", category: "legal", readTime: 9 },
    { id: "ar-042", slug: "tasrih-rasmi-maghrib", title: "التصريح الرسمي في المغرب: متى وكيف تكتبه", excerpt: "متى تحتاج إلى تصريح رسمي وكيف تكتبه بالطريقة المعتمدة في المغرب.", category: "legal", readTime: 7 },
    { id: "ar-043", slug: "wakalat-rasmi-tanja", title: "توكيل رسمي في طنجة: إجراءات وأنواع", excerpt: "أنواع التوكيلات الرسمية في المغرب وكيفية الحصول عليها.", category: "legal", readTime: 8 },
    { id: "ar-044", slug: "aqd-bay-siara-maghrib", title: "عقد بيع السيارة في المغرب: ما يجب تضمينه", excerpt: "كيف تكتب عقد بيع سيارة قانوني في المغرب لحماية حقوقك.", category: "legal", readTime: 7 },
    { id: "ar-045", slug: "aqd-amal-bassit-maghrib", title: "عقد العمل البسيط في المغرب: النموذج والشرح", excerpt: "نموذج عقد عمل بسيط للمقاولات والأعمال الصغيرة في المغرب.", category: "legal", readTime: 8 },

    // Business Services
    { id: "ar-046", slug: "khitab-tijari-maghrib", title: "كيف تكتب خطاباً تجارياً احترافياً في المغرب", excerpt: "دليل كتابة الخطابات التجارية الاحترافية في المغرب: الهيكل، الأسلوب، والمحتوى.", category: "business", readTime: 7 },
    { id: "ar-047", slug: "rasail-tijaria-namathij", title: "نماذج الرسائل التجارية الأكثر استخداماً في المغرب", excerpt: "مجموعة نماذج رسائل تجارية جاهزة للاستخدام في المغرب.", category: "business", readTime: 6 },
    { id: "ar-048", slug: "murasala-tijaria-sharikat", title: "المراسلة التجارية للشركات المغربية: دليل عملي", excerpt: "كيف تنظم المراسلات التجارية لشركتك في المغرب.", category: "business", readTime: 8 },
    { id: "ar-049", slug: "ard-tijaria-khidmiya", title: "كيف تكتب عرضاً تجارياً مقنعاً بالعربية", excerpt: "خطوات كتابة عرض تجاري احترافي يقنع العميل ويغلق الصفقة.", category: "business", readTime: 9 },
    { id: "ar-050", slug: "risalat-shakur-tijaria", title: "رسالة الشكر التجارية: كيف توطد علاقاتك المهنية", excerpt: "أهمية رسالة الشكر في الأعمال وكيف تكتبها بشكل مهني.", category: "business", readTime: 5 },

    // Digital Services
    { id: "ar-051", slug: "malaf-pdf-ihtirafi", title: "كيف تنشئ ملف PDF احترافياً", excerpt: "أدوات وتقنيات إنشاء ملفات PDF احترافية للوثائق الرسمية والمهنية.", category: "digital", readTime: 6 },
    { id: "ar-052", slug: "istimarat-idaria-online", title: "ملء الاستمارات الإدارية الإلكترونية في المغرب", excerpt: "دليل ملء الاستمارات الإدارية الإلكترونية على المنصات الحكومية المغربية.", category: "digital", readTime: 7 },
    { id: "ar-053", slug: "taqdim-talab-ijazat-online", title: "كيف تقدم طلب الإجازة الإلكترونية في المغرب", excerpt: "خطوات تقديم طلب الإجازة عبر الإنترنت للموظفين في المغرب.", category: "digital", readTime: 6 },
    { id: "ar-054", slug: "word-wathiqa-ihtirafi", title: "إعداد الوثائق الرسمية بتنسيق Word احترافي", excerpt: "كيف تنسّق وثائقك الرسمية ببرنامج Word لتبدو احترافية ومقبولة رسمياً.", category: "digital", readTime: 7 },
    { id: "ar-055", slug: "tahwil-wathiqa-raqmia", title: "تحويل الوثائق الورقية إلى رقمية في طنجة", excerpt: "خدمات تحويل الوثائق الورقية إلى ملفات رقمية قابلة للتحرير.", category: "digital", readTime: 5 },

    // General Public Writer
    { id: "ar-056", slug: "katib-umumi-tarikh", title: "تاريخ مهنة الكاتب العمومي في المغرب", excerpt: "نبذة تاريخية عن مهنة الكاتب العمومي في المغرب وتطورها عبر العصور.", category: "general", readTime: 8 },
    { id: "ar-057", slug: "katib-umumi-vs-muhami", title: "الكاتب العمومي والمحامي: ما الفرق؟", excerpt: "متى تلجأ إلى الكاتب العمومي ومتى تحتاج إلى محامٍ؟ دليل واضح.", category: "general", readTime: 7 },
    { id: "ar-058", slug: "khidmat-katib-umumi-majan", title: "هل خدمات الكاتب العمومي مجانية في المغرب؟", excerpt: "معلومات حول تكلفة خدمات الكاتب العمومي في المغرب وما تشمله.", category: "general", readTime: 5 },
    { id: "ar-059", slug: "adad-katib-umumi-tanja", title: "أين تجد كاتباً عمومياً في طنجة؟", excerpt: "دليل الكتّاب العموميين في طنجة وكيف تختار الأنسب لاحتياجاتك.", category: "general", readTime: 6 },
    { id: "ar-060", slug: "lughat-idaria-maghrib", title: "اللغة الإدارية في المغرب: العربية أم الفرنسية؟", excerpt: "متى تستخدم العربية ومتى تستخدم الفرنسية في المراسلات الإدارية بالمغرب.", category: "general", readTime: 7 },

    // Tangier-specific
    { id: "ar-061", slug: "muasasat-idaria-tanja", title: "المؤسسات الإدارية في طنجة: دليل المواطن", excerpt: "دليل المؤسسات والإدارات العامة في طنجة وكيفية التعامل معها.", category: "tangier", readTime: 8 },
    { id: "ar-062", slug: "baladiyat-tanja-khidmat", title: "خدمات بلدية طنجة: كيف تستفيد منها", excerpt: "الخدمات الإدارية التي تقدمها بلدية طنجة وكيف يمكن للمواطنين الاستفادة منها.", category: "tangier", readTime: 7 },
    { id: "ar-063", slug: "tanja-iqtisad-amal", title: "سوق العمل في طنجة: الفرص والتحديات", excerpt: "تحليل سوق العمل في طنجة وأبرز القطاعات الاقتصادية المتنامية.", category: "tangier", readTime: 9 },
    { id: "ar-064", slug: "ajnabi-tanja-wathiqa", title: "الأجانب في طنجة: الوثائق والإجراءات الإدارية", excerpt: "دليل الإجراءات الإدارية للأجانب المقيمين أو القادمين إلى طنجة.", category: "tangier", readTime: 8 },
    { id: "ar-065", slug: "sharia-muhafadha-tanja", title: "مقر المحافظة في طنجة: الخدمات والمواعيد", excerpt: "دليل الخدمات الإدارية المقدمة بمقر عمالة طنجة أصيلة.", category: "tangier", readTime: 6 },

    // Moroccan Administration
    { id: "ar-066", slug: "rashid-watani-jadid", title: "بطاقة التعريف الوطنية الجديدة في المغرب", excerpt: "إجراءات الحصول على بطاقة التعريف الوطنية أو تجديدها في المغرب.", category: "admin", readTime: 7 },
    { id: "ar-067", slug: "shahada-sukkna-maghrib", title: "شهادة السكنى في المغرب: كيف تحصل عليها", excerpt: "إجراءات الحصول على شهادة السكنى من الجماعة أو القيادة.", category: "admin", readTime: 6 },
    { id: "ar-068", slug: "nasab-idari-maghrib", title: "النسب الإداري في المغرب: وثيقة السيرة الإدارية", excerpt: "ما هو النسب الإداري ومتى تحتاج إليه في إجراءاتك الإدارية.", category: "admin", readTime: 7 },
    { id: "ar-069", slug: "qaid-shamsur-watani", title: "عقد الازدياد: كيف تحصل على نسخة", excerpt: "إجراءات الحصول على عقد الازدياد أو نسخة منه في المغرب.", category: "admin", readTime: 6 },
    { id: "ar-070", slug: "wathiqa-zuwaj-maghrib", title: "وثائق الزواج في المغرب: القائمة الكاملة", excerpt: "قائمة الوثائق المطلوبة لإتمام عقد الزواج في المغرب.", category: "admin", readTime: 8 },

    // More articles
    { id: "ar-071", slug: "makhasir-idaria-shaikhat", title: "كيف تتفادى الأخطاء الشائعة في الطلبات الإدارية", excerpt: "أبرز الأخطاء التي يقع فيها المواطنون عند تقديم الطلبات الإدارية وكيف تتجنبها.", category: "admin", readTime: 7 },
    { id: "ar-072", slug: "shikaya-dawla-taawun", title: "كيف تتقدم بشكاية ضد جهة حكومية في المغرب", excerpt: "خطوات تقديم شكاية ضد إدارة حكومية أو موظف عمومي.", category: "admin", readTime: 8 },
    { id: "ar-073", slug: "risalat-istijwab-maghrib", title: "رسالة الاستفسار الرسمية في المغرب", excerpt: "كيف تكتب رسالة استفسار رسمية للحصول على معلومات من جهة حكومية.", category: "admin", readTime: 6 },
    { id: "ar-074", slug: "ikhbar-idari-rasmi", title: "الإخبار الإداري: ما هو وكيف تكتبه", excerpt: "مفهوم الإخبار الإداري وكيفية صياغته بشكل قانوني وفعّال.", category: "admin", readTime: 7 },
    { id: "ar-075", slug: "taqdim-malaf-tadawr", title: "كيف تتابع ملفك الإداري بعد تقديمه", excerpt: "نصائح لمتابعة الملف الإداري بعد تقديمه وكيف تطالب بحقوك.", category: "admin", readTime: 6 },
    { id: "ar-076", slug: "khidmat-aid-ijtimai-maghrib", title: "الحصول على المساعدة الاجتماعية في المغرب", excerpt: "إجراءات الاستفادة من برامج الدعم الاجتماعي وكيفية تقديم الطلب.", category: "admin", readTime: 8 },
    { id: "ar-077", slug: "taqawd-maghrib-taqdim", title: "ملف التقاعد في المغرب: الوثائق والإجراءات", excerpt: "كيف تعد ملف التقاعد وتتابعه مع الصناديق المختصة في المغرب.", category: "admin", readTime: 10 },
    { id: "ar-078", slug: "darasatan-tanja-muasasaat", title: "الدراسة في طنجة: المؤسسات والوثائق المطلوبة", excerpt: "دليل الوثائق والإجراءات الإدارية للالتحاق بالمؤسسات التعليمية في طنجة.", category: "tangier", readTime: 7 },
    { id: "ar-079", slug: "muqawala-saghira-tanja", title: "إنشاء مقاولة صغيرة في طنجة: الخطوات الإدارية", excerpt: "دليل إجراءات تأسيس مقاولة صغيرة في طنجة من التسجيل إلى الحصول على التراخيص.", category: "business", readTime: 10 },
    { id: "ar-080", slug: "hisab-bank-tanja-ajnabi", title: "فتح حساب بنكي في طنجة للأجانب", excerpt: "الوثائق والإجراءات اللازمة لفتح حساب بنكي في طنجة للأجانب.", category: "tangier", readTime: 7 },
    { id: "ar-081", slug: "sira-dhatia-inglizy-maghrib", title: "السيرة الذاتية الإنجليزية للوظائف الدولية بالمغرب", excerpt: "كيف تكتب سيرة ذاتية إنجليزية للتقدم لوظائف في شركات دولية بالمغرب.", category: "employment", readTime: 8 },
    { id: "ar-082", slug: "risalat-istiqala-maghrib", title: "رسالة الاستقالة في المغرب: كيف تكتبها", excerpt: "كيف تكتب رسالة استقالة احترافية في المغرب مع الحفاظ على علاقات مهنية جيدة.", category: "employment", readTime: 6 },
    { id: "ar-083", slug: "risalat-tazkia-mustawlif", title: "رسالة التزكية المهنية: كيف تطلبها وكيف تكتبها", excerpt: "كيف تطلب رسالة توصية من مسؤولك وما يجب أن تتضمنه.", category: "employment", readTime: 7 },
    { id: "ar-084", slug: "talab-ziada-ratib", title: "كيف تطلب زيادة في الراتب بشكل رسمي", excerpt: "نموذج طلب مراجعة الراتب الرسمي وكيفية تقديمه لصاحب العمل.", category: "employment", readTime: 7 },
    { id: "ar-085", slug: "wathiqa-tajriba-mihan", title: "شهادة الخبرة المهنية: كيف تحصل عليها", excerpt: "إجراءات الحصول على شهادة الخبرة المهنية وأهميتها في البحث عن عمل.", category: "employment", readTime: 6 },
    { id: "ar-086", slug: "tarjama-mahakim-maghrib", title: "الترجمة القضائية في المغرب: متى تحتاجها", excerpt: "ما هي الترجمة القضائية ومتى تكون ضرورية في الإجراءات القانونية بالمغرب.", category: "translation", readTime: 8 },
    { id: "ar-087", slug: "tarjama-mustanad-dirasiya", title: "ترجمة الشهادات الدراسية للدراسة في الخارج", excerpt: "كيف تترجم شهادتك الدراسية للتقديم في جامعات أوروبية أو كندية أو أمريكية.", category: "translation", readTime: 8 },
    { id: "ar-088", slug: "tarjama-taqrir-tibbi-tanja", title: "ترجمة التقارير الطبية في طنجة", excerpt: "خدمة ترجمة التقارير الطبية والتشخيصات الطبية بين اللغات الأربع.", category: "translation", readTime: 6 },
    { id: "ar-089", slug: "tarjama-aqd-ijara-fransawi", title: "ترجمة عقد الإيجار من الفرنسية إلى العربية", excerpt: "كيف تفهم وتترجم عقد الإيجار المكتوب بالفرنسية إلى العربية.", category: "translation", readTime: 7 },
    { id: "ar-090", slug: "tarjama-website-maghrib", title: "ترجمة المواقع الإلكترونية للعربية في المغرب", excerpt: "خدمات ترجمة المحتوى الإلكتروني والمواقع التجارية للغة العربية.", category: "translation", readTime: 6 },
    { id: "ar-091", slug: "kitabat-talab-qubbul-madaris", title: "كيف تكتب طلب القبول في المدرسة أو الجامعة", excerpt: "نموذج طلب قبول رسمي للمدارس والجامعات مع نصائح لرفع فرص القبول.", category: "admin", readTime: 7 },
    { id: "ar-092", slug: "talab-inhaz-qard-baridi", title: "كيف تتقدم بطلب قرض من بريد المغرب", excerpt: "إجراءات ووثائق طلب القرض الشخصي من مؤسسة بريد المغرب.", category: "admin", readTime: 7 },
    { id: "ar-093", slug: "risalat-talab-wazifa-hukumiya", title: "رسالة طلب وظيفة في القطاع الحكومي المغربي", excerpt: "كيف تكتب رسالة تقدم لوظيفة في الإدارة العامة والمؤسسات العامة بالمغرب.", category: "employment", readTime: 8 },
    { id: "ar-094", slug: "kitabat-talab-tasrih-bina", title: "طلب رخصة البناء في المغرب: الوثائق والإجراءات", excerpt: "قائمة الوثائق وإجراءات الحصول على رخصة البناء في المدن المغربية.", category: "admin", readTime: 9 },
    { id: "ar-095", slug: "talab-nasb-maqawil-tanja", title: "كيف تتقدم بطلب منصب مقاول في طنجة", excerpt: "إجراءات التسجيل كمقاول وتأسيس مقاولتك الخاصة في طنجة.", category: "business", readTime: 8 },
    { id: "ar-096", slug: "wathiqa-tarkiya-mihan-tanja", title: "التركيز المهني في طنجة: الشهادات والاعترافات", excerpt: "كيف توثق خبرتك المهنية وتحصل على اعتراف بكفاءاتك في طنجة.", category: "employment", readTime: 7 },
    { id: "ar-097", slug: "khidmat-katib-umumi-bad-covid", title: "كيف تغيرت خدمات الكتابة العمومية بعد كوفيد", excerpt: "التحول الرقمي في خدمات الكتابة العمومية في المغرب بعد جائحة كوفيد.", category: "general", readTime: 6 },
    { id: "ar-098", slug: "khidmat-waatisap-tanja", title: "خدمات الكتابة العمومية عبر واتساب في طنجة", excerpt: "كيف يمكنك الحصول على خدمات الكاتب العمومي عن بُعد عبر واتساب.", category: "digital", readTime: 5 },
    { id: "ar-099", slug: "kathib-umumi-wajibat", title: "ما هي مسؤوليات وواجبات الكاتب العمومي", excerpt: "الإطار القانوني والمهني لمهنة الكاتب العمومي في المغرب.", category: "general", readTime: 7 },
    { id: "ar-100", slug: "khidmat-tanja-mumtaza", title: "لماذا نحن الاختيار الأمثل للكتابة العمومية في طنجة", excerpt: "تعرف على ما يميز خدماتنا وكيف نضمن لك أفضل النتائج الإدارية.", category: "general", readTime: 5 },
  ],

  // ========== FRENCH — 50 ARTICLES ==========
  fr: [
    { id: "fr-001", slug: "ecrivain-public-tanger", title: "Écrivain Public à Tanger : Guide Complet des Services", excerpt: "Découvrez les services d'un écrivain public à Tanger et comment il peut vous aider dans vos démarches administratives.", category: "admin", readTime: 6 },
    { id: "fr-002", slug: "services-administratifs-tanger", title: "Services Administratifs à Tanger : Tout ce qu'il faut savoir", excerpt: "Guide complet des services administratifs disponibles à Tanger, Maroc.", category: "admin", readTime: 7 },
    { id: "fr-003", slug: "rediger-lettre-administrative-maroc", title: "Comment Rédiger une Lettre Administrative au Maroc", excerpt: "Conseils pratiques pour rédiger des lettres administratives efficaces au Maroc.", category: "admin", readTime: 8 },
    { id: "fr-004", slug: "cv-professionnel-tanger", title: "CV Professionnel à Tanger : Comment le Réussir", excerpt: "Guide complet pour créer un CV professionnel qui décroche des entretiens au Maroc.", category: "employment", readTime: 7 },
    { id: "fr-005", slug: "lettre-motivation-maroc", title: "Lettre de Motivation au Maroc : Guide et Exemples", excerpt: "Comment rédiger une lettre de motivation percutante pour le marché du travail marocain.", category: "employment", readTime: 8 },
    { id: "fr-006", slug: "traduction-documents-tanger", title: "Traduction de Documents à Tanger : Services et Tarifs", excerpt: "Tout savoir sur les services de traduction de documents officiels à Tanger.", category: "translation", readTime: 6 },
    { id: "fr-007", slug: "visa-maroc-documents", title: "Demande de Visa depuis le Maroc : Documents Requis", excerpt: "Liste complète des documents nécessaires pour une demande de visa depuis le Maroc.", category: "immigration", readTime: 9 },
    { id: "fr-008", slug: "reclamation-administrative-maroc", title: "Réclamation Administrative au Maroc : Comment Procéder", excerpt: "Guide étape par étape pour déposer une réclamation administrative efficace au Maroc.", category: "admin", readTime: 8 },
    { id: "fr-009", slug: "lettre-invitation-visa", title: "Lettre d'Invitation pour Visa : Modèle et Conseils", excerpt: "Comment rédiger une lettre d'invitation officielle pour une demande de visa.", category: "immigration", readTime: 7 },
    { id: "fr-010", slug: "dossier-visa-schengen-maroc", title: "Dossier Visa Schengen depuis le Maroc : Guide Complet", excerpt: "Tout sur la constitution d'un dossier de visa Schengen depuis le Maroc.", category: "immigration", readTime: 10 },
    { id: "fr-011", slug: "traduction-arabe-francais-maroc", title: "Traduction Arabe-Français au Maroc : Quand et Pourquoi", excerpt: "Dans quels cas avez-vous besoin d'une traduction arabe-français et comment la faire correctement.", category: "translation", readTime: 6 },
    { id: "fr-012", slug: "contrat-travail-maroc", title: "Contrat de Travail au Maroc : Les Points Essentiels", excerpt: "Ce que doit contenir un contrat de travail légal au Maroc.", category: "legal", readTime: 9 },
    { id: "fr-013", slug: "certificat-residence-maroc", title: "Certificat de Résidence au Maroc : Comment l'Obtenir", excerpt: "Démarches pour obtenir votre certificat de résidence auprès des autorités locales.", category: "admin", readTime: 6 },
    { id: "fr-014", slug: "tanger-ville-administrative", title: "Tanger : Guide des Administrations Publiques", excerpt: "Guide des principales administrations et services publics à Tanger.", category: "tangier", readTime: 7 },
    { id: "fr-015", slug: "expatries-tanger-administratif", title: "Expatriés à Tanger : Guide des Formalités Administratives", excerpt: "Guide complet des démarches administratives pour les expatriés et étrangers à Tanger.", category: "tangier", readTime: 9 },
    { id: "fr-016", slug: "recours-administratif-maroc", title: "Recours Administratif au Maroc : Procédure Complète", excerpt: "Comment contester une décision administrative au Maroc : délais, procédures, conseils.", category: "admin", readTime: 8 },
    { id: "fr-017", slug: "declaration-officielle-maroc", title: "Déclaration Officielle au Maroc : Quand et Comment", excerpt: "Guide des déclarations officielles nécessaires dans différentes situations au Maroc.", category: "legal", readTime: 7 },
    { id: "fr-018", slug: "courrier-professionnel-maroc", title: "Courrier Professionnel au Maroc : Règles et Exemples", excerpt: "Les règles de rédaction du courrier professionnel formel au Maroc.", category: "business", readTime: 7 },
    { id: "fr-019", slug: "documents-mariage-maroc", title: "Documents Mariage au Maroc : Liste Complète", excerpt: "Tous les documents nécessaires pour se marier légalement au Maroc.", category: "admin", readTime: 8 },
    { id: "fr-020", slug: "procuration-maroc", title: "Procuration au Maroc : Types et Démarches", excerpt: "Guide des procurations légales au Maroc : types, démarches, validité.", category: "legal", readTime: 7 },
    { id: "fr-021", slug: "service-rh-lettre-reference", title: "Lettre de Référence Professionnelle au Maroc", excerpt: "Comment demander et rédiger une lettre de référence professionnelle au Maroc.", category: "employment", readTime: 6 },
    { id: "fr-022", slug: "inscription-universite-maroc", title: "Inscription Université au Maroc : Dossier Complet", excerpt: "Comment constituer un dossier d'inscription universitaire complet au Maroc.", category: "admin", readTime: 7 },
    { id: "fr-023", slug: "visa-canada-maroc", title: "Visa Canada depuis le Maroc : Guide Pratique", excerpt: "Démarches et documents pour une demande de visa canadien depuis le Maroc.", category: "immigration", readTime: 9 },
    { id: "fr-024", slug: "creation-entreprise-tanger", title: "Créer une Entreprise à Tanger : Démarches Administratives", excerpt: "Guide des formalités administratives pour créer une entreprise à Tanger.", category: "business", readTime: 10 },
    { id: "fr-025", slug: "carte-nationale-maroc", title: "Carte Nationale d'Identité au Maroc : Renouvellement", excerpt: "Procédure de renouvellement ou de première obtention de la CIN marocaine.", category: "admin", readTime: 6 },
    { id: "fr-026", slug: "traduction-diplome-maroc", title: "Traduction de Diplôme au Maroc pour l'Étranger", excerpt: "Comment faire traduire son diplôme marocain pour une utilisation à l'étranger.", category: "translation", readTime: 7 },
    { id: "fr-027", slug: "assurance-maladie-maroc-documents", title: "Dossier Assurance Maladie au Maroc", excerpt: "Documents et démarches pour s'inscrire à l'assurance maladie obligatoire au Maroc.", category: "admin", readTime: 7 },
    { id: "fr-028", slug: "ecrivain-public-digital-tanger", title: "Écrivain Public Digital à Tanger : Services en Ligne", excerpt: "Comment bénéficier des services d'un écrivain public à distance via WhatsApp.", category: "digital", readTime: 5 },
    { id: "fr-029", slug: "formulaires-en-ligne-maroc", title: "Remplir les Formulaires Administratifs en Ligne au Maroc", excerpt: "Guide pour naviguer et compléter les formulaires administratifs sur les plateformes marocaines.", category: "digital", readTime: 6 },
    { id: "fr-030", slug: "demande-pension-retraite-maroc", title: "Dossier Retraite au Maroc : Documents et Procédure", excerpt: "Comment préparer et soumettre votre dossier de retraite aux organismes compétents.", category: "admin", readTime: 9 },
    { id: "fr-031", slug: "traduction-contrat-arabe-francais", title: "Traduction de Contrat Arabe-Français : Guide Pratique", excerpt: "Comment faire traduire un contrat de l'arabe vers le français au Maroc.", category: "translation", readTime: 6 },
    { id: "fr-032", slug: "marche-emploi-tanger-2024", title: "Marché de l'Emploi à Tanger en 2024 : Opportunités", excerpt: "Analyse du marché du travail à Tanger et les secteurs qui recrutent le plus.", category: "employment", readTime: 8 },
    { id: "fr-033", slug: "lettre-resiliation-maroc", title: "Lettre de Résiliation au Maroc : Modèles et Conseils", excerpt: "Comment rédiger une lettre de résiliation efficace pour un contrat au Maroc.", category: "business", readTime: 6 },
    { id: "fr-034", slug: "titre-de-sejour-maroc-etranger", title: "Titre de Séjour au Maroc pour Étrangers", excerpt: "Démarches pour obtenir ou renouveler un titre de séjour au Maroc.", category: "immigration", readTime: 8 },
    { id: "fr-035", slug: "acte-naissance-maroc-copie", title: "Copie d'Acte de Naissance au Maroc : Comment l'Obtenir", excerpt: "Procédures pour obtenir une copie de votre acte de naissance marocain.", category: "admin", readTime: 6 },
    { id: "fr-036", slug: "aide-juridique-tanger", title: "Aide Juridique à Tanger : Qui Contacter", excerpt: "Les ressources d'aide juridique disponibles à Tanger pour les citoyens.", category: "legal", readTime: 7 },
    { id: "fr-037", slug: "correspondance-commerciale-maroc", title: "Correspondance Commerciale au Maroc : Standards", excerpt: "Les standards de la correspondance commerciale professionnelle au Maroc.", category: "business", readTime: 7 },
    { id: "fr-038", slug: "visa-etudiant-maroc", title: "Visa Étudiant depuis le Maroc : Démarches Complètes", excerpt: "Tout sur la demande de visa étudiant pour étudier en Europe ou en Amérique du Nord.", category: "immigration", readTime: 9 },
    { id: "fr-039", slug: "traduction-certifiee-maroc", title: "Traduction Certifiée au Maroc : Quand la Demander", excerpt: "Dans quels cas vous avez besoin d'une traduction certifiée ou assermentée au Maroc.", category: "translation", readTime: 7 },
    { id: "fr-040", slug: "plainte-administrative-maroc", title: "Porter Plainte contre une Administration au Maroc", excerpt: "Procédure pour déposer une plainte officielle contre une administration publique.", category: "admin", readTime: 8 },
    { id: "fr-041", slug: "dossier-allocation-sociale-maroc", title: "Aides Sociales au Maroc : Constituer son Dossier", excerpt: "Comment préparer un dossier de demande d'aide sociale au Maroc.", category: "admin", readTime: 8 },
    { id: "fr-042", slug: "traduction-anglais-arabe-maroc", title: "Traduction Anglais-Arabe au Maroc : Guide Pratique", excerpt: "Services de traduction anglais-arabe pour documents officiels et professionnels au Maroc.", category: "translation", readTime: 6 },
    { id: "fr-043", slug: "demande-permis-construire-maroc", title: "Permis de Construire au Maroc : Dossier Complet", excerpt: "Documents et démarches pour obtenir un permis de construire au Maroc.", category: "admin", readTime: 9 },
    { id: "fr-044", slug: "apostille-maroc", title: "Apostille au Maroc : Légalisation de Documents", excerpt: "Comment faire apostiller un document marocain pour une utilisation internationale.", category: "legal", readTime: 7 },
    { id: "fr-045", slug: "lettre-demission-maroc", title: "Lettre de Démission au Maroc : Rédiger Correctement", excerpt: "Comment rédiger une lettre de démission professionnelle et légale au Maroc.", category: "employment", readTime: 6 },
    { id: "fr-046", slug: "documents-importation-maroc", title: "Documents d'Importation au Maroc : Ce qu'il faut préparer", excerpt: "Guide des documents nécessaires pour les opérations d'importation au Maroc.", category: "business", readTime: 8 },
    { id: "fr-047", slug: "ecrivain-public-seniors-tanger", title: "Services d'Écrivain Public pour Seniors à Tanger", excerpt: "Services adaptés aux personnes âgées pour leurs démarches administratives.", category: "general", readTime: 5 },
    { id: "fr-048", slug: "traduction-documents-medicaux-tanger", title: "Traduction de Documents Médicaux à Tanger", excerpt: "Services de traduction de documents médicaux entre arabe, français et anglais.", category: "translation", readTime: 6 },
    { id: "fr-049", slug: "conseils-visa-refus-maroc", title: "Visa Refusé : Comment Réagir et Recourir au Maroc", excerpt: "Que faire après un refus de visa depuis le Maroc : recours, nouvelle demande, conseils.", category: "immigration", readTime: 8 },
    { id: "fr-050", slug: "pourquoi-choisir-tanger-ecrivain", title: "Pourquoi Choisir Notre Service d'Écrivain Public à Tanger", excerpt: "Ce qui nous distingue comme prestataire de services administratifs à Tanger.", category: "general", readTime: 5 },
  ],

  // ========== ENGLISH — 50 ARTICLES ==========
  en: [
    { id: "en-001", slug: "public-writer-tangier-guide", title: "Public Writer in Tangier: Complete Guide to Services", excerpt: "Everything you need to know about public writing services in Tangier, Morocco.", category: "admin", readTime: 6 },
    { id: "en-002", slug: "administrative-assistance-morocco", title: "Administrative Assistance in Morocco: How It Works", excerpt: "A complete guide to getting administrative help in Morocco as a resident or foreigner.", category: "admin", readTime: 7 },
    { id: "en-003", slug: "document-translation-tangier", title: "Document Translation in Tangier: Languages & Services", excerpt: "Professional document translation services in Tangier for all official and personal needs.", category: "translation", readTime: 6 },
    { id: "en-004", slug: "professional-cv-morocco", title: "Professional CV in Morocco: What Employers Expect", excerpt: "How to craft a CV that meets Moroccan employer standards and stands out.", category: "employment", readTime: 7 },
    { id: "en-005", slug: "visa-application-morocco", title: "Visa Application from Morocco: Required Documents", excerpt: "Complete guide to visa applications from Morocco — Europe, USA, Canada and more.", category: "immigration", readTime: 9 },
    { id: "en-006", slug: "official-letter-writing-morocco", title: "How to Write an Official Letter in Morocco", excerpt: "Step-by-step guide to writing formal letters that get results in Morocco.", category: "admin", readTime: 7 },
    { id: "en-007", slug: "administrative-complaint-morocco", title: "Filing an Administrative Complaint in Morocco", excerpt: "How to write and submit an official complaint against a Moroccan institution.", category: "admin", readTime: 8 },
    { id: "en-008", slug: "living-tangier-expat-guide", title: "Living in Tangier: Expat Administrative Guide", excerpt: "Essential administrative information for expats and foreigners living in Tangier.", category: "tangier", readTime: 9 },
    { id: "en-009", slug: "residence-permit-morocco-foreigners", title: "Residence Permit in Morocco for Foreigners", excerpt: "How to apply for a residence permit in Morocco as a foreign national.", category: "immigration", readTime: 8 },
    { id: "en-010", slug: "cover-letter-morocco-jobs", title: "Cover Letter for Jobs in Morocco: Tips & Templates", excerpt: "How to write a compelling cover letter for the Moroccan job market.", category: "employment", readTime: 7 },
    { id: "en-011", slug: "tangier-business-setup", title: "Setting Up a Business in Tangier: Administrative Steps", excerpt: "A practical guide to the administrative requirements for starting a business in Tangier.", category: "business", readTime: 10 },
    { id: "en-012", slug: "schengen-visa-morocco-checklist", title: "Schengen Visa from Morocco: Complete Document Checklist", excerpt: "Every document you need for a successful Schengen visa application from Morocco.", category: "immigration", readTime: 9 },
    { id: "en-013", slug: "arabic-translation-services-morocco", title: "Arabic Translation Services in Morocco", excerpt: "Professional Arabic translation for official, legal and personal documents in Morocco.", category: "translation", readTime: 6 },
    { id: "en-014", slug: "invitation-letter-visa-morocco", title: "How to Write an Invitation Letter for a Visa", excerpt: "Template and tips for writing a formal invitation letter for a visa application.", category: "immigration", readTime: 7 },
    { id: "en-015", slug: "work-permit-morocco-foreigners", title: "Work Permit in Morocco for Foreign Nationals", excerpt: "Requirements and procedure for obtaining a work permit in Morocco.", category: "immigration", readTime: 8 },
    { id: "en-016", slug: "apostille-documents-morocco", title: "Apostille for Moroccan Documents: How It Works", excerpt: "How to get your Moroccan documents apostilled for international use.", category: "legal", readTime: 7 },
    { id: "en-017", slug: "birth-certificate-morocco-copy", title: "Getting a Birth Certificate Copy in Morocco", excerpt: "Procedures for obtaining a copy of your birth certificate in Morocco.", category: "admin", readTime: 6 },
    { id: "en-018", slug: "translation-medical-documents-tangier", title: "Medical Document Translation in Tangier", excerpt: "Fast and accurate medical document translation services in Tangier.", category: "translation", readTime: 5 },
    { id: "en-019", slug: "power-of-attorney-morocco", title: "Power of Attorney in Morocco: Types and Process", excerpt: "How to set up a power of attorney (procuration) in Morocco.", category: "legal", readTime: 7 },
    { id: "en-020", slug: "job-market-tangier-2024", title: "Job Market in Tangier 2024: Sectors & Opportunities", excerpt: "An overview of the employment landscape in Tangier and growing industries.", category: "employment", readTime: 8 },
    { id: "en-021", slug: "english-cv-morocco-international-jobs", title: "English CV for International Jobs in Morocco", excerpt: "How to tailor your English CV for international companies operating in Morocco.", category: "employment", readTime: 7 },
    { id: "en-022", slug: "resignation-letter-morocco", title: "Resignation Letter in Morocco: Professional Template", excerpt: "How to write a professional resignation letter that complies with Moroccan labor norms.", category: "employment", readTime: 6 },
    { id: "en-023", slug: "tourist-tangier-admin-help", title: "Tourist in Tangier: When You Need Administrative Help", excerpt: "Common administrative situations tourists face in Tangier and how to handle them.", category: "tangier", readTime: 6 },
    { id: "en-024", slug: "bank-account-tangier-foreigners", title: "Opening a Bank Account in Tangier as a Foreigner", excerpt: "Documents and steps required to open a bank account in Tangier as a foreign national.", category: "tangier", readTime: 7 },
    { id: "en-025", slug: "canada-visa-morocco-guide", title: "Canadian Visa from Morocco: Step-by-Step Guide", excerpt: "Everything you need to know to apply for a Canadian visa from Morocco.", category: "immigration", readTime: 9 },
    { id: "en-026", slug: "certified-translation-morocco", title: "Certified Translation in Morocco: When Is It Required", excerpt: "When you need certified or sworn translation in Morocco and how to get it.", category: "translation", readTime: 7 },
    { id: "en-027", slug: "lease-contract-morocco", title: "Lease Contract in Morocco: What to Include", excerpt: "Key clauses and requirements for a legal rental contract in Morocco.", category: "legal", readTime: 8 },
    { id: "en-028", slug: "business-letter-morocco-professional", title: "Business Letter Writing in Morocco: Professional Standards", excerpt: "The standards and etiquette for professional business correspondence in Morocco.", category: "business", readTime: 7 },
    { id: "en-029", slug: "pdf-documents-morocco-official", title: "Creating Official PDF Documents in Morocco", excerpt: "How to prepare and format official PDF documents that are accepted by Moroccan institutions.", category: "digital", readTime: 6 },
    { id: "en-030", slug: "whatsapp-public-writer-tangier", title: "How to Get Public Writing Help via WhatsApp in Tangier", excerpt: "How our WhatsApp-based service works for quick and easy administrative help.", category: "digital", readTime: 5 },
    { id: "en-031", slug: "french-arabic-translation-official", title: "French to Arabic Translation for Official Documents", excerpt: "Professional French-Arabic translation services for official documents in Morocco.", category: "translation", readTime: 6 },
    { id: "en-032", slug: "student-visa-morocco", title: "Student Visa from Morocco: Documents and Timeline", excerpt: "How to apply for a student visa to study abroad from Morocco.", category: "immigration", readTime: 9 },
    { id: "en-033", slug: "visa-refusal-morocco-what-to-do", title: "Visa Refusal from Morocco: What to Do Next", excerpt: "Your options after a visa refusal from Morocco: appeals, reapplication, tips.", category: "immigration", readTime: 8 },
    { id: "en-034", slug: "retirement-paperwork-morocco", title: "Retirement Paperwork in Morocco: Complete Guide", excerpt: "How to prepare your retirement file and submit it to the right Moroccan institution.", category: "admin", readTime: 9 },
    { id: "en-035", slug: "social-aid-application-morocco", title: "Applying for Social Aid in Morocco", excerpt: "Documents and steps to apply for government social assistance programs in Morocco.", category: "admin", readTime: 8 },
    { id: "en-036", slug: "building-permit-morocco", title: "Building Permit in Morocco: Application Guide", excerpt: "Documents and procedures required to apply for a building permit in Morocco.", category: "admin", readTime: 9 },
    { id: "en-037", slug: "health-insurance-morocco-documents", title: "Health Insurance in Morocco: Required Documents", excerpt: "How to enroll in health insurance (AMO) and the documents required in Morocco.", category: "admin", readTime: 7 },
    { id: "en-038", slug: "tangier-administration-guide-english", title: "Navigating Tangier's Administration as an English Speaker", excerpt: "Practical tips for English-speaking expats and tourists dealing with Tangier's administration.", category: "tangier", readTime: 7 },
    { id: "en-039", slug: "professional-reference-letter-morocco", title: "Professional Reference Letter in Morocco", excerpt: "How to request and write a professional reference letter for Moroccan job applications.", category: "employment", readTime: 6 },
    { id: "en-040", slug: "import-export-documents-morocco", title: "Import & Export Documents in Morocco: What to Prepare", excerpt: "Key documents required for import and export operations in Morocco.", category: "business", readTime: 8 },
    { id: "en-041", slug: "digital-document-services-tangier", title: "Digital Document Services in Tangier: PDF & Word", excerpt: "How we help clients prepare digital documents in PDF and Word format in Tangier.", category: "digital", readTime: 5 },
    { id: "en-042", slug: "civil-status-documents-morocco", title: "Civil Status Documents in Morocco: Complete List", excerpt: "All the civil status documents you may need in Morocco and how to obtain them.", category: "admin", readTime: 7 },
    { id: "en-043", slug: "online-forms-morocco-guide", title: "Completing Online Administrative Forms in Morocco", excerpt: "A practical guide to filling in online forms on Moroccan government platforms.", category: "digital", readTime: 6 },
    { id: "en-044", slug: "legal-declaration-morocco", title: "Official Declarations in Morocco: When and How", excerpt: "Guide to writing official declarations (déclarations) for various situations in Morocco.", category: "legal", readTime: 7 },
    { id: "en-045", slug: "marriage-documents-morocco", title: "Marriage Documents in Morocco: Complete Checklist", excerpt: "Full list of documents needed for a legal marriage in Morocco.", category: "admin", readTime: 8 },
    { id: "en-046", slug: "driving-license-exchange-morocco", title: "Foreign Driving License Exchange in Morocco", excerpt: "How to exchange your foreign driving license for a Moroccan one.", category: "admin", readTime: 7 },
    { id: "en-047", slug: "company-registration-tangier", title: "Company Registration in Tangier: Step by Step", excerpt: "Complete walkthrough of registering a company in Tangier, Morocco.", category: "business", readTime: 10 },
    { id: "en-048", slug: "notarized-translation-morocco", title: "Notarized vs. Certified Translation in Morocco", excerpt: "The difference between notarized and certified translation and when you need each in Morocco.", category: "translation", readTime: 7 },
    { id: "en-049", slug: "spanish-translation-tangier", title: "Spanish Translation Services in Tangier", excerpt: "Professional Spanish translation for documents in Tangier — close to Spain, ready to help.", category: "translation", readTime: 5 },
    { id: "en-050", slug: "why-choose-public-writer-tangier", title: "Why Choose Our Public Writer Service in Tangier", excerpt: "What sets our professional public writing service apart in Tangier.", category: "general", readTime: 5 },
  ],

  // ========== SPANISH — 30 ARTICLES ==========
  es: [
    { id: "es-001", slug: "escritor-publico-tanger", title: "Escritor Público en Tánger: Guía Completa", excerpt: "Todo lo que necesita saber sobre los servicios de escritura pública en Tánger, Marruecos.", category: "admin", readTime: 6 },
    { id: "es-002", slug: "servicios-administrativos-marruecos", title: "Servicios Administrativos en Marruecos: Guía Práctica", excerpt: "Guía completa de los servicios administrativos disponibles en Marruecos para residentes y extranjeros.", category: "admin", readTime: 7 },
    { id: "es-003", slug: "traduccion-documentos-tanger", title: "Traducción de Documentos en Tánger: Servicios y Precios", excerpt: "Servicios profesionales de traducción de documentos oficiales en Tánger, Marruecos.", category: "translation", readTime: 6 },
    { id: "es-004", slug: "cv-profesional-marruecos", title: "CV Profesional en Marruecos: Qué Esperan los Empleadores", excerpt: "Cómo crear un CV que cumpla los estándares del mercado laboral marroquí.", category: "employment", readTime: 7 },
    { id: "es-005", slug: "visa-marruecos-documentos", title: "Solicitud de Visado desde Marruecos: Documentos Necesarios", excerpt: "Guía completa para solicitar visados desde Marruecos — Europa, EE.UU., Canadá.", category: "immigration", readTime: 9 },
    { id: "es-006", slug: "carta-oficial-marruecos", title: "Cómo Redactar una Carta Oficial en Marruecos", excerpt: "Guía paso a paso para redactar cartas formales que obtienen resultados en Marruecos.", category: "admin", readTime: 7 },
    { id: "es-007", slug: "reclamacion-administrativa-marruecos", title: "Reclamación Administrativa en Marruecos: Cómo Proceder", excerpt: "Cómo redactar y presentar una reclamación oficial ante una institución marroquí.", category: "admin", readTime: 8 },
    { id: "es-008", slug: "espanoles-tanger-tramites", title: "Españoles en Tánger: Guía de Trámites Administrativos", excerpt: "Información esencial para ciudadanos españoles que viven o visitan Tánger.", category: "tangier", readTime: 8 },
    { id: "es-009", slug: "permiso-residencia-marruecos-extranjeros", title: "Permiso de Residencia en Marruecos para Extranjeros", excerpt: "Cómo solicitar el permiso de residencia en Marruecos como extranjero.", category: "immigration", readTime: 8 },
    { id: "es-010", slug: "carta-presentacion-marruecos", title: "Carta de Presentación para Empleo en Marruecos", excerpt: "Cómo redactar una carta de presentación para el mercado laboral marroquí.", category: "employment", readTime: 7 },
    { id: "es-011", slug: "crear-empresa-tanger", title: "Crear una Empresa en Tánger: Pasos Administrativos", excerpt: "Guía de trámites administrativos para crear una empresa en Tánger, Marruecos.", category: "business", readTime: 9 },
    { id: "es-012", slug: "visa-schengen-marruecos-lista", title: "Visado Schengen desde Marruecos: Lista de Documentos", excerpt: "Todos los documentos necesarios para una solicitud de visado Schengen desde Marruecos.", category: "immigration", readTime: 9 },
    { id: "es-013", slug: "traduccion-arabe-espanol-tanger", title: "Traducción Árabe-Español en Tánger", excerpt: "Servicios de traducción árabe-español para documentos oficiales y personales en Tánger.", category: "translation", readTime: 5 },
    { id: "es-014", slug: "carta-invitacion-visa-marruecos", title: "Carta de Invitación para Visado: Modelo y Consejos", excerpt: "Cómo redactar una carta de invitación oficial para una solicitud de visado.", category: "immigration", readTime: 7 },
    { id: "es-015", slug: "apostilla-documentos-marruecos", title: "Apostilla en Marruecos: Legalización de Documentos", excerpt: "Cómo apostillar un documento marroquí para su uso internacional.", category: "legal", readTime: 7 },
    { id: "es-016", slug: "tanger-cerca-espana-servicios", title: "Tánger, Cerca de España: Servicios Administrativos Bilingües", excerpt: "Servicios administrativos bilingües español-árabe para personas que cruzan el estrecho.", category: "tangier", readTime: 6 },
    { id: "es-017", slug: "traduccion-certificada-marruecos", title: "Traducción Certificada en Marruecos: Cuándo la Necesita", excerpt: "En qué casos necesita una traducción certificada o jurada en Marruecos.", category: "translation", readTime: 7 },
    { id: "es-018", slug: "contrato-arrendamiento-marruecos", title: "Contrato de Arrendamiento en Marruecos: Lo Esencial", excerpt: "Cláusulas clave y requisitos para un contrato de alquiler legal en Marruecos.", category: "legal", readTime: 8 },
    { id: "es-019", slug: "correo-profesional-marruecos", title: "Correspondencia Profesional en Marruecos: Normas", excerpt: "Las normas y etiqueta para la correspondencia comercial profesional en Marruecos.", category: "business", readTime: 7 },
    { id: "es-020", slug: "servicios-digitales-tanger-documentos", title: "Servicios Digitales de Documentos en Tánger", excerpt: "Cómo le ayudamos a preparar documentos digitales en PDF y Word en Tánger.", category: "digital", readTime: 5 },
    { id: "es-021", slug: "whatsapp-escritor-publico-tanger", title: "Escritor Público por WhatsApp en Tánger", excerpt: "Cómo funciona nuestro servicio de escritura pública a distancia por WhatsApp.", category: "digital", readTime: 5 },
    { id: "es-022", slug: "traduccion-frances-espanol-marruecos", title: "Traducción Francés-Español en Marruecos", excerpt: "Servicios de traducción francés-español para documentos oficiales en Marruecos.", category: "translation", readTime: 6 },
    { id: "es-023", slug: "visa-canada-marruecos-espanol", title: "Visado Canadá desde Marruecos: Guía en Español", excerpt: "Todo lo necesario para solicitar un visado canadiense desde Marruecos.", category: "immigration", readTime: 9 },
    { id: "es-024", slug: "mercado-laboral-tanger", title: "Mercado Laboral en Tánger: Oportunidades para Extranjeros", excerpt: "Panorama del mercado laboral en Tánger y sectores con más empleo.", category: "employment", readTime: 8 },
    { id: "es-025", slug: "declaracion-oficial-marruecos", title: "Declaraciones Oficiales en Marruecos: Cuándo y Cómo", excerpt: "Guía para redactar declaraciones oficiales en diversas situaciones en Marruecos.", category: "legal", readTime: 7 },
    { id: "es-026", slug: "registro-empresa-tanger-paso-a-paso", title: "Registro de Empresa en Tánger: Paso a Paso", excerpt: "Guía completa del proceso de registro de una empresa en Tánger, Marruecos.", category: "business", readTime: 10 },
    { id: "es-027", slug: "documentos-matrimonio-marruecos", title: "Documentos para Matrimonio en Marruecos: Lista Completa", excerpt: "Lista completa de documentos necesarios para casarse legalmente en Marruecos.", category: "admin", readTime: 8 },
    { id: "es-028", slug: "cuenta-bancaria-tanger-extranjeros", title: "Abrir Cuenta Bancaria en Tánger para Extranjeros", excerpt: "Documentos y pasos para abrir una cuenta bancaria en Tánger como extranjero.", category: "tangier", readTime: 7 },
    { id: "es-029", slug: "traduccion-ingles-arabe-marruecos", title: "Traducción Inglés-Árabe en Marruecos: Guía Práctica", excerpt: "Servicios de traducción inglés-árabe para documentos oficiales y profesionales.", category: "translation", readTime: 6 },
    { id: "es-030", slug: "por-que-elegir-tanger-escritor", title: "Por Qué Elegir Nuestro Servicio de Escritor Público en Tánger", excerpt: "Lo que nos diferencia como proveedor de servicios administrativos en Tánger.", category: "general", readTime: 5 },
  ]
};

// Render blog listing for a given language
function renderBlogGrid(lang, limit = 12) {
  const articles = BLOG_ARTICLES[lang] || BLOG_ARTICLES.en;
  const displayed = articles.slice(0, limit);

  return displayed.map(article => `
    <article class="blog-card" itemscope itemtype="https://schema.org/Article">
      <div class="blog-card__cat blog-cat--${article.category}">${getCategoryLabel(lang, article.category)}</div>
      <h3 class="blog-card__title" itemprop="headline">
        <a href="blog/${article.slug}.html" itemprop="url">${article.title}</a>
      </h3>
      <p class="blog-card__excerpt" itemprop="description">${article.excerpt}</p>
      <div class="blog-card__meta">
        <span class="read-time">⏱ ${article.readTime} ${lang === 'ar' ? 'دقائق' : lang === 'fr' ? 'min' : lang === 'es' ? 'min' : 'min'}</span>
        <a href="blog/${article.slug}.html" class="read-more">
          ${lang === 'ar' ? 'اقرأ المزيد' : lang === 'fr' ? 'Lire la suite' : lang === 'es' ? 'Leer más' : 'Read more'} →
        </a>
      </div>
    </article>
  `).join('');
}

function getCategoryLabel(lang, cat) {
  const labels = {
    ar: { admin: 'إداري', employment: 'توظيف', translation: 'ترجمة', immigration: 'هجرة', legal: 'قانوني', business: 'أعمال', digital: 'رقمي', tangier: 'طنجة', general: 'عام' },
    fr: { admin: 'Administratif', employment: 'Emploi', translation: 'Traduction', immigration: 'Immigration', legal: 'Juridique', business: 'Entreprise', digital: 'Numérique', tangier: 'Tanger', general: 'Général' },
    en: { admin: 'Administrative', employment: 'Employment', translation: 'Translation', immigration: 'Immigration', legal: 'Legal', business: 'Business', digital: 'Digital', tangier: 'Tangier', general: 'General' },
    es: { admin: 'Administrativo', employment: 'Empleo', translation: 'Traducción', immigration: 'Inmigración', legal: 'Legal', business: 'Empresas', digital: 'Digital', tangier: 'Tánger', general: 'General' }
  };
  return (labels[lang] || labels.en)[cat] || cat;
}

if (typeof module !== 'undefined') module.exports = { BLOG_ARTICLES, renderBlogGrid, getCategoryLabel };
