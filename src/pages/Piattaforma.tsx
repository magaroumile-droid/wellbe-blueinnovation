import { useState } from "react";
import { Sparkles, Shield, Heart, Users, CheckCircle, Star, ArrowRight } from "lucide-react";
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
  happiness: { bg: "from-blue-600 to-indigo-700", light: "bg-blue-50", icon: "bg-blue-500/15 text-blue-600", border: "border-blue-200", accent: "text-blue-600", tab: "border-blue-500 text-blue-600 bg-blue-50" },
  safety:    { bg: "from-orange-500 to-amber-600", light: "bg-orange-50", icon: "bg-orange-500/15 text-orange-600", border: "border-orange-200", accent: "text-orange-600", tab: "border-orange-500 text-orange-600 bg-orange-50" },
  care:      { bg: "from-pink-500 to-rose-600", light: "bg-pink-50", icon: "bg-pink-500/15 text-pink-600", border: "border-pink-200", accent: "text-pink-600", tab: "border-pink-500 text-pink-600 bg-pink-50" },
  vibewise:  { bg: "from-violet-600 to-purple-700", light: "bg-violet-50", icon: "bg-violet-500/15 text-violet-600", border: "border-violet-200", accent: "text-violet-600", tab: "border-violet-500 text-violet-600 bg-violet-50" },
  dei:       { bg: "from-emerald-500 to-teal-600", light: "bg-emerald-50", icon: "bg-emerald-500/15 text-emerald-600", border: "border-emerald-200", accent: "text-emerald-600", tab: "border-emerald-500 text-emerald-600 bg-emerald-50" },
};

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

  const active = modules[activeModule];
  const colors = moduleColors[active.colorKey];

  return (
    <Layout>
      {/* ── HERO ── */}
      <section className="pt-8 pb-0 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="hero-dark-card px-8 lg:px-16 py-16 lg:py-24 relative overflow-hidden">
            <div className="absolute top-0 left-1/3 w-80 h-80 rounded-full blur-3xl opacity-15" style={{ background: "hsl(203 82% 55%)" }} />
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-white/10 text-white/80 text-xs font-semibold uppercase tracking-widest mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                {t("platform.badge")}
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-6 leading-tight">
                {t("platform.title")}
              </h1>
              <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
                {t("platform.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MODULES — Arke style ── */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">

          {/* Tab strip */}
          <div className="flex flex-wrap gap-2 mb-10">
            {modules.map((m, i) => {
              const mc = moduleColors[m.colorKey];
              const isActive = i === activeModule;
              return (
                <button
                  key={m.id}
                  onClick={() => setActiveModule(i)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold transition-all duration-200",
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

          {/* Main panel */}
          <div
            key={active.id}
            className={cn(
              "rounded-3xl border overflow-hidden animate-fade-in",
              colors.border
            )}
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

              {/* Right: screenshot with gradient bg */}
              <div className={cn(
                "lg:w-[58%] flex items-center justify-center p-8 lg:p-12 bg-gradient-to-br",
                colors.bg
              )}>
                <div className="relative w-full max-w-xl">
                  {/* Decorative glow */}
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

            {/* Bottom mini-nav arrows */}
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
                      "w-2 h-2 rounded-full transition-all",
                      i === activeModule ? cn("w-5", colors.accent.replace("text-", "bg-")) : "bg-border"
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
