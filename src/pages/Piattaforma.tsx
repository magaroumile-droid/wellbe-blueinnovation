import { Sparkles, Shield, Heart, Users, CheckCircle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import moduleHappiness from "@/assets/module-happiness.png";
import moduleSafety from "@/assets/module-safety.png";
import moduleHealthcare from "@/assets/module-healthcare.png";
import moduleDei from "@/assets/module-dei.png";

const modules = [
  {
    id: "happiness",
    title: "Happiness",
    subtitle: "Benessere e Clima Organizzativo",
    icon: Sparkles,
    image: moduleHappiness,
    description: "Basato su strumenti validati di psicologia del lavoro, il modulo Happiness misura il benessere percepito e il clima organizzativo della tua azienda tramite l'indicatore BWI (Blue Wellbeing Index).",
    features: ["Indicatore BWI proprietario", "Certificazione e badge digitale BWI", "Assessment basato su modelli scientifici", "Report dettagliati per area/team", "Benchmark di settore"],
  },
  {
    id: "sicurezza",
    title: "Sicurezza e Rischio",
    subtitle: "Percezione della Sicurezza",
    icon: Shield,
    image: moduleSafety,
    description: "Analizza la percezione della sicurezza sul lavoro per rafforzare la cultura della prevenzione.",
    features: ["Valutazione percezione rischi", "Analisi comportamenti sicuri", "Cultura della prevenzione", "Conformità normativa", "Piani di miglioramento"],
  },
  {
    id: "jdr",
    title: "JD-R Healthcare",
    subtitle: "Benessere nel Settore Sanitario",
    icon: Heart,
    image: moduleHealthcare,
    description: "Modulo specifico per il settore sanitario che analizza l'equilibrio tra richieste lavorative e risorse disponibili secondo il modello Job Demands-Resources.",
    features: ["Modello JD-R validato", "Specifico per healthcare", "Prevenzione burnout", "Valutazione risorse", "Performance team medici"],
  },
  {
    id: "parita-genere",
    title: "Parità di Genere",
    subtitle: "Certificazione UNI/PdR 125:2022",
    icon: Users,
    image: moduleDei,
    isNew: true,
    description: "Valuta le politiche e la cultura aziendale in tema di parità di genere. Supporta il percorso verso la certificazione UNI/PdR 125:2022.",
    features: ["Conformità UNI/PdR 125:2022", "Assessment cultura inclusiva", "Gap analysis parità", "Piano d'azione parità", "Monitoraggio KPI"],
  },
];

export default function Piattaforma() {
  return (
    <Layout>
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            badge="La Piattaforma"
            title="I Nostri Assessment"
            description="Co-progettiamo moduli insieme a consulenti certificati ed esperti di dominio. Conformi agli standard nazionali e internazionali."
          />
          <div className="space-y-16 lg:space-y-24">
            {modules.map((module, index) => (
              <div key={module.id} id={module.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 lg:gap-16 items-center`}>
                <div className="flex-1">
                  {module.isNew && (
                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-accent text-accent-foreground rounded-full mb-4">NEW</span>
                  )}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <module.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl lg:text-3xl font-bold text-foreground">{module.title}</h2>
                      <p className="text-muted-foreground">{module.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">{module.description}</p>
                  <ul className="space-y-3 mb-8">
                    {module.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contatti">
                    <Button className="font-medium">Richiedi una Demo</Button>
                  </Link>
                </div>
                <div className="flex-1 w-full">
                  <div className="rounded-2xl bg-gradient-to-br from-muted to-muted/50 border border-border overflow-hidden">
                    <img 
                      src={module.image} 
                      alt={`${module.title} - ${module.subtitle}`}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
