import { Layout } from "@/components/layout/Layout";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Contatti() {
  const { t } = useLanguage();

  const contactInfo = [
    { icon: Mail, label: t("contact.email"), value: "info@wellbe.bio", href: "mailto:info@wellbe.bio" },
    { icon: Phone, label: t("contact.phone"), value: "+39 334 341 5069", href: "tel:+393343415069" },
    { icon: MapPin, label: t("contact.hq"), value: "Via Gioacchino Rossini, Rende, 87036 CS", href: undefined },
  ];

  return (
    <Layout>
      {/* ── HERO ── */}
      <section className="pt-8 pb-0 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="hero-dark-card px-8 lg:px-16 py-16 lg:py-24 relative overflow-hidden">
            <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-15" style={{ background: "hsl(203 82% 55%)" }} />
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-white/10 text-white/80 text-xs font-semibold uppercase tracking-widest mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                {t("contact.title")}
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-6 leading-tight">
                {t("contact.title")}
              </h1>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                {t("contact.subtitle")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Calendar — wider */}
            <div className="lg:col-span-3">
              <h2 className="text-xl font-extrabold text-foreground mb-5">{t("contact.pickTime")}</h2>
              <div className="rounded-2xl border border-border bg-card overflow-hidden">
                <iframe
                  src="https://meet.brevo.com/umile/wellbe-blue-innovation"
                  width="100%"
                  height="680"
                  frameBorder="0"
                  title={t("contact.title")}
                />
              </div>
            </div>

            {/* Contact info */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-extrabold text-foreground mb-5">{t("contact.orContact")}</h2>
              <div className="space-y-3">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border hover-lift">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-foreground font-semibold hover:text-accent transition-colors text-sm">{value}</a>
                      ) : (
                        <p className="text-foreground font-semibold text-sm">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
