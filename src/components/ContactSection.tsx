import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import GoogleMapEmbed from "./GoogleMapEmbed";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeInUp, fadeInLeft, fadeInRight } from "@/hooks/useScrollAnimation";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    propertyType: "",
    billValue: "",
    hasSpace: "",
    bestTime: ""
  });

  const { toast } = useToast();
  
  // Animations
  const titleAnimation = useScrollAnimation();
  const formAnimation = useScrollAnimation();
  const contactInfoAnimation = useScrollAnimation();
  const mapAnimation = useScrollAnimation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappNumber = "5545998533414";
    const message = `Olá! Gostaria de fazer uma simulação gratuita de economia com energia solar para meu imóvel.

*Dados do interessado:*
Nome: ${formData.name}
E-mail: ${formData.email}
Telefone: ${formData.phone}
Cidade/Estado: ${formData.city}
Tipo de imóvel: ${formData.propertyType}
Valor médio da conta de luz: ${formData.billValue}
Tem espaço no telhado/terreno: ${formData.hasSpace}
Melhor horário para contato: ${formData.bestTime}

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
    <section id="contato" className="py-20 bg-gradient-hero" role="region" aria-label="Seção de contato">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={titleAnimation.ref}
          initial="hidden"
          animate={titleAnimation.isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-4 heading-primary text-gray-900">
            Pronto para Começar a Economizar?
          </h2>
          <p className="text-xl max-w-3xl mx-auto heading-secondary text-gray-800">
            Fale com Nossos <strong>Especialistas</strong>
          </p>
          <p className="text-lg mt-4 max-w-4xl mx-auto body-text text-gray-700">
            Preencha o formulário abaixo ou nos chame no WhatsApp. Nossa equipe entrará em contato 
            para fazer uma simulação gratuita e sem compromisso. Descubra o quanto você pode economizar!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto relative">
          {/* Contact Form */}
          <motion.div
            ref={formAnimation.ref}
            initial="hidden"
            animate={formAnimation.isInView ? "visible" : "hidden"}
            variants={fadeInLeft}
          >
            <Card className="bg-white border-gray-200 relative z-10">
            <CardHeader>
              <CardTitle className="text-2xl heading-secondary text-gray-900">
                Solicite seu Orçamento Gratuito
              </CardTitle>
              <CardDescription className="text-gray-600 body-text">
                Preencha os dados abaixo e receba uma simulação personalizada
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-900 font-medium">
                    Nome Completo <span className="text-red-600" aria-label="campo obrigatório">*</span>
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    placeholder="Seu nome completo"
                    aria-describedby="name-required"
                  />
                  <span id="name-required" className="sr-only">Campo obrigatório</span>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-900 font-medium">
                      E-mail <span className="text-red-600" aria-label="campo obrigatório">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      placeholder="seu@email.com"
                      aria-describedby="email-required"
                    />
                    <span id="email-required" className="sr-only">Campo obrigatório</span>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-900 font-medium">
                      Telefone/WhatsApp <span className="text-red-600" aria-label="campo obrigatório">*</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      placeholder="(45) 99999-9999"
                      aria-describedby="phone-required"
                    />
                    <span id="phone-required" className="sr-only">Campo obrigatório</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="city" className="text-gray-900 font-medium">
                    Cidade/Estado <span className="text-red-600" aria-label="campo obrigatório">*</span>
                  </Label>
                  <Input
                    id="city"
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    placeholder="Informe sua cidade ou CEP"
                    aria-describedby="city-required"
                  />
                  <span id="city-required" className="sr-only">Campo obrigatório</span>
                </div>

                <div className="space-y-2">
                  <Label className="text-gray-900 font-medium">
                    Tipo de Imóvel <span className="text-red-600" aria-label="campo obrigatório">*</span>
                  </Label>
                  <Select value={formData.propertyType} onValueChange={(value) => handleInputChange('propertyType', value)}>
                    <SelectTrigger className="bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200" aria-label="Selecione o tipo de imóvel">
                      <SelectValue placeholder="Tipo de imóvel" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="casa">Casa</SelectItem>
                      <SelectItem value="apartamento">Apartamento</SelectItem>
                      <SelectItem value="comercio">Comércio</SelectItem>
                      <SelectItem value="fazenda">Fazenda</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-gray-900 font-medium">
                    Valor Médio da Conta de Luz <span className="text-red-600" aria-label="campo obrigatório">*</span>
                  </Label>
                  <Select value={formData.billValue} onValueChange={(value) => handleInputChange('billValue', value)}>
                    <SelectTrigger className="bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200" aria-label="Selecione a faixa de valor da conta de luz">
                      <SelectValue placeholder="Valor da conta" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ate-200">Até R$ 200</SelectItem>
                      <SelectItem value="200-400">R$ 200 - R$ 400</SelectItem>
                      <SelectItem value="400-600">R$ 400 - R$ 600</SelectItem>
                      <SelectItem value="acima-600">Acima de R$ 600</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-gray-900 font-medium">
                    Tem espaço no telhado ou terreno para instalação?
                  </Label>
                  <Select value={formData.hasSpace} onValueChange={(value) => handleInputChange('hasSpace', value)}>
                    <SelectTrigger className="bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200" aria-label="Selecione se tem espaço para instalação">
                      <SelectValue placeholder="Tem espaço para instalação?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sim">Sim</SelectItem>
                      <SelectItem value="nao-sei">Não sei informar</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-gray-900 font-medium">
                    Melhor horário para contato
                  </Label>
                  <Select value={formData.bestTime} onValueChange={(value) => handleInputChange('bestTime', value)}>
                    <SelectTrigger className="bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200" aria-label="Selecione o melhor horário para contato">
                      <SelectValue placeholder="Melhor horário de sua disponibilidade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="manha">Manhã</SelectItem>
                      <SelectItem value="tarde">Tarde</SelectItem>
                      <SelectItem value="noite">Noite</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 py-3 text-lg font-semibold transition-colors"
                  disabled={!formData.name || !formData.email || !formData.phone || !formData.city || !formData.propertyType || !formData.billValue}
                  aria-describedby="submit-button-help"
                >
                  ENVIAR ORÇAMENTO
                </Button>
                <span id="submit-button-help" className="sr-only">
                  {(!formData.name || !formData.email || !formData.phone || !formData.city || !formData.propertyType || !formData.billValue) 
                    ? "Preencha todos os campos obrigatórios para enviar" 
                    : "Clique para enviar sua solicitação de orçamento"}
                </span>

                {/* Social Media dentro do formulário */}
                <div className="pt-6 border-t border-gray-200">
                  <p className="text-sm font-medium text-gray-900 mb-3">Nossas Redes Sociais</p>
                  <div className="social-card">
                    <button 
                      onClick={() => window.open('https://instagram.com/solarisfoz', '_blank')}
                      className="Btn instagram"
                    >
                      <span className="svgContainer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="1.6em"
                          fill="white"
                          viewBox="0 0 448 512"
                        >
                          <path
                            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                          ></path>
                        </svg>
                      </span>
                      <span className="BG"></span>
                    </button>

                    <button 
                      onClick={() => window.open('https://facebook.com/solarisfoz', '_blank')}
                      className="Btn facebook"
                    >
                      <span className="svgContainer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="1.6em"
                          fill="white"
                          viewBox="0 0 512 512"
                        >
                          <path
                            d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.8 90.69 226.4 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.4 504 379.8 504 256z"
                          ></path>
                        </svg>
                      </span>
                      <span className="BG"></span>
                    </button>
                  </div>
                </div>

                <style dangerouslySetInnerHTML={{
                  __html: `
                  .social-card {
                    height: fit-content;
                    width: fit-content;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 20px;
                    background: rgb(255, 255, 255);
                    padding: 20px 25px;
                    border-radius: 14px;
                  }
                  .Btn {
                    width: 45px;
                    height: 45px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: none;
                    background-color: transparent;
                    position: relative;
                    border-radius: 7px;
                    cursor: pointer;
                    transition: all 0.3s;
                  }

                  .svgContainer {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: transparent;
                    backdrop-filter: blur(0px);
                    letter-spacing: 0.8px;
                    border-radius: 10px;
                    transition: all 0.3s;
                    border: 1px solid rgba(156, 156, 156, 0.466);
                    z-index: 2;
                  }

                  .BG {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    background: #181818;
                    z-index: 1;
                    border-radius: 10px;
                    pointer-events: none;
                    transition: all 0.3s;
                    font-size: 0px;
                  }
                  .instagram .BG {
                    background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
                  }
                  .facebook .BG {
                    background: #1877f2;
                  }
                  .Btn:hover .BG {
                    transform: scale(1.5);
                    font-size: 20px;
                    color: white;
                  }

                  .Btn:hover .svgContainer {
                    border: 1px solid rgba(216, 216, 216, 0.466);
                    background-color: rgba(209, 209, 209, 0.466);
                    backdrop-filter: blur(4px);
                  }
                  `
                }} />
              </div>
            </CardContent>
          </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            ref={contactInfoAnimation.ref}
            initial="hidden"
            animate={contactInfoAnimation.isInView ? "visible" : "hidden"}
            variants={fadeInRight}
            className="space-y-8 relative z-10"
          >
            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl heading-secondary text-gray-900">
                  Outras Formas de Contato
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-gray-900">Telefone</p>
                    <a 
                      href="tel:+554535230217" 
                      className="text-blue-600 hover:text-blue-800 focus:underline focus:outline-none transition-colors"
                      aria-label="Ligar para (45) 3523-0217"
                    >
                      (45) 3523-0217
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MessageCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-gray-900">WhatsApp</p>
                    <a 
                      href="https://wa.me/5545998533414" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-800 focus:underline focus:outline-none transition-colors"
                      aria-label="Enviar mensagem no WhatsApp para (45) 99853-3414, abre em nova aba"
                    >
                      (45) 99853-3414
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-gray-900">E-mail</p>
                    <a 
                      href="mailto:contato@solarisfoz.com.br" 
                      className="text-blue-600 hover:text-blue-800 focus:underline focus:outline-none transition-colors"
                      aria-label="Enviar e-mail para contato@solarisfoz.com.br"
                    >
                      contato@solarisfoz.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-gray-900">Endereço</p>
                    <address className="text-gray-700 not-italic">
                      Av. Paraná, 1161, Centro<br />
                      Foz do Iguaçu, PR, 85852-000
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-gray-600 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-gray-900">Horário de Funcionamento</p>
                    <div className="text-gray-700">
                      <p>Segunda a Sexta: 08h às 18h</p>
                      <p>Sábado: 09h às 13h</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Google Map */}
            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl heading-secondary text-gray-900">
                  Nossa Localização
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div role="img" aria-label="Mapa da localização da Solaris Engenharia">
                  <GoogleMapEmbed />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;