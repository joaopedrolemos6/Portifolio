import ProjectCard from "./ProjectCard";
import { useProjects } from "@/hooks/useProjects";

const Projects = () => {
  const { projects, loading } = useProjects();

  if (loading) {
    return (
      <section id="projects" className="py-32 relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center text-muted-foreground">Carregando projetos...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent -z-10" />
      
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-24 space-y-6">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
            Projetos
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Seleção de trabalhos recentes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id || project.title}
              {...project}
              delay={Math.min(index + 1, 6)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
