import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-solar-house.jpg";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeInUp, fadeInLeft, staggerContainer } from "@/hooks/useScrollAnimation";
const HeroSection = () => {
  const title = useScrollAnimation();
  const subtitle = useScrollAnimation();
  const buttons = useScrollAnimation();
  const trust = useScrollAnimation();

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
        preload="metadata"
        onLoadStart={() => console.log('Video loading started')}
        onCanPlay={() => console.log('Video can play')}
        onError={(e) => console.error('Video error:', e)}
        style={{
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          transform: 'translateZ(0)'
        }}
      />
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent z-10"></div>

  {/* Content */}
  <div className="relative z-20 container mx-auto px-4 text-center text-gray-900">
        <div className="max-w-4xl mx-auto space-y-8">
          <motion.h1 
            ref={title.ref}
            initial="hidden"
            animate={title.isInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-4xl md:text-6xl lg:text-7xl leading-tight heading-primary"
          >
            Economize até <span className="text-secondary animate-pulse">85%</span> usando o Sol ao seu favor
          </motion.h1>
          
          <motion.h2 
            ref={subtitle.ref}
            initial="hidden"
            animate={subtitle.isInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-xl md:text-2xl lg:text-3xl opacity-90 max-w-3xl mx-auto heading-secondary"
          >
            Projetos sob medida com tecnologia de ponta em <strong>Foz do Iguaçu</strong>. 
            Descubra quanto você pode economizar - simulação gratuita em 2 minutos.
          </motion.h2>

          <motion.div 
            ref={buttons.ref}
            initial="hidden"
            animate={buttons.isInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <Button size="lg" onClick={handleScrollToContact} className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-4 text-lg font-semibold rounded-lg shadow-solar transition-all duration-300 hover:scale-105 ">
              SIMULAR MINHA ECONOMIA AGORA
            </Button>
            
            <Button variant="outline" size="lg" className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4 text-lg rounded-lg transition-all duration-300" asChild>
              <a href="tel:+554535230217">FALAR COM ESPECIALISTA</a>
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div 
            ref={trust.ref}
            initial="hidden"
            animate={trust.isInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="flex flex-wrap justify-center items-center gap-4 pt-12"
          >
            <motion.div 
              variants={fadeInUp}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 flex items-center gap-2"
            >
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span className="text-sm font-medium">+10 Anos de Experiência</span>
            </motion.div>
            <motion.div 
              variants={fadeInUp}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 flex items-center gap-2"
            >
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span className="text-sm font-medium">Garantia de 25 Anos</span>
            </motion.div>
            <motion.div 
              variants={fadeInUp}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 flex items-center gap-2"
            >
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span className="text-sm font-medium">Homologação Inclusa</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        
      </div>

      {/* Hero Human Image */}
      <div className="absolute z-30 pointer-events-none
                      block
                      bottom-[-3rem] right-1 h-[20rem]
                      xs:bottom-[-4rem] xs:right-2 xs:h-[22rem]
                      sm:bottom-[-5rem] sm:right-2 sm:h-[28rem]
                      md:bottom-[-8rem] md:right-4 md:h-[40rem]
                      lg:bottom-[-15rem] lg:left-[1150px] lg:h-[72rem]">
        <img 
          src="/herohuman.png" 
          alt="Consultor de energia solar" 
          className="w-auto object-contain h-full"
        />
      </div>
    </section>;
};
export default HeroSection;