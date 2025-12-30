import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { FAQAccordion, FAQItem } from "@/components/shared/FAQAccordion";

const faqCategories = [
  { title: "Generale", items: [
    { question: "Cos'è Wellbe e cosa offre?", answer: "Wellbe è l'unica piattaforma integrata per la Sostenibilità Sociale d'Impresa. Offriamo assessment scientifici per misurare benessere, sicurezza, DEI e molto altro." },
    { question: "A chi si rivolge la piattaforma?", answer: "A tutte le aziende che vogliono investire nel benessere: PMI, grandi imprese, settore pubblico e sanitario." },
    { question: "È disponibile una demo gratuita?", answer: "Sì! Puoi prenotare una demo gratuita direttamente dal nostro sito." },
  ]},
  { title: "Moduli & Funzionalità", items: [
    { question: "Quali moduli sono disponibili?", answer: "Offriamo 4 moduli: Happiness, Sicurezza e Rischio (RTQ), JD-R Healthcare e DEI." },
    { question: "Posso attivare solo alcuni moduli?", answer: "Assolutamente sì. La piattaforma è modulare e puoi scegliere solo i moduli di cui hai bisogno." },
    { question: "Il modulo DEI è conforme alla UNI/PdR 125?", answer: "Sì, il modulo DEI è progettato per supportare il percorso verso la certificazione UNI/PdR 125:2022." },
  ]},
  { title: "Privacy & Sicurezza", items: [
    { question: "Come vengono protetti i dati?", answer: "Utilizziamo crittografia end-to-end, server sicuri in EU e siamo pienamente conformi al GDPR." },
    { question: "L'anonimato è garantito?", answer: "Sì, le risposte individuali sono sempre anonime. I report mostrano solo dati aggregati." },
  ]},
  { title: "Pricing & Abbonamenti", items: [
    { question: "Quali piani sono disponibili?", answer: "Offriamo tre piani: Starter, Business ed Enterprise, con funzionalità crescenti." },
    { question: "È possibile personalizzare il piano?", answer: "Sì, soprattutto per il piano Enterprise, offriamo soluzioni completamente personalizzate." },
  ]},
  { title: "Implementazione", items: [
    { question: "Quanto tempo richiede l'attivazione?", answer: "In media meno di una settimana, con supporto dedicato del nostro team." },
    { question: "Offrite formazione?", answer: "Sì, tutti i piani includono onboarding e formazione per il team HR." },
  ]},
];

export default function FAQ() {
  return (
    <Layout>
      <section className="py-20 lg:py-28 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Domande Frequenti</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Trova le risposte a tutte le tue domande sulla piattaforma Wellbe.
          </p>
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
