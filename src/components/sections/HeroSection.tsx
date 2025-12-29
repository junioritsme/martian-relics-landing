import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-mars.jpg';

const HeroSection = () => {

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, hsla(0, 0%, 0%, 0.4) 0%, hsla(12, 76%, 15%, 0.5) 50%, hsl(0, 0%, 4%) 100%)'
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <p 
          className="hero-subtitle mb-6 animate-fade-up"
          style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
        >
          Relíquias da Verdade
        </p>
        
        <h1 
          className="hero-title mb-8 animate-fade-up"
          style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
        >
          Filhos de Marte
        </h1>
        
        <p 
          className="font-body text-xl md:text-2xl text-dust/80 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up"
          style={{ animationDelay: '0.6s', animationFillMode: 'both' }}
        >
          Sob a poeira vermelha, dormem segredos mais antigos que a própria humanidade.
          A verdade aguarda aqueles corajosos o suficiente para desenterrá-la.
        </p>
        
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-up"
          style={{ animationDelay: '0.7s', animationFillMode: 'both' }}
        >
          <Button 
            variant="hero" 
            onClick={() => scrollToSection('about')}
          >
            Descobrir a História
          </Button>
          <Button 
            variant="heroSecondary"
            onClick={() => scrollToSection('universe')}
          >
            Ler o Primeiro Capítulo
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float"
      >
        <div className="w-6 h-10 border-2 border-gold-muted/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-gold-muted rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
