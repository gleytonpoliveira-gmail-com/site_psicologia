export interface ClinicalDemand {
  id: string;
  number: string;
  title: string;
  approach: string;
  description: string;
  audience: 'adolescentes' | 'adultos';
  tags: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const CLINICAL_DEMANDS: ClinicalDemand[] = [
  // Adolescentes
  {
    id: 'tea-adolescentes',
    number: '01',
    title: 'Transtorno do Espectro Autista (TEA)',
    approach: 'Análise do Comportamento Aplicada (ABA)',
    description: 'Ensino sistemático de operantes verbais, redução de comportamentos disruptivos concorrentes e treino estruturado de habilidades de vida diária (AVD).',
    audience: 'adolescentes',
    tags: ['TEA', 'Autismo', 'Habilidades Sociais', 'Rotina', 'ABA']
  },
  {
    id: 'tdah-adolescentes',
    number: '02',
    title: 'TDAH e Déficits Executivos',
    approach: 'Manejo Contingencial e TCC Pediátrica',
    description: 'Treino metacognitivo de controle inibitório, reestruturação ambiental e arranjo de contingências para sustentação atencional acadêmica.',
    audience: 'adolescentes',
    tags: ['TDAH', 'Atenção', 'Foco', 'Escola', 'Controle Inibitório']
  },
  {
    id: 'ansiedade-adolescentes',
    number: '03',
    title: 'Transtornos de Ansiedade e Fobias',
    approach: 'TCC com Exposição Gradual e Psicoeducação',
    description: 'Dessensibilização sistemática por aproximações sucessivas, reestruturação de distorções cognitivas e treino de autorregulação fisiológica.',
    audience: 'adolescentes',
    tags: ['Ansiedade', 'Fobia', 'Insegurança', 'Pânico']
  },
  {
    id: 'tod-adolescentes',
    number: '04',
    title: 'Transtorno Opositor Desafiador (TOD)',
    approach: 'Treinamento Parental Comportamental (BPT)',
    description: 'Extinção de reforçamento para comportamentos coercitivos, reforço diferencial de comportamentos alternativos (DRA/DRI) e consistência na disciplina positiva.',
    audience: 'adolescentes',
    tags: ['TOD', 'Comportamento', 'Família', 'Orientação Parental']
  },
  {
    id: 'social-adolescentes',
    number: '05',
    title: 'Déficits de Habilidades Sociais e Bullying',
    approach: 'Treinamento de Habilidades Sociais (THS)',
    description: 'Modelagem, ensaio comportamental e feedback corretivo para comunicação assertiva, tomada de perspectiva e resolução interpessoal de conflitos.',
    audience: 'adolescentes',
    tags: ['Bullying', 'Timidez', 'Assertividade', 'Relações']
  },
  {
    id: 'crises-adolescentes',
    number: '06',
    title: 'Desregulação Emocional e Crises',
    approach: 'Terapia Comportamental Dialética / TCC',
    description: 'Discriminação de respostas fisiológicas internas, identificação de eventos antecedentes e ampliação de repertório adaptativo de tolerância à frustração.',
    audience: 'adolescentes',
    tags: ['Emoções', 'Autocontrole', 'Crises', 'Tolerância']
  },

  // Adultos
  {
    id: 'ansiedade-adultos',
    number: '01',
    title: 'Ansiedade Generalizada e Pânico',
    approach: 'TCC com Reestruturação Cognitiva e Exposição Interoceptiva',
    description: 'Modificação de crenças nucleares disfuncionais, redução de esquiva experiencial e quebra do ciclo hipervigilância-interpretação catastrófica.',
    audience: 'adultos',
    tags: ['TAG', 'Pânico', 'Preocupação excessiva', 'Sintomas físicos']
  },
  {
    id: 'depressao-adultos',
    number: '02',
    title: 'Depressão Maior e Distimia',
    approach: 'Ativação Comportamental (BA) e TCC Beckiana',
    description: 'Agendamento sistemático de atividades orientadas a valores, reintrodução de reforçadores ambientais positivos e reestruturação da tríade cognitiva negativa.',
    audience: 'adultos',
    tags: ['Depressão', 'Desânimo', 'Autoestima', 'Sentido de Vida']
  },
  {
    id: 'tdah-adultos',
    number: '03',
    title: 'TDAH no Adulto e Procrastinação',
    approach: 'TCC Focada em Treino de Funções Executivas',
    description: 'Fragmentação comportamental de tarefas complexas, engenharia de contexto para minimização de distratores e sistemas externos de autorregulação.',
    audience: 'adultos',
    tags: ['TDAH Adulto', 'Procrastinação', 'Organização', 'Produtividade']
  },
  {
    id: 'burnout-adultos',
    number: '04',
    title: 'Burnout e Estresse Ocupacional',
    approach: 'TCC e Modificação de Padrões Perfeccionistas',
    description: 'Revisão de esquemas de autoexigência e desvalorização, manejo assertivo da sobrecarga de trabalho e restauração do equilíbrio homeostático pessoal.',
    audience: 'adultos',
    tags: ['Burnout', 'Trabalho', 'Sobrecarga', 'Esgotamento']
  },
  {
    id: 'conflitos-adultos',
    number: '05',
    title: 'Conflitos Interpessoais e Dependência Afetiva',
    approach: 'Terapia do Esquema e Treino Assertivo',
    description: 'Identificação de esquemas desadaptativos precoces de abandono e subjugação, mapeamento relacional e estabelecimento funcional de limites saudáveis.',
    audience: 'adultos',
    tags: ['Relacionamentos', 'Limites', 'Dependência emocional', 'Comunicação']
  },
  {
    id: 'toc-adultos',
    number: '06',
    title: 'Transtorno Obsessivo-Compulsivo (TOC)',
    approach: 'Exposição com Prevenção de Resposta (EPR)',
    description: 'Enfrentamento deliberado e hierarquizado a pensamentos intrusivos com bloqueio sistemático de compulsões, neutralizações e rituais de alívio temporário.',
    audience: 'adultos',
    tags: ['TOC', 'Pensamentos intrusivos', 'Rituais', 'Controle']
  }
];

export const TIMELINE_STEPS = [
  {
    number: '1',
    title: 'Avaliação Inicial',
    description: 'Análise funcional detalhada das queixas, histórico de vida e identificação de metas clínicas claras.',
    detail: 'Mapeamento de padrões comportamentais e entendimento do momento do paciente.'
  },
  {
    number: '2',
    title: 'Plano de Intervenção',
    description: 'Desenvolvimento de estratégias personalizadas combinando TCC e técnicas comportamentais da ABA.',
    detail: 'Construção conjunta de metas realistas com foco em resolução e autonomia.'
  },
  {
    number: '3',
    title: 'Sessões Regulares',
    description: 'Encontros focados na resolução de problemas atuais e treino de novas habilidades adaptativas.',
    detail: 'Acompanhamento contínuo da evolução, com ferramentas práticas para o dia a dia.'
  }
];

export const ONLINE_BENEFITS = [
  {
    title: 'Criptografia e Sigilo',
    description: 'As sessões ocorrem via plataformas seguras de videochamada que protegem seus dados confidenciais, em total conformidade com o Código de Ética do CFP.',
    icon: 'lock'
  },
  {
    title: 'Otimização de Tempo',
    description: 'Sem necessidade de deslocamento no trânsito, encaixando-se perfeitamente na sua rotina com total pontualidade e tranquilidade.',
    icon: 'clock'
  },
  {
    title: 'Alcance Global',
    description: 'Atendimento disponível para pacientes em qualquer região do Brasil ou brasileiros residentes no exterior com pagamento flexível.',
    icon: 'globe'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'Como funciona a primeira sessão de psicoterapia?',
    answer: 'A primeira sessão é dedicada ao acolhimento e escuta diagnóstica. Conversamos sobre o motivo que te trouxe à terapia, seu histórico, expectativas e definimos juntos os objetivos a serem trabalhados.'
  },
  {
    question: 'Qual é a duração e a frequência das sessões?',
    answer: 'Cada sessão tem duração média de 50 minutos. A frequência usual recomendada é semanal, garantindo a continuidade do processo e a aplicação prática das estratégias acordadas.'
  },
  {
    question: 'O atendimento online tem a mesma eficácia que o presencial?',
    answer: 'Sim. Diversos estudos científicos internacionais e a própria regulamentação do Conselho Federal de Psicologia (CFP) comprovam que a psicoterapia online possui a mesma eficácia clínica da modalidade presencial.'
  },
  {
    question: 'Você atende por plano de saúde (convênio)?',
    answer: 'Os atendimentos são particulares, contudo forneço recibos com todas as informações clínicas e fiscais exigidas pelos convênios médicos para solicitação de reembolso.'
  },
  {
    question: 'Qual a diferença entre TCC e ABA?',
    answer: 'A Terapia Cognitivo-Comportamental (TCC) foca na relação entre pensamentos, emoções e comportamentos, identificando distorções cognitivas. Já a Análise do Comportamento Aplicada (ABA) é padrão-ouro para o desenvolvimento de repertório e redução de barreiras em indivíduos com Transtorno do Espectro Autista (TEA).'
  }
];

export const CLINIC_INFO = {
  name: 'Andréia Francisca do Nascimento',
  fullNameUpper: 'ANDRÉIA FRANCISCA DO NASCIMENTO',
  title: 'Psicóloga Clínica',
  crp: 'CRP 21/07075',
  whatsappRaw: '5586988043923',
  whatsappDisplay: '+55 (86) 98804-3923',
  email: 'andreiapsinascimento@gmail.com',
  instagram: '@andreiapsinascimento',
  instagramUrl: 'https://www.instagram.com/andreiapsinascimento/',
  linktreeUrl: 'https://linktr.ee/andreiapsinascimento',
  googleProfileUrl: 'https://www.google.com/search?sca_esv=5a206a9c5c2a6b37&q=Psic%C3%B3loga%20Andr%C3%A9ia%20Francisca%20do%20Nascimento%20-%20CRP%2021%2F07075',
  address: 'Atendimento Online (Brasil e Exterior) e Presencial',
  assets: {
    // User-provided enhanced logo in WebP format
    logo: '/assets/aistudio/logo_aprimorado_trimmed.webp',
    logoWebp: '/assets/aistudio/logo_aprimorado_trimmed.webp',
    logoWebpFull: '/assets/aistudio/logo_aprimorado.webp',
    logoWebpSiteBg: '/assets/aistudio/logo_aprimorado_sitebg.webp',
    logoWebpTransparent: '/assets/aistudio/logo_aprimorado_transparent.webp',
    logoPng: '/assets/aistudio/Logotipo_aprimorado___26_Oct_2026__4.13_pm_59a77520.png',
    logoUserRawWebp: '/assets/aistudio/Logotipo_aprimorado___26_Oct_2026__4.13_pm_59a77520.webp',
    brainIcon: '/assets/aistudio/gemini_brain_icon.png',
    photoJaleco: '/assets/aistudio/andreia1-800_af6b80ea.webp',
    photoJalecoJpg: '/assets/aistudio/andreia1-800_93b7cc97.jpg',
    photoBlazer: '/assets/aistudio/andreia2-700_2cb2a854.webp',
    photoBlazerPng: '/assets/aistudio/andreia2-700_67484677.png'
  }
};
