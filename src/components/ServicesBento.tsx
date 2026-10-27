import React, { useState } from 'react';
import { SERVICES_LIST } from '../data/mockData';
import { ServiceItem } from '../types';
import { Check, ChevronRight, Clock, Target } from 'lucide-react';

interface ServicesBentoProps {
  onSelectServiceForQuote?: (serviceId: string) => void;
}

export const ServicesBento: React.FC<ServicesBentoProps> = ({ onSelectServiceForQuote }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="servicos" className="py-24 border-b border-neutral-900 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-medium text-neutral-400 mb-3">
            <span>Capacidades de Engenharia & Design</span>
            <span aria-hidden="true">·</span>
            <span>Escopo Completo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4 text-balance">
            Soluções completas para cada estágio do seu website.
          </h2>
          <p className="text-base text-neutral-400 leading-relaxed">
            Do planejamento da experiência à codificação sob medida e otimização para motores de busca. Cada entrega é documentada e pronta para escala.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_LIST.map((service, index) => {
            // Give first and fourth service a col-span-2 or special prominence
            const isWide = index === 0 || index === 3;

            return (
              <div
                key={service.id}
                className={`group relative p-8 rounded-xl bg-neutral-900/60 border border-neutral-800/80 hover:border-neutral-700 transition-all duration-200 flex flex-col justify-between ${
                  isWide ? 'lg:col-span-2' : 'lg:col-span-1'
                }`}
              >
                <div>
                  {/* Clean Editorial Numbering (NO // comment prefix) */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm font-mono text-neutral-400 font-semibold">
                      {service.index}.
                    </span>
                    <span className="text-xs text-neutral-400 flex items-center gap-1.5 font-mono">
                      <Clock className="w-3.5 h-3.5 text-neutral-400" />
                      <span>{service.typicalTimeline}</span>
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs font-medium text-neutral-400 mb-4">
                    {service.tagline}
                  </p>

                  <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2.5 pt-4 border-t border-neutral-800/60 mb-6">
                    <span className="text-xs font-semibold text-neutral-300 block mb-2">Entregáveis inclusos:</span>
                    {service.deliverables.slice(0, isWide ? 4 : 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-400">
                        <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer of card */}
                <div className="pt-4 border-t border-neutral-800/60 flex items-center justify-between">
                  <div className="text-xs text-neutral-400 flex items-center gap-1.5 truncate max-w-[240px]">
                    <Target className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                    <span className="truncate">{service.idealFor}</span>
                  </div>

                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-white hover:text-blue-400 transition-colors shrink-0"
                  >
                    <span>Ver detalhes</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl max-w-2xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-blue-400 font-semibold">
                Serviço {selectedService.index}
              </span>
              <button
                onClick={() => setSelectedService(null)}
                className="text-neutral-400 hover:text-white p-1 rounded-md text-sm font-medium"
                aria-label="Fechar modal"
              >
                ✕ Fechar
              </button>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">{selectedService.title}</h3>
            <p className="text-sm text-neutral-400 mb-6">{selectedService.tagline}</p>

            <div className="p-4 bg-neutral-950 rounded-lg border border-neutral-800/80 mb-6 text-sm text-neutral-300 leading-relaxed">
              {selectedService.description}
            </div>

            <h4 className="text-xs font-semibold text-neutral-300 mb-3">Todos os entregáveis inclusos:</h4>
            <div className="space-y-2 mb-6">
              {selectedService.deliverables.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-300">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-neutral-800">
              <span className="text-xs text-neutral-400 font-mono">
                Prazo típico estimado: {selectedService.typicalTimeline}
              </span>
              <button
                onClick={() => {
                  setSelectedService(null);
                  if (onSelectServiceForQuote) {
                    onSelectServiceForQuote(selectedService.id);
                  }
                  const sim = document.getElementById('simulador');
                  if (sim) sim.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-neutral-950 bg-white hover:bg-neutral-200 rounded-lg transition-colors text-center"
              >
                Incluir no Orçamento
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
