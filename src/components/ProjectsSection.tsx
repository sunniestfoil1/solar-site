import { Card, CardContent } from "@/components/ui/card";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    image: project1,
    title: "Residência no Bairro Portal da Foz",
    description: "Sistema de 5,5 kWp - Economia anual de R$ 5.200",
    type: "Residencial"
  },
  {
    image: project2,
    title: "Empresa no Centro de Foz do Iguaçu", 
    description: "Sistema de 25 kWp - Economia anual de R$ 24.000",
    type: "Comercial"
  },
  {
    image: project3,
    title: "Propriedade Rural em Santa Terezinha",
    description: "Sistema de 15 kWp - Economia anual de R$ 14.500",
    type: "Rural"
  }
];

const ProjectsSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossos Projetos em Foz e Região
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja Quem Já Está <strong>Economizando</strong>
          </p>
          <p className="text-lg text-muted-foreground mt-4 max-w-4xl mx-auto">
            Confira algumas de nossas instalações e inspire-se para começar a gerar sua própria energia limpa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {project.type}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground">
            Quer ver seu projeto aqui também? <strong>Entre em contato conosco!</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;