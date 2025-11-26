import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    // If we're not on the home page, navigate to home first
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // If we're already on the home page, just scroll
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5544988480543", "_blank");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-gold/20">
      {/* Top Bar */}
      <div className="bg-gold text-navy py-2 text-center text-sm font-semibold">
        <p>Cotações rápidas para Empresas e Prefeituras – Clique aqui</p>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="GL CONNECT" className="h-12 md:h-16" />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gold hover:text-gold-light transition-smooth font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-gold hover:text-gold-light transition-smooth font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("produtos")}
              className="text-gold hover:text-gold-light transition-smooth font-medium"
            >
              Produtos
            </button>
            <button
              onClick={() => scrollToSection("prefeituras")}
              className="text-gold hover:text-gold-light transition-smooth font-medium"
            >
              Soluções para Prefeituras
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-gold hover:text-gold-light transition-smooth font-medium"
            >
              Contato
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="lg" onClick={handleWhatsAppClick}>
              <MessageCircle className="mr-2 h-5 w-5" />
              Fazer Cotação WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gold"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 space-y-4 border-t border-gold/20">
            <button
              onClick={() => scrollToSection("home")}
              className="block text-gold hover:text-gold-light transition-smooth font-medium w-full text-left py-2"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="block text-gold hover:text-gold-light transition-smooth font-medium w-full text-left py-2"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("produtos")}
              className="block text-gold hover:text-gold-light transition-smooth font-medium w-full text-left py-2"
            >
              Produtos
            </button>
            <button
              onClick={() => scrollToSection("prefeituras")}
              className="block text-gold hover:text-gold-light transition-smooth font-medium w-full text-left py-2"
            >
              Soluções para Prefeituras
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="block text-gold hover:text-gold-light transition-smooth font-medium w-full text-left py-2"
            >
              Contato
            </button>
            <Button variant="hero" size="lg" onClick={handleWhatsAppClick} className="w-full">
              <MessageCircle className="mr-2 h-5 w-5" />
              Fazer Cotação WhatsApp
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
