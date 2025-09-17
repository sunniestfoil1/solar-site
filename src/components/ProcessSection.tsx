import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, FileText, Settings, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeInUp, staggerContainer, scaleIn } from "@/hooks/useScrollAnimation";

const processSteps = [
  {
    step: "01",
    icon: Search,
    title: "Análise e Orçamento",
    description: "Nossos especialistas analisam seu consumo e elaboram uma proposta personalizada e gratuita."
  },
  {
    step: "02", 
    icon: FileText,
    title: "Projeto de Engenharia",
    description: "Nossa equipe de engenharia desenvolve o projeto detalhado e cuida de toda a documentação."
  },
  {
    step: "03",
    icon: Settings,
    title: "Instalação e Homologação", 
    description: "Instalamos o sistema com equipe qualificada e agilizamos a aprovação junto à concessionária."
  },
  {
    step: "04",
    icon: Zap,
    title: "Ativação e Economia",
    description: "Seu sistema é ativado e você já começa a economizar, monitorando tudo pelo celular!"
  }
];

const ProcessSection = () => {
  const titleAnimation = useScrollAnimation();
  const stepsAnimation = useScrollAnimation();

  return (
    <section className="py-20 bg-gradient-hero text-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={titleAnimation.ref}
          initial="hidden"
          animate={titleAnimation.isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Gere sua Própria Energia em 4 Passos Simples
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Do primeiro contato até começar a economizar, nosso processo é transparente e eficiente
          </p>
        </motion.div>

        <motion.div 
          ref={stepsAnimation.ref}
          initial="hidden"
          animate={stepsAnimation.isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {processSteps.map((step, index) => (
            <motion.div key={index} variants={scaleIn}>
              <Card className="bg-gray-200/80 backdrop-blur-sm border-gray-300/30 text-gray-900 group hover:bg-gray-300/80 transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="relative mx-auto mb-4">
                    <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-8 h-8 text-secondary-foreground" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-primary rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-700 text-base leading-relaxed">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Connection lines for desktop */}
        <div className="hidden lg:block relative mt-8">
          <div className="absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-white/30">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;