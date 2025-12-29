const features = [
  "Ficção científica adulta e profunda",
  "Mistério arqueológico interplanetário",
  "Conflito entre ciência e fé",
  "Narrativa cinematográfica",
  "Personagens complexos e moralmente ambíguos",
  "Worldbuilding detalhado e imersivo"
];

const WhyReadSection = () => {
  return (
    <section
      id="why-read"
      className="relative py-32 noise-overlay"
      style={{
        background: 'linear-gradient(180deg, hsl(0, 0%, 3%) 0%, hsl(0, 0%, 2%) 100%)'
      }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              className="section-title animate-fade-up"
              style={{ animationFillMode: 'both' }}
            >
              Por Que Ler
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
            <ul className="feature-list space-y-6">
              {features.slice(0, 3).map((feature, index) => (
                <li
                  key={feature}
                  className="text-lg text-foreground/80 animate-fade-up"
                  style={{ animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: 'both' }}
                >
                  {feature}
                </li>
              ))}
            </ul>
            <ul className="feature-list space-y-6">
              {features.slice(3).map((feature, index) => (
                <li
                  key={feature}
                  className="text-lg text-foreground/80 animate-fade-up"
                  style={{ animationDelay: `${0.5 + index * 0.1}s`, animationFillMode: 'both' }}
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div 
            className="mt-20 text-center animate-fade-up"
            style={{ animationDelay: '0.8s', animationFillMode: 'both' }}
          >
            <div className="inline-block p-8 border border-gold-muted/30 bg-card/50">
              <p className="text-gold font-display tracking-wider text-lg uppercase mb-4">
                Para Leitores de
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-muted-foreground">
                <span className="px-4 py-2 border border-border text-sm tracking-wide">Duna</span>
                <span className="px-4 py-2 border border-border text-sm tracking-wide">Fundação</span>
                <span className="px-4 py-2 border border-border text-sm tracking-wide">The Expanse</span>
                <span className="px-4 py-2 border border-border text-sm tracking-wide">Prometheus</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyReadSection;
