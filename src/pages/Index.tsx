import { ArrowRight, Sparkles, Shield, Heart, Users, Building2, Star, Quote, CheckCircle } from "lucide-react";
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
  blue:   { bg: "from-blue-500/10 to-indigo-500/10", icon: "bg-blue-500/10 text-blue-600", border: "border-blue-200/60" },
  orange: { bg: "from-orange-500/10 to-amber-500/10", icon: "bg-orange-500/10 text-orange-600", border: "border-orange-200/60" },
  pink:   { bg: "from-pink-500/10 to-rose-500/10", icon: "bg-pink-500/10 text-pink-600", border: "border-pink-200/60" },
  violet: { bg: "from-violet-500/10 to-purple-500/10", icon: "bg-violet-500/10 text-violet-600", border: "border-violet-200/60" },
  green:  { bg: "from-emerald-500/10 to-teal-500/10", icon: "bg-emerald-500/10 text-emerald-600", border: "border-emerald-200/60" },
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
    { title: t("benefits.social.title"), description: t("benefits.social.desc"), icon: "📊" },
    { title: t("benefits.people.title"), description: t("benefits.people.desc"), icon: "💚" },
    { title: t("benefits.governance.title"), description: t("benefits.governance.desc"), icon: "🏛️" },
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
      {/* ── HERO ── */}
      <section ref={parallaxRef} className="pt-8 pb-0 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          {/* Dark card like JetHR */}
          <div
            className="hero-dark-card relative px-8 lg:px-16 pt-14 lg:pt-20 pb-0 overflow-hidden"
            style={{ minHeight: "520px" }}
          >
            {/* Subtle glow orbs */}
            <div
              className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 transition-transform duration-100"
              style={{
                background: "hsl(203 82% 55%)",
                transform: `translateY(${offset * 0.3}px)`,
              }}
            />
            <div
              className="absolute top-0 right-1/4 w-72 h-72 rounded-full blur-3xl opacity-10"
              style={{ background: "hsl(280 75% 60%)" }}
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-end">
              {/* Left: text */}
              <div className="pb-14 lg:pb-20">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-white/10 text-white/80 text-xs font-semibold uppercase tracking-widest mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  {t("platform.badge")}
                </div>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-[1.1] mb-6">
                  {t("hero.title1")}{" "}
                  <span className="text-accent">{t("hero.titleHighlight")}</span>
                </h1>
                <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-lg">
                  {t("hero.subtitle")}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link to="/contatti">
                    <Button size="lg" className="bg-white text-foreground hover:bg-white/90 font-bold px-8 rounded-xl text-base">
                      {t("hero.cta1")}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link to="/piattaforma">
                    <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 rounded-xl text-base bg-transparent">
                      {t("hero.cta2")}
                    </Button>
                  </Link>
                </div>

                {/* Counter */}
                <div ref={countRef} className="mt-10">
                  <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/10 border border-white/15">
                    <Building2 className="w-5 h-5 text-accent" />
                    <div>
                      <span className="text-2xl font-bold text-white">+{companyCount}</span>
                      <span className="text-white/60 text-sm ml-2">{t("hero.companiesCount")}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: screenshot floating up */}
              <div className="flex items-end justify-center lg:justify-end">
                <div
                  className="w-full max-w-lg lg:max-w-none rounded-t-2xl overflow-hidden shadow-2xl border border-white/10 transition-transform duration-300"
                  style={{ transform: `translateY(${-offset * 0.08}px)` }}
                >
                  <img src={platformDashboard} alt="Wellbe Platform Dashboard" className="w-full h-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CLIENT LOGOS ── */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 mb-8">
          <p className="text-center text-xs text-muted-foreground font-semibold uppercase tracking-widest">
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

      {/* ── MODULES ── */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="section-badge mb-5">{t("modules.badge")}</span>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-foreground leading-tight mb-5 mt-3">
              {t("modules.title")}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{t("modules.description")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {modules.map((module, index) => {
              const colors = moduleColors[module.colorKey];
              return (
                <div
                  key={module.title}
                  className={cn(
                    "group relative rounded-2xl border p-7 bg-card hover-lift cursor-pointer overflow-hidden animate-fade-in-up",
                    colors.border
                  )}
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl", colors.bg)} />
                  <div className="relative z-10">
                    {module.isNew && (
                      <span className="absolute -top-1 right-0 px-2.5 py-0.5 text-xs font-bold bg-accent text-white rounded-full">NEW</span>
                    )}
                    <div className={cn("w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110", colors.icon)}>
                      <module.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-bold text-foreground mb-2">{module.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{module.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8">
            <Link to="/piattaforma">
              <Button variant="outline" className="font-semibold rounded-xl">
                {t("modules.exploreAll")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="py-20 lg:py-28 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="section-badge mb-5">{t("benefits.badge")}</span>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-foreground leading-tight mb-5 mt-3">
              {t("benefits.title")}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{t("benefits.description")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="rounded-2xl bg-card border border-border p-8 hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-5">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="section-badge mb-5">{t("testimonials.badge")}</span>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-foreground leading-tight mt-3">
              {t("testimonials.title")}
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.author}
                className="relative p-8 rounded-2xl bg-card border border-border hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Quote className="absolute top-6 right-6 h-8 w-8 text-border" />
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent mb-6">
                  <span className="text-xl font-extrabold">{testimonial.metric?.value}</span>
                  <span className="text-xs font-semibold">{testimonial.metric?.label}</span>
                </div>
                <p className="text-foreground text-sm leading-relaxed mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-muted border border-border flex items-center justify-center p-1.5">
                    <img src={testimonial.logo} alt={testimonial.company} className="max-w-full max-h-full object-contain" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role} @ {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 lg:py-28 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="lg:sticky lg:top-28">
              <span className="section-badge mb-5">{t("faq.badge")}</span>
              <h2 className="text-3xl lg:text-5xl font-extrabold text-foreground leading-tight mb-5 mt-3">
                {t("faq.title")}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">{t("faq.description")}</p>
              <Link to="/faq">
                <Button variant="outline" className="font-semibold rounded-xl">
                  {t("faq.seeAll")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div>
              <FAQAccordion items={homepageFAQs} />
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-8 pb-8 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="hero-dark-card px-10 lg:px-20 py-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[500px] h-[500px] rounded-full blur-3xl opacity-15" style={{ background: "hsl(203 82% 55%)" }} />
            </div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                {t("cta.title")}
              </h2>
              <p className="text-white/70 text-lg mb-10">{t("cta.subtitle")}</p>
              <Link to="/contatti">
                <Button size="lg" className="bg-white text-foreground hover:bg-white/90 font-bold px-10 rounded-xl text-base">
                  {t("cta.button")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
