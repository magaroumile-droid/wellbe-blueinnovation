import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Target, Lightbulb, Heart, Shield, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import wellbeLogo from "@/assets/wellbe-logo.png";

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
      <section className="py-20 lg:py-28 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">{t("about.title")}</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">{t("about.subtitle")}</p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader badge={t("about.storyBadge")} title={t("about.storyTitle")} centered={false} />
              <p className="text-muted-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: t("about.storyP1") }} />
              <p className="text-muted-foreground leading-relaxed mb-8">{t("about.storyP2")}</p>
              <a href="https://www.blueinnovation.it/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="font-medium">
                  {t("about.discoverBI")}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border flex items-center justify-center p-12">
              <img src={wellbeLogo} alt="Wellbe" className="max-w-full max-h-full object-contain" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader badge={t("about.valuesBadge")} title={t("about.valuesTitle")} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="p-6 rounded-2xl bg-card border border-border text-center hover-lift">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
