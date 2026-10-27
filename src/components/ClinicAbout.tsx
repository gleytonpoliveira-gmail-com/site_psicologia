import React from 'react';
import { CLINIC_INFO } from '../data/clinicalData';
import { Sparkles, Shield, Heart, GraduationCap } from 'lucide-react';

export const ClinicAbout: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-white border-b border-[#e6ecec]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Photo Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-[#faf8f5] shadow-2xl relative z-10">
                <picture>
                  <source srcSet={CLINIC_INFO.assets.photoBlazer} type="image/webp" />
                  <img
                    src={CLINIC_INFO.assets.photoBlazerPng}
                    alt="Andréia Nascimento sorrindo, de blazer caramelo"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </picture>
              </div>

              {/* Decorative background ring */}
              <div className="absolute -inset-4 rounded-full border-2 border-dashed border-[#d4af37]/40 -z-0 animate-spin-slow" />
              <div className="absolute -bottom-2 -right-2 bg-[#4a6b6c] text-white p-3 rounded-2xl shadow-lg z-20 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-[#d4af37]" />
                <span className="text-xs font-semibold">TCC & ABA</span>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#8a6d0b] uppercase tracking-wider mb-2">
              <span>Trajetória Profissional</span>
              <span aria-hidden="true">·</span>
              <span>Acolhimento & Ética</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#354f50] mb-2">
              {CLINIC_INFO.name}
            </h2>
            <p className="text-sm font-semibold text-[#4a6b6c] mb-6">
              {CLINIC_INFO.title} — {CLINIC_INFO.crp}
            </p>

            <div className="space-y-4 text-base text-[#5f6b7c] leading-relaxed mb-8">
              <p>
                Comprometida com a prática psicológica baseada em evidências científicas, realizo atendimentos utilizando a <strong className="text-[#2d3748] font-semibold">Terapia Cognitivo-Comportamental (TCC)</strong> e a <strong className="text-[#2d3748] font-semibold">Análise do Comportamento Aplicada (ABA)</strong>.
              </p>
              <p>
                Meu objetivo é oferecer uma escuta acolhedora, ética e tecnicamente qualificada para que meus pacientes superem barreiras comportamentais e conquistem uma vida com clareza, propósito e equilíbrio.
              </p>
              <p>
                Acredito que o processo terapêutico é um espaço seguro de transformação real, onde cada indivíduo é compreendido em sua singularidade biopsicossocial, sem julgamentos e com estratégias práticas para o dia a dia.
              </p>
            </div>

            {/* Core Values Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#f0f4f4]">
              <div className="p-3.5 rounded-xl bg-[#faf8f5] border border-[#e2e8f0]">
                <Shield className="w-5 h-5 text-[#4a6b6c] mb-2" />
                <h4 className="text-xs font-bold text-[#2d3748] mb-1">Rigor Ético</h4>
                <p className="text-[11px] text-[#5f6b7c] leading-relaxed">
                  Sigilo absoluto e respeito aos padrões do Conselho Federal de Psicologia.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#faf8f5] border border-[#e2e8f0]">
                <Heart className="w-5 h-5 text-[#d4af37] mb-2" />
                <h4 className="text-xs font-bold text-[#2d3748] mb-1">Escuta Ativa</h4>
                <p className="text-[11px] text-[#5f6b7c] leading-relaxed">
                  Acolhimento empático com foco na humanização de cada encontro.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#faf8f5] border border-[#e2e8f0]">
                <Sparkles className="w-5 h-5 text-[#4a6b6c] mb-2" />
                <h4 className="text-xs font-bold text-[#2d3748] mb-1">Metodologia Científica</h4>
                <p className="text-[11px] text-[#5f6b7c] leading-relaxed">
                  Intervenções validadas por ensaios clínicos e estudos contemporâneos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
