import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, LogIn, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import wellbeLogo from "@/assets/wellbe-logo.png";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Language } from "@/contexts/LanguageContext";

const navLinkKeys = [
  { key: "nav.home", path: "/" },
  { key: "nav.piattaforma", path: "/piattaforma" },
  { key: "nav.chiSiamo", path: "/chi-siamo" },
  { key: "nav.faq", path: "/faq" },
  { key: "nav.pricing", path: "/pricing" },
];

const languages: { code: Language; label: string; flag: string }[] = [
  { code: "it", label: "Italiano", flag: "🇮🇹" },
  { code: "en", label: "English", flag: "🇬🇧" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={wellbeLogo} alt="Wellbe" className="h-8 lg:h-10" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinkKeys.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-accent",
                  location.pathname === link.path
                    ? "text-accent"
                    : "text-muted-foreground"
                )}
              >
                {t(link.key)}
              </Link>
            ))}
          </div>

          {/* CTA Buttons + Language */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
              >
                <Globe className="h-4 w-4" />
                {languages.find((l) => l.code === language)?.flag}
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-1 bg-popover border border-border rounded-lg shadow-lg z-50 min-w-[140px] py-1">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setLangOpen(false);
                      }}
                      className={cn(
                        "flex items-center gap-2 w-full px-3 py-2 text-sm hover:bg-muted transition-colors",
                        language === lang.code
                          ? "text-foreground font-medium"
                          : "text-muted-foreground"
                      )}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a href="https://app.wellbe.bio/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="font-medium px-4">
                <LogIn className="mr-2 h-4 w-4" />
                {t("nav.login")}
              </Button>
            </a>
            <Link to="/contatti">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6">
                {t("nav.prenotaDemo")}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinkKeys.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-sm font-medium py-2 transition-colors",
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  )}
                >
                  {t(link.key)}
                </Link>
              ))}

              {/* Mobile Language Switcher */}
              <div className="flex items-center gap-2 py-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={cn(
                      "flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-md border transition-colors",
                      language === lang.code
                        ? "border-primary bg-primary/10 text-foreground font-medium"
                        : "border-border text-muted-foreground hover:border-primary"
                    )}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>

              <a href="https://app.wellbe.bio/" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                <Button variant="outline" className="w-full font-medium mb-2">
                  <LogIn className="mr-2 h-4 w-4" />
                  {t("nav.login")}
                </Button>
              </a>
              <Link to="/contatti" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
                  {t("nav.prenotaDemo")}
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
