import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import ProcessSection from "@/components/ProcessSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import EconomyCalculator from "@/components/EconomyCalculator";
import DiagonalSplit from "@/components/DiagonalSplit";
import CurvedWave from "@/components/CurvedWave";
import { Header1 } from "@/components/ui/header";

const Index = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header1 />
      <div id="home">
        <HeroSection />
      </div>
      <EconomyCalculator />
      
      {/* Seção Solar Info - Inline sem container limitador */}
      <section className="w-full bg-gradient-to-b from-gray-50 to-white relative">
        <div className="w-full">
          <div 
            className="relative w-full h-[700px] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/solarpanel.png)' }}
          >
            {/* Status indicator */}
            <div className="absolute top-4 right-4 flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-full z-10">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span className="text-sm font-medium">Sistema Ativo</span>
            </div>

            {/* Informações do sistema sobrepostas */}
            <div className="absolute bottom-8 left-0 right-0 z-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">2,7 kWp</div>
                      <p className="text-gray-600">Potência Instalada</p>
                    </div>
                  </div>
                  
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">R$ 350</div>
                      <p className="text-gray-600">Economia Mensal</p>
                    </div>
                  </div>
                  
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-secondary mb-2">6 Anos</div>
                      <p className="text-gray-600">Retorno do Investimento</p>
                    </div>
                  </div>

                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-600 mb-2">85%</div>
                      <p className="text-gray-600">Redução na Conta</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="servicos">
        <ServicesSection />
      </div>
      <DiagonalSplit fillColor="hsl(0, 0%, 100%)" className="w-full h-16 -mb-1" />
      <div id="diferenciais">
        <DifferentialsSection />
      </div>
      <div id="processo">
        <ProcessSection />
      </div>
      <div id="projetos">
        <ProjectsSection />
      </div>
      <div id="depoimentos">
        <TestimonialsSection />
      </div>
      <CurvedWave fillColor="hsl(211, 100%, 20%)" className="w-full h-20 -mb-1" />
      <div id="contato">
        <ContactSection />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
