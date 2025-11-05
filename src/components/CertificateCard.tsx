import { Card } from "./ui/card";
import { Award } from "lucide-react";

interface CertificateCardProps {
  title: string;
  issuer: string;
  date: string;
  description?: string;
}

export function CertificateCard({ title, issuer, date, description }: CertificateCardProps) {
  return (
    <Card className="p-6 hover:border-primary/50 transition-colors">
      <div className="flex gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Award className="w-6 h-6 text-primary" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="mb-1">{title}</h3>
          <p className="text-muted-foreground mb-2">{issuer}</p>
          <p className="text-sm text-muted-foreground">{date}</p>
          {description && (
            <p className="text-sm text-muted-foreground mt-3">{description}</p>
          )}
        </div>
      </div>
    </Card>
  );
}
