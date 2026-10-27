import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicalData';
import { 
  Globe, 
  HeartHandshake, 
  Clock, 
  CreditCard, 
  Compass, 
  Languages, 
  Home, 
  Briefcase, 
  ShieldCheck, 
  MessageCircle,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface TimeZoneOption {
  region: string;
  country: string;
  flag: string;
  offset: string;
  localHourExample: string;
  brasiliaHourExample: string;
  bestFit: string;
}

const TIME_ZONES: TimeZoneOption[] = [
  {
    region: 'Portugal & Reino Unido',
    country: 'Lisboa, Londres, Dublin',
    flag: '🇵🇹 🇬🇧 🇮🇪',
    offset: '+3h ou +4h',
    localHourExample: '14:00 - 21:00',
    brasiliaHourExample: '10:00 - 17:00 (BRT)',
    bestFit: 'Tarde e início de noite local'
  },
  {
    region: 'Europa Central (CET)',
    country: 'Alemanha, França, Espanha, Itália, Holanda, Suíça',
    flag: '🇩🇪 🇫🇷 🇪🇸 🇮🇹',
    offset: '+4h ou +5h',
    localHourExample: '14:00 - 22:00',
    brasiliaHourExample: '09:00 - 17:00 (BRT)',
    bestFit: 'Tarde e noites tranquilas'
  },
  {
    region: 'Costa Leste (EUA / Canadá)',
    country: 'Flórida (Miami), Nova York, Boston, Toronto',
    flag: '🇺🇸 🇨🇦',
    offset: '-1h ou 0h (mesmo fuso)',
    localHourExample: '08:00 - 19:00',
    brasiliaHourExample: '09:00 - 20:00 (BRT)',
    bestFit: 'Total coincidência de horários'
  },
  {
    region: 'Costa Oeste & Central (EUA)',
    country: 'Califórnia (Los Angeles), Washington, Texas',
    flag: '🇺🇸',
    offset: '-4h ou -2h',
    localHourExample: '07:00 - 16:00',
    brasiliaHourExample: '11:00 - 20:00 (BRT)',
    bestFit: 'Manhã local ou horário de almoço'
  },
  {
    region: 'Oceania & Ásia',
    country: 'Austrália, Japão, Emirados Árabes',
    flag: '🇦🇺 🇯🇵 🇦🇪',
    offset: '+7h a +13h',
    localHourExample: 'Fins de tarde ou manhãs',
    brasiliaHourExample: 'Horários matutinos/noturnos BRT',
    bestFit: 'Horários estratégicos sob consulta'
  }
];

export const BraziliansAbroad: React.FC = () => {
  const [selectedZone, setSelectedZone] = useState<number>(0);

  const activeZone = TIME_ZONES[selectedZone];

  const handleAbroadWhatsApp = (customZoneText?: string) => {
    const text = `Olá, Andréia! Moro no exterior (${customZoneText || activeZone.region}) e gostaria de verificar disponibilidade de horários para atendimento psicológico online.`;
    window.open(`https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="exterior" className="py-20 bg-gradient-to-b from-[#faf8f5] via-white to-[#faf8f5] border-b border-[#e6ecec] relative overflow-hidden">
      {/* Decorative ambient gradients */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-[#4a6b6c]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f0f4f4] border border-[#d5dedd] text-xs font-bold text-[#354f50] mb-3 shadow-2xs">
            <Globe className="w-3.5 h-3.5 text-[#4a6b6c] animate-pulse" />
            <span>Atendimento Internacional para Imigrantes & Expatriados</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#354f50] mb-4 text-balance">
            Psicoterapia Online para Brasileiros no Exterior
          </h2>

          <p className="text-base sm:text-lg text-[#5f6b7c] leading-relaxed">
            Viver fora do país é transformador, mas também desperta desafios que só quem vive longe de casa compreende. Cuide da sua saúde emocional com o acolhimento da sua língua nativa e a sensibilidade da cultura brasileira.
          </p>
        </div>

        {/* Why Therapy in Portuguese Abroad: 4 Strategic Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="p-6 bg-white rounded-2xl border border-[#e2e8f0] shadow-xs hover:border-[#4a6b6c]/40 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#f0f4f4] text-[#4a6b6c] flex items-center justify-center mb-5">
                <Languages className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#354f50] mb-2">
                A Língua das Emoções
              </h3>
              <p className="text-xs sm:text-sm text-[#5f6b7c] leading-relaxed">
                Por mais fluente que você seja no idioma local, as dores mais profundas, medos e memórias de infância se expressam de forma autêntica na sua língua materna (português).
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-[#f0f4f4] text-[11px] font-semibold text-[#8a6d0b]">
              Sem filtros ou barreiras linguísticas
            </div>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-[#e2e8f0] shadow-xs hover:border-[#4a6b6c]/40 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#fdf8e6] text-[#8a6d0b] flex items-center justify-center mb-5">
                <HeartHandshake className="w-6 h-6 text-[#d4af37]" />
              </div>
              <h3 className="text-base font-bold text-[#354f50] mb-2">
                Luto Migratório & Solidão
              </h3>
              <p className="text-xs sm:text-sm text-[#5f6b7c] leading-relaxed">
                Acolhimento qualificado para a saudade da família, datas comemorativas solitárias, perda temporária de referências e a sensação de &ldquo;não pertencer por inteiro a nenhum dos dois lugares&rdquo;.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-[#f0f4f4] text-[11px] font-semibold text-[#8a6d0b]">
              Compreensão cultural imediata
            </div>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-[#e2e8f0] shadow-xs hover:border-[#4a6b6c]/40 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#f0f4f4] text-[#4a6b6c] flex items-center justify-center mb-5">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#354f50] mb-2">
                Pressão, Carreira & Burnout
              </h3>
              <p className="text-xs sm:text-sm text-[#5f6b7c] leading-relaxed">
                Manejo da cobrança de &ldquo;fazer valer a pena o projeto de imigração&rdquo;, síndrome do impostor em ambientes multiculturais e adaptação à dinâmica de trabalho no exterior.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-[#f0f4f4] text-[11px] font-semibold text-[#8a6d0b]">
              Estratégias baseadas na TCC
            </div>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-[#e2e8f0] shadow-xs hover:border-[#4a6b6c]/40 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#f0f4f4] text-[#4a6b6c] flex items-center justify-center mb-5">
                <Home className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#354f50] mb-2">
                Filhos & Família no Exterior
              </h3>
              <p className="text-xs sm:text-sm text-[#5f6b7c] leading-relaxed">
                Apoio e orientação parental comportamental (ABA/TCC) para crianças e adolescentes em fase de adaptação escolar, bilinguismo, neurodivergências (TEA/TDAH) e dinâmicas familiares.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-[#f0f4f4] text-[11px] font-semibold text-[#8a6d0b]">
              Atendimento a adolescentes e adultos
            </div>
          </div>
        </div>

        {/* Interactive Timezone & Practicalities Card */}
        <div className="bg-[#354f50] text-white rounded-3xl p-6 sm:p-10 shadow-xl mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Column: Explanations */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
                <Clock className="w-4 h-4" />
                <span>Fusos Horários Flexíveis & Adaptados</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold leading-tight">
                Em qual país você está morando?
              </h3>

              <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed">
                Minha agenda é planejada para que a diferença de fuso não seja uma barreira. Selecione a sua região ao lado para visualizar a compatibilidade de horários entre o seu relógio local e o horário de Brasília.
              </p>

              {/* Guarantees list */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-xs sm:text-sm text-[#e2e8f0]">
                  <CreditCard className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <span>
                    <strong>Pagamento Internacional Sem Complicação:</strong> Aceito transferências via <strong>Wise</strong>, <strong>PayPal</strong>, <strong>Cartão Internacional</strong> ou <strong>Pix</strong> (para quem ainda possui conta no Brasil).
                  </span>
                </div>

                <div className="flex items-start gap-3 text-xs sm:text-sm text-[#e2e8f0]">
                  <ShieldCheck className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <span>
                    <strong>Recibos Oficiais para Reembolso:</strong> Recibos emitidos com registro no Conselho Regional de Psicologia (CRP 21/07075) para declaração ou eventual reembolso de saúde.
                  </span>
                </div>

                <div className="flex items-start gap-3 text-xs sm:text-sm text-[#e2e8f0]">
                  <Compass className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <span>
                    <strong>Plataforma Segura:</strong> Sessões online através de videochamada confidencial (Google Meet ou Zoom), criptografada de ponta a ponta.
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Time Zone Selector & Live View */}
            <div className="lg:col-span-6 bg-white/10 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-white/15">
              <p className="text-xs font-semibold text-[#d4af37] uppercase tracking-wider mb-3">
                Selecione sua localização:
              </p>

              {/* Region Pill buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                {TIME_ZONES.map((zone, idx) => (
                  <button
                    key={zone.region}
                    type="button"
                    onClick={() => setSelectedZone(idx)}
                    className={`p-2.5 rounded-xl text-left text-xs font-medium transition-all flex items-center justify-between border ${
                      selectedZone === idx
                        ? 'bg-white text-[#354f50] border-white font-bold shadow-sm'
                        : 'bg-white/5 text-[#e2e8f0] border-white/10 hover:bg-white/15'
                    }`}
                  >
                    <span className="truncate">{zone.flag} {zone.region}</span>
                    <span className="text-[10px] opacity-75">{zone.offset}</span>
                  </button>
                ))}
              </div>

              {/* Active Zone Detail Card */}
              <div className="p-4 bg-white rounded-xl text-[#2d3748] shadow-md border border-[#e2e8f0] space-y-3">
                <div className="flex items-center justify-between border-b border-[#f0f4f4] pb-2">
                  <div>
                    <h4 className="text-sm font-bold text-[#354f50]">
                      {activeZone.flag} {activeZone.region}
                    </h4>
                    <p className="text-[11px] text-[#5f6b7c]">
                      {activeZone.country}
                    </p>
                  </div>
                  <span className="text-xs bg-[#f0f4f4] text-[#4a6b6c] px-2.5 py-1 rounded-md font-semibold">
                    Diferença: {activeZone.offset}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-2.5 bg-[#faf8f5] rounded-lg border border-[#e2e8f0]">
                    <span className="block text-[10px] uppercase font-bold text-[#8a6d0b] mb-0.5">
                      Seu Horário Local Ideal:
                    </span>
                    <span className="font-bold text-[#354f50] text-sm">
                      {activeZone.localHourExample}
                    </span>
                  </div>

                  <div className="p-2.5 bg-[#faf8f5] rounded-lg border border-[#e2e8f0]">
                    <span className="block text-[10px] uppercase font-bold text-[#4a6b6c] mb-0.5">
                      Horário de Brasília:
                    </span>
                    <span className="font-bold text-[#354f50] text-sm">
                      {activeZone.brasiliaHourExample}
                    </span>
                  </div>
                </div>

                <div className="text-[11px] text-[#5f6b7c] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                  <span>Melhor janela: <strong>{activeZone.bestFit}</strong></span>
                </div>

                <button
                  type="button"
                  onClick={() => handleAbroadWhatsApp(activeZone.region)}
                  className="w-full py-3 bg-[#1a9b4b] hover:bg-[#14793b] active:scale-98 text-white font-semibold text-xs sm:text-sm rounded-lg transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Consultar Vagas para {activeZone.region}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Reassurance Callout Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#e2e8f0] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="text-lg font-bold text-[#354f50]">
              Mora em outro país que não está na lista acima?
            </h4>
            <p className="text-xs sm:text-sm text-[#5f6b7c] max-w-2xl">
              Não se preocupe. Atendo pacientes em qualquer continente. Entre em contato informando seu país e encontraremos uma janela compatível para você.
            </p>
          </div>

          <button
            type="button"
            onClick={() => handleAbroadWhatsApp('Outro país')}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#4a6b6c] hover:bg-[#354f50] text-white font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-xs shrink-0 whitespace-nowrap cursor-pointer"
          >
            <span>Falar com a Psicóloga</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
