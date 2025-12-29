interface UniverseCard {
  title: string;
  subtitle: string;
  description: string;
}

const universeCards: UniverseCard[] = [
  {
    title: "Marte Antigo",
    subtitle: "Antes da Poeira",
    description: "Uma civilização avançada floresceu em Marte quando a Terra ainda era um mundo jovem e primitivo. Seus monumentos desafiam nossa compreensão do tempo."
  },
  {
    title: "A Queda",
    subtitle: "O Cataclismo",
    description: "Algo destruiu tudo. Uma catástrofe tão absoluta que transformou um mundo verde em um deserto vermelho. Os sobreviventes fugiram para as estrelas."
  },
  {
    title: "As Relíquias",
    subtitle: "Artefatos Proibidos",
    description: "Objetos de poder imenso, enterrados há milênios. Cada Relíquia contém fragmentos de uma verdade que instituições poderosas prefeririam manter oculta."
  },
  {
    title: "A Verdade Oculta",
    subtitle: "O Segredo Final",
    description: "Por que a humanidade foi desencorajada de explorar Marte por tanto tempo? Que pactos foram feitos? E por quem?"
  }
];

const UniverseSection = () => {
  return (
    <section
      id="universe"
      className="relative py-32"
      style={{
        background: 'linear-gradient(180deg, hsl(0, 0%, 4%) 0%, hsl(0, 0%, 6%) 100%)'
      }}
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-muted/30 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 
              className="section-title animate-fade-up"
              style={{ animationFillMode: 'both' }}
            >
              O Universo
            </h2>
            <p 
              className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up"
              style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
            >
              Explore os pilares que sustentam a narrativa de Filhos de Marte
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {universeCards.map((card, index) => (
              <div
                key={card.title}
                className="universe-card animate-fade-up"
                style={{ animationDelay: `${0.2 + index * 0.15}s`, animationFillMode: 'both' }}
              >
                <p className="text-gold-muted text-sm uppercase tracking-[0.3em] mb-3 font-display">
                  {card.subtitle}
                </p>
                <h3 className="text-2xl font-display text-gold tracking-wide mb-4">
                  {card.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-muted/30 to-transparent" />
    </section>
  );
};

export default UniverseSection;
