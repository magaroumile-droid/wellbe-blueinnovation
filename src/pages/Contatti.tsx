import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contatti() {
  return (
    <Layout>
      <section className="py-20 lg:py-28 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Prenota una Demo</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Scopri come Wellbe può trasformare il benessere della tua azienda. Prenota una demo gratuita con il nostro
            team.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Calendly Embed */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Scegli un orario</h2>
              <div className="aspect-video lg:aspect-[4/5] rounded-2xl bg-muted border border-border overflow-hidden">
                <iframe
                  src="https://meet.brevo.com/umile/wellbe-blue-innovation"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Prenota una demo"
                  className="min-h-[500px]"
                />
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Oppure contattaci</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 rounded-xl bg-muted/50 border border-border">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <a href="mailto:info@wellbe.it" className="text-primary hover:underline">
                      info@wellbe.it
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 rounded-xl bg-muted/50 border border-border">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Telefono</h3>
                    <a href="tel:+393343415069" className="text-primary hover:underline">
                      +39 334 341 5069
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 rounded-xl bg-muted/50 border border-border">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Sede</h3>
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
