import { useState } from "react";
import { Sparkles, Shield, Heart, Users, CheckCircle, Star, ArrowRight, ChevronLeft } from "lucide-react";
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
  happiness: { bg: "from-blue-600 to-indigo-700", shadow: "shadow-blue-500/20", light: "bg-blue-50", icon: "bg-blue-500/15 text-blue-600", border: "border-blue-200", accent: "text-blue-600", dot: "bg-blue-500", ring: "ring-blue-500" },
  safety:    { bg: "from-orange-500 to-amber-600", shadow: "shadow-orange-500/20", light: "bg-orange-50", icon: "bg-orange-500/15 text-orange-600", border: "border-orange-200", accent: "text-orange-600", dot: "bg-orange-500", ring: "ring-orange-500" },
  care:      { bg: "from-pink-500 to-rose-600", shadow: "shadow-pink-500/20", light: "bg-pink-50", icon: "bg-pink-500/15 text-pink-600", border: "border-pink-200", accent: "text-pink-600", dot: "bg-pink-500", ring: "ring-pink-500" },
  vibewise:  { bg: "from-violet-600 to-purple-700", shadow: "shadow-violet-500/20", light: "bg-violet-50", icon: "bg-violet-500/15 text-violet-600", border: "border-violet-200", accent: "text-violet-600", dot: "bg-violet-500", ring: "ring-violet-500" },
  dei:       { bg: "from-emerald-500 to-teal-600", shadow: "shadow-emerald-500/20", light: "bg-emerald-50", icon: "bg-emerald-500/15 text-emerald-600", border: "border-emerald-200", accent: "text-emerald-600", dot: "bg-emerald-500", ring: "ring-emerald-500" },
};

export default function Piattaforma() {
  const { t } = useLanguage();
  const [activeModule, setActiveModule] = useState<number | null>(null);

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

  const active = activeModule !== null ? modules[activeModule] : null;
  const colors = active ? moduleColors[active.colorKey] : null;

  return (
    <Layout>

      {/* ── HERO + MODULES combined ── */}
      <section className="pt-8 pb-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">

          {/* Dark hero card */}
          <div className="hero-dark-card px-8 lg:px-16 py-14 lg:py-20 relative overflow-hidden mb-12">
            <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ background: "hsl(203 82% 55%)" }} />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-10" style={{ background: "hsl(280 75% 60%)" }} />
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-white/10 text-white/80 text-xs font-semibold uppercase tracking-widest mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                {t("platform.badge")}
              </div>
              <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
                {t("platform.title")}
              </h1>
              <p className="text-white/60 text-base lg:text-lg max-w-xl mx-auto leading-relaxed">
                {t("platform.description")}
              </p>
            </div>
          </div>

          {/* ── ALL MODULES — full-bleed card grid ── */}
          {activeModule === null && (
            <div className="animate-fade-in">
              {/* Section heading */}
              <div className="flex items-end justify-between mb-8">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">5 Assessment</p>
                  <h2 className="text-2xl lg:text-3xl font-extrabold text-foreground">
                    Quale area vuoi misurare?
                  </h2>
                </div>
              </div>

              {/* Grid: 3 top + 2 bottom */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                {modules.slice(0, 3).map((module, index) => (
                  <ModuleCard key={module.id} module={module} onClick={() => setActiveModule(index)} />
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-2 lg:w-2/3 mx-auto">
                {modules.slice(3).map((module, index) => (
                  <ModuleCard key={module.id} module={module} onClick={() => setActiveModule(index + 3)} wide />
                ))}
              </div>
            </div>
          )}

          {/* ── SINGLE MODULE detail view ── */}
          {activeModule !== null && active && colors && (
            <div className="animate-fade-in">
              {/* Back + tabs row */}
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <button
                  onClick={() => setActiveModule(null)}
                  className="flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors mr-2"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Tutti
                </button>
                <div className="w-px h-5 bg-border" />
                {modules.map((m, i) => {
                  const mc = moduleColors[m.colorKey];
                  const isActive = i === activeModule;
                  return (
                    <button
                      key={m.id}
                      onClick={() => setActiveModule(i)}
                      className={cn(
                        "flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold transition-all duration-200 whitespace-nowrap",
                        isActive
                          ? cn("border-2 ring-2 ring-offset-1", mc.border, mc.accent, mc.light, mc.ring)
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

              {/* Detail panel */}
              <div className={cn("rounded-3xl border overflow-hidden shadow-2xl", colors.border, colors.shadow)}>
                <div className="flex flex-col lg:flex-row min-h-[520px]">
                  {/* Text side */}
                  <div className="lg:w-[42%] p-8 lg:p-14 flex flex-col justify-center bg-card">
                    <div className="flex items-center gap-3 mb-6">
                      <div className={cn("w-11 h-11 rounded-2xl flex items-center justify-center", colors.icon)}>
                        <active.icon className="h-5 w-5" />
                      </div>
                      {active.isNew && (
                        <span className="px-2.5 py-0.5 text-xs font-bold bg-accent text-white rounded-full uppercase">NEW</span>
                      )}
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-2 leading-tight">{active.title}</h2>
                    <p className={cn("font-bold mb-5 text-xs uppercase tracking-widest", colors.accent)}>{active.subtitle}</p>
                    <p className="text-muted-foreground leading-relaxed mb-7 text-sm">{active.description}</p>
                    {active.partnerLogo && (
                      <div className="flex items-center gap-3 mb-6 p-3 bg-muted rounded-xl border border-border w-fit">
                        <span className="text-xs text-muted-foreground">{t("platform.coDesigned")}</span>
                        <a href="https://www.ecomy.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                          <img src={active.partnerLogo} alt={active.partnerName} className="h-6 object-contain" />
                        </a>
                      </div>
                    )}
                    <ul className="space-y-2.5 mb-8">
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

                  {/* Image side */}
                  <div className={cn("lg:w-[58%] relative flex items-center justify-center p-8 lg:p-12 bg-gradient-to-br overflow-hidden", colors.bg)}>
                    {/* Decorative circles */}
                    <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/5" />
                    <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-full bg-black/10" />
                    <div className="relative w-full max-w-xl z-10">
                      <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                        <img src={active.image} alt={active.title} className="w-full h-auto object-contain" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom pagination */}
                <div className={cn("flex items-center justify-between px-8 lg:px-14 py-4 border-t", colors.border, colors.light)}>
                  <button
                    onClick={() => setActiveModule((prev) => ((prev ?? 0) - 1 + modules.length) % modules.length)}
                    className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ArrowRight className="h-4 w-4 rotate-180" />
                    {modules[((activeModule ?? 0) - 1 + modules.length) % modules.length].title}
                  </button>
                  <div className="flex gap-1.5">
                    {modules.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveModule(i)}
                        className={cn("h-2 rounded-full transition-all", i === activeModule ? cn("w-5", colors.dot) : "w-2 bg-border")}
                      />
                    ))}
                  </div>
                  <button
                    onClick={() => setActiveModule((prev) => ((prev ?? 0) + 1) % modules.length)}
                    className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {modules[((activeModule ?? 0) + 1) % modules.length].title}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
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

/* ── Module Card component ── */
function ModuleCard({
  module,
  onClick,
  wide = false,
}: {
  module: ReturnType<typeof buildModule>;
  onClick: () => void;
  wide?: boolean;
}) {
  const mc = moduleColors[module.colorKey];
  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative rounded-2xl overflow-hidden text-left transition-all duration-300",
        "shadow-lg hover:shadow-2xl hover:-translate-y-1.5",
        wide ? "h-52" : "h-64"
      )}
    >
      {/* Full-bleed gradient background */}
      <div className={cn("absolute inset-0 bg-gradient-to-br", mc.bg)} />

      {/* Screenshot image — right-side peek */}
      <div className="absolute right-0 bottom-0 top-0 w-3/5 overflow-hidden">
        <img
          src={module.image}
          alt={module.title}
          className="w-full h-full object-cover object-left-top opacity-80 group-hover:scale-105 transition-transform duration-500"
        />
        {/* Left-side gradient fade */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
      </div>

      {/* Subtle dark overlay on hover */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-10" />

      {/* Content overlay */}
      <div className="absolute inset-0 z-20 p-6 flex flex-col justify-between">
        {/* Top: badges */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/20">
            <module.icon className="h-3.5 w-3.5 text-white" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-white">{module.title}</span>
          </div>
          {module.isNew && (
            <span className="px-2 py-0.5 text-[10px] font-bold bg-accent text-white rounded-full uppercase shadow-md">NEW</span>
          )}
        </div>

        {/* Bottom: title + arrow */}
        <div>
          <p className="text-white/80 text-xs font-medium mb-1 leading-snug">{module.subtitle}</p>
          <div className="flex items-center justify-between">
            <span className="text-white font-extrabold text-base leading-tight">Scopri →</span>
            <div className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-white/25 transition-colors">
              <ArrowRight className="h-4 w-4 text-white" />
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}

// Helper type inference
function buildModule(m: object) { return m as any; }
