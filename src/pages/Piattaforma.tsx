import { Sparkles, Shield, Heart, Users, CheckCircle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

import moduleHappiness from "@/assets/module-happiness.png";
import moduleSafety from "@/assets/module-safety.png";
import moduleHealthcare from "@/assets/module-healthcare.png";
import moduleDei from "@/assets/module-dei.png";
import logoEcomy from "@/assets/logo-ecomy-new.png";

export default function Piattaforma() {
  const { t } = useLanguage();

  const modules = [
    {
      id: "happiness",
      title: "Happiness",
      subtitle: t("platform.happiness.subtitle"),
      icon: Sparkles,
      image: moduleHappiness,
      description: t("platform.happiness.desc"),
      features: [t("platform.happiness.f1"), t("platform.happiness.f2"), t("platform.happiness.f3"), t("platform.happiness.f4"), t("platform.happiness.f5")],
    },
    {
      id: "safety-awareness",
      title: "Safety Awareness",
      subtitle: t("platform.safety.subtitle"),
      icon: Shield,
      image: moduleSafety,
      description: t("platform.safety.desc"),
      features: [t("platform.safety.f1"), t("platform.safety.f2"), t("platform.safety.f3"), t("platform.safety.f4"), t("platform.safety.f5")],
    },
    {
      id: "wellbe-care",
      title: "Wellbe Care",
      subtitle: t("platform.care.subtitle"),
      icon: Heart,
      image: moduleHealthcare,
      description: t("platform.care.desc"),
      features: [t("platform.care.f1"), t("platform.care.f2"), t("platform.care.f3"), t("platform.care.f4"), t("platform.care.f5")],
    },
    {
      id: "parita-genere",
      title: "Parità di Genere",
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
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            badge={t("platform.badge")}
            title={t("platform.title")}
            description={t("platform.description")}
          />
          <div className="space-y-16 lg:space-y-24">
            {modules.map((module, index) => (
              <div key={module.id} id={module.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 lg:gap-16 items-center`}>
                <div className="flex-1">
                  {module.isNew && (
                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-accent text-accent-foreground rounded-full mb-4">NEW</span>
                  )}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <module.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl lg:text-3xl font-bold text-foreground">{module.title}</h2>
                      <p className="text-muted-foreground">{module.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">{module.description}</p>
                  {module.partnerLogo && (
                    <div className="flex items-center gap-3 mb-6 p-3 bg-muted/50 rounded-lg border border-border">
                      <span className="text-sm text-muted-foreground">{t("platform.coDesigned")}</span>
                      <a href="https://www.ecomy.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                        <img src={module.partnerLogo} alt={module.partnerName} className="h-8 object-contain" />
                      </a>
                    </div>
                  )}
                  <ul className="space-y-3 mb-8">
                    {module.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contatti">
                    <Button className="font-medium">{t("platform.requestDemo")}</Button>
                  </Link>
                </div>
                <div className="flex-1 w-full">
                  <div className="rounded-2xl bg-gradient-to-br from-muted to-muted/50 border border-border overflow-hidden">
                    <img src={module.image} alt={`${module.title} - ${module.subtitle}`} className="w-full h-auto object-contain" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
