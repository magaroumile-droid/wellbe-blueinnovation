import { ArrowRight, Sparkles, Shield, Heart, Users, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ModuleCard } from "@/components/shared/ModuleCard";
import { TestimonialCard } from "@/components/shared/TestimonialCard";
import { FAQAccordion, FAQItem } from "@/components/shared/FAQAccordion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { useCountUp } from "@/hooks/useCountUp";
import { useParallax } from "@/hooks/useParallax";
import { LogoMarquee } from "@/components/shared/LogoMarquee";
import platformDashboard from "@/assets/platform-dashboard.png";
import logoProfiltek from "@/assets/logo-profiltek.png";
import logoWish from "@/assets/logo-wish.png";
import logoArtigiani from "@/assets/logo-artigiani.png";
import logoBeautyprof from "@/assets/logo-beautyprof.png";
import logoMsc from "@/assets/logo-msc.png";
import logoCadis from "@/assets/logo-cadis.png";
import logoSynedrio from "@/assets/logo-synedrio.png";
import logoTodsystem from "@/assets/logo-todsystem.jpg";
import logoFluentis from "@/assets/logo-fluentis.png";

const modules = [
  {
    title: "Happiness",
    description: "Misura il clima organizzativo e il benessere con l'indicatore BWI e ottieni la certificazione digitale.",
    icon: Sparkles,
    color: "blue" as const,
  },
  {
    title: "Sicurezza e Rischio",
    description: "Analizza la percezione della sicurezza e promuovi una cultura della prevenzione responsabile.",
    icon: Shield,
    color: "orange" as const,
  },
  {
    title: "JD-R Healthcare",
    description: "Bilancia richieste e risorse nel settore sanitario per proteggere chi si prende cura degli altri.",
    icon: Heart,
    color: "pink" as const,
  },
  {
    title: "Parità di Genere",
    description: "Costruisci un ambiente inclusivo e ottieni la certificazione UNI/PdR 125:2022 per la parità di genere.",
    icon: Users,
    color: "green" as const,
    isNew: true,
  },
];

const benefits = [
  {
    title: "Impatto Sociale Misurabile",
    description: "Trasforma il benessere organizzativo in KPI concreti per il tuo bilancio di sostenibilità e report ESG.",
    icon: "📊",
  },
  {
    title: "Persone al Centro",
    description: "Ogni assessment mette le persone al centro, valorizzando il capitale umano come asset strategico dell'impresa.",
    icon: "💚",
  },
  {
    title: "Responsabilità d'Impresa",
    description: "Conformità agli standard nazionali e internazionali per una governance sociale solida e trasparente.",
    icon: "🏛️",
  },
];

const testimonials = [
  {
    quote: "Wellbe ci ha dato un'istantanea accurata del nostro benessere complessivo, permettendoci di affrontare rapidamente i punti critici. Con questi insight abbiamo lanciato una call di open innovation con l'Università della Calabria.",
    author: "Giovanni",
    role: "CEO",
    company: "Profiltek",
    metric: { value: "+43%", label: "Risposta immediata" },
    logo: logoProfiltek,
  },
  {
    quote: "Eravamo già consapevoli di alcune aree problematiche, ma Wellbe le ha confermate con un approccio anonimo e user-friendly. La sua semplicità e i dati precisi lo rendono indispensabile.",
    author: "Sara",
    role: "Technical Director",
    company: "Wish",
    metric: { value: "+52%", label: "Accuratezza analisi" },
    logo: logoWish,
  },
  {
    quote: "Grazie a Wellbe abbiamo scoperto problemi nascosti che sarebbero altrimenti rimasti sotto il radar. Il report dettagliato ci ha aiutato a vincere l'Innovation Award a SMAU 2023.",
    author: "Vincenzo",
    role: "CEO",
    company: "Gli Artigiani del Riposo",
    metric: { value: "+46%", label: "Collaborazione team" },
    logo: logoArtigiani,
  },
];

const homepageFAQs: FAQItem[] = [
  {
    question: "Cos'è la Sostenibilità Sociale d'Impresa?",
    answer: "La Sostenibilità Sociale d'Impresa è la dimensione 'S' degli ESG: riguarda il benessere delle persone, la sicurezza sul lavoro, l'inclusione e l'equità. Wellbe ti aiuta a misurarla e migliorarla con dati concreti.",
  },
  {
    question: "Come Wellbe supporta il bilancio di sostenibilità?",
    answer: "Wellbe fornisce metriche validate scientificamente che possono essere integrate direttamente nel tuo report ESG e bilancio di sostenibilità, dimostrando l'impegno concreto verso le persone.",
  },
  {
    question: "A chi si rivolge la piattaforma?",
    answer: "A tutte le organizzazioni che vogliono mettere le persone al centro: imprese, enti pubblici, settore sanitario. Dalla PMI alla grande azienda, Wellbe si adatta alle tue esigenze.",
  },
  {
    question: "Come vengono protetti i dati dei dipendenti?",
    answer: "La sicurezza dei dati è la nostra priorità. Siamo pienamente conformi al GDPR, garantiamo l'anonimato delle risposte e utilizziamo crittografia end-to-end.",
  },
  {
    question: "È disponibile una demo gratuita?",
    answer: "Sì! Prenota una demo gratuita per scoprire come Wellbe può supportare la tua strategia di sostenibilità sociale.",
  },
];

export default function Index() {
  const { count: companyCount, ref: countRef } = useCountUp(40, 2000);
  const { ref: parallaxRef, offset } = useParallax(0.3);

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={parallaxRef} className="relative hero-gradient text-primary-foreground overflow-hidden">
        {/* Parallax Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/20 rounded-full blur-3xl animate-pulse-slow transition-transform duration-100"
            style={{ transform: `translateY(${offset * 0.5}px) translateX(${offset * 0.2}px)` }}
          />
          <div 
            className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-accent/20 rounded-full blur-3xl animate-pulse-slow transition-transform duration-100"
            style={{ transform: `translateY(${offset * 0.3}px) translateX(${-offset * 0.15}px)`, animationDelay: "1s" }}
          />
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl transition-transform duration-100"
            style={{ transform: `translate(-50%, -50%) scale(${1 + offset * 0.0005})` }}
          />
        </div>

        <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-28 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Text Content */}
            <div className="text-left">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 animate-fade-in-up">
                La prima piattaforma per la{" "}
                <span className="gradient-text bg-gradient-to-r from-primary-foreground to-accent">
                  Sostenibilità Sociale d'Impresa
                </span>
              </h1>
              <p className="text-lg lg:text-xl text-primary-foreground/80 mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                Misura benessere, sicurezza, inclusione e clima organizzativo. Trasforma i dati in azioni concrete per le persone e il tuo bilancio di sostenibilità.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                <Link to="/contatti">
                  <Button size="lg" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 font-semibold px-8">
                    Prenota una Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/piattaforma">
                  <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8">
                    Scopri i Moduli
                  </Button>
                </Link>
              </div>
              
              {/* Animated Counter Badge */}
              <div ref={countRef} className="mt-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                <div className="inline-flex items-center gap-4 px-6 py-3 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-foreground/20">
                    <Building2 className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-bold text-primary-foreground">
                      +{companyCount}
                    </div>
                    <div className="text-sm text-primary-foreground/80">
                      aziende hanno già scelto Wellbe
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Dashboard Preview */}
            <div className="animate-fade-in-up lg:animate-none" style={{ animationDelay: "0.3s" }}>
              <div 
                className="relative rounded-2xl overflow-hidden shadow-2xl border border-primary-foreground/10 transition-transform duration-300"
                style={{ transform: `translateY(${-offset * 0.1}px)` }}
              >
                <img 
                  src={platformDashboard} 
                  alt="Wellbe Platform Dashboard - Analytics e insights per la sostenibilità sociale"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Marquee */}
      <section className="py-12 bg-background border-b border-border/50">
        <div className="container mx-auto px-4 lg:px-8 mb-8">
          <p className="text-center text-sm text-muted-foreground font-medium uppercase tracking-wider">
            Aziende che ci hanno scelto
          </p>
        </div>
        <LogoMarquee
          logos={[
            { src: logoProfiltek, alt: "Profiltek" },
            { src: logoWish, alt: "Wish Innovation" },
            { src: logoArtigiani, alt: "Gli Artigiani del Riposo" },
            { src: logoBeautyprof, alt: "Beautyprof" },
            { src: logoMsc, alt: "Medical Sport Center" },
            { src: logoCadis, alt: "Cadis" },
            { src: logoSynedrio, alt: "Synedrio Coworking" },
            { src: logoTodsystem, alt: "Tod System" },
            { src: logoFluentis, alt: "Fluentis" },
          ]}
        />
      </section>

      {/* Modules Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            badge="I Nostri Moduli"
            title="I pilastri della Sostenibilità Sociale"
            description="Quattro aree chiave per misurare e migliorare l'impatto sociale della tua organizzazione."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((module, index) => (
              <div
                key={module.title}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ModuleCard {...module} />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/piattaforma">
              <Button variant="outline" size="lg" className="font-medium">
                Esplora tutti i moduli
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            badge="Perché Wellbe"
            title="La 'S' di ESG, finalmente misurabile"
            description="Dati concreti per dimostrare il tuo impegno verso le persone e la comunità aziendale."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="text-center p-8 rounded-2xl bg-card border border-border hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            badge="Testimonianze"
            title="Chi ha scelto la sostenibilità sociale"
            description="Storie di organizzazioni che hanno messo le persone al centro della loro strategia."
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.author}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            badge="Domande Frequenti"
            title="Hai delle domande?"
            description="Trova le risposte alle domande più comuni sulla nostra piattaforma."
          />
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={homepageFAQs} />
            <div className="text-center mt-10">
              <Link to="/faq">
                <Button variant="outline" className="font-medium">
                  Vedi tutte le FAQ
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 lg:py-28 hero-gradient text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/30 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Pronto a investire nelle persone?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-10">
              Scopri come la Sostenibilità Sociale d'Impresa può diventare il tuo vantaggio competitivo.
            </p>
            <Link to="/contatti">
              <Button size="lg" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 font-semibold px-10">
                Prenota una Demo Gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
