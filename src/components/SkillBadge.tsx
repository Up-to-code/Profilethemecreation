interface SkillBadgeProps {
  name: string;
}

export function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <div className="px-3 py-1.5 bg-secondary hover:bg-secondary/80 transition-colors rounded-full text-sm text-left">
      <span>{name}</span>
    </div>
  );
}
