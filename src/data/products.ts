import { 
  Laptop, 
  Monitor, 
  Keyboard, 
  Mouse, 
  Headphones, 
  Speaker,
  Projector,
  Network,
  Wifi,
  Printer,
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
}

export const productCategories = [
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
  // ==================== NOTEBOOKS ====================
  {
    id: "notebook-dell-inspiron-15-3530-corei3",
    name: "Notebook Inspiron 15 Intel® Core™ 3 100U (6-core, cache de 10MB, até 4.70 GHz)",
    shortName: "Dell Inspiron 15 Core 3",
    category: "notebook",
    categoryIcon: Laptop,
    description: "Notebook Dell Inspiron 15 com processador Intel Core 3 100U de 13ª geração, oferecendo 6 núcleos e velocidade até 4.70 GHz. Ideal para tarefas office, navegação e produtividade empresarial. Design robusto e confiável da Dell com tela de 15.6 polegadas.",
    features: [
      "Processador Intel Core 3 100U 6-core (13ª Geração)",
      "Cache de 10MB para melhor desempenho",
      "Velocidade turbo até 4.70 GHz",
      "Tela 15.6\" para máxima produtividade",
      "Conectividade completa USB-C e HDMI",
      "Qualidade e confiabilidade Dell"
    ],
    specifications: {
      "Marca": "Dell",
      "Modelo": "Inspiron 15 3530",
      "Processador": "Intel Core 3 100U (6-core, até 4.70 GHz)",
      "Cache": "10MB",
      "Memória RAM": "8GB DDR4",
      "Armazenamento": "SSD 256GB PCIe NVMe",
      "Tela": "15.6\" HD (1366x768) ou FHD (1920x1080)",
      "Placa de Vídeo": "Intel UHD Graphics",
      "Sistema Operacional": "Windows 11 Home",
      "Conectividade": "Wi-Fi 5, Bluetooth 5.1, USB-C, HDMI",
      "Bateria": "Até 6 horas",
      "Peso": "Aprox. 1.65kg",
      "Garantia": "12 meses"
    },
    image: "/images/products/notebook/notebook-1.png"
  },
  {
    id: "notebook-asus-vivobook-15-x1504va-i5",
    name: "Notebook ASUS Vivobook 15 X1504VA Intel Core i5 1334U 8GB Ram 512GB SSD Windows 11 Tela 15,6\" FHD Silver - NJ1740W",
    shortName: "ASUS Vivobook 15 i5",
    category: "notebook",
    categoryIcon: Laptop,
    description: "ASUS Vivobook 15 com processador Intel Core i5 1334U de 13ª geração, 8GB RAM e SSD de 512GB. Design moderno em Silver com tela FHD de 15.6 polegadas. Windows 11 pré-instalado para máxima compatibilidade e produtividade empresarial.",
    features: [
      "Intel Core i5-1334U 13ª Geração",
      "8GB RAM DDR4 para multitarefas",
      "SSD 512GB NVMe para velocidade",
      "Tela 15.6\" FHD (1920x1080)",
      "Windows 11 Home incluído",
      "Design fino e elegante Silver"
    ],
    specifications: {
      "Marca": "ASUS",
      "Modelo": "Vivobook 15 X1504VA-NJ1740W",
      "Processador": "Intel Core i5-1334U (até 4.6 GHz)",
      "Memória RAM": "8GB DDR4 3200MHz",
      "Armazenamento": "SSD 512GB NVMe PCIe 3.0",
      "Tela": "15.6\" FHD (1920x1080) IPS",
      "Placa de Vídeo": "Intel Iris Xe Graphics",
      "Sistema Operacional": "Windows 11 Home",
      "Conectividade": "Wi-Fi 6, Bluetooth 5.1, USB-C, HDMI 1.4",
      "Bateria": "42Wh (até 7 horas)",
      "Peso": "1.7kg",
      "Cor": "Cool Silver",
      "Garantia": "12 meses"
    },
    image: "/images/products/notebook/notebook-2.png"
  },
  {
    id: "notebook-asus-vivobook-16-x1605va-i7",
    name: "Notebook ASUS Vivobook 16 Intel Core i7, 8 GB, 512 GB SSD, KeepOS, 16'' FHD, Cool Silver - X1605VA-MB742",
    shortName: "ASUS Vivobook 16 i7",
    category: "notebook",
    categoryIcon: Laptop,
    description: "ASUS Vivobook 16 polegadas com processador Intel Core i7 de 13ª geração e tela maior para maior produtividade. Equipado com 8GB RAM, SSD 512GB e sistema KeepOS. Design premium em Cool Silver, ideal para profissionais que precisam de espaço de tela adicional.",
    features: [
      "Processador Intel Core i7 13ª Geração",
      "Tela maior de 16\" WUXGA",
      "8GB RAM expansível",
      "SSD 512GB para armazenamento rápido",
      "KeepOS (Linux) pré-instalado",
      "Design elegante Cool Silver"
    ],
    specifications: {
      "Marca": "ASUS",
      "Modelo": "Vivobook 16 X1605VA-MB742",
      "Processador": "Intel Core i7-1355U (até 5.0 GHz)",
      "Memória RAM": "8GB DDR4 (expansível até 16GB)",
      "Armazenamento": "SSD 512GB NVMe",
      "Tela": "16\" WUXGA (1920x1200) IPS",
      "Placa de Vídeo": "Intel Iris Xe Graphics",
      "Sistema Operacional": "KeepOS (Linux)",
      "Conectividade": "Wi-Fi 6, Bluetooth 5.2, USB-C, HDMI 2.0",
      "Bateria": "50Wh",
      "Peso": "1.88kg",
      "Cor": "Cool Silver",
      "Garantia": "12 meses"
    },
    image: "/images/products/notebook/notebook-3.png"
  },
  {
    id: "notebook-asus-tuf-gaming-a15-rtx3050",
    name: "Notebook ASUS TUF Gaming A15, RTX 3050, AMD RYZEN 7, 16 GB, 512 GB SSD, W11 Home, Tela 15.6'' FHD, Graphite Black - FA506NCR-HN088W",
    shortName: "ASUS TUF Ryzen 7",
    category: "notebook",
    categoryIcon: Laptop,
    description: "ASUS TUF Gaming A15 com AMD Ryzen 7 e placa de vídeo dedicada NVIDIA RTX 3050. Perfeito para profissionais que trabalham com design gráfico, edição de vídeo, modelagem 3D e aplicações que exigem alto poder gráfico. Tela FHD de 15.6 polegadas com alta taxa de atualização.",
    features: [
      "AMD Ryzen 7 7435HS alto desempenho",
      "NVIDIA GeForce RTX 3050 4GB dedicada",
      "16GB RAM DDR5 para máxima performance",
      "Tela 15.6\" FHD com taxa elevada",
      "SSD 512GB NVMe rápido",
      "Sistema de resfriamento militar-grade"
    ],
    specifications: {
      "Marca": "ASUS",
      "Modelo": "TUF Gaming A15 FA506NCR-HN088W",
      "Processador": "AMD Ryzen 7 7435HS (até 4.5 GHz)",
      "Memória RAM": "16GB DDR5 4800MHz",
      "Armazenamento": "SSD 512GB NVMe PCIe 4.0",
      "Tela": "15.6\" FHD (1920x1080) 144Hz IPS",
      "Placa de Vídeo": "NVIDIA RTX 3050 4GB GDDR6",
      "Sistema Operacional": "Windows 11 Home",
      "Conectividade": "Wi-Fi 6, Bluetooth 5.3, USB-C, HDMI 2.1",
      "Bateria": "56Wh",
      "Peso": "2.2kg",
      "Cor": "Graphite Black",
      "Garantia": "12 meses"
    },
    image: "/images/products/notebook/notebook-4.png"
  },
  {
    id: "notebook-macbook-air-m2-13-512gb",
    name: "MacBook Air Apple 13\", M2, CPU 8 Núcleos, GPU 10 Núcleos, 8GB RAM, SSD 512GB, Cinza Espacial - MLXX3BZ/A",
    shortName: "MacBook Air M2 13\"",
    category: "notebook",
    categoryIcon: Laptop,
    description: "MacBook Air com revolucionário chip Apple M2, oferecendo desempenho excepcional com eficiência energética sem precedentes. Tela Liquid Retina de 13.6 polegadas, até 18 horas de bateria e design ultrafino em alumínio. Ideal para profissionais criativos e executivos.",
    features: [
      "Chip Apple M2 (CPU 8-core, GPU 10-core)",
      "Tela Liquid Retina 13.6\" brilhante",
      "Até 18 horas de bateria",
      "Design ultrafino e leve (1.24kg)",
      "Touch ID para segurança",
      "Compatível com ecossistema Apple"
    ],
    specifications: {
      "Marca": "Apple",
      "Modelo": "MacBook Air M2 MLXX3BZ/A",
      "Processador": "Apple M2 (8-core CPU, 10-core GPU)",
      "Neural Engine": "16-core",
      "Memória RAM": "8GB Unified Memory",
      "Armazenamento": "SSD 512GB",
      "Tela": "13.6\" Liquid Retina (2560x1664)",
      "Brilho": "500 nits",
      "Sistema Operacional": "macOS",
      "Conectividade": "Wi-Fi 6, Bluetooth 5.3, 2x Thunderbolt/USB 4",
      "Bateria": "Até 18 horas",
      "Peso": "1.24kg",
      "Cor": "Cinza Espacial",
      "Garantia": "12 meses"
    },
    image: "/images/products/notebook/notebook-5.png"
  },

  // ==================== MONITORES ====================
  {
    id: "monitor-lg-20mk400h-b-195-hd",
    name: "Monitor LG LED HD 19,5'' HDMI OnScreen Control - 20MK400H-B",
    shortName: "LG 19.5\" HD",
    category: "monitor",
    categoryIcon: Monitor,
    description: "Monitor LG de 19.5 polegadas com resolução HD, ideal para estações de trabalho office e ambientes que precisam de displays compactos. OnScreen Control para fácil configuração e múltiplas entradas de conexão. Design slim e econômico.",
    features: [
      "Tela 19.5\" HD para trabalho office",
      "OnScreen Control para configurações fáceis",
      "75Hz para fluidez visual",
      "Reader Mode para conforto dos olhos",
      "AMD FreeSync incluído",
      "Conectividade HDMI e VGA"
    ],
    specifications: {
      "Marca": "LG",
      "Modelo": "20MK400H-B",
      "Tamanho": "19.5 polegadas",
      "Resolução": "HD (1366x768)",
      "Taxa de Atualização": "75Hz",
      "Tempo de Resposta": "2ms (MBR)",
      "Tecnologia": "TN",
      "Conectividade": "HDMI, VGA (D-Sub)",
      "Ajuste": "Inclinação",
      "Consumo": "19W típico",
      "Garantia": "12 meses"
    },
    image: "/images/products/monitor/monitor-1.png"
  },
  {
    id: "monitor-dell-22-se2225hm",
    name: "Monitor Dell 22 — SE2225HM",
    shortName: "Dell 22\" SE2225HM",
    category: "monitor",
    categoryIcon: Monitor,
    description: "Monitor Dell de 22 polegadas com tecnologia VA e taxa de atualização de 100Hz. ComfortView Plus integrado para redução de luz azul sem comprometer cores. Ideal para longas jornadas de trabalho com conforto visual garantido.",
    features: [
      "Tela 22\" Full HD para produtividade",
      "100Hz para movimentos suaves",
      "ComfortView Plus reduz luz azul",
      "Painel VA com ângulos amplos",
      "Design sem bordas elegante",
      "Certificação TÜV Rheinland"
    ],
    specifications: {
      "Marca": "Dell",
      "Modelo": "SE2225HM",
      "Tamanho": "21.5 polegadas",
      "Resolução": "Full HD (1920x1080)",
      "Taxa de Atualização": "100Hz (HDMI) / 76Hz (VGA)",
      "Tempo de Resposta": "8ms (GTG), 5ms (Fast)",
      "Tecnologia": "VA (Vertical Alignment)",
      "Ângulos de Visão": "178°/178°",
      "Conectividade": "HDMI, VGA",
      "Ajuste": "Inclinação -5° a 21°",
      "ComfortView Plus": "Sem cintilação",
      "Garantia": "12 meses"
    },
    image: "/images/products/monitor/monitor-2.png"
  },
  {
    id: "monitor-samsung-24-s3-100hz",
    name: "Monitor Gamer Samsung 24\" FHD,100 Hz, HDMI, VGA,Preto, S3",
    shortName: "Samsung 24\" S3 100Hz",
    category: "monitor",
    categoryIcon: Monitor,
    description: "Monitor Samsung de 24 polegadas com taxa de atualização de 100Hz, ideal para design gráfico e edição de vídeo. Painel IPS com cores vibrantes e ângulos de visão amplos. Eye Saver Mode e Flicker Free para conforto visual prolongado.",
    features: [
      "100Hz para imagens fluidas",
      "Painel IPS com cores precisas",
      "Eye Saver Mode anti-fadiga",
      "Flicker Free sem cintilação",
      "Game Mode otimizado",
      "Design moderno sem bordas"
    ],
    specifications: {
      "Marca": "Samsung",
      "Modelo": "S3 S30GD 24\"",
      "Tamanho": "24 polegadas",
      "Resolução": "Full HD (1920x1080)",
      "Taxa de Atualização": "100Hz",
      "Tempo de Resposta": "5ms (GTG)",
      "Tecnologia": "IPS",
      "Conectividade": "HDMI, VGA (D-Sub)",
      "Eye Saver Mode": "Sim",
      "Flicker Free": "Sim",
      "Ajuste": "Inclinação",
      "Garantia": "12 meses"
    },
    image: "/images/products/monitor/monitor-3.png"
  },
  {
    id: "monitor-samsung-27-curvo-lc27f390",
    name: "Monitor 27\" Led Samsung - Full Hd - Hdmi - Curvo - Super Slim - Lc27F390Fhlmzd, Samsung, LC27F390FHLMZD, LED, 27",
    shortName: "Samsung 27\" Curvo",
    category: "monitor",
    categoryIcon: Monitor,
    description: "Monitor curvo Samsung de 27 polegadas com raio de curvatura 1800R para experiência imersiva. Full HD com tecnologia AMD FreeSync e Game Mode. Design super slim elegante, perfeito para estações de trabalho que exigem conforto visual e design moderno.",
    features: [
      "Tela curva 1800R imersiva",
      "27 polegadas Full HD",
      "AMD FreeSync para fluidez",
      "Eye Saver Mode integrado",
      "Game Mode otimizado",
      "Design super slim premium"
    ],
    specifications: {
      "Marca": "Samsung",
      "Modelo": "LC27F390FHLMZD (CF390)",
      "Tamanho": "27 polegadas",
      "Curvatura": "1800R",
      "Resolução": "Full HD (1920x1080)",
      "Taxa de Atualização": "60Hz",
      "Tempo de Resposta": "4ms",
      "Tecnologia": "VA Curvo",
      "Conectividade": "HDMI, VGA",
      "AMD FreeSync": "Sim",
      "Eye Saver Mode": "Sim",
      "Garantia": "12 meses"
    },
    image: "/images/products/monitor/monitor-4.png"
  },
  {
    id: "monitor-samsung-32-uhd-uj59-4k",
    name: "Monitor UHD Samsung 32\", 4K, HDMI, Display Port, Freesync, Preto, Série UJ59",
    shortName: "Samsung 32\" 4K UHD",
    category: "monitor",
    categoryIcon: Monitor,
    description: "Monitor Samsung de 32 polegadas com resolução 4K UHD (3840x2160) para máxima nitidez e detalhamento. AMD FreeSync, Game Mode e Picture-in-Picture. Ideal para designers, editores e profissionais que trabalham com conteúdo em alta resolução.",
    features: [
      "32 polegadas com resolução 4K UHD",
      "1 bilhão de cores para precisão",
      "AMD FreeSync para sincronização",
      "Picture-in-Picture (PIP)",
      "Display Port e HDMI",
      "Game Mode para versatilidade"
    ],
    specifications: {
      "Marca": "Samsung",
      "Modelo": "LU32J590UQLMZD (UJ59)",
      "Tamanho": "32 polegadas",
      "Resolução": "4K UHD (3840x2160)",
      "Taxa de Atualização": "60Hz",
      "Tempo de Resposta": "4ms",
      "Tecnologia": "VA",
      "Conectividade": "HDMI 2.0, Display Port 1.2",
      "AMD FreeSync": "Sim",
      "PIP/PBP": "Sim",
      "Suporte VESA": "100x100mm",
      "Garantia": "12 meses"
    },
    image: "/images/products/monitor/monitor-5.png"
  },

  // ==================== TECLADOS ====================
  {
    id: "teclado-dell-kb216-br",
    name: "Teclado Dell com fio - KB216 - Português (Brasil) - Preto",
    shortName: "Dell KB216 BR",
    category: "teclado",
    categoryIcon: Keyboard,
    description: "Teclado Dell com fio KB216 em layout ABNT2 Português Brasil. Design durável e resistente a respingos, ideal para uso corporativo intenso. Teclas de atalho multimídia e teclado numérico completo para máxima produtividade em ambientes office.",
    features: [
      "Layout ABNT2 Português Brasil",
      "Resistente a respingos",
      "Teclas multimídia integradas",
      "Teclado numérico completo",
      "Cabo USB de 1.8m",
      "Durabilidade comprovada Dell"
    ],
    specifications: {
      "Marca": "Dell",
      "Modelo": "KB216",
      "Layout": "ABNT2 Português (Brasil)",
      "Conexão": "USB com fio",
      "Comprimento do Cabo": "1.8m",
      "Tipo": "Membrana",
      "Teclas Multimídia": "Sim",
      "Teclado Numérico": "Sim",
      "Resistente a Líquidos": "Respingos",
      "Cor": "Preto",
      "Compatibilidade": "Windows, Linux, Chrome OS",
      "Garantia": "12 meses"
    },
    image: "/images/products/keyboard/keyboard-1.png"
  },
  {
    id: "teclado-intelbras-tsi50-wireless",
    name: "Teclado Sem Fio Intelbras com Clique Silencioso TSI50 Preto",
    shortName: "Intelbras TSI50",
    category: "teclado",
    categoryIcon: Keyboard,
    description: "Teclado sem fio Intelbras TSI50 com tecnologia de clique silencioso, perfeito para ambientes corporativos que exigem concentração. Conexão wireless 2.4GHz estável, design compacto e bateria de longa duração. Teclas silenciosas para não incomodar colegas.",
    features: [
      "Tecnologia de clique silencioso",
      "Conexão wireless 2.4GHz",
      "Design compacto e moderno",
      "Bateria de longa duração",
      "Teclas multimídia",
      "Plug and Play via USB"
    ],
    specifications: {
      "Marca": "Intelbras",
      "Modelo": "TSI50",
      "Layout": "ABNT2",
      "Conexão": "Wireless 2.4GHz",
      "Alcance": "Até 10 metros",
      "Tipo": "Membrana silenciosa",
      "Alimentação": "2x AAA (incluídas)",
      "Durabilidade Bateria": "Até 24 meses",
      "Receptor": "Nano USB",
      "Cor": "Preto",
      "Compatibilidade": "Windows, macOS, Linux",
      "Garantia": "12 meses"
    },
    image: "/images/products/keyboard/keyboard-2.png"
  },
  {
    id: "teclado-hp-230-wireless",
    name: "Teclado sem Fio HP 230 - com Dongle USB Wireless, Digitação Silenciosa e Precisa, Design Elegante, Até 16 Meses de Bateria, Layout BR, Preto (3L1E7AA)",
    shortName: "HP 230 Wireless",
    category: "teclado",
    categoryIcon: Keyboard,
    description: "Teclado sem fio HP 230 com digitação silenciosa e design elegante para ambientes corporativos. Bateria de até 16 meses, dongle USB wireless incluído e teclas de atalho para Windows. Layout brasileiro ABNT2 completo com teclado numérico.",
    features: [
      "Digitação silenciosa e precisa",
      "Bateria até 16 meses",
      "Dongle USB wireless incluído",
      "Design fino e elegante",
      "Teclas de atalho Windows",
      "Layout ABNT2 completo"
    ],
    specifications: {
      "Marca": "HP",
      "Modelo": "HP 230 (3L1E7AA)",
      "Layout": "ABNT2 Português Brasil",
      "Conexão": "Wireless 2.4GHz",
      "Alcance": "Até 10 metros",
      "Tipo": "Membrana de baixo perfil",
      "Alimentação": "2x AAA",
      "Durabilidade Bateria": "Até 16 meses",
      "Dongle": "USB nano receiver",
      "Dimensões": "443 x 122 x 23 mm",
      "Cor": "Preto",
      "Compatibilidade": "Windows 7/8/10/11",
      "Garantia": "12 meses"
    },
    image: "/images/products/keyboard/keyboard-3.png"
  },
  {
    id: "teclado-redragon-netherbane-k521-rgb",
    name: "Teclado Membrana Gamer Redragon Netherbane K521-RGB USB Preto",
    shortName: "Redragon K521 RGB",
    category: "teclado",
    categoryIcon: Keyboard,
    description: "Teclado gamer Redragon Netherbane K521 com iluminação RGB Rainbow em 7 cores. Tecnologia anti-ghosting, 104 teclas ABNT2 e design robusto. Ideal para profissionais que trabalham com design gráfico e precisam de teclas responsivas e iluminação personalizável.",
    features: [
      "Iluminação RGB Rainbow 7 cores",
      "Anti-ghosting em todas as teclas",
      "104 teclas layout ABNT2",
      "12 teclas multimídia",
      "Base de metal reforçada",
      "Cabo USB trançado resistente"
    ],
    specifications: {
      "Marca": "Redragon",
      "Modelo": "Netherbane K521-RGB",
      "Layout": "ABNT2 (104 teclas)",
      "Conexão": "USB com fio",
      "Tipo": "Membrana",
      "Iluminação": "RGB Rainbow 7 cores",
      "Anti-Ghosting": "Todas as teclas",
      "Teclas Multimídia": "12 funções",
      "Base": "Metal",
      "Cabo": "1.8m trançado",
      "Cor": "Preto",
      "Compatibilidade": "Windows, macOS, Linux",
      "Garantia": "12 meses"
    },
    image: "/images/products/keyboard/keyboard-4.png"
  },
  {
    id: "teclado-mecanico-gamer-blue-rgb",
    name: "Teclado Mecânico Gamer Switch Blue Led Rgb 7 Cores Rainbow 12 Funções Anti Ghosting Abnt2 Usb para Pc Computador Notebook Mac",
    shortName: "Mecânico Blue RGB",
    category: "teclado",
    categoryIcon: Keyboard,
    description: "Teclado mecânico gamer com switches Blue para feedback tátil e sonoro. Iluminação RGB em 7 cores Rainbow, 12 funções multimídia e anti-ghosting completo. Layout ABNT2 para máxima compatibilidade. Perfeito para digitação intensiva e precisão em trabalhos técnicos.",
    features: [
      "Switches mecânicos Blue (clique audível)",
      "RGB 7 cores Rainbow personalizável",
      "Anti-ghosting completo",
      "12 teclas multimídia",
      "Layout ABNT2 completo",
      "Base metálica robusta"
    ],
    specifications: {
      "Tipo de Switch": "Mecânico Blue",
      "Layout": "ABNT2 (Português Brasil)",
      "Conexão": "USB com fio",
      "Iluminação": "RGB 7 cores Rainbow",
      "Modos de Iluminação": "Múltiplos efeitos",
      "Anti-Ghosting": "Todas as teclas",
      "Teclas Multimídia": "12 funções",
      "Base": "Metal anti-derrapante",
      "Cabo": "1.5m USB",
      "Durabilidade": "50 milhões de cliques",
      "Compatibilidade": "Windows, macOS, Linux",
      "Garantia": "12 meses"
    },
    image: "/images/products/keyboard/keyboard-5.png"
  },

  // ==================== MOUSE ====================
  {
    id: "mouse-dell-ms116-wired",
    name: "Mouse Dell com fio - MS116 — preto",
    shortName: "Dell MS116",
    category: "mouse",
    categoryIcon: Mouse,
    description: "Mouse óptico Dell MS116 com design ambidestro confortável para uso prolongado. Sensor óptico de 1000 DPI, cabo de 1.8m e três botões. Plug and play via USB, ideal para uso corporativo diário com qualidade e durabilidade Dell garantidas.",
    features: [
      "Design ambidestro confortável",
      "Sensor óptico LED 1000 DPI",
      "3 botões (direito, esquerdo, scroll)",
      "Cabo USB 1.8m",
      "Plug and Play",
      "Durabilidade Dell comprovada"
    ],
    specifications: {
      "Marca": "Dell",
      "Modelo": "MS116",
      "Conexão": "USB com fio",
      "Sensor": "Óptico LED",
      "DPI": "1000",
      "Botões": "3",
      "Comprimento do Cabo": "1.8m",
      "Design": "Ambidestro",
      "Dimensões": "113.6 x 61.1 x 36 mm",
      "Peso": "87g",
      "Cor": "Preto",
      "Compatibilidade": "Windows, macOS, Linux, Chrome OS, Android",
      "Garantia": "12 meses"
    },
    image: "/images/products/mouse/mouse-1.png"
  },
  {
    id: "mouse-dell-wm126-wireless",
    name: "Mouse sem fio Dell — WM126",
    shortName: "Dell WM126 Wireless",
    category: "mouse",
    categoryIcon: Mouse,
    description: "Mouse sem fio Dell WM126 com tecnologia wireless 2.4GHz para mobilidade sem cabos. Design compacto e portátil, sensor óptico confiável e bateria de longa duração. Receptor USB nano para fácil transporte. Perfeito para profissionais em movimento.",
    features: [
      "Conexão wireless 2.4GHz estável",
      "Design compacto e portátil",
      "Receptor USB nano",
      "Bateria de longa duração",
      "Sensor óptico preciso",
      "Compatível com múltiplos sistemas"
    ],
    specifications: {
      "Marca": "Dell",
      "Modelo": "WM126",
      "Conexão": "Wireless 2.4GHz",
      "Sensor": "Óptico",
      "DPI": "1000",
      "Botões": "3",
      "Alcance": "Até 10 metros",
      "Alimentação": "1x AA (incluída)",
      "Durabilidade Bateria": "Até 12 meses",
      "Receptor": "USB nano",
      "Design": "Ambidestro",
      "Cor": "Preto",
      "Compatibilidade": "Windows, macOS, Linux",
      "Garantia": "12 meses"
    },
    image: "/images/products/mouse/mouse-2.png"
  },
  {
    id: "mouse-hp-100-wired-6vy96aa",
    name: "Mouse com Fio HP USB 100 – Sensor Óptico de 1600 DPI, Design Ambidestro, Conectividade USB-A, Compatível com Windows e macOS, Plug & Play, Preto (6VY96AA)",
    shortName: "HP USB 100",
    category: "mouse",
    categoryIcon: Mouse,
    description: "Mouse HP USB 100 com sensor óptico de 1600 DPI para precisão superior. Design ambidestro confortável, plug and play via USB-A. Compatível com Windows e macOS, ideal para uso profissional diário com movimentos suaves em diversas superfícies.",
    features: [
      "Sensor óptico 1600 DPI preciso",
      "Design ambidestro ergonômico",
      "Plug & Play USB-A",
      "Compatível Windows e macOS",
      "Movimentos suaves e precisos",
      "Qualidade HP confiável"
    ],
    specifications: {
      "Marca": "HP",
      "Modelo": "HP 100 (6VY96AA)",
      "Conexão": "USB-A com fio",
      "Sensor": "Óptico vermelho",
      "DPI": "1600",
      "Botões": "3",
      "Comprimento do Cabo": "1.5m",
      "Design": "Ambidestro",
      "Dimensões": "103.4 x 61.1 x 34.2 mm",
      "Peso": "60g",
      "Cor": "Preto",
      "Compatibilidade": "Windows 7/8/10/11, macOS",
      "Garantia": "12 meses"
    },
    image: "/images/products/mouse/mouse-3.png"
  },
  {
    id: "mouse-hp-150-wired-240j6aa",
    name: "Mouse USB HP 150 - Plug and Play, com Design Elegante, Ambidestro e Ergonômico, Sensor Óptico 1600 DPI, Confortável e Preciso, Compatível com Windows, Cor Preta (240J6AA)",
    shortName: "HP 150",
    category: "mouse",
    categoryIcon: Mouse,
    description: "Mouse HP 150 com design elegante e ergonômico para máximo conforto. Sensor óptico de 1600 DPI para precisão em qualquer superfície. Plug and Play via USB, compatível com Windows. Formato ambidestro ideal para longas jornadas de trabalho.",
    features: [
      "Design elegante e ergonômico",
      "Sensor óptico 1600 DPI",
      "Plug and Play USB",
      "Ambidestro confortável",
      "Movimentos precisos",
      "Cabo de 1m"
    ],
    specifications: {
      "Marca": "HP",
      "Modelo": "HP 150 (240J6AA)",
      "Conexão": "USB Type-A com fio",
      "Sensor": "Óptico vermelho",
      "DPI": "1600",
      "Botões": "3 (programáveis)",
      "Comprimento do Cabo": "100cm",
      "Design": "Ambidestro ergonômico",
      "Dimensões": "103.4 x 61.1 x 34.2 mm",
      "Peso": "60g",
      "Cor": "Preto",
      "Compatibilidade": "Windows 7/8/10",
      "Garantia": "12 meses"
    },
    image: "/images/products/mouse/mouse-4.png"
  },
  {
    id: "mouse-redragon-ranger-m910-k",
    name: "Mouse Gamer Redragon Ranger Basic, c/Cabo 1,8m, 9 Botões Programáveis, 4000DPI, Preto - M910-K",
    shortName: "Redragon Ranger M910",
    category: "mouse",
    categoryIcon: Mouse,
    description: "Mouse gamer Redragon Ranger M910-K com 9 botões programáveis e DPI ajustável até 4000. Sensor óptico PIXART de alta performance, iluminação RGB Chroma e design ambidestro. Ideal para profissionais que precisam de precisão em design gráfico e edição.",
    features: [
      "9 botões totalmente programáveis",
      "DPI ajustável até 4000",
      "Sensor PIXART PMW3327",
      "Iluminação RGB Chroma",
      "Design ambidestro confortável",
      "Cabo trançado 1.8m"
    ],
    specifications: {
      "Marca": "Redragon",
      "Modelo": "Ranger M910-K",
      "Conexão": "USB com fio",
      "Sensor": "PIXART PMW3327",
      "DPI": "Ajustável 100-4000",
      "Aceleração": "30G",
      "Velocidade": "220 IPS",
      "Botões": "9 programáveis",
      "Iluminação": "RGB Chroma (7 modos)",
      "Cabo": "1.8m trançado",
      "Design": "Ambidestro",
      "Peso": "Aprox. 95g",
      "Compatibilidade": "Windows, macOS, Linux",
      "Garantia": "12 meses"
    },
    image: "/images/products/mouse/mouse-5.png"
  },

  // ==================== HEADSETS/FONES ====================
  {
    id: "headset-jbl-quantum-100m2",
    name: "JBL, Fone de Ouvido Com Fio, Quantum 100M2, Headset Gamer, Over Ear, Microfone Removível - Preto",
    shortName: "JBL Quantum 100M2",
    category: "headset",
    categoryIcon: Headphones,
    description: "Headset JBL Quantum 100M2 com JBL QuantumSOUND Signature para áudio imersivo. Microfone removível com cancelamento de ruído, espuma de memória confortável e compatibilidade multiplataforma. Ideal para videoconferências profissionais e comunicação empresarial.",
    features: [
      "JBL QuantumSOUND Signature",
      "Microfone removível com cancelamento de ruído",
      "Espuma de memória para conforto",
      "Compatível com múltiplas plataformas",
      "Controles integrados no cabo",
      "Design over-ear robusto"
    ],
    specifications: {
      "Marca": "JBL",
      "Modelo": "Quantum 100M2",
      "Tipo": "Over-Ear com fio",
      "Driver": "40mm",
      "Resposta de Frequência": "20Hz - 20kHz",
      "Impedância": "32 ohms",
      "Microfone": "Removível bidirecional",
      "Conexão": "P3 3.5mm",
      "Cabo": "1.2m",
      "Almofadas": "Espuma de memória",
      "Peso": "220g",
      "Cor": "Preto",
      "Compatibilidade": "PC, consoles, mobile",
      "Garantia": "12 meses"
    },
    image: "/images/products/headset/headset-1.png"
  },
  {
    id: "headset-dell-wh125-wired",
    name: "Headset com fio Dell — WH125",
    shortName: "Dell WH125",
    category: "headset",
    categoryIcon: Headphones,
    description: "Headset Dell WH125 profissional com microfone rotativo 270° e conectividade USB-A plug and play. Controles integrados para volume e mute, certificado para principais plataformas de videoconferência. Conforto garantido para longas jornadas de trabalho.",
    features: [
      "Microfone rotativo 270° (ambidestro)",
      "Plug and Play USB-A",
      "Controles de volume e mute integrados",
      "Certificado Teams, Zoom, WebEx",
      "Almofadas confortáveis",
      "Design profissional Dell"
    ],
    specifications: {
      "Marca": "Dell",
      "Modelo": "WH125",
      "Tipo": "Over-Ear com fio",
      "Conexão": "USB-A",
      "Driver": "27mm",
      "Resposta de Frequência": "20Hz - 20kHz",
      "Sensibilidade": "117 dB ±3dB",
      "Microfone": "Rotativo 270°, 100Hz-10kHz",
      "Cabo": "2.1m",
      "Controles": "Volume, Mute, Teams",
      "Peso": "Aprox. 150g",
      "Cor": "Preto",
      "Certificações": "Teams, Zoom, Google Meet, WebEx",
      "Garantia": "12 meses"
    },
    image: "/images/products/headset/headset-2.png"
  },
  {
    id: "headset-logitech-h390-usb",
    name: "Headset com fio USB Logitech H390 com Almofadas Confortáveis, Controles de Áudio Integrado e Microfone com Redução de Ruído - Preto",
    shortName: "Logitech H390",
    category: "headset",
    categoryIcon: Headphones,
    description: "Logitech H390 com áudio estéreo digital via USB e microfone com cancelamento de ruído. Almofadas giratórias ajustáveis para máximo conforto, controles de áudio integrados no cabo. Plug and play, ideal para comunicação profissional e videoconferências.",
    features: [
      "Áudio estéreo digital USB",
      "Microfone com cancelamento de ruído",
      "Almofadas giratórias ajustáveis",
      "Controles de volume e mute no cabo",
      "Plug and Play",
      "Qualidade Logitech confiável"
    ],
    specifications: {
      "Marca": "Logitech",
      "Modelo": "H390",
      "Tipo": "Over-Ear com fio",
      "Conexão": "USB Type-A",
      "Driver": "Laser-tuned",
      "Resposta de Frequência": "20Hz - 20kHz",
      "Microfone": "Boom giratório com cancelamento de ruído",
      "Controles": "Volume, Mute integrados",
      "Cabo": "1.9m",
      "Almofadas": "Espuma confortável",
      "Peso": "Aprox. 120g",
      "Cor": "Preto",
      "Compatibilidade": "Windows, macOS, Chrome OS",
      "Garantia": "24 meses"
    },
    image: "/images/products/headset/headset-3.png"
  },
  {
    id: "headset-redragon-zeus-lite-h510",
    name: "Headset Gamer Redragon Zeus Lite Preto P3 H510-LT",
    shortName: "Redragon Zeus Lite",
    category: "headset",
    categoryIcon: Headphones,
    description: "Headset gamer Redragon Zeus Lite H510-LT com drivers de 50mm para áudio potente. Microfone omnidirecional flexível, almofadas em couro sintético e design leve. Conexão P3 3.5mm compatível com PC, notebooks e dispositivos móveis.",
    features: [
      "Drivers de 50mm potentes",
      "Microfone omnidirecional flexível",
      "Almofadas em couro sintético",
      "Design leve e confortável",
      "Conexão P3 3.5mm universal",
      "Qualidade Redragon acessível"
    ],
    specifications: {
      "Marca": "Redragon",
      "Modelo": "Zeus Lite H510-LT",
      "Tipo": "Over-Ear com fio",
      "Driver": "50mm",
      "Impedância": "32 ohms ±15%",
      "Sensibilidade": "107dB ±3dB",
      "Resposta de Frequência": "20Hz - 20kHz",
      "Microfone": "Omnidirecional -42dB ±3dB",
      "Conexão": "P3 3.5mm",
      "Cabo": "2.0m",
      "Almofadas": "Couro sintético",
      "Peso": "Aprox. 250g",
      "Cor": "Preto",
      "Compatibilidade": "PC, notebook, mobile",
      "Garantia": "12 meses"
    },
    image: "/images/products/headset/headset-4.png"
  },
  {
    id: "headset-plantronics-blackwire-3220-usbc",
    name: "Headset com fio Blackwire 3220 USB-C + Adaptador USB-C/A",
    shortName: "Blackwire 3220 USB-C",
    category: "headset",
    categoryIcon: Headphones,
    description: "Plantronics Blackwire 3220 estéreo com conexão USB-C e adaptador USB-A incluído. Microfone com cancelamento de ruído, almofadas macias e controles inline. Certificado para principais plataformas UC, ideal para ambientes corporativos modernos.",
    features: [
      "Conexão USB-C (adaptador USB-A incluso)",
      "Microfone com cancelamento de ruído",
      "Certificado para Microsoft Teams",
      "Controles inline integrados",
      "Almofadas confortáveis",
      "Design profissional durável"
    ],
    specifications: {
      "Marca": "Plantronics (Poly)",
      "Modelo": "Blackwire 3220 USB-C",
      "Tipo": "Over-Ear estéreo com fio",
      "Conexão": "USB-C + adaptador USB-A",
      "Driver": "32mm",
      "Resposta de Frequência": "20Hz - 20kHz",
      "Microfone": "Boom com cancelamento de ruído",
      "Controles": "Volume, Mute, Call answer/end",
      "Cabo": "1.8m",
      "Almofadas": "Espuma macia",
      "Peso": "Aprox. 145g",
      "Certificações": "Microsoft Teams, Zoom, Skype",
      "Garantia": "24 meses"
    },
    image: "/images/products/headset/headset-5.png"
  },

  // ==================== CAIXAS DE SOM ====================
  {
    id: "caixa-som-jbl-flip-7",
    name: "JBL, Caixa de Som, FLIP 7 - Preta",
    shortName: "JBL FLIP 7",
    category: "caixa-som",
    categoryIcon: Speaker,
    description: "JBL FLIP 7 com JBL Pro Sound e tecnologia AI Sound Boost para áudio potente. Até 16 horas de bateria, à prova d'água, poeira e quedas (IP67). Multi-speaker connection via Auracast™ e lossless audio playback. Perfeita para apresentações e eventos corporativos.",
    features: [
      "JBL Pro Sound com AI Sound Boost",
      "Até 16 horas de bateria",
      "À prova d'água, poeira e quedas (IP67)",
      "Multi-speaker via Auracast™",
      "Lossless Audio Playback",
      "JBL Portable App"
    ],
    specifications: {
      "Marca": "JBL",
      "Modelo": "FLIP 7",
      "Potência": "20W RMS",
      "Bateria": "Até 16 horas",
      "Bluetooth": "5.3",
      "À Prova D'Água": "IP67",
      "Conexão Múltipla": "Auracast™",
      "Entrada": "USB-C",
      "Dimensões": "Aprox. 178 x 69 x 72 mm",
      "Peso": "Aprox. 550g",
      "Cor": "Preta",
      "Material": "Plástico reciclado + tecido",
      "Garantia": "12 meses"
    },
    image: "/images/products/speaker/speaker-1.png"
  },
  {
    id: "caixa-som-jbl-partybox-encore-essential",
    name: "JBL, Caixa de Som Bluetooth, PartyBox Encore Essential",
    shortName: "PartyBox Encore",
    category: "caixa-som",
    categoryIcon: Speaker,
    description: "JBL PartyBox Encore Essential com 100W de potência e show de luzes dinâmico sincronizado. 6 horas de bateria, IPX4 à prova de respingos, entrada para microfone com fio e multisource playback. Ideal para eventos corporativos e apresentações.",
    features: [
      "100W JBL Original Pro Sound",
      "Show de luzes sincronizado com música",
      "6 horas de bateria",
      "IPX4 à prova de respingos",
      "Entrada para microfone",
      "PartyBox App para controle"
    ],
    specifications: {
      "Marca": "JBL",
      "Modelo": "PartyBox Encore Essential",
      "Potência": "100W RMS",
      "Bateria": "6 horas",
      "Bluetooth": "5.3",
      "À Prova de Respingos": "IPX4",
      "Entrada Mic": "6.3mm (1/4\")",
      "Show de Luzes": "LED dinâmico",
      "Dimensões": "293 x 326 x 293 mm",
      "Peso": "Aprox. 5.9kg",
      "Alça": "Grab-and-go",
      "App": "JBL PartyBox",
      "Garantia": "12 meses"
    },
    image: "/images/products/speaker/speaker-2.png"
  },
  {
    id: "caixa-som-jbl-partybox-stage-320",
    name: "JBL, Caixa de Som, PartyBox Stage 320, Bluetooth, Portátil, Show de Luzes, À Prova de Respingos - 240W RMS",
    shortName: "PartyBox Stage 320",
    category: "caixa-som",
    categoryIcon: Speaker,
    description: "JBL PartyBox Stage 320 com 240W RMS de potência, show de luzes futurista e até 18 horas de bateria. Rodas resistentes e alça telescópica para fácil transporte. AI Sound Boost, Auracast™ e entradas duplas para microfone e guitarra.",
    features: [
      "240W RMS JBL Pro Sound",
      "Show de luzes futurista",
      "Até 18 horas de bateria",
      "Rodas e alça telescópica",
      "AI Sound Boost",
      "Dual Mic & Guitar Inputs"
    ],
    specifications: {
      "Marca": "JBL",
      "Modelo": "PartyBox Stage 320",
      "Potência": "240W RMS",
      "Bateria": "Até 18 horas",
      "Bluetooth": "5.3 com Auracast™",
      "À Prova de Respingos": "IPX4",
      "Entradas": "2x Mic (XLR/6.3mm), 2x Guitarra",
      "Show de Luzes": "LED futurista",
      "Rodas": "Wide sturdy wheels",
      "Dimensões": "Aprox. 369 x 688 x 362 mm",
      "Peso": "Aprox. 17.2kg",
      "App": "JBL PartyBox",
      "Garantia": "12 meses"
    },
    image: "/images/products/speaker/speaker-3.png"
  },
  {
    id: "caixa-som-c3tech-sp-301bk",
    name: "C3Tech Caixa de som SP-301BK Preto - Sistema de audio 2.0 P2 Com Blindagem Eletromagnética alimentacao via porta USB",
    shortName: "C3Tech SP-301BK",
    category: "caixa-som",
    categoryIcon: Speaker,
    description: "Caixa de som C3Tech SP-301BK sistema 2.0 compacto para PC. Conexão P2 (3.5mm) e alimentação via USB, blindagem eletromagnética e controle de volume integrado. Ideal para estações de trabalho, apresentações e uso office.",
    features: [
      "Sistema 2.0 estéreo",
      "Conexão P2 (3.5mm)",
      "Alimentação via USB",
      "Blindagem eletromagnética",
      "Controle de volume integrado",
      "Design compacto e moderno"
    ],
    specifications: {
      "Marca": "C3Tech",
      "Modelo": "SP-301BK",
      "Sistema": "2.0 estéreo",
      "Potência": "3W RMS (1.5W x 2)",
      "Conexão Áudio": "P2 3.5mm",
      "Alimentação": "USB 5V",
      "Resposta de Frequência": "80Hz - 20kHz",
      "Impedância": "4 ohms",
      "Controle": "Volume integrado",
      "Blindagem": "Eletromagnética",
      "Dimensões": "Compactas",
      "Cor": "Preto",
      "Compatibilidade": "PC, notebook, smartphone",
      "Garantia": "12 meses"
    },
    image: "/images/products/speaker/speaker-4.png"
  },
  {
    id: "caixa-som-jbl-boombox-4",
    name: "Caixa de Som Bluetooth JBL Boombox 4 À Prova D'água e Poeira IP68 - Preta",
    shortName: "JBL Boombox 4",
    category: "caixa-som",
    categoryIcon: Speaker,
    description: "JBL Boombox 4 com AI Sound Boost para áudio otimizado em tempo real. Até 34 horas de bateria com Playtime Boost, certificação IP68 à prova d'água e poeira. Design mais leve com 2 woofers de 5\", 2 tweeters e 3 radiadores passivos para graves massivos. Conexão Auracast para múltiplas caixas.",
    features: [
      "AI Sound Boost - áudio otimizado automaticamente",
      "Até 34 horas de bateria (Playtime Boost)",
      "IP68 à prova d'água e poeira",
      "2 woofers 5\" + 2 tweeters + 3 radiadores passivos",
      "Auracast para conexão múltipla",
      "Design mais leve que gerações anteriores"
    ],
    specifications: {
      "Marca": "JBL",
      "Modelo": "Boombox 4",
      "Potência": "Alto volume com graves profundos",
      "Bateria": "Até 34 horas (Playtime Boost) / 28h padrão",
      "Bluetooth": "Com Auracast",
      "À Prova D'Água/Poeira": "IP68",
      "Drivers": "2x woofers 5\" + 2x tweeters + 3x radiadores passivos",
      "Tecnologia": "AI Sound Boost",
      "Powerbank": "USB para carregar dispositivos",
      "Alça": "Integrada ergonômica",
      "Cor": "Preto",
      "App": "JBL Portable",
      "Garantia": "12 meses"
    },
    image: "/images/products/speaker/speaker-5.png"
  },

  // ==================== PROJETORES ====================
  {
    id: "projetor-intelbras-pfl5211-wifi",
    name: "PROJETOR WIFI INTELBRAS FULL HD 5200 LUMENS PFL5211-4290057",
    shortName: "Intelbras PFL5211",
    category: "projetor",
    categoryIcon: Projector,
    description: "Projetor Intelbras PFL5211 Full HD com 5200 lúmens e Wi-Fi integrado. Tecnologia LED, espelhamento sem fio e Bluetooth para áudio. Ideal para salas de reunião e apresentações corporativas com projeções de até 150 polegadas em Full HD 1080p.",
    features: [
      "5200 lúmens de brilho",
      "Resolução Full HD 1080p",
      "Wi-Fi integrado para espelhamento",
      "Bluetooth para áudio sem fio",
      "Projeção até 150 polegadas",
      "Correção trapezoidal"
    ],
    specifications: {
      "Marca": "Intelbras",
      "Modelo": "PFL5211 (4290057)",
      "Tecnologia": "LED",
      "Brilho": "5200 lúmens ANSI",
      "Resolução Nativa": "Full HD 1080p (1920x1080)",
      "Contraste": "3000:1",
      "Conectividade": "Wi-Fi, Bluetooth, HDMI, USB, VGA",
      "Projeção": "30\" a 150\"",
      "Distância": "1m a 5m",
      "Correção Trapezoidal": "Vertical ±40°",
      "Vida Útil LED": "Até 30.000 horas",
      "Alto-falantes": "2x 5W",
      "Garantia": "12 meses"
    },
    image: "/images/products/projector/projector-1.png"
  },
  {
    id: "projetor-bettdow-4k-24000-lumens",
    name: "Bettdow Projetor 4k 8k 24000 Lumens Hd 1080p Compatível Completo De Android 12, Smart Projetores Retroprojetor Portatil 700 ANSI WiFi6 BT4,2, Auto Correção Trapezoidal, Foco Eletronico",
    shortName: "Bettdow 4K 24000L",
    category: "projetor",
    categoryIcon: Projector,
    description: "Projetor Bettdow com suporte 4K/8K, 24000 lúmens (700 ANSI), Android 12 integrado e Wi-Fi 6. Auto correção trapezoidal, foco eletrônico e Bluetooth 4.2. Ideal para grandes apresentações, treinamentos e eventos corporativos com conectividade total.",
    features: [
      "Suporte 4K/8K compatível",
      "24000 lúmens (700 ANSI reais)",
      "Android 12 completo integrado",
      "Wi-Fi 6 e Bluetooth 4.2",
      "Auto correção trapezoidal",
      "Foco eletrônico automático"
    ],
    specifications: {
      "Marca": "Bettdow",
      "Brilho": "24000 lúmens (700 ANSI)",
      "Resolução Nativa": "1080p Full HD",
      "Suporte": "4K/8K compatível",
      "Sistema": "Android 12",
      "Wi-Fi": "Wi-Fi 6 (802.11ax)",
      "Bluetooth": "4.2",
      "Conectividade": "HDMI, USB, AV, VGA",
      "Correção": "Auto trapezoidal",
      "Foco": "Eletrônico automático",
      "Projeção": "40\" a 300\"",
      "Alto-falantes": "2x 5W estéreo",
      "Garantia": "12 meses"
    },
    image: "/images/products/projector/projector-2.png"
  },
  {
    id: "projetor-mini-5g-wifi6-android11",
    name: "Mini Projetor Portátil 5G Wi-Fi 6 Bluetooth 5.0 Android 11 4K 1080P Full HD 8000 Lumens LED Auto Correção Trapezoidal Horizontal Rotação 180° Ideal para Projeções Cinemáticas",
    shortName: "Mini Projetor 8000L",
    category: "projetor",
    categoryIcon: Projector,
    description: "Mini projetor portátil com 8000 lúmens, Wi-Fi 6 (5G), Bluetooth 5.0 e Android 11. Suporte 4K, Full HD 1080p nativo, auto correção trapezoidal e rotação 180°. Compacto e versátil para apresentações móveis e treinamentos externos.",
    features: [
      "8000 lúmens LED portátil",
      "Wi-Fi 6 (5G) ultra rápido",
      "Bluetooth 5.0",
      "Android 11 integrado",
      "Auto correção trapezoidal horizontal",
      "Rotação 180° versátil"
    ],
    specifications: {
      "Tipo": "Mini Projetor Portátil",
      "Brilho": "8000 lúmens",
      "Resolução Nativa": "1080p Full HD",
      "Suporte": "4K compatível",
      "Sistema": "Android 11",
      "Wi-Fi": "Wi-Fi 6 (5G dual band)",
      "Bluetooth": "5.0",
      "Conectividade": "HDMI, USB, AV",
      "Correção": "Auto trapezoidal horizontal",
      "Rotação": "180°",
      "Projeção": "40\" a 200\"",
      "Alto-falantes": "2x 3W",
      "Portátil": "Compacto",
      "Garantia": "12 meses"
    },
    image: "/images/products/projector/projector-3.png"
  },
  {
    id: "projetor-epson-powerlite-e20",
    name: "EPSON Projetor Powerlite E20, 3400 Lúmens, XGA, HDMI, Branco, Bivolt",
    shortName: "Epson PowerLite E20",
    category: "projetor",
    categoryIcon: Projector,
    description: "Projetor Epson PowerLite E20 com tecnologia 3LCD para cores brilhantes. 3400 lúmens de brilho, resolução XGA e conectividade completa. Ideal para salas de aula, treinamentos corporativos e apresentações profissionais com qualidade Epson comprovada.",
    features: [
      "3400 lúmens de brilho",
      "Tecnologia 3LCD Epson",
      "Resolução XGA (1024x768)",
      "HDMI e VGA integrados",
      "Projeção até 100+ polegadas",
      "Qualidade e confiabilidade Epson"
    ],
    specifications: {
      "Marca": "Epson",
      "Modelo": "PowerLite E20",
      "Tecnologia": "3LCD",
      "Brilho": "3400 lúmens (cores e branco)",
      "Resolução": "XGA (1024x768)",
      "Contraste": "15.000:1",
      "Conectividade": "HDMI, VGA, USB",
      "Projeção": "30\" a 350\"",
      "Correção Trapezoidal": "Vertical ±30°",
      "Lâmpada": "Até 12.000 horas (eco)",
      "Alto-falante": "2W mono",
      "Voltagem": "Bivolt automático",
      "Cor": "Branco",
      "Garantia": "12 meses"
    },
    image: "/images/products/projector/projector-4.png"
  },
  {
    id: "projetor-intelbras-pfl6410-fullhd",
    name: "Projetor Full HD 3800 Lumens PFL 6410 Branco Intelbras",
    shortName: "Intelbras PFL 6410",
    category: "projetor",
    categoryIcon: Projector,
    description: "Projetor Intelbras PFL 6410 Full HD com 3800 lúmens e espelhamento sem fio. Bluetooth integrado para áudio, projeção até 150 polegadas e resolução nativa 1080p. Ideal para ambientes corporativos que exigem qualidade de imagem profissional.",
    features: [
      "3800 lúmens de brilho",
      "Full HD 1080p nativo",
      "Espelhamento de tela sem fio",
      "Bluetooth para áudio",
      "Projeção até 150 polegadas",
      "Correção trapezoidal automática"
    ],
    specifications: {
      "Marca": "Intelbras",
      "Modelo": "PFL 6410",
      "Tecnologia": "LED",
      "Brilho": "3800 lúmens",
      "Resolução Nativa": "Full HD 1080p (1920x1080)",
      "Contraste": "3000:1",
      "Conectividade": "Wi-Fi, Bluetooth, HDMI, USB, VGA",
      "Espelhamento": "Android/iOS sem fio",
      "Projeção": "40\" a 150\"",
      "Correção Trapezoidal": "Auto vertical",
      "Vida Útil LED": "30.000 horas",
      "Alto-falantes": "2x 5W estéreo",
      "Cor": "Branco",
      "Garantia": "12 meses"
    },
    image: "/images/products/projector/projector-5.png"
  },

  // ==================== ROTEADORES ====================
  {
    id: "roteador-tplink-archer-ax12-ax1500",
    name: "Roteador AX1500 Wi-Fi 6 TP-Link Archer AX12",
    shortName: "TP-Link Archer AX12",
    category: "roteador",
    categoryIcon: Wifi,
    description: "Roteador TP-Link Archer AX12 com tecnologia Wi-Fi 6 (802.11ax) e velocidades até 1.5Gbps. OFDMA e MU-MIMO para múltiplos dispositivos simultâneos, 4 antenas para cobertura ampla e portas Gigabit. Ideal para escritórios modernos com muitos dispositivos conectados.",
    features: [
      "Wi-Fi 6 (802.11ax) até 1.5Gbps",
      "OFDMA para múltiplos dispositivos",
      "4 antenas de alta performance",
      "Portas Gigabit Ethernet",
      "Beamforming direcional",
      "WPA3 segurança avançada"
    ],
    specifications: {
      "Marca": "TP-Link",
      "Modelo": "Archer AX12",
      "Padrão": "Wi-Fi 6 (802.11ax)",
      "Velocidade": "AX1500 (300Mbps 2.4GHz + 1201Mbps 5GHz)",
      "Antenas": "4 antenas fixas",
      "Portas LAN": "4x Gigabit Ethernet",
      "Porta WAN": "1x Gigabit",
      "Processador": "Dual-core",
      "Tecnologias": "OFDMA, MU-MIMO, Beamforming",
      "Segurança": "WPA3",
      "App": "TP-Link Tether",
      "Dimensões": "260.2 x 135 x 38.6 mm",
      "Garantia": "24 meses"
    },
    image: "/images/products/router/router-1.png"
  },
  {
    id: "roteador-tplink-archer-ax72-ax5400",
    name: "Roteador AX5400 Wi-Fi 6 TP-Link Archer AX72",
    shortName: "TP-Link Archer AX72",
    category: "roteador",
    categoryIcon: Wifi,
    description: "TP-Link Archer AX72 com Wi-Fi 6 de alta velocidade (AX5400) para streaming 8K e downloads ultra rápidos. 6 antenas, processador quad-core 1.7GHz e portas Gigabit. Perfeito para ambientes empresariais com alta demanda de rede e múltiplos usuários simultâneos.",
    features: [
      "Wi-Fi 6 AX5400 (574 + 4804 Mbps)",
      "6 antenas para cobertura máxima",
      "Processador Quad-core 1.7GHz",
      "OFDMA e MU-MIMO 4x4",
      "Portas Gigabit completas",
      "HomeShield segurança avançada"
    ],
    specifications: {
      "Marca": "TP-Link",
      "Modelo": "Archer AX72",
      "Padrão": "Wi-Fi 6 (802.11ax)",
      "Velocidade": "AX5400 (574Mbps 2.4GHz + 4804Mbps 5GHz)",
      "Antenas": "6 antenas fixas",
      "Processador": "Quad-core 1.7GHz",
      "Portas LAN": "4x Gigabit",
      "Porta WAN": "1x Gigabit",
      "USB": "1x USB 3.0",
      "Tecnologias": "OFDMA, MU-MIMO 4x4, Beamforming",
      "Segurança": "WPA3, HomeShield",
      "App": "TP-Link Tether",
      "Garantia": "24 meses"
    },
    image: "/images/products/router/router-2.png"
  },
  {
    id: "roteador-tplink-archer-ax53-ax3000",
    name: "Roteador TP-Link Archer AX53",
    shortName: "TP-Link Archer AX53",
    category: "roteador",
    categoryIcon: Wifi,
    description: "TP-Link Archer AX53 com Wi-Fi 6 AX3000 oferecendo velocidades até 3Gbps combinadas. 4 antenas, OFDMA, MU-MIMO e OneMesh™ compatível para expansão de rede. Ideal para pequenos e médios escritórios com necessidade de rede estável e rápida.",
    features: [
      "Wi-Fi 6 AX3000 (574 + 2402 Mbps)",
      "4 antenas de alto ganho",
      "OFDMA e MU-MIMO",
      "OneMesh™ compatível",
      "Largura de banda 160MHz",
      "HomeShield incluído"
    ],
    specifications: {
      "Marca": "TP-Link",
      "Modelo": "Archer AX53",
      "Padrão": "Wi-Fi 6 (802.11ax)",
      "Velocidade": "AX3000 (574Mbps 2.4GHz + 2402Mbps 5GHz)",
      "Antenas": "4 antenas externas",
      "Processador": "Dual-core",
      "Portas LAN": "4x Gigabit",
      "Porta WAN": "1x Gigabit",
      "Largura de Banda": "160MHz",
      "Tecnologias": "OFDMA, MU-MIMO, Beamforming",
      "OneMesh": "Sim",
      "Segurança": "WPA3, HomeShield",
      "App": "TP-Link Tether",
      "Garantia": "24 meses"
    },
    image: "/images/products/router/router-3.png"
  },
  {
    id: "roteador-wireless-n-300mbps-4portas",
    name: "Roteador wireless n 300 mbps, com antenas externa, 4 portas lan 10/100",
    shortName: "Roteador N 300Mbps",
    category: "roteador",
    categoryIcon: Wifi,
    description: "Roteador Wireless N 300Mbps com antenas externas para melhor alcance. 4 portas LAN 10/100, WPS para configuração fácil e segurança WPA2. Solução econômica e confiável para pequenos escritórios e ambientes com necessidades básicas de rede.",
    features: [
      "300Mbps Wireless N",
      "Antenas externas destacáveis",
      "4 portas LAN 10/100",
      "Botão WPS para fácil configuração",
      "Segurança WPA/WPA2",
      "Controle de largura de banda"
    ],
    specifications: {
      "Padrão": "IEEE 802.11n/g/b",
      "Velocidade": "300Mbps (2.4GHz)",
      "Antenas": "2x externas destacáveis",
      "Portas LAN": "4x 10/100Mbps",
      "Porta WAN": "1x 10/100Mbps",
      "Frequência": "2.4GHz",
      "Segurança": "WPA-PSK/WPA2-PSK, WEP",
      "Firewall": "SPI Firewall",
      "WPS": "Sim",
      "Botão On/Off": "Sim",
      "Dimensões": "Compacto",
      "Garantia": "12 meses"
    },
    image: "/images/products/router/router-4.png"
  },
  {
    id: "roteador-intelbras-ap1250-acmax",
    name: "Roteador Access Point Empresarial AP 1250 AC MAX Branco Intelbras",
    shortName: "Intelbras AP 1250",
    category: "roteador",
    categoryIcon: Wifi,
    description: "Access Point empresarial Intelbras AP 1250 AC MAX suportando até 350 usuários simultâneos. Velocidade 1167Mbps AC, tecnologias MU-MIMO, Beamforming e Fast Roaming. Ideal para hotéis, empresas e eventos com alta densidade de usuários conectados.",
    features: [
      "Até 350 usuários simultâneos",
      "1167Mbps AC (867 + 300 Mbps)",
      "MU-MIMO e Beamforming",
      "Fast Roaming para mobilidade",
      "Alimentação PoE",
      "Gerenciamento centralizado"
    ],
    specifications: {
      "Marca": "Intelbras",
      "Modelo": "AP 1250 AC MAX",
      "Padrão": "IEEE 802.11ac/n/g/b/a",
      "Velocidade": "1167Mbps (300Mbps 2.4GHz + 867Mbps 5GHz)",
      "Usuários": "Até 350 simultâneos",
      "Antenas": "Internas de alto ganho",
      "Tecnologias": "MU-MIMO, Beamforming, Fast Roaming",
      "PoE": "IEEE 802.3af/at",
      "Portas": "1x Gigabit PoE",
      "Gerenciamento": "Controladora ou standalone",
      "Segurança": "WPA2, WPA3",
      "Cor": "Branco",
      "Montagem": "Teto ou parede",
      "Garantia": "12 meses"
    },
    image: "/images/products/router/router-5.png"
  },

  // ==================== SWITCHES ====================
  {
    id: "switch-tplink-er605-vpn-router",
    name: "TP-Link ER605 – Roteador VPN Multi-WAN",
    shortName: "TP-Link ER605",
    category: "switch",
    categoryIcon: Network,
    description: "Roteador VPN Gigabit TP-Link ER605 Omada com suporte a múltiplas WANs e VPN robusta (IPSec/OpenVPN/PPTP/L2TP). Gerenciamento centralizado Omada SDN, load balance e firewall avançado. Ideal para filiais e redes corporativas que exigem conexões seguras.",
    features: [
      "VPN robusta (IPSec, OpenVPN, PPTP, L2TP)",
      "Multi-WAN (1 WAN + 2 WAN/LAN)",
      "Gerenciamento Omada SDN",
      "Load Balance inteligente",
      "Firewall robusto",
      "Portas Gigabit"
    ],
    specifications: {
      "Marca": "TP-Link",
      "Modelo": "ER605 (Omada)",
      "Tipo": "Roteador VPN Gateway",
      "Portas WAN": "1 Gigabit + 2 Gigabit WAN/LAN",
      "Portas LAN": "1 Gigabit fixo",
      "USB": "1x USB 2.0",
      "VPN": "IPSec, OpenVPN, PPTP, L2TP",
      "Throughput VPN": "Até 40 Mbps (IPSec)",
      "Load Balance": "Sim",
      "Firewall": "SPI, DoS defense",
      "VLAN": "Sim (até 256)",
      "Gerenciamento": "Omada Controller/Cloud",
      "Dimensões": "Rack 19\" 1U",
      "Garantia": "Vitalícia limitada"
    },
    image: "/images/products/switch/switch-1.png"
  },
  {
    id: "switch-tplink-tl-sg108-8portas",
    name: "Switch TP-Link TL-SG108 – 8 portas Gigabit",
    shortName: "TP-Link SG108",
    category: "switch",
    categoryIcon: Network,
    description: "Switch TP-Link TL-SG108 de 8 portas Gigabit não gerenciável para desktop. Design metálico compacto, plug and play e eficiência energética. Ideal para pequenos escritórios que precisam expandir a rede cabeada com velocidade e confiabilidade.",
    features: [
      "8 portas Gigabit 10/100/1000Mbps",
      "Plug and Play sem configuração",
      "Gabinete metálico resistente",
      "Tecnologia Green Ethernet",
      "Auto-negociação e Auto-MDI/MDIX",
      "Fanless (sem ventoinhas)"
    ],
    specifications: {
      "Marca": "TP-Link",
      "Modelo": "TL-SG108",
      "Tipo": "Switch não gerenciável",
      "Portas": "8x Gigabit RJ45 10/100/1000Mbps",
      "Padrão": "IEEE 802.3, 802.3u, 802.3ab, 802.3x",
      "Switching Capacity": "16Gbps",
      "Packet Forwarding": "11.9Mpps",
      "MAC Address": "4K",
      "Buffer": "128KB",
      "Green Ethernet": "Sim (até 75% economia)",
      "Ventilação": "Fanless (passiva)",
      "Montagem": "Desktop",
      "Dimensões": "158 x 101 x 25 mm",
      "Garantia": "Vitalícia limitada"
    },
    image: "/images/products/switch/switch-2.png"
  },
  {
    id: "switch-tplink-tl-sg116e-16portas",
    name: "TP-Link TL-SG116E – Switch Gigabit 16 portas, Gerenciamento Inteligente",
    shortName: "TP-Link SG116E",
    category: "switch",
    categoryIcon: Network,
    description: "Switch Easy Smart TP-Link TL-SG116E com 16 portas Gigabit e gerenciamento inteligente via web. VLAN, QoS, IGMP Snooping e monitoramento de tráfego. Ideal para empresas que precisam de controle básico de rede com custo-benefício.",
    features: [
      "16 portas Gigabit gerenciáveis",
      "Easy Smart gerenciamento web",
      "VLAN (Port/802.1Q) até 32",
      "QoS (802.1p) 4 filas",
      "IGMP Snooping",
      "Monitoramento de tráfego"
    ],
    specifications: {
      "Marca": "TP-Link",
      "Modelo": "TL-SG116E",
      "Tipo": "Easy Smart Switch",
      "Portas": "16x Gigabit 10/100/1000Mbps",
      "Padrão": "IEEE 802.3, 802.3u, 802.3ab, 802.3x",
      "Switching Capacity": "32Gbps",
      "Packet Forwarding": "23.8Mpps",
      "VLAN": "Port-based, 802.1Q (até 32)",
      "QoS": "802.1p (4 filas)",
      "IGMP Snooping": "V1/V2/V3",
      "Gerenciamento": "Web GUI",
      "Ventilação": "Fanless",
      "Montagem": "Desktop/Rack 19\"",
      "Garantia": "Vitalícia limitada"
    },
    image: "/images/products/switch/switch-3.png"
  },
  {
    id: "switch-tplink-tl-sg1024d-24portas",
    name: "Switch 24 Portas Gigabit TP-Link TL-SG1024D",
    shortName: "TP-Link SG1024D",
    category: "switch",
    categoryIcon: Network,
    description: "Switch TP-Link TL-SG1024D de 24 portas Gigabit não gerenciável para rack ou desktop. Switching capacity de 48Gbps, tecnologia Green Ethernet e gabinete metálico robusto. Ideal para médias empresas com necessidade de muitas conexões cabeadas.",
    features: [
      "24 portas Gigabit 10/100/1000Mbps",
      "Switching capacity 48Gbps",
      "Green Ethernet economiza energia",
      "Gabinete metálico rack 19\"",
      "Auto-negociação e Auto-MDI/MDIX",
      "Fanless operation silenciosa"
    ],
    specifications: {
      "Marca": "TP-Link",
      "Modelo": "TL-SG1024D",
      "Tipo": "Switch não gerenciável",
      "Portas": "24x Gigabit 10/100/1000Mbps",
      "Padrão": "IEEE 802.3, 802.3u, 802.3ab, 802.3x",
      "Switching Capacity": "48Gbps",
      "Packet Forwarding": "35.7Mpps",
      "MAC Address": "8K",
      "Buffer": "256KB",
      "Green Ethernet": "Sim (até 60% economia)",
      "Ventilação": "Fanless",
      "Montagem": "Rack 19\" 1U ou Desktop",
      "Dimensões": "440 x 180 x 44 mm",
      "Garantia": "Vitalícia limitada"
    },
    image: "/images/products/switch/switch-4.png"
  },
  {
    id: "switch-intelbras-sg5204mr-l2-48portas",
    name: "SWITCH GERENCIÁVEL 48 PORTAS GIGABIT + 4 GBIC SG 5204 MR L2+ – INTELBRAS",
    shortName: "Intelbras SG 5204 MR",
    category: "switch",
    categoryIcon: Network,
    description: "Switch gerenciável Intelbras SG 5204 MR L2+ com 48 portas Gigabit + 4 slots GBIC (SFP). Gerenciamento avançado L2+, VLAN, QoS, Spanning Tree, ACL e muito mais. Ideal para grandes empresas e data centers que exigem controle total da rede.",
    features: [
      "48 portas Gigabit + 4 GBIC (SFP)",
      "Gerenciamento L2+ avançado",
      "VLAN (802.1Q), STP/RSTP/MSTP",
      "QoS, ACL, IGMP Snooping",
      "Empilhamento (stacking)",
      "Redundância de fonte de alimentação"
    ],
    specifications: {
      "Marca": "Intelbras",
      "Modelo": "SG 5204 MR L2+",
      "Tipo": "Switch gerenciável L2+",
      "Portas": "48x Gigabit RJ45 + 4x SFP Gigabit",
      "Switching Capacity": "104Gbps",
      "Packet Forwarding": "77.4Mpps",
      "VLAN": "802.1Q (até 4096)",
      "Spanning Tree": "STP, RSTP, MSTP",
      "QoS": "802.1p, DSCP",
      "ACL": "L2/L3/L4",
      "Empilhamento": "Até 8 switches",
      "Gerenciamento": "Web, CLI, SNMP, Telnet",
      "Fonte": "Redundante (opcional)",
      "Montagem": "Rack 19\" 1U",
      "Garantia": "12 meses"
    },
    image: "/images/products/switch/switch-5.png"
  },

  // ==================== IMPRESSORAS ====================
  {
    id: "impressora-epson-ecotank-l4260",
    name: "Epson Ecotank L4260 – Multifuncional Tanque de Tinta",
    shortName: "Epson EcoTank L4260",
    category: "impressora",
    categoryIcon: Printer,
    description: "Multifuncional Epson EcoTank L4260 com sistema de tanque de tinta, Wi-Fi, impressão frente e verso automática e scanner com tampa articulada. Economia de até 90% em custos de impressão. Ideal para escritórios com alto volume de impressão colorida.",
    features: [
      "Sistema tanque de tinta EcoTank",
      "Multifuncional 3 em 1 (Impressão, Cópia, Scanner)",
      "Wi-Fi integrado",
      "Duplex automático",
      "Scanner com tampa articulada",
      "Até 7500 páginas preto / 6000 coloridas"
    ],
    specifications: {
      "Marca": "Epson",
      "Modelo": "EcoTank L4260",
      "Tipo": "Multifuncional Tanque de Tinta",
      "Funções": "Impressão, Cópia, Scanner",
      "Tecnologia": "Jato de tinta 4 cores (CMYK)",
      "Resolução Impressão": "Até 5760 x 1440 dpi",
      "Velocidade": "10 ppm preto, 5 ppm colorido (ISO)",
      "Conectividade": "Wi-Fi, Wi-Fi Direct, USB",
      "Duplex": "Automático",
      "Scanner": "Flatbed até 1200 dpi",
      "Rendimento": "Até 7500 págs preto, 6000 colorido",
      "Bandeja": "100 folhas",
      "Garantia": "12 meses"
    },
    image: "/images/products/printer/printer-1.png"
  },
  {
    id: "impressora-epson-ecotank-l5590",
    name: "Multifuncional Epson EcoTank L5590 – Wi-Fi, Ethernet, ADF, Fax",
    shortName: "Epson EcoTank L5590",
    category: "impressora",
    categoryIcon: Printer,
    description: "Multifuncional Epson EcoTank L5590 completa com Wi-Fi, Ethernet, ADF de 50 folhas e Fax integrado. Sistema de tanque de tinta para até 3 anos de uso. Perfeita para escritórios que precisam de todas as funções com economia e produtividade máxima.",
    features: [
      "Multifuncional completa com Fax",
      "ADF de 50 folhas",
      "Wi-Fi e Ethernet",
      "Duplex automático",
      "Tanque de tinta de alto rendimento",
      "Até 3 anos de tinta incluída"
    ],
    specifications: {
      "Marca": "Epson",
      "Modelo": "EcoTank L5590",
      "Tipo": "Multifuncional Tanque de Tinta",
      "Funções": "Impressão, Cópia, Scanner, Fax",
      "Tecnologia": "Jato de tinta 4 cores (CMYK)",
      "Resolução": "Até 4800 x 1200 dpi",
      "Velocidade": "15 ppm preto, 8 ppm colorido",
      "Conectividade": "Wi-Fi, Ethernet, USB, Wi-Fi Direct",
      "Duplex": "Automático",
      "ADF": "50 folhas",
      "Fax": "Sim, Super G3",
      "Rendimento": "Até 14.000 págs preto, 11.200 colorido",
      "Bandeja": "250 folhas",
      "Garantia": "12 meses"
    },
    image: "/images/products/printer/printer-2.png"
  },
  {
    id: "impressora-brother-dcpl1632w-laser",
    name: "Multifuncional Laser Mono Brother DCPL1632W Wi-Fi",
    shortName: "Brother DCPL1632W",
    category: "impressora",
    categoryIcon: Printer,
    description: "Multifuncional laser monocromática Brother DCP-L1632W com Wi-Fi integrado. Velocidade de 20ppm, scanner flatbed e bandeja de 150 folhas. Ideal para escritórios que precisam de impressão rápida em preto e branco com qualidade laser profissional.",
    features: [
      "Tecnologia laser monocromática",
      "20 páginas por minuto",
      "Wi-Fi integrado",
      "Scanner flatbed A4",
      "Bandeja 150 folhas",
      "Toner de alto rendimento disponível"
    ],
    specifications: {
      "Marca": "Brother",
      "Modelo": "DCP-L1632W",
      "Tipo": "Multifuncional Laser Monocromática",
      "Funções": "Impressão, Cópia, Scanner",
      "Tecnologia": "Laser",
      "Resolução": "Até 2400 x 600 dpi (HQ1200)",
      "Velocidade": "20 ppm",
      "Conectividade": "Wi-Fi, Wi-Fi Direct, USB",
      "Scanner": "Flatbed até 600 x 2400 dpi",
      "Toner Inicial": "700 páginas",
      "Toner Padrão": "1.200 páginas",
      "Toner Alto Rendimento": "2.600 páginas",
      "Bandeja": "150 folhas",
      "Ciclo Mensal": "10.000 páginas",
      "Garantia": "12 meses"
    },
    image: "/images/products/printer/printer-3.png"
  },
  {
    id: "impressora-hp-laser-107w",
    name: "Impressora HP Laser 107w – Laser Monocromática Wi-Fi",
    shortName: "HP Laser 107w",
    category: "impressora",
    categoryIcon: Printer,
    description: "Impressora HP Laser 107w monocromática compacta com Wi-Fi para impressão sem fio. 20ppm, bandeja de 150 folhas e tecnologia Auto-On/Auto-Off para economia de energia. Ideal para home offices e pequenos escritórios que buscam simplicidade e velocidade.",
    features: [
      "Impressão laser monocromática",
      "20 páginas por minuto",
      "Wi-Fi integrado",
      "Compacta e silenciosa",
      "Auto-On/Auto-Off",
      "Aplicativo HP Smart"
    ],
    specifications: {
      "Marca": "HP",
      "Modelo": "Laser 107w (4ZB78A)",
      "Tipo": "Impressora Laser Monocromática",
      "Tecnologia": "Laser",
      "Resolução": "1200 x 1200 dpi",
      "Velocidade": "20 ppm",
      "Conectividade": "Wi-Fi, USB 2.0",
      "Toner Inicial": "500 páginas",
      "Toner Padrão": "1.000 páginas (W1105A)",
      "Bandeja": "150 folhas",
      "Saída": "100 folhas",
      "Ciclo Mensal": "10.000 páginas",
      "App": "HP Smart",
      "Dimensões": "346 x 198 x 159 mm",
      "Garantia": "12 meses"
    },
    image: "/images/products/printer/printer-4.png"
  },
  {
    id: "impressora-brother-dcpl5662dn-laser",
    name: "Multifuncional Laser Mono Brother DCPL5662DN A4",
    shortName: "Brother DCPL5662DN",
    category: "impressora",
    categoryIcon: Printer,
    description: "Multifuncional laser corporativa Brother DCP-L5662DN com velocidade de 48ppm. Bandeja de 250 folhas, duplex automático e rede Ethernet integrada. Toner de até 25.000 páginas. Ideal para grupos de trabalho com alto volume de impressão monocromática.",
    features: [
      "48 páginas por minuto",
      "Duplex automático integrado",
      "Rede Ethernet",
      "Bandeja 250 folhas",
      "Toner de alto rendimento 25.000 págs",
      "Scanner ADF 70 folhas"
    ],
    specifications: {
      "Marca": "Brother",
      "Modelo": "DCP-L5662DN",
      "Tipo": "Multifuncional Laser Corporativa",
      "Funções": "Impressão, Cópia, Scanner",
      "Tecnologia": "Laser Monocromática",
      "Resolução": "Até 1200 x 1200 dpi",
      "Velocidade": "48 ppm",
      "Conectividade": "Ethernet, USB",
      "Duplex": "Automático",
      "Scanner": "ADF 70 folhas, até 1200 x 1200 dpi",
      "Toner Inicial": "18.000 páginas",
      "Toner Alto Rendimento": "25.000 páginas",
      "Bandeja": "250 folhas (expansível até 1.340)",
      "Ciclo Mensal": "100.000 páginas",
      "Garantia": "12 meses"
    },
    image: "/images/products/printer/printer-5.png"
  },
];

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(product => product.category === categoryId);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};