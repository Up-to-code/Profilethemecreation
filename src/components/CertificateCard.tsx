import { Award } from "lucide-react";

interface CertificateCardProps {
  title: string;
  issuer: string;
  date: string;
  description?: string;
}

export function CertificateCard({ title, issuer, date, description }: CertificateCardProps) {
  return (
    <div className="p-4 rounded-xl border hover:bg-secondary/30 transition-colors">
      <div className="flex gap-4 text-left">
        {/* Icon - Left Side */}
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Award className="w-5 h-5 text-primary" />
          </div>
        </div>
        
        {/* Content - Right Side */}
        <div className="flex-1 min-w-0">
          <h3 className="mb-1">{title}</h3>
          <p className="text-muted-foreground text-sm mb-1">{issuer}</p>
          <p className="text-xs text-muted-foreground mb-2">{date}</p>
          {description && (
            <p className="text-sm text-muted-foreground line-clamp-2">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
