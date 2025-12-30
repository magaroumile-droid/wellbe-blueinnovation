import { cn } from "@/lib/utils";

interface LogoMarqueeProps {
  logos: { src: string; alt: string }[];
  className?: string;
}

export function LogoMarquee({ logos, className }: LogoMarqueeProps) {
  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
      
      {/* Marquee container */}
      <div className="flex animate-marquee">
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo.alt}-${index}`}
            className="flex-shrink-0 mx-8 lg:mx-12 flex items-center justify-center"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-8 lg:h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
