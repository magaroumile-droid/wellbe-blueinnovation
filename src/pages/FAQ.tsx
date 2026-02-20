import { Layout } from "@/components/layout/Layout";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import { HelpCircle, Package, Lock, CreditCard, Rocket, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const categoryColors = [
  { bg: "from-blue-500/10 to-indigo-500/10", border: "border-blue-200/60", icon: "bg-blue-500/10 text-blue-600", iconEl: HelpCircle },
  { bg: "from-violet-500/10 to-purple-500/10", border: "border-violet-200/60", icon: "bg-violet-500/10 text-violet-600", iconEl: Package },
  { bg: "from-emerald-500/10 to-teal-500/10", border: "border-emerald-200/60", icon: "bg-emerald-500/10 text-emerald-600", iconEl: Lock },
  { bg: "from-amber-500/10 to-yellow-500/10", border: "border-amber-200/60", icon: "bg-amber-500/10 text-amber-600", iconEl: CreditCard },
  { bg: "from-pink-500/10 to-rose-500/10", border: "border-pink-200/60", icon: "bg-pink-500/10 text-pink-600", iconEl: Rocket },
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
      {/* Hero */}
      <section className="relative py-20 lg:py-28 hero-gradient text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/15 border border-primary-foreground/20 text-sm font-medium mb-6 backdrop-blur-sm">
            FAQ
          </span>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 max-w-3xl mx-auto">
            {t("faqPage.title")}
          </h1>
          <p className="text-lg lg:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            {t("faqPage.subtitle")}
          </p>

          {/* Category pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {faqCategories.map((cat) => (
              <span key={cat.title} className="px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-sm font-medium backdrop-blur-sm">
                {cat.title}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="space-y-6">
            {faqCategories.map((category, index) => {
              const colors = categoryColors[index];
              const IconEl = colors.iconEl;
              return (
                <div
                  key={category.title}
                  className={cn(
                    "rounded-3xl border overflow-hidden bg-gradient-to-br animate-fade-in-up",
                    colors.bg, colors.border
                  )}
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <div className="px-7 pt-7 pb-5 flex items-center gap-4">
                    <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0", colors.icon)}>
                      <IconEl className="h-5 w-5" />
                    </div>
                    <h2 className="text-xl font-bold text-foreground">{category.title}</h2>
                  </div>
                  <div className="px-7 pb-7">
                    <FAQAccordion items={category.items} />
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
