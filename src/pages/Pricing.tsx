import { Check } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const plans = [
  { name: "Starter", price: "€299", period: "/mese", description: "Per piccole aziende che iniziano il percorso.", features: ["1 modulo a scelta", "Fino a 50 dipendenti", "Dashboard base", "Report trimestrali", "Supporto email"], cta: "Inizia Ora", popular: false },
  { name: "Business", price: "€599", period: "/mese", description: "Per aziende in crescita con esigenze avanzate.", features: ["Tutti i moduli", "Fino a 500 dipendenti", "Dashboard avanzata", "Report mensili", "Benchmark settore", "Supporto prioritario", "Onboarding dedicato"], cta: "Scegli Business", popular: true },
  { name: "Enterprise", price: "Custom", period: "", description: "Soluzioni su misura per grandi organizzazioni.", features: ["Moduli personalizzati", "Dipendenti illimitati", "API & integrazioni", "Account manager dedicato", "SLA garantito", "Formazione on-site"], cta: "Contattaci", popular: false },
];

export default function Pricing() {
  return (
    <Layout>
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader badge="Pricing" title="Scegli il piano giusto per te" description="Prezzi trasparenti, nessun costo nascosto. Tutti i piani includono aggiornamenti gratuiti." />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <div key={plan.name} className={cn("relative p-8 rounded-2xl border", plan.popular ? "border-primary bg-primary/5 shadow-lg scale-105" : "border-border bg-card")}>
                {plan.popular && <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">Più Popolare</span>}
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-foreground text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contatti">
                  <Button className={cn("w-full font-medium", plan.popular ? "" : "variant-outline")} variant={plan.popular ? "default" : "outline"}>{plan.cta}</Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
