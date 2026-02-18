import { Layout } from "@/components/layout/Layout";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { useLanguage } from "@/contexts/LanguageContext";

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
      <section className="py-20 lg:py-28 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">{t("faqPage.title")}</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">{t("faqPage.subtitle")}</p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          {faqCategories.map((category) => (
            <div key={category.title} className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">{category.title}</h2>
              <FAQAccordion items={category.items} />
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
