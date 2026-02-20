import { Layout } from "@/components/layout/Layout";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import { HelpCircle, Package, Lock, CreditCard, Rocket, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const categoryColors = [
  { border: "border-blue-200/50", icon: "bg-blue-500/10 text-blue-600", iconEl: HelpCircle },
  { border: "border-violet-200/50", icon: "bg-violet-500/10 text-violet-600", iconEl: Package },
  { border: "border-emerald-200/50", icon: "bg-emerald-500/10 text-emerald-600", iconEl: Lock },
  { border: "border-amber-200/50", icon: "bg-amber-500/10 text-amber-600", iconEl: CreditCard },
  { border: "border-pink-200/50", icon: "bg-pink-500/10 text-pink-600", iconEl: Rocket },
];

export default function FAQ() {
  const { t } = useLanguage();

  const faqCategories = [
    { title: t("faqPage.cat1"), items: [
      { question: t("faqPage.g1q"), answer: t("faqPage.g1a") },
      { question: t("faqPage.g2q"), answer: t("faqPage.g2a") },
      { question: t("faqPage.g3q"), answer: t("faqPage.g3a") },
    ]},
    { title: t("faqPage.cat2"), items: [
      { question: t("faqPage.m1q"), answer: t("faqPage.m1a") },
      { question: t("faqPage.m2q"), answer: t("faqPage.m2a") },
      { question: t("faqPage.m3q"), answer: t("faqPage.m3a") },
    ]},
    { title: t("faqPage.cat3"), items: [
      { question: t("faqPage.p1q"), answer: t("faqPage.p1a") },
      { question: t("faqPage.p2q"), answer: t("faqPage.p2a") },
    ]},
    { title: t("faqPage.cat4"), items: [
      { question: t("faqPage.pr1q"), answer: t("faqPage.pr1a") },
      { question: t("faqPage.pr2q"), answer: t("faqPage.pr2a") },
    ]},
    { title: t("faqPage.cat5"), items: [
      { question: t("faqPage.i1q"), answer: t("faqPage.i1a") },
      { question: t("faqPage.i2q"), answer: t("faqPage.i2a") },
    ]},
  ];

  return (
    <Layout>
      {/* ── HERO ── */}
      <section className="pt-8 pb-0 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="hero-dark-card px-8 lg:px-16 py-16 lg:py-24 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl opacity-15" style={{ background: "hsl(203 82% 55%)" }} />
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-white/10 text-white/80 text-xs font-semibold uppercase tracking-widest mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                FAQ
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-6 leading-tight">
                {t("faqPage.title")}
              </h1>
              <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
                {t("faqPage.subtitle")}
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {faqCategories.map((cat) => (
                  <span key={cat.title} className="px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-sm font-medium text-white/80">
                    {cat.title}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ CONTENT ── */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="space-y-4">
            {faqCategories.map((category, index) => {
              const colors = categoryColors[index];
              const IconEl = colors.iconEl;
              return (
                <div
                  key={category.title}
                  className={cn("rounded-2xl border bg-card overflow-hidden animate-fade-in-up", colors.border)}
                  style={{ animationDelay: `${index * 0.07}s` }}
                >
                  <div className="px-7 pt-6 pb-4 flex items-center gap-3">
                    <div className={cn("w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0", colors.icon)}>
                      <IconEl className="h-4 w-4" />
                    </div>
                    <h2 className="text-base font-bold text-foreground">{category.title}</h2>
                  </div>
                  <div className="px-7 pb-6">
                    <FAQAccordion items={category.items} />
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
