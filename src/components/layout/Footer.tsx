import { Link } from "react-router-dom";
import { Linkedin, Twitter, Mail } from "lucide-react";

const footerLinks = {
  piattaforma: [
    { name: "Happiness", path: "/piattaforma#happiness" },
    { name: "Sicurezza e Rischio", path: "/piattaforma#sicurezza" },
    { name: "JD-R Healthcare", path: "/piattaforma#jdr" },
    { name: "Parità di Genere", path: "/piattaforma#parita-genere" },
  ],
  azienda: [
    { name: "Chi Siamo", path: "/chi-siamo" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contatti", path: "/contatti" },
  ],
  risorse: [
    { name: "FAQ", path: "/faq" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Termini di Servizio", path: "/termini" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">W</span>
              </div>
              <span className="text-xl font-bold">Wellbe</span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed max-w-sm mb-6">
              L'unica piattaforma per la Sostenibilità Sociale d'Impresa. 
              Migliora il benessere dei tuoi dipendenti con assessment scientifici e dashboard intuitive.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="mailto:info@wellbe.it"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Piattaforma</h4>
            <ul className="space-y-3">
              {footerLinks.piattaforma.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-background/70 hover:text-primary text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Azienda</h4>
            <ul className="space-y-3">
              {footerLinks.azienda.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-background/70 hover:text-primary text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Risorse</h4>
            <ul className="space-y-3">
              {footerLinks.risorse.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-background/70 hover:text-primary text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Wellbe. Tutti i diritti riservati.
          </p>
          <p className="text-background/50 text-sm">
            Made with ❤️ in Italia
          </p>
        </div>
      </div>
    </footer>
  );
}
