import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
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
    <div className="p-6 h-full flex flex-col rounded-xl border hover:bg-secondary/30 transition-colors text-left">
      <Quote className="w-6 h-6 text-primary/30 mb-4" />
      <p className="text-muted-foreground mb-6 flex-1 text-sm leading-relaxed">
        "{testimonial}"
      </p>
      <div className="flex items-center gap-3">
        <Avatar className="w-10 h-10">
          <AvatarImage src={avatar} />
          <AvatarFallback className="text-xs">{initials}</AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <p className="text-sm truncate">{name}</p>
          <p className="text-xs text-muted-foreground truncate">{role} · {company}</p>
        </div>
      </div>
    </div>
  );
}
