import React from 'react';
import { ONLINE_BENEFITS, CLINIC_INFO } from '../data/clinicalData';
import { Lock, Clock, Globe, ShieldCheck, Check, MessageCircle } from 'lucide-react';

export const OnlineTherapy: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'lock':
        return <Lock className="w-6 h-6 text-[#4a6b6c]" />;
      case 'clock':
        return <Clock className="w-6 h-6 text-[#d4af37]" />;
      case 'globe':
        return <Globe className="w-6 h-6 text-[#4a6b6c]" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-[#4a6b6c]" />;
    }
  };

  return (
    <section id="online" className="py-20 bg-[#faf8f5] border-b border-[#e6ecec]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#8a6d0b] mb-2">
            Modalidade Remota
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#354f50] mb-4 text-balance">
            A mesma eficiência técnica, no conforto do seu espaço
          </h2>
          <p className="text-base text-[#5f6b7c] leading-relaxed">
            A psicoterapia online é regulamentada pelo Conselho Federal de Psicologia (CFP) e oferece flexibilidade geográfica total com a máxima segurança clínica.
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {ONLINE_BENEFITS.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-white border border-[#e2e8f0] shadow-xs hover:shadow-md hover:border-[#4a6b6c]/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#f0f4f4] flex items-center justify-center mb-6">
                  {getIcon(item.icon)}
                </div>

                <h3 className="text-lg font-bold text-[#354f50] mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-[#5f6b7c] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#f0f4f4] flex items-center gap-1.5 text-xs text-[#8a6d0b] font-medium">
                <Check className="w-3.5 h-3.5 text-[#4a6b6c]" />
                <span>Padrão regulamentado CFP</span>
              </div>
            </div>
          ))}
        </div>

        {/* Requirements Box & Online Scheduling CTA */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#4a6b6c] to-[#354f50] text-white flex flex-col lg:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="text-xl font-bold">O que você precisa para ser atendido online?</h3>
            <p className="text-xs sm:text-sm text-[#dbe3ea] max-w-xl">
              Apenas um dispositivo (celular ou computador) com câmera e microfone, conexão estável com a internet e um ambiente tranquilo onde você tenha privacidade para conversar.
            </p>
          </div>

          <a
            href={`https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodeURIComponent('Olá, Dra. Andréia! Gostaria de tirar dúvidas e agendar uma sessão de psicoterapia online.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-[#354f50] hover:bg-[#faf8f5] font-semibold text-xs sm:text-sm rounded-xl shadow-xs transition-colors shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-[#1a9b4b] text-[#1a9b4b]" />
            <span>Agendar Sessão Online</span>
          </a>
        </div>
      </div>
    </section>
  );
};
