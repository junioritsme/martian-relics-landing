const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-display text-gold tracking-[0.3em] uppercase text-sm mb-4">
            Filhos de Marte
          </p>
          <p className="text-muted-foreground text-sm mb-6">
            Relíquias da Verdade
          </p>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold-muted/50 to-transparent mx-auto mb-6" />
          <p className="text-muted-foreground/60 text-xs tracking-wider">
            © {new Date().getFullYear()} Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
