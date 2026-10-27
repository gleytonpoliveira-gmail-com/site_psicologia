import React, { useState, useMemo } from 'react';
import { CLINICAL_DEMANDS, CLINIC_INFO, ClinicalDemand } from '../data/clinicalData';
import { Search, MessageCircle, ArrowRight, UserCheck, Users } from 'lucide-react';

export const ClinicalSpecialties: React.FC = () => {
  const [selectedAudience, setSelectedAudience] = useState<'todos' | 'adolescentes' | 'adultos'>('adolescentes');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDemands = useMemo(() => {
    return CLINICAL_DEMANDS.filter((demand) => {
      const matchesAudience = selectedAudience === 'todos' || demand.audience === selectedAudience;
      const matchesSearch =
        searchTerm.trim() === '' ||
        demand.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        demand.approach.toLowerCase().includes(searchTerm.toLowerCase()) ||
        demand.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        demand.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesAudience && matchesSearch;
    });
  }, [selectedAudience, searchTerm]);

  const handleConsultDemand = (demand: ClinicalDemand) => {
    const text = `Olá, Dra. Andréia! Gostaria de informações sobre atendimento psicológico voltado para "${demand.title}" (${demand.audience === 'adolescentes' ? 'Adolescente' : 'Adulto'}).`;
    window.open(`https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="especialidades" className="py-20 bg-[#f0f4f4]/60 border-b border-[#e6ecec]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#8a6d0b] mb-2">
            Áreas de Atuação Clínica
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#354f50] mb-4 text-balance">
            Demandas com maior evidência científica e eficácia comprovada
          </h2>
          <p className="text-base text-[#5f6b7c] leading-relaxed">
            Protocolos clínicos estruturados para o público adolescente e adulto, integrando os avanços da Terapia Cognitivo-Comportamental e Análise do Comportamento Aplicada.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 max-w-4xl mx-auto">
          {/* Segmented control buttons */}
          <div className="flex items-center gap-1 p-1 bg-white rounded-xl border border-[#d5dedd] shadow-2xs w-full sm:w-auto">
            <button
              onClick={() => setSelectedAudience('adolescentes')}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                selectedAudience === 'adolescentes'
                  ? 'bg-[#4a6b6c] text-white shadow-xs'
                  : 'text-[#5f6b7c] hover:text-[#2d3748]'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Adolescentes</span>
            </button>

            <button
              onClick={() => setSelectedAudience('adultos')}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                selectedAudience === 'adultos'
                  ? 'bg-[#4a6b6c] text-white shadow-xs'
                  : 'text-[#5f6b7c] hover:text-[#2d3748]'
              }`}
            >
              <UserCheck className="w-4 h-4" />
              <span>Adultos</span>
            </button>

            <button
              onClick={() => setSelectedAudience('todos')}
              className={`flex-1 sm:flex-initial px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all ${
                selectedAudience === 'todos'
                  ? 'bg-[#4a6b6c] text-white shadow-xs'
                  : 'text-[#5f6b7c] hover:text-[#2d3748]'
              }`}
            >
              Ver Todas
            </button>
          </div>

          {/* Quick symptom search */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-[#8a6d0b] absolute left-3.5 top-3 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar sintoma ou demanda..."
              className="w-full pl-9 pr-3.5 py-2 bg-white border border-[#d5dedd] rounded-xl text-xs sm:text-sm text-[#2d3748] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#4a6b6c]/30 focus:border-[#4a6b6c] transition-colors"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-2.5 text-xs text-[#9ca3af] hover:text-[#2d3748]"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Demands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDemands.map((demand) => (
            <article
              key={demand.id}
              className="bg-white p-6 sm:p-7 rounded-2xl border border-[#e2e8f0] shadow-xs hover:shadow-md hover:border-[#4a6b6c]/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xl font-bold font-mono text-[#d4af37]">
                    {demand.number}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8a6d0b] bg-[#faf8f5] px-2.5 py-0.5 rounded border border-[#e2e8f0]">
                    {demand.audience === 'adolescentes' ? 'Adolescentes' : 'Adultos'}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#354f50] leading-snug mb-1 group-hover:text-[#4a6b6c] transition-colors">
                  {demand.title}
                </h3>

                <p className="text-xs font-semibold uppercase tracking-wide text-[#8a6d0b] mb-3">
                  {demand.approach}
                </p>

                <p className="text-xs sm:text-sm text-[#5f6b7c] leading-relaxed mb-6">
                  {demand.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#f0f4f4] flex items-center justify-between">
                <span className="text-[11px] text-[#8a6d0b] font-medium">
                  {demand.tags.slice(0, 2).join(' · ')}
                </span>
                <button
                  onClick={() => handleConsultDemand(demand)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4a6b6c] hover:text-[#354f50] group-hover:translate-x-0.5 transition-all"
                  title={`Agendar conversa sobre ${demand.title}`}
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#1a9b4b]" />
                  <span>Consultar</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        {filteredDemands.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-[#e2e8f0]">
            <p className="text-sm text-[#5f6b7c] mb-3">
              Nenhuma demanda encontrada para o termo "{searchTerm}".
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedAudience('todos');
              }}
              className="text-xs font-semibold text-[#4a6b6c] underline"
            >
              Limpar busca e ver todas as especialidades
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
