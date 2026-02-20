import { ArrowRight, Sparkles, Shield, Heart, Users, Building2, Star, CheckCircle, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { FAQAccordion, FAQItem } from "@/components/shared/FAQAccordion";
import { useCountUp } from "@/hooks/useCountUp";
import { useParallax } from "@/hooks/useParallax";
import { LogoMarquee } from "@/components/shared/LogoMarquee";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
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

const moduleColors = {
  blue:   { bg: "from-blue-500/10 to-indigo-500/10", icon: "bg-blue-500/10 text-blue-600", border: "border-blue-200/60", dot: "bg-blue-500" },
  orange: { bg: "from-orange-500/10 to-amber-500/10", icon: "bg-orange-500/10 text-orange-600", border: "border-orange-200/60", dot: "bg-orange-500" },
  pink:   { bg: "from-pink-500/10 to-rose-500/10", icon: "bg-pink-500/10 text-pink-600", border: "border-pink-200/60", dot: "bg-pink-500" },
  violet: { bg: "from-violet-500/10 to-purple-500/10", icon: "bg-violet-500/10 text-violet-600", border: "border-violet-200/60", dot: "bg-violet-500" },
  green:  { bg: "from-emerald-500/10 to-teal-500/10", icon: "bg-emerald-500/10 text-emerald-600", border: "border-emerald-200/60", dot: "bg-emerald-500" },
};

export default function Index() {
  const { count: companyCount, ref: countRef } = useCountUp(40, 2000);
  const { ref: parallaxRef, offset } = useParallax(0.3);
  const { t } = useLanguage();

  const modules = [
    { title: "Happiness", description: t("modules.happiness.desc"), icon: Sparkles, colorKey: "blue" as const },
    { title: "Safety Awareness", description: t("modules.safety.desc"), icon: Shield, colorKey: "orange" as const },
    { title: "Wellbe Care", description: t("modules.care.desc"), icon: Heart, colorKey: "pink" as const },
    { title: "Wellbe VibeWise", description: t("modules.vibewise.desc"), icon: Star, colorKey: "violet" as const, isNew: true },
    { title: t("modules.dei.title"), description: t("modules.dei.desc"), icon: Users, colorKey: "green" as const, isNew: true },
  ];

  const benefits = [
    { title: t("benefits.social.title"), description: t("benefits.social.desc"), icon: "📊", color: "from-blue-500/10 to-indigo-500/10 border-blue-200/60" },
    { title: t("benefits.people.title"), description: t("benefits.people.desc"), icon: "💚", color: "from-emerald-500/10 to-teal-500/10 border-emerald-200/60" },
    { title: t("benefits.governance.title"), description: t("benefits.governance.desc"), icon: "🏛️", color: "from-violet-500/10 to-purple-500/10 border-violet-200/60" },
  ];

  const testimonials = [
    {
      quote: t("testimonials.1.quote"),
      author: "Giovanni", role: "CEO", company: "Profiltek",
      metric: { value: "+43%", label: t("testimonials.1.metric") },
      logo: logoProfiltek,
    },
    {
      quote: t("testimonials.2.quote"),
      author: "Sara", role: "Technical Director", company: "Wish",
      metric: { value: "+52%", label: t("testimonials.2.metric") },
      logo: logoWish,
    },
    {
      quote: t("testimonials.3.quote"),
      author: "Vincenzo", role: "CEO", company: "Gli Artigiani del Riposo",
      metric: { value: "+46%", label: t("testimonials.3.metric") },
      logo: logoArtigiani,
    },
  ];

  const homepageFAQs: FAQItem[] = [
    { question: t("faq.q1"), answer: t("faq.a1") },
    { question: t("faq.q2"), answer: t("faq.a2") },
    { question: t("faq.q3"), answer: t("faq.a3") },
    { question: t("faq.q4"), answer: t("faq.a4") },
    { question: t("faq.q5"), answer: t("faq.a5") },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section ref={parallaxRef} className="relative hero-gradient text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/20 rounded-full blur-3xl animate-pulse-slow transition-transform duration-100"
            style={{ transform: `translateY(${offset * 0.5}px) translateX(${offset * 0.2}px)` }} />
          <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-accent/20 rounded-full blur-3xl animate-pulse-slow transition-transform duration-100"
            style={{ transform: `translateY(${offset * 0.3}px) translateX(${-offset * 0.15}px)`, animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-28 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-left">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/15 border border-primary-foreground/20 text-sm font-medium mb-6 backdrop-blur-sm animate-fade-in-up">
                {t("platform.badge")}
              </span>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 animate-fade-in-up">
                {t("hero.title1")}{" "}
                <span className="gradient-text bg-gradient-to-r from-primary-foreground to-accent">
                  {t("hero.titleHighlight")}
                </span>
              </h1>
              <p className="text-lg lg:text-xl text-primary-foreground/80 mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                {t("hero.subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <Link to="/contatti">
                  <Button size="lg" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 font-semibold px-8">
                    {t("hero.cta1")}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/piattaforma">
                  <Button size="lg" className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8">
                    {t("hero.cta2")}
                  </Button>
                </Link>
              </div>
              <div ref={countRef} className="mt-8 animate-fade-in-up" style={{ animationDelay: "0.35s" }}>
                <div className="inline-flex items-center gap-4 px-6 py-3 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-foreground/20">
                    <Building2 className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-bold text-primary-foreground">+{companyCount}</div>
                    <div className="text-sm text-primary-foreground/80">{t("hero.companiesCount")}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-fade-in-up lg:animate-none" style={{ animationDelay: "0.3s" }}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-primary-foreground/10 transition-transform duration-300"
                style={{ transform: `translateY(${-offset * 0.1}px)` }}>
                <img src={platformDashboard} alt="Wellbe Platform Dashboard" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-12 bg-background border-b border-border/50">
        <div className="container mx-auto px-4 lg:px-8 mb-8">
          <p className="text-center text-sm text-muted-foreground font-medium uppercase tracking-wider">
            {t("hero.logoSection")}
          </p>
        </div>
        <LogoMarquee logos={[
          { src: logoProfiltek, alt: "Profiltek" },
          { src: logoWish, alt: "Wish Innovation" },
          { src: logoArtigiani, alt: "Gli Artigiani del Riposo" },
          { src: logoBeautyprof, alt: "Beautyprof" },
          { src: logoMsc, alt: "Medical Sport Center" },
          { src: logoCadis, alt: "Cadis" },
          { src: logoSynedrio, alt: "Synedrio Coworking" },
          { src: logoTodsystem, alt: "Tod System" },
          { src: logoFluentis, alt: "Fluentis" },
        ]} />
      </section>

      {/* Modules */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              {t("modules.badge")}
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{t("modules.title")}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{t("modules.description")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {modules.map((module, index) => {
              const colors = moduleColors[module.colorKey];
              return (
                <div
                  key={module.title}
                  className={cn(
                    "group relative rounded-2xl border p-6 bg-gradient-to-br hover-lift cursor-pointer overflow-hidden animate-fade-in-up",
                    colors.bg, colors.border
                  )}
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  {module.isNew && (
                    <span className="absolute top-4 right-4 px-2.5 py-0.5 text-xs font-bold bg-accent text-accent-foreground rounded-full uppercase tracking-wide">NEW</span>
                  )}
                  <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110", colors.icon)}>
                    <module.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{module.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{module.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link to="/piattaforma">
              <Button variant="outline" size="lg" className="font-medium">
                {t("modules.exploreAll")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              {t("benefits.badge")}
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{t("benefits.title")}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{t("benefits.description")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className={cn("rounded-2xl border p-8 bg-gradient-to-br hover-lift animate-fade-in-up", benefit.color)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-5">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              {t("testimonials.badge")}
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{t("testimonials.title")}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{t("testimonials.description")}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.author}
                className="relative p-8 rounded-2xl bg-card border border-border hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Quote className="absolute top-6 right-6 h-10 w-10 text-primary/10" />
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
                  <span className="text-2xl font-bold">{testimonial.metric?.value}</span>
                  <span className="text-sm font-medium">{testimonial.metric?.label}</span>
                </div>
                <p className="text-card-foreground text-base leading-relaxed mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-white border border-border flex items-center justify-center p-1.5">
                    <img src={testimonial.logo} alt={testimonial.company} className="max-w-full max-h-full object-contain" />
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground text-sm">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role} @ {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              {t("faq.badge")}
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{t("faq.title")}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{t("faq.description")}</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={homepageFAQs} />
            <div className="text-center mt-10">
              <Link to="/faq">
                <Button variant="outline" className="font-medium">
                  {t("faq.seeAll")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-28 hero-gradient text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">{t("cta.title")}</h2>
            <p className="text-lg text-primary-foreground/80 mb-10">{t("cta.subtitle")}</p>
            <Link to="/contatti">
              <Button size="lg" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 font-semibold px-10">
                {t("cta.button")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
