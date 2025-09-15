import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-solar-house.jpg";
const HeroSection = () => {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contato');
    contactSection?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/herovideo.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent z-10"></div>

  {/* Content */}
  <div className="relative z-20 container mx-auto px-4 text-center text-gray-900">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-tight heading-primary">
            Economize até <span className="text-secondary animate-pulse">85%</span> usando o Sol ao seu favor
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl opacity-90 max-w-3xl mx-auto heading-secondary">
            Projetos sob medida com tecnologia de ponta em <strong>Foz do Iguaçu</strong>. 
            Descubra quanto você pode economizar - simulação gratuita em 2 minutos.
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button size="lg" onClick={handleScrollToContact} className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-4 text-lg font-semibold rounded-lg shadow-solar transition-all duration-300 hover:scale-105 ">
              SIMULAR MINHA ECONOMIA AGORA
            </Button>
            
            <Button variant="outline" size="lg" className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4 text-lg rounded-lg transition-all duration-300" asChild>
              <a href="tel:+554535230217">FALAR COM ESPECIALISTA</a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 pt-12 text-sm opacity-80">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span>+10 Anos de Experiência</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span>Garantia de 25 Anos</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span>Homologação Inclusa</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        
      </div>
    </section>;
};
export default HeroSection;