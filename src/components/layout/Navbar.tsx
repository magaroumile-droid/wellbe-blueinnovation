import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, LogIn, Globe, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import wellbeLogo from "@/assets/wellbe-logo.png";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Language } from "@/contexts/LanguageContext";

const navLinkKeys = [
  { key: "nav.home", path: "/" },
  { key: "nav.piattaforma", path: "/piattaforma" },
  { key: "nav.chiSiamo", path: "/chi-siamo" },
  { key: "nav.pricing", path: "/pricing" },
  { key: "nav.faq", path: "/faq" },
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[68px]">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={wellbeLogo} alt="Wellbe" className="h-7 lg:h-8" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinkKeys.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                  location.pathname === link.path
                    ? "text-foreground bg-muted"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/70"
                )}
              >
                {t(link.key)}
              </Link>
            ))}
          </div>

          {/* CTA Buttons + Language */}
          <div className="hidden lg:flex items-center gap-2">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted"
              >
                <Globe className="h-4 w-4" />
                <span>{languages.find((l) => l.code === language)?.flag}</span>
                <ChevronDown className="h-3 w-3" />
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-1 bg-card border border-border rounded-xl shadow-lg z-50 min-w-[140px] py-1.5 overflow-hidden">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => { setLanguage(lang.code); setLangOpen(false); }}
                      className={cn(
                        "flex items-center gap-2.5 w-full px-4 py-2.5 text-sm transition-colors",
                        language === lang.code
                          ? "text-foreground font-semibold bg-muted"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
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
              <Button variant="outline" size="sm" className="font-medium px-4 rounded-lg border-border">
                <LogIn className="mr-1.5 h-3.5 w-3.5" />
                {t("nav.login")}
              </Button>
            </a>
            <Link to="/contatti">
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-5 rounded-lg">
                {t("nav.prenotaDemo")}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5 text-foreground" /> : <Menu className="h-5 w-5 text-foreground" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-1">
              {navLinkKeys.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-sm font-medium px-4 py-3 rounded-xl transition-colors",
                    location.pathname === link.path
                      ? "text-foreground bg-muted font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/70"
                  )}
                >
                  {t(link.key)}
                </Link>
              ))}

              <div className="flex items-center gap-2 px-4 py-3">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={cn(
                      "flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-lg border transition-colors",
                      language === lang.code
                        ? "border-primary bg-primary/10 text-foreground font-semibold"
                        : "border-border text-muted-foreground hover:border-primary/50"
                    )}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>

              <div className="pt-2 space-y-2 px-1">
                <a href="https://app.wellbe.bio/" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full font-medium rounded-xl">
                    <LogIn className="mr-2 h-4 w-4" />
                    {t("nav.login")}
                  </Button>
                </a>
                <Link to="/contatti" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl">
                    {t("nav.prenotaDemo")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
