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
  { icon: "bg-blue-500/10 text-blue-600", border: "border-blue-200/50" },
  { icon: "bg-amber-500/10 text-amber-600", border: "border-amber-200/50" },
  { icon: "bg-emerald-500/10 text-emerald-600", border: "border-emerald-200/50" },
  { icon: "bg-violet-500/10 text-violet-600", border: "border-violet-200/50" },
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
      {/* ── HERO ── */}
      <section className="pt-8 pb-0 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="hero-dark-card px-8 lg:px-16 py-16 lg:py-24 relative overflow-hidden">
            <div className="absolute top-0 right-1/3 w-80 h-80 rounded-full blur-3xl opacity-15" style={{ background: "hsl(203 82% 55%)" }} />
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-white/10 text-white/80 text-xs font-semibold uppercase tracking-widest mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                {t("about.storyBadge")}
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-6 leading-tight">
                {t("about.title")}
              </h1>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                {t("about.subtitle")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── STORIA ── */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="animate-fade-in-up">
              <span className="section-badge mb-5">{t("about.storyBadge")}</span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-6 mt-3 leading-tight">
                {t("about.storyTitle")}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5 text-base"
                dangerouslySetInnerHTML={{ __html: t("about.storyP1") }} />
              <p className="text-muted-foreground leading-relaxed mb-8 text-base">
                {t("about.storyP2")}
              </p>
              <a href="https://www.blueinnovation.it/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="font-semibold rounded-xl group">
                  {t("about.discoverBI")}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <div className="relative rounded-3xl bg-muted border border-border p-12 flex items-center justify-center aspect-square overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-20" style={{ background: "hsl(203 82% 55%)" }} />
                <img src={wellbeLogo} alt="Wellbe" className="max-w-[60%] object-contain relative z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALORI ── */}
      <section className="py-20 lg:py-28 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="section-badge mb-5">{t("about.valuesBadge")}</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mt-3 leading-tight">
              {t("about.valuesTitle")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, index) => {
              const colors = valueColors[index];
              return (
                <div
                  key={value.title}
                  className={cn("rounded-2xl border bg-card p-7 hover-lift animate-fade-in-up", colors.border)}
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-5", colors.icon)}>
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="section-badge mb-5">Team</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mt-3 leading-tight">
              Le persone dietro Wellbe
            </h2>
          </div>
          <div className="flex flex-wrap gap-8">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="flex flex-col items-center gap-3 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-border shadow-md hover-lift">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <span className="text-sm font-semibold text-foreground">{member.name}</span>
              </div>
            ))}
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
