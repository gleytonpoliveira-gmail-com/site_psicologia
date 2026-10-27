import React from 'react';
import { CLINIC_INFO } from '../data/clinicalData';
import { MessageCircle, ArrowRight, CheckCircle } from 'lucide-react';

interface ClinicHeroProps {
  onScheduleClick: () => void;
  onExploreAbout: () => void;
}

export const ClinicHero: React.FC<ClinicHeroProps> = ({ onScheduleClick, onExploreAbout }) => {
  return (
    <section id="inicio" className="relative pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden border-b border-[#e6ecec]">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#4a6b6c]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[350px] h-[350px] bg-[#d4af37]/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow & Credential */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#8a6d0b] mb-4">
              <span className="uppercase tracking-wider">Psicologia Clínica</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#4a6b6c]">{CLINIC_INFO.crp}</span>
              <span aria-hidden="true">·</span>
              <span>Online & Presencial</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#354f50] text-balance leading-[1.15] mb-6">
              Psicoterapia Baseada em Evidências e Acolhimento
            </h1>

            <p className="text-base sm:text-lg text-[#5f6b7c] leading-relaxed max-w-2xl mb-8">
              Um acompanhamento psicológico estruturado em ciência e estratégia para quem busca saúde emocional, superação de desafios comportamentais e uma vida com clareza, autonomia e equilíbrio.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-8">
              <a
                href={`https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodeURIComponent('Olá, Andréia! Gostaria de informações sobre atendimento psicológico.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-[#4a6b6c] hover:bg-[#354f50] active:scale-98 rounded-lg shadow-sm transition-all focus-visible:outline-2 focus-visible:outline-[#4a6b6c] whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Agendar pelo WhatsApp</span>
              </a>

              <button
                onClick={onExploreAbout}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#4a6b6c] hover:text-[#354f50] bg-white hover:bg-[#f0f4f4] border border-[#d5dedd] rounded-lg transition-all whitespace-nowrap"
              >
                <span>Conheça minha trajetória</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Trust points */}
            <div className="pt-6 border-t border-[#e6ecec] w-full grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-medium text-[#4a6b6c]">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>TCC baseada em evidências</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>Abordagem ABA para TEA</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>Registro Oficial no CFP</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Professional Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative max-w-[380px] sm:max-w-[420px] w-full">
              {/* Decorative subtle frame */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#4a6b6c]/15 to-[#d4af37]/20 rounded-3xl blur-md -z-10" />

              <div className="overflow-hidden rounded-2xl bg-white border border-[#e2e8f0] shadow-xl">
                <picture>
                  <source srcSet={CLINIC_INFO.assets.photoJaleco} type="image/webp" />
                  <img
                    src={CLINIC_INFO.assets.photoJalecoJpg}
                    alt="Psicóloga Andréia Francisca do Nascimento sorrindo de jaleco branco no consultório"
                    className="w-full h-auto aspect-[4/5] object-cover object-top"
                    loading="eager"
                  />
                </picture>

                <div className="p-4 bg-white/95 border-t border-[#f0f4f4] flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-[#354f50] leading-snug">
                      {CLINIC_INFO.fullNameUpper}
                    </h3>
                    <p className="text-xs text-[#8a6d0b] font-medium">
                      Psicóloga Clínica · {CLINIC_INFO.crp}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] bg-[#f0f4f4] text-[#4a6b6c] px-2.5 py-1 rounded font-medium">
                      Ativa no CRP
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
