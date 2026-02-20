import { Sparkles, Shield, Heart, Users, Star, ArrowRight, CheckCircle2, FlaskConical, Award, Globe2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

import moduleHappiness from "@/assets/module-happiness.png";
import moduleSafety from "@/assets/module-safety.png";
import moduleHealthcare from "@/assets/module-healthcare.png";
import moduleDei from "@/assets/module-dei.png";
import logoEcomy from "@/assets/logo-ecomy-new.png";

const MODULE_STYLES = {
  happiness: {
    gradient: "from-blue-600/20 via-indigo-500/10 to-transparent",
    glow: "shadow-blue-500/20",
    iconBg: "bg-blue-500/15 text-blue-500",
    accent: "text-blue-500",
    border: "border-blue-500/20",
    badge: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    pill: "bg-blue-500/10 text-blue-700 border border-blue-200",
    number: "text-blue-500/20",
  },
  safety: {
    gradient: "from-orange-500/20 via-amber-500/10 to-transparent",
    glow: "shadow-orange-500/20",
    iconBg: "bg-orange-500/15 text-orange-500",
    accent: "text-orange-500",
    border: "border-orange-500/20",
    badge: "bg-orange-500/10 text-orange-600 border-orange-500/20",
    pill: "bg-orange-500/10 text-orange-700 border border-orange-200",
    number: "text-orange-500/20",
  },
  care: {
    gradient: "from-pink-500/20 via-rose-500/10 to-transparent",
    glow: "shadow-pink-500/20",
    iconBg: "bg-pink-500/15 text-pink-500",
    accent: "text-pink-500",
    border: "border-pink-500/20",
    badge: "bg-pink-500/10 text-pink-600 border-pink-500/20",
    pill: "bg-pink-500/10 text-pink-700 border border-pink-200",
    number: "text-pink-500/20",
  },
  vibewise: {
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
    glow: "shadow-violet-500/20",
    iconBg: "bg-violet-500/15 text-violet-500",
    accent: "text-violet-500",
    border: "border-violet-500/20",
    badge: "bg-violet-500/10 text-violet-600 border-violet-500/20",
    pill: "bg-violet-500/10 text-violet-700 border border-violet-200",
    number: "text-violet-500/20",
  },
  dei: {
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    glow: "shadow-emerald-500/20",
    iconBg: "bg-emerald-500/15 text-emerald-500",
    accent: "text-emerald-500",
    border: "border-emerald-500/20",
    badge: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
    pill: "bg-emerald-500/10 text-emerald-700 border border-emerald-200",
    number: "text-emerald-500/20",
  },
};

export default function Piattaforma() {
  const { t } = useLanguage();

  const modules = [
    {
      id: "happiness",
      styleKey: "happiness" as const,
      title: "Happiness",
      subtitle: t("platform.happiness.subtitle"),
      icon: Sparkles,
      image: moduleHappiness,
      description: t("platform.happiness.desc"),
      features: [t("platform.happiness.f1"), t("platform.happiness.f2"), t("platform.happiness.f3"), t("platform.happiness.f4"), t("platform.happiness.f5")],
    },
    {
      id: "safety-awareness",
      styleKey: "safety" as const,
      title: "Safety Awareness",
      subtitle: t("platform.safety.subtitle"),
      icon: Shield,
      image: moduleSafety,
      description: t("platform.safety.desc"),
      features: [t("platform.safety.f1"), t("platform.safety.f2"), t("platform.safety.f3"), t("platform.safety.f4"), t("platform.safety.f5")],
    },
    {
      id: "wellbe-care",
      styleKey: "care" as const,
      title: "Wellbe Care",
      subtitle: t("platform.care.subtitle"),
      icon: Heart,
      image: moduleHealthcare,
      description: t("platform.care.desc"),
      features: [t("platform.care.f1"), t("platform.care.f2"), t("platform.care.f3"), t("platform.care.f4"), t("platform.care.f5")],
    },
    {
      id: "vibewise",
      styleKey: "vibewise" as const,
      title: "Wellbe VibeWise",
      subtitle: t("platform.vibewise.subtitle"),
      icon: Star,
      image: moduleHappiness,
      isNew: true,
      description: t("platform.vibewise.desc"),
      features: [t("platform.vibewise.f1"), t("platform.vibewise.f2"), t("platform.vibewise.f3"), t("platform.vibewise.f4"), t("platform.vibewise.f5")],
    },
    {
      id: "parita-genere",
      styleKey: "dei" as const,
      title: t("platform.dei.title"),
      subtitle: t("platform.dei.subtitle"),
      icon: Users,
      image: moduleDei,
      isNew: true,
      description: t("platform.dei.desc"),
      features: [t("platform.dei.f1"), t("platform.dei.f2"), t("platform.dei.f3"), t("platform.dei.f4"), t("platform.dei.f5")],
      partnerLogo: logoEcomy,
      partnerName: "ECOMY",
    },
  ];

  const trust = [
    { icon: FlaskConical, label: t("platform.trust.validated") },
    { icon: Award, label: t("platform.trust.certified") },
    { icon: Globe2, label: t("platform.trust.compliant") },
  ];

  return (
    <Layout>
      {/* ── HERO ── */}
      <section className="relative hero-gradient text-primary-foreground overflow-hidden">
        {/* Orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-accent/15 blur-3xl animate-pulse-slow" />
          <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-primary/20 blur-3xl animate-pulse-slow" style={{ animationDelay: "1.5s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] rounded-full bg-accent/5 blur-2xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 pt-24 pb-16 relative z-10">
          {/* Badge */}
          <div className="flex justify-center mb-6 animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-sm font-medium backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-slow" />
              {t("platform.badge")}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-center mb-6 animate-fade-in-up leading-tight" style={{ animationDelay: "0.1s" }}>
            {t("platform.title")}
          </h1>
          <p className="text-lg lg:text-xl text-primary-foreground/70 max-w-2xl mx-auto text-center mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {t("platform.description")}
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            {trust.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/8 border border-primary-foreground/15 backdrop-blur-sm text-sm text-primary-foreground/80">
                <Icon className="h-4 w-4 text-accent" />
                {label}
              </div>
            ))}
          </div>

          {/* Module nav */}
          <div className="flex flex-wrap justify-center gap-2 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            {modules.map((m, i) => {
              const s = MODULE_STYLES[m.styleKey];
              return (
                <a
                  key={m.id}
                  href={`#${m.id}`}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/8 border border-primary-foreground/15 text-sm font-medium hover:bg-primary-foreground/20 transition-all duration-200 backdrop-blur-sm group"
                >
                  <span className="w-5 h-5 rounded-full bg-primary-foreground/10 flex items-center justify-center text-xs font-bold text-primary-foreground/60 group-hover:text-primary-foreground transition-colors">
                    {i + 1}
                  </span>
                  {m.title}
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom fade */}
        <div className="h-16 bg-gradient-to-b from-transparent to-background relative z-10" />
      </section>

      {/* ── MODULES ── */}
      <section className="bg-background py-4">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-8">
            {modules.map((module, index) => {
              const s = MODULE_STYLES[module.styleKey];
              const isEven = index % 2 === 0;

              return (
                <div
                  key={module.id}
                  id={module.id}
                  className={cn(
                    "group relative rounded-3xl border bg-card overflow-hidden transition-all duration-500 hover:shadow-2xl",
                    s.border,
                    s.glow,
                    "hover:shadow-xl"
                  )}
                >
                  {/* Background glow layer */}
                  <div className={cn("absolute inset-0 bg-gradient-to-br opacity-40 pointer-events-none", s.gradient)} />

                  {/* Big number watermark */}
                  <div className={cn("absolute top-4 right-8 text-[10rem] font-black leading-none select-none pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500", s.number)}>
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className={cn(
                    "relative flex flex-col lg:gap-0",
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  )}>
                    {/* ── Text ── */}
                    <div className="flex-1 p-8 lg:p-12 xl:p-16 flex flex-col justify-center">
                      {/* Top row: NEW + icon */}
                      <div className="flex items-center gap-3 mb-6">
                        <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm", s.iconBg)}>
                          <module.icon className="h-6 w-6" />
                        </div>
                        {module.isNew && (
                          <span className={cn("px-3 py-1 text-xs font-bold rounded-full border uppercase tracking-widest", s.badge)}>
                            NEW
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground mb-2 leading-tight">
                        {module.title}
                      </h2>

                      {/* Subtitle pill */}
                      <span className={cn("inline-block self-start px-3 py-1 rounded-full text-xs font-semibold mb-5", s.pill)}>
                        {module.subtitle}
                      </span>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed mb-7 text-base max-w-lg">
                        {module.description}
                      </p>

                      {/* Partner */}
                      {module.partnerLogo && (
                        <div className="flex items-center gap-3 mb-6 px-4 py-3 rounded-xl bg-background/70 border border-border/60 w-fit backdrop-blur-sm">
                          <span className="text-xs text-muted-foreground font-medium">{t("platform.coDesigned")}</span>
                          <a href="https://www.ecomy.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                            <img src={module.partnerLogo} alt={module.partnerName} className="h-6 object-contain" />
                          </a>
                        </div>
                      )}

                      {/* Features grid */}
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
                        {module.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2.5">
                            <CheckCircle2 className={cn("h-4 w-4 flex-shrink-0 mt-0.5", s.accent)} />
                            <span className="text-foreground/80 text-sm leading-snug">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <div>
                        <Link to="/contatti">
                          <Button size="lg" className="font-semibold group/btn shadow-sm">
                            {t("platform.requestDemo")}
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                          </Button>
                        </Link>
                      </div>
                    </div>

                    {/* ── Image ── */}
                    <div className="flex-1 flex items-center justify-center p-6 lg:p-10 min-h-[280px] lg:min-h-[440px]">
                      <div className={cn(
                        "relative w-full max-w-md rounded-2xl overflow-hidden border bg-background/60 backdrop-blur-sm shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-1",
                        s.border
                      )}>
                        {/* Glow behind image */}
                        <div className={cn("absolute -inset-4 blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-3xl bg-gradient-to-br", s.gradient)} />
                        <img
                          src={module.image}
                          alt={`${module.title} – ${module.subtitle}`}
                          className="relative w-full h-auto object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 lg:py-32 hero-gradient text-primary-foreground relative overflow-hidden mt-16">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent/15 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-sm font-medium mb-6 backdrop-blur-sm">
              {String(modules.length)} {t("platform.badge")}
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">{t("cta.title")}</h2>
            <p className="text-lg text-primary-foreground/75 mb-10 max-w-xl mx-auto">{t("cta.subtitle")}</p>
            <Link to="/contatti">
              <Button size="lg" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 font-semibold px-10 shadow-lg">
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
