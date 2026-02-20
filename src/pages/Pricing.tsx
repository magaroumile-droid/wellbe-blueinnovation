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
      {/* ── HERO ── */}
      <section className="pt-8 pb-0 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="hero-dark-card px-8 lg:px-16 py-16 lg:py-24 relative overflow-hidden">
            <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-15" style={{ background: "hsl(203 82% 55%)" }} />
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-white/10 text-white/80 text-xs font-semibold uppercase tracking-widest mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Pricing
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-6 leading-tight">
                {t("pricing.title")}
              </h1>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                {t("pricing.subtitle")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN CARD ── */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-3xl overflow-hidden border border-border bg-card">
              {/* Top accent line */}
              <div className="h-1.5 bg-gradient-to-r from-primary via-accent to-primary" />

              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left */}
                <div className="p-10 lg:p-14 flex flex-col justify-center">
                  <span className="section-badge mb-6 w-fit">{t("pricing.cardTitle")}</span>
                  <h2 className="text-2xl lg:text-4xl font-extrabold text-foreground mb-5 leading-tight">
                    {t("pricing.cardTitle")}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-8 text-base">
                    {t("pricing.cardDesc")}
                  </p>
                  <Link to="/contatti">
                    <Button size="lg" className="font-bold px-8 rounded-xl group w-fit">
                      {t("pricing.cta")}
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>

                {/* Right — dark */}
                <div className="p-10 lg:p-14 bg-foreground text-background flex flex-col justify-center">
                  <p className="text-xs font-bold uppercase tracking-widest text-background/50 mb-7">
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
