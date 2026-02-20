import { useState } from "react";
import { Sparkles, Shield, Heart, Users, CheckCircle, Star, ArrowRight, LayoutGrid } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

import moduleHappiness from "@/assets/module-happiness.png";
import moduleSafety from "@/assets/module-safety.png";
import moduleHealthcare from "@/assets/module-healthcare.png";
import moduleDei from "@/assets/module-dei.png";
import moduleVibewise from "@/assets/module-vibewise.png";
import logoEcomy from "@/assets/logo-ecomy-new.png";

const moduleColors = {
  happiness: { bg: "from-blue-600 to-indigo-700", light: "bg-blue-50", icon: "bg-blue-500/15 text-blue-600", border: "border-blue-200", accent: "text-blue-600", tab: "border-blue-500 text-blue-600 bg-blue-50", dot: "bg-blue-500" },
  safety:    { bg: "from-orange-500 to-amber-600", light: "bg-orange-50", icon: "bg-orange-500/15 text-orange-600", border: "border-orange-200", accent: "text-orange-600", tab: "border-orange-500 text-orange-600 bg-orange-50", dot: "bg-orange-500" },
  care:      { bg: "from-pink-500 to-rose-600", light: "bg-pink-50", icon: "bg-pink-500/15 text-pink-600", border: "border-pink-200", accent: "text-pink-600", tab: "border-pink-500 text-pink-600 bg-pink-50", dot: "bg-pink-500" },
  vibewise:  { bg: "from-violet-600 to-purple-700", light: "bg-violet-50", icon: "bg-violet-500/15 text-violet-600", border: "border-violet-200", accent: "text-violet-600", tab: "border-violet-500 text-violet-600 bg-violet-50", dot: "bg-violet-500" },
  dei:       { bg: "from-emerald-500 to-teal-600", light: "bg-emerald-50", icon: "bg-emerald-500/15 text-emerald-600", border: "border-emerald-200", accent: "text-emerald-600", tab: "border-emerald-500 text-emerald-600 bg-emerald-50", dot: "bg-emerald-500" },
};

// Sentinel value for "all modules" view
const ALL_MODULES = -1;

export default function Piattaforma() {
  const { t } = useLanguage();
  const [activeModule, setActiveModule] = useState(0);

  const modules = [
    {
      id: "happiness", colorKey: "happiness" as const,
      title: "Happiness", subtitle: t("platform.happiness.subtitle"),
      icon: Sparkles, image: moduleHappiness,
      description: t("platform.happiness.desc"),
      features: [t("platform.happiness.f1"), t("platform.happiness.f2"), t("platform.happiness.f3"), t("platform.happiness.f4"), t("platform.happiness.f5")],
    },
    {
      id: "safety-awareness", colorKey: "safety" as const,
      title: "Safety Awareness", subtitle: t("platform.safety.subtitle"),
      icon: Shield, image: moduleSafety,
      description: t("platform.safety.desc"),
      features: [t("platform.safety.f1"), t("platform.safety.f2"), t("platform.safety.f3"), t("platform.safety.f4"), t("platform.safety.f5")],
    },
    {
      id: "wellbe-care", colorKey: "care" as const,
      title: "Wellbe Care", subtitle: t("platform.care.subtitle"),
      icon: Heart, image: moduleHealthcare,
      description: t("platform.care.desc"),
      features: [t("platform.care.f1"), t("platform.care.f2"), t("platform.care.f3"), t("platform.care.f4"), t("platform.care.f5")],
    },
    {
      id: "vibewise", colorKey: "vibewise" as const,
      title: "Wellbe VibeWise", subtitle: t("platform.vibewise.subtitle"),
      icon: Star, image: moduleVibewise, isNew: true,
      description: t("platform.vibewise.desc"),
      features: [t("platform.vibewise.f1"), t("platform.vibewise.f2"), t("platform.vibewise.f3"), t("platform.vibewise.f4"), t("platform.vibewise.f5")],
    },
    {
      id: "parita-genere", colorKey: "dei" as const,
      title: t("platform.dei.title"), subtitle: t("platform.dei.subtitle"),
      icon: Users, image: moduleDei, isNew: true,
      description: t("platform.dei.desc"),
      features: [t("platform.dei.f1"), t("platform.dei.f2"), t("platform.dei.f3"), t("platform.dei.f4"), t("platform.dei.f5")],
      partnerLogo: logoEcomy, partnerName: "ECOMY",
    },
  ];

  const isAllView = activeModule === ALL_MODULES;
  const active = !isAllView ? modules[activeModule] : null;
  const colors = active ? moduleColors[active.colorKey] : null;

  return (
    <Layout>
      {/* ── HERO ── */}
      <section className="pt-8 pb-0 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="hero-dark-card px-8 lg:px-16 py-16 lg:py-20 relative overflow-hidden">
            <div className="absolute top-0 left-1/3 w-80 h-80 rounded-full blur-3xl opacity-15" style={{ background: "hsl(203 82% 55%)" }} />
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-white/10 text-white/80 text-xs font-semibold uppercase tracking-widest mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                {t("platform.badge")}
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-6 leading-tight">
                {t("platform.title")}
              </h1>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                {t("platform.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── STICKY TAB BAR (Arke style) ── */}
      <div className="sticky top-16 lg:top-20 z-30 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-none">
            {/* "Tutti" tab */}
            <button
              onClick={() => setActiveModule(ALL_MODULES)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold transition-all duration-200 whitespace-nowrap flex-shrink-0",
                isAllView
                  ? "border-primary text-primary-foreground bg-primary"
                  : "border-border text-muted-foreground bg-card hover:bg-muted"
              )}
            >
              <LayoutGrid className="h-4 w-4" />
              Tutti i moduli
            </button>

            {/* Individual tabs */}
            {modules.map((m, i) => {
              const mc = moduleColors[m.colorKey];
              const isActive = i === activeModule;
              return (
                <button
                  key={m.id}
                  onClick={() => setActiveModule(i)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold transition-all duration-200 whitespace-nowrap flex-shrink-0",
                    isActive
                      ? mc.tab
                      : "border-border text-muted-foreground bg-card hover:bg-muted"
                  )}
                >
                  <m.icon className="h-4 w-4" />
                  {m.title}
                  {m.isNew && (
                    <span className="px-1.5 py-0.5 text-[10px] font-bold bg-accent text-white rounded-full uppercase">NEW</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── MODULES SECTION ── */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-4 lg:px-8">

          {/* ── ALL MODULES grid view ── */}
          {isAllView && (
            <div className="space-y-5 animate-fade-in">
              {modules.map((module, index) => {
                const mc = moduleColors[module.colorKey];
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={module.id}
                    id={module.id}
                    className={cn("relative rounded-3xl border overflow-hidden bg-card", mc.border)}
                  >
                    <div className={cn(
                      "flex flex-col lg:gap-0",
                      isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                    )}>
                      {/* Text side */}
                      <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-5">
                          {module.isNew && (
                            <span className="px-2.5 py-0.5 text-xs font-bold bg-accent text-white rounded-full uppercase tracking-wide">NEW</span>
                          )}
                          <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", mc.icon)}>
                            <module.icon className="h-5 w-5" />
                          </div>
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-extrabold text-foreground mb-2">{module.title}</h2>
                        <p className={cn("font-semibold mb-5 text-xs uppercase tracking-widest", mc.accent)}>{module.subtitle}</p>
                        <p className="text-muted-foreground leading-relaxed mb-6 text-sm max-w-lg">{module.description}</p>
                        {module.partnerLogo && (
                          <div className="flex items-center gap-3 mb-6 p-3 bg-muted rounded-xl border border-border w-fit">
                            <span className="text-xs text-muted-foreground">{t("platform.coDesigned")}</span>
                            <a href="https://www.ecomy.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                              <img src={module.partnerLogo} alt={module.partnerName} className="h-6 object-contain" />
                            </a>
                          </div>
                        )}
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-7">
                          {module.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-2">
                              <CheckCircle className={cn("h-4 w-4 flex-shrink-0 mt-0.5", mc.accent)} />
                              <span className="text-foreground text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex gap-3">
                          <button
                            onClick={() => setActiveModule(index)}
                            className={cn("text-sm font-semibold underline underline-offset-2 transition-opacity hover:opacity-70", mc.accent)}
                          >
                            Approfondisci →
                          </button>
                          <Link to="/contatti">
                            <Button size="sm" className="font-semibold rounded-xl group">
                              {t("platform.requestDemo")}
                              <ArrowRight className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                      {/* Image side */}
                      <div className={cn(
                        "flex-1 flex items-center justify-center p-6 lg:p-10 min-h-[260px] bg-gradient-to-br",
                        mc.bg
                      )}>
                        <div className="relative w-full max-w-md">
                          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-white/30">
                            <img src={module.image} alt={module.title} className="w-full h-auto object-contain" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* ── SINGLE MODULE detail view ── */}
          {!isAllView && active && colors && (
            <div
              key={active.id}
              className={cn("rounded-3xl border overflow-hidden animate-fade-in", colors.border)}
            >
              <div className="flex flex-col lg:flex-row min-h-[540px]">
                {/* Left: text */}
                <div className="lg:w-[42%] p-8 lg:p-14 flex flex-col justify-center bg-card">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={cn("w-11 h-11 rounded-2xl flex items-center justify-center", colors.icon)}>
                      <active.icon className="h-5 w-5" />
                    </div>
                    {active.isNew && (
                      <span className="px-2.5 py-0.5 text-xs font-bold bg-accent text-white rounded-full uppercase tracking-wide">NEW</span>
                    )}
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-2 leading-tight">
                    {active.title}
                  </h2>
                  <p className={cn("font-semibold mb-5 text-xs uppercase tracking-widest", colors.accent)}>
                    {active.subtitle}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-7 text-sm">
                    {active.description}
                  </p>
                  {active.partnerLogo && (
                    <div className="flex items-center gap-3 mb-6 p-3 bg-muted rounded-xl border border-border w-fit">
                      <span className="text-xs text-muted-foreground">{t("platform.coDesigned")}</span>
                      <a href="https://www.ecomy.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                        <img src={active.partnerLogo} alt={active.partnerName} className="h-6 object-contain" />
                      </a>
                    </div>
                  )}
                  <ul className="space-y-2 mb-8">
                    {active.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <CheckCircle className={cn("h-4 w-4 flex-shrink-0 mt-0.5", colors.accent)} />
                        <span className="text-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contatti">
                    <Button className="font-semibold rounded-xl group w-fit">
                      {t("platform.requestDemo")}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>

                {/* Right: screenshot */}
                <div className={cn(
                  "lg:w-[58%] flex items-center justify-center p-8 lg:p-12 bg-gradient-to-br",
                  colors.bg
                )}>
                  <div className="relative w-full max-w-xl">
                    <div className="absolute inset-0 rounded-3xl blur-2xl opacity-30 bg-white/40 scale-95" />
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/30">
                      <img
                        src={active.image}
                        alt={`${active.title} - ${active.subtitle}`}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom nav */}
              <div className={cn("flex items-center justify-between px-8 lg:px-14 py-4 border-t", colors.border, colors.light)}>
                <button
                  onClick={() => setActiveModule((prev) => (prev - 1 + modules.length) % modules.length)}
                  className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowRight className="h-4 w-4 rotate-180" />
                  {modules[(activeModule - 1 + modules.length) % modules.length].title}
                </button>
                <div className="flex gap-1.5">
                  {modules.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveModule(i)}
                      className={cn(
                        "h-2 rounded-full transition-all",
                        i === activeModule ? cn("w-5", colors.dot) : "w-2 bg-border"
                      )}
                    />
                  ))}
                </div>
                <button
                  onClick={() => setActiveModule((prev) => (prev + 1) % modules.length)}
                  className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {modules[(activeModule + 1) % modules.length].title}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="hero-dark-card px-10 lg:px-20 py-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[500px] h-[500px] rounded-full blur-3xl opacity-15" style={{ background: "hsl(203 82% 55%)" }} />
            </div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">{t("cta.title")}</h2>
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
