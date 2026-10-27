import { ProjectCase, ServiceItem, ProjectTypeOption, ScopeAddon, Testimonial } from '../types';

export const PROJECT_TYPES: ProjectTypeOption[] = [
  {
    id: 'landing',
    name: 'Landing Page de Alta Conversão',
    basePriceBRL: 4500,
    baseDays: 12,
    pagesRange: '1 página estruturada (5-7 seções)',
    description: 'Focada estritamente em geração de leads qualificados ou lançamento de produto com copy persuasiva e carregamento sub-segundo.',
    bestFor: 'Lançamentos de produtos, campanhas de tráfego pago e infoprodutos.'
  },
  {
    id: 'institucional',
    name: 'Website Institucional Premium',
    basePriceBRL: 8900,
    baseDays: 24,
    pagesRange: '5 a 9 páginas institucionais',
    description: 'Posicionamento corporativo de alto padrão com design system exclusivo, apresentação de serviços, equipe e blog integrado.',
    bestFor: 'Empresas B2B, consultorias, escritórios de advocacia e clínicas.'
  },
  {
    id: 'ecommerce',
    name: 'E-commerce & Loja D2C',
    basePriceBRL: 14500,
    baseDays: 35,
    pagesRange: 'Catálogo ilimitado + Checkout',
    description: 'Plataforma de comércio eletrônico ultra veloz com gestão de pedidos, gateways de pagamento (Pix/Cartão) e cálculo de frete em tempo real.',
    bestFor: 'Marcas de moda, cosméticos, eletrônicos e produtos autorais.'
  },
  {
    id: 'saas_platform',
    name: 'Plataforma Web & Portal Interativo',
    basePriceBRL: 22000,
    baseDays: 45,
    pagesRange: 'Dashboard + Área logada + API',
    description: 'Interface web customizada com autenticação, painéis analíticos, integrações via API REST/GraphQL e banco de dados em tempo real.',
    bestFor: 'Startups, SaaS, edtechs e portais com área de membros.'
  }
];

export const SCOPE_ADDONS: ScopeAddon[] = [
  {
    id: 'cms',
    name: 'Sistema CMS & Blog Customizado',
    description: 'Painel administrativo intuitivo para a sua equipe publicar artigos, cases e notícias sem tocar em código.',
    priceBRL: 2400,
    durationDays: 4,
    recommendedFor: ['institucional', 'saas_platform']
  },
  {
    id: 'multilingual',
    name: 'Arquitetura Multilíngue (i18n)',
    description: 'Suporte nativo a múltiplos idiomas (PT/EN/ES) com detecção automática de IP e SEO internacional específico.',
    priceBRL: 3200,
    durationDays: 5,
    recommendedFor: ['institucional', 'saas_platform', 'ecommerce']
  },
  {
    id: 'advanced_seo',
    name: 'Otimização Técnica de SEO & Schema.org',
    description: 'Marcação semântica estruturada JSON-LD, sitemap dinâmico, meta tags automáticas e auditoria Core Web Vitals 95+.',
    priceBRL: 1900,
    durationDays: 3,
    recommendedFor: ['landing', 'institucional', 'ecommerce']
  },
  {
    id: 'motion_design',
    name: 'Micro-Interações & Animações 3D/Motion',
    description: 'Interações visuais refinadas com framer-motion, canvas interativo e transições suaves que valorizam a marca.',
    priceBRL: 2800,
    durationDays: 4,
    recommendedFor: ['landing', 'institucional']
  },
  {
    id: 'analytics_tracking',
    name: 'Setup Avançado de GA4 & Meta Pixel',
    description: 'Configuração completa de eventos de conversão, tracking de scroll, funil de cliques e tags via Google Tag Manager.',
    priceBRL: 1400,
    durationDays: 2,
    recommendedFor: ['landing', 'ecommerce']
  },
  {
    id: 'auth_portal',
    name: 'Área Restrita & Autenticação de Usuários',
    description: 'Login seguro com OAuth (Google/GitHub/Email), controle de permissões e perfil de usuário customizado.',
    priceBRL: 4200,
    durationDays: 7,
    recommendedFor: ['saas_platform']
  }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'ux-ui',
    index: '01',
    title: 'Estratégia & UX/UI Architecture',
    tagline: 'Interfaces intencionais que convertem atenção em faturamento',
    description: 'Mapeamos cada ponto de contato da jornada do usuário antes da primeira linha de código. Criamos protótipos de alta fidelidade e realizamos testes de usabilidade com dados reais.',
    deliverables: ['Mapeamento de jornada e fluxo de usuário', 'Wireframes e protótipos navegáveis no Figma', 'Design System com biblioteca modular de componentes', 'Diretrizes tipográficas e paleta acessível WCAG AA'],
    typicalTimeline: '2 a 3 semanas',
    idealFor: 'Empresas que precisam transformar visitantes em clientes qualificados.'
  },
  {
    id: 'fullstack',
    index: '02',
    title: 'Engenharia Front-end & Full-stack',
    tagline: 'Performance cirúrgica e código limpo à prova de escala',
    description: 'Construção moderna em React, Next.js, Vite e Tailwind CSS. Arquitetura componentizada com tempo de resposta sub-segundo, zero dependências pesadas e facilidade de manutenção a longo prazo.',
    deliverables: ['Arquitetura limpa em TypeScript com validações estritas', 'Páginas dinâmicas com Server-Side Rendering ou SSG', 'Integração de APIs REST, Webhooks e Gateways', 'Testes automatizados e deploy contínuo (CI/CD)'],
    typicalTimeline: '3 a 5 semanas',
    idealFor: 'Marcas que não aceitam sites lentos ou templates prontos instáveis.'
  },
  {
    id: 'seo-performance',
    index: '03',
    title: 'Core Web Vitals & SEO Técnico',
    tagline: 'Indexação privilegiada nos mecanismos de busca do Google',
    description: 'Otimização extrema da métrica Largest Contentful Paint (LCP < 1.2s) e Cumulative Layout Shift (CLS = 0). Estrutura semântica HTML5 e dados ricos Schema.org para ranqueamento duradouro.',
    deliverables: ['Auditoria completa de performance (Score 95+ no Lighthouse)', 'Otimização avançada de fontes, imagens WebP/AVIF e scripts', 'Configuração de OpenGraph para compartilhamento social', 'Sitemap dinâmico e robots.txt otimizado'],
    typicalTimeline: '1 a 2 semanas',
    idealFor: 'Negócios que dependem de tráfego orgânico e autoridade no Google.'
  },
  {
    id: 'ecommerce-conversion',
    index: '04',
    title: 'E-commerce & Sistemas de Conversão',
    tagline: 'Fricção mínima no checkout para maximizar o ticket médio',
    description: 'Desenvolvimento de lojas virtuais com navegação ágil, busca instantânea com filtros dinâmicos, checkout simplificado com Pix em 1 clique e recuperação inteligente de carrinhos.',
    deliverables: ['Integração com gateways de pagamento seguros', 'Gestão de estoque, variantes e cupons promocionais', 'Painel analítico de conversão e receita', 'Layout 100% responsivo projetado para conversão mobile'],
    typicalTimeline: '4 a 6 semanas',
    idealFor: 'Marcas de produtos físicos ou digitais buscando escalar vendas online.'
  }
];

export const PORTFOLIO_CASES: ProjectCase[] = [
  {
    id: 'aurora-fintech',
    title: 'Plataforma Aurora Capital',
    client: 'Aurora Gestão de Investimentos',
    category: 'saas',
    categoryLabel: 'Plataforma SaaS',
    year: '2026',
    summary: 'Redesign e reconstrução completa do portal institucional e painel do investidor com dados em tempo real.',
    challenge: 'A instituição operava em um portal legado lento (tempo de carregamento de 6.4s) que causava alta taxa de rejeição entre investidores institucionais.',
    solution: 'Desenvolvemos uma nova arquitetura em React + Vite com carregamento modular, tipografia tabular para dados financeiros e autenticação de dois fatores.',
    metrics: [
      { label: 'Tempo de Carregamento', value: '0.8s', detail: 'Redução de 87% no LCP' },
      { label: 'Leads de Qualificação', value: '+142%', detail: 'Nos primeiros 4 meses pós-lançamento' },
      { label: 'Lighthouse Score', value: '99/100', detail: 'Desempenho, Acessibilidade e SEO' }
    ],
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'Node.js', 'PostgreSQL'],
    deliverables: ['Design System institucional', 'Portal seguro do investidor', 'Calculadora de rendimento interativa', 'Blog de análises macroeconômicas'],
    duration: '6 semanas',
    accentColor: '#3b82f6'
  },
  {
    id: 'nexo-architects',
    title: 'Estúdio Nexo Arquitetura',
    client: 'Nexo Studio & Urbanismo',
    category: 'institucional',
    categoryLabel: 'Website Institucional',
    year: '2026',
    summary: 'Website editorial de arquitetura contemporânea com navegação fluida por projetos residenciais e corporativos.',
    challenge: 'Necessidade de exibir portfólio fotográfico de alta resolução sem comprometer a velocidade no smartphone de potenciais clientes corporativos.',
    solution: 'Implementamos carregamento progressivo de imagens vetoriais e AVIF, tipografia editorial balanceada e visualização em grade responsiva assimétrica.',
    metrics: [
      { label: 'Tempo de Permanência', value: '3m 48s', detail: 'Aumento de +180% na sessão média' },
      { label: 'Contatos Comerciais', value: '+94%', detail: 'Formulários qualificados recebidos' },
      { label: 'Tamanho da Página', value: '820 KB', detail: 'Mesmo com dezenas de fotos em alta resolução' }
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Motion', 'Vercel CDN'],
    deliverables: ['Galeria fotográfica com modal full-bleed', 'Filtro por tipologia de obra', 'Formulário de briefing comercial integrado', 'Painel de projetos'],
    duration: '4 semanas',
    accentColor: '#10b981'
  },
  {
    id: 'botanica-organics',
    title: 'Botânica Dermocosméticos',
    client: 'Botânica Pure Lab',
    category: 'ecommerce',
    categoryLabel: 'E-commerce D2C',
    year: '2025',
    summary: 'Loja virtual D2C com experiência de compra rápida, quiz de tipo de pele e checkout transparente em 1 passo.',
    challenge: 'A taxa de abandono no carrinho mobile ultrapassava 78% na plataforma anterior devido à lentidão e passos excessivos.',
    solution: 'Construção de uma experiência de comércio headless com pré-carregamento de catálogo, quiz interativo de recomendação e Pix imediato via QR code.',
    metrics: [
      { label: 'Taxa de Conversão Mobile', value: '4.6%', detail: 'Subiu de 1.8% para 4.6% em 60 dias' },
      { label: 'Receita Bruta Gerada', value: 'R$ 1.8M', detail: 'No primeiro trimestre após migração' },
      { label: 'Abandono de Carrinho', value: '-38%', detail: 'Queda drástica com checkout em 1 tela' }
    ],
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'Stripe / Pix API', 'GraphQL'],
    deliverables: ['Quiz de rotina de skincare personalizada', 'Checkout express com Pix nativo', 'Gestão automatizada de estoque', 'Integração com ERP'],
    duration: '7 semanas',
    accentColor: '#f59e0b'
  },
  {
    id: 'pulse-crm',
    title: 'Pulse Revenue Engine',
    client: 'Pulse B2B Software',
    category: 'landing',
    categoryLabel: 'Landing Page de Alta Conversão',
    year: '2026',
    summary: 'Landing page para captação de clientes enterprise com calculadora de ROI e demonstração interativa de produto.',
    challenge: 'O produto enterprise tinha um ciclo longo de vendas e dificuldade de comunicar o retorno financeiro nas reuniões iniciais.',
    solution: 'Criamos uma landing page com simulador de economia de horas e ROI calculado na hora pelo próprio decisor, com agendamento de call instantâneo.',
    metrics: [
      { label: 'Agendamentos de Demo', value: '+215%', detail: 'Reuniões qualificadas com diretores' },
      { label: 'Taxa de Conversão Geral', value: '11.8%', detail: 'Em tráfego orgânico e Google Search' },
      { label: 'Tempo de Carregamento', value: '0.6s', detail: 'Classificação A+ no GTmetrix' }
    ],
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Calendly API', 'GA4'],
    deliverables: ['Simulador de ROI em tempo real', 'Integração com CRM e agenda comercial', 'Copywriting orientado a decisores B2B', 'Painel de métricas'],
    duration: '2 semanas',
    accentColor: '#8b5cf6'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Dra. Carolina Fontes',
    role: 'Sócia-Fundadora',
    company: 'Fontes & Vasconcelos Consultoria',
    industry: 'Consultoria Corporativa',
    quote: 'Nosso site antigo parecia amador perto do nível dos nossos clientes corporativos. A equipe redesenhou nossa marca digital com sobriedade e velocidade impecável. O retorno sobre o investimento foi evidente nas primeiras três propostas fechadas.',
    resultMetric: '+140% no valor médio dos contratos fechados',
    metricContext: 'Comparativo semestral com o ciclo anterior'
  },
  {
    id: '2',
    author: 'Marcos Vinicius Ribeiro',
    role: 'Diretor de Operações (COO)',
    company: 'Nexus Logística Inteligente',
    industry: 'Logística & Supply Chain',
    quote: 'A clareza técnica e o rigor com prazos foram os grandes diferenciais. O site carrega instantaneamente em qualquer conexão 4G e a página de solicitação de cotação agora nos entrega leads com todas as informações necessárias já preenchidas.',
    resultMetric: '0.7s de tempo de carregamento mobile',
    metricContext: 'Auditado pelo Google PageSpeed Insights'
  },
  {
    id: '3',
    author: 'Renata Albuquerque',
    role: 'Head de Marketing e Crescimento',
    company: 'Lumio EdTech',
    industry: 'Educação & Tecnologia',
    quote: 'O simulador de projetos que eles implementaram em nossa landing page gerou o dobro de leads qualificados que qualquer campanha de tráfego que já havíamos rodado. Código limpo e suporte pós-lançamento de altíssimo nível.',
    resultMetric: '+215% em cadastros qualificados',
    metricContext: 'Nos primeiros 45 dias de campanha'
  }
];

export const METHODOLOGY_STEPS = [
  {
    step: '01',
    title: 'Diagnóstico & Arquitetura de Informação',
    description: 'Análise minuciosa do seu público-alvo, concorrentes diretos e definição da hierarquia de conteúdo e funis de conversão.',
    duration: 'Semana 1'
  },
  {
    step: '02',
    title: 'Design System & Prototipagem de Alta Fidelidade',
    description: 'Criação de componentes visuais exclusivos, paletas calibradas para contraste WCAG e protótipo interativo clicável.',
    duration: 'Semana 2-3'
  },
  {
    step: '03',
    title: 'Engenharia Front-end & Otimização de Performance',
    description: 'Codificação limpa em React com TypeScript, validações de acessibilidade, responsividade para todas as telas e testes de velocidade.',
    duration: 'Semana 3-5'
  },
  {
    step: '04',
    title: 'Homologação, SEO & Lançamento em Produção',
    description: 'Configuração de domínio, SSL, indexação nos buscadores, integração de analytics e treinamento da sua equipe.',
    duration: 'Semana 5-6'
  }
];
