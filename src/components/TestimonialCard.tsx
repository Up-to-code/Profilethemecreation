import { Card } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  avatar?: string;
}

export function TestimonialCard({ name, role, company, testimonial, avatar }: TestimonialCardProps) {
  const initials = name.split(' ').map(n => n[0]).join('');
  
  return (
    <Card className="p-6 h-full flex flex-col hover:border-primary/50 transition-colors">
      <Quote className="w-8 h-8 text-primary/20 mb-4" />
      <p className="text-muted-foreground mb-6 flex-1 leading-relaxed">
        "{testimonial}"
      </p>
      <div className="flex items-center gap-3">
        <Avatar className="w-12 h-12">
          <AvatarImage src={avatar} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div>
          <p>{name}</p>
          <p className="text-sm text-muted-foreground">{role} - {company}</p>
        </div>
      </div>
    </Card>
  );
}
