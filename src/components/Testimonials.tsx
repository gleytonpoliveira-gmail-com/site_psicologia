import React from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-24 border-b border-neutral-900 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-medium text-neutral-400 mb-3">
            <span>Avaliações & Credibilidade Comprovada</span>
            <span aria-hidden="true">·</span>
            <span>Clientes Atendidos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4 text-balance">
            O impacto na voz de quem confiou em nossa engenharia.
          </h2>
          <p className="text-base text-neutral-400 leading-relaxed">
            Resultados mensuráveis conquistados por empresas reais em seus respectivos setores de atuação.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-xl bg-neutral-900/50 border border-neutral-800/80 flex flex-col justify-between hover:border-neutral-700 transition-colors"
            >
              <div>
                <Quote className="w-6 h-6 text-neutral-600 mb-6" />

                <blockquote className="text-sm text-neutral-300 leading-relaxed mb-6">
                  "{t.quote}"
                </blockquote>

                {/* Attributable Quantitative Metric */}
                <div className="p-3.5 bg-neutral-950 rounded-lg border border-neutral-800/80 mb-6">
                  <span className="text-xs font-bold text-emerald-400 block font-mono">
                    {t.resultMetric}
                  </span>
                  <span className="text-[11px] text-neutral-400 mt-0.5 block">
                    {t.metricContext}
                  </span>
                </div>
              </div>

              {/* Author attribution (No badges or pills) */}
              <div className="pt-4 border-t border-neutral-800/60">
                <p className="text-sm font-bold text-white tracking-tight">{t.author}</p>
                <div className="flex items-center gap-1.5 text-xs text-neutral-400 mt-0.5">
                  <span>{t.role}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-neutral-300 font-medium">{t.company}</span>
                </div>
                <p className="text-[11px] text-neutral-400 mt-1">{t.industry}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
