import { Button } from "@/components/ui/button";
import { 
  Laptop, 
  Monitor, 
  Keyboard, 
  Mouse, 
  Headphones, 
  Tv, 
  Speaker,
  Projector,
  Network,
  Wifi,
  Printer,
  HardDrive
} from "lucide-react";

const products = [
  { name: "Notebooks", icon: Laptop, description: "Alta performance para trabalho" },
  { name: "Monitores", icon: Monitor, description: "Telas profissionais de qualidade" },
  { name: "Teclados", icon: Keyboard, description: "Conforto e produtividade" },
  { name: "Mouse", icon: Mouse, description: "Precisão e ergonomia" },
  { name: "Headsets/Fones", icon: Headphones, description: "Áudio premium" },
  { name: "TVs", icon: Tv, description: "Displays de alta resolução" },
  { name: "Caixas de Som", icon: Speaker, description: "Som profissional" },
  { name: "Projetores", icon: Projector, description: "Apresentações impactantes" },
  { name: "Switches de Rede", icon: Network, description: "Infraestrutura conectada" },
  { name: "Roteadores", icon: Wifi, description: "Internet estável e rápida" },
  { name: "Impressoras", icon: Printer, description: "Soluções de impressão" },
  { name: "Armazenamento", icon: HardDrive, description: "HDs e SSDs" },
];

const Products = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5544988480543", "_blank");
  };

  return (
    <section id="produtos" className="py-20 bg-navy">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gold mb-6">
            Nosso Catálogo de Produtos
          </h2>
          <p className="text-lg text-gold/80 max-w-3xl mx-auto">
            Equipamentos de alta qualidade para atender todas as necessidades 
            tecnológicas da sua empresa ou prefeitura.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <div 
              key={product.name}
              className="bg-card rounded-xl p-6 border border-gold/20 hover:border-gold/40 transition-smooth hover:shadow-gold group animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-smooth">
                <product.icon className="h-8 w-8 text-gold" />
              </div>
              
              <h3 className="text-xl font-bold text-gold mb-2">{product.name}</h3>
              <p className="text-gold/70 text-sm mb-4">{product.description}</p>
              
              <Button 
                variant="quote" 
                className="w-full"
                onClick={handleWhatsAppClick}
              >
                Clique aqui e faça sua cotação
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gold/70 mb-4">E muito mais! Entre em contato para conhecer nosso catálogo completo.</p>
          <Button variant="hero" size="lg" onClick={handleWhatsAppClick}>
            Ver Catálogo Completo no WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
