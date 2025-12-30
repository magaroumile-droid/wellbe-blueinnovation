const logos = [
  { name: "Azienda 1", initials: "A1" },
  { name: "Azienda 2", initials: "A2" },
  { name: "Azienda 3", initials: "A3" },
  { name: "Azienda 4", initials: "A4" },
  { name: "Azienda 5", initials: "A5" },
  { name: "Azienda 6", initials: "A6" },
];

export function LogoBar() {
  return (
    <section className="py-12 border-y border-border bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Aziende che si affidano a Wellbe
        </p>
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 lg:mx-12"
              >
                <div className="w-24 h-12 rounded-lg bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground font-semibold">{logo.initials}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
