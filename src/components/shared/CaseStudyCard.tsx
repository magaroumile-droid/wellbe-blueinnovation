import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CaseStudyCardProps {
  company: string;
  sector: string;
  challenge: string;
  result: string;
  metric: {
    value: string;
    label: string;
  };
  slug: string;
}

export function CaseStudyCard({
  company,
  sector,
  challenge,
  result,
  metric,
  slug,
}: CaseStudyCardProps) {
  return (
    <div className="group p-6 lg:p-8 rounded-2xl bg-card border border-border hover-lift">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
            <span className="text-2xl font-bold text-primary">{company.charAt(0)}</span>
          </div>
          <h3 className="text-xl font-semibold text-card-foreground">{company}</h3>
          <span className="text-sm text-muted-foreground">{sector}</span>
        </div>
        <div className="text-right">
          <span className="text-3xl font-bold text-accent">{metric.value}</span>
          <p className="text-sm text-muted-foreground">{metric.label}</p>
        </div>
      </div>

      {/* Challenge & Result */}
      <div className="space-y-4 mb-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Sfida</span>
          <p className="text-sm text-card-foreground mt-1">{challenge}</p>
        </div>
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Risultato</span>
          <p className="text-sm text-card-foreground mt-1">{result}</p>
        </div>
      </div>

      {/* CTA */}
      <Link
        to={`/casi-studio/${slug}`}
        className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all"
      >
        Leggi il caso completo
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
