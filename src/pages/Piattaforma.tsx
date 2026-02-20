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
  happiness: { bg: "from-blue-500/8 to-indigo-500/8", icon: "bg-blue-500/10 text-blue-600", border: "border-blue-200/50", accent: "text-blue-600", dot: "bg-blue-500" },
  safety:    { bg: "from-orange-500/8 to-amber-500/8", icon: "bg-orange-500/10 text-orange-600", border: "border-orange-200/50", accent: "text-orange-600", dot: "bg-orange-500" },
  care:      { bg: "from-pink-500/8 to-rose-500/8", icon: "bg-pink-500/10 text-pink-600", border: "border-pink-200/50", accent: "text-pink-600", dot: "bg-pink-500" },
  vibewise:  { bg: "from-violet-500/8 to-purple-500/8", icon: "bg-violet-500/10 text-violet-600", border: "border-violet-200/50", accent: "text-violet-600", dot: "bg-violet-500" },
  dei:       { bg: "from-emerald-500/8 to-teal-500/8", icon: "bg-emerald-500/10 text-emerald-600", border: "border-emerald-200/50", accent: "text-emerald-600", dot: "bg-emerald-500" },
};

export default function Piattaforma() {
  const { t } = useLanguage();

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
              {/* Nav pills */}
              <div className="flex flex-wrap justify-center gap-2">
                {modules.map((m) => (
                  <a
                    key={m.id}
                    href={`#${m.id}`}
                    className="px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-sm font-medium text-white/80 hover:bg-white/20 transition-colors"
                  >
                    {m.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MODULES ── */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-5">
            {modules.map((module, index) => {
              const colors = moduleColors[module.colorKey];
              const isEven = index % 2 === 0;
              return (
                <div
                  key={module.id}
                  id={module.id}
                  className={cn(
                    "relative rounded-3xl border overflow-hidden bg-card",
                    colors.border
                  )}
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
                        <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", colors.icon)}>
                          <module.icon className="h-5 w-5" />
                        </div>
                      </div>

                      <h2 className="text-2xl lg:text-3xl xl:text-4xl font-extrabold text-foreground mb-2">
                        {module.title}
                      </h2>
                      <p className={cn("font-semibold mb-5 text-xs uppercase tracking-widest", colors.accent)}>
                        {module.subtitle}
                      </p>
                      <p className="text-muted-foreground leading-relaxed mb-7 text-sm max-w-lg">
                        {module.description}
                      </p>

                      {module.partnerLogo && (
                        <div className="flex items-center gap-3 mb-6 p-3 bg-muted rounded-xl border border-border w-fit">
                          <span className="text-xs text-muted-foreground">{t("platform.coDesigned")}</span>
                          <a href="https://www.ecomy.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                            <img src={module.partnerLogo} alt={module.partnerName} className="h-6 object-contain" />
                          </a>
                        </div>
                      )}

                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                        {module.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2">
                            <CheckCircle className={cn("h-4 w-4 flex-shrink-0 mt-0.5", colors.accent)} />
                            <span className="text-foreground text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div>
                        <Link to="/contatti">
                          <Button className="font-semibold rounded-xl group">
                            {t("platform.requestDemo")}
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </Link>
                      </div>
                    </div>

                    {/* Image side */}
                    <div className={cn(
                      "flex-1 flex items-center justify-center p-6 lg:p-10 min-h-[280px] lg:min-h-[400px] bg-gradient-to-br",
                      colors.bg
                    )}>
                      <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-xl border border-white/30 bg-white/50 backdrop-blur-sm">
                        <img
                          src={module.image}
                          alt={`${module.title} - ${module.subtitle}`}
                          className="w-full h-auto object-contain"
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
