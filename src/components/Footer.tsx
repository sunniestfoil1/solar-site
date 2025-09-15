import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold text-secondary">Solaris</h3>
              <p className="text-sm opacity-80">Engenharia Solar</p>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              O sol trabalhando para o seu futuro. Economia e sustentabilidade ao seu alcance.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#home" className="hover:text-secondary transition-colors">Home</a></li>
              <li><a href="#solucoes" className="hover:text-secondary transition-colors">Soluções</a></li>
              <li><a href="#sobre" className="hover:text-secondary transition-colors">Sobre Nós</a></li>
              <li><a href="#projetos" className="hover:text-secondary transition-colors">Projetos</a></li>
              <li><a href="#contato" className="hover:text-secondary transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-sm opacity-80">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+554535230217" className="hover:text-secondary transition-colors">
                  (45) 3523-0217
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="https://wa.me/5545998533414" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                  (45) 99853-3414
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:contato@solarisfoz.com.br" className="hover:text-secondary transition-colors">
                  contato@solarisfoz.com.br
                </a>
              </div>
            </div>
          </div>

          {/* Address and Hours */}
          <div>
            <h4 className="font-semibold mb-4">Localização</h4>
            <div className="space-y-3 text-sm opacity-80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Av. Paraná, 1161, Centro</p>
                  <p>Foz do Iguaçu, PR, 85852-000</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Seg-Sex: 08h-18h</p>
                  <p>Sáb: 09h-13h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/solarisfoz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm opacity-80 hover:text-secondary transition-colors"
              >
                📱 Instagram
              </a>
              <a 
                href="https://facebook.com/solarisfoz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm opacity-80 hover:text-secondary transition-colors"
              >
                📘 Facebook
              </a>
            </div>
            <p className="text-sm opacity-60">
              © 2025 Solaris Engenharia Solar. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;