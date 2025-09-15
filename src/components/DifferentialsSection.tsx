import { CheckCircle } from "lucide-react";
import { HoverEffect } from "@/components/ui/hover-effect";

const differentials = [
  {
    title: "+10 Anos de Experiência",
    description: "Tradição e conhecimento técnico para garantir o melhor projeto para você."
  },
  {
    title: "Equipe de Engenharia Própria", 
    description: "Engenheiros especializados que acompanham seu projeto do início ao fim, garantindo a máxima qualidade e segurança."
  },
  {
    title: "Atendimento Consultivo",
    description: "Analisamos sua real necessidade para oferecer a solução mais eficiente e com o melhor custo-benefício."
  },
  {
    title: "Garantia de Performance",
    description: "Tranquilidade por décadas. Oferecemos garantia de 25 anos na geração de energia dos painéis."
  },
  {
    title: "Homologação sem Burocracia",
    description: "Cuidamos de todo o processo junto à Copel, com agilidade e transparência."
  },
  {
    title: "Monitoramento Vitalício",
    description: "Acompanhamos a performance do seu sistema para garantir que você esteja sempre economizando o máximo possível."
  }
];

const DifferentialsSection = () => {
  return (
    <section className="py-20 bg-background beams-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 heading-primary">
            Por Que Escolher a Solaris Engenharia?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto heading-secondary">
            Sua <strong>Segurança</strong> e <strong>Economia</strong> em Primeiro Lugar
          </p>
          <p className="text-lg text-muted-foreground mt-4 max-w-4xl mx-auto body-text">
            Nossa missão é entregar a melhor solução em energia solar, com transparência e excelência técnica. 
            Conheça nossos diferenciais:
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <HoverEffect items={differentials} />
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;