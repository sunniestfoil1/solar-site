import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Calculator, TrendingUp, Clock } from "lucide-react";
const EconomyCalculator = () => {
  const [billValue, setBillValue] = useState([400]);

  // Cálculos baseados em dados reais do mercado de energia solar
  const annualBill = billValue[0] * 12;
  // Estimativa: R$ 0.75/kWh tarifa média, 150 kWh gerados por kWp/ano no PR
  const monthlyConsumption = billValue[0] / 0.75; // kWh consumidos por mês
  const annualConsumption = monthlyConsumption * 12;
  const systemSize = Math.ceil(annualConsumption / 150); // 150 kWh/kWp/ano no Paraná
  const systemCost = systemSize * 3500; // Média R$3.500 por kWp instalado em 2025
  const annualSavings = annualBill * 0.85; // 85% de economia (descontando taxa mínima)
  const paybackYears = Math.round((systemCost / annualSavings) * 10) / 10;
  return <section className="py-20 bg-muted/50 relative overflow-hidden">
      {/* Background beams effect */}
      <div className="absolute inset-0 beams-bg"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-primary">
            Calcule Sua Economia
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto heading-secondary">
            Descubra quanto você pode <strong>economizar</strong> com energia solar
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl heading-secondary flex items-center justify-center gap-3">
                <Calculator className="w-6 h-6 text-primary" />
                Simulador de Economia Solar
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Slider */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-lg font-semibold body-text">
                    Valor da sua conta de luz:
                  </label>
                  <span className="text-2xl font-bold text-primary">
                    R$ {billValue[0]}
                  </span>
                </div>
                <Slider value={billValue} onValueChange={setBillValue} max={4000} min={100} step={50} className="w-full" />
                <div className="flex justify-between text-sm text-muted-foreground body-text">
                  <span>R$ 100</span>
                  <span>R$ 4.000</span>
                </div>
              </div>

              {/* Results Grid */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 rounded-lg bg-white/50 hover:bg-white/80 transition-colors">
                  <div className="w-12 h-12 mx-auto mb-4 bg-secondary rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 heading-secondary">Economia Anual</h3>
                  <p className="text-3xl font-bold text-accent">
                    R$ {annualSavings.toLocaleString('pt-BR')}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1 body-text">
                    85% de redução na conta
                  </p>
                </div>

                <div className="text-center p-6 rounded-lg bg-white/50 hover:bg-white/80 transition-colors">
                  <div className="w-12 h-12 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 heading-secondary">Retorno do Investimento</h3>
                  <p className="text-3xl font-bold text-primary">
                    {paybackYears} anos
                  </p>
                  <p className="text-sm text-muted-foreground mt-1 body-text">
                    Depois é economia pura
                  </p>
                </div>

                <div className="text-center p-6 rounded-lg bg-white/50 hover:bg-white/80 transition-colors">
                  <div className="w-12 h-12 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-accent-foreground font-bold">25</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2 heading-secondary">Economia Total</h3>
                  <p className="text-3xl font-bold text-accent">
                    R$ {(annualSavings * 25).toLocaleString('pt-BR')}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1 body-text">
                    Em 25 anos de garantia
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center pt-4">
                <p className="text-lg mb-4 body-text">
                  Sistema recomendado: <strong>{systemSize} kWp</strong> • 
                  Investimento aproximado: <strong>R$ {systemCost.toLocaleString('pt-BR')}</strong>
                </p>
                <a href="#contato" className="inline-block bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-all duration-300 hover:scale-105">
                  SOLICITAR ORÇAMENTO DETALHADO
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default EconomyCalculator;