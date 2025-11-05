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
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="block group hover:bg-secondary/30 transition-colors rounded-xl border p-4"
    >
      <div className="flex gap-4">
        {/* Content - Left Side */}
        <div className="flex-1 text-left min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="flex-1">{title}</h3>
            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors mt-1" />
          </div>
          <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
            {description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span 
                key={tag}
                className="px-2 py-0.5 bg-secondary text-secondary-foreground rounded text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Image - Right Side */}
        <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-muted">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </a>
  );
}
