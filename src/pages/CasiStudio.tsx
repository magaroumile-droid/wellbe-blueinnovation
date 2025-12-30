import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CaseStudyCard } from "@/components/shared/CaseStudyCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const caseStudies = [
  { company: "TechCorp Italia", sector: "Tecnologia", challenge: "Alto turnover e basso engagement dei dipendenti tech.", result: "Aumento significativo della retention e miglioramento del clima aziendale.", metric: { value: "+43%", label: "Engagement" }, slug: "techcorp" },
  { company: "Ospedale San Marco", sector: "Healthcare", challenge: "Burnout diffuso tra il personale sanitario post-pandemia.", result: "Riduzione dello stress e miglioramento del work-life balance.", metric: { value: "-35%", label: "Burnout" }, slug: "san-marco" },
  { company: "GreenCo Srl", sector: "Manifatturiero", challenge: "Ottenere la certificazione UNI/PdR 125 per la parità di genere.", result: "Certificazione ottenuta e miglioramento delle politiche DEI.", metric: { value: "+52%", label: "Inclusion" }, slug: "greenco" },
  { company: "Banca Futuro", sector: "Finance", challenge: "Migliorare la cultura della sicurezza nelle filiali.", result: "Riduzione degli incidenti e maggiore consapevolezza dei rischi.", metric: { value: "-40%", label: "Incidenti" }, slug: "banca-futuro" },
];

export default function CasiStudio() {
  return (
    <Layout>
      <section className="py-20 lg:py-28 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Casi di Studio</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Scopri come le aziende italiane stanno trasformando il benessere organizzativo con Wellbe.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((cs) => (
              <CaseStudyCard key={cs.slug} {...cs} />
            ))}
          </div>
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">Vuoi essere il prossimo caso di successo?</p>
            <Link to="/contatti">
              <Button size="lg" className="font-medium">Prenota una Demo</Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
