const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Sobre Mim
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-base md:text-lg">
              Sou um desenvolvedor full stack apaixonado por criar soluções digitais que fazem a diferença. 
              Com experiência em desenvolvimento web moderno, trabalho com as mais recentes tecnologias para 
              transformar ideias em realidade.
            </p>

            <p className="text-base md:text-lg">
              Meu foco está em construir aplicações escaláveis, performáticas e com excelente experiência 
              do usuário. Acredito que o código limpo e a atenção aos detalhes são fundamentais para 
              entregar projetos de alta qualidade.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              <div className="text-center space-y-2">
                <div className="text-2xl md:text-3xl font-bold text-primary">5+</div>
                <div className="text-sm">Anos de Experiência</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl md:text-3xl font-bold text-primary">50+</div>
                <div className="text-sm">Projetos Concluídos</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl md:text-3xl font-bold text-primary">30+</div>
                <div className="text-sm">Clientes Satisfeitos</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl md:text-3xl font-bold text-primary">100%</div>
                <div className="text-sm">Dedicação</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
