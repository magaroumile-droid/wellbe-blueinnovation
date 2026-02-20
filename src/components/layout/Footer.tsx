import { Link } from "react-router-dom";
import { Linkedin, Mail } from "lucide-react";
import wellbeLogo from "@/assets/wellbe-logo.png";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  const footerLinks = {
    piattaforma: [
      { name: "Happiness", hash: "happiness" },
      { name: "Safety Awareness", hash: "safety-awareness" },
      { name: "Wellbe Care", hash: "wellbe-care" },
      { name: "Wellbe VibeWise", hash: "vibewise" },
      { name: "Parità di Genere", hash: "parita-genere" },
    ],
    azienda: [
      { name: t("nav.chiSiamo"), path: "/chi-siamo" },
      { name: t("nav.pricing"), path: "/pricing" },
      { name: t("contact.title"), path: "/contatti" },
    ],
    risorse: [
      { name: t("nav.faq"), path: "/faq" },
      { name: t("footer.privacyPolicy"), href: "https://www.blueinnovation.it/privacy-policy/", external: true },
    ],
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center mb-4">
              <img src={wellbeLogo} alt="Wellbe" className="h-10 brightness-0 invert" />
            </Link>
            <p className="text-background/70 text-sm leading-relaxed max-w-sm mb-6">{t("footer.desc")}</p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/blueinnovation-srl/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:info@wellbe.bio" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">{t("footer.platform")}</h4>
            <ul className="space-y-3">
              {footerLinks.piattaforma.map((link) => (
                <li key={link.hash}>
                  <Link
                    to={`/piattaforma#${link.hash}`}
                    onClick={() => {
                      setTimeout(() => {
                        const element = document.getElementById(link.hash);
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}
                    className="text-background/70 hover:text-primary text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">{t("footer.company")}</h4>
            <ul className="space-y-3">
              {footerLinks.azienda.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-background/70 hover:text-primary text-sm transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">{t("footer.resources")}</h4>
            <ul className="space-y-3">
              {footerLinks.risorse.map((link) => (
                <li key={'external' in link ? link.href : link.path}>
                  {'external' in link ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-primary text-sm transition-colors">{link.name}</a>
                  ) : (
                    <Link to={link.path!} className="text-background/70 hover:text-primary text-sm transition-colors">{link.name}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">© {new Date().getFullYear()} Wellbe. {t("footer.rights")}</p>
          <p className="text-background/50 text-sm">{t("footer.madeWith")}</p>
        </div>
      </div>
    </footer>
  );
}
