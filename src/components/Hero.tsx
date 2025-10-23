

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-6 lg:px-12 py-32">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Desenvolvedor
              <br />
              <span className="text-primary">Full Stack</span>
            </h1>
            
            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
              Transformando ideias em experiências digitais excepcionais
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToProjects}
              className="px-8 py-3 rounded-xl font-medium text-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-colors w-full sm:w-auto min-w-[180px]"
            >
              Ver Projetos
            </button>
            <a
              href="#contact"
              className="px-8 py-3 rounded-xl font-medium text-sm border border-border hover:border-primary hover:text-primary transition-colors w-full sm:w-auto min-w-[180px] text-center"
            >
              Contato
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
