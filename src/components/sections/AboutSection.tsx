const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-32 noise-overlay"
      style={{
        background: 'linear-gradient(180deg, hsl(0, 0%, 4%) 0%, hsl(0, 0%, 7%) 50%, hsl(0, 0%, 4%) 100%)'
      }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Title & Description */}
            <div>
              <h2 
                className="section-title mb-12 animate-fade-up"
                style={{ animationFillMode: 'both' }}
              >
                Sobre o Livro
              </h2>
              
              <div 
                className="space-y-6 text-foreground/80 animate-fade-up"
                style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
              >
                <p className="text-lg leading-relaxed">
                  No ano de 2247, uma expedição arqueológica em Marte descobre algo que 
                  desafia toda a compreensão humana: vestígios de uma civilização que 
                  floresceu milhões de anos antes da nossa existência.
                </p>
                <p className="text-lg leading-relaxed">
                  Dr. Helena Vasquez lidera uma equipe de cientistas na superfície 
                  marciana quando encontram as Relíquias — artefatos que não deveriam 
                  existir, escritos em uma linguagem que antecede qualquer forma de 
                  vida conhecida.
                </p>
                <p className="text-lg leading-relaxed">
                  À medida que decifram os segredos enterrados sob a poeira vermelha, 
                  uma revelação emerge: a humanidade não é o que pensava ser. E há 
                  aqueles que matariam para manter essa verdade enterrada.
                </p>
              </div>
            </div>

            {/* Right Column - Quote */}
            <div 
              className="animate-fade-up"
              style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
            >
              <div className="quote-block">
                <p className="text-xl md:text-2xl leading-relaxed mb-6">
                  A maior descoberta da humanidade não foi encontrar vida em Marte. 
                  Foi descobrir que nós já estivemos lá antes.
                </p>
                <footer className="text-gold-muted font-display tracking-wider text-sm uppercase">
                  — Epígrafe do Livro
                </footer>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-8">
                <div className="text-center">
                  <p className="text-3xl font-display text-gold mb-2">2247</p>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">Ano</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-display text-gold mb-2">Marte</p>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">Local</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-display text-gold mb-2">∞</p>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">Mistério</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
