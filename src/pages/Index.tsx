import { ArrowRight, Sparkles, Shield, Heart, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ModuleCard } from "@/components/shared/ModuleCard";
import { TestimonialCard } from "@/components/shared/TestimonialCard";
import { FAQAccordion, FAQItem } from "@/components/shared/FAQAccordion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { LogoBar } from "@/components/shared/LogoBar";

const modules = [
  {
    title: "Happiness",
    description: "Misura il benessere e il clima organizzativo con strumenti basati sulla psicologia del lavoro.",
    icon: Sparkles,
    color: "blue" as const,
  },
  {
    title: "Sicurezza e Rischio",
    description: "Analizza la percezione della sicurezza e la propensione al rischio per rafforzare la cultura della prevenzione.",
    icon: Shield,
    color: "orange" as const,
  },
  {
    title: "JD-R Healthcare",
    description: "Valuta l'equilibrio tra richieste lavorative e risorse nel settore sanitario per il benessere del personale.",
    icon: Heart,
    color: "pink" as const,
  },
  {
    title: "DEI",
    description: "Valuta le politiche aziendali su diversità, equità e inclusione. Conformità UNI/PdR 125:2022.",
    icon: Users,
    color: "green" as const,
    isNew: true,
  },
];

const benefits = [
  {
    title: "Conformità agli Standard",
    description: "I nostri assessment sono conformi agli standard nazionali e internazionali, garantendo validità scientifica e riconoscimento normativo.",
    icon: "🏆",
  },
  {
    title: "Esperti Certificati",
    description: "Collaboriamo con consulenti certificati ed esperti di dominio per co-progettare moduli su misura per le tue esigenze.",
    icon: "👥",
  },
  {
    title: "Trend Emergenti",
    description: "Monitoriamo costantemente i trend emergenti nel benessere organizzativo per offrirti soluzioni sempre aggiornate.",
    icon: "📈",
  },
];

const testimonials = [
  {
    quote: "Wellbe ha trasformato il modo in cui misuriamo e miglioriamo il benessere dei nostri dipendenti. I risultati sono stati sorprendenti.",
    author: "Marco Rossi",
    role: "HR Director",
    company: "TechCorp Italia",
    metric: { value: "+43%", label: "Engagement" },
  },
  {
    quote: "La dashboard è intuitiva e i report ci permettono di prendere decisioni basate sui dati. Consiglio Wellbe a tutte le aziende.",
    author: "Laura Bianchi",
    role: "CEO",
    company: "Innovate Srl",
    metric: { value: "-30%", label: "Turnover" },
  },
  {
    quote: "Il modulo DEI ci ha aiutato a ottenere la certificazione UNI/PdR 125. Un partner affidabile per la sostenibilità sociale.",
    author: "Giuseppe Verdi",
    role: "Sustainability Manager",
    company: "GreenCo",
    metric: { value: "+52%", label: "Inclusion Score" },
  },
];

const homepageFAQs: FAQItem[] = [
  {
    question: "Cos'è Wellbe e cosa offre?",
    answer: "Wellbe è l'unica piattaforma integrata per la Sostenibilità Sociale d'Impresa. Offriamo assessment scientifici per misurare benessere, sicurezza, DEI e molto altro, con dashboard intuitive e report dettagliati.",
  },
  {
    question: "A chi si rivolge la piattaforma?",
    answer: "Wellbe si rivolge a tutte le aziende che vogliono investire nel benessere dei propri dipendenti: dalle PMI alle grandi imprese, dal settore privato al pubblico, incluso il settore sanitario.",
  },
  {
    question: "È disponibile una demo gratuita?",
    answer: "Sì! Puoi prenotare una demo gratuita direttamente dal nostro sito. Ti mostreremo tutte le funzionalità della piattaforma e risponderemo alle tue domande.",
  },
  {
    question: "Come vengono protetti i dati dei dipendenti?",
    answer: "La sicurezza dei dati è la nostra priorità. Siamo pienamente conformi al GDPR, garantiamo l'anonimato delle risposte e utilizziamo crittografia end-to-end per tutti i dati.",
  },
  {
    question: "Quanto tempo richiede l'implementazione?",
    answer: "L'implementazione di Wellbe è rapida e semplice. In media, le aziende sono operative in meno di una settimana, con il supporto del nostro team dedicato.",
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative hero-gradient text-primary-foreground overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
        </div>

        <div className="container mx-auto px-4 lg:px-8 py-24 lg:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-6 animate-fade-in-up">
              Piattaforma di Sostenibilità Sociale d'Impresa
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Il benessere dei tuoi dipendenti,{" "}
              <span className="gradient-text bg-gradient-to-r from-primary-foreground to-accent">
                misurato e migliorato
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Assessment scientifici, dashboard intuitive e insight azionabili per trasformare la tua azienda in un luogo di lavoro eccellente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
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
          </div>

          {/* Dashboard Preview */}
          <div className="mt-16 lg:mt-24 max-w-5xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-primary-foreground/10">
              <div className="aspect-video bg-gradient-to-br from-card to-muted p-6 lg:p-10">
                <div className="h-full rounded-xl bg-background/95 backdrop-blur p-4 lg:p-6 flex flex-col">
                  {/* Mock Dashboard Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/20" />
                    <div className="flex-1">
                      <div className="h-4 w-32 bg-muted rounded" />
                      <div className="h-3 w-24 bg-muted/50 rounded mt-2" />
                    </div>
                    <div className="flex gap-2">
                      <div className="w-24 h-8 bg-primary/10 rounded-lg" />
                      <div className="w-24 h-8 bg-accent/10 rounded-lg" />
                    </div>
                  </div>
                  {/* Mock Dashboard Content */}
                  <div className="flex-1 grid grid-cols-3 gap-4">
                    <div className="col-span-2 bg-muted/30 rounded-xl p-4">
                      <div className="h-4 w-24 bg-muted rounded mb-4" />
                      <div className="h-32 bg-gradient-to-t from-primary/20 to-transparent rounded-lg" />
                    </div>
                    <div className="space-y-4">
                      <div className="bg-muted/30 rounded-xl p-4 h-1/2">
                        <div className="h-4 w-16 bg-muted rounded mb-2" />
                        <div className="text-2xl font-bold text-primary">87%</div>
                      </div>
                      <div className="bg-muted/30 rounded-xl p-4 h-1/2">
                        <div className="h-4 w-16 bg-muted rounded mb-2" />
                        <div className="text-2xl font-bold text-accent">+12%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Bar */}
      <LogoBar />

      {/* Modules Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            badge="I Nostri Moduli"
            title="Assessment per ogni esigenza"
            description="Co-progettiamo moduli con consulenti certificati ed esperti di dominio. Conformi agli standard nazionali e internazionali."
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
            title="I vantaggi della piattaforma"
            description="Una soluzione completa per la sostenibilità sociale della tua impresa."
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
            title="Le storie dei nostri clienti"
            description="Scopri come Wellbe sta trasformando il benessere organizzativo nelle aziende italiane."
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
              Pronto a trasformare il benessere della tua azienda?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-10">
              Prenota una demo gratuita e scopri come Wellbe può aiutarti a creare un ambiente di lavoro eccellente.
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
