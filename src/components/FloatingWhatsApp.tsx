import { MessageCircle } from "lucide-react";
import { useState } from "react";

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5544988480543", "_blank");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-scale-in">
      <button
        onClick={handleWhatsAppClick}
        className="bg-gradient-gold text-navy p-4 rounded-full shadow-gold-lg hover:scale-110 transition-smooth flex items-center gap-3 group"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="hidden group-hover:inline-block font-semibold pr-2 animate-slide-in-left">
          Fale Conosco
        </span>
      </button>
    </div>
  );
};

export default FloatingWhatsApp;
