import { Layout } from "@/components/layout/Layout";
import { Target, Lightbulb, Heart, Shield, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import wellbeLogo from "@/assets/wellbe-logo.png";
import teamAntonio from "@/assets/team-antonio.png";
import teamAriosto from "@/assets/team-ariosto.png";
import teamGabriele from "@/assets/team-gabriele.png";
import teamLuigi from "@/assets/team-luigi.png";
import teamUmile from "@/assets/team-umile.png";

const valueColors = [
  { bg: "from-blue-500/10 to-indigo-500/10", border: "border-blue-200/60", icon: "bg-blue-500/10 text-blue-600" },
  { bg: "from-amber-500/10 to-yellow-500/10", border: "border-amber-200/60", icon: "bg-amber-500/10 text-amber-600" },
  { bg: "from-emerald-500/10 to-teal-500/10", border: "border-emerald-200/60", icon: "bg-emerald-500/10 text-emerald-600" },
  { bg: "from-violet-500/10 to-purple-500/10", border: "border-violet-200/60", icon: "bg-violet-500/10 text-violet-600" },
];

const team = [
  { name: "Antonio", img: teamAntonio },
  { name: "Ariosto", img: teamAriosto },
  { name: "Gabriele", img: teamGabriele },
  { name: "Luigi", img: teamLuigi },
  { name: "Umile", img: teamUmile },
];

export default function ChiSiamo() {
  const { t } = useLanguage();

  const values = [
    { icon: Target, title: t("about.val1.title"), description: t("about.val1.desc") },
    { icon: Lightbulb, title: t("about.val2.title"), description: t("about.val2.desc") },
    { icon: Heart, title: t("about.val3.title"), description: t("about.val3.desc") },
    { icon: Shield, title: t("about.val4.title"), description: t("about.val4.desc") },
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
            {t("about.storyBadge")}
          </span>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 max-w-3xl mx-auto">
            {t("about.title")}
          </h1>
          <p className="text-lg lg:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            {t("about.subtitle")}
          </p>
        </div>
      </section>

      {/* Storia */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="animate-fade-in-up">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-5">
                {t("about.storyBadge")}
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                {t("about.storyTitle")}
              </h2>
              <p
                className="text-muted-foreground leading-relaxed mb-5 text-base"
                dangerouslySetInnerHTML={{ __html: t("about.storyP1") }}
              />
              <p className="text-muted-foreground leading-relaxed mb-8 text-base">
                {t("about.storyP2")}
              </p>
              <a href="https://www.blueinnovation.it/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="font-medium group">
                  {t("about.discoverBI")}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              <div className="relative rounded-3xl bg-gradient-to-br from-primary/5 to-accent/10 border border-border p-12 flex items-center justify-center aspect-square">
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-accent/10 rounded-full blur-3xl" />
                  <div className="absolute bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full blur-3xl" />
                </div>
                <img src={wellbeLogo} alt="Wellbe" className="max-w-[70%] max-h-[70%] object-contain relative z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valori */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              {t("about.valuesBadge")}
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{t("about.valuesTitle")}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((value, index) => {
              const colors = valueColors[index];
              return (
                <div
                  key={value.title}
                  className={cn(
                    "rounded-2xl border p-7 bg-gradient-to-br hover-lift animate-fade-in-up text-center",
                    colors.bg, colors.border
                  )}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5", colors.icon)}>
                    <value.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Team
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Le persone dietro Wellbe
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="flex flex-col items-center gap-3 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-border shadow-lg hover-lift">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <span className="text-sm font-medium text-foreground">{member.name}</span>
              </div>
            ))}
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
