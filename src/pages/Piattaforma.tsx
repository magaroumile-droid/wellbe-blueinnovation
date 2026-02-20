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
  happiness: { bg: "from-blue-500/10 to-indigo-500/10", icon: "bg-blue-500/10 text-blue-600", border: "border-blue-200/50", accent: "text-blue-600" },
  safety: { bg: "from-orange-500/10 to-amber-500/10", icon: "bg-orange-500/10 text-orange-600", border: "border-orange-200/50", accent: "text-orange-600" },
  care: { bg: "from-pink-500/10 to-rose-500/10", icon: "bg-pink-500/10 text-pink-600", border: "border-pink-200/50", accent: "text-pink-600" },
  vibewise: { bg: "from-violet-500/10 to-purple-500/10", icon: "bg-violet-500/10 text-violet-600", border: "border-violet-200/50", accent: "text-violet-600" },
  dei: { bg: "from-emerald-500/10 to-teal-500/10", icon: "bg-emerald-500/10 text-emerald-600", border: "border-emerald-200/50", accent: "text-emerald-600" },
};

export default function Piattaforma() {
  const { t } = useLanguage();

  const modules = [
    {
      id: "happiness",
      colorKey: "happiness" as const,
      title: "Happiness",
      subtitle: t("platform.happiness.subtitle"),
      icon: Sparkles,
      image: moduleHappiness,
      description: t("platform.happiness.desc"),
      features: [t("platform.happiness.f1"), t("platform.happiness.f2"), t("platform.happiness.f3"), t("platform.happiness.f4"), t("platform.happiness.f5")],
    },
    {
      id: "safety-awareness",
      colorKey: "safety" as const,
      title: "Safety Awareness",
      subtitle: t("platform.safety.subtitle"),
      icon: Shield,
      image: moduleSafety,
      description: t("platform.safety.desc"),
      features: [t("platform.safety.f1"), t("platform.safety.f2"), t("platform.safety.f3"), t("platform.safety.f4"), t("platform.safety.f5")],
    },
    {
      id: "wellbe-care",
      colorKey: "care" as const,
      title: "Wellbe Care",
      subtitle: t("platform.care.subtitle"),
      icon: Heart,
      image: moduleHealthcare,
      description: t("platform.care.desc"),
      features: [t("platform.care.f1"), t("platform.care.f2"), t("platform.care.f3"), t("platform.care.f4"), t("platform.care.f5")],
    },
    {
      id: "vibewise",
      colorKey: "vibewise" as const,
      title: "Wellbe VibeWise",
      subtitle: t("platform.vibewise.subtitle"),
      icon: Star,
      image: moduleVibewise,
      isNew: true,
      description: t("platform.vibewise.desc"),
      features: [t("platform.vibewise.f1"), t("platform.vibewise.f2"), t("platform.vibewise.f3"), t("platform.vibewise.f4"), t("platform.vibewise.f5")],
    },
    {
      id: "parita-genere",
      colorKey: "dei" as const,
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

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 hero-gradient text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/15 border border-primary-foreground/20 text-sm font-medium mb-6 backdrop-blur-sm">
            {t("platform.badge")}
          </span>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 max-w-3xl mx-auto">
            {t("platform.title")}
          </h1>
          <p className="text-lg lg:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            {t("platform.description")}
          </p>
          {/* Nav pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {modules.map((m) => (
              <a
                key={m.id}
                href={`#${m.id}`}
                className="px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-sm font-medium hover:bg-primary-foreground/20 transition-colors backdrop-blur-sm"
              >
                {m.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-6">
            {modules.map((module, index) => {
              const colors = moduleColors[module.colorKey];
              const isEven = index % 2 === 0;
              return (
                <div
                  key={module.id}
                  id={module.id}
                  className={cn(
                    "relative rounded-3xl border overflow-hidden bg-gradient-to-br",
                    colors.bg,
                    colors.border
                  )}
                >
                  <div className={cn(
                    "flex flex-col gap-0 lg:gap-0",
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  )}>
                    {/* Text side */}
                    <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-5">
                        {module.isNew && (
                          <span className="px-2.5 py-0.5 text-xs font-bold bg-accent text-accent-foreground rounded-full uppercase tracking-wide">NEW</span>
                        )}
                        <div className={cn("w-11 h-11 rounded-xl flex items-center justify-center", colors.icon)}>
                          <module.icon className="h-5 w-5" />
                        </div>
                      </div>

                      <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground mb-2">
                        {module.title}
                      </h2>
                      <p className={cn("font-medium mb-5 text-sm uppercase tracking-wider", colors.accent)}>
                        {module.subtitle}
                      </p>
                      <p className="text-muted-foreground leading-relaxed mb-7 text-base max-w-lg">
                        {module.description}
                      </p>

                      {module.partnerLogo && (
                        <div className="flex items-center gap-3 mb-6 p-3 bg-background/60 rounded-xl border border-border/50 w-fit">
                          <span className="text-xs text-muted-foreground">{t("platform.coDesigned")}</span>
                          <a href="https://www.ecomy.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                            <img src={module.partnerLogo} alt={module.partnerName} className="h-7 object-contain" />
                          </a>
                        </div>
                      )}

                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                        {module.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2.5">
                            <CheckCircle className={cn("h-4 w-4 flex-shrink-0 mt-0.5", colors.accent)} />
                            <span className="text-foreground text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div>
                        <Link to="/contatti">
                          <Button className="font-medium group">
                            {t("platform.requestDemo")}
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </Link>
                      </div>
                    </div>

                    {/* Image side */}
                    <div className="flex-1 flex items-center justify-center p-6 lg:p-10 min-h-[300px] lg:min-h-[420px]">
                      <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-background/50 backdrop-blur-sm">
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

      {/* CTA */}
      <section className="py-20 lg:py-28 hero-gradient text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/30 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">{t("cta.title")}</h2>
          <p className="text-lg text-primary-foreground/80 mb-10">{t("cta.subtitle")}</p>
          <Link to="/contatti">
            <Button size="lg" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 font-semibold px-10">
              {t("cta.button")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
