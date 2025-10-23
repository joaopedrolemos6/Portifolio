import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  github?: string;
  demo?: string;
  delay?: number;
}

const ProjectCard = ({ title, description, tags, image, github, demo, delay = 0 }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group glass rounded-3xl overflow-hidden hover-lift fade-in stagger-${delay}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-72 overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent transition-opacity duration-500 ${
          isHovered ? "opacity-100" : "opacity-60"
        }`} />
      </div>

      <div className="p-8 space-y-5">
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
          <p className="text-muted-foreground leading-relaxed text-sm">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 text-xs font-medium rounded-full bg-muted text-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3 pt-3">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-muted hover:bg-muted/80 transition-all duration-300 hover:scale-105 active:scale-95 text-sm font-medium"
            >
              <Github className="w-4 h-4" />
              Código
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 text-sm font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
