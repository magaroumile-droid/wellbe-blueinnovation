import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "it" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  it: {
    // Navbar
    "nav.home": "Home",
    "nav.piattaforma": "Piattaforma",
    "nav.chiSiamo": "Chi Siamo",
    "nav.faq": "FAQ",
    "nav.pricing": "Pricing",
    "nav.login": "Login",
    "nav.prenotaDemo": "Prenota Demo",

    // Hero
    "hero.title1": "La prima piattaforma per la",
    "hero.titleHighlight": "Responsabilità Sociale d'Impresa",
    "hero.subtitle": "Misura benessere, sicurezza, inclusione e clima organizzativo. Trasforma i dati in azioni concrete per le persone e il tuo bilancio di sostenibilità.",
    "hero.cta1": "Prenota una Demo",
    "hero.cta2": "Scopri i Moduli",
    "hero.companiesCount": "aziende hanno già scelto Wellbe",
    "hero.logoSection": "Aziende che ci hanno scelto",

    // Modules (Home)
    "modules.badge": "I Nostri Moduli",
    "modules.title": "I pilastri della Responsabilità Sociale",
    "modules.description": "Quattro aree chiave per misurare e migliorare l'impatto sociale della tua organizzazione.",
    "modules.happiness.desc": "Misura il clima organizzativo e il benessere con l'indicatore BWI e ottieni la certificazione digitale.",
    "modules.safety.desc": "Analizza la percezione della safety per rafforzare una cultura della prevenzione in azienda.",
    "modules.care.desc": "Assessment dedicato al personale sanitario per monitorare il benessere e prevenire il burnout.",
    "modules.dei.desc": "Costruisci un ambiente inclusivo e ottieni la certificazione UNI/PdR 125:2022 per la parità di genere.",
    "modules.exploreAll": "Esplora tutti i moduli",

    // Benefits
    "benefits.badge": "Perché Wellbe",
    "benefits.title": "La 'S' di ESG, finalmente misurabile",
    "benefits.description": "Dati concreti per dimostrare il tuo impegno verso le persone e la comunità aziendale.",
    "benefits.social.title": "Impatto Sociale Misurabile",
    "benefits.social.desc": "Trasforma il benessere organizzativo in KPI concreti per il tuo bilancio di sostenibilità e report ESG.",
    "benefits.people.title": "Persone al Centro",
    "benefits.people.desc": "Ogni assessment mette le persone al centro, valorizzando il capitale umano come asset strategico dell'impresa.",
    "benefits.governance.title": "Responsabilità d'Impresa",
    "benefits.governance.desc": "Conformità agli standard nazionali e internazionali per una governance sociale solida e trasparente.",

    // Testimonials
    "testimonials.badge": "Testimonianze",
    "testimonials.title": "Chi ha scelto la sostenibilità sociale",
    "testimonials.description": "Storie di organizzazioni che hanno messo le persone al centro della loro strategia.",
    "testimonials.1.quote": "Wellbe ci ha dato un'istantanea accurata del nostro benessere complessivo, permettendoci di affrontare rapidamente i punti critici. Con questi insight abbiamo lanciato una call di open innovation con l'Università della Calabria.",
    "testimonials.1.metric": "Risposta immediata",
    "testimonials.2.quote": "Eravamo già consapevoli di alcune aree problematiche, ma Wellbe le ha confermate con un approccio anonimo e user-friendly. La sua semplicità e i dati precisi lo rendono indispensabile.",
    "testimonials.2.metric": "Accuratezza analisi",
    "testimonials.3.quote": "Grazie a Wellbe abbiamo scoperto problemi nascosti che sarebbero altrimenti rimasti sotto il radar. Il report dettagliato ci ha aiutato a vincere l'Innovation Award a SMAU 2023.",
    "testimonials.3.metric": "Collaborazione team",

    // FAQ (Home)
    "faq.badge": "Domande Frequenti",
    "faq.title": "Hai delle domande?",
    "faq.description": "Trova le risposte alle domande più comuni sulla nostra piattaforma.",
    "faq.seeAll": "Vedi tutte le FAQ",
    "faq.q1": "Cos'è la Responsabilità Sociale d'Impresa?",
    "faq.a1": "La Responsabilità Sociale d'Impresa è la dimensione 'S' degli ESG: riguarda il benessere delle persone, la sicurezza sul lavoro, l'inclusione e l'equità. Wellbe ti aiuta a misurarla e migliorarla con dati concreti.",
    "faq.q2": "Come Wellbe supporta il bilancio di sostenibilità?",
    "faq.a2": "Wellbe fornisce metriche validate scientificamente che possono essere integrate direttamente nel tuo report ESG e bilancio di sostenibilità, dimostrando l'impegno concreto verso le persone.",
    "faq.q3": "A chi si rivolge la piattaforma?",
    "faq.a3": "A tutte le organizzazioni che vogliono mettere le persone al centro: imprese, enti pubblici, settore sanitario. Dalla PMI alla grande azienda, Wellbe si adatta alle tue esigenze.",
    "faq.q4": "Come vengono protetti i dati dei dipendenti?",
    "faq.a4": "La sicurezza dei dati è la nostra priorità. Siamo pienamente conformi al GDPR, garantiamo l'anonimato delle risposte e utilizziamo crittografia end-to-end.",
    "faq.q5": "È disponibile una demo gratuita?",
    "faq.a5": "Sì! Prenota una demo gratuita per scoprire come Wellbe può supportare la tua strategia di sostenibilità sociale.",

    // CTA
    "cta.title": "Pronto a investire nelle persone?",
    "cta.subtitle": "Scopri come la Responsabilità Sociale d'Impresa può diventare il tuo vantaggio competitivo.",
    "cta.button": "Prenota una Demo Gratuita",

    // Piattaforma page
    "platform.badge": "La Piattaforma",
    "platform.title": "I Nostri Assessment",
    "platform.description": "Scientificamente validati. Co-progettati con consulenti certificati ed esperti di dominio. Conformi agli standard nazionali e internazionali.",
    "platform.requestDemo": "Richiedi una Demo",
    "platform.coDesigned": "Co-progettato con",
    "platform.happiness.subtitle": "Benessere e Clima Organizzativo",
    "platform.happiness.desc": "Basato su strumenti validati di psicologia del lavoro, il modulo Happiness misura il benessere percepito e il clima organizzativo della tua azienda tramite l'indicatore BWI (Blue Wellbeing Index).",
    "platform.happiness.f1": "Indicatore BWI proprietario",
    "platform.happiness.f2": "Certificazione e badge digitale BWI",
    "platform.happiness.f3": "Assessment basato su modelli scientifici validati",
    "platform.happiness.f4": "Report dettagliati per area/team",
    "platform.happiness.f5": "Benchmark di settore",
    "platform.safety.subtitle": "Percezione della Safety",
    "platform.safety.desc": "Analizza in modo strutturato la percezione della safety da parte dei dipendenti, con l'obiettivo di rafforzare una cultura della prevenzione all'interno dell'organizzazione.",
    "platform.safety.f1": "Valutazione percezione safety",
    "platform.safety.f2": "Analisi comportamenti sicuri",
    "platform.safety.f3": "Cultura della prevenzione",
    "platform.safety.f4": "Conformità normativa",
    "platform.safety.f5": "Piani di miglioramento",
    "platform.care.subtitle": "Assessment per il Personale Sanitario",
    "platform.care.desc": "Assessment dedicato alle Direzioni Sanitarie per monitorare il benessere del personale sanitario, prevenire il burnout e migliorare la qualità del lavoro.",
    "platform.care.f1": "Assessment scientificamente validato",
    "platform.care.f2": "Specifico per healthcare",
    "platform.care.f3": "Prevenzione burnout",
    "platform.care.f4": "Monitoraggio benessere",
    "platform.care.f5": "Performance team medici",
    "platform.dei.title": "Sistema di Gestione sulla Parità di Genere",
    "platform.dei.subtitle": "Certificazione UNI/PdR 125:2022",
    "platform.dei.desc": "Valuta le politiche e la cultura aziendale in tema di parità di genere. Supporta il percorso verso la certificazione UNI/PdR 125:2022 attraverso un sistema di gestione strutturato.",
    "platform.dei.f1": "Conformità UNI/PdR 125:2022",
    "platform.dei.f2": "Assessment cultura inclusiva",
    "platform.dei.f3": "Gap analysis parità",
    "platform.dei.f4": "Piano d'azione parità",
    "platform.dei.f5": "Monitoraggio KPI",
    "platform.vibewise.subtitle": "Silver Economy & Benessere Intergenerazionale",
    "platform.vibewise.desc": "Assessment scientificamente validato progettato specificamente per i lavoratori senior. Misura il benessere, la motivazione e il contributo intergenerazionale delle persone meno giovani, valorizzando il loro patrimonio di esperienza nell'ottica della silver economy.",
    "platform.vibewise.f1": "Assessment validato per lavoratori senior",
    "platform.vibewise.f2": "Misurazione del contributo intergenerazionale",
    "platform.vibewise.f3": "Analisi motivazione e ingaggio",
    "platform.vibewise.f4": "Valorizzazione del capitale esperienziale",
    "platform.vibewise.f5": "Report e piani di sviluppo personalizzati",

    // Chi Siamo
    "about.title": "Chi Siamo",
    "about.subtitle": "Wellbe è la startup di Blue Innovation dedicata alla Sostenibilità Sociale d'Impresa.",
    "about.storyBadge": "La Nostra Storia",
    "about.storyTitle": "Nati per trasformare il benessere organizzativo",
    "about.storyP1": "Wellbe nasce dall'esperienza di <strong>Blue Innovation</strong>, azienda specializzata in soluzioni digitali innovative per le imprese. La nostra missione è rendere misurabile e migliorabile la sostenibilità sociale, mettendo le persone al centro della strategia aziendale.",
    "about.storyP2": "Collaboriamo con università, consulenti certificati ed esperti di dominio per sviluppare assessment scientificamente validati e conformi agli standard internazionali.",
    "about.discoverBI": "Scopri Blue Innovation",
    "about.valuesBadge": "I Nostri Valori",
    "about.valuesTitle": "Cosa ci guida",
    "about.val1.title": "Innovazione",
    "about.val1.desc": "Sviluppiamo soluzioni all'avanguardia basate sulla ricerca scientifica.",
    "about.val2.title": "Semplicità",
    "about.val2.desc": "Rendiamo accessibili strumenti complessi attraverso interfacce intuitive.",
    "about.val3.title": "Benessere",
    "about.val3.desc": "Il benessere delle persone è al centro di ogni nostra decisione.",
    "about.val4.title": "Affidabilità",
    "about.val4.desc": "Garantiamo sicurezza dei dati e conformità agli standard più elevati.",

    // FAQ page
    "faqPage.title": "Domande Frequenti",
    "faqPage.subtitle": "Trova le risposte a tutte le tue domande sulla piattaforma Wellbe.",
    "faqPage.cat1": "Generale",
    "faqPage.g1q": "Cos'è Wellbe e cosa offre?",
    "faqPage.g1a": "Wellbe è l'unica piattaforma integrata per la Sostenibilità Sociale d'Impresa. Offriamo assessment scientifici per misurare benessere, sicurezza, DEI e molto altro.",
    "faqPage.g2q": "A chi si rivolge la piattaforma?",
    "faqPage.g2a": "A tutte le aziende che vogliono investire nel benessere: PMI, grandi imprese, settore pubblico e sanitario.",
    "faqPage.g3q": "È disponibile una demo gratuita?",
    "faqPage.g3a": "Sì! Puoi prenotare una demo gratuita direttamente dal nostro sito.",
    "faqPage.cat2": "Moduli & Funzionalità",
    "faqPage.m1q": "Quali moduli sono disponibili?",
    "faqPage.m1a": "Offriamo 4 moduli: Happiness, Sicurezza e Rischio, Wellbe Care e Parità di Genere (DEI).",
    "faqPage.m2q": "Posso attivare solo alcuni moduli?",
    "faqPage.m2a": "Assolutamente sì. La piattaforma è modulare e puoi scegliere solo i moduli di cui hai bisogno.",
    "faqPage.m3q": "Il modulo Parità di Genere è conforme alla UNI/PdR 125?",
    "faqPage.m3a": "Sì, il modulo Parità di Genere è progettato per supportare il percorso verso la certificazione UNI/PdR 125:2022.",
    "faqPage.cat3": "Privacy & Sicurezza",
    "faqPage.p1q": "Come vengono protetti i dati?",
    "faqPage.p1a": "Utilizziamo crittografia end-to-end, server sicuri in EU e siamo pienamente conformi al GDPR.",
    "faqPage.p2q": "L'anonimato è garantito?",
    "faqPage.p2a": "Sì, le risposte individuali sono sempre anonime. I report mostrano solo dati aggregati.",
    "faqPage.cat4": "Pricing",
    "faqPage.pr1q": "Come funziona il pricing?",
    "faqPage.pr1a": "Ogni organizzazione è unica. Costruiamo insieme un piano su misura per i tuoi obiettivi di sostenibilità sociale.",
    "faqPage.pr2q": "È possibile personalizzare il piano?",
    "faqPage.pr2a": "Sì, offriamo soluzioni completamente personalizzate in base alle tue esigenze e al numero di dipendenti.",
    "faqPage.cat5": "Implementazione",
    "faqPage.i1q": "Quanto tempo richiede l'attivazione?",
    "faqPage.i1a": "In media meno di una settimana, con supporto dedicato del nostro team.",
    "faqPage.i2q": "Offrite formazione?",
    "faqPage.i2a": "Sì, tutti i piani includono onboarding e formazione per il team HR.",

    // Pricing
    "pricing.title": "Il prezzo? Dipende da te.",
    "pricing.subtitle": "Ogni organizzazione è unica. Per questo costruiamo insieme un piano su misura per i tuoi obiettivi di sostenibilità sociale.",
    "pricing.cardTitle": "Investimento, non costo",
    "pricing.cardDesc": "Misuriamo il successo in impatto reale sulle persone. Parlaci dei tuoi obiettivi e ti mostreremo il valore concreto.",
    "pricing.cta": "Richiedi preventivo",
    "pricing.b1": "Non paghi fin quando Wellbe non è live",
    "pricing.b2": "Dati, assessment e report illimitati",
    "pricing.b3": "Consulente dedicato per tutta la durata del contratto",
    "pricing.b4": "Personalizzazioni illimitate sui moduli",
    "pricing.b5": "Prezzo scalabile basato sull'effettivo utilizzo della piattaforma",

    // Contatti
    "contact.title": "Prenota una Demo",
    "contact.subtitle": "Scopri come Wellbe può trasformare il benessere della tua azienda. Prenota una demo gratuita con il nostro team.",
    "contact.pickTime": "Scegli un orario",
    "contact.orContact": "Oppure contattaci",
    "contact.email": "Email",
    "contact.phone": "Telefono",
    "contact.hq": "Sede",

    // Footer
    "footer.desc": "L'unica piattaforma per la Responsabilità Sociale d'Impresa. Migliora il benessere dei tuoi dipendenti con assessment scientifici e dashboard intuitive.",
    "footer.platform": "Piattaforma",
    "footer.company": "Azienda",
    "footer.resources": "Risorse",
    "footer.rights": "Tutti i diritti riservati.",
    "footer.madeWith": "Made with ❤️ in Italia",
    "footer.privacyPolicy": "Privacy Policy",
  },

  en: {
    // Navbar
    "nav.home": "Home",
    "nav.piattaforma": "Platform",
    "nav.chiSiamo": "About Us",
    "nav.faq": "FAQ",
    "nav.pricing": "Pricing",
    "nav.login": "Login",
    "nav.prenotaDemo": "Book a Demo",

    // Hero
    "hero.title1": "The first platform for",
    "hero.titleHighlight": "Corporate Social Responsibility",
    "hero.subtitle": "Measure wellbeing, safety, inclusion, and organizational climate. Turn data into concrete actions for people and your sustainability report.",
    "hero.cta1": "Book a Demo",
    "hero.cta2": "Explore Modules",
    "hero.companiesCount": "companies have already chosen Wellbe",
    "hero.logoSection": "Companies that chose us",

    // Modules (Home)
    "modules.badge": "Our Modules",
    "modules.title": "The pillars of Social Responsibility",
    "modules.description": "Four key areas to measure and improve your organization's social impact.",
    "modules.happiness.desc": "Measure organizational climate and wellbeing with the BWI indicator and get the digital certification.",
    "modules.safety.desc": "Analyze safety perception to strengthen a prevention culture in the company.",
    "modules.care.desc": "Assessment dedicated to healthcare staff to monitor wellbeing and prevent burnout.",
    "modules.dei.desc": "Build an inclusive environment and get the UNI/PdR 125:2022 certification for gender equality.",
    "modules.exploreAll": "Explore all modules",

    // Benefits
    "benefits.badge": "Why Wellbe",
    "benefits.title": "The 'S' in ESG, finally measurable",
    "benefits.description": "Concrete data to demonstrate your commitment to people and the corporate community.",
    "benefits.social.title": "Measurable Social Impact",
    "benefits.social.desc": "Transform organizational wellbeing into concrete KPIs for your sustainability report and ESG reporting.",
    "benefits.people.title": "People First",
    "benefits.people.desc": "Every assessment puts people at the center, valuing human capital as a strategic business asset.",
    "benefits.governance.title": "Corporate Responsibility",
    "benefits.governance.desc": "Compliance with national and international standards for solid and transparent social governance.",

    // Testimonials
    "testimonials.badge": "Testimonials",
    "testimonials.title": "Who chose social sustainability",
    "testimonials.description": "Stories of organizations that put people at the center of their strategy.",
    "testimonials.1.quote": "Wellbe gave us an accurate snapshot of our overall wellbeing, allowing us to quickly address critical points. With these insights, we launched an open innovation call with the University of Calabria.",
    "testimonials.1.metric": "Immediate response",
    "testimonials.2.quote": "We were already aware of some problem areas, but Wellbe confirmed them with an anonymous, user-friendly approach. Its simplicity and accurate data make it indispensable.",
    "testimonials.2.metric": "Analysis accuracy",
    "testimonials.3.quote": "Thanks to Wellbe, we discovered hidden issues that would otherwise have stayed under the radar. The detailed report helped us win the Innovation Award at SMAU 2023.",
    "testimonials.3.metric": "Team collaboration",

    // FAQ (Home)
    "faq.badge": "Frequently Asked Questions",
    "faq.title": "Got questions?",
    "faq.description": "Find answers to the most common questions about our platform.",
    "faq.seeAll": "See all FAQs",
    "faq.q1": "What is Corporate Social Responsibility?",
    "faq.a1": "Corporate Social Responsibility is the 'S' dimension of ESG: it covers people's wellbeing, workplace safety, inclusion, and equity. Wellbe helps you measure and improve it with concrete data.",
    "faq.q2": "How does Wellbe support sustainability reporting?",
    "faq.a2": "Wellbe provides scientifically validated metrics that can be directly integrated into your ESG report and sustainability report, demonstrating concrete commitment to people.",
    "faq.q3": "Who is the platform for?",
    "faq.a3": "All organizations that want to put people first: businesses, public institutions, healthcare. From SMEs to large enterprises, Wellbe adapts to your needs.",
    "faq.q4": "How is employee data protected?",
    "faq.a4": "Data security is our priority. We are fully GDPR compliant, guarantee response anonymity, and use end-to-end encryption.",
    "faq.q5": "Is a free demo available?",
    "faq.a5": "Yes! Book a free demo to discover how Wellbe can support your social sustainability strategy.",

    // CTA
    "cta.title": "Ready to invest in people?",
    "cta.subtitle": "Discover how Corporate Social Responsibility can become your competitive advantage.",
    "cta.button": "Book a Free Demo",

    // Piattaforma page
    "platform.badge": "The Platform",
    "platform.title": "Our Assessments",
    "platform.description": "Scientifically validated. Co-designed with certified consultants and domain experts. Compliant with national and international standards.",
    "platform.requestDemo": "Request a Demo",
    "platform.coDesigned": "Co-designed with",
    "platform.happiness.subtitle": "Wellbeing and Organizational Climate",
    "platform.happiness.desc": "Based on validated occupational psychology tools, the Happiness module measures perceived wellbeing and organizational climate through the BWI (Blue Wellbeing Index) indicator.",
    "platform.happiness.f1": "Proprietary BWI indicator",
    "platform.happiness.f2": "BWI digital certification and badge",
    "platform.happiness.f3": "Assessment based on scientifically validated models",
    "platform.happiness.f4": "Detailed reports by area/team",
    "platform.happiness.f5": "Industry benchmarks",
    "platform.safety.subtitle": "Safety Perception",
    "platform.safety.desc": "Structurally analyzes employee safety perception, with the goal of strengthening a prevention culture within the organization.",
    "platform.safety.f1": "Safety perception assessment",
    "platform.safety.f2": "Safe behavior analysis",
    "platform.safety.f3": "Prevention culture",
    "platform.safety.f4": "Regulatory compliance",
    "platform.safety.f5": "Improvement plans",
    "platform.care.subtitle": "Healthcare Staff Assessment",
    "platform.care.desc": "Assessment dedicated to Healthcare Directorates to monitor healthcare staff wellbeing, prevent burnout, and improve work quality.",
    "platform.care.f1": "Scientifically validated assessment",
    "platform.care.f2": "Healthcare-specific",
    "platform.care.f3": "Burnout prevention",
    "platform.care.f4": "Wellbeing monitoring",
    "platform.care.f5": "Medical team performance",
    "platform.dei.title": "Gender Equality Management System",
    "platform.dei.subtitle": "UNI/PdR 125:2022 Certification",
    "platform.dei.desc": "Evaluates corporate policies and culture on gender equality. Supports the path to UNI/PdR 125:2022 certification through a structured management system.",
    "platform.dei.f1": "UNI/PdR 125:2022 compliance",
    "platform.dei.f2": "Inclusive culture assessment",
    "platform.dei.f3": "Equality gap analysis",
    "platform.dei.f4": "Equality action plan",
    "platform.dei.f5": "KPI monitoring",
    "platform.vibewise.subtitle": "Silver Economy & Intergenerational Wellbeing",
    "platform.vibewise.desc": "Scientifically validated assessment specifically designed for senior workers. Measures wellbeing, motivation, and intergenerational contribution of older employees, enhancing their wealth of experience within the silver economy framework.",
    "platform.vibewise.f1": "Validated assessment for senior workers",
    "platform.vibewise.f2": "Intergenerational contribution measurement",
    "platform.vibewise.f3": "Motivation and engagement analysis",
    "platform.vibewise.f4": "Experiential capital enhancement",
    "platform.vibewise.f5": "Personalized reports and development plans",

    // Chi Siamo
    "about.title": "About Us",
    "about.subtitle": "Wellbe is the Blue Innovation startup dedicated to Corporate Social Sustainability.",
    "about.storyBadge": "Our Story",
    "about.storyTitle": "Born to transform organizational wellbeing",
    "about.storyP1": "Wellbe was born from the experience of <strong>Blue Innovation</strong>, a company specializing in innovative digital solutions for businesses. Our mission is to make social sustainability measurable and improvable, putting people at the center of corporate strategy.",
    "about.storyP2": "We collaborate with universities, certified consultants, and domain experts to develop scientifically validated assessments compliant with international standards.",
    "about.discoverBI": "Discover Blue Innovation",
    "about.valuesBadge": "Our Values",
    "about.valuesTitle": "What guides us",
    "about.val1.title": "Innovation",
    "about.val1.desc": "We develop cutting-edge solutions based on scientific research.",
    "about.val2.title": "Simplicity",
    "about.val2.desc": "We make complex tools accessible through intuitive interfaces.",
    "about.val3.title": "Wellbeing",
    "about.val3.desc": "People's wellbeing is at the center of every decision we make.",
    "about.val4.title": "Reliability",
    "about.val4.desc": "We guarantee data security and compliance with the highest standards.",

    // FAQ page
    "faqPage.title": "Frequently Asked Questions",
    "faqPage.subtitle": "Find the answers to all your questions about the Wellbe platform.",
    "faqPage.cat1": "General",
    "faqPage.g1q": "What is Wellbe and what does it offer?",
    "faqPage.g1a": "Wellbe is the only integrated platform for Corporate Social Sustainability. We offer scientific assessments to measure wellbeing, safety, DEI, and much more.",
    "faqPage.g2q": "Who is the platform for?",
    "faqPage.g2a": "All companies that want to invest in wellbeing: SMEs, large enterprises, public sector, and healthcare.",
    "faqPage.g3q": "Is a free demo available?",
    "faqPage.g3a": "Yes! You can book a free demo directly from our website.",
    "faqPage.cat2": "Modules & Features",
    "faqPage.m1q": "Which modules are available?",
    "faqPage.m1a": "We offer 4 modules: Happiness, Safety & Risk, Wellbe Care, and Gender Equality (DEI).",
    "faqPage.m2q": "Can I activate only some modules?",
    "faqPage.m2a": "Absolutely yes. The platform is modular and you can choose only the modules you need.",
    "faqPage.m3q": "Is the Gender Equality module UNI/PdR 125 compliant?",
    "faqPage.m3a": "Yes, the Gender Equality module is designed to support the path to UNI/PdR 125:2022 certification.",
    "faqPage.cat3": "Privacy & Security",
    "faqPage.p1q": "How is data protected?",
    "faqPage.p1a": "We use end-to-end encryption, secure EU servers, and are fully GDPR compliant.",
    "faqPage.p2q": "Is anonymity guaranteed?",
    "faqPage.p2a": "Yes, individual responses are always anonymous. Reports show only aggregated data.",
    "faqPage.cat4": "Pricing",
    "faqPage.pr1q": "How does pricing work?",
    "faqPage.pr1a": "Every organization is unique. We build a custom plan together for your social sustainability goals.",
    "faqPage.pr2q": "Can the plan be customized?",
    "faqPage.pr2a": "Yes, we offer fully customized solutions based on your needs and number of employees.",
    "faqPage.cat5": "Implementation",
    "faqPage.i1q": "How long does activation take?",
    "faqPage.i1a": "On average less than a week, with dedicated support from our team.",
    "faqPage.i2q": "Do you offer training?",
    "faqPage.i2a": "Yes, all plans include onboarding and training for the HR team.",

    // Pricing
    "pricing.title": "The price? It depends on you.",
    "pricing.subtitle": "Every organization is unique. That's why we build a custom plan together for your social sustainability goals.",
    "pricing.cardTitle": "Investment, not a cost",
    "pricing.cardDesc": "We measure success by real impact on people. Tell us about your goals and we'll show you the concrete value.",
    "pricing.cta": "Request a quote",
    "pricing.b1": "You don't pay until Wellbe is live",
    "pricing.b2": "Unlimited data, assessments, and reports",
    "pricing.b3": "Dedicated consultant for the entire contract duration",
    "pricing.b4": "Unlimited module customizations",
    "pricing.b5": "Scalable pricing based on actual platform usage",

    // Contatti
    "contact.title": "Book a Demo",
    "contact.subtitle": "Discover how Wellbe can transform your company's wellbeing. Book a free demo with our team.",
    "contact.pickTime": "Pick a time",
    "contact.orContact": "Or contact us",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.hq": "Headquarters",

    // Footer
    "footer.desc": "The only platform for Corporate Social Responsibility. Improve your employees' wellbeing with scientific assessments and intuitive dashboards.",
    "footer.platform": "Platform",
    "footer.company": "Company",
    "footer.resources": "Resources",
    "footer.rights": "All rights reserved.",
    "footer.madeWith": "Made with ❤️ in Italy",
    "footer.privacyPolicy": "Privacy Policy",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("it");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
