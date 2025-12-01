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
  HardDrive,
  LucideIcon
} from "lucide-react";

export interface Product {
  id: string;
  name: string;
  shortName: string;
  category: string;
  categoryIcon: LucideIcon;
  description: string;
  features: string[];
  specifications: Record<string, string>;
  image: string;
  gallery: string[];
}

export const productCategories = [
  { id: "tv", name: "TVs", icon: Tv },
  { id: "notebook", name: "Notebooks", icon: Laptop },
  { id: "monitor", name: "Monitores", icon: Monitor },
  { id: "teclado", name: "Teclados", icon: Keyboard },
  { id: "mouse", name: "Mouse", icon: Mouse },
  { id: "headset", name: "Headsets/Fones", icon: Headphones },
  { id: "caixa-som", name: "Caixas de Som", icon: Speaker },
  { id: "projetor", name: "Projetores", icon: Projector },
  { id: "roteador", name: "Roteadores", icon: Wifi },
  { id: "switch", name: "Switches de Rede", icon: Network },
  { id: "impressora", name: "Impressoras", icon: Printer },
];

export const products: Product[] = [
  // ==================== TVs ====================
  {
    id: "tv-samsung-50-crystal-u8100f",
    name: "Samsung Smart TV 50\" Crystal UHD 4K U8100F 2025",
    shortName: "Samsung 50\" Crystal UHD",
    category: "tv",
    categoryIcon: Tv,
    description: "A Samsung Smart TV Crystal UHD 4K oferece qualidade de imagem excepcional com resolução 4K e tecnologia Crystal Processor. Ideal para ambientes corporativos, salas de reunião e apresentações profissionais. Com sistema Tizen integrado, conectividade completa e design elegante.",
    features: [
      "Resolução 4K UHD (3840x2160) para imagens ultra nítidas",
      "Crystal Processor 4K com upscaling inteligente",
      "Smart TV com Tizen OS e múltiplos apps",
      "Controle remoto inteligente incluído",
      "HDR para cores vibrantes e realistas",
      "Múltiplas entradas HDMI e USB"
    ],
    specifications: {
      "Marca": "Samsung",
      "Modelo": "UN50CU8000",
      "Tamanho da Tela": "50 polegadas",
      "Resolução": "4K UHD (3840x2160)",
      "Tecnologia": "Crystal UHD",
      "Sistema Operacional": "Tizen",
      "HDR": "Sim (HDR10+)",
      "Taxa de Atualização": "60Hz",
      "Conectividade": "Wi-Fi, Bluetooth, 3x HDMI, 2x USB",
      "Áudio": "20W (2 canais)",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "tv-lg-50-4k-ai",
    name: "LG Smart TV 50\" UHD 4K com AI ThinQ",
    shortName: "LG 50\" UHD 4K AI",
    category: "tv",
    categoryIcon: Tv,
    description: "Smart TV LG com inteligência artificial ThinQ AI, processador α5 Gen 6 e upscaling 4K. Perfeita para ambientes corporativos que exigem qualidade de imagem superior e recursos inteligentes de conectividade.",
    features: [
      "Processador α5 Gen 6 AI com upscaling 4K",
      "ThinQ AI integrado com comandos de voz",
      "WebOS intuitivo e fácil de usar",
      "Filmmaker Mode para cores autênticas",
      "Compatível com Alexa e Google Assistant",
      "Design fino e elegante"
    ],
    specifications: {
      "Marca": "LG",
      "Modelo": "50UP7550PSF",
      "Tamanho da Tela": "50 polegadas",
      "Resolução": "4K UHD (3840x2160)",
      "Processador": "α5 Gen 6 AI 4K",
      "Sistema Operacional": "webOS",
      "HDR": "HDR10 Pro",
      "Taxa de Atualização": "60Hz",
      "Conectividade": "Wi-Fi, Bluetooth, 3x HDMI, 2x USB",
      "Áudio": "20W (2 canais)",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "tv-lg-60-uhd-4k",
    name: "LG Smart TV 60\" UHD AI 4K 60UA8550PSA 2025",
    shortName: "LG 60\" UHD 4K",
    category: "tv",
    categoryIcon: Tv,
    description: "Smart TV LG de 60 polegadas com tecnologia UHD 4K e inteligência artificial. Ideal para salas de conferência, auditórios e grandes ambientes corporativos que necessitam de tela ampla com qualidade premium.",
    features: [
      "Tela grande de 60 polegadas para máximo impacto",
      "Processador AI 4K para otimização de imagem",
      "ThinQ AI com controle por voz",
      "Múltiplos modos de imagem para diferentes usos",
      "Conectividade completa Wi-Fi e Bluetooth",
      "Design premium e robusto"
    ],
    specifications: {
      "Marca": "LG",
      "Modelo": "60UA8550PSA",
      "Tamanho da Tela": "60 polegadas",
      "Resolução": "4K UHD (3840x2160)",
      "Processador": "AI 4K",
      "Sistema Operacional": "webOS 2025",
      "HDR": "HDR10",
      "Taxa de Atualização": "60Hz",
      "Conectividade": "Wi-Fi 5, Bluetooth 5.0, 4x HDMI, 2x USB",
      "Áudio": "20W Dolby Audio",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "tv-samsung-65-crystal-u8100f",
    name: "Samsung Smart TV 65\" Crystal UHD 4K U8100F 2025",
    shortName: "Samsung 65\" Crystal UHD",
    category: "tv",
    categoryIcon: Tv,
    description: "Samsung Crystal UHD 4K de 65 polegadas, perfeita para grandes salas de reunião e auditórios corporativos. Com tecnologia Crystal Display e processador 4K, oferece imagens nítidas e cores vibrantes.",
    features: [
      "Tela de 65 polegadas para grandes ambientes",
      "Crystal Processor 4K com upscaling",
      "Smart Hub com interface intuitiva",
      "Modo Ambiente para quando não estiver em uso",
      "Controle remoto único universal",
      "Bluetooth Audio para conectar dispositivos"
    ],
    specifications: {
      "Marca": "Samsung",
      "Modelo": "UN65CU8000",
      "Tamanho da Tela": "65 polegadas",
      "Resolução": "4K UHD (3840x2160)",
      "Tecnologia": "Crystal UHD",
      "Sistema Operacional": "Tizen 2025",
      "HDR": "HDR10+",
      "Taxa de Atualização": "60Hz",
      "Conectividade": "Wi-Fi 5, Bluetooth 5.2, 3x HDMI 2.0, 2x USB",
      "Áudio": "20W (2.0 canais)",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "tv-hisense-75-miniled-vision",
    name: "Hisense Smart TV 75\" Mini LED 4K ULED Vision",
    shortName: "Hisense 75\" Mini LED",
    category: "tv",
    categoryIcon: Tv,
    description: "Smart TV Hisense com tecnologia Mini LED e ULED Vision, oferecendo contraste excepcional e brilho superior. Ideal para salas executivas e ambientes que exigem máxima qualidade de imagem em tela grande.",
    features: [
      "Tecnologia Mini LED com contraste superior",
      "ULED Vision para cores precisas",
      "75 polegadas de tela imersiva",
      "Dolby Vision e Dolby Atmos",
      "Game Mode Pro para apresentações dinâmicas",
      "Controle por voz integrado"
    ],
    specifications: {
      "Marca": "Hisense",
      "Modelo": "75U8K",
      "Tamanho da Tela": "75 polegadas",
      "Resolução": "4K UHD (3840x2160)",
      "Tecnologia": "Mini LED ULED",
      "Sistema Operacional": "VIDAA U7",
      "HDR": "Dolby Vision IQ, HDR10+",
      "Taxa de Atualização": "120Hz",
      "Conectividade": "Wi-Fi 6, Bluetooth 5.0, 4x HDMI 2.1, 2x USB",
      "Áudio": "40W Dolby Atmos",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },

  // ==================== NOTEBOOKS ====================
  {
    id: "notebook-dell-inspiron-15-3530",
    name: "Notebook Dell Inspiron 15 3530 Intel Core i5 8GB 512GB SSD",
    shortName: "Dell Inspiron 15 i5",
    category: "notebook",
    categoryIcon: Laptop,
    description: "Notebook Dell Inspiron 15 ideal para uso corporativo, com processador Intel Core i5 de 13ª geração, 8GB RAM e SSD de 512GB. Perfeito para trabalho office, navegação e multitarefas do dia a dia empresarial.",
    features: [
      "Processador Intel Core i5-1335U 13ª Geração",
      "8GB RAM DDR4 expansível até 16GB",
      "SSD 512GB PCIe NVMe para inicialização rápida",
      "Tela 15.6\" FHD antirreflexo",
      "Teclado numérico integrado",
      "Webcam HD com microfone integrado"
    ],
    specifications: {
      "Marca": "Dell",
      "Modelo": "Inspiron 15 3530",
      "Processador": "Intel Core i5-1335U (até 4.6GHz)",
      "Memória RAM": "8GB DDR4 2666MHz",
      "Armazenamento": "SSD 512GB PCIe NVMe M.2",
      "Tela": "15.6\" FHD (1920x1080) antirreflexo",
      "Placa de Vídeo": "Intel UHD Graphics",
      "Sistema Operacional": "Windows 11 Home",
      "Conectividade": "Wi-Fi 5, Bluetooth 5.0, USB-C, HDMI",
      "Bateria": "Até 6 horas",
      "Peso": "1.65kg",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "notebook-asus-vivobook-15-i5",
    name: "Notebook ASUS Vivobook 15 X1504VA Intel Core i5 8GB 512GB SSD",
    shortName: "ASUS Vivobook 15 i5",
    category: "notebook",
    categoryIcon: Laptop,
    description: "ASUS Vivobook com design moderno e desempenho confiável. Equipado com processador Intel Core i5, 8GB RAM e SSD de 512GB, ideal para profissionais que precisam de mobilidade e eficiência.",
    features: [
      "Intel Core i5 13ª geração para alto desempenho",
      "8GB RAM DDR4 para multitarefas",
      "SSD 512GB de alta velocidade",
      "Tela 15.6\" FHD com bordas finas",
      "Design fino e leve para mobilidade",
      "Teclado retroiluminado"
    ],
    specifications: {
      "Marca": "ASUS",
      "Modelo": "Vivobook 15 X1504VA",
      "Processador": "Intel Core i5-1335U",
      "Memória RAM": "8GB DDR4",
      "Armazenamento": "SSD 512GB NVMe",
      "Tela": "15.6\" FHD (1920x1080)",
      "Placa de Vídeo": "Intel Iris Xe Graphics",
      "Sistema Operacional": "Windows 11",
      "Conectividade": "Wi-Fi 6, Bluetooth 5.1, USB-C, HDMI",
      "Bateria": "42Wh (até 7 horas)",
      "Peso": "1.7kg",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "notebook-asus-vivobook-16-i7",
    name: "Notebook ASUS Vivobook 16 X1605VA Intel Core i7 16GB 512GB SSD",
    shortName: "ASUS Vivobook 16 i7",
    category: "notebook",
    categoryIcon: Laptop,
    description: "Notebook ASUS Vivobook 16 polegadas com processador Intel Core i7 e 16GB RAM. Perfeito para tarefas pesadas, edição de planilhas complexas, apresentações e multitarefas intensivas.",
    features: [
      "Processador Intel Core i7 de alta performance",
      "16GB RAM para máxima produtividade",
      "Tela maior de 16\" para mais espaço de trabalho",
      "SSD 512GB PCIe NVMe",
      "Tecnologia de resfriamento eficiente",
      "Áudio de alta qualidade certificado"
    ],
    specifications: {
      "Marca": "ASUS",
      "Modelo": "Vivobook 16 X1605VA",
      "Processador": "Intel Core i7-1355U",
      "Memória RAM": "16GB DDR4",
      "Armazenamento": "SSD 512GB PCIe",
      "Tela": "16\" FHD+ (1920x1200)",
      "Placa de Vídeo": "Intel Iris Xe Graphics",
      "Sistema Operacional": "KeepOS (Linux)",
      "Conectividade": "Wi-Fi 6, Bluetooth 5.2, USB-C, HDMI 2.0",
      "Bateria": "50Wh",
      "Peso": "1.88kg",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "notebook-asus-tuf-gaming-ryzen-7",
    name: "Notebook ASUS TUF Gaming AMD Ryzen 7 16GB 512GB SSD RTX 3050",
    shortName: "ASUS TUF Ryzen 7",
    category: "notebook",
    categoryIcon: Laptop,
    description: "Notebook ASUS TUF Gaming com AMD Ryzen 7 e placa de vídeo dedicada RTX 3050. Ideal para profissionais que trabalham com design gráfico, edição de vídeo e aplicações que exigem processamento gráfico.",
    features: [
      "AMD Ryzen 7 para alto desempenho",
      "NVIDIA GeForce RTX 3050 4GB dedicada",
      "16GB RAM DDR5 de alta velocidade",
      "Tela com taxa de atualização superior",
      "Sistema de resfriamento militar-grade",
      "Teclado RGB retroiluminado"
    ],
    specifications: {
      "Marca": "ASUS",
      "Modelo": "TUF Gaming F15",
      "Processador": "AMD Ryzen 7 7735HS",
      "Memória RAM": "16GB DDR5",
      "Armazenamento": "SSD 512GB NVMe",
      "Tela": "15.6\" FHD 144Hz",
      "Placa de Vídeo": "NVIDIA RTX 3050 4GB GDDR6",
      "Sistema Operacional": "Windows 11",
      "Conectividade": "Wi-Fi 6E, Bluetooth 5.3, USB-C, HDMI 2.1",
      "Bateria": "56Wh",
      "Peso": "2.2kg",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "notebook-apple-macbook-air-m2",
    name: "Apple MacBook Air 13\" M2 Chip 8GB RAM 512GB SSD",
    shortName: "MacBook Air M2",
    category: "notebook",
    categoryIcon: Laptop,
    description: "MacBook Air com chip M2 da Apple, oferecendo desempenho excepcional e eficiência energética. Ideal para profissionais criativos e executivos que buscam o melhor em design, performance e autonomia de bateria.",
    features: [
      "Chip Apple M2 com CPU 8-core e GPU 10-core",
      "Tela Liquid Retina de 13.6 polegadas",
      "Até 18 horas de bateria",
      "Design ultrafino e leve em alumínio",
      "Touch ID integrado",
      "Compatível com todo ecossistema Apple"
    ],
    specifications: {
      "Marca": "Apple",
      "Modelo": "MacBook Air M2",
      "Processador": "Apple M2 (8-core CPU, 10-core GPU)",
      "Memória RAM": "8GB Unified Memory",
      "Armazenamento": "SSD 512GB",
      "Tela": "13.6\" Liquid Retina (2560x1664)",
      "Placa de Vídeo": "Apple M2 GPU 10-core",
      "Sistema Operacional": "macOS",
      "Conectividade": "Wi-Fi 6, Bluetooth 5.3, 2x Thunderbolt/USB 4",
      "Bateria": "Até 18 horas",
      "Peso": "1.24kg",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },

  // ==================== MONITORES ====================
  {
    id: "monitor-lg-24-gamer-100hz",
    name: "Monitor Gamer LG 24\" Full HD 100Hz 24MS500",
    shortName: "LG 24\" Gamer 100Hz",
    category: "monitor",
    categoryIcon: Monitor,
    description: "Monitor LG de 24 polegadas com taxa de atualização de 100Hz, ideal para estações de trabalho que exigem fluidez visual. Perfeito para design, edição e aplicações gráficas.",
    features: [
      "Tela 24\" Full HD (1920x1080)",
      "Taxa de atualização de 100Hz",
      "Tempo de resposta rápido",
      "AMD FreeSync para imagens suaves",
      "Modo Leitor para conforto visual",
      "Múltiplas entradas HDMI e DisplayPort"
    ],
    specifications: {
      "Marca": "LG",
      "Modelo": "24MS500",
      "Tamanho": "24 polegadas",
      "Resolução": "Full HD (1920x1080)",
      "Taxa de Atualização": "100Hz",
      "Tempo de Resposta": "5ms",
      "Tecnologia": "IPS",
      "Conectividade": "HDMI, DisplayPort, VGA",
      "Ajuste": "Inclinação",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "monitor-dell-22-se2225hm",
    name: "Monitor Dell 22\" Full HD SE2225HM",
    shortName: "Dell 22\" SE2225HM",
    category: "monitor",
    categoryIcon: Monitor,
    description: "Monitor Dell de 22 polegadas com design profissional e qualidade de imagem confiável. Ideal para escritórios, estações de trabalho e ambientes corporativos que buscam custo-benefício.",
    features: [
      "Tela 22\" Full HD para trabalho office",
      "Design slim e elegante",
      "Ângulos de visão amplos",
      "Ajuste de inclinação para conforto",
      "Conectividade HDMI e VGA",
      "Baixo consumo energético"
    ],
    specifications: {
      "Marca": "Dell",
      "Modelo": "SE2225HM",
      "Tamanho": "22 polegadas",
      "Resolução": "Full HD (1920x1080)",
      "Taxa de Atualização": "60Hz",
      "Tempo de Resposta": "8ms",
      "Tecnologia": "VA",
      "Conectividade": "HDMI, VGA",
      "Ajuste": "Inclinação -5° a 21°",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "monitor-samsung-24-gamer-100hz",
    name: "Monitor Gamer Samsung 24\" Full HD 100Hz S3",
    shortName: "Samsung 24\" S3",
    category: "monitor",
    categoryIcon: Monitor,
    description: "Monitor Samsung com taxa de atualização de 100Hz e tecnologia AMD FreeSync. Perfeito para profissionais que trabalham com edição de vídeo, design gráfico e aplicações visuais.",
    features: [
      "100Hz para movimentos suaves",
      "AMD FreeSync Premium",
      "Design sem bordas em 3 lados",
      "Modo Eye Saver para conforto visual",
      "Game Mode otimizado",
      "HDMI e VGA inclusos"
    ],
    specifications: {
      "Marca": "Samsung",
      "Modelo": "S3 24\"",
      "Tamanho": "24 polegadas",
      "Resolução": "Full HD (1920x1080)",
      "Taxa de Atualização": "100Hz",
      "Tempo de Resposta": "5ms",
      "Tecnologia": "VA",
      "Conectividade": "HDMI, VGA",
      "Ajuste": "Inclinação",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "monitor-samsung-27-curvo-f390",
    name: "Monitor Samsung 27\" LED Curvo Full HD LC27F390",
    shortName: "Samsung 27\" Curvo",
    category: "monitor",
    categoryIcon: Monitor,
    description: "Monitor curvo Samsung de 27 polegadas que proporciona experiência imersiva. Ideal para salas de reunião, apresentações e profissionais que trabalham com multitarefas visuais.",
    features: [
      "Tela curva 1800R para imersão",
      "27 polegadas de área de visualização",
      "Eye Saver Mode e Flicker Free",
      "Design elegante e moderno",
      "Conectividade HDMI e DisplayPort",
      "Modo Game integrado"
    ],
    specifications: {
      "Marca": "Samsung",
      "Modelo": "LC27F390",
      "Tamanho": "27 polegadas",
      "Resolução": "Full HD (1920x1080)",
      "Taxa de Atualização": "60Hz",
      "Tempo de Resposta": "4ms",
      "Tecnologia": "VA Curvo 1800R",
      "Conectividade": "HDMI, DisplayPort",
      "Ajuste": "Inclinação",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "monitor-samsung-32-4k-m80d",
    name: "Monitor Samsung 32\" 4K UHD Smart M80D",
    shortName: "Samsung 32\" 4K Smart",
    category: "monitor",
    categoryIcon: Monitor,
    description: "Monitor Smart Samsung 4K de 32 polegadas com funcionalidades integradas. Perfeito para executivos e ambientes que exigem qualidade de imagem 4K e versatilidade de uso.",
    features: [
      "Resolução 4K UHD (3840x2160)",
      "Smart Hub integrado",
      "32 polegadas para máxima produtividade",
      "AMD FreeSync Premium Pro",
      "Webcam SlimFit integrada",
      "USB-C com 65W Power Delivery"
    ],
    specifications: {
      "Marca": "Samsung",
      "Modelo": "M80D",
      "Tamanho": "32 polegadas",
      "Resolução": "4K UHD (3840x2160)",
      "Taxa de Atualização": "60Hz",
      "Tempo de Resposta": "4ms",
      "Tecnologia": "IPS",
      "Conectividade": "USB-C, HDMI, Mini DisplayPort",
      "Ajuste": "Altura, inclinação, rotação",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },

  // ==================== TECLADOS ====================
  {
    id: "teclado-dell-kb216-usb",
    name: "Teclado Dell com Fio KB216 USB ABNT2 Preto",
    shortName: "Dell KB216 USB",
    category: "teclado",
    categoryIcon: Keyboard,
    description: "Teclado Dell com fio, padrão ABNT2, ideal para uso corporativo. Design robusto, teclas silenciosas e layout brasileiro completo com teclado numérico.",
    features: [
      "Layout ABNT2 completo com Ç",
      "Conexão USB plug and play",
      "Teclas silenciosas para ambiente corporativo",
      "Design durável e resistente ao desgaste",
      "Teclado numérico integrado",
      "Compatível com Windows e Linux"
    ],
    specifications: {
      "Marca": "Dell",
      "Modelo": "KB216",
      "Tipo": "Com fio",
      "Conexão": "USB",
      "Layout": "ABNT2 (Português Brasil)",
      "Cor": "Preto",
      "Teclas": "104 teclas",
      "Comprimento do Cabo": "1.8m",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "teclado-intelbras-wireless-tsi50",
    name: "Teclado Intelbras Sem Fio TSI50 2.4GHz ABNT2",
    shortName: "Intelbras TSI50 Wireless",
    category: "teclado",
    categoryIcon: Keyboard,
    description: "Teclado sem fio Intelbras com tecnologia 2.4GHz, oferecendo liberdade de movimento e organização do espaço de trabalho. Ideal para escritórios modernos e estações clean desk.",
    features: [
      "Conexão wireless 2.4GHz até 10 metros",
      "Layout ABNT2 brasileiro",
      "Bateria de longa duração",
      "Receptor USB nano incluso",
      "Teclas macias e silenciosas",
      "Design compacto e elegante"
    ],
    specifications: {
      "Marca": "Intelbras",
      "Modelo": "TSI50",
      "Tipo": "Sem fio",
      "Conexão": "2.4GHz wireless",
      "Layout": "ABNT2",
      "Cor": "Preto",
      "Alimentação": "2x AAA",
      "Alcance": "Até 10m",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "teclado-hp-wireless-150",
    name: "Teclado HP Sem Fio 150 2.4GHz Compacto",
    shortName: "HP Wireless 150",
    category: "teclado",
    categoryIcon: Keyboard,
    description: "Teclado HP sem fio compacto e confortável. Design moderno que economiza espaço na mesa, perfeito para ambientes corporativos que buscam praticidade e eficiência.",
    features: [
      "Design compacto que economiza espaço",
      "Conexão wireless confiável",
      "Teclas de perfil baixo confortáveis",
      "Plug and play sem necessidade de software",
      "Bateria de longa duração",
      "Layout completo com teclas multimídia"
    ],
    specifications: {
      "Marca": "HP",
      "Modelo": "150",
      "Tipo": "Sem fio",
      "Conexão": "2.4GHz USB",
      "Layout": "ABNT2",
      "Cor": "Preto",
      "Alimentação": "2x AAA",
      "Alcance": "Até 10m",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "teclado-redragon-netherbane-rgb",
    name: "Teclado Redragon Netherbane K521 RGB Membrana",
    shortName: "Redragon K521 RGB",
    category: "teclado",
    categoryIcon: Keyboard,
    description: "Teclado Redragon com iluminação RGB e design gamer. Ideal para profissionais de design, edição e trabalhos noturnos que precisam de teclado retroiluminado e confortável.",
    features: [
      "Iluminação RGB personalizável",
      "Teclas de membrana silenciosas",
      "Layout completo ABNT2",
      "Apoio de pulso removível",
      "Teclas anti-ghosting",
      "Design robusto e durável"
    ],
    specifications: {
      "Marca": "Redragon",
      "Modelo": "Netherbane K521",
      "Tipo": "Com fio",
      "Conexão": "USB",
      "Layout": "ABNT2",
      "Iluminação": "RGB 7 cores",
      "Tecnologia": "Membrana",
      "Cabo": "1.8m trançado",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "teclado-mecanico-gamer-rgb",
    name: "Teclado Mecânico Gamer RGB Switch Blue ABNT2",
    shortName: "Mecânico RGB Blue",
    category: "teclado",
    categoryIcon: Keyboard,
    description: "Teclado mecânico com switches Blue e iluminação RGB. Perfeito para digitação profissional intensa, oferecendo feedback tátil e auditivo para máxima precisão.",
    features: [
      "Switches mecânicos Blue para feedback tátil",
      "Iluminação RGB personalizável",
      "Estrutura em metal resistente",
      "Anti-ghosting total",
      "Keycaps de alta qualidade",
      "Layout ABNT2 completo"
    ],
    specifications: {
      "Marca": "Genérico",
      "Modelo": "Mecânico RGB",
      "Tipo": "Com fio",
      "Conexão": "USB",
      "Layout": "ABNT2",
      "Switch": "Mecânico Blue",
      "Iluminação": "RGB",
      "Cabo": "1.8m",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },

  // ==================== MOUSE ====================
  {
    id: "mouse-dell-ms116-usb",
    name: "Mouse Dell com Fio MS116 USB Óptico 1000DPI",
    shortName: "Dell MS116 USB",
    category: "mouse",
    categoryIcon: Mouse,
    description: "Mouse óptico Dell com design ergonômico e confiável. Ideal para uso corporativo diário, oferecendo precisão e conforto para longas jornadas de trabalho.",
    features: [
      "Sensor óptico de 1000 DPI",
      "Design ambidestro confortável",
      "Conexão USB plug and play",
      "Cabo de 1.8m para flexibilidade",
      "Compatível com Windows e Linux",
      "Construção durável Dell"
    ],
    specifications: {
      "Marca": "Dell",
      "Modelo": "MS116",
      "Tipo": "Com fio",
      "Conexão": "USB",
      "Sensor": "Óptico 1000 DPI",
      "Botões": "3 botões",
      "Cor": "Preto",
      "Cabo": "1.8m",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "mouse-dell-wireless-wm126",
    name: "Mouse Dell Sem Fio WM126 2.4GHz 1000DPI Preto",
    shortName: "Dell WM126 Wireless",
    category: "mouse",
    categoryIcon: Mouse,
    description: "Mouse wireless Dell que oferece liberdade de movimento e organização da área de trabalho. Design compacto e bateria de longa duração para uso profissional.",
    features: [
      "Conexão wireless 2.4GHz confiável",
      "Alcance de até 10 metros",
      "Bateria com duração de até 12 meses",
      "Design compacto para transporte",
      "Sensor óptico preciso",
      "Receptor nano USB"
    ],
    specifications: {
      "Marca": "Dell",
      "Modelo": "WM126",
      "Tipo": "Sem fio",
      "Conexão": "2.4GHz wireless",
      "Sensor": "Óptico 1000 DPI",
      "Botões": "3 botões",
      "Alimentação": "1x AA",
      "Alcance": "10m",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "mouse-hp-usb-1600dpi",
    name: "Mouse HP USB com Fio 1600DPI Preto",
    shortName: "HP USB 1600DPI",
    category: "mouse",
    categoryIcon: Mouse,
    description: "Mouse HP com fio e sensor de 1600 DPI para precisão superior. Ideal para trabalhos que exigem exatidão, como design gráfico e edição.",
    features: [
      "Sensor óptico de 1600 DPI",
      "Design ergonômico para conforto",
      "Plug and play via USB",
      "Botões silenciosos para ambientes corporativos",
      "Compatibilidade universal",
      "Durabilidade HP"
    ],
    specifications: {
      "Marca": "HP",
      "Modelo": "1600DPI",
      "Tipo": "Com fio",
      "Conexão": "USB",
      "Sensor": "Óptico 1600 DPI",
      "Botões": "3 botões",
      "Cor": "Preto",
      "Cabo": "1.5m",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "mouse-hp-150-usb",
    name: "Mouse HP 150 USB com Fio Confortável e Preciso",
    shortName: "HP 150 USB",
    category: "mouse",
    categoryIcon: Mouse,
    description: "Mouse HP 150 com design confortável para uso prolongado. Perfeito para escritórios e estações de trabalho que buscam simplicidade e eficiência.",
    features: [
      "Design confortável para uso prolongado",
      "Sensor óptico de alta precisão",
      "Conexão USB confiável",
      "Formato ambidestro",
      "Botões duráveis",
      "Compatível com diversos sistemas"
    ],
    specifications: {
      "Marca": "HP",
      "Modelo": "150",
      "Tipo": "Com fio",
      "Conexão": "USB",
      "Sensor": "Óptico 1200 DPI",
      "Botões": "3 botões",
      "Cor": "Preto",
      "Cabo": "1.5m",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "mouse-redragon-ranger-4000dpi",
    name: "Mouse Redragon Ranger M910 RGB 8 Botões 4000DPI",
    shortName: "Redragon Ranger M910",
    category: "mouse",
    categoryIcon: Mouse,
    description: "Mouse Redragon com 8 botões programáveis e sensor de até 4000 DPI. Ideal para profissionais de design, CAD e aplicações que exigem precisão extrema.",
    features: [
      "Sensor de até 4000 DPI ajustável",
      "8 botões programáveis",
      "Iluminação RGB personalizável",
      "Design ergonômico para destros",
      "Software de customização incluído",
      "Construção durável para uso intensivo"
    ],
    specifications: {
      "Marca": "Redragon",
      "Modelo": "Ranger M910",
      "Tipo": "Com fio",
      "Conexão": "USB",
      "Sensor": "Óptico até 4000 DPI",
      "Botões": "8 botões programáveis",
      "Iluminação": "RGB",
      "Cabo": "1.8m trançado",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },

  // ==================== HEADSETS/FONES ====================
  {
    id: "fone-jbl-quantum-100m2",
    name: "Fone de Ouvido JBL Quantum 100M2 com Microfone",
    shortName: "JBL Quantum 100M2",
    category: "headset",
    categoryIcon: Headphones,
    description: "Fone de ouvido JBL com microfone integrado, ideal para videoconferências e reuniões online. Som de qualidade JBL e conforto para uso prolongado.",
    features: [
      "Drivers de 40mm para som potente",
      "Microfone destacável boom",
      "Almofadas confortáveis para uso prolongado",
      "Design leve e durável",
      "Controles no cabo para praticidade",
      "Compatível com PC, notebook e mobile"
    ],
    specifications: {
      "Marca": "JBL",
      "Modelo": "Quantum 100M2",
      "Tipo": "Over-ear com fio",
      "Conexão": "P2 3.5mm",
      "Drivers": "40mm",
      "Microfone": "Boom destacável",
      "Impedância": "32Ω",
      "Cor": "Preto",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "headset-dell-wh125",
    name: "Headset Dell com Fio WH125 Microfone com Cancelamento de Ruído",
    shortName: "Dell WH125",
    category: "headset",
    categoryIcon: Headphones,
    description: "Headset Dell profissional com microfone de cancelamento de ruído. Perfeito para call centers, atendimento ao cliente e ambientes corporativos que exigem comunicação clara.",
    features: [
      "Microfone com cancelamento de ruído",
      "Design confortável para uso o dia todo",
      "Controles in-line para volume e mute",
      "Conexão USB plug and play",
      "Qualidade de áudio Dell",
      "Certificado para Microsoft Teams"
    ],
    specifications: {
      "Marca": "Dell",
      "Modelo": "WH125",
      "Tipo": "On-ear com fio",
      "Conexão": "USB-A",
      "Microfone": "Boom com cancelamento de ruído",
      "Drivers": "30mm",
      "Controles": "Volume e mute in-line",
      "Cor": "Preto",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "headset-logitech-h111-stereo",
    name: "Headset Logitech H111 Estéreo com Microfone",
    shortName: "Logitech H111",
    category: "headset",
    categoryIcon: Headphones,
    description: "Headset Logitech estéreo simples e eficaz para uso diário. Ideal para videoconferências, treinamentos online e comunicação corporativa.",
    features: [
      "Áudio estéreo claro",
      "Microfone ajustável rotativo",
      "Leve e confortável",
      "Plug P2 3.5mm universal",
      "Controles de volume integrados",
      "Qualidade Logitech confiável"
    ],
    specifications: {
      "Marca": "Logitech",
      "Modelo": "H111",
      "Tipo": "On-ear com fio",
      "Conexão": "P2 3.5mm",
      "Microfone": "Rotativo ajustável",
      "Drivers": "30mm",
      "Resposta de Frequência": "20Hz - 20kHz",
      "Cor": "Preto",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "headset-redragon-lamia-h510",
    name: "Headset Gamer Redragon Lamia H510 RGB Surround 7.1",
    shortName: "Redragon Lamia H510",
    category: "headset",
    categoryIcon: Headphones,
    description: "Headset Redragon com som surround 7.1 virtual e iluminação RGB. Perfeito para profissionais de edição de áudio, vídeo e multimídia.",
    features: [
      "Som surround 7.1 virtual",
      "Iluminação RGB personalizável",
      "Drivers de 50mm potentes",
      "Microfone com cancelamento de ruído",
      "Almofadas memory foam confortáveis",
      "Controles de volume e LED no cabo"
    ],
    specifications: {
      "Marca": "Redragon",
      "Modelo": "Lamia H510",
      "Tipo": "Over-ear com fio",
      "Conexão": "USB",
      "Drivers": "50mm neodímio",
      "Microfone": "Boom com LED",
      "Surround": "7.1 virtual",
      "Iluminação": "RGB",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "headset-poly-blackwire-3220",
    name: "Headset Poly Blackwire 3220 USB-C com Adaptador P2",
    shortName: "Poly Blackwire 3220",
    category: "headset",
    categoryIcon: Headphones,
    description: "Headset profissional Poly com conexão USB-C e adaptador P2 incluído. Ideal para executivos e profissionais que necessitam de comunicação cristalina em reuniões.",
    features: [
      "Conexão USB-C com adaptador P2",
      "Certificado Microsoft Teams e Zoom",
      "Microfone com cancelamento de ruído",
      "Design leve e confortável",
      "Controles in-line intuitivos",
      "Qualidade de áudio premium Poly"
    ],
    specifications: {
      "Marca": "Poly (Plantronics)",
      "Modelo": "Blackwire 3220",
      "Tipo": "On-ear com fio",
      "Conexão": "USB-C + adaptador P2",
      "Microfone": "Boom com cancelamento de ruído",
      "Drivers": "32mm",
      "Certificações": "Microsoft Teams, Zoom",
      "Cor": "Preto",
      "Garantia": "24 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },

  // ==================== CAIXAS DE SOM ====================
  {
    id: "caixa-jbl-flip-6-bluetooth",
    name: "Caixa de Som JBL Flip 6 Bluetooth Portátil 30W",
    shortName: "JBL Flip 6",
    category: "caixa-som",
    categoryIcon: Speaker,
    description: "Caixa de som portátil JBL Flip 6 com som potente de 30W. Ideal para apresentações móveis, eventos corporativos e ambientes que exigem qualidade de áudio superior.",
    features: [
      "Potência de 30W RMS",
      "Bluetooth 5.1 com alcance estendido",
      "À prova d'água IP67",
      "Bateria de até 12 horas",
      "PartyBoost para conectar múltiplas caixas",
      "Design durável e portátil"
    ],
    specifications: {
      "Marca": "JBL",
      "Modelo": "Flip 6",
      "Potência": "30W RMS",
      "Conectividade": "Bluetooth 5.1",
      "Bateria": "Até 12 horas",
      "Resistência": "IP67 (água e poeira)",
      "Dimensões": "178 x 68 x 72mm",
      "Peso": "550g",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "caixa-jbl-partybox-encore-essential",
    name: "Caixa de Som JBL PartyBox Encore Essential Bluetooth 100W",
    shortName: "JBL PartyBox Encore",
    category: "caixa-som",
    categoryIcon: Speaker,
    description: "JBL PartyBox com 100W de potência para eventos e apresentações de grande porte. Som potente, iluminação integrada e bateria recarregável para máxima portabilidade.",
    features: [
      "100W de potência para ambientes grandes",
      "Iluminação LED sincronizada com música",
      "Bateria recarregável integrada",
      "Entrada para microfone e guitarra",
      "Bluetooth com TWS para parear 2 caixas",
      "Alças e rodas para transporte"
    ],
    specifications: {
      "Marca": "JBL",
      "Modelo": "PartyBox Encore Essential",
      "Potência": "100W RMS",
      "Conectividade": "Bluetooth 5.1, USB, P2",
      "Bateria": "Até 6 horas",
      "Iluminação": "LED RGB",
      "Dimensões": "327 x 293 x 326mm",
      "Peso": "5.9kg",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "caixa-jbl-partybox-stage-320",
    name: "Caixa de Som JBL PartyBox Stage 320 Bluetooth 240W",
    shortName: "JBL PartyBox Stage 320",
    category: "caixa-som",
    categoryIcon: Speaker,
    description: "JBL PartyBox Stage 320 com 240W de potência para eventos profissionais e grandes ambientes. Sistema de som completo com recursos profissionais.",
    features: [
      "240W de potência total",
      "Iluminação LED profissional",
      "Efeitos DJ e karaokê integrados",
      "Entrada para microfone e instrumentos",
      "Bluetooth e conexão com fio",
      "Rodas e alça para transporte"
    ],
    specifications: {
      "Marca": "JBL",
      "Modelo": "PartyBox Stage 320",
      "Potência": "240W RMS",
      "Conectividade": "Bluetooth 5.3, USB, P2, RCA",
      "Bateria": "Bivolt AC",
      "Iluminação": "LED Stage sincronizado",
      "Dimensões": "326 x 687 x 369mm",
      "Peso": "16.2kg",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "caixa-c3tech-sp301bk-usb",
    name: "Caixa de Som C3Tech SP-301BK USB 2 Alto-Falantes 6W",
    shortName: "C3Tech SP-301BK",
    category: "caixa-som",
    categoryIcon: Speaker,
    description: "Caixas de som C3Tech compactas para computador. Ideal para estações de trabalho, recepções e ambientes que necessitam de áudio básico de qualidade.",
    features: [
      "6W de potência total (2x 3W)",
      "Conexão USB simples plug and play",
      "Design compacto para mesa",
      "Controle de volume frontal",
      "Compatível com Windows e Linux",
      "Custo-benefício excelente"
    ],
    specifications: {
      "Marca": "C3Tech",
      "Modelo": "SP-301BK",
      "Potência": "6W RMS (2x 3W)",
      "Conectividade": "USB",
      "Drivers": "2x alto-falantes",
      "Controles": "Volume frontal",
      "Alimentação": "USB (5V)",
      "Cor": "Preto",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "caixa-jbl-boombox-3-bluetooth",
    name: "Caixa de Som JBL Boombox 3 Bluetooth Portátil 180W",
    shortName: "JBL Boombox 3",
    category: "caixa-som",
    categoryIcon: Speaker,
    description: "JBL Boombox 3 com potência massiva de 180W e qualidade de som superior. Perfeita para grandes eventos, apresentações externas e ambientes que exigem som potente.",
    features: [
      "180W de potência total",
      "Bateria de até 24 horas",
      "À prova d'água e poeira IP67",
      "JBL PartyBoost para múltiplas caixas",
      "Graves profundos e potentes",
      "Alça integrada para transporte"
    ],
    specifications: {
      "Marca": "JBL",
      "Modelo": "Boombox 3",
      "Potência": "180W RMS",
      "Conectividade": "Bluetooth 5.3",
      "Bateria": "Até 24 horas",
      "Resistência": "IP67",
      "Dimensões": "452 x 201 x 195mm",
      "Peso": "6.7kg",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },

  // ==================== PROJETORES ====================
  {
    id: "projetor-intelbras-pfl5211-wifi",
    name: "Projetor Intelbras PFL5211 Full HD WiFi 5200 Lúmens Android",
    shortName: "Intelbras PFL5211",
    category: "projetor",
    categoryIcon: Projector,
    description: "Projetor Intelbras com 5200 lúmens e WiFi integrado. Ideal para salas de reunião, apresentações corporativas e ambientes que exigem brilho intenso.",
    features: [
      "5200 lúmens para ambientes claros",
      "Resolução Full HD (1920x1080)",
      "WiFi integrado para espelhamento",
      "Android TV com apps integrados",
      "Correção trapezoidal automática",
      "Múltiplas entradas HDMI, USB e VGA"
    ],
    specifications: {
      "Marca": "Intelbras",
      "Modelo": "PFL5211",
      "Resolução": "Full HD (1920x1080)",
      "Brilho": "5200 ANSI Lúmens",
      "Contraste": "15.000:1",
      "Tecnologia": "LCD",
      "Conectividade": "WiFi, HDMI, USB, VGA",
      "Lâmpada": "Até 20.000 horas",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "projetor-portatil-bluetooth-4k",
    name: "Projetor Portátil Bluetooth 4K 15000 Lúmens WiFi",
    shortName: "Projetor Portátil 4K",
    category: "projetor",
    categoryIcon: Projector,
    description: "Projetor portátil com suporte 4K e alta luminosidade. Perfeito para apresentações móveis, treinamentos externos e eventos corporativos.",
    features: [
      "Suporte para conteúdo 4K",
      "15000 lúmens de alto brilho",
      "Bluetooth e WiFi integrados",
      "Correção trapezoidal 4D",
      "Design compacto e portátil",
      "Zoom digital e foco manual"
    ],
    specifications: {
      "Marca": "Genérico",
      "Modelo": "4K Portable",
      "Resolução Nativa": "1080P (suporta 4K)",
      "Brilho": "15000 Lúmens",
      "Contraste": "10.000:1",
      "Conectividade": "WiFi, Bluetooth, HDMI, USB",
      "Projeção": "40-300 polegadas",
      "Lâmpada": "LED até 50.000 horas",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "projetor-smart-android-wifi-bluetooth",
    name: "Projetor Smart Android 11 WiFi Bluetooth Correção Trapezoidal",
    shortName: "Projetor Smart Android 11",
    category: "projetor",
    categoryIcon: Projector,
    description: "Projetor inteligente com Android 11 integrado. Acesse apps, streaming e apresentações direto do projetor sem necessidade de dispositivos externos.",
    features: [
      "Android 11 TV integrado",
      "Apps Netflix, YouTube e mais",
      "WiFi 5GHz e Bluetooth 5.0",
      "Correção trapezoidal automática",
      "Foco automático",
      "Controle remoto inteligente"
    ],
    specifications: {
      "Marca": "Genérico",
      "Modelo": "Smart Android 11",
      "Resolução": "Full HD 1080P",
      "Brilho": "8000 Lúmens",
      "Sistema": "Android 11 TV",
      "Conectividade": "WiFi 5GHz, Bluetooth 5.0, HDMI",
      "Projeção": "50-250 polegadas",
      "Lâmpada": "LED 30.000 horas",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "projetor-epson-powerlite-3lcd",
    name: "Projetor Epson PowerLite 3LCD 3300 Lúmens HDMI",
    shortName: "Epson PowerLite 3LCD",
    category: "projetor",
    categoryIcon: Projector,
    description: "Projetor profissional Epson com tecnologia 3LCD e 3300 lúmens. Qualidade de cores superior, ideal para apresentações executivas e ambientes corporativos.",
    features: [
      "Tecnologia 3LCD Epson para cores vivas",
      "3300 lúmens de brilho",
      "Resolução WXGA (1280x800)",
      "Entrada HDMI e VGA",
      "Correção trapezoidal vertical",
      "Qualidade e confiabilidade Epson"
    ],
    specifications: {
      "Marca": "Epson",
      "Modelo": "PowerLite S41+",
      "Resolução": "SVGA (800x600)",
      "Brilho": "3300 ANSI Lúmens",
      "Contraste": "15.000:1",
      "Tecnologia": "3LCD",
      "Conectividade": "HDMI, VGA, USB",
      "Lâmpada": "Até 10.000 horas",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "projetor-intelbras-pfl6410",
    name: "Projetor Intelbras PFL-6410 Full HD 6400 Lúmens HDMI",
    shortName: "Intelbras PFL-6410",
    category: "projetor",
    categoryIcon: Projector,
    description: "Projetor Intelbras profissional com 6400 lúmens, ideal para grandes auditórios e ambientes com muita iluminação. Qualidade Full HD e recursos avançados.",
    features: [
      "6400 lúmens para ambientes claros",
      "Resolução Full HD nativa",
      "Alto contraste para imagens nítidas",
      "Múltiplas entradas de conexão",
      "Correção trapezoidal avançada",
      "Design robusto para uso profissional"
    ],
    specifications: {
      "Marca": "Intelbras",
      "Modelo": "PFL-6410",
      "Resolução": "Full HD (1920x1080)",
      "Brilho": "6400 ANSI Lúmens",
      "Contraste": "20.000:1",
      "Tecnologia": "LCD",
      "Conectividade": "HDMI, VGA, USB",
      "Lâmpada": "Até 15.000 horas",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },

  // ==================== ROTEADORES ====================
  {
    id: "roteador-tplink-ax12-wifi6",
    name: "Roteador TP-Link Archer AX12 WiFi 6 Dual Band AX1500",
    shortName: "TP-Link AX12 WiFi 6",
    category: "roteador",
    categoryIcon: Wifi,
    description: "Roteador TP-Link com tecnologia WiFi 6 (802.11ax) de última geração. Oferece velocidades de até 1.5Gbps e suporta múltiplos dispositivos simultâneos, ideal para escritórios modernos.",
    features: [
      "WiFi 6 (802.11ax) de nova geração",
      "Velocidade combinada de até 1.5Gbps",
      "OFDMA e MU-MIMO para múltiplos dispositivos",
      "4 antenas de alto ganho",
      "Beamforming para cobertura direcionada",
      "Controle parental e QoS avançado"
    ],
    specifications: {
      "Marca": "TP-Link",
      "Modelo": "Archer AX12",
      "Padrão WiFi": "WiFi 6 (802.11ax)",
      "Velocidade": "AX1500 (1201Mbps 5GHz + 300Mbps 2.4GHz)",
      "Antenas": "4 antenas fixas",
      "Portas": "1 WAN Gigabit, 4 LAN Gigabit",
      "Processador": "Dual-Core",
      "Segurança": "WPA3",
      "Garantia": "24 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "roteador-tplink-ax72-wifi6",
    name: "Roteador TP-Link Archer AX72 WiFi 6 Dual Band AX5400",
    shortName: "TP-Link AX72",
    category: "roteador",
    categoryIcon: Wifi,
    description: "Roteador de alto desempenho TP-Link AX72 com velocidades de até 5.4Gbps. Perfeito para empresas que necessitam de rede rápida e estável para muitos usuários.",
    features: [
      "Velocidade AX5400 (4804 + 574 Mbps)",
      "6 antenas de alto ganho",
      "Porta USB 3.0 para compartilhamento",
      "OneMesh compatível",
      "VPN Server e Client",
      "Gerenciamento via app Tether"
    ],
    specifications: {
      "Marca": "TP-Link",
      "Modelo": "Archer AX72",
      "Padrão WiFi": "WiFi 6 (802.11ax)",
      "Velocidade": "AX5400 (4804Mbps 5GHz + 574Mbps 2.4GHz)",
      "Antenas": "6 antenas externas",
      "Portas": "1 WAN Gigabit, 4 LAN Gigabit, 1 USB 3.0",
      "Processador": "Quad-Core 1.7GHz",
      "Memória": "512MB RAM",
      "Garantia": "24 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "roteador-tplink-ax53-wifi6",
    name: "Roteador TP-Link Archer AX53 WiFi 6 Dual Band AX3000",
    shortName: "TP-Link AX53",
    category: "roteador",
    categoryIcon: Wifi,
    description: "Roteador TP-Link AX53 com WiFi 6 e velocidade AX3000. Solução intermediária perfeita para escritórios de médio porte com múltiplos dispositivos conectados.",
    features: [
      "Velocidade AX3000 (2402 + 574 Mbps)",
      "4 antenas de alto desempenho",
      "OFDMA e MU-MIMO WiFi 6",
      "Beamforming inteligente",
      "HomeShield básico incluído",
      "EasyMesh compatível"
    ],
    specifications: {
      "Marca": "TP-Link",
      "Modelo": "Archer AX53",
      "Padrão WiFi": "WiFi 6 (802.11ax)",
      "Velocidade": "AX3000 (2402Mbps 5GHz + 574Mbps 2.4GHz)",
      "Antenas": "4 antenas externas",
      "Portas": "1 WAN Gigabit, 4 LAN Gigabit",
      "Processador": "Triple-Core",
      "Memória": "256MB RAM",
      "Garantia": "24 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "roteador-tplink-ac1200-wireless",
    name: "Roteador TP-Link AC1200 Wireless Dual Band 4 Antenas",
    shortName: "TP-Link AC1200",
    category: "roteador",
    categoryIcon: Wifi,
    description: "Roteador TP-Link AC1200 com tecnologia Dual Band. Solução confiável e econômica para pequenos escritórios e ambientes que necessitam de conectividade básica estável.",
    features: [
      "Velocidade AC1200 (867 + 300 Mbps)",
      "Dual Band 2.4GHz e 5GHz",
      "4 antenas externas",
      "3 portas LAN Gigabit",
      "Controle parental básico",
      "Configuração simples via app"
    ],
    specifications: {
      "Marca": "TP-Link",
      "Modelo": "Archer C6",
      "Padrão WiFi": "AC1200 (802.11ac)",
      "Velocidade": "1200Mbps (867Mbps 5GHz + 300Mbps 2.4GHz)",
      "Antenas": "4 antenas externas",
      "Portas": "1 WAN, 4 LAN Gigabit",
      "Processador": "Dual-Core",
      "Segurança": "WPA2/WPA3",
      "Garantia": "24 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "roteador-intelbras-ap1250-corporativo",
    name: "Roteador Intelbras AP-1250 AC Corporativo WiFi Mesh",
    shortName: "Intelbras AP-1250",
    category: "roteador",
    categoryIcon: Wifi,
    description: "Roteador corporativo Intelbras com tecnologia Mesh e gerenciamento avançado. Ideal para empresas que necessitam de rede escalável e gerenciável centralmente.",
    features: [
      "Velocidade AC1200 corporativa",
      "Tecnologia Mesh para expansão",
      "Gerenciamento via controlador",
      "PoE para instalação flexível",
      "VLANs e QoS avançado",
      "Suporte técnico corporativo Intelbras"
    ],
    specifications: {
      "Marca": "Intelbras",
      "Modelo": "AP-1250 AC",
      "Padrão WiFi": "AC1200 (802.11ac)",
      "Velocidade": "1200Mbps",
      "Tecnologia": "WiFi Mesh",
      "Alimentação": "PoE ou fonte",
      "Gerenciamento": "Controlador cloud",
      "Alcance": "Até 100 usuários",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },

  // ==================== SWITCHES ====================
  {
    id: "switch-tplink-er605-vpn-gigabit",
    name: "Switch TP-Link ER605 Roteador VPN Gigabit Omada SDN",
    shortName: "TP-Link ER605 VPN",
    category: "switch",
    categoryIcon: Network,
    description: "Switch roteador TP-Link ER605 com VPN integrada e gerenciamento SDN Omada. Ideal para empresas que necessitam de conexões seguras e rede gerenciável.",
    features: [
      "5 portas Gigabit Ethernet",
      "VPN IPsec/PPTP/L2TP integrada",
      "Omada SDN para gerenciamento",
      "Até 20 túneis VPN simultâneos",
      "Load Balance entre WANs",
      "Portal captivo integrado"
    ],
    specifications: {
      "Marca": "TP-Link",
      "Modelo": "ER605",
      "Tipo": "Roteador VPN Gigabit",
      "Portas": "1 WAN + 3 WAN/LAN + 1 LAN Gigabit",
      "VPN": "IPsec/PPTP/L2TP (20 túneis)",
      "Throughput": "Até 1 Gbps",
      "Gerenciamento": "Omada Cloud/Controller",
      "Garantia": "Vitalícia limitada"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "switch-tplink-sg108-8-portas",
    name: "Switch TP-Link TL-SG108 8 Portas Gigabit Desktop",
    shortName: "TP-Link SG108",
    category: "switch",
    categoryIcon: Network,
    description: "Switch Gigabit TP-Link de 8 portas, não gerenciável. Solução plug and play perfeita para pequenos escritórios que necessitam de conectividade Gigabit simples e confiável.",
    features: [
      "8 portas Gigabit Ethernet 10/100/1000",
      "Plug and play sem configuração",
      "Gabinete metálico desktop",
      "Baixo consumo energético",
      "Ventilação passiva silenciosa",
      "Garantia vitalícia limitada TP-Link"
    ],
    specifications: {
      "Marca": "TP-Link",
      "Modelo": "TL-SG108",
      "Tipo": "Switch não gerenciável",
      "Portas": "8 portas Gigabit RJ45",
      "Velocidade": "10/100/1000 Mbps",
      "Capacidade": "16 Gbps",
      "Gabinete": "Metal desktop",
      "Consumo": "4.37W máximo",
      "Garantia": "Vitalícia limitada"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "switch-tplink-sg116e-16-portas",
    name: "Switch TP-Link TL-SG116E 16 Portas Gigabit Gerenciável Smart",
    shortName: "TP-Link SG116E",
    category: "switch",
    categoryIcon: Network,
    description: "Switch Gigabit gerenciável de 16 portas TP-Link. Oferece recursos avançados como VLANs, QoS e IGMP Snooping, ideal para redes corporativas de médio porte.",
    features: [
      "16 portas Gigabit Ethernet",
      "Gerenciamento Easy Smart via web",
      "VLANs para segmentação de rede",
      "QoS para priorização de tráfego",
      "IGMP Snooping para multicast",
      "Ventilação inteligente e silenciosa"
    ],
    specifications: {
      "Marca": "TP-Link",
      "Modelo": "TL-SG116E",
      "Tipo": "Switch Easy Smart gerenciável",
      "Portas": "16 portas Gigabit RJ45",
      "Velocidade": "10/100/1000 Mbps",
      "Capacidade": "32 Gbps",
      "Gerenciamento": "Web-based",
      "Gabinete": "Metal 19\" rack",
      "Garantia": "Vitalícia limitada"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "switch-tplink-sg1024d-24-portas",
    name: "Switch TP-Link TL-SG1024D 24 Portas Gigabit Rack 19\"",
    shortName: "TP-Link SG1024D",
    category: "switch",
    categoryIcon: Network,
    description: "Switch de 24 portas Gigabit TP-Link para rack 19\". Solução robusta para empresas que necessitam de muitas conexões cabeadas em data center ou sala de servidores.",
    features: [
      "24 portas Gigabit Ethernet",
      "Design para rack 19\" 1U",
      "Capacidade de switching de 48 Gbps",
      "Auto MDI/MDIX em todas as portas",
      "Controle de fluxo IEEE 802.3x",
      "Ventilação frontal para rack"
    ],
    specifications: {
      "Marca": "TP-Link",
      "Modelo": "TL-SG1024D",
      "Tipo": "Switch não gerenciável rack",
      "Portas": "24 portas Gigabit RJ45",
      "Velocidade": "10/100/1000 Mbps",
      "Capacidade": "48 Gbps",
      "Formato": "Rack 19\" 1U",
      "Consumo": "15.84W máximo",
      "Garantia": "Vitalícia limitada"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "switch-intelbras-sg2404poe-gigabit",
    name: "Switch Intelbras SG 2404 PoE Gigabit 24 Portas Gerenciável",
    shortName: "Intelbras SG 2404 PoE",
    category: "switch",
    categoryIcon: Network,
    description: "Switch Gigabit gerenciável Intelbras com PoE em 24 portas. Ideal para alimentar câmeras IP, telefones VoIP e access points sem necessidade de fonte externa.",
    features: [
      "24 portas Gigabit com PoE+",
      "4 portas SFP Gigabit para fibra",
      "Budget PoE de até 370W",
      "Gerenciamento L2+ completo",
      "VLANs, Link Aggregation, Spanning Tree",
      "Interface web e CLI"
    ],
    specifications: {
      "Marca": "Intelbras",
      "Modelo": "SG 2404 PoE",
      "Tipo": "Switch gerenciável L2+ com PoE",
      "Portas": "24 Gigabit PoE+ + 4 SFP",
      "PoE": "IEEE 802.3af/at (370W total)",
      "Capacidade": "56 Gbps",
      "Formato": "Rack 19\" 1U",
      "Gerenciamento": "Web, CLI, SNMP",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },

  // ==================== IMPRESSORAS ====================
  {
    id: "impressora-epson-ecotank-l4260",
    name: "Multifuncional Epson EcoTank L4260 Tanque de Tinta Duplex WiFi",
    shortName: "Epson EcoTank L4260",
    category: "impressora",
    categoryIcon: Printer,
    description: "Multifuncional Epson EcoTank com tanque de tinta e impressão duplex automática. Custo por página extremamente baixo, ideal para empresas com alto volume de impressão.",
    features: [
      "Sistema EcoTank de tanque de tinta",
      "Impressão duplex automática",
      "WiFi Direct e conexão sem fio",
      "Scanner e copiadora integrados",
      "Até 7.500 páginas preto / 6.000 coloridas",
      "App Epson Smart Panel"
    ],
    specifications: {
      "Marca": "Epson",
      "Modelo": "EcoTank L4260",
      "Tipo": "Multifuncional tanque de tinta",
      "Funções": "Impressão, cópia, scanner",
      "Velocidade": "33 ppm preto, 15 ppm cor",
      "Resolução": "5760 x 1440 dpi",
      "Conectividade": "WiFi, WiFi Direct, USB",
      "Duplex": "Automático",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "impressora-epson-ecotank-l5590",
    name: "Multifuncional Epson EcoTank L5590 Tanque de Tinta ADF Fax",
    shortName: "Epson EcoTank L5590",
    category: "impressora",
    categoryIcon: Printer,
    description: "Multifuncional Epson EcoTank com alimentador automático de documentos e fax. Solução completa para escritórios que necessitam de todas as funções em um único equipamento.",
    features: [
      "Sistema EcoTank econômico",
      "ADF para 35 folhas",
      "Fax integrado",
      "Impressão duplex automática",
      "WiFi Direct e Ethernet",
      "Alto rendimento de páginas"
    ],
    specifications: {
      "Marca": "Epson",
      "Modelo": "EcoTank L5590",
      "Tipo": "Multifuncional tanque de tinta",
      "Funções": "Impressão, cópia, scanner, fax",
      "Velocidade": "25 ppm preto, 12 ppm cor",
      "ADF": "35 folhas",
      "Conectividade": "WiFi, Ethernet, USB",
      "Duplex": "Automático",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "impressora-brother-dcpl1632w-laser",
    name: "Multifuncional Laser Brother DCP-L1632W Monocromática WiFi",
    shortName: "Brother DCP-L1632W",
    category: "impressora",
    categoryIcon: Printer,
    description: "Multifuncional laser Brother monocromática com WiFi. Ideal para escritórios que necessitam de impressão rápida e econômica em preto e branco.",
    features: [
      "Tecnologia laser monocromática",
      "Velocidade de até 21 ppm",
      "WiFi integrado",
      "Copiadora e scanner inclusos",
      "Toner de alto rendimento",
      "Ciclo mensal de até 10.000 páginas"
    ],
    specifications: {
      "Marca": "Brother",
      "Modelo": "DCP-L1632W",
      "Tipo": "Multifuncional laser monocromática",
      "Funções": "Impressão, cópia, scanner",
      "Velocidade": "21 ppm",
      "Resolução": "2400 x 600 dpi",
      "Conectividade": "WiFi, USB",
      "Ciclo Mensal": "10.000 páginas",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "impressora-hp-m107w-laser",
    name: "Impressora Laser HP M107w Monocromática WiFi Compacta",
    shortName: "HP LaserJet M107w",
    category: "impressora",
    categoryIcon: Printer,
    description: "Impressora laser HP compacta e econômica. Perfeita para pequenos escritórios que necessitam de impressão rápida em preto e branco com custo reduzido.",
    features: [
      "Impressão laser monocromática",
      "Velocidade de até 20 ppm",
      "WiFi para impressão móvel",
      "Design compacto para economia de espaço",
      "HP Smart App integrado",
      "Baixo consumo energético"
    ],
    specifications: {
      "Marca": "HP",
      "Modelo": "LaserJet M107w",
      "Tipo": "Impressora laser monocromática",
      "Funções": "Impressão",
      "Velocidade": "20 ppm",
      "Resolução": "1200 x 1200 dpi",
      "Conectividade": "WiFi, USB",
      "Ciclo Mensal": "8.000 páginas",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "impressora-brother-dcpl5662dn-laser",
    name: "Multifuncional Laser Brother DCP-L5662DN Monocromática Duplex",
    shortName: "Brother DCP-L5662DN",
    category: "impressora",
    categoryIcon: Printer,
    description: "Multifuncional laser Brother de alto desempenho com impressão duplex automática. Ideal para departamentos e empresas com alto volume de impressão.",
    features: [
      "Alta velocidade de 42 ppm",
      "Impressão duplex automática",
      "Scanner com ADF de 70 folhas",
      "Toner de altíssimo rendimento",
      "Ciclo mensal de até 80.000 páginas",
      "Conectividade Ethernet e USB"
    ],
    specifications: {
      "Marca": "Brother",
      "Modelo": "DCP-L5662DN",
      "Tipo": "Multifuncional laser monocromática",
      "Funções": "Impressão, cópia, scanner",
      "Velocidade": "42 ppm",
      "ADF": "70 folhas",
      "Conectividade": "Ethernet, USB",
      "Duplex": "Automático",
      "Ciclo Mensal": "80.000 páginas",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.category === category);
}

export function getRelatedProducts(product: Product, limit: number = 4): Product[] {
  return products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
}

export function getPreviousProduct(currentId: string): Product | undefined {
  const currentIndex = products.findIndex(p => p.id === currentId);
  if (currentIndex <= 0) return undefined;
  return products[currentIndex - 1];
}

export function getNextProduct(currentId: string): Product | undefined {
  const currentIndex = products.findIndex(p => p.id === currentId);
  if (currentIndex === -1 || currentIndex >= products.length - 1) return undefined;
  return products[currentIndex + 1];
}
