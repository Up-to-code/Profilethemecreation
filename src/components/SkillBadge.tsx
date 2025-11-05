import { Badge } from "./ui/badge";
import { LucideIcon } from "lucide-react";

interface SkillBadgeProps {
  name: string;
  icon: LucideIcon;
  level?: string;
}

export function SkillBadge({ name, icon: Icon, level }: SkillBadgeProps) {
  return (
    <div className="flex items-center gap-2 px-4 py-3 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors">
      <Icon className="w-5 h-5 text-primary" />
      <div className="flex-1">
        <span className="block">{name}</span>
        {level && (
          <span className="text-sm text-muted-foreground">{level}</span>
        )}
      </div>
    </div>
  );
}
