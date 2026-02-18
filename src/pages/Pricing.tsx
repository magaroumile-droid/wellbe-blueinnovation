import { CheckCircle, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Pricing() {
  const { t } = useLanguage();

  const benefits = [
    t("pricing.b1"), t("pricing.b2"), t("pricing.b3"), t("pricing.b4"), t("pricing.b5"),
  ];

  return (
    <Layout>
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-24">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">{t("pricing.title")}</h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">{t("pricing.subtitle")}</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="rounded-2xl bg-muted/50 border border-border p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                <div>
                  <h2 className="text-2xl lg:text-4xl font-bold text-foreground mb-6">{t("pricing.cardTitle")}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">{t("pricing.cardDesc")}</p>
                  <Link to="/contatti">
                    <Button size="lg" className="font-semibold px-8">
                      {t("pricing.cta")}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
                <div className="rounded-xl bg-foreground text-background p-6 lg:p-8">
                  <ul className="space-y-4">
                    {benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-base lg:text-lg">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
