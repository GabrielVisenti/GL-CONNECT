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
  // TVs
  {
    id: "tv-samsung-50-crystal",
    name: "TV Samsung 50\" Crystal UHD 4K - Smart TV Wi-Fi",
    shortName: "Samsung 50\" Crystal UHD",
    category: "tv",
    categoryIcon: Tv,
    description: "Experimente uma qualidade de imagem excepcional com a TV Samsung Crystal UHD 4K de 50 polegadas. Equipada com tecnologia Crystal Processor 4K, esta Smart TV oferece cores vibrantes e detalhes nítidos. Perfeita para salas de reunião, recepções corporativas, auditórios e ambientes educacionais. Com sistema operacional Tizen, acesso a streaming e conectividade completa via Wi-Fi e Bluetooth.",
    features: [
      "Resolução 4K UHD (3840x2160) para imagens ultra nítidas",
      "Crystal Processor 4K com upscaling inteligente",
      "Smart TV com Tizen OS e acesso a apps de streaming",
      "Conectividade Wi-Fi, Bluetooth, HDMI e USB",
      "Design slim e moderno ideal para ambientes corporativos",
      "Garantia de 12 meses com suporte técnico especializado"
    ],
    specifications: {
      "Marca": "Samsung",
      "Modelo": "AU7700",
      "Polegadas": "50\"",
      "Resolução": "4K UHD (3840x2160)",
      "Tecnologia de Tela": "LED Crystal UHD",
      "Sistema Operacional": "Tizen",
      "Conectividade": "Wi-Fi, Bluetooth, 3x HDMI, 2x USB",
      "Potência do Som": "20W (2 canais)",
      "HDR": "HDR10+",
      "Dimensões": "111.8 x 64.4 x 5.9 cm",
      "Peso": "11.4 kg",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "tv-lg-55-nanocell",
    name: "TV LG 55\" NanoCell 4K - Smart TV ThinQ AI",
    shortName: "LG 55\" NanoCell",
    category: "tv",
    categoryIcon: Tv,
    description: "A TV LG NanoCell oferece cores puras e precisas através da tecnologia NanoCell, que filtra e refina cores para uma experiência visual superior. Ideal para apresentações corporativas, salas de treinamento e ambientes que exigem qualidade premium de imagem.",
    features: [
      "Tecnologia NanoCell para cores puras e realistas",
      "Processador α7 Gen 5 AI 4K com upscaling inteligente",
      "ThinQ AI com comandos de voz integrados",
      "Dolby Vision IQ e Dolby Atmos",
      "Game Optimizer e taxa de atualização de 60Hz",
      "Suporte e garantia estendida disponível"
    ],
    specifications: {
      "Marca": "LG",
      "Modelo": "55NANO75SPA",
      "Polegadas": "55\"",
      "Resolução": "4K UHD (3840x2160)",
      "Tecnologia de Tela": "NanoCell",
      "Sistema Operacional": "webOS 22",
      "Conectividade": "Wi-Fi, Bluetooth, 4x HDMI, 2x USB",
      "Potência do Som": "20W",
      "HDR": "HDR10 Pro, Dolby Vision IQ",
      "Dimensões": "123.2 x 71.6 x 8.7 cm",
      "Peso": "14.5 kg",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "tv-sony-65-bravia",
    name: "TV Sony 65\" BRAVIA XR - Google TV 4K HDR",
    shortName: "Sony 65\" BRAVIA XR",
    category: "tv",
    categoryIcon: Tv,
    description: "Experiência cinematográfica com o processador cognitivo XR da Sony. Esta TV oferece qualidade de imagem excepcional com tecnologia Full Array LED e Google TV integrado. Perfeita para salas de diretoria, auditórios e espaços premium.",
    features: [
      "Processador Cognitivo XR que pensa como humanos",
      "Full Array LED com controle de zona preciso",
      "Google TV com assistente de voz integrado",
      "Dolby Vision e Dolby Atmos",
      "HDMI 2.1 com suporte a 4K 120fps",
      "Ideal para videoconferências de alta qualidade"
    ],
    specifications: {
      "Marca": "Sony",
      "Modelo": "XR-65X90J",
      "Polegadas": "65\"",
      "Resolução": "4K UHD (3840x2160)",
      "Tecnologia de Tela": "Full Array LED",
      "Sistema Operacional": "Google TV",
      "Conectividade": "Wi-Fi, Bluetooth, 4x HDMI 2.1, 3x USB",
      "Potência do Som": "30W",
      "HDR": "HDR10, Dolby Vision, HLG",
      "Dimensões": "144.5 x 83.3 x 7.1 cm",
      "Peso": "23.9 kg",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "tv-philips-43-hd",
    name: "TV Philips 43\" Full HD - Smart TV com Netflix",
    shortName: "Philips 43\" Full HD",
    category: "tv",
    categoryIcon: Tv,
    description: "Solução econômica e eficiente para escritórios e pequenos ambientes corporativos. TV Full HD com Smart TV integrado e acesso direto aos principais apps de streaming.",
    features: [
      "Resolução Full HD 1080p",
      "Smart TV com Saphi OS",
      "Pixel Plus HD para melhor nitidez",
      "Conectividade completa HDMI e USB",
      "Consumo energético eficiente",
      "Ótimo custo-benefício para empresas"
    ],
    specifications: {
      "Marca": "Philips",
      "Modelo": "43PFG6825/78",
      "Polegadas": "43\"",
      "Resolução": "Full HD (1920x1080)",
      "Tecnologia de Tela": "LED",
      "Sistema Operacional": "Saphi Smart TV",
      "Conectividade": "Wi-Fi, 3x HDMI, 2x USB",
      "Potência do Som": "16W",
      "HDR": "Não",
      "Dimensões": "96.5 x 56.2 x 8.4 cm",
      "Peso": "7.6 kg",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "tv-tcl-75-qled",
    name: "TV TCL 75\" QLED 4K - Android TV 11",
    shortName: "TCL 75\" QLED",
    category: "tv",
    categoryIcon: Tv,
    description: "Grande formato com tecnologia QLED para cores vibrantes e contraste excepcional. Ideal para auditórios, salas de eventos e grandes ambientes corporativos que precisam de impacto visual.",
    features: [
      "Tecnologia QLED com Quantum Dot",
      "Dolby Vision e Dolby Atmos",
      "Android TV 11 com Google Assistant",
      "Modo Game Master Pro",
      "Design slim com bordas finas",
      "Perfeito para apresentações de grande impacto"
    ],
    specifications: {
      "Marca": "TCL",
      "Modelo": "75C735",
      "Polegadas": "75\"",
      "Resolução": "4K UHD (3840x2160)",
      "Tecnologia de Tela": "QLED",
      "Sistema Operacional": "Android TV 11",
      "Conectividade": "Wi-Fi, Bluetooth, 4x HDMI 2.1, 2x USB",
      "Potência do Som": "40W",
      "HDR": "Dolby Vision, HDR10+, HLG",
      "Dimensões": "167.4 x 96.2 x 8.8 cm",
      "Peso": "29.5 kg",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },

  // Notebooks
  {
    id: "notebook-lenovo-i5",
    name: "Notebook Lenovo IdeaPad 3i i5 11ª Geração 8GB 256GB SSD",
    shortName: "Lenovo IdeaPad i5",
    category: "notebook",
    categoryIcon: Laptop,
    description: "Notebook versátil e eficiente para uso corporativo diário. Equipado com processador Intel Core i5 de 11ª geração, 8GB de RAM e SSD de 256GB, oferece desempenho ideal para tarefas de escritório, gestão de documentos e multitarefas. Perfeito para funcionários de empresas, prefeituras e órgãos públicos.",
    features: [
      "Processador Intel Core i5-1135G7 (até 4.2GHz)",
      "Memória RAM 8GB DDR4 expansível",
      "SSD 256GB NVMe para inicialização rápida",
      "Tela 15.6\" Full HD antirreflexo",
      "Webcam com privacy shutter para segurança",
      "Bateria de longa duração (até 7 horas)"
    ],
    specifications: {
      "Marca": "Lenovo",
      "Modelo": "IdeaPad 3i 82MD0009BR",
      "Processador": "Intel Core i5-1135G7 (11ª Geração)",
      "Memória RAM": "8GB DDR4 (expansível até 16GB)",
      "Armazenamento": "SSD 256GB NVMe",
      "Tela": "15.6\" Full HD (1920x1080) LED",
      "Placa de Vídeo": "Intel Iris Xe Graphics",
      "Sistema Operacional": "Windows 11 Home",
      "Conectividade": "Wi-Fi 6, Bluetooth 5.0, USB-C, USB 3.2, HDMI",
      "Bateria": "Até 7 horas de uso",
      "Peso": "1.7 kg",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "notebook-dell-inspiron-i7",
    name: "Notebook Dell Inspiron 15 i7 12ª Geração 16GB 512GB SSD",
    shortName: "Dell Inspiron i7",
    category: "notebook",
    categoryIcon: Laptop,
    description: "Alto desempenho para profissionais exigentes. Com processador Intel Core i7 de 12ª geração e 16GB de RAM, este notebook é ideal para tarefas pesadas, edição de vídeos, análise de dados e múltiplas aplicações simultâneas.",
    features: [
      "Processador Intel Core i7-1255U (12ª Geração)",
      "16GB RAM DDR4 para multitarefa avançada",
      "SSD 512GB NVMe M.2 de alta velocidade",
      "Tela 15.6\" Full HD WVA com bordas finas",
      "Teclado retroiluminado para uso em ambientes escuros",
      "Design premium em alumínio escovado"
    ],
    specifications: {
      "Marca": "Dell",
      "Modelo": "Inspiron 15 i1100-A30P",
      "Processador": "Intel Core i7-1255U (12ª Geração)",
      "Memória RAM": "16GB DDR4 (expansível até 32GB)",
      "Armazenamento": "SSD 512GB NVMe M.2",
      "Tela": "15.6\" Full HD (1920x1080) WVA",
      "Placa de Vídeo": "Intel Iris Xe Graphics",
      "Sistema Operacional": "Windows 11 Pro",
      "Conectividade": "Wi-Fi 6E, Bluetooth 5.2, USB-C Thunderbolt 4, USB 3.2, HDMI 1.4",
      "Bateria": "Até 8 horas de uso",
      "Peso": "1.65 kg",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "notebook-acer-aspire-ryzen5",
    name: "Notebook Acer Aspire 5 Ryzen 5 5500U 8GB 256GB SSD",
    shortName: "Acer Aspire Ryzen 5",
    category: "notebook",
    categoryIcon: Laptop,
    description: "Excelente custo-benefício com processador AMD Ryzen 5. Ideal para uso corporativo geral, navegação web, pacote Office e videoconferências. Perfeito para equipar equipes completas.",
    features: [
      "Processador AMD Ryzen 5 5500U (6 núcleos)",
      "Gráficos Radeon integrados",
      "Tela 15.6\" Full HD com tecnologia ComfyView",
      "Carregamento rápido (50% em 30 minutos)",
      "Conexão Wi-Fi 6 de última geração",
      "Ótimo para trabalho remoto e híbrido"
    ],
    specifications: {
      "Marca": "Acer",
      "Modelo": "Aspire 5 A515-45-R4ZJ",
      "Processador": "AMD Ryzen 5 5500U (até 4.0GHz)",
      "Memória RAM": "8GB DDR4 (expansível até 32GB)",
      "Armazenamento": "SSD 256GB NVMe",
      "Tela": "15.6\" Full HD (1920x1080) IPS",
      "Placa de Vídeo": "AMD Radeon Graphics",
      "Sistema Operacional": "Windows 11 Home",
      "Conectividade": "Wi-Fi 6, Bluetooth 5.0, USB-C, USB 3.2, HDMI",
      "Bateria": "Até 7.5 horas de uso",
      "Peso": "1.8 kg",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "notebook-hp-probook-i5",
    name: "Notebook HP ProBook 440 G9 i5 12ª Geração 8GB 256GB SSD",
    shortName: "HP ProBook i5",
    category: "notebook",
    categoryIcon: Laptop,
    description: "Linha profissional HP ProBook com segurança e confiabilidade para ambientes corporativos. Construção robusta em alumínio, certificações militares de durabilidade e recursos de segurança avançados.",
    features: [
      "Linha ProBook - construído para negócios",
      "Certificação MIL-STD-810H de durabilidade",
      "TPM 2.0 e HP Sure Start para segurança",
      "Tela antirreflexo para trabalho contínuo",
      "Teclado resistente a derramamentos",
      "Suporte técnico empresarial HP"
    ],
    specifications: {
      "Marca": "HP",
      "Modelo": "ProBook 440 G9",
      "Processador": "Intel Core i5-1235U (12ª Geração)",
      "Memória RAM": "8GB DDR4 (expansível até 32GB)",
      "Armazenamento": "SSD 256GB NVMe",
      "Tela": "14\" Full HD (1920x1080) SVA",
      "Placa de Vídeo": "Intel Iris Xe Graphics",
      "Sistema Operacional": "Windows 11 Pro",
      "Conectividade": "Wi-Fi 6E, Bluetooth 5.2, USB-C, USB-A, HDMI, RJ-45",
      "Bateria": "Até 11 horas de uso",
      "Peso": "1.38 kg",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "notebook-asus-vivobook-i3",
    name: "Notebook Asus VivoBook 15 i3 10ª Geração 4GB 128GB SSD",
    shortName: "Asus VivoBook i3",
    category: "notebook",
    categoryIcon: Laptop,
    description: "Solução econômica para tarefas básicas corporativas. Ideal para uso em secretarias, recepções e atividades que requerem processamento leve como navegação web, e-mails e documentos.",
    features: [
      "Design fino e leve para mobilidade",
      "Tela NanoEdge com bordas ultrafinas",
      "Inicialização rápida com SSD",
      "Consumo energético eficiente",
      "Excelente custo-benefício",
      "Ideal para aquisições em grande volume"
    ],
    specifications: {
      "Marca": "Asus",
      "Modelo": "VivoBook 15 X515JA",
      "Processador": "Intel Core i3-1005G1 (10ª Geração)",
      "Memória RAM": "4GB DDR4 (expansível até 12GB)",
      "Armazenamento": "SSD 128GB NVMe",
      "Tela": "15.6\" HD (1366x768) LED",
      "Placa de Vídeo": "Intel UHD Graphics",
      "Sistema Operacional": "Windows 11 Home",
      "Conectividade": "Wi-Fi 5, Bluetooth 4.2, USB-C, USB 3.2, HDMI",
      "Bateria": "Até 6 horas de uso",
      "Peso": "1.8 kg",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },

  // Monitores
  {
    id: "monitor-lg-27-ultrawide",
    name: "Monitor LG 27\" UltraWide Full HD IPS 75Hz",
    shortName: "LG 27\" UltraWide",
    category: "monitor",
    categoryIcon: Monitor,
    description: "Monitor ultrawide perfeito para multitarefas e produtividade. Com proporção 21:9, permite trabalhar com múltiplas janelas lado a lado. Ideal para traders, designers, analistas e profissionais que precisam de mais espaço de tela.",
    features: [
      "Formato 21:9 UltraWide para máxima produtividade",
      "Painel IPS com ângulos de visão de 178°",
      "Taxa de atualização de 75Hz",
      "AMD FreeSync para fluidez nas imagens",
      "Modo de leitura e redução de luz azul",
      "Ajuste de altura e inclinação"
    ],
    specifications: {
      "Marca": "LG",
      "Modelo": "29WP500-B",
      "Tamanho": "27\" (29\" UltraWide)",
      "Resolução": "2560x1080 Full HD",
      "Tipo de Painel": "IPS",
      "Taxa de Atualização": "75Hz",
      "Tempo de Resposta": "5ms (GtG)",
      "Brilho": "250 cd/m²",
      "Contraste": "1000:1",
      "Conectividade": "HDMI, DisplayPort",
      "Recursos": "AMD FreeSync, On-Screen Control",
      "Dimensões": "69.3 x 42.9 x 21.5 cm",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "monitor-dell-24-fhd",
    name: "Monitor Dell 24\" Full HD IPS HDMI VGA",
    shortName: "Dell 24\" Full HD",
    category: "monitor",
    categoryIcon: Monitor,
    description: "Monitor profissional Dell com qualidade de imagem superior. Painel IPS com cobertura sRGB de 99%, ideal para trabalho com cores precisas, edição de imagens e design gráfico.",
    features: [
      "Painel IPS com 99% sRGB",
      "Ajuste de altura, inclinação e pivô",
      "Flicker-Free e ComfortView para redução de fadiga",
      "Conectividade HDMI, DisplayPort e VGA",
      "Design sem bordas para setup multi-monitor",
      "Certificação TÜV de baixa emissão de luz azul"
    ],
    specifications: {
      "Marca": "Dell",
      "Modelo": "P2422H",
      "Tamanho": "24\"",
      "Resolução": "1920x1080 Full HD",
      "Tipo de Painel": "IPS",
      "Taxa de Atualização": "60Hz",
      "Tempo de Resposta": "8ms (Normal) / 5ms (Fast)",
      "Brilho": "250 cd/m²",
      "Contraste": "1000:1",
      "Conectividade": "HDMI, DisplayPort, VGA, USB 3.2",
      "Recursos": "Altura ajustável, Pivô, Inclinação",
      "Dimensões": "53.7 x 41.1 x 18.5 cm",
      "Garantia": "36 meses (3 anos)"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "monitor-samsung-32-curvo",
    name: "Monitor Samsung 32\" Curvo Full HD VA 75Hz",
    shortName: "Samsung 32\" Curvo",
    category: "monitor",
    categoryIcon: Monitor,
    description: "Monitor curvo de 32 polegadas para experiência imersiva. Painel VA com alto contraste e cores vibrantes. Ideal para salas de videoconferência, apresentações e ambientes que precisam de telas grandes.",
    features: [
      "Tela curva 1800R para imersão total",
      "Painel VA com contraste 3000:1",
      "AMD FreeSync para eliminação de travamentos",
      "Eye Saver Mode para proteção ocular",
      "Design sem bordas nas 3 laterais",
      "Base em V compacta e elegante"
    ],
    specifications: {
      "Marca": "Samsung",
      "Modelo": "LC32T550FDLXZD",
      "Tamanho": "32\"",
      "Resolução": "1920x1080 Full HD",
      "Tipo de Painel": "VA Curvo (1800R)",
      "Taxa de Atualização": "75Hz",
      "Tempo de Resposta": "5ms",
      "Brilho": "250 cd/m²",
      "Contraste": "3000:1",
      "Conectividade": "HDMI, DisplayPort",
      "Recursos": "AMD FreeSync, Eye Saver Mode, Flicker Free",
      "Dimensões": "71.4 x 52.2 x 23.6 cm",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "monitor-aoc-22-led",
    name: "Monitor AOC 22\" LED Full HD HDMI VGA",
    shortName: "AOC 22\" LED",
    category: "monitor",
    categoryIcon: Monitor,
    description: "Monitor econômico e confiável para uso corporativo geral. Tamanho compacto de 22 polegadas ideal para escritórios com espaço limitado. Ótimo custo-benefício para equipar múltiplas estações de trabalho.",
    features: [
      "Tecnologia Flicker-Free para conforto visual",
      "Low Blue Light para redução de fadiga ocular",
      "Consumo energético eficiente",
      "Suporte VESA para montagem em parede",
      "Conectividade HDMI e VGA",
      "Garantia de 3 anos"
    ],
    specifications: {
      "Marca": "AOC",
      "Modelo": "22B2H",
      "Tamanho": "21.5\"",
      "Resolução": "1920x1080 Full HD",
      "Tipo de Painel": "VA",
      "Taxa de Atualização": "75Hz",
      "Tempo de Resposta": "5ms",
      "Brilho": "250 cd/m²",
      "Contraste": "3000:1",
      "Conectividade": "HDMI, VGA",
      "Recursos": "Flicker-Free, Low Blue Light, VESA 100x100",
      "Dimensões": "48.9 x 37.5 x 18.5 cm",
      "Garantia": "36 meses (3 anos)"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "monitor-benq-27-qhd",
    name: "Monitor BenQ 27\" QHD IPS 60Hz Design Professional",
    shortName: "BenQ 27\" QHD",
    category: "monitor",
    categoryIcon: Monitor,
    description: "Monitor profissional com resolução QHD para designers e profissionais criativos. Cobertura de 100% sRGB e Rec.709, calibração de fábrica e modos de cor específicos para diferentes trabalhos.",
    features: [
      "Resolução QHD (2560x1440) para mais detalhes",
      "100% sRGB e Rec.709 calibrado de fábrica",
      "Tecnologia IPS com 10-bit color",
      "Modos CAD/CAM, Animação e Design",
      "Dual View para comparação lado a lado",
      "Altura ajustável com pivô 90°"
    ],
    specifications: {
      "Marca": "BenQ",
      "Modelo": "PD2700U",
      "Tamanho": "27\"",
      "Resolução": "2560x1440 QHD",
      "Tipo de Painel": "IPS",
      "Taxa de Atualização": "60Hz",
      "Tempo de Resposta": "5ms",
      "Brilho": "350 cd/m²",
      "Contraste": "1000:1",
      "Conectividade": "HDMI 2.0, DisplayPort 1.4, USB-C",
      "Recursos": "100% sRGB, Altura ajustável, Pivô, USB-C Power Delivery 65W",
      "Dimensões": "61.3 x 56.5 x 24 cm",
      "Garantia": "36 meses (3 anos)"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },

  // Teclados
  {
    id: "teclado-logitech-k120",
    name: "Teclado Logitech K120 USB Resistente a Derramamentos",
    shortName: "Logitech K120",
    category: "teclado",
    categoryIcon: Keyboard,
    description: "Teclado com fio confiável e durável para uso corporativo. Design resistente a derramamentos de líquidos, teclas silenciosas e layout ABNT2 completo. Perfeito para escritórios, call centers e uso intensivo.",
    features: [
      "Resistente a derramamentos de líquidos",
      "Teclas silenciosas para ambientes compartilhados",
      "Layout ABNT2 com teclas de função",
      "Construção robusta e durável",
      "Plug and play via USB",
      "Garantia de 3 anos Logitech"
    ],
    specifications: {
      "Marca": "Logitech",
      "Modelo": "K120",
      "Tipo": "Com fio USB",
      "Layout": "ABNT2 (Português Brasil)",
      "Resistência": "Resistente a derramamentos",
      "Conectividade": "USB 2.0",
      "Compatibilidade": "Windows, Linux",
      "Teclas de Atalho": "Teclas de função F1-F12",
      "Cabo": "1.5 metros",
      "Dimensões": "45 x 15.5 x 2.3 cm",
      "Peso": "550g",
      "Garantia": "36 meses (3 anos)"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "teclado-redragon-mecanico",
    name: "Teclado Mecânico Redragon Kumara RGB Switch Outemu Blue",
    shortName: "Redragon Kumara RGB",
    category: "teclado",
    categoryIcon: Keyboard,
    description: "Teclado mecânico com iluminação RGB para maior produtividade e conforto. Switches mecânicos Outemu Blue proporcionam feedback tátil e sonoro. Ideal para digitação intensa e profissionais que valorizam precisão.",
    features: [
      "Switches mecânicos Outemu Blue",
      "Iluminação RGB personalizável",
      "Construção em metal durável",
      "Teclas anti-ghosting completo",
      "Keycaps de alta qualidade",
      "Cabo USB removível"
    ],
    specifications: {
      "Marca": "Redragon",
      "Modelo": "Kumara K552",
      "Tipo": "Mecânico com fio USB",
      "Layout": "ABNT2 (Português Brasil)",
      "Switches": "Outemu Blue (Mecânico)",
      "Iluminação": "RGB personalizável",
      "Conectividade": "USB 2.0",
      "Compatibilidade": "Windows, Mac, Linux",
      "Estrutura": "Base de metal",
      "Cabo": "1.8 metros removível",
      "Dimensões": "36.2 x 13.3 x 4 cm",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "teclado-microsoft-600",
    name: "Teclado Microsoft Wired 600 USB Preto ABNT2",
    shortName: "Microsoft Wired 600",
    category: "teclado",
    categoryIcon: Keyboard,
    description: "Teclado básico e confiável da Microsoft. Design simples e eficiente para uso corporativo diário. Excelente para aquisições em grande volume com garantia Microsoft.",
    features: [
      "Design ergonômico e confortável",
      "Teclas de acesso rápido",
      "Qualidade Microsoft garantida",
      "Plug and play instantâneo",
      "Silencioso para ambientes de trabalho",
      "Ótimo custo-benefício"
    ],
    specifications: {
      "Marca": "Microsoft",
      "Modelo": "Wired Keyboard 600",
      "Tipo": "Com fio USB",
      "Layout": "ABNT2 (Português Brasil)",
      "Conectividade": "USB 2.0",
      "Compatibilidade": "Windows 7 ou superior",
      "Teclas de Atalho": "Teclas multimídia",
      "Cabo": "1.8 metros",
      "Cor": "Preto",
      "Dimensões": "44.4 x 15.5 x 2.7 cm",
      "Peso": "481g",
      "Garantia": "36 meses (3 anos)"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "teclado-dell-kb216",
    name: "Teclado Dell KB216 Multimídia USB ABNT2",
    shortName: "Dell KB216",
    category: "teclado",
    categoryIcon: Keyboard,
    description: "Teclado multimídia Dell com teclas de atalho para controle de áudio e vídeo. Design resistente e confortável para uso prolongado. Compatível com computadores Dell e outras marcas.",
    features: [
      "Teclas multimídia integradas",
      "Design de baixo perfil confortável",
      "Resistente e durável",
      "Compatível com Windows e Linux",
      "Teclas silenciosas",
      "Qualidade Dell empresarial"
    ],
    specifications: {
      "Marca": "Dell",
      "Modelo": "KB216",
      "Tipo": "Com fio USB",
      "Layout": "ABNT2 (Português Brasil)",
      "Conectividade": "USB 2.0",
      "Compatibilidade": "Windows, Linux, Chrome OS",
      "Teclas de Atalho": "Multimídia (play, pause, volume)",
      "Cabo": "1.8 metros",
      "Cor": "Preto",
      "Dimensões": "44.4 x 12.2 x 2.4 cm",
      "Peso": "500g",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "teclado-fortrek-sem-fio",
    name: "Teclado e Mouse Sem Fio Fortrek WK301 2.4GHz",
    shortName: "Fortrek WK301 Wireless",
    category: "teclado",
    categoryIcon: Keyboard,
    description: "Kit teclado e mouse sem fio para ambientes livres de cabos. Conexão wireless 2.4GHz estável até 10 metros. Design compacto e econômico, ideal para escritórios modernos.",
    features: [
      "Kit completo teclado + mouse",
      "Conexão wireless 2.4GHz",
      "Alcance de até 10 metros",
      "Receptor USB nano",
      "Economiza espaço na mesa",
      "Bateria de longa duração"
    ],
    specifications: {
      "Marca": "Fortrek",
      "Modelo": "WK301",
      "Tipo": "Sem fio 2.4GHz",
      "Layout": "ABNT2 (Português Brasil)",
      "Conectividade": "Receptor USB 2.4GHz",
      "Compatibilidade": "Windows, Mac, Linux",
      "Alcance": "Até 10 metros",
      "Alimentação": "2x AAA (teclado), 1x AA (mouse)",
      "Cor": "Preto",
      "Dimensões": "44 x 13 x 2.5 cm",
      "Peso": "400g (teclado)",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },

  // Mouse
  {
    id: "mouse-logitech-g203",
    name: "Mouse Gamer Logitech G203 RGB 8000 DPI 6 Botões",
    shortName: "Logitech G203 RGB",
    category: "mouse",
    categoryIcon: Mouse,
    description: "Mouse gamer de alta precisão também perfeito para uso profissional. Sensor óptico de 8000 DPI, iluminação RGB personalizável e design ergonômico confortável para longas jornadas de trabalho.",
    features: [
      "Sensor óptico de 8000 DPI ajustável",
      "6 botões programáveis",
      "Iluminação RGB LIGHTSYNC",
      "Design ergonômico confortável",
      "Cabo USB resistente",
      "Software Logitech G HUB"
    ],
    specifications: {
      "Marca": "Logitech",
      "Modelo": "G203 LIGHTSYNC",
      "Tipo": "Com fio USB",
      "Sensor": "Óptico 8000 DPI",
      "Botões": "6 botões programáveis",
      "Iluminação": "RGB LIGHTSYNC personalizável",
      "Taxa de Relatório": "1000 Hz (1ms)",
      "Conectividade": "USB 2.0",
      "Compatibilidade": "Windows, Mac, Chrome OS",
      "Cabo": "2.1 metros",
      "Dimensões": "11.6 x 6.2 x 3.8 cm",
      "Garantia": "24 meses (2 anos)"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "mouse-microsoft-basic",
    name: "Mouse Óptico Microsoft Basic USB 800 DPI",
    shortName: "Microsoft Basic",
    category: "mouse",
    categoryIcon: Mouse,
    description: "Mouse óptico básico e confiável da Microsoft. Design ambidestro simples para uso corporativo diário. Excelente para aquisições em grande volume com garantia Microsoft.",
    features: [
      "Design ambidestro universal",
      "Sensor óptico preciso",
      "Plug and play instantâneo",
      "Rolagem suave e silenciosa",
      "Qualidade Microsoft garantida",
      "Extremamente durável"
    ],
    specifications: {
      "Marca": "Microsoft",
      "Modelo": "Basic Optical Mouse",
      "Tipo": "Com fio USB",
      "Sensor": "Óptico 800 DPI",
      "Botões": "3 botões (esquerdo, direito, scroll)",
      "Conectividade": "USB 2.0",
      "Compatibilidade": "Windows, Mac, Linux",
      "Design": "Ambidestro",
      "Cabo": "1.5 metros",
      "Cor": "Preto",
      "Dimensões": "11 x 5.8 x 3.8 cm",
      "Garantia": "36 meses (3 anos)"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "mouse-logitech-m170",
    name: "Mouse Sem Fio Logitech M170 Wireless 1000 DPI",
    shortName: "Logitech M170 Wireless",
    category: "mouse",
    categoryIcon: Mouse,
    description: "Mouse sem fio compacto e confiável. Conexão wireless estável, bateria de longa duração e design confortável. Ideal para ambientes corporativos sem cabos.",
    features: [
      "Conexão wireless 2.4GHz confiável",
      "Bateria de até 12 meses",
      "Design confortável para uso prolongado",
      "Alcance de até 10 metros",
      "Receptor USB nano guardado no mouse",
      "Plug and play sem instalação"
    ],
    specifications: {
      "Marca": "Logitech",
      "Modelo": "M170",
      "Tipo": "Sem fio 2.4GHz",
      "Sensor": "Óptico 1000 DPI",
      "Botões": "3 botões + scroll",
      "Conectividade": "Receptor USB 2.4GHz nano",
      "Compatibilidade": "Windows, Mac, Linux, Chrome OS",
      "Alcance": "Até 10 metros",
      "Alimentação": "1x AA (até 12 meses)",
      "Dimensões": "9.9 x 6 x 3.9 cm",
      "Peso": "75g (sem bateria)",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "mouse-dell-ms116",
    name: "Mouse Óptico Dell MS116 USB 1000 DPI",
    shortName: "Dell MS116",
    category: "mouse",
    categoryIcon: Mouse,
    description: "Mouse óptico Dell com design ergonômico e cliques silenciosos. Perfeito para uso corporativo diário em escritórios, escolas e ambientes empresariais.",
    features: [
      "Design ergonômico confortável",
      "Cliques silenciosos",
      "Sensor óptico preciso",
      "Compatível com Dell e outras marcas",
      "Durável e confiável",
      "Qualidade Dell empresarial"
    ],
    specifications: {
      "Marca": "Dell",
      "Modelo": "MS116",
      "Tipo": "Com fio USB",
      "Sensor": "Óptico 1000 DPI",
      "Botões": "3 botões + scroll",
      "Conectividade": "USB 2.0",
      "Compatibilidade": "Windows, Mac, Linux",
      "Design": "Ergonômico destro",
      "Cabo": "1.8 metros",
      "Cor": "Preto",
      "Dimensões": "11.3 x 6.2 x 3.8 cm",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "mouse-hp-x500",
    name: "Mouse Sem Fio HP X500 Wireless 1600 DPI",
    shortName: "HP X500 Wireless",
    category: "mouse",
    categoryIcon: Mouse,
    description: "Mouse wireless HP com design moderno e sensor de alta precisão. Três níveis de DPI ajustáveis e bateria de longa duração. Ideal para profissionais que precisam de mobilidade.",
    features: [
      "3 níveis de DPI (800/1200/1600)",
      "Design fino e moderno",
      "Bateria de até 18 meses",
      "Botão de ajuste de DPI",
      "Scroll preciso com indicador LED",
      "Receptor USB nano compacto"
    ],
    specifications: {
      "Marca": "HP",
      "Modelo": "X500",
      "Tipo": "Sem fio 2.4GHz",
      "Sensor": "Óptico 1600 DPI (ajustável)",
      "Botões": "4 botões + scroll",
      "Conectividade": "Receptor USB 2.4GHz nano",
      "Compatibilidade": "Windows, Mac, Linux",
      "Alcance": "Até 10 metros",
      "Alimentação": "1x AA (até 18 meses)",
      "Dimensões": "11.3 x 6 x 3.7 cm",
      "Peso": "78g",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },

  // Headsets/Fones
  {
    id: "headset-logitech-h390",
    name: "Headset Logitech H390 USB com Microfone e Controle de Volume",
    shortName: "Logitech H390 USB",
    category: "headset",
    categoryIcon: Headphones,
    description: "Headset USB ideal para videoconferências e call centers. Microfone com cancelamento de ruído, controles integrados no cabo e almofadas confortáveis para uso prolongado.",
    features: [
      "Microfone com cancelamento de ruído",
      "Controles de volume e mute no cabo",
      "Plug and play via USB",
      "Almofadas acolchoadas ultra confortáveis",
      "Haste ajustável e rotação do microfone",
      "Certificado para Microsoft Teams e Zoom"
    ],
    specifications: {
      "Marca": "Logitech",
      "Modelo": "H390",
      "Tipo": "Com fio USB",
      "Conectividade": "USB 2.0",
      "Microfone": "Com cancelamento de ruído",
      "Controles": "Volume e mute integrados",
      "Compatibilidade": "Windows, Mac, Chrome OS",
      "Certificações": "Teams, Zoom, Skype",
      "Cabo": "1.9 metros",
      "Peso": "142g",
      "Cor": "Preto",
      "Garantia": "24 meses (2 anos)"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "headset-hyperx-cloud-stinger",
    name: "Headset Gamer HyperX Cloud Stinger com Microfone",
    shortName: "HyperX Cloud Stinger",
    category: "headset",
    categoryIcon: Headphones,
    description: "Headset gamer de alta qualidade também perfeito para uso profissional. Drivers de 50mm para áudio premium, microfone ajustável e conforto excepcional para longas reuniões.",
    features: [
      "Drivers de 50mm para áudio superior",
      "Design leve (275g) para conforto máximo",
      "Microfone ajustável com cancelamento de ruído",
      "Controles de volume na concha",
      "Compatível com PC, PS4, Xbox, Nintendo Switch",
      "Certificado Discord e TeamSpeak"
    ],
    specifications: {
      "Marca": "HyperX",
      "Modelo": "Cloud Stinger",
      "Tipo": "Com fio P2 3.5mm",
      "Drivers": "50mm",
      "Resposta de Frequência": "18Hz - 23kHz",
      "Microfone": "Unidirecional com cancelamento de ruído",
      "Conectividade": "P2 3.5mm (adaptador incluído)",
      "Compatibilidade": "PC, consoles, mobile",
      "Cabo": "1.3 metros",
      "Peso": "275g",
      "Cor": "Preto com detalhes vermelhos",
      "Garantia": "24 meses (2 anos)"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "fone-jbl-tune-510bt",
    name: "Fone de Ouvido JBL Tune 510BT Bluetooth com Microfone",
    shortName: "JBL Tune 510BT",
    category: "headset",
    categoryIcon: Headphones,
    description: "Fone Bluetooth wireless com tecnologia JBL Pure Bass Sound. Bateria de longa duração, dobr dobrável para transporte e microfone integrado para chamadas. Ideal para mobilidade profissional.",
    features: [
      "JBL Pure Bass Sound",
      "Bateria de até 40 horas",
      "Bluetooth 5.0 multipoint",
      "Recarga rápida (5 min = 2 horas)",
      "Design dobrável para transporte",
      "Microfone para chamadas com viva-voz"
    ],
    specifications: {
      "Marca": "JBL",
      "Modelo": "Tune 510BT",
      "Tipo": "Wireless Bluetooth",
      "Conectividade": "Bluetooth 5.0",
      "Drivers": "32mm",
      "Resposta de Frequência": "20Hz - 20kHz",
      "Bateria": "Até 40 horas",
      "Recarga": "USB-C (2 horas completa)",
      "Microfone": "Integrado para chamadas",
      "Peso": "160g",
      "Cor": "Preto",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "headset-trust-gxt-307",
    name: "Headset Trust GXT 307 Ravu Gaming com LED",
    shortName: "Trust GXT 307",
    category: "headset",
    categoryIcon: Headphones,
    description: "Headset econômico com ótimo custo-benefício. Drivers de 50mm, iluminação LED e design over-ear confortável. Ideal para aquisições em volume para equipes.",
    features: [
      "Drivers de 50mm potentes",
      "Iluminação LED azul",
      "Almofadas over-ear confortáveis",
      "Microfone ajustável e flexível",
      "Controle de volume inline",
      "Compatível com múltiplas plataformas"
    ],
    specifications: {
      "Marca": "Trust",
      "Modelo": "GXT 307 Ravu",
      "Tipo": "Com fio P2 3.5mm + USB (LED)",
      "Drivers": "50mm",
      "Resposta de Frequência": "20Hz - 20kHz",
      "Microfone": "Flexível ajustável",
      "Conectividade": "P2 3.5mm",
      "LED": "Azul (alimentado por USB)",
      "Cabo": "2 metros",
      "Peso": "260g",
      "Cor": "Preto com LED azul",
      "Garantia": "24 meses (2 anos)"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "fone-edifier-w820bt",
    name: "Fone Edifier W820BT Bluetooth Over-Ear com Microfone",
    shortName: "Edifier W820BT",
    category: "headset",
    categoryIcon: Headphones,
    description: "Fone over-ear premium com qualidade de áudio Hi-Fi. Bateria de até 80 horas, design dobrável e almofadas de couro sintético para máximo conforto em longas jornadas.",
    features: [
      "Qualidade de áudio Hi-Fi",
      "Bateria de até 80 horas",
      "Bluetooth 5.0 com alcance de 10m",
      "Design dobrável premium",
      "Almofadas de couro sintético",
      "Microfone integrado para chamadas"
    ],
    specifications: {
      "Marca": "Edifier",
      "Modelo": "W820BT",
      "Tipo": "Wireless Bluetooth",
      "Conectividade": "Bluetooth 5.0",
      "Drivers": "40mm",
      "Resposta de Frequência": "20Hz - 20kHz",
      "Bateria": "Até 80 horas",
      "Recarga": "Micro USB (2.5 horas)",
      "Microfone": "Integrado para chamadas",
      "Peso": "190g",
      "Cor": "Preto",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },

  // Caixas de Som
  {
    id: "caixa-jbl-go3",
    name: "Caixa de Som JBL GO 3 Bluetooth Portátil À Prova D'água",
    shortName: "JBL GO 3",
    category: "caixa-som",
    categoryIcon: Speaker,
    description: "Caixa de som portátil compacta com JBL Pro Sound. À prova d'água IP67, design moderno e bateria de longa duração. Perfeita para pequenas salas de reunião e ambientes corporativos.",
    features: [
      "JBL Pro Sound com graves potentes",
      "À prova d'água e poeira (IP67)",
      "Bateria de até 5 horas",
      "Design ultra portátil e moderno",
      "Bluetooth 5.1 de última geração",
      "Disponível em diversas cores"
    ],
    specifications: {
      "Marca": "JBL",
      "Modelo": "GO 3",
      "Tipo": "Portátil Bluetooth",
      "Conectividade": "Bluetooth 5.1",
      "Potência": "4.2W RMS",
      "Bateria": "Até 5 horas",
      "Recarga": "USB-C (2.5 horas)",
      "Resistência": "IP67 (água e poeira)",
      "Dimensões": "8.75 x 7.51 x 4.13 cm",
      "Peso": "209g",
      "Cor": "Preto",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "caixa-edifier-r1280t",
    name: "Caixa de Som Edifier R1280T 2.0 42W RMS Madeira",
    shortName: "Edifier R1280T",
    category: "caixa-som",
    categoryIcon: Speaker,
    description: "Sistema de som 2.0 com qualidade Hi-Fi para ambientes corporativos. Design em madeira elegante, 42W RMS de potência e controles frontais. Ideal para salas de reunião e recepções.",
    features: [
      "Sistema 2.0 com 42W RMS total",
      "Unidade de graves de 4\" + tweeter de 13mm",
      "Gabinete em MDF revestido em madeira",
      "Controles de volume e graves frontais",
      "Entradas RCA duplas + AUX",
      "Qualidade de áudio profissional"
    ],
    specifications: {
      "Marca": "Edifier",
      "Modelo": "R1280T",
      "Tipo": "Sistema 2.0",
      "Potência": "42W RMS (21W x 2)",
      "Drivers": "Woofer 4\" + Tweeter 13mm",
      "Conectividade": "RCA, AUX 3.5mm",
      "Resposta de Frequência": "75Hz - 18kHz",
      "Material": "MDF revestido em madeira",
      "Dimensões": "14.6 x 19.6 x 23 cm (cada)",
      "Peso": "4.2kg (par)",
      "Cor": "Preto fosco com madeira",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "soundbar-samsung-hw-t400",
    name: "Soundbar Samsung HW-T400 2.0 Canais 40W Bluetooth",
    shortName: "Samsung HW-T400",
    category: "caixa-som",
    categoryIcon: Speaker,
    description: "Soundbar compacta e potente para TVs e monitores. Sistema 2.0 canais com 40W de potência, Bluetooth e controle remoto. Perfeita para salas de apresentação e videoconferência.",
    features: [
      "Sistema 2.0 canais com 40W",
      "Bluetooth para conexão wireless",
      "Controle remoto incluído",
      "Design slim e elegante",
      "Modos de som otimizados",
      "Conexão óptica e HDMI ARC"
    ],
    specifications: {
      "Marca": "Samsung",
      "Modelo": "HW-T400",
      "Tipo": "Soundbar 2.0",
      "Potência": "40W RMS",
      "Canais": "2.0",
      "Conectividade": "Bluetooth, HDMI ARC, Óptico, USB",
      "Modos de Som": "Standard, Music, Clear Voice",
      "Controle Remoto": "Sim",
      "Dimensões": "90 x 5.5 x 7 cm",
      "Peso": "1.8kg",
      "Cor": "Preto",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "caixa-logitech-z200",
    name: "Caixa de Som Logitech Z200 2.0 10W Estéreo",
    shortName: "Logitech Z200",
    category: "caixa-som",
    categoryIcon: Speaker,
    description: "Sistema de som estéreo compacto e econômico para computadores. Controles frontais, entrada para fone de ouvido e design discreto. Ideal para estações de trabalho individuais.",
    features: [
      "Sistema 2.0 estéreo 10W",
      "Controles de volume e graves",
      "Entrada para fone de ouvido",
      "Entrada auxiliar para múltiplos dispositivos",
      "Design compacto que economiza espaço",
      "Qualidade Logitech confiável"
    ],
    specifications: {
      "Marca": "Logitech",
      "Modelo": "Z200",
      "Tipo": "Sistema 2.0",
      "Potência": "10W RMS (5W x 2)",
      "Conectividade": "P2 3.5mm, saída para fone",
      "Controles": "Volume, graves, liga/desliga",
      "Alimentação": "Bivolt automático",
      "Dimensões": "9 x 12.4 x 11 cm (cada)",
      "Peso": "800g (par)",
      "Cabo": "1.2 metros",
      "Cor": "Preto",
      "Garantia": "24 meses (2 anos)"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "caixa-anker-soundcore-2",
    name: "Caixa de Som Anker Soundcore 2 Bluetooth 12W Portátil",
    shortName: "Anker Soundcore 2",
    category: "caixa-som",
    categoryIcon: Speaker,
    description: "Caixa Bluetooth portátil com 24 horas de bateria e graves BassUp. Resistente à água IPX7, design robusto e som estéreo de alta qualidade. Versátil para uso interno e externo.",
    features: [
      "Bateria de até 24 horas",
      "Tecnologia BassUp para graves potentes",
      "Resistente à água IPX7",
      "Bluetooth 5.0 com alcance de 20m",
      "12W de potência estéreo",
      "Entrada auxiliar e microfone integrado"
    ],
    specifications: {
      "Marca": "Anker",
      "Modelo": "Soundcore 2",
      "Tipo": "Portátil Bluetooth",
      "Potência": "12W (6W x 2)",
      "Conectividade": "Bluetooth 5.0, AUX 3.5mm",
      "Bateria": "Até 24 horas (5200mAh)",
      "Recarga": "Micro USB (3-4 horas)",
      "Resistência": "IPX7 (água)",
      "Dimensões": "16.7 x 4.7 x 5.6 cm",
      "Peso": "414g",
      "Cor": "Preto",
      "Garantia": "18 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },

  // Projetores
  {
    id: "projetor-epson-powerlite-s41",
    name: "Projetor Epson PowerLite S41+ 3300 Lumens SVGA HDMI",
    shortName: "Epson PowerLite S41+",
    category: "projetor",
    categoryIcon: Projector,
    description: "Projetor versátil para apresentações empresariais e educacionais. 3300 lúmens de brilho, resolução SVGA e conectividade HDMI. Ideal para salas de reunião, treinamento e auditórios.",
    features: [
      "3300 lúmens de brilho",
      "Tecnologia 3LCD para cores vibrantes",
      "Resolução SVGA (800x600)",
      "Conectividade HDMI, VGA e USB",
      "Alto-falante integrado 1W",
      "Lâmpada com até 12.000 horas de vida"
    ],
    specifications: {
      "Marca": "Epson",
      "Modelo": "PowerLite S41+",
      "Brilho": "3300 lúmens",
      "Resolução": "SVGA (800x600)",
      "Tecnologia": "3LCD",
      "Contraste": "15000:1",
      "Conectividade": "HDMI, VGA, USB Tipo A/B, Composto",
      "Alto-falante": "1W mono",
      "Vida da Lâmpada": "12.000h (Eco) / 6.000h (Normal)",
      "Dimensões": "29.7 x 22.7 x 7.7 cm",
      "Peso": "2.4kg",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "projetor-benq-mx550",
    name: "Projetor BenQ MX550 3600 Lumens XGA HDMI",
    shortName: "BenQ MX550",
    category: "projetor",
    categoryIcon: Projector,
    description: "Projetor profissional com alta luminosidade e resolução XGA. SmartEco para economia de energia, longa vida da lâmpada e cores precisas. Perfeito para ambientes corporativos.",
    features: [
      "3600 lúmens para ambientes claros",
      "Resolução XGA (1024x768)",
      "SmartEco reduz consumo em até 70%",
      "Correção trapezoidal vertical",
      "2 alto-falantes de 2W",
      "Modo apresentação otimizado"
    ],
    specifications: {
      "Marca": "BenQ",
      "Modelo": "MX550",
      "Brilho": "3600 lúmens",
      "Resolução": "XGA (1024x768)",
      "Tecnologia": "DLP",
      "Contraste": "20000:1",
      "Conectividade": "HDMI, VGA, S-Video, Composto, USB",
      "Alto-falante": "2W x 2",
      "Vida da Lâmpada": "15.000h (SmartEco) / 4.500h (Normal)",
      "Dimensões": "28.3 x 22.1 x 9.5 cm",
      "Peso": "2.1kg",
      "Garantia": "36 meses (3 anos)"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "projetor-optoma-hd146x",
    name: "Projetor Optoma HD146X Full HD 3600 Lumens HDMI",
    shortName: "Optoma HD146X",
    category: "projetor",
    categoryIcon: Projector,
    description: "Projetor Full HD para apresentações de alto impacto visual. 3600 lúmens, suporte a 3D e modo de jogo otimizado. Excelente para videoconferências, treinamentos e eventos.",
    features: [
      "Resolução Full HD 1080p (1920x1080)",
      "3600 lúmens ANSI",
      "Suporte a 3D Ready",
      "Modo de jogo com baixa latência",
      "Alto-falante integrado 10W",
      "2 portas HDMI 1.4a"
    ],
    specifications: {
      "Marca": "Optoma",
      "Modelo": "HD146X",
      "Brilho": "3600 lúmens",
      "Resolução": "Full HD (1920x1080)",
      "Tecnologia": "DLP",
      "Contraste": "25000:1",
      "Conectividade": "2x HDMI, VGA, USB-A (Power), Audio Out",
      "Alto-falante": "10W",
      "Vida da Lâmpada": "15.000h (Dinâmico) / 4.500h (Bright)",
      "Dimensões": "31.5 x 22.4 x 11.2 cm",
      "Peso": "2.5kg",
      "Garantia": "24 meses (2 anos)"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "projetor-lg-cinebeam-ph30n",
    name: "Projetor Portátil LG CineBeam PH30N HD LED Bluetooth",
    shortName: "LG CineBeam PH30N",
    category: "projetor",
    categoryIcon: Projector,
    description: "Projetor LED portátil ultra compacto com bateria integrada. Ideal para apresentações móveis, road shows e ambientes sem energia elétrica disponível. Bluetooth e USB integrados.",
    features: [
      "LED com até 30.000 horas de vida",
      "Bateria integrada (2.5 horas)",
      "Extremamente portátil (270g)",
      "Bluetooth para áudio wireless",
      "Wireless Screen Share",
      "USB para reprodução de mídia"
    ],
    specifications: {
      "Marca": "LG",
      "Modelo": "CineBeam PH30N",
      "Brilho": "250 lúmens",
      "Resolução": "HD (1280x720)",
      "Tecnologia": "LED DLP",
      "Contraste": "100000:1",
      "Conectividade": "HDMI, USB Tipo-C, Bluetooth, Wi-Fi",
      "Alto-falante": "1W",
      "Vida da Fonte": "30.000 horas",
      "Bateria": "Até 2.5 horas",
      "Dimensões": "11.6 x 11.6 x 4 cm",
      "Peso": "270g",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "projetor-viewsonic-pa503w",
    name: "Projetor ViewSonic PA503W 3800 Lumens WXGA HDMI",
    shortName: "ViewSonic PA503W",
    category: "projetor",
    categoryIcon: Projector,
    description: "Projetor de negócios com resolução widescreen WXGA. SuperColor para cores precisas, alta luminosidade e longa vida da lâmpada. Ótimo custo-benefício para empresas.",
    features: [
      "3800 lúmens de brilho intenso",
      "Resolução WXGA widescreen (1280x800)",
      "Tecnologia SuperColor 6 segmentos",
      "Correção vertical Keystone",
      "Alto-falante 2W integrado",
      "Economia de energia SuperEco"
    ],
    specifications: {
      "Marca": "ViewSonic",
      "Modelo": "PA503W",
      "Brilho": "3800 lúmens",
      "Resolução": "WXGA (1280x800)",
      "Tecnologia": "DLP",
      "Contraste": "22000:1",
      "Conectividade": "HDMI, VGA, Composto, Audio In/Out",
      "Alto-falante": "2W",
      "Vida da Lâmpada": "15.000h (SuperEco) / 5.000h (Normal)",
      "Dimensões": "29.6 x 22.1 x 9.5 cm",
      "Peso": "2.3kg",
      "Garantia": "36 meses (3 anos)"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },

  // Roteadores
  {
    id: "roteador-tp-link-archer-c6",
    name: "Roteador TP-Link Archer C6 AC1200 Dual Band Gigabit",
    shortName: "TP-Link Archer C6",
    category: "roteador",
    categoryIcon: Wifi,
    description: "Roteador dual band AC1200 com 4 antenas externas. Velocidades combinadas de até 1200Mbps, portas Gigabit e MU-MIMO. Ideal para escritórios pequenos e médios.",
    features: [
      "Wi-Fi AC1200 (300Mbps 2.4GHz + 867Mbps 5GHz)",
      "4 antenas de alto ganho",
      "4 portas LAN Gigabit + 1 WAN Gigabit",
      "MU-MIMO para múltiplos dispositivos",
      "Beamforming para sinal direcionado",
      "Controle parental e QoS"
    ],
    specifications: {
      "Marca": "TP-Link",
      "Modelo": "Archer C6",
      "Padrão Wi-Fi": "802.11ac Wave 2 (Wi-Fi 5)",
      "Velocidade": "AC1200 (300 + 867 Mbps)",
      "Frequências": "Dual Band 2.4GHz + 5GHz",
      "Antenas": "4 antenas externas fixas",
      "Portas": "4x LAN Gigabit, 1x WAN Gigabit",
      "Processador": "Dual Core",
      "Tecnologias": "MU-MIMO, Beamforming, QoS",
      "Gerenciamento": "App Tether, interface web",
      "Dimensões": "23 x 14.4 x 3.2 cm",
      "Garantia": "24 meses (2 anos)"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "roteador-intelbras-action-rf1200",
    name: "Roteador Intelbras Action RF 1200 Dual Band Gigabit",
    shortName: "Intelbras RF 1200",
    category: "roteador",
    categoryIcon: Wifi,
    description: "Roteador nacional com alta performance e suporte técnico local. Dual band, 4 antenas, portas Gigabit e firmware otimizado. Excelente para empresas brasileiras.",
    features: [
      "Wi-Fi AC1200 dual band",
      "4 antenas de 5dBi",
      "4 portas LAN Gigabit",
      "IPv6 ready",
      "Suporte técnico em português",
      "Garantia e assistência nacional"
    ],
    specifications: {
      "Marca": "Intelbras",
      "Modelo": "Action RF 1200",
      "Padrão Wi-Fi": "802.11ac (Wi-Fi 5)",
      "Velocidade": "AC1200 (300 + 900 Mbps)",
      "Frequências": "Dual Band 2.4GHz + 5GHz",
      "Antenas": "4 antenas externas 5dBi",
      "Portas": "4x LAN Gigabit, 1x WAN Gigabit",
      "Segurança": "WPA3, WPA2, controle de acesso MAC",
      "Gerenciamento": "Interface web em português",
      "Dimensões": "24.5 x 16.8 x 3.5 cm",
      "Voltagem": "Bivolt automático",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "roteador-asus-rt-ax55",
    name: "Roteador Asus RT-AX55 AX1800 Wi-Fi 6 Dual Band",
    shortName: "Asus RT-AX55 Wi-Fi 6",
    category: "roteador",
    categoryIcon: Wifi,
    description: "Roteador Wi-Fi 6 (802.11ax) de última geração. Maior eficiência, menor latência e suporte a mais dispositivos simultâneos. Ideal para ambientes modernos com alta demanda.",
    features: [
      "Wi-Fi 6 (802.11ax) AX1800",
      "OFDMA e MU-MIMO para eficiência",
      "4 portas LAN Gigabit",
      "AiProtection Pro powered by Trend Micro",
      "Controle parental avançado",
      "VPN e servidor AiCloud"
    ],
    specifications: {
      "Marca": "Asus",
      "Modelo": "RT-AX55",
      "Padrão Wi-Fi": "802.11ax (Wi-Fi 6)",
      "Velocidade": "AX1800 (574 + 1201 Mbps)",
      "Frequências": "Dual Band 2.4GHz + 5GHz",
      "Antenas": "4 antenas externas",
      "Portas": "4x LAN Gigabit, 1x WAN Gigabit, USB 3.0",
      "Tecnologias": "OFDMA, MU-MIMO, Beamforming, TWT",
      "Segurança": "AiProtection Pro, WPA3",
      "Gerenciamento": "App Asus Router, interface web",
      "Dimensões": "23 x 13.4 x 5.6 cm",
      "Garantia": "36 meses (3 anos)"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "sistema-mesh-tp-link-deco-m4",
    name: "Sistema Mesh TP-Link Deco M4 AC1200 Wi-Fi Whole Home Kit 3 Pack",
    shortName: "TP-Link Deco M4 Mesh",
    category: "roteador",
    categoryIcon: Wifi,
    description: "Sistema Wi-Fi mesh para cobertura total em grandes áreas. Kit com 3 unidades cobre até 370m², roaming automático e gerenciamento unificado. Perfeito para empresas e prefeituras.",
    features: [
      "Sistema mesh com 3 unidades",
      "Cobertura de até 370m²",
      "Roaming automático seamless",
      "2 portas Gigabit por unidade",
      "Controle parental e antivírus integrado",
      "Gerenciamento via app simplificado"
    ],
    specifications: {
      "Marca": "TP-Link",
      "Modelo": "Deco M4 (3-pack)",
      "Padrão Wi-Fi": "802.11ac (Wi-Fi 5)",
      "Velocidade": "AC1200 (300 + 867 Mbps)",
      "Frequências": "Dual Band 2.4GHz + 5GHz",
      "Cobertura": "Até 370m² (3 unidades)",
      "Portas": "2x Gigabit por unidade",
      "Tecnologias": "Mesh Wi-Fi, Adaptive Routing, TP-Link HomeShield",
      "Gerenciamento": "App Deco",
      "Dimensões": "9 x 19 cm (cada unidade)",
      "Quantidade": "3 unidades",
      "Garantia": "24 meses (2 anos)"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "roteador-d-link-dir-842",
    name: "Roteador D-Link DIR-842 AC1200 Dual Band 4 Antenas",
    shortName: "D-Link DIR-842",
    category: "roteador",
    categoryIcon: Wifi,
    description: "Roteador empresarial com QoS avançado e gerenciamento de banda. 4 antenas de alto ganho, portas Gigabit e interface de administração completa. Bom custo-benefício.",
    features: [
      "Wi-Fi AC1200 otimizado",
      "4 antenas de 5dBi",
      "QoS inteligente para priorização",
      "Portas LAN Gigabit",
      "Firewall SPI integrado",
      "Configuração rápida via WPS"
    ],
    specifications: {
      "Marca": "D-Link",
      "Modelo": "DIR-842",
      "Padrão Wi-Fi": "802.11ac (Wi-Fi 5)",
      "Velocidade": "AC1200 (300 + 867 Mbps)",
      "Frequências": "Dual Band 2.4GHz + 5GHz",
      "Antenas": "4 antenas externas 5dBi",
      "Portas": "4x LAN Gigabit, 1x WAN Gigabit",
      "Segurança": "WPA/WPA2, Firewall SPI",
      "QoS": "Intelligent QoS",
      "Gerenciamento": "Interface web",
      "Dimensões": "24.7 x 16 x 3.3 cm",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },

  // Switches de Rede
  {
    id: "switch-tp-link-tl-sg108",
    name: "Switch TP-Link TL-SG108 8 Portas Gigabit Desktop",
    shortName: "TP-Link TL-SG108",
    category: "switch",
    categoryIcon: Network,
    description: "Switch Gigabit não gerenciável de 8 portas para pequenos escritórios. Plug and play, chassi de aço durável e eficiência energética IEEE 802.3az. Silencioso sem ventoinhas.",
    features: [
      "8 portas RJ45 Gigabit 10/100/1000Mbps",
      "Plug and play sem configuração",
      "Chassi de aço resistente",
      "IEEE 802.3az Energy Efficient Ethernet",
      "Fanless (sem ventoinha) - silencioso",
      "Auto MDI/MDIX eliminando cabos crossover"
    ],
    specifications: {
      "Marca": "TP-Link",
      "Modelo": "TL-SG108",
      "Tipo": "Não gerenciável",
      "Portas": "8x RJ45 Gigabit (10/100/1000Mbps)",
      "Capacidade de Comutação": "16 Gbps",
      "Taxa de Encaminhamento": "11.9 Mpps",
      "Tabela de Endereços MAC": "4K",
      "Buffer de Pacotes": "128 KB",
      "Padrões": "IEEE 802.3, 802.3u, 802.3ab, 802.3x, 802.3az",
      "Consumo": "3.96W máximo",
      "Dimensões": "15.8 x 10.1 x 2.5 cm",
      "Material": "Aço",
      "Garantia": "Lifetime (vitalícia)"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "switch-intelbras-sg-2400-qr",
    name: "Switch Intelbras SG 2400 QR 24 Portas Gigabit Gerenciável",
    shortName: "Intelbras SG 2400 QR",
    category: "switch",
    categoryIcon: Network,
    description: "Switch gerenciável Layer 2 com 24 portas Gigabit. VLAN, QoS, link aggregation e gerenciamento web. Ideal para redes corporativas médias e grandes com necessidade de segmentação.",
    features: [
      "24 portas Gigabit + 2 portas SFP",
      "Gerenciável Layer 2",
      "VLAN, QoS, IGMP Snooping",
      "Link Aggregation (LACP)",
      "Port Mirroring e Storm Control",
      "Interface web e CLI"
    ],
    specifications: {
      "Marca": "Intelbras",
      "Modelo": "SG 2400 QR",
      "Tipo": "Gerenciável Layer 2",
      "Portas": "24x RJ45 Gigabit + 2x SFP Gigabit",
      "Capacidade de Comutação": "52 Gbps",
      "Taxa de Encaminhamento": "38.69 Mpps",
      "Tabela de Endereços MAC": "8K",
      "VLANs": "Até 256 (IEEE 802.1Q)",
      "QoS": "802.1p CoS, DSCP, port-based",
      "Recursos": "VLAN, QoS, LACP, STP, RSTP, IGMP Snooping",
      "Gerenciamento": "Web, CLI, SNMP v1/v2c/v3",
      "Dimensões": "44 x 20.3 x 4.4 cm",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "switch-cisco-sg110-16",
    name: "Switch Cisco SG110-16 16 Portas Gigabit Desktop",
    shortName: "Cisco SG110-16",
    category: "switch",
    categoryIcon: Network,
    description: "Switch não gerenciável Cisco de 16 portas com qualidade empresarial. Eficiência energética, QoS automático e garantia vitalícia limitada. Confiabilidade Cisco para redes corporativas.",
    features: [
      "16 portas Gigabit Ethernet",
      "QoS (802.1p) automático",
      "Eficiência energética IEEE 802.3az",
      "Jumbo Frames até 9K",
      "Plug and play total",
      "Garantia vitalícia limitada Cisco"
    ],
    specifications: {
      "Marca": "Cisco",
      "Modelo": "SG110-16",
      "Tipo": "Não gerenciável",
      "Portas": "16x RJ45 Gigabit (10/100/1000Mbps)",
      "Capacidade de Comutação": "32 Gbps",
      "Taxa de Encaminhamento": "23.8 Mpps",
      "Tabela de Endereços MAC": "8K",
      "Buffer de Pacotes": "128 KB",
      "QoS": "IEEE 802.1p CoS automático",
      "Jumbo Frames": "Até 9K",
      "Consumo": "9.6W máximo",
      "Dimensões": "32.9 x 10.2 x 2.6 cm",
      "Garantia": "Lifetime Limited (vitalícia limitada)"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "switch-d-link-des-1024d",
    name: "Switch D-Link DES-1024D 24 Portas Fast Ethernet Desktop",
    shortName: "D-Link DES-1024D",
    category: "switch",
    categoryIcon: Network,
    description: "Switch Fast Ethernet econômico de 24 portas para redes de baixo custo. Auto MDI/MDIX, controle de fluxo IEEE 802.3x e chassi de metal. Ideal para grandes implantações com orçamento limitado.",
    features: [
      "24 portas Fast Ethernet 10/100Mbps",
      "Auto-negociação de velocidade",
      "Controle de fluxo 802.3x",
      "Plug and play",
      "Chassi metálico resistente",
      "Excelente custo por porta"
    ],
    specifications: {
      "Marca": "D-Link",
      "Modelo": "DES-1024D",
      "Tipo": "Não gerenciável",
      "Portas": "24x RJ45 Fast Ethernet (10/100Mbps)",
      "Capacidade de Comutação": "4.8 Gbps",
      "Taxa de Encaminhamento": "3.57 Mpps",
      "Tabela de Endereços MAC": "8K",
      "Buffer de Pacotes": "96 KB",
      "Padrões": "IEEE 802.3, 802.3u, 802.3x",
      "Consumo": "12W máximo",
      "Dimensões": "28 x 18 x 4.4 cm",
      "Material": "Metal",
      "Garantia": "Lifetime (vitalícia)"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "switch-netgear-gs305",
    name: "Switch Netgear GS305 5 Portas Gigabit Compacto",
    shortName: "Netgear GS305",
    category: "switch",
    categoryIcon: Network,
    description: "Switch Gigabit ultra compacto de 5 portas para pequenos ambientes. Design de mesa ou montagem em parede, silent fanless e eficiência energética. Perfeito para expansão pontual de rede.",
    features: [
      "5 portas Gigabit compactas",
      "Design ultra compacto e portátil",
      "Silencioso sem ventoinha",
      "Eficiência energética otimizada",
      "Montagem em mesa ou parede",
      "Plug and play instantâneo"
    ],
    specifications: {
      "Marca": "Netgear",
      "Modelo": "GS305",
      "Tipo": "Não gerenciável",
      "Portas": "5x RJ45 Gigabit (10/100/1000Mbps)",
      "Capacidade de Comutação": "10 Gbps",
      "Taxa de Encaminhamento": "7.44 Mpps",
      "Tabela de Endereços MAC": "2K",
      "Buffer de Pacotes": "128 KB",
      "Padrões": "IEEE 802.3, 802.3u, 802.3ab, 802.3az",
      "Consumo": "2.8W máximo",
      "Dimensões": "10 x 10 x 2.5 cm",
      "Material": "Plástico resistente",
      "Garantia": "36 meses (3 anos)"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },

  // Impressoras
  {
    id: "impressora-hp-laserjet-m110w",
    name: "Impressora HP LaserJet M110w Mono Wi-Fi Compacta",
    shortName: "HP LaserJet M110w",
    category: "impressora",
    categoryIcon: Printer,
    description: "Impressora laser monocromática compacta com Wi-Fi integrado. Velocidade de 20ppm, impressão duplex manual e compatível com HP Smart App. Ideal para pequenos escritórios e home office.",
    features: [
      "Tecnologia laser monocromática",
      "Velocidade até 20 ppm",
      "Wi-Fi integrado",
      "HP Smart App para impressão móvel",
      "Impressão duplex manual",
      "Compacta e silenciosa"
    ],
    specifications: {
      "Marca": "HP",
      "Modelo": "LaserJet M110w",
      "Tipo": "Laser monocromática",
      "Velocidade": "Até 20 ppm (A4)",
      "Resolução": "600 x 600 dpi",
      "Conectividade": "Wi-Fi 2.4GHz, USB 2.0",
      "Ciclo Mensal": "Até 10.000 páginas",
      "Capacidade de Papel": "150 folhas",
      "Impressão Duplex": "Manual",
      "Compatibilidade": "Windows, Mac, Linux, iOS, Android",
      "Dimensões": "36 x 19.9 x 26 cm",
      "Peso": "4kg",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "multifuncional-epson-l3250",
    name: "Multifuncional Epson EcoTank L3250 Tanque de Tinta Wi-Fi",
    shortName: "Epson EcoTank L3250",
    category: "impressora",
    categoryIcon: Printer,
    description: "Multifuncional tanque de tinta colorida com Wi-Fi. Imprime até 7.500 páginas em preto e 6.000 coloridas. Scanner, copiadora e rendimento excepcional. Perfeito para alto volume.",
    features: [
      "Sistema de tanque de tinta EcoTank",
      "Rende até 7.500 páginas (preto)",
      "Imprime, copia e digitaliza",
      "Wi-Fi Direct e Wi-Fi",
      "Impressão móvel Epson iPrint",
      "Baixo custo por página"
    ],
    specifications: {
      "Marca": "Epson",
      "Modelo": "EcoTank L3250",
      "Tipo": "Multifuncional tanque de tinta colorida",
      "Velocidade": "33 ppm (preto), 15 ppm (color)",
      "Resolução Impressão": "5760 x 1440 dpi",
      "Resolução Scanner": "1200 x 2400 dpi",
      "Conectividade": "Wi-Fi, Wi-Fi Direct, USB",
      "Ciclo Mensal": "Até 5.000 páginas",
      "Capacidade de Papel": "100 folhas",
      "Rendimento": "7.500 pág (preto), 6.000 pág (color)",
      "Dimensões": "37.5 x 34.7 x 17.9 cm",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "impressora-brother-dcp-l2540dw",
    name: "Multifuncional Brother DCP-L2540DW Laser Mono Wi-Fi Duplex",
    shortName: "Brother DCP-L2540DW",
    category: "impressora",
    categoryIcon: Printer,
    description: "Multifuncional laser monocromática com duplex automático e Wi-Fi. Alta velocidade de 30ppm, scanner automático e baixo custo operacional. Ideal para médios e grandes volumes.",
    features: [
      "Laser monocromática 30 ppm",
      "Duplex automático para economia",
      "Wi-Fi e impressão móvel",
      "Scanner com ADF de 35 folhas",
      "Toner de alto rendimento disponível",
      "Visor LCD de 2 linhas"
    ],
    specifications: {
      "Marca": "Brother",
      "Modelo": "DCP-L2540DW",
      "Tipo": "Multifuncional laser monocromática",
      "Velocidade": "Até 30 ppm",
      "Resolução": "2400 x 600 dpi",
      "Conectividade": "Wi-Fi, USB 2.0",
      "Ciclo Mensal": "Até 15.000 páginas",
      "Capacidade de Papel": "250 folhas",
      "ADF": "35 folhas",
      "Impressão Duplex": "Automático",
      "Rendimento Toner": "1.200 pág (starter), 2.600 pág (padrão)",
      "Dimensões": "41 x 39.8 x 31.8 cm",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "impressora-canon-g3160",
    name: "Multifuncional Canon MegaTank G3160 Tanque de Tinta Wi-Fi",
    shortName: "Canon G3160",
    category: "impressora",
    categoryIcon: Printer,
    description: "Multifuncional tanque de tinta Canon com altíssimo rendimento. Até 7.000 páginas em preto, Wi-Fi, impressão móvel e qualidade fotográfica. Excelente para empresas com grande demanda.",
    features: [
      "Sistema MegaTank de alto rendimento",
      "Até 7.000 páginas (preto) e 6.000 (color)",
      "Qualidade fotográfica 4800 x 1200 dpi",
      "Wi-Fi e impressão móvel Canon PRINT",
      "Impressora, scanner e copiadora",
      "Reabastecimento de tinta fácil e limpo"
    ],
    specifications: {
      "Marca": "Canon",
      "Modelo": "MegaTank G3160",
      "Tipo": "Multifuncional tanque de tinta colorida",
      "Velocidade": "8.8 ipm (preto), 5.0 ipm (color)",
      "Resolução Impressão": "4800 x 1200 dpi",
      "Resolução Scanner": "600 x 1200 dpi",
      "Conectividade": "Wi-Fi, USB",
      "Ciclo Mensal": "Até 12.000 páginas",
      "Capacidade de Papel": "100 folhas",
      "Rendimento": "7.000 pág (preto), 6.000 pág (color)",
      "Dimensões": "44.5 x 33 x 15.1 cm",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "impressora-hp-officejet-pro-9010",
    name: "Multifuncional HP OfficeJet Pro 9010 Jato de Tinta Wi-Fi Duplex",
    shortName: "HP OfficeJet Pro 9010",
    category: "impressora",
    categoryIcon: Printer,
    description: "Multifuncional jato de tinta profissional com recursos empresariais. Impressão duplex automática, ADF de 35 folhas, Wi-Fi dual band e HP Smart App. Qualidade laser com custo de jato.",
    features: [
      "Jato de tinta profissional colorida",
      "Duplex automático",
      "ADF de 35 folhas duplex",
      "Wi-Fi dual band e Ethernet",
      "Impressão de até 22 ppm (preto)",
      "HP Smart App e segurança avançada"
    ],
    specifications: {
      "Marca": "HP",
      "Modelo": "OfficeJet Pro 9010",
      "Tipo": "Multifuncional jato de tinta colorida",
      "Velocidade": "22 ppm (preto), 18 ppm (color)",
      "Resolução": "4800 x 1200 dpi",
      "Conectividade": "Wi-Fi dual band, Ethernet, USB",
      "Ciclo Mensal": "Até 25.000 páginas",
      "Capacidade de Papel": "250 folhas",
      "ADF": "35 folhas (duplex)",
      "Impressão Duplex": "Automático",
      "Visor": "Touch screen 2.65\"",
      "Dimensões": "46.1 x 39 x 28.7 cm",
      "Garantia": "12 meses"
    },
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(p => p.category === category);
};

export const getRelatedProducts = (product: Product, limit: number = 4): Product[] => {
  return products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
};
