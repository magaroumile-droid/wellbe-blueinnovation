import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  metric?: {
    value: string;
    label: string;
  };
}

export function TestimonialCard({
  quote,
  author,
  role,
  company,
  metric,
}: TestimonialCardProps) {
  return (
    <div className="relative p-8 rounded-2xl bg-card border border-border hover-lift">
      {/* Quote Icon */}
      <Quote className="absolute top-6 right-6 h-10 w-10 text-primary/20" />

      {/* Metric Badge */}
      {metric && (
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
          <span className="text-2xl font-bold">{metric.value}</span>
          <span className="text-sm font-medium">{metric.label}</span>
        </div>
      )}

      {/* Quote Text */}
      <p className="text-card-foreground text-lg leading-relaxed mb-6">
        "{quote}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-semibold">
          {author.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-card-foreground">{author}</p>
          <p className="text-sm text-muted-foreground">
            {role} @ {company}
          </p>
        </div>
      </div>
    </div>
  );
}
