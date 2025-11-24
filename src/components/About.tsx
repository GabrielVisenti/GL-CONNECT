import { Target, Eye, Award } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-navy-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gold mb-6">
            Sobre a GL CONNECT
          </h2>
          <p className="text-lg text-gold/80 leading-relaxed">
            A GL CONNECT é especializada na venda e fornecimento de equipamentos eletrônicos 
            para empresas, órgãos públicos e prefeituras de todo o Brasil. Nosso compromisso 
            é entregar qualidade, tecnologia e atendimento rápido, sempre com seriedade e 
            transparência.
          </p>
          <div className="mt-8 pt-8 border-t border-gold/20">
            <p className="text-gold font-semibold text-lg mb-2">Proprietários:</p>
            <p className="text-gold/80">Gabriel Visentin Alexandre</p>
            <p className="text-gold/80">Leonardo Ambrósio</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Missão */}
          <div className="bg-card p-8 rounded-xl border border-gold/20 hover:border-gold/40 transition-smooth hover:shadow-gold animate-scale-in">
            <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Target className="h-8 w-8 text-gold" />
            </div>
            <h3 className="text-2xl font-bold text-gold mb-4 text-center">Missão</h3>
            <p className="text-gold/70 text-center leading-relaxed">
              Fornecer soluções tecnológicas de excelência para empresas e setor público, 
              garantindo qualidade, agilidade e confiança em cada atendimento.
            </p>
          </div>

          {/* Visão */}
          <div className="bg-card p-8 rounded-xl border border-gold/20 hover:border-gold/40 transition-smooth hover:shadow-gold animate-scale-in" style={{ animationDelay: "0.1s" }}>
            <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Eye className="h-8 w-8 text-gold" />
            </div>
            <h3 className="text-2xl font-bold text-gold mb-4 text-center">Visão</h3>
            <p className="text-gold/70 text-center leading-relaxed">
              Ser referência nacional no fornecimento de equipamentos eletrônicos para 
              o setor público e privado, reconhecidos pela excelência e inovação.
            </p>
          </div>

          {/* Valores */}
          <div className="bg-card p-8 rounded-xl border border-gold/20 hover:border-gold/40 transition-smooth hover:shadow-gold animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Award className="h-8 w-8 text-gold" />
            </div>
            <h3 className="text-2xl font-bold text-gold mb-4 text-center">Valores</h3>
            <p className="text-gold/70 text-center leading-relaxed">
              Transparência, qualidade, compromisso com prazos, ética profissional e 
              foco total na satisfação do cliente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
