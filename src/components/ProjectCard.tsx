import { Card } from "./ui/card";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

export function ProjectCard({ title, description, image, link, tags }: ProjectCardProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block group">
      <Card className="overflow-hidden h-full transition-all hover:scale-[1.02]">
        <div className="aspect-video overflow-hidden bg-muted">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform group-hover:scale-110"
          />
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between gap-2 mb-3">
            <h3 className="flex-1">{title}</h3>
            <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
          </div>
          <p className="text-muted-foreground mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span 
                key={tag}
                className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </a>
  );
}
