import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import GoogleMapEmbed from "./GoogleMapEmbed";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    billValue: ""
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappNumber = "5545998533414";
    const message = `Olá! Gostaria de fazer uma simulação gratuita de economia com energia solar para meu imóvel.

*Dados do interessado:*
Nome: ${formData.name}
E-mail: ${formData.email}
Telefone: ${formData.phone}
Tipo de imóvel: ${formData.propertyType}
Valor médio da conta de luz: ${formData.billValue}

Aguardo retorno. Obrigado!`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Solicitação enviada!",
      description: "Você será redirecionado para o WhatsApp para finalizar o contato.",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contato" className="py-20 bg-gradient-hero text-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 heading-primary">
            Pronto para Começar a Economizar?
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto heading-secondary">
            Fale com Nossos <strong>Especialistas</strong>
          </p>
          <p className="text-lg opacity-80 mt-4 max-w-4xl mx-auto body-text">
            Preencha o formulário abaixo ou nos chame no WhatsApp. Nossa equipe entrará em contato 
            para fazer uma simulação gratuita e sem compromisso. Descubra o quanto você pode economizar!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto relative">
          {/* Background Image */}
          <div 
            className="absolute inset-0 opacity-100 bg-cover bg-center bg-no-repeat -z-10 scale-150"
            style={{
              backgroundImage: "url('/componente.png')",
            }}
          ></div>
          
          {/* Contact Form */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-gray-900 relative z-10">
            <CardHeader>
              <CardTitle className="text-2xl heading-secondary">Solicite seu Orçamento Gratuito</CardTitle>
              <CardDescription className="text-gray-700 body-text">
                Preencha os dados abaixo e receba uma simulação personalizada
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="bg-white/10 border-white/20 text-gray-900 placeholder:text-gray-600"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="bg-white/10 border-white/20 text-gray-900 placeholder:text-gray-600"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone/WhatsApp</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="bg-white/10 border-white/20 text-gray-900 placeholder:text-gray-600"
                      placeholder="(45) 99999-9999"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Tipo de Imóvel</Label>
                  <Select value={formData.propertyType} onValueChange={(value) => handleInputChange('propertyType', value)}>
                    <SelectTrigger className="bg-white/10 border-white/20 text-gray-900">
                      <SelectValue placeholder="Selecione o tipo de imóvel" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residencial">Residencial</SelectItem>
                      <SelectItem value="comercial">Comercial</SelectItem>
                      <SelectItem value="rural">Rural/Agronegócio</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Valor Médio da Conta de Luz</Label>
                  <Select value={formData.billValue} onValueChange={(value) => handleInputChange('billValue', value)}>
                    <SelectTrigger className="bg-white/10 border-white/20 text-gray-900">
                      <SelectValue placeholder="Selecione a faixa de valor" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ate-200">Até R$ 200</SelectItem>
                      <SelectItem value="200-400">R$ 200 - R$ 400</SelectItem>
                      <SelectItem value="400-800">R$ 400 - R$ 800</SelectItem>
                      <SelectItem value="800-1500">R$ 800 - R$ 1.500</SelectItem>
                      <SelectItem value="acima-1500">Acima de R$ 1.500</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 py-3 text-lg font-semibold"
                  disabled={!formData.name || !formData.email || !formData.phone}
                >
                  ENVIAR ORÇAMENTO
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 relative z-10">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-gray-900">
              <CardHeader>
                <CardTitle className="text-xl heading-secondary">Outras Formas de Contato</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Telefone</p>
                    <a href="tel:+554535230217" className="text-gray-700 hover:text-secondary transition-colors">
                      (45) 3523-0217
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MessageCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <a 
                      href="https://wa.me/5545998533414" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-secondary transition-colors"
                    >
                      (45) 99853-3414
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">E-mail</p>
                    <a 
                      href="mailto:contato@solarisfoz.com.br" 
                      className="text-gray-700 hover:text-secondary transition-colors"
                    >
                      contato@solarisfoz.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Endereço</p>
                    <p className="text-gray-700">
                      Av. Paraná, 1161, Centro<br />
                      Foz do Iguaçu, PR, 85852-000
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Horário de Funcionamento</p>
                    <p className="text-gray-700">
                      Segunda a Sexta: 08h às 18h<br />
                      Sábado: 09h às 13h
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Google Map */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-xl heading-secondary">Nossa Localização</CardTitle>
              </CardHeader>
              <CardContent>
                <GoogleMapEmbed />
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-xl heading-secondary">Siga-nos nas Redes Sociais</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <a 
                    href="https://instagram.com/solarisfoz" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors"
                  >
                    <span>📱</span>
                    <span>Instagram</span>
                  </a>
                  <a 
                    href="https://facebook.com/solarisfoz" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors"
                  >
                    <span>📘</span>
                    <span>Facebook</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;