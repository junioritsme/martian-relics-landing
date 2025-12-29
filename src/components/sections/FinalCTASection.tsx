import { Button } from '@/components/ui/button';
import ctaImage from '@/assets/mars-ruins.jpg';

const FinalCTASection = () => {
  return (
    <section
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat parallax-bg"
        style={{ backgroundImage: `url(${ctaImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, hsl(0, 0%, 4%) 0%, hsla(0, 0%, 0%, 0.6) 30%, hsla(0, 0%, 0%, 0.6) 70%, hsl(0, 0%, 4%) 100%)'
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p 
          className="font-display text-gold-muted tracking-[0.4em] uppercase text-sm mb-6 animate-fade-up"
          style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
        >
          Prepare-se para a jornada
        </p>
        
        <h2 
          className="font-display text-4xl md:text-5xl lg:text-6xl text-dust tracking-wider mb-8 animate-fade-up"
          style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
        >
          A Verdade Aguarda
        </h2>
        
        <p 
          className="text-xl text-foreground/70 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up"
          style={{ animationDelay: '0.6s', animationFillMode: 'both' }}
        >
          Junte-se aos milhares de leitores que já descobriram os segredos 
          enterrados sob a poeira vermelha de Marte.
        </p>
        
        <div 
          className="animate-fade-up"
          style={{ animationDelay: '0.8s', animationFillMode: 'both' }}
        >
          <Button 
            variant="cta"
            className="animate-pulse-glow"
          >
            Descobrir Filhos de Marte
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
