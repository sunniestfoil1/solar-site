import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Building2, Tractor } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Energia Solar Residencial",
    description: "Valorize seu imóvel e livre-se dos aumentos na conta de luz. Projetos que se pagam em pouco tempo e duram mais de 25 anos."
  },
  {
    icon: Building2,
    title: "Energia Solar Empresarial", 
    description: "Reduza seus custos operacionais, fortaleça sua marca com sustentabilidade e ganhe previsibilidade financeira."
  },
  {
    icon: Tractor,
    title: "Energia Solar no Agronegócio",
    description: "Garanta a energia que sua produção precisa, mesmo em locais remotos. Autonomia e economia para o campo."
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 heading-primary">
            Soluções Completas em Energia Solar
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto heading-secondary">
            Para sua <strong>Residência</strong>, <strong>Empresa</strong> ou <strong>Agronegócio</strong>
          </p>
          <p className="text-lg text-muted-foreground mt-4 max-w-4xl mx-auto body-text">
            Oferecemos um serviço completo, desde o dimensionamento do seu projeto até a homologação e o monitoramento. 
            Veja como podemos te ajudar a gerar sua própria energia:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group spotlight-card hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 group-hover:bg-secondary transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-primary-foreground group-hover:text-secondary-foreground" />
                </div>
                <CardTitle className="text-xl heading-secondary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base leading-relaxed body-text">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;