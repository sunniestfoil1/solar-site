import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    name: "João P.",
    role: "Cliente Residencial",
    content: "Atendimento nota 10, desde o primeiro contato até o pós-venda. Minha conta de luz veio R$ 45, não acreditei! Recomendo a Solaris de olhos fechados.",
    rating: 5
  },
  {
    name: "Maria S.",
    role: "Comerciante", 
    content: "O investimento no sistema fotovoltaico para minha empresa se pagou em menos de 4 anos. A equipe da Solaris cuidou de tudo, foi muito tranquilo.",
    rating: 5
  },
  {
    name: "Carlos A.",
    role: "Produtor Rural",
    content: "A agilidade na homologação foi o diferencial. Equipe muito profissional e competente. Agora tenho energia de sobra para minha irrigação.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  const titleAnimation = useScrollAnimation();
  const cardsAnimation = useScrollAnimation();
  const trustAnimation = useScrollAnimation();

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={titleAnimation.ref}
          initial="hidden"
          animate={titleAnimation.isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A Satisfação de Quem <strong>Gera a Própria Energia</strong>
          </p>
        </motion.div>

        <motion.div 
          ref={cardsAnimation.ref}
          initial="hidden"
          animate={cardsAnimation.isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => {
            // Alterna entre fadeInLeft e fadeInRight
            const variant = index % 2 === 0 ? fadeInLeft : fadeInRight;
            
            return (
              <motion.div key={index} variants={variant}>
                <Card className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0 relative">
                  {/* Quote icon */}
                  <div className="absolute -top-4 left-6">
                    <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                      <Quote className="w-4 h-4 text-secondary-foreground" />
                    </div>
                  </div>
                  
                  <CardContent className="p-6 pt-8">
                    {/* Stars */}
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-secondary fill-secondary" />
                      ))}
                    </div>
                    
                    {/* Testimonial content */}
                    <p className="text-center text-muted-foreground mb-6 leading-relaxed italic">
                      "{testimonial.content}"
                    </p>
                    
                    {/* Author */}
                    <div className="text-center">
                      <p className="font-semibold text-lg">{testimonial.name}</p>
                      <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Trust indicator */}
        <motion.div 
          ref={trustAnimation.ref}
          initial="hidden"
          animate={trustAnimation.isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 bg-accent/10 px-6 py-3 rounded-full">
            <Star className="w-5 h-5 text-secondary fill-secondary" />
            <span className="font-semibold">Mais de 500 clientes satisfeitos em Foz do Iguaçu e região</span>
            <Star className="w-5 h-5 text-secondary fill-secondary" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;