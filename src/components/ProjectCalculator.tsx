import React, { useState, useMemo } from 'react';
import { PROJECT_TYPES, SCOPE_ADDONS } from '../data/mockData';
import { ProjectTypeOption, ScopeAddon } from '../types';
import { Check, Copy, ArrowRight, Calculator, Calendar, FileText, CheckCheck } from 'lucide-react';

interface ProjectCalculatorProps {
  onProceedToBriefing: (calculationData: {
    projectType: ProjectTypeOption;
    selectedAddons: ScopeAddon[];
    totalBRL: number;
    totalDays: number;
    urgency: string;
  }) => void;
}

export const ProjectCalculator: React.FC<ProjectCalculatorProps> = ({ onProceedToBriefing }) => {
  const [selectedTypeId, setSelectedTypeId] = useState<string>('institucional');
  const [selectedAddonIds, setSelectedAddonIds] = useState<string[]>(['advanced_seo', 'motion_design']);
  const [urgency, setUrgency] = useState<'standard' | 'express' | 'urgent'>('standard');
  const [copiedSpec, setCopiedSpec] = useState(false);

  const selectedType = useMemo(() => {
    return PROJECT_TYPES.find((t) => t.id === selectedTypeId) || PROJECT_TYPES[0];
  }, [selectedTypeId]);

  const selectedAddons = useMemo(() => {
    return SCOPE_ADDONS.filter((addon) => selectedAddonIds.includes(addon.id));
  }, [selectedAddonIds]);

  const toggleAddon = (id: string) => {
    if (selectedAddonIds.includes(id)) {
      setSelectedAddonIds(selectedAddonIds.filter((item) => item !== id));
    } else {
      setSelectedAddonIds([...selectedAddonIds, id]);
    }
  };

  const urgencyMultiplier = useMemo(() => {
    switch (urgency) {
      case 'express':
        return { priceMult: 1.25, timeDaysOffset: -5, label: 'Express (2 a 3 semanas)' };
      case 'urgent':
        return { priceMult: 1.5, timeDaysOffset: -10, label: 'Prioritário (Sob consulta)' };
      default:
        return { priceMult: 1.0, timeDaysOffset: 0, label: 'Padrão (Cronograma regular)' };
    }
  }, [urgency]);

  const rawPrice = useMemo(() => {
    const addonsSum = selectedAddons.reduce((acc, curr) => acc + curr.priceBRL, 0);
    return (selectedType.basePriceBRL + addonsSum) * urgencyMultiplier.priceMult;
  }, [selectedType, selectedAddons, urgencyMultiplier]);

  const estimatedDays = useMemo(() => {
    const addonsDays = selectedAddons.reduce((acc, curr) => acc + curr.durationDays, 0);
    const total = selectedType.baseDays + addonsDays + urgencyMultiplier.timeDaysOffset;
    return Math.max(8, total);
  }, [selectedType, selectedAddons, urgencyMultiplier]);

  const handleCopySpec = () => {
    const text = `PROPOSTA / ESPECIFICAÇÃO DE WEBSITE
-----------------------------------------
Tipo de Projeto: ${selectedType.name}
Escopo Base: ${selectedType.pagesRange}
Investimento Estimado: ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(rawPrice)}
Prazo Estimado: ~${estimatedDays} dias úteis (${Math.ceil(estimatedDays / 5)} semanas)
Regime de Entrega: ${urgencyMultiplier.label}

Recursos & Módulos Adicionais:
${selectedAddons.map((a) => `- ${a.name} (+R$ ${a.priceBRL})`).join('\n') || '- Nenhum módulo extra'}

Gerado via Vortex Web Studio
-----------------------------------------`;

    navigator.clipboard.writeText(text);
    setCopiedSpec(true);
    setTimeout(() => setCopiedSpec(false), 2500);
  };

  const handleProceed = () => {
    onProceedToBriefing({
      projectType: selectedType,
      selectedAddons,
      totalBRL: rawPrice,
      totalDays: estimatedDays,
      urgency: urgencyMultiplier.label,
    });
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="simulador" className="py-24 border-b border-neutral-900 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-medium text-neutral-400 mb-3">
            <span>Simulador de Escopo & Orçamento</span>
            <span aria-hidden="true">·</span>
            <span>Transparência Total</span>
            <span aria-hidden="true">·</span>
            <span>Sem Letras Miúdas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4 text-balance">
            Planeje o escopo e estime o investimento do seu novo website.
          </h2>
          <p className="text-base text-neutral-400 leading-relaxed">
            Selecione a categoria de projeto, funcionalidades desejadas e regime de entrega. Tenha uma estimativa instantânea de valor e cronograma para tomada de decisão.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Scope Configurator */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Website Type */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-wider">
                  Etapa 01. Tipo de Website
                </span>
                <span className="text-xs text-neutral-400">Escolha o modelo principal</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PROJECT_TYPES.map((type) => {
                  const isSelected = selectedTypeId === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setSelectedTypeId(type.id)}
                      className={`p-4 rounded-xl text-left border transition-all duration-150 ${
                        isSelected
                          ? 'bg-neutral-900 border-white text-white'
                          : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:border-neutral-700 hover:text-neutral-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-sm font-bold ${isSelected ? 'text-white' : 'text-neutral-200'}`}>
                          {type.name}
                        </span>
                        {isSelected && <Check className="w-4 h-4 text-white" />}
                      </div>
                      <p className="text-xs text-neutral-400 leading-relaxed mb-3">
                        {type.description}
                      </p>
                      <div className="flex items-center justify-between text-xs pt-2 border-t border-neutral-800/80 font-mono">
                        <span className="text-neutral-500">{type.pagesRange}</span>
                        <span className="text-neutral-300 font-semibold tabular-nums">
                          A partir de R$ {type.basePriceBRL.toLocaleString('pt-BR')}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Addon Modules */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-wider">
                  Etapa 02. Recursos & Módulos Opcionais
                </span>
                <span className="text-xs text-neutral-400">
                  {selectedAddonIds.length} selecionados
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SCOPE_ADDONS.map((addon) => {
                  const isChecked = selectedAddonIds.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3.5 rounded-lg border cursor-pointer transition-all ${
                        isChecked
                          ? 'bg-neutral-900 border-neutral-600 text-neutral-200'
                          : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center shrink-0 border ${
                            isChecked
                              ? 'bg-white border-white text-neutral-950'
                              : 'border-neutral-700 bg-neutral-900'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-xs font-semibold text-neutral-200">
                              {addon.name}
                            </span>
                            <span className="text-[11px] font-mono text-neutral-400 shrink-0 tabular-nums">
                              +R$ {addon.priceBRL.toLocaleString('pt-BR')}
                            </span>
                          </div>
                          <p className="text-[11px] text-neutral-400 mt-1 leading-relaxed">
                            {addon.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Urgency */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-wider">
                  Etapa 03. Prazo & Urgência de Lançamento
                </span>
                <span className="text-xs text-neutral-400">Tempo de entrega</span>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'standard', label: 'Cronograma Padrão', sub: 'Sem taxa de urgência' },
                  { id: 'express', label: 'Entrega Express', sub: '+25% de agilidade' },
                  { id: 'urgent', label: 'Prioridade Máxima', sub: 'Turno dedicado' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setUrgency(item.id as any)}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      urgency === item.id
                        ? 'bg-neutral-900 border-white text-white'
                        : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                    }`}
                  >
                    <span className="text-xs font-bold block mb-0.5 text-neutral-200">{item.label}</span>
                    <span className="text-[10px] text-neutral-400 block">{item.sub}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Live Summary & Quote Card */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="p-6 sm:p-8 rounded-xl bg-neutral-900/90 border border-neutral-800 shadow-xl backdrop-blur-md">
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-6">
                <div className="flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-semibold text-neutral-200 uppercase tracking-wider">
                    Resumo do Investimento
                  </span>
                </div>
                <span className="text-xs font-mono text-neutral-500">Estimativa Técnica</span>
              </div>

              {/* Price display with tabular-nums */}
              <div className="mb-6">
                <span className="text-xs text-neutral-400 block mb-1">Total estimado (à vista ou parcelado)</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums tracking-tight">
                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(rawPrice)}
                  </span>
                </div>
                <p className="text-[11px] text-neutral-500 mt-1">
                  Parcelamento disponível em até 12x ou entrada + entrega final.
                </p>
              </div>

              {/* Timeline pill replacement: unboxed clean stats */}
              <div className="grid grid-cols-2 gap-4 p-4 rounded-lg bg-neutral-950 border border-neutral-800/80 mb-6">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400 mb-1">
                    <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Prazo Estimado</span>
                  </div>
                  <span className="text-lg font-bold text-white font-mono tabular-nums">
                    ~{estimatedDays} dias úteis
                  </span>
                  <span className="text-[11px] text-neutral-500 block">
                    ({Math.ceil(estimatedDays / 5)} semanas)
                  </span>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400 mb-1">
                    <FileText className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Escopo Inclusivo</span>
                  </div>
                  <span className="text-lg font-bold text-white font-mono">
                    {1 + selectedAddons.length} módulos
                  </span>
                  <span className="text-[11px] text-neutral-500 block">
                    100% responsivo
                  </span>
                </div>
              </div>

              {/* Itemized spec list */}
              <div className="space-y-2 mb-6 text-xs border-t border-neutral-800 pt-4">
                <div className="flex justify-between text-neutral-300">
                  <span>Base: {selectedType.name}</span>
                  <span className="font-mono tabular-nums text-neutral-400">
                    R$ {selectedType.basePriceBRL.toLocaleString('pt-BR')}
                  </span>
                </div>
                {selectedAddons.map((addon) => (
                  <div key={addon.id} className="flex justify-between text-neutral-400">
                    <span className="truncate pr-2">+ {addon.name}</span>
                    <span className="font-mono tabular-nums text-neutral-400 shrink-0">
                      R$ {addon.priceBRL.toLocaleString('pt-BR')}
                    </span>
                  </div>
                ))}
                {urgency !== 'standard' && (
                  <div className="flex justify-between text-amber-400">
                    <span>Ajuste de Urgência ({urgencyMultiplier.label})</span>
                    <span className="font-mono tabular-nums">
                      +{(urgencyMultiplier.priceMult - 1) * 100}%
                    </span>
                  </div>
                )}
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <button
                  onClick={handleProceed}
                  className="w-full py-3.5 px-4 text-xs font-semibold text-neutral-950 bg-white hover:bg-neutral-200 active:scale-98 rounded-lg transition-all flex items-center justify-center gap-2 text-center"
                >
                  <span>Avançar & Preencher Briefing</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={handleCopySpec}
                  className="w-full py-2.5 px-4 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  {copiedSpec ? (
                    <>
                      <CheckCheck className="w-4 h-4 text-emerald-400" />
                      <span>Especificação Copiada!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copiar Especificação Técnica</span>
                    </>
                  )}
                </button>
              </div>

              <div className="mt-4 text-center">
                <span className="text-[11px] text-neutral-500">
                  Orçamento orientativo sem compromisso comercial.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
