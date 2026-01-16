import { Link } from "react-router-dom";
import { Linkedin, Mail } from "lucide-react";
import wellbeLogo from "@/assets/wellbe-logo.png";

const footerLinks = {
  piattaforma: [
    { name: "Happiness", path: "/piattaforma#happiness" },
    { name: "Safety Awareness", path: "/piattaforma#safety-awareness" },
    { name: "Wellbe Care", path: "/piattaforma#wellbe-care" },
    { name: "Parità di Genere", path: "/piattaforma#parita-genere" },
  ],
  azienda: [
    { name: "Chi Siamo", path: "/chi-siamo" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contatti", path: "/contatti" },
  ],
  risorse: [
    { name: "FAQ", path: "/faq" },
    { name: "Privacy Policy", href: "https://www.blueinnovation.it/privacy-policy/", external: true },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center mb-4">
              <img src={wellbeLogo} alt="Wellbe" className="h-10 brightness-0 invert" />
            </Link>
            <p className="text-background/70 text-sm leading-relaxed max-w-sm mb-6">
              L'unica piattaforma per la Responsabilità Sociale d'Impresa. 
              Migliora il benessere dei tuoi dipendenti con assessment scientifici e dashboard intuitive.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/blueinnovation-srl/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Seguici su LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:info@wellbe.bio"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Contattaci via email"
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
                <li key={'external' in link ? link.href : link.path}>
                  {'external' in link ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-background/70 hover:text-primary text-sm transition-colors"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className="text-background/70 hover:text-primary text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
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
