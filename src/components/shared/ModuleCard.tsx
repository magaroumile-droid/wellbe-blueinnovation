import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ModuleCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: "blue" | "green" | "purple" | "orange" | "pink";
  isNew?: boolean;
  className?: string;
}

const colorVariants = {
  blue: "bg-primary/10 text-primary border-primary/20",
  green: "bg-accent/10 text-accent border-accent/20",
  purple: "bg-wellbe-purple/10 text-wellbe-purple border-wellbe-purple/20",
  orange: "bg-wellbe-orange/10 text-wellbe-orange border-wellbe-orange/20",
  pink: "bg-wellbe-pink/10 text-wellbe-pink border-wellbe-pink/20",
};

const iconColorVariants = {
  blue: "bg-primary text-primary-foreground",
  green: "bg-accent text-accent-foreground",
  purple: "bg-wellbe-purple text-primary-foreground",
  orange: "bg-wellbe-orange text-primary-foreground",
  pink: "bg-wellbe-pink text-primary-foreground",
};

export function ModuleCard({
  title,
  description,
  icon: Icon,
  color,
  isNew,
  className,
}: ModuleCardProps) {
  return (
    <div
      className={cn(
        "group relative p-6 rounded-2xl bg-card border border-border hover-lift cursor-pointer overflow-hidden",
        className
      )}
    >
      {/* Background gradient on hover */}
      <div
        className={cn(
          "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
          colorVariants[color]
        )}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* New Badge */}
        {isNew && (
          <span className="absolute -top-2 -right-2 px-3 py-1 text-xs font-semibold bg-accent text-accent-foreground rounded-full">
            NEW
          </span>
        )}

        {/* Icon */}
        <div
          className={cn(
            "w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110",
            iconColorVariants[color]
          )}
        >
          <Icon className="h-7 w-7" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-card-foreground mb-2 group-hover:text-foreground transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
