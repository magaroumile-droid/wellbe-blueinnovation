import { cn } from "@/lib/utils";

interface LogoMarqueeProps {
  logos: { src: string; alt: string }[];
  className?: string;
  bgColor?: "background" | "white";
}

export function LogoMarquee({ logos, className, bgColor = "background" }: LogoMarqueeProps) {
  const duplicatedLogos = [...logos, ...logos];
  const gradientFrom = bgColor === "white" ? "from-white" : "from-background";

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Gradient overlays */}
      <div className={cn("absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r to-transparent z-10", gradientFrom)} />
      <div className={cn("absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l to-transparent z-10", gradientFrom)} />
      
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
