import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Target, Lightbulb, Heart, Shield, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import wellbeLogo from "@/assets/wellbe-logo.png";
import teamGabriele from "@/assets/team-gabriele.png";
import teamAriosto from "@/assets/team-ariosto.png";
import teamLuigi from "@/assets/team-luigi.png";
import teamAntonio from "@/assets/team-antonio.png";
import teamUmile from "@/assets/team-umile.png";

const team = [
  { name: "Gabriele Zangara", role: "Amministratore Delegato", description: "Leadership strategica e company vision", photo: teamGabriele },
  { name: "Ariosto Ponterio", role: "CPO", description: "Marketing e Prodotto", photo: teamAntonio },
  { name: "Luigi Filice", role: "R&D Lead", description: "Ricerca e sviluppo", photo: teamAriosto },
  { name: "Antonio Cosma", role: "CFO", description: "Gestione finanziaria", photo: teamLuigi },
  { name: "Umile Magarò", role: "BDR", description: "Business Development", photo: teamUmile },
];

const values = [
  { icon: Target, title: "Innovazione", description: "Sviluppiamo soluzioni all'avanguardia basate sulla ricerca scientifica." },
  { icon: Lightbulb, title: "Semplicità", description: "Rendiamo accessibili strumenti complessi attraverso interfacce intuitive." },
  { icon: Heart, title: "Benessere", description: "Il benessere delle persone è al centro di ogni nostra decisione." },
  { icon: Shield, title: "Affidabilità", description: "Garantiamo sicurezza dei dati e conformità agli standard più elevati." },
];

export default function ChiSiamo() {
  return (
    <Layout>
      <section className="py-20 lg:py-28 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Chi Siamo</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Wellbe è la startup di Blue Innovation dedicata alla Sostenibilità Sociale d'Impresa.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader badge="La Nostra Storia" title="Nati per trasformare il benessere organizzativo" centered={false} />
              <p className="text-muted-foreground leading-relaxed mb-6">
                Wellbe nasce dall'esperienza di <strong>Blue Innovation</strong>, azienda specializzata in soluzioni digitali innovative per le imprese. 
                La nostra missione è rendere misurabile e migliorabile la sostenibilità sociale, mettendo le persone al centro della strategia aziendale.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Collaboriamo con università, consulenti certificati ed esperti di dominio per sviluppare assessment scientificamente validati e conformi agli standard internazionali.
              </p>
              <a href="https://www.blueinnovation.it/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="font-medium">
                  Scopri Blue Innovation
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border flex items-center justify-center p-12">
              <img src={wellbeLogo} alt="Wellbe" className="max-w-full max-h-full object-contain" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader badge="I Nostri Valori" title="Cosa ci guida" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="p-6 rounded-2xl bg-card border border-border text-center hover-lift">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader badge="Il Team" title="Le persone dietro Wellbe" />
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-32 h-32 mx-auto mb-4">
                  <img 
                    src={member.photo} 
                    alt={member.name} 
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm font-medium text-primary">{member.role}</p>
                <p className="text-xs text-muted-foreground mt-1">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
