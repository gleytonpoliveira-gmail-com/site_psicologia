import React, { useState } from 'react';
import { FAQS } from '../data/clinicalData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const ClinicFAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-[#faf8f5] border-b border-[#e6ecec]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#8a6d0b] mb-2 flex items-center justify-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-[#d4af37]" />
            <span>Perguntas Frequentes</span>
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-[#354f50] mb-3">
            Dúvidas comuns sobre o atendimento
          </h2>
          <p className="text-sm text-[#5f6b7c]">
            Informações claras e transparentes para que você se sinta seguro antes de iniciar seu processo terapêutico.
          </p>
        </div>

        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIdx === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-[#e2e8f0] overflow-hidden transition-all shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-[#354f50] hover:text-[#4a6b6c] transition-colors focus-visible:outline-2 focus-visible:outline-[#4a6b6c]"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#8a6d0b] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-[#5f6b7c] leading-relaxed border-t border-[#f0f4f4] pt-4 animate-in fade-in duration-150">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
