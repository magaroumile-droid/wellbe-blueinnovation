import { Layout } from "@/components/layout/Layout";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contatti() {
  const { t } = useLanguage();

  return (
    <Layout>
      <section className="py-20 lg:py-28 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">{t("contact.title")}</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">{t("contact.subtitle")}</p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">{t("contact.pickTime")}</h2>
              <div className="aspect-video lg:aspect-[4/5] rounded-2xl bg-muted border border-border overflow-hidden">
                <iframe
                  src="https://meet.brevo.com/umile/wellbe-blue-innovation"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title={t("contact.title")}
                  className="min-h-[500px]"
                />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">{t("contact.orContact")}</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 rounded-xl bg-muted/50 border border-border">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">{t("contact.email")}</h3>
                    <a href="mailto:info@wellbe.it" className="text-primary hover:underline">info@wellbe.it</a>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 rounded-xl bg-muted/50 border border-border">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">{t("contact.phone")}</h3>
                    <a href="tel:+393343415069" className="text-primary hover:underline">+39 334 341 5069</a>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 rounded-xl bg-muted/50 border border-border">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">{t("contact.hq")}</h3>
                    <p className="text-muted-foreground">Via Gioacchino Rossini, Rende, 87036 CS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
