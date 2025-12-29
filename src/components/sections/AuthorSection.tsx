const AuthorSection = () => {
  return (
    <section
      id="author"
      className="relative py-32"
      style={{
        background: 'linear-gradient(180deg, hsl(0, 0%, 4%) 0%, hsl(0, 0%, 5%) 100%)'
      }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 
            className="section-title mb-12 animate-fade-up"
            style={{ animationFillMode: 'both' }}
          >
            Sobre o Autor
          </h2>
          
          <div 
            className="animate-fade-up"
            style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
          >
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              Um contador de histórias fascinado pelo cosmos e pelos mistérios que 
              aguardam além do nosso pequeno mundo azul. Filhos de Marte nasceu de 
              uma pergunta simples: e se não fôssemos os primeiros?
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              Combinando uma paixão pela ficção científica clássica com questões 
              filosóficas profundas sobre nossa origem e destino, esta obra representa 
              anos de pesquisa, imaginação e uma obsessão saudável com o planeta vermelho.
            </p>
            <p className="text-muted-foreground italic">
              "A verdade mais difícil de aceitar é aquela que desafia tudo o que 
              acreditávamos saber sobre nós mesmos."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
