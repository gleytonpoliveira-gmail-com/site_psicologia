import React from 'react';
import { METHODOLOGY_STEPS } from '../data/mockData';

export const Methodology: React.FC = () => {
  return (
    <section id="metodologia" className="py-24 border-b border-neutral-900 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-medium text-neutral-400 mb-3">
            <span>Processo de Entrega Previsível</span>
            <span aria-hidden="true">·</span>
            <span>Rigor de Engenharia</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4 text-balance">
            Como transformamos seu conceito em um website em produção.
          </h2>
          <p className="text-base text-neutral-400 leading-relaxed">
            Eliminamos retrabalho com cronogramas semanais fechados, aprovações por fases e testes rigorosos antes do lançamento oficial.
          </p>
        </div>

        {/* Step Sequence Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {METHODOLOGY_STEPS.map((step) => (
            <div
              key={step.step}
              className="p-6 rounded-xl bg-neutral-900/40 border border-neutral-800/80 hover:border-neutral-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-bold font-mono text-neutral-500">
                    {step.step}.
                  </span>
                  <span className="text-xs font-mono text-neutral-400 bg-neutral-950 px-2.5 py-1 rounded border border-neutral-800">
                    {step.duration}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight mb-3">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-900 flex items-center justify-between text-[11px] text-neutral-500 font-mono">
                <span>Fase validada</span>
                <span>Semana a semana</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
