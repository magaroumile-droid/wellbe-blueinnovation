import { CheckCircle, ArrowRight, Sparkles, MessageCircle, BarChart3 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

const highlightColors = [
  { bg: "from-blue-500/10 to-indigo-500/10", border: "border-blue-200/60", icon: "bg-blue-500/10 text-blue-600" },
  { bg: "from-emerald-500/10 to-teal-500/10", border: "border-emerald-200/60", icon: "bg-emerald-500/10 text-emerald-600" },
  { bg: "from-violet-500/10 to-purple-500/10", border: "border-violet-200/60", icon: "bg-violet-500/10 text-violet-600" },
];

const highlights = [
  { icon: Sparkles, titleKey: "pricing.h1.title", descKey: "pricing.h1.desc" },
  { icon: BarChart3, titleKey: "pricing.h2.title", descKey: "pricing.h2.desc" },
  { icon: MessageCircle, titleKey: "pricing.h3.title", descKey: "pricing.h3.desc" },
];

export default function Pricing() {
  const { t } = useLanguage();

  const benefits = [
    t("pricing.b1"), t("pricing.b2"), t("pricing.b3"), t("pricing.b4"), t("pricing.b5"),
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
            Pricing
          </span>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 max-w-3xl mx-auto">
            {t("pricing.title")}
          </h1>
          <p className="text-lg lg:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            {t("pricing.subtitle")}
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {highlights.map((h, index) => {
              const colors = highlightColors[index];
              const titleKey = h.titleKey as any;
              const descKey = h.descKey as any;
              // Fallback titles in case keys aren't in context yet
              const titles = ["Su misura per te", "Impatto misurabile", "Supporto dedicato"];
              const descs = ["Nessun piano fisso. Costruiamo insieme la soluzione giusta per la tua organizzazione.", "Misuri il ROI reale sulle persone, non solo i costi.", "Un consulente dedicato ti accompagna per tutta la durata del contratto."];
              return (
                <div
                  key={index}
                  className={cn(
                    "rounded-2xl border p-7 bg-gradient-to-br hover-lift animate-fade-in-up",
                    colors.bg, colors.border
                  )}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-5", colors.icon)}>
                    <h.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{titles[index]}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{descs[index]}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Card */}
      <section className="py-12 pb-20 lg:pb-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden border border-border/50">
              {/* Top gradient band */}
              <div className="h-2 bg-gradient-to-r from-primary via-accent to-primary" />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Left */}
                <div className="p-10 lg:p-14 bg-background flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide mb-5">
                    {t("pricing.cardTitle")}
                  </span>
                  <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground mb-5 leading-snug">
                    Investimento, non costo
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-8 text-base">
                    {t("pricing.cardDesc")}
                  </p>
                  <Link to="/contatti">
                    <Button size="lg" className="font-semibold px-8 group w-fit">
                      {t("pricing.cta")}
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>

                {/* Right */}
                <div className="p-10 lg:p-14 bg-foreground text-background flex flex-col justify-center">
                  <p className="text-sm font-semibold uppercase tracking-wider text-background/60 mb-6">
                    Incluso nel piano
                  </p>
                  <ul className="space-y-4">
                    {benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-base leading-snug">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 hero-gradient text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
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
