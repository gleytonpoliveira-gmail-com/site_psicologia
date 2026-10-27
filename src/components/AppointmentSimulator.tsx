import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicalData';
import { MessageCircle, Check, Send, Sparkles } from 'lucide-react';

export const AppointmentSimulator: React.FC = () => {
  const [patientType, setPatientType] = useState<'adulto' | 'adolescente'>('adulto');
  const [demand, setDemand] = useState('Ansiedade e regulação emocional');
  const [modality, setModality] = useState<'online' | 'presencial'>('online');
  const [preferredShift, setPreferredShift] = useState('Qualquer período disponível');

  const demandsOptions = patientType === 'adulto' ? [
    'Ansiedade generalizada e crises de pânico',
    'Depressão, desânimo ou perda de sentido',
    'TDAH no adulto, desorganização e foco',
    'Burnout e sobrecarga profissional',
    'Conflitos em relacionamentos e limites',
    'Outra queixa emocional/comportamental'
  ] : [
    'Transtorno do Espectro Autista (TEA) / ABA',
    'TDAH, rendimento escolar e foco',
    'Ansiedade, medos e insegurança social',
    'Transtorno Opositor Desafiador (TOD)',
    'Dificuldades com limites e autorregulação',
    'Outra questão com adolescente'
  ];

  const generatedMessage = `Olá, Andréia Francisca! Gostaria de verificar disponibilidade para atendimento psicológico.

• Público: ${patientType === 'adulto' ? 'Adulto' : 'Adolescente'}
• Demanda principal: ${demand}
• Modalidade preferida: ${modality === 'online' ? 'Terapia Online' : 'Atendimento Presencial'}
• Melhor período: ${preferredShift}

Aguardo orientações sobre horários e valores. Obrigado(a)!`;

  const handleSendWhatsApp = () => {
    window.open(`https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodeURIComponent(generatedMessage)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 bg-white border-b border-[#e6ecec]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#8a6d0b] mb-2 flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Facilitador de Atendimento</span>
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#354f50] mb-3">
            Planeje seu primeiro contato com a psicóloga Andréia
          </h2>
          <p className="text-xs sm:text-sm text-[#5f6b7c]">
            Selecione suas preferências e envie uma mensagem direta e personalizada pelo WhatsApp com total sigilo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start bg-[#faf8f5] p-6 sm:p-8 rounded-3xl border border-[#e2e8f0] shadow-sm">
          {/* Options Column */}
          <div className="md:col-span-7 space-y-6">
            {/* Step 1: Audience */}
            <div>
              <label className="block text-xs font-bold text-[#354f50] mb-2">
                1. Quem receberá o atendimento?
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setPatientType('adulto');
                    setDemand('Ansiedade generalizada e crises de pânico');
                  }}
                  className={`p-3 rounded-xl border text-xs sm:text-sm font-semibold transition-all flex items-center justify-between ${
                    patientType === 'adulto'
                      ? 'bg-[#4a6b6c] text-white border-[#4a6b6c] shadow-xs'
                      : 'bg-white text-[#2d3748] border-[#d5dedd] hover:border-[#4a6b6c]/50'
                  }`}
                >
                  <span>Para Mim (Adulto)</span>
                  {patientType === 'adulto' && <Check className="w-4 h-4" />}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setPatientType('adolescente');
                    setDemand('Transtorno do Espectro Autista (TEA) / ABA');
                  }}
                  className={`p-3 rounded-xl border text-xs sm:text-sm font-semibold transition-all flex items-center justify-between ${
                    patientType === 'adolescente'
                      ? 'bg-[#4a6b6c] text-white border-[#4a6b6c] shadow-xs'
                      : 'bg-white text-[#2d3748] border-[#d5dedd] hover:border-[#4a6b6c]/50'
                  }`}
                >
                  <span>Para Adolescente</span>
                  {patientType === 'adolescente' && <Check className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Step 2: Demand selection */}
            <div>
              <label className="block text-xs font-bold text-[#354f50] mb-2">
                2. Qual a demanda ou motivo principal?
              </label>
              <select
                value={demand}
                onChange={(e) => setDemand(e.target.value)}
                className="w-full p-3 bg-white border border-[#d5dedd] rounded-xl text-xs sm:text-sm text-[#2d3748] focus:outline-none focus:ring-2 focus:ring-[#4a6b6c]/30 focus:border-[#4a6b6c]"
              >
                {demandsOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Step 3: Modality */}
            <div>
              <label className="block text-xs font-bold text-[#354f50] mb-2">
                3. Modalidade de preferência:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setModality('online')}
                  className={`p-3 rounded-xl border text-xs sm:text-sm font-semibold transition-all flex items-center justify-between ${
                    modality === 'online'
                      ? 'bg-[#4a6b6c] text-white border-[#4a6b6c] shadow-xs'
                      : 'bg-white text-[#2d3748] border-[#d5dedd] hover:border-[#4a6b6c]/50'
                  }`}
                >
                  <span>Online (Videochamada)</span>
                  {modality === 'online' && <Check className="w-4 h-4" />}
                </button>

                <button
                  type="button"
                  onClick={() => setModality('presencial')}
                  className={`p-3 rounded-xl border text-xs sm:text-sm font-semibold transition-all flex items-center justify-between ${
                    modality === 'presencial'
                      ? 'bg-[#4a6b6c] text-white border-[#4a6b6c] shadow-xs'
                      : 'bg-white text-[#2d3748] border-[#d5dedd] hover:border-[#4a6b6c]/50'
                  }`}
                >
                  <span>Presencial</span>
                  {modality === 'presencial' && <Check className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Step 4: Shift */}
            <div>
              <label className="block text-xs font-bold text-[#354f50] mb-2">
                4. Período de preferência:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {['Manhã', 'Tarde', 'Noite', 'Qualquer período'].map((shift) => (
                  <button
                    key={shift}
                    type="button"
                    onClick={() => setPreferredShift(shift)}
                    className={`py-2 px-3 text-xs font-medium rounded-lg border transition-colors ${
                      preferredShift === shift
                        ? 'bg-[#354f50] text-white border-[#354f50]'
                        : 'bg-white text-[#5f6b7c] border-[#d5dedd] hover:border-[#4a6b6c]'
                    }`}
                  >
                    {shift}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Live Message Preview */}
          <div className="md:col-span-5 bg-white p-5 sm:p-6 rounded-2xl border border-[#e2e8f0] shadow-sm flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#8a6d0b] uppercase tracking-wider mb-3">
                <MessageCircle className="w-4 h-4 text-[#1a9b4b]" />
                <span>Mensagem Pré-configurada</span>
              </div>

              <div className="p-4 bg-[#f0f4f4]/60 rounded-xl border border-[#d5dedd] text-xs text-[#2d3748] font-mono whitespace-pre-line leading-relaxed mb-4">
                {generatedMessage}
              </div>
            </div>

            <div>
              <button
                onClick={handleSendWhatsApp}
                className="w-full py-3.5 px-4 bg-[#1a9b4b] hover:bg-[#14793b] active:scale-98 text-white font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Abrir Conversa no WhatsApp</span>
              </button>
              <p className="text-[11px] text-[#5f6b7c] text-center mt-2">
                Você será direcionado diretamente ao número oficial da psicóloga.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
