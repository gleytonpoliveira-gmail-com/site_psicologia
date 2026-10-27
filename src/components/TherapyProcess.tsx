import React from 'react';
import { TIMELINE_STEPS } from '../data/clinicalData';
import { Target, Compass, CheckCircle2 } from 'lucide-react';

export const TherapyProcess: React.FC = () => {
  return (
    <section id="processo" className="py-20 bg-white border-b border-[#e6ecec]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading & Context */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#8a6d0b] uppercase tracking-wider mb-2">
              <span>Metodologia Clínica</span>
              <span aria-hidden="true">·</span>
              <span>Passo a Passo</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#354f50] mb-4 text-balance">
              Um processo colaborativo e estruturado em metas
            </h2>

            <p className="text-base text-[#5f6b7c] leading-relaxed mb-6">
              A jornada terapêutica visa identificar pensamentos disfuncionais e contingências comportamentais que geram sofrimento para construir soluções duradouras, respeitando o ritmo e a história de cada paciente.
            </p>

            <div className="p-5 rounded-2xl bg-[#faf8f5] border border-[#e2e8f0] space-y-3">
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-[#4a6b6c] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#2d3748]">Foco em Solução de Problemas</h4>
                  <p className="text-xs text-[#5f6b7c] mt-0.5">
                    Metas claras e mensuráveis definidas em conjunto desde o primeiro mês.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-[#e2e8f0]">
                <Compass className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#2d3748]">Desenvolvimento de Autonomia</h4>
                  <p className="text-xs text-[#5f6b7c] mt-0.5">
                    Você adquire ferramentas comportamentais e cognitivas para ser o próprio gestor do seu bem-estar.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Step-by-Step Timeline Cards */}
          <div className="lg:col-span-7 space-y-6">
            {TIMELINE_STEPS.map((step, idx) => (
              <div
                key={step.number}
                className="relative p-6 sm:p-7 rounded-2xl bg-[#faf8f5] border border-[#e2e8f0] hover:border-[#4a6b6c]/40 transition-all shadow-xs flex items-start gap-5"
              >
                {/* Circle Number */}
                <div className="w-12 h-12 rounded-full bg-[#4a6b6c] text-white flex items-center justify-center text-lg font-bold shrink-0 shadow-sm">
                  {step.number}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h3 className="text-lg font-bold text-[#354f50]">
                      {step.title}
                    </h3>
                    <span className="text-[11px] font-mono text-[#8a6d0b] bg-white px-2 py-0.5 rounded border border-[#e2e8f0]">
                      Fase 0{idx + 1}
                    </span>
                  </div>

                  <p className="text-sm text-[#2d3748] font-medium leading-relaxed mb-2">
                    {step.description}
                  </p>

                  <p className="text-xs text-[#5f6b7c] leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
