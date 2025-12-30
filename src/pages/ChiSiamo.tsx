import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Target, Lightbulb, Heart, Shield } from "lucide-react";

const team = [
  { name: "Marco Rossi", role: "CEO & Founder", initials: "MR" },
  { name: "Laura Bianchi", role: "COO", initials: "LB" },
  { name: "Giuseppe Verdi", role: "CTO", initials: "GV" },
  { name: "Anna Neri", role: "Head of Research", initials: "AN" },
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
            Siamo un team di esperti appassionati di benessere organizzativo, tecnologia e sostenibilità sociale d'impresa.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader badge="La Nostra Mission" title="Trasformiamo il modo in cui le aziende si prendono cura delle persone" centered={false} />
              <p className="text-muted-foreground leading-relaxed mb-6">
                Wellbe nasce dalla convinzione che il benessere dei dipendenti sia il fondamento del successo aziendale. La nostra piattaforma integra assessment scientifici, analytics avanzati e strumenti actionable per aiutare le organizzazioni a creare ambienti di lavoro eccellenti.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Collaboriamo con università, consulenti certificati ed esperti di dominio per sviluppare moduli sempre aggiornati e conformi agli standard internazionali.
              </p>
            </div>
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border" />
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
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">{member.initials}</span>
                </div>
                <h3 className="font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
