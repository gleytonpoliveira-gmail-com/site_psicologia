import React, { useEffect, useState } from 'react';
import { CLINIC_INFO } from '../data/clinicalData';
import { ClinicBrandLogo } from './ClinicBrandLogo';
import { Eye, ShieldAlert } from 'lucide-react';

export const ClinicFooter: React.FC = () => {
  const [visitCount, setVisitCount] = useState<number>(1420);

  useEffect(() => {
    try {
      const storageKey = 'site_visit_counter_total';
      const sessionKey = 'site_visited_session';
      let total = parseInt(localStorage.getItem(storageKey) || '1420', 10);

      if (!sessionStorage.getItem(sessionKey)) {
        total += 1;
        localStorage.setItem(storageKey, total.toString());
        sessionStorage.setItem(sessionKey, 'active');
      }

      setVisitCount(total);
    } catch {
      // ignore
    }
  }, []);

  return (
    <footer className="bg-[#354f50] text-[#dbe3ea] pt-14 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-[#4a6b6c]">
          {/* Col 1 */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <ClinicBrandLogo variant="footer" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              {CLINIC_INFO.name}
            </h3>
            <p className="text-xs text-[#aab6c5] mb-2">
              {CLINIC_INFO.title} — {CLINIC_INFO.crp}
            </p>
            <p className="text-xs text-[#cbd5e1] max-w-md leading-relaxed mb-4">
              Psicoterapia Cognitivo-Comportamental (TCC) e Análise do Comportamento Aplicada (ABA) online para todo o Brasil e presencial.
            </p>

            {/* Visitor Counter */}
            <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full border border-white/15 text-xs text-[#cbd5e1]">
              <Eye className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Visitas ao site:</span>
              <strong className="text-white font-mono">{visitCount.toLocaleString('pt-BR')}</strong>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-3">Navegação</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#inicio" className="hover:text-white hover:underline">Início</a></li>
              <li><a href="#sobre" className="hover:text-white hover:underline">Sobre Mim</a></li>
              <li><a href="#especialidades" className="hover:text-white hover:underline">Especialidades</a></li>
              <li><a href="#processo" className="hover:text-white hover:underline">Como Funciona</a></li>
              <li><a href="#online" className="hover:text-white hover:underline">Terapia Online</a></li>
              <li><a href="#faq" className="hover:text-white hover:underline">Perguntas Frequentes</a></li>
            </ul>
          </div>

          {/* Col 3: Contato */}
          <div>
            <h4 className="text-sm font-bold text-white mb-3">Contato</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href={`https://wa.me/${CLINIC_INFO.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:underline"
                >
                  WhatsApp: {CLINIC_INFO.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={CLINIC_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:underline"
                >
                  Instagram: {CLINIC_INFO.instagram}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CLINIC_INFO.email}`}
                  className="hover:text-white hover:underline break-all"
                >
                  {CLINIC_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#aab6c5]">
          <p>© {new Date().getFullYear()} {CLINIC_INFO.name}. Todos os direitos reservados.</p>
          <div className="flex items-center gap-2 text-[11px] text-[#cbd5e1]">
            <ShieldAlert className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Atendimento em conformidade com o Código de Ética Profissional do Psicólogo (CFP).</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
